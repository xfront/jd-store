/* product-search/1.0.2 shopList.js Date:2016-12-06 18:22:05 */
define("js/shopList.js",[],function(require,a,b){var c={};c.init=function(){this.wrap=$("#J_main").find(".J-shop-list"),this.editItemGoods()},c.editItemGoods=function(){$("#J_searchWrap").delegate(".shop-goods-trigger","click",function(){var a=$(this);a.parents(".shop-list-item").toggleClass("z-shop-item-open"),a.data("relatedProductLoaded")||(a.closest(".sl-i-hd").siblings(".sl-i-bd").find(".gl-item").each(function(){var a=$(this).find(".p-img img");a.attr("src")||(a.attr("src",a.data("lazy-img")),a.attr("data-lazy-img","done"))}),a.data("relatedProductLoaded",!0))})},b.exports=c});
