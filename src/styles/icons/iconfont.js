!(function (t) {
  var e,
    o,
    a,
    c,
    n,
    l =
      '<svg><symbol id="icon-react-dashboard-arrowtop" viewBox="0 0 1024 1024"><path d="M512.197498 316.65801 865.895099 670.356634c18.73776 18.73776 18.73776 49.092092 0 67.828828s-49.092092 18.73776-67.828828 0L512.197498 452.316689 226.328725 738.185462c-18.73776 18.73776-49.092092 18.73776-67.828828 0s-18.73776-49.092092 0-67.828828L512.197498 316.65801z"  ></path></symbol><symbol id="icon-react-dashboard-arrowdown" viewBox="0 0 1024 1024"><path d="M512.197498 752.238526 158.499897 398.540925c-18.73776-18.73776-18.73776-49.092092 0-67.828828s49.092092-18.73776 67.828828 0l285.868773 285.868773 285.868773-285.868773c18.73776-18.73776 49.092092-18.73776 67.828828 0s18.73776 49.092092 0 67.828828L512.197498 752.238526z"  ></path></symbol><symbol id="icon-react-dashboard-arrowbottoml" viewBox="0 0 1024 1024"><path d="M512 624c-12.288 0-24.576-4.672-33.92-14.08l-256-256c-18.752-18.752-18.752-49.152 0-67.904s49.152-18.752 67.904 0L512 508.096l222.08-222.08c18.752-18.752 49.152-18.752 67.904 0s18.752 49.152 0 67.904l-256 256C536.576 619.328 524.288 624 512 624z"  ></path><path d="M832 768c0-35.392-28.608-64-64-64L256 704c-35.392 0-64 28.608-64 64l0 0c0 35.392 28.608 64 64 64l512 0C803.392 832 832 803.392 832 768L832 768z"  ></path></symbol><symbol id="icon-react-dashboard-arrowtopl" viewBox="0 0 1024 1024"><path d="M768 752c-12.288 0-24.576-4.672-33.92-14.08L512 515.904l-222.08 222.08c-18.752 18.752-49.152 18.752-67.904 0s-18.752-49.152 0-67.904l256-256c18.752-18.752 49.152-18.752 67.904 0l256 256c18.752 18.752 18.752 49.152 0 67.904C792.576 747.328 780.288 752 768 752z"  ></path><path d="M832 256c0 35.328-28.608 64-64 64L256 320C220.608 320 192 291.328 192 256l0 0c0-35.328 28.608-64 64-64l512 0C803.392 192 832 220.672 832 256L832 256z"  ></path></symbol><symbol id="icon-react-dashboard-delete" viewBox="0 0 1024 1024"><path d="M768 384c-19.2 0-32 12.8-32 32l0 377.6c0 25.6-19.2 38.4-38.4 38.4L326.4 832c-25.6 0-38.4-19.2-38.4-38.4L288 416C288 396.8 275.2 384 256 384S224 396.8 224 416l0 377.6c0 57.6 44.8 102.4 102.4 102.4l364.8 0c57.6 0 102.4-44.8 102.4-102.4L793.6 416C800 396.8 787.2 384 768 384z"  ></path><path d="M460.8 736l0-320C460.8 396.8 448 384 435.2 384S396.8 396.8 396.8 416l0 320c0 19.2 12.8 32 32 32S460.8 755.2 460.8 736z"  ></path><path d="M627.2 736l0-320C627.2 396.8 608 384 588.8 384S563.2 396.8 563.2 416l0 320C563.2 755.2 576 768 588.8 768S627.2 755.2 627.2 736z"  ></path><path d="M832 256l-160 0L672 211.2C672 166.4 633.6 128 588.8 128L435.2 128C390.4 128 352 166.4 352 211.2L352 256 192 256C172.8 256 160 268.8 160 288S172.8 320 192 320l640 0c19.2 0 32-12.8 32-32S851.2 256 832 256zM416 211.2C416 198.4 422.4 192 435.2 192l153.6 0c12.8 0 19.2 6.4 19.2 19.2L608 256l-192 0L416 211.2z"  ></path></symbol><symbol id="icon-react-dashboard-lock_fill" viewBox="0 0 1024 1024"><path d="M394.304 316.608A124.672 124.672 0 0 1 518.72 192a124.704 124.704 0 0 1 124.48 124.608V416h-248.896V316.608zM544 704a32 32 0 0 1-64 0v-128a32 32 0 0 1 64 0v128z m256.256-288H707.2V316.608A188.736 188.736 0 0 0 518.72 128c-103.904 0-188.416 84.608-188.416 188.608V416h-106.56A64 64 0 0 0 160 480.096v319.84A64 64 0 0 0 223.744 864h576.512A64 64 0 0 0 864 799.936v-319.84A64 64 0 0 0 800.256 416z"  ></path></symbol><symbol id="icon-react-dashboard-unlock" viewBox="0 0 1024 1024"><path d="M224 799.936v-319.84L223.744 480h124.832a31.488 31.488 0 0 0 13.728 3.392 31.36 31.36 0 0 0 13.696-3.36l424 0.064 0.256 319.904L224 799.936zM800.256 416H394.304V316.608A124.672 124.672 0 0 1 518.72 192a124.704 124.704 0 0 1 124.48 124.608 32 32 0 1 0 64 0A188.736 188.736 0 0 0 518.72 128c-103.904 0-188.416 84.608-188.416 188.608V416h-106.56A64 64 0 0 0 160 480.096v319.84A64 64 0 0 0 223.744 864h576.512A64 64 0 0 0 864 799.936v-319.84A64 64 0 0 0 800.256 416z"  ></path><path d="M512 544a32 32 0 0 0-32 32v128a32 32 0 0 0 64 0v-128a32 32 0 0 0-32-32"  ></path></symbol></svg>',
    d = (d = document.getElementsByTagName('script'))[d.length - 1].getAttribute('data-injectcss'),
    i = function (t, e) {
      e.parentNode.insertBefore(t, e);
    };
  if (d && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      );
    } catch (t) {
      console && console.log(t);
    }
  }
  function s() {
    n || ((n = !0), a());
  }
  function h() {
    try {
      c.documentElement.doScroll('left');
    } catch (t) {
      return void setTimeout(h, 50);
    }
    s();
  }
  (e = function () {
    var t,
      e = document.createElement('div');
    (e.innerHTML = l),
      (l = null),
      (e = e.getElementsByTagName('svg')[0]) &&
        (e.setAttribute('aria-hidden', 'true'),
        (e.style.position = 'absolute'),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = 'hidden'),
        (e = e),
        (t = document.body).firstChild ? i(e, t.firstChild) : t.appendChild(e));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(e, 0)
        : ((o = function () {
            document.removeEventListener('DOMContentLoaded', o, !1), e();
          }),
          document.addEventListener('DOMContentLoaded', o, !1))
      : document.attachEvent &&
        ((a = e),
        (c = t.document),
        (n = !1),
        h(),
        (c.onreadystatechange = function () {
          'complete' == c.readyState && ((c.onreadystatechange = null), s());
        }));
})(window);
