/*
* author: "oujizeng",
* license: "MIT",
* name: "animation-scroll.js",
* github: "https://github.com/yangyuji/animation-scroll",
* version: "1.0.0"
*/

(function (root, factory) {
    if (typeof module != 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        root['animationScroll'] = factory();
    }
}(this, function () {
    'use strict'

    var _getTop = function(element, start) {
        if(element.nodeName === 'HTML') return -start
        return element.getBoundingClientRect().top + start
    }

    // ease in out
    var _easeInOutCubic = function (t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    var _getPosition = function(start, end, elapsed, duration) {
        if (elapsed > duration) return end;
        return start + (end - start) * _easeInOutCubic(elapsed / duration);  // easeInOut
        // return start + (end - start) * (elapsed / duration);              // linear
    }

    var animationScroll = function(el, duration, callback, context) {
        duration = duration || 500;
        context = context || window;

        var start = context.scrollTop || window.pageYOffset;

        if (typeof el === 'number') {
            var end = parseInt(el);
        } else {
            var end = _getTop(el, start);
        }

        var clock = new Date().getTime();

        var step = function(){
            var elapsed = new Date().getTime() - clock;
            if (context !== window) {
                context.scrollTop = _getPosition(start, end, elapsed, duration);
            }
            else {
                window.scroll(0, _getPosition(start, end, elapsed, duration));
            }

            if (elapsed > duration) {
                if (typeof callback === 'function') {
                    callback(el);
                }
            } else {
                window.requestAnimationFrame(step);
            }
        }
        step();
    }

    return animationScroll;
}));