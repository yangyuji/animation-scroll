# animation-scroll
A light &amp; tiny scroll script with animation effect and no dependancy

we can use the window.scrollTo like this:
#
```javasctript
  window.scrollTo({
    top: 1000,
    behavior: 'smooth', // smooth、instant、auto
  });
```
but it's not enough, may be you want to animation like easeInOut etc.

this script use like this:

```javasctript
  animationScroll(document.getElementById('floor6'), 400, function (el) {
    console.log(el);
  });
```
## preview
> * page[click here](https://yangyuji.github.io/animation-scroll/demo.html)
> * ![qrcode](https://github.com/yangyuji/animation-scroll/blob/master/qrcode.png)