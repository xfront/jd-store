/*!Name: ie6Tip.js
 * Date: 2017-2-14 17:14:17 */
define("MOD_ROOT/js/ie6Tip", function (require, exports, module) {
    function i() {
        this.dialog1 = $("body").dialog({
            width: 690,
            height: 320,
            title: "\u5b89\u5168\u63d0\u793a",
            type: "html",
            source: a
        })
    }

    function t() {
        i()
    }

    var a = (require("JDF_UI/js/dialog"), '    <div id="ie6tip">        <div class="left-con">            <div></div>        </div>        <div class="right-con">            <div class="tip1">\u60a8\u7684\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\uff0c\u53ef\u80fd\u5b58\u5728\u5b89\u5168\u98ce\u9669</div>            <div class="tip2">\u5efa\u8bae\u60a8\u4f7f\u7528\u4ee5\u4e0b\u6d4f\u89c8\u5668\uff1a</div>            <ul class="clearfix">                <li class="chrome">                    <a class="img" href="http://www.google.cn/chrome/browser" target="_blank"></a>                    <div class="title">\u8c37\u6b4c\u6d4f\u89c8\u5668</div>                    <div class="btn"><a href="http://www.google.cn/chrome/browser" target="_blank">\u4e0b\u8f7d</a></div>                </li>                <li class="qq">                    <a class="img" href="http://browser.qq.com" target="_blank"></a>                    <div class="title">QQ\u6d4f\u89c8\u5668</div>                    <div class="btn"><a href="http://browser.qq.com" target="_blank">\u4e0b\u8f7d</a></div>                </li>                <li class="ie">                    <a class="img" href="http://www.microsoft.com/zh-cn/download/internet-explorer.aspx" target="_blank"></a>                    <div class="title">IE\u6d4f\u89c8\u5668</div>                    <div class="btn"><a href="http://www.microsoft.com/zh-cn/download/internet-explorer.aspx" target="_blank">\u4e0b\u8f7d</a></div>                </li>            </ul>        </div>    </div>');
    module.exports.__id = "ie6Tip", exports.init = t
});
