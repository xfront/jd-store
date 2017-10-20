/* jdf-1.0.0/ setUserInfo.js Date:2017-02-16 10:27:34 */
define("//localhost:8103/js/setUserInfo.js", ["//localhost:8103/js/switchable.js", "//localhost:8103/js/dropdown.js"], function (require) {
    require("//localhost:8103/js/switchable.js");
    require("//localhost:8103/js/dropdown.js");
    var e = function (a) {
        a = $.extend({el: $("#loginbar,#ttbar-login"), callback: null}, a || {});
        var b = function () {
            return "https:" == document.location.protocol ? "https://" : "http://"
        };
        var c = '<div class="dt cw-icon">						<i class="icon-plus-nickname"></i>	                    <i class="ci-right"><s>\u25c7</s></i>	                    <a class="nickname" target="_blank" href="//home.jd.com/"></a>		            </div>		            <div class="dd dorpdown-layer"></div>';
        $.ajax({
            url: b() + "passport.jd.com/new/helloService.ashx",
            dataType: "jsonp",
            scriptCharset: "GBK",
            success: function (b) {
                if (!b) return !1;
                b.nick ? (a.el.addClass("dorpdown"), a.el.html(c), a.el.find(".nickname").html(b.nick), a.el.find(".dd").html('<div class="dd-spacer"></div><div class="dd-inner"><span class="loading"></span></div>'), e(), a.el.dropdown({
                    enterDelay: 100,
                    trigger: !0,
                    current: "hover",
                    onchange: function () {
                    }
                })) : a.el.html(b.info);
                var d = function () {
                    clearTimeout(f), $.isFunction(a.callback) && a.callback(b), d = $.noop
                };
                var f = setTimeout(function () {
                    d()
                }, 2e3);
                if (b.sso) {
                    var g = b.sso.length;
                    $.each(b.sso, function (a, b) {
                        $.getJSON(b).complete(function () {
                            0 == --g && d()
                        })
                    })
                } else d()
            }
        });

        function d(a) {
            var b = "//misc.360buyimg.com/lib/img/e/blank.gif";
            var c = '<div class="u-plus"><a href="https://passport.jd.com/uc/login?ltype=logout" class="link-logout">\u9000\u51fa</a><a href="https://plus.jd.com/index" target="_blank" class="icon-plus-dropdown"></a></div>';
            var d = '				<div class="dd-spacer"></div>				<div class="userinfo">					<div class="u-pic"><a target="_blank" href="//home.jd.com/"><img src="' + b + '" width="60" height="60" /></a></div>' + c + '					<div class="u-msg"></div>				</div>			';
            var e = ["", '<div class="badge-panel fore2"><a href="//vip.jd.com/help.html#mypri-01" target="_blank"><i></i><p class="u-name">\u81ea\u8425\u514d\u8fd0\u8d39</p></a></div>				<div class="badge-panel fore3"><a href="//vip.jd.com/help.html#mypri-02" target="_blank"><i></i><p class="u-name">\u552e\u540e\u670d\u52a1</p></a></div>				<div class="badge-panel fore4"><a href="//vip.jd.com/help.html#mypri-03" target="_blank"><i></i><p class="u-name">\u8bc4\u4ef7\u5956\u52b1</p></a></div>				<div class="badge-panel fore8"><a href="//vip.jd.com/help.html#mypri-06" target="_blank"><i></i><p class="u-name">\u88c5\u673a\u670d\u52a1</p></a></div>				<div class="badge-panel fore5 u-dis"><a href="//vip.jd.com/help.html#mypri-04" target="_blank"><i></i><p class="u-name">\u4f1a\u5458\u7279\u4ef7</p></a></div>				<div class="badge-panel fore6 u-dis"><a href="//vip.jd.com/help.html#mypri-05" target="_blank"><i></i><p class="u-name">\u751f\u65e5\u793c\u5305</p></a></div>				<div class="badge-panel fore7 u-dis"><a href="//vip.jd.com/help.html#mypri-07" target="_blank"><i></i><p class="u-name">\u4e13\u4eab\u793c\u5305</p></a></div>				<div class="badge-panel fore9 u-dis"><a href="//vip.jd.com/help.html#mypri-08" target="_blank"><i></i><p class="u-name">\u8d35\u5bbe\u4e13\u7ebf</p></a></div>				<div class="badge-panel fore10 u-dis"><a href="//vip.jd.com/help.html#mypri-09" target="_blank"><i></i><p class="u-name">\u8fd0\u8d39\u5238</p></a></div>', '<div class="badge-panel fore2"><a href="//vip.jd.com/help.html#mypri-01" target="_blank"><i></i><p class="u-name">\u81ea\u8425\u514d\u8fd0\u8d39</p></a></div>				<div class="badge-panel fore3"><a href="//vip.jd.com/help.html#mypri-02" target="_blank"><i></i><p class="u-name">\u552e\u540e\u670d\u52a1</p></a></div>				<div class="badge-panel fore4"><a href="//vip.jd.com/help.html#mypri-03" target="_blank"><i></i><p class="u-name">\u8bc4\u4ef7\u5956\u52b1</p></a></div>				<div class="badge-panel fore5"><a href="//vip.jd.com/help.html#mypri-04" target="_blank"><i></i><p class="u-name">\u4f1a\u5458\u7279\u4ef7</p></a></div>				<div class="badge-panel fore8"><a href="//vip.jd.com/help.html#mypri-06" target="_blank"><i></i><p class="u-name">\u88c5\u673a\u670d\u52a1</p></a></div>				<div class="badge-panel fore6 u-dis"><a href="//vip.jd.com/help.html#mypri-05" target="_blank"><i></i><p class="u-name">\u751f\u65e5\u793c\u5305</p></a></div>				<div class="badge-panel fore7 u-dis"><a href="//vip.jd.com/help.html#mypri-07" target="_blank"><i></i><p class="u-name">\u4e13\u4eab\u793c\u5305</p></a></div>				<div class="badge-panel fore9 u-dis"><a href="//vip.jd.com/help.html#mypri-08" target="_blank"><i></i><p class="u-name">\u8d35\u5bbe\u4e13\u7ebf</p></a></div>				<div class="badge-panel fore10 u-dis"><a href="//vip.jd.com/help.html#mypri-09" target="_blank"><i></i><p class="u-name">\u8fd0\u8d39\u5238</p></a></div>', '<div class="badge-panel fore2"><a href="//vip.jd.com/help.html#mypri-01" target="_blank"><i></i><p class="u-name">\u81ea\u8425\u514d\u8fd0\u8d39</p></a></div>				<div class="badge-panel fore3"><a href="//vip.jd.com/help.html#mypri-02" target="_blank"><i></i><p class="u-name">\u552e\u540e\u670d\u52a1</p></a></div>				<div class="badge-panel fore4"><a href="//vip.jd.com/help.html#mypri-03" target="_blank"><i></i><p class="u-name">\u8bc4\u4ef7\u5956\u52b1</p></a></div>				<div class="badge-panel fore5"><a href="//vip.jd.com/help.html#mypri-04" target="_blank"><i></i><p class="u-name">\u4f1a\u5458\u7279\u4ef7</p></a></div>				<div class="badge-panel fore6"><a href="//vip.jd.com/help.html#mypri-05" target="_blank"><i></i><p class="u-name">\u751f\u65e5\u793c\u5305</p></a></div>				<div class="badge-panel fore8"><a href="//vip.jd.com/help.html#mypri-06" target="_blank"><i></i><p class="u-name">\u88c5\u673a\u670d\u52a1</p></a></div>				<div class="badge-panel fore7 u-dis"><a href="//vip.jd.com/help.html#mypri-07" target="_blank"><i></i><p class="u-name">\u4e13\u4eab\u793c\u5305</p></a></div>				<div class="badge-panel fore9 u-dis"><a href="//vip.jd.com/help.html#mypri-08" target="_blank"><i></i><p class="u-name">\u8d35\u5bbe\u4e13\u7ebf</p></a></div>				<div class="badge-panel fore10 u-dis"><a href="//vip.jd.com/help.html#mypri-09" target="_blank"><i></i><p class="u-name">\u8fd0\u8d39\u5238</p></a></div>', '<div class="badge-panel fore2"><a href="//vip.jd.com/help.html#mypri-01" target="_blank"><i></i><p class="u-name">\u81ea\u8425\u514d\u8fd0\u8d39</p></a></div>				<div class="badge-panel fore3"><a href="//vip.jd.com/help.html#mypri-02" target="_blank"><i></i><p class="u-name">\u552e\u540e\u670d\u52a1</p></a></div>				<div class="badge-panel fore4"><a href="//vip.jd.com/help.html#mypri-03" target="_blank"><i></i><p class="u-name">\u8bc4\u4ef7\u5956\u52b1</p></a></div>				<div class="badge-panel fore5"><a href="//vip.jd.com/help.html#mypri-04" target="_blank"><i></i><p class="u-name">\u4f1a\u5458\u7279\u4ef7</p></a></div>				<div class="badge-panel fore6"><a href="//vip.jd.com/help.html#mypri-05" target="_blank"><i></i><p class="u-name">\u751f\u65e5\u793c\u5305</p></a></div>				<div class="badge-panel fore7"><a href="//vip.jd.com/help.html#mypri-07" target="_blank"><i></i><p class="u-name">\u4e13\u4eab\u793c\u5305</p></a></div>				<div class="badge-panel fore8"><a href="//vip.jd.com/help.html#mypri-06" target="_blank"><i></i><p class="u-name">\u88c5\u673a\u670d\u52a1</p></a></div>				<div class="badge-panel fore9 u-dis"><a href="//vip.jd.com/help.html#mypri-08" target="_blank"><i></i><p class="u-name">\u8d35\u5bbe\u4e13\u7ebf</p></a></div>				<div class="badge-panel fore10 u-dis"><a href="//vip.jd.com/help.html#mypri-09" target="_blank"><i></i><p class="u-name">\u8fd0\u8d39\u5238</p></a></div>', '<div class="badge-panel fore2"><a href="//vip.jd.com/help.html#mypri-01" target="_blank"><i></i><p class="u-name">\u81ea\u8425\u514d\u8fd0\u8d39</p></a></div>				<div class="badge-panel fore3"><a href="//vip.jd.com/help.html#mypri-02" target="_blank"><i></i><p class="u-name">\u552e\u540e\u670d\u52a1</p></a></div>				<div class="badge-panel fore4"><a href="//vip.jd.com/help.html#mypri-03" target="_blank"><i></i><p class="u-name">\u8bc4\u4ef7\u5956\u52b1</p></a></div>				<div class="badge-panel fore5"><a href="//vip.jd.com/help.html#mypri-04" target="_blank"><i></i><p class="u-name">\u4f1a\u5458\u7279\u4ef7</p></a></div>				<div class="badge-panel fore6"><a href="//vip.jd.com/help.html#mypri-05" target="_blank"><i></i><p class="u-name">\u751f\u65e5\u793c\u5305</p></a></div>				<div class="badge-panel fore7"><a href="//vip.jd.com/help.html#mypri-07" target="_blank"><i></i><p class="u-name">\u4e13\u4eab\u793c\u5305</p></a></div>				<div class="badge-panel fore8"><a href="//vip.jd.com/help.html#mypri-06" target="_blank"><i></i><p class="u-name">\u88c5\u673a\u670d\u52a1</p></a></div>				<div class="badge-panel fore9"><a href="//vip.jd.com/help.html#mypri-08" target="_blank"><i></i><p class="u-name">\u8d35\u5bbe\u4e13\u7ebf</p></a></div>				<div class="badge-panel fore10"><a href="//vip.jd.com/help.html#mypri-09" target="_blank"><i></i><p class="u-name">\u8fd0\u8d39\u5238</p></a></div>'];
            var f = '<div class="badge-list">								<a href="javascript:void(0);" class="badge-list-prev">&lt;</a>								<div class="u-badges">									<div class="badge-panel-main">										<div class="badge-panel fore1"><a href="https://plus.jd.com/index" target="_blank"><i></i><p class="u-name">\u514d\u8d39\u8bd5\u7528</p></a></div>' + e[a] + '</div>								</div>								<a href="javascript:void(0);" class="badge-list-next">&gt;</a>							</div>';
            return d += f
        }

        function e() {
            $.ajax({
                url: "//i.jd.com/user/petName/getUserInfoForMiniJd.action",
                dataType: "jsonp",
                success: function (b) {
                    if (b) {
                        var c = b.userLevel;
                        var e = parseInt(b.plusStatus);
                        c || (c = 1);
                        var f = d(c);
                        a.el.find(".dd").html(f), b.imgUrl && a.el.find(".u-pic img").attr("src", b.imgUrl), $(".badge-list").switchable({
                            type: "slider",
                            mainClass: "badge-panel",
                            contentClass: "badge-panel-main",
                            prevClass: "badge-list-prev",
                            nextClass: "badge-list-next",
                            step: 2,
                            hasPage: !0
                        });
                        var g = a.el.find(".u-msg");
                        var h = a.el.find(".badge-panel-main .fore1");
                        switch (e >= 1 && 4 >= e && (a.el.find(".dt").addClass("icon-plus-state" + e), a.el.find(".dd").addClass("icon-plus-state" + e)), e) {
                            case 1:
                                g.html('<a href="https://plus.jd.com/index" target="_blank">\u8d2d\u4e70PLUS\u4f1a\u5458\u4eab\u66f4\u591a\u7279\u6743 <span class="style-red">\u8d2d\u4e70</span></a>'), h.find(".u-name").html("\u5f00\u901a\u6b63\u5f0f\u7248");
                                break;
                            case 2:
                                g.html('<a href="https://plus.jd.com/index" target="_blank">\u8d2d\u4e70PLUS\u4f1a\u5458\u5c0a\u4eab\u9876\u7ea7\u7279\u6743&gt;</a>'), h.find(".u-name").html("\u5f00\u901a\u6b63\u5f0f\u7248"), h.addClass("u-dis");
                                break;
                            case 3:
                                g.html('<a href="https://sale.jd.com/act/Xno3MQRklCIm.html" target="_blank">PLUS\u4e13\u4eab\u5546\u54c1\u6bcf\u5468\u66f4\u65b0&gt;</a>'), h.find(".u-name").html("PLUS\u4e13\u4eab");
                                break;
                            case 4:
                                g.html('<a href="https://plus.jd.com/index" target="_blank">\u7eed\u8d39PLUS\u9001150\u5143\u793c\u5305 <span class="style-red">\u7eed\u8d39</span></a>'), h.find(".u-name").html("PLUS\u7eed\u8d39"), h.addClass("u-dis");
                                break;
                            default:
                                g.html('<a href="https://plus.jd.com/index" target="_blank">\u8bd5\u7528PLUS\u4f1a\u5458\u9886\u514d\u8fd0\u8d39\u5238&gt;</a>'), h.addClass("u-dis")
                        }
                    }
                }
            })
        }
    };
    return e
});
