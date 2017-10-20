/* toolbar-1.0.0 cart.js Date:2016-11-17 18:06:41 */
define("TB_ROOT/js/cart", function (require, a, b) {
    var c = require("JDF_UNIT/js/login.js");
    var d = '    <div class="jtc-item-goods">        <span class="p-img">            <a href="//item.jd.com/${list.Id}.html" target="_blank" clstag="${toolbar.clsPageType}|keycount|cebianlan_${toolbar.clsPageType}_${name}|item">                <img src="${pageConfig.FN_GetImageDomain(list.Id)}n5/${list.ImgUrl}" width="50" height="50" alt="${list.Name}">            </a>        </span>        <div class="p-name">            <a href="//item.jd.com/${list.Id}.html" title="${list.Name}" target="_blank" clstag="${toolbar.clsPageType}|keycount|cebianlan_${toolbar.clsPageType}_${name}|item">${list.Name}</a>        </div>        <div class="p-price"><strong>&yen;${list.PromotionPrice.toFixed(2)}</strong>\xd7${list.Num}</div>        <a href="#none"             clstag="${toolbar.clsPageType}|keycount|cebianlan_${toolbar.clsPageType}_${name}|del"             class="p-del J-del"             data-cid="${list.Id}{if item.type!== "sku"&&item.type!=="gift"}|${prom.Id}{/if}"             data-action="${item.action}">\u5220\u9664</a>        {if parseInt(list.FanPrice)>0||parseInt(list.Score)>0||(list.CouponAD&&list.CouponAD.length>0)||(list.Gifts&&list.Gifts.length>0)}            <div class="p-gifts">                {if parseInt(list.FanPrice)>0}                    <p class="gift-item"><span class="hl-tag1">\u8fd4\u73b0\uff1a\uffe5${list.FanPrice}</span></p>                {/if}                {if parseInt(list.Score)>0}                    <p class="gift-item"><span class="hl-tag2">\u9001\u4eac\u8c46\uff1a${list.Score}</span></p>                {/if}                {for jq in list.CouponAD}                    <p class="gift-item">[\u8d60\u5238] \u8d60\u9001${jq.Jing}\u5143\u4eac\u5238 ${jq.LimitAd}</a></p>                {/for}                {for gift in list.Gifts}                    <p class="gift-item">                        <a href="//item.jd.com/${gift.Id}.html" target="_blank">                            [{if gift.Type==2}\u8d60\u54c1{/if}{if gift.Type==1}\u9644\u4ef6{/if}] ${gift.Name}                        </a>                    </p>                {/for}            </div>        {/if}    </div>';
    var e = '    <div class="jdm-tbar-cart-list">        {for item in proms}        {for prom in item.data}        <div class="jdm-tbar-cart-item" data-type="${item.type}">            {if item.tag}            <div class="jtc-item-promo">                <em class="promo-tag promo-${item.type}">${item.tag}<i class="arrow"></i></em>                {if prom.Name}                <div class="p-name">                    <a href="//item.jd.com/${prom.Id}.html" title="${prom.Name}" target="_blank">${prom.Name}</a>                </div>                {/if}                {if item.type=="mj"||item.type=="mz"}                <div class="promo-text">                {if item.type=="mj"}                    {if prom.ManFlag}                        \u5df2\u8d2d\u6ee1                        {if prom.ManNum>0}${prom.ManNum}\u4ef6{else}${prom.ManPrice}\u5143{/if}\uff0c\u5df2\u51cf${prom.JianPrice}\u5143                    {else}                        \u8d2d\u6ee1{if prom.ManNum>0}${prom.ManNum}\u4ef6{else}${prom.ManPrice}\u5143{/if}\uff0c\u5373\u53ef\u4eab\u53d7\u6ee1\u51cf\u4f18\u60e0                    {/if}                {/if}                {if item.type=="mz"}                    {if prom.ManFlag}                        \u5df2\u8d2d\u6ee1${prom.ManPrice}\u5143\uff0c\u60a8{if prom.ManGifts.length>0}\u5df2{else}\u53ef{/if}\u9886\u8d60\u54c1                    {else}                        \u8d2d\u6ee1${prom.ManPrice}\u5143\uff0c\u5373\u53ef\u9886\u53d6\u8d60\u54c1                    {/if}                {/if}                </div>                {/if}                <!--<div class="p-price"><strong>&yen;${(prom.PromotionPrice*prom.Num).toFixed(2)}</strong></div>-->            </div>            {/if}            {if item.type=="sku"||item.type=="gift"}                {var list = prom}                ' + d + "            {else}                {for list in prom.Skus}                    " + d + "                {/for}            {/if}        </div>        {/for}        {/for}    </div>";

    function f(a) {
        this.$el = a.$el || a.$content, this.$footer = a.$footer, this.name = "cart", this.init()
    }

    f.prototype = {
        init: function () {
            var a = '            <div id="J-cart-tips" class="jdm-tbar-tipbox hide">                <div class="tip-inner">                    <span class="tip-text">\u8fd8\u6ca1\u6709\u767b\u5f55\uff0c\u767b\u5f55\u540e\u5546\u54c1\u5c06\u88ab\u4fdd\u5b58</span>                    <a href="#none" class="tip-btn J-login">\u767b\u5f55</a>                </div>            </div>            <div id="J-cart-render">            </div>';
            var b = '            <div class="jdm-tbar-checkout">    			<div class="jtc-number"><strong class="J-count">0</strong>\u4ef6\u5546\u54c1</div>    			<div class="jtc-sum">\u5171\u8ba1\uff1a<strong class="J-total">\xa5</strong></div>    			<a class="jtc-btn J-btn" href="#none" target="_blank" clstag="${toolbar.clsPageType}|keycount|cebianlan_${toolbar.clsPageType}_${name}|gotocart">\u53bb\u8d2d\u7269\u8f66\u7ed3\u7b97</a>    		</div>';
            this._toolbar = pageConfig.toolbar.settings, this.$el.html(a), this.$footer.html(b.process({
                toolbar: this._toolbar,
                name: this.name
            })), this.$render = this.$el.find("#J-cart-render"), this.$tips = this.$el.find("#J-cart-tips"), this.bindEvent(), this.get(), this.checkLogin()
        }, checkLogin: function () {
            var a = this;
            c.isLogin(function (b) {
                b ? a.$tips.hide() : a.$tips.show()
            })
        }, bindEvent: function () {
            var a = this;
            this.$el.undelegate().delegate(".J-del", "click", function () {
                var b = {};
                var c = $(this).attr("data-action");
                var d = $(this).attr("data-cid").split("|");
                var e = d[0];
                var f = d[1];
                b = {method: c, cartId: e}, void 0 !== f && (b.targetId = f), a.get(b)
            }), this.$el.delegate(".J-login", "click", function () {
                a.handleLogin()
            }), pageConfig.toolbar.eventDispatcher.bind(this.name + "PanelOpen", function () {
                a.get(), c.isLogin(function (b) {
                    b ? a.$tips.hide() : a.$tips.show()
                })
            })
        }, handleLogin: function () {
            var a = this;
            c({
                modal: !0, complete: function () {
                    a.init()
                }
            })
        }, get: function (a) {
            var b = this;
            $.ajax({
                url: "//localhost:8017/cart/miniCartServiceNew.action",
                data: a,
                dataType: "jsonp",
                success: function (c) {
                    "undefined" == typeof a ? c && c.Cart && b.set(c.Cart) : b.del(a)
                }
            })
        }, set: function (a) {
            var b = this.rebuildResult(a);
            b.name = this.name, b.toolbar = this._toolbar, b.count > 0 ? this.$render.html(e.process(b)) : pageConfig.toolbar.setStatus(this.$render, '\u8d2d\u7269\u8f66\u7a7a\u7a7a\u7684\uff0c\u8d76\u5feb\u53bb\u6311\u9009\u5fc3\u4eea\u7684\u5546\u54c1\u5427~<br><a clstag="' + this._toolbar.clsPageType + "|keycount|cebianlan_" + this._toolbar.clsPageType + "_" + this.name + '|gohome" href="//www.jd.com/">\u53bb\u9996\u9875\u770b\u770b</a>'), this.updateInfo(a), pageConfig.toolbar.setBubbleCount(this.name, a.Num), pageConfig.toolbar.updateLayout()
        }, del: function () {
            this.get()
        }, updateInfo: function (a) {
            var b = this.$footer.find(".J-count");
            var c = this.$footer.find(".J-total");
            var d = this.$footer.find(".J-btn");
            b.html(a.Num), c.html("\uffe5" + a.TotalPromotionPrice.toFixed(2)), d.attr("href", "//cart.jd.com/cart.action?r=" + Math.random())
        }, rebuildResult: function (a) {
            var b = 0;
            var c = {count: 0, proms: []};
            if (a.TheGifts && a.TheGifts.length > 0) for (var d = 0; d < a.TheGifts.length; d++) a.TheGifts[d].Gifts = a.TheGifts[d].Skus, a.TheGifts[d].ImgUrl = a.TheGifts[d].MainSKU.ImgUrl, a.TheGifts[d].Name = a.TheGifts[d].MainSKU.Name;
            for (var e in a) if (a.hasOwnProperty(e)) {
                var f = {data: a[e]};
                "TheSkus" === e && (f.type = "sku", f.action = "RemoveProduct"), "TheGifts" === e && (f.type = "gift", f.action = "RemoveProduct"), "TheSuit" === e && (f.tag = "\u5957\u88c5", f.type = "suit", f.action = "RemoveSuit"), "ManJian" === e && (f.tag = "\u6ee1\u51cf", f.type = "mj", f.action = "RemoveSuit"), "ManZeng" === e && (f.tag = "\u6ee1\u8d60", f.type = "mz", f.action = "RemoveSuit"), f.type ? (c.proms.push(f), a[e].length > 0 && (b += a[e].length)) : c[e] = a[e]
            }
            return c.count = b, c
        }
    }, b.exports = f
});
