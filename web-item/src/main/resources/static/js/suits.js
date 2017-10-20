/*!Name: suits.js
 * Date: 2017-2-14 17:14:18 */
define("MOD_ROOT/js/suits", function (require, exports, module) {
    function t(t) {
        var a = {
            item: '            <div class="item" data-pid="{0}">                <a href="#none" class="title"                     data-drop="head"                     data-pid="{0}"                     clstag="shangpin|keycount|product|xuanzetaozhuang_{1}">{2}</a>                <div class="suits-panel J-suits-panel"></div>            </div>',
            colorAttr: '            {for attr in list}                {if attr.attr=="color" && attr.data.length>0}                <div class="p-pic J-p-pic" data-type="${attr.attr}" data-value="${attr.data[0]}">                    <a href="#none" class="sprite-arrowL J-thumb-prev"></a>                    <a href="#none" class="sprite-arrowR J-thumb-next"></a>                    <div class="J-thumb-scroll thumb-scroll-wrap">                        <ul class="pic-list">                            {for color in attr.data}                            <li class="inner-list {if Number(color_index)==0} current{/if}" data-attr="${color}" data-imgsrc="${colorMap[color]}">                                <a href="#none"><img title="${color}" width="20" height="20" src="//img10.360buyimg.com/n1/s20x20_${colorMap[color]}" alt="${color}"/></a>                            </li>                            {/for}                        </ul>                    </div>                </div>                {else}                    {if attr.data.length}                    <select class="J-attr-check yb-item-cat" data-open="false" data-type="${attr.attr}" data-value="${attr.data[0]}">                        {for item in attr.data}                            <option value="${item}" title="${item}">${item}</option>                        {/for}                    </select>                    {/if}                {/if}            {/for}',
            packList: '            <div class="suits-box"">                <div class="J-scroll">                <ul class="lh clearfix">                    {for pool in poolList}                    {var isLastItem = Number(pool_index)+1==poolList.length}                    {var currItem = pool.colorList[0]}                    <li {if pool.colorList.length>3} data-scroll="true"{/if} class="J-sku-item sku-item {if isLastItem} last{/if} "                        data-push="${pageConfig.SKU_suits.push(currItem.skuId)}">                        <div class="p-img J-p-img">                            <a href="//item.jd.com/${currItem.skuId}.html" target="_blank">                                {if currItem.skuPicUrl}                                <img width="100" height="100" src="${pageConfig.FN_GetImageDomain(currItem.skuId)}n1/s100x100_${currItem.skuPicUrl}">                                {/if}                            </a>                            <div class="no-stock J-no-stock hide">${areaName}\u65e0\u8d27</div>                            <div class="no-item J-no-item hide">\u65e0\u6b64\u7ec4\u5408\u5546\u54c1</div>                        </div>                        <div class="J-attrs"></div>                        <div class="p-name J-p-name">                            <a href="//item.jd.com/${currItem.skuId}.html" target="_blank">${currItem.skuName}</a>                        </div>                        <div class="p-check-price-num">                            {if typeof pool.selectState!="undefined"&&pool.selectState!=1}<input type="checkbox" class="p-checkbox J-choose"/>{/if}                            {if typeof packType!="undefined"&&packType==6&&pageConfig.product.cat[2]==798}                                <strong class="p-price">\uffe5${parseFloat(currItem.finalPrice).toFixed(2)}</strong>                            {/if}                            {if typeof currItem.count!="undefined"&&currItem.count>1}<span class="J-count p-count">\xd7${currItem.count}</span>{/if}                            {if typeof pool.num!="undefined"&&pool.num>1}<span class="J-count p-count">\xd7${pool.num}</span>{/if}                        </div>                        <i class="plus">+</i>                    </li>                    {/for}                </ul>                </div>                {if poolList.length>3}                <a href="javascript:;" class="J-arrow arrow-prev disabled"><i class="sprite-arrow-prev"></i></a>                <a href="javascript:;" class="J-arrow arrow-next disabled"><i class="sprite-arrow-next"></i></a>                {/if}            </div>            <div class="suits-detail">                <div class="price-box">                    <div class="suits-price J-suits-price">                        <span class="text">\u5957\u88c5\u4ef7\uff1a</span>                        <span class="p-price">                            <strong {if suitType==1} class="J-p-${packId}"{/if}>\uffe5${parseFloat(packPromotionPrice).toFixed(2)}</strong>                        </span>                    </div>                    {var isHideSavePrice = typeof packType=="undefined" || packType!=6}                    <div class="suits-save-price J-suits-save-price {if isHideSavePrice} hide {/if}">                        <span class="text">\u8282\u7701</span><span class="p-price">                            <strong>{if typeof baseSuitDiscount!="undefined"}\uffe5${parseFloat(baseSuitDiscount).toFixed(2)}{/if}</strong>                        </span>                    </div>                </div>                <div class="btns">                    <a href="#none" class="btn-primary J-btn" clstag="shangpin|keycount|product|xuanzetaozhuang_button">\u8d2d\u4e70\u5957\u88c5</a>                </div>                <div class="suits-tips fr hl_red hide">\u5957\u88c5\u5185\u90e8\u5206\u5546\u54c1\u65e0\u8d27</div>            </div>'
        };
        return a[t]
    }

    function a(t) {
        var a = $("#choose-suits");
        r.init(a, t)
    }

    var e = require("MOD_ROOT/js/event").Event, i = require("MOD_ROOT/js/tools"),
        s = (require("MOD_ROOT/js/core"), require("MOD_ROOT/js/area"));
    require("MOD_ROOT/js/EDropdown"), require("PLG_ROOT/js/jQuery.imgScroll");
    var r = {
        init: function (t, a) {
            var e = this;
            e.$el = t || $("#choose-suits"), e.packList = [], e.cfg = a, e.packData = {}, e.$el.length && (e.getData(), e.bindEvent(), e.isInited = !0)
        }, getData: function () {
            var t = this;
            $.ajax({
                url: "//c.3.cn/recommend",
                data: {
                    sku: t.cfg.skuid,
                    cat: t.cfg.cat.join(","),
                    area: i.getAreaId().areaIds.join("_"),
                    methods: "suitv2",
                    count: 6
                },
                scriptCharset: "gbk",
                dataType: "jsonp",
                success: $.proxy(t.handleData, t)
            })
        }, rePos: function (t) {
            var a = t.find(".J-suits-panel");
            a.css("top", t.position().top + t.height() - 1)
        }, bindEvent: function () {
            var t = this;
            t.isInited || (t.$el.undelegate(), $(document).bind("click.suit", $.proxy(t.handleDocumentClick, t)), t.$el.delegate(".item [data-pid]", "click", $.proxy(t.handleClick, t)), t.$el.delegate(".J-thumb-scroll li", "click", $.proxy(t.handleColorClick, t)), t.$el.delegate(".J-attr-check", "change", $.proxy(t.handleAttrClick, t)), t.$el.delegate(".J-choose", "change", $.proxy(t.handleChooseClick, t)), e.addListener("onHeYueReady", function () {
                var a = t.cfg.isHeYue;
                a ? t.$el.hide() : t.$el.find(".item").length > 0 && t.$el.show()
            }), e.addListener("onAreaChange", function () {
                r.init(t.$el, t.cfg)
            }))
        }, handleData: function (t) {
            var a = this;
            return t && 200 == t.suit.status && t.suit.data.packList && t.suit.data.packList.length ? void a.renderItem(t.suit.data) : (a.$el.find(".dd").empty(), a.$el.hide(), !1)
        }, handleDocumentClick: function (t) {
            var a = this;
            $(t.target).parents(".choose-suits").length < 1 && ($.browser.isIE7() || a.$el.find(".item").removeClass("open"))
        }, handleClick: function (t) {
            var a = this, e = $(t.target), i = e.data("pid"), s = e.parents(".item");
            return s.hasClass("open") ? void s.removeClass("open") : (this.$el.find(".item").removeClass("open"), s.addClass("open"), this.$currSuit = e.next(".J-suits-panel"), e.data("loaded") || (this.setSuitContent(i), e.data("loaded", !0)), void a.rePos(s))
        }, renderItem: function (a) {
            var e = this, i = "", s = t("item");
            e.data = a;
            for (var r = a.packList, n = 0; n < r.length; n++) {
                var o = r[n], c = "";
                c = 1 == a.original ? "\u4f18\u60e0\u5957\u88c5" + (n + 1) : o.packName, i += s.format(o.packId, e.cfg.cat[2], c);
                var l = "";
                if (6 == o.packType && o.suitSkuPriceList) for (var d = 0; d < o.suitSkuPriceList.length; d++) {
                    var u = o.suitSkuPriceList[d];
                    u.skuId == a.mainSkuId && (l = u.finalPrice)
                }
                1 != o.suitType && o.poolList.unshift({
                    selectState: 1,
                    colorList: [{skuPicUrl: a.mainSkuPicUrl, skuName: a.mainSkuName, skuId: a.mainSkuId, finalPrice: l}]
                }), o.poolList.sort(function (t, a) {
                    return t.selectState ? t.selectState - a.selectState : 1
                }), e.packData[o.packId] = o
            }
            e.$el.find(".dd").html(i), e.$el.show()
        }, handleAttrData: function (t) {
            function a(t, a) {
                var e = "\u2299", i = e + t.join(e) + e, s = e + a + e;
                return i.indexOf(s) > -1
            }

            for (var e = t.attrSheme, i = t.colorMap, s = t.colorList, r = 0; r < s.length; r++) {
                var n = s[r];
                i[n.color] = n.skuPicUrl;
                for (var o = 0; o < e.length; o++) {
                    var c = e[o].attr, l = n[c];
                    e[o].data || (e[o].data = []), l && !a(e[o].data, l) && e[o].data.push(l)
                }
            }
        }, handleColorClick: function (t) {
            var a = this, e = $(t.currentTarget), i = e.data("attr"), s = e.data("imgsrc");
            e.parent().find("li").removeClass("current"), e.addClass("current");
            var r = e.parents(".J-sku-item"), n = r.find(".J-p-img img");
            n.attr("src", "//img10.360buyimg.com/n1/s100x100_" + s), e.parents(".J-p-pic").attr("data-value", i);
            var o = e.parents(".item"), c = a.getEqualObjBySkuItem(r);
            c ? (r.find(".J-p-img a").attr("href", "//item.jd.com/" + c.skuId + ".html").attr("target", "_blank").removeClass("disabled"), r.find(".J-p-name a").attr("href", "//item.jd.com/" + c.skuId + ".html").attr("target", "_blank").removeClass("disabled"), r.find(".J-p-name a").html(c.skuName), a.setBuyLink(o)) : (r.find(".J-p-img a").attr("href", "#none").removeAttr("target").addClass("disabled"), r.find(".J-p-name a").attr("href", "#none").removeAttr("target").addClass("disabled"), r.find(".J-p-name a").html(""), a.setBuyLink(o))
        }, handleAttrClick: function (t) {
            var a = this, e = $(t.currentTarget), i = e.parents(".J-sku-item");
            e.attr("data-value", e.val());
            var s = e.parents(".item"), r = a.getEqualObjBySkuItem(i);
            r ? (i.find(".J-p-img a").attr("href", "//item.jd.com/" + r.skuId + ".html").attr("target", "_blank").removeClass("disabled"), i.find(".J-p-name a").attr("href", "//item.jd.com/" + r.skuId + ".html").attr("target", "_blank").removeClass("disabled"), i.find(".J-p-name a").html(r.skuName), a.setBuyLink(s)) : (i.find(".J-p-img a").attr("href", "#none").removeAttr("target").addClass("disabled"), i.find(".J-p-name a").attr("href", "#none").removeAttr("target").addClass("disabled"), i.find(".J-p-name a").html(""), a.setBuyLink(s))
        }, handleChooseClick: function (t) {
            var a = this, e = $(t.currentTarget), i = e.parents(".item");
            a.setBuyLink(i)
        }, getEqualObjBySkuItem: function (t) {
            var a = this, e = t.index(), i = t.find(".J-attrs").children(),
                s = t.parents("[data-pid]").attr("data-pid"), r = {};
            $.each(a.data.packList, function (t, a) {
                a.packId == s && (r = a)
            });
            var n = r.poolList[e].colorList, o = n.slice(), c = null;
            return $.each(o, function (t, a) {
                var e = !0;
                $.each(i, function (t, i) {
                    var s = $(i), r = s.attr("data-type"), n = s.attr("data-value");
                    a[r] != n && (e = !1)
                }), e && (c = a)
            }), c
        }, setSuitContent: function (a) {
            var e = this;
            pageConfig.SKU_suits = [];
            var r = e.packData[a], n = readCookie("areaId");
            r.areaName = s.provinceMap[n];
            var o = t("packList"), c = $(o.process(r));
            e.$currSuit.html(c);
            for (var l = 0; l < r.poolList.length; l++) {
                var d = r.poolList[l];
                if (d.colorList.length > 1) {
                    d.attrSheme = [];
                    for (var u = 0; u < d.saleNames.length; u++) d.attrSheme.push({attr: d.saleNames[u]});
                    d.colorMap = {}, e.handleAttrData(d);
                    var p = t("colorAttr"), h = $(p.process({list: d.attrSheme, colorMap: d.colorMap}));
                    c.find(".J-sku-item").eq(l).find(".J-attrs").html(h)
                }
            }
            var m = e.checkIsAllCanSelect(r.poolList);
            m && e.$currSuit.find(".J-choose").eq(0).click(), this.initScroll(), r.poolList.length > 3 && this.setScroll();
            var f = e.$currSuit.parents(".item");
            e.setBuyLink(f), 1 == r.suitType && i.priceNum({skus: [r.packId], $el: this.$currSuit});
            var v = 0, k = f.find(".J-suits-panel"), g = k.find(".J-sku-item");
            g.each(function (t, a) {
                var e = $(a);
                e.height() > v && (v = e.height())
            }), v += 10, g.parents("ul").height(v), g.parents(".J-scroll").height(v)
        }, checkIsAllCanSelect: function (t) {
            for (var a, e = !0, i = 0; i < t.length; i++) if (a = t[i], 1 == a.selectState) {
                e = !1;
                break
            }
            return e
        }, setBuyLink: function (t) {
            var a = this, e = t.attr("data-pid"), i = t.find(".J-suits-panel"), s = i.find(".J-sku-item"), r = !0,
                n = [a.cfg.skuid], o = [a.cfg.skuid], c = 1 == a.packData[e].suitType;
            if (!c) for (var l = 1; l < s.length; l++) {
                var d = s.eq(l), u = d.find(".J-choose"), p = !1;
                u.length ? u.is(":checked") && (p = !0) : p = !0;
                var h = d.find(".J-no-stock"), m = d.find(".J-no-item"), f = a.getEqualObjBySkuItem(d);
                f ? (m.hide(), f.stock ? (u.removeProp("disabled"), h.hide(), p && (o.push(f.skuId), n.push(f.skuId))) : (h.show(), u.prop("disabled", "disabled"), p && (o.push(f.skuId), r = !1))) : (m.show(), h.hide(), u.prop("disabled", "disabled"), r = !1)
            }
            if (c || a.calPrice(t, e, o), !r) return void a.setBtnDisable(t);
            var v = t.find(".J-btn");
            v.removeClass("btn-disable");
            var k;
            k = c ? "//cart.jd.com/gate.action?pid=" + e + "&pcount=1&ptype=1" : "//cart.jd.com/gate.action?" + $.param({
                pid: e,
                pcount: 1,
                ptype: 3,
                sku: n.join(",")
            }), v.attr("href", k)
        }, calPrice: function (t, a, e) {
            $.ajax({
                url: "//jprice.jd.com/suit/suitprice",
                data: {suitId: a, skuIds: e.join(","), origin: 1, webSite: 1},
                dataType: "jsonp",
                success: function (a) {
                    var e = t.find(".J-suits-price strong"), i = t.find(".J-suits-save-price strong");
                    a && a.packPromotionPrice ? (e.html("\uffe5 " + a.packPromotionPrice.toFixed(2)), i.html("\uffe5 " + a.baseSuitDiscount.toFixed(2))) : (e.html("\u6682\u65e0\u62a5\u4ef7"), i.html("\u6682\u65e0\u62a5\u4ef7"))
                }
            })
        }, setBtnDisable: function (t) {
            var a = t.find(".J-btn");
            a.addClass("btn-disable"), a.attr("href", "#none")
        }, initScroll: function () {
            var t = this.$currSuit.find('[data-scroll="true"]');
            t.each(function () {
                var t = $(this).find(".J-thumb-scroll"), a = $(this).find(".J-thumb-prev"),
                    e = $(this).find(".J-thumb-next");
                t.imgScroll({visible: 3, step: 3, prev: a, next: e, showControl: !0})
            })
        }, setScroll: function () {
            var t = this.$currSuit.find(".J-scroll"), a = this.$currSuit.find(".arrow-prev"),
                e = this.$currSuit.find(".arrow-next");
            t.imgScroll({visible: 3, step: 3, prev: a, next: e})
        }
    };
    module.exports.__id = "suits", module.exports.init = a
});