var __jrrda = [];
var __jrrdb = [];
var __jrrdc = [];
var __jrrdv = [];
var c_domain = 'jrclick.jd.com';
(function () {
    var af = {
        cdomain: "", getHost: function (l) {
            var s = /.*\:\/\/([^\/|:]*).*/;
            var g = l.match(s);
            var p = "";
            if (typeof g != "undefined" && null != g) {
                p = g[1]
            }
            return p
        }, urlParams: function (g) {
            var l = new RegExp("(^|&)" + g + "=([^&]*)(&|$)");
            var p = window.location.search.substr(1).match(l);
            if (p != null) {
                return unescape(p[2])
            }
            return null
        }, setCookie: function (g, l, s) {
            var p = new Date();
            p.setTime(p.getTime() + s);
            document.cookie = g + "=" + escape(l) + ";expires=" + p.toGMTString() + ";path=/;domain=" + this.cdomain
        }, getCookie: function (g) {
            var t = "";
            if (document.cookie && document.cookie != "") {
                var s = document.cookie.split(";");
                for (var p = 0; p < s.length; p++) {
                    var l = $.trim(s[p]);
                    if (l.substring(0, g.length + 1) == (g + "=")) {
                        t = decodeURIComponent(l.substring(g.length + 1));
                        break
                    }
                }
            }
            return t
        }
    };
    var a0 = {
        account: "", visit: function () {
            var y = af.getCookie("_jrda");
            var s = af.getCookie("_jrdb");
            var l = new Date().getTime();
            var g = 1;
            var t = 30 * 60 * 1000;
            var p = 180 * 24 * 60 * 60 * 1000;
            if (!y && !s) {
                af.setCookie("_jrda", g, p);
                af.setCookie("_jrdb", l, t)
            } else {
                if (y && !s) {
                    g = parseInt(y) + 1;
                    af.setCookie("_jrda", g, p);
                    af.setCookie("_jrdb", l, t)
                } else {
                    af.setCookie("_jrdb", l, t)
                }
            }
        }, order: function (D) {
            var L = af.getHost(D), l = "", p = null, C = null, t = null, y = null;
            var K = af.getHost(document.location.href);
            if (K == "trade.z.jd.com" || L == "trade.z.jd.com") {
                y = "10002";
                p = $(".module_item:first dl:first dd").html();
                t = $("#_projectId").val();
                var g = $(".f_red28:first").html();
                if (g != null) {
                    C = g.substr(1, g.length - 1)
                }
            } else {
                if (L == "licai.bx.jd.com") {
                    y = "102";
                    p = af.urlParams("orderId");
                    C = af.urlParams("shouldPay")
                } else {
                    if (L == "bill.jr.jd.com") {
                        y = "10003";
                        p = $("#orderId").val();
                        C = $("#shouldPay").val()
                    } else {
                        if (L == "") {
                            L = document.location.href;
                            if (L.match("trade.jr.jd.com")) {
                                var s = $("a[href='/centre/jrbpayin.action']").size();
                                if (s == 1) {
                                    y = "10000";
                                    p = af.urlParams("order");
                                    C = af.urlParams("amount")
                                } else {
                                    $("a[class='loan-pub-btn']").each(function () {
                                        var W = this;
                                        var O = $(W).attr("href");
                                        if (O.indexOf("list.jr.jd.com/detail")) {
                                            y = "101";
                                            p = af.urlParams("order");
                                            C = $(".bill-money").html().substr(1);
                                            t = $(".loan-pub-btn").last().attr("href").split("/")[4].split(".")[0]
                                        }
                                    })
                                }
                            }
                        } else {
                            if (L == "jrapp.jd.com") {
                                L = document.location.href;
                                if (L.match("m.z.jd.com")) {
                                    y = "10002";
                                    p = af.urlParams("orderId");
                                    C = af.urlParams("amount")
                                }
                            }
                        }
                    }
                }
            }
            if (p != null && C != null) {
                l = p + "|" + C + "|" + t + "|" + y
            }
            return l
        }, req: function (W, t) {
            var K = document.referrer;
            var D = "";
            for (var a2 in t) {
                D += ((a2 + "=" + t[a2]) + "$")
            }
            D = D.substring(0, D.length - 1);
            var y = af.getCookie("__jdu");
            if (y == "") {
                var l = af.getCookie("__jda");
                if (l != "") {
                    var s = l.split(".");
                    y = s[1]
                }
            }
            var g = af.getCookie("pin");
            if (!g) {
                g = af.getCookie("pt_pin")
            }
            var p = af.getCookie("_jrda");
            var L = af.getCookie("flow_site_ad");
            var O = af.getCookie("flow_outsite_ad");
            var aa = ("https:" == document.location.protocol ? "https://" : "http://") + c_domain + "/log.gif?uid=" + y + "&p=" + g + "&t=" + W + "&m=" + this.account + "&ref=" + encodeURIComponent(K) + "&v=" + encodeURIComponent(D) + "&order=" + this.order(K) + "&jrda=" + p + "&sitead=" + L + "&outsitead=" + O + "&rm=" + (new Date).getTime() + "&__jrrda=" + __jrrda + "&__jrrdb=" + __jrrdb + "&__jrrdc=" + __jrrdc + "&__jrrdv=" + __jrrdv;
            var C = new Image(1, 1);
            C.src = aa;
            C.onload = function () {
                C.onload = null;
                C.onerror = null
            }
        }
    };
    if ("undefined" == typeof _jraq || _jraq.length == 0) {
        var ac = document.domain.lastIndexOf(".");
        var aq = document.domain.substring(0, ac).lastIndexOf(".");
        if (aq > -1) {
            af.cdomain = document.domain.substring(aq)
        } else {
            af.cdomain = "." + document.domain
        }
        a0.account = "UA-J2000-1"
    } else {
        if (_jraq.length == 1) {
            var ai = _jraq.pop();
            a0.account = ai[1];
            var ac = document.domain.lastIndexOf(".");
            var aq = document.domain.substring(0, ac).lastIndexOf(".");
            if (aq > -1) {
                af.cdomain = document.domain.substring(aq)
            } else {
                af.cdomain = "." + document.domain
            }
        } else {
            var aX = _jraq.pop();
            af.cdomain = aX[1];
            var ai = _jraq.pop();
            a0.account = ai[1]
        }
    }
    var aj = "jr.jd.com,z.jd.com,zbbs.jd.com,baitiao.jd.com,baitiao.ps.jd.com,go.jd.com,loan.jd.com,bao.jd.com,baoxian.jd.com,licai.bx.jd.com,licai.jd.com,8.jd.com,8.jr.jd.com,jinku.pay.jd.com".split(",");
    var aZ = function (O) {
        var t = document.referrer, K = af.cdomain;
        var s = t && t.split("/")[2], L = false;
        var aa = __jrrdv;
        var p = /from=jrad_(([0-9]{1,})|JD)/;
        var g = p.exec(au.location.href);
        var W = /&loc=([0-9]{1,})/;
        var C = W.exec(au.location.href);
        if (g != null && C != null && C[1] == 2) {
            O.set(f, "jrad_" + g[1]);
            O.set(aA, "-");
            O.set(c, "referral");
            O.set(aw, "-")
        } else {
            if (s && (s.indexOf(".jd.com") > -1)) {
                for (var a2 = aj, y = 0; y < a2.length; y++) {
                    var D = a2[y].toLowerCase();
                    if (s.indexOf(D) > -1) {
                        L = true;
                        break
                    }
                }
                if (!L && (/jrad_(([0-9]{1,})|JD)/.exec(O.get(f)) == null)) {
                    O.set(f, "JD");
                    O.set(aA, "-");
                    O.set(c, "referral");
                    O.set(aw, "-")
                }
            } else {
                if (!s) {
                    if (aa[0] != null && "JD" === O.get(f)) {
                        O.set(f, "direct");
                        O.set(aA, "-");
                        O.set(c, "none");
                        O.set(aw, "-")
                    }
                }
            }
        }
        if (window.jrBase && window.jrBase.navId) {
            O.set(j, window.jrBase.navId)
        }
        var l = navigator.userAgent.toLowerCase();
        if (l && l.indexOf("deviceid=") != -1) {
            uas = l.split("&");
            for (Q in uas) {
                if (uas[Q].indexOf("deviceid=") != -1) {
                    O.set(u, uas[Q].split("=")[1]);
                    break
                }
            }
        }
    };
    var ae = window, au = document, aH = encodeURIComponent, ag = decodeURIComponent, T = void 0, Q = "push",
        H = "join", N = "split", S = "length", z = "indexOf", n = "prototype", J = "toLowerCase";
    var v = {};
    v.util = {
        getParameter: function (p, l) {
            var s = new RegExp("(?:^|&|[?]|[/])" + l + "=([^&]*)");
            var g = s.exec(p);
            return g ? aH(g[1]) : ""
        }, Wv: function (s, g, p, l) {
            s = s + "=" + g + "; path=/; ";
            l && (s += "expires=" + (new Date(new Date().getTime() + l)).toGMTString() + "; ");
            p && (s += "domain=" + p + ";");
            au.cookie = s
        }, Vv: function (y) {
            for (var g = [], t = au.cookie[N](";"), l = RegExp("^\\s*" + y + "=\\s*(.*?)\\s*$"), s = 0; s < t[S]; s++) {
                var p = t[s]["match"](l);
                p && g[Q](p[1])
            }
            return g
        }
    };
    var aN = 0;

    function an(g) {
        return (g ? "_" : "") + aN++
    }

    var ap = an(), ah = an(), am = an(), M = an(), d = an(), aP = an(), Y = an(), av = an(), ak = an(), ao = an(),
        aE = an(), aD = an(), aL = an(), aU = an(), ab = an(), V = an(), F = an(), B = an(), P = an(), aG = an(),
        o = an(), E = an(), i = an(), a = an(), aS = an(), aC = an(), R = an(), aQ = an(), f = an(), aA = an(),
        c = an(), aw = an(), a1 = an(), b = an(), j = an(), u = an();
    var aT = function () {
        var p = {};
        this.set = function (t, s) {
            p[t] = s
        }, this.get = function (s) {
            return p[s] !== T ? p[s] : null
        }, this.m = function (t) {
            var s = this.get(t);
            var C = s == T || s === "" ? 0 : 1 * s;
            p[t] = C + 1
        };
        this.set(ap, "UA-J2011-1");
        this.set(M, af.cdomain);
        this.set(am, m());
        this.set(d, Math.round((new Date).getTime() / 1000));
        this.set(aP, 63072000000);
        this.set(Y, 15768000000);
        this.set(av, 1800000);
        this.set(aU, U());
        var g = ad();
        this.set(ab, g.name);
        this.set(V, g.version);
        this.set(F, I());
        var l = aO();
        this.set(B, l.D);
        this.set(P, l.C);
        this.set(aG, l.language);
        this.set(o, l.javaEnabled);
        this.set(E, l.characterSet);
        this.set(aQ, at);
        this.set(a1, new Date().getTime())
    };
    var at = "baidu:wd,baidu:word,so.com:q,so.360.cn:q,360so.com:q,360sou.com:q,baidu:q1,m.baidu:word,m.baidu:w,wap.soso:key,m.so:q,page.yicha:key,sz.roboo:q,i.easou:q,wap.sogou:keyword,google:q,soso:w,sogou:query,youdao:q,ucweb:keyword,ucweb:word,114so:kw,yahoo:p,yahoo:q,live:q,msn:q,bing:q,aol:query,aol:q,daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,lycos:query,ask:q,netscape:query,cnn:query,about:terms,mamma:q,voila:rdata,virgilio:qs,alice:qs,yandex:text,najdi:q,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,ozu:q,terra:query,rambler:query".split(","),
        aY = function () {
            return Math.round((new Date).getTime() / 1000)
        }, x = function () {
            return Math.round(Math.random() * 2147483647)
        }, Z = function () {
            return x() ^ ar() & 2147483647
        }, m = function () {
            return X(au.domain)
        }, aO = function () {
            var l = {}, g = ae.navigator, p = ae.screen;
            l.D = p ? p.width + "x" + p.height : "-";
            l.C = p ? p.colorDepth + "-bit" : "-";
            l.language = (g && (g.language || g.browserLanguage) || "-")[J]();
            l.javaEnabled = g && g.javaEnabled() ? 1 : 0;
            l.characterSet = au.characterSet || au.charset || "-";
            return l
        }, U = function () {
            var D, C, y, t;
            y = "ShockwaveFlash";
            if ((D = (D = window.navigator) ? D.plugins : T) && D[S] > 0) {
                for (C = 0; C < D[S] && !t; C++) {
                    y = D[C], y.name[z]("Shockwave Flash") > -1 && (t = y.description[N]("Shockwave Flash ")[1])
                }
            } else {
                y = y + "." + y;
                try {
                    C = new ActiveXObject(y + ".7"), t = C.GetVariable("$version")
                } catch (s) {
                }
                if (!t) {
                    try {
                        C = new ActiveXObject(y + ".6"), t = "WIN 6,0,21,0", C.AllowScriptAccess = "always", t = C.GetVariable("$version")
                    } catch (p) {
                    }
                }
                if (!t) {
                    try {
                        C = new ActiveXObject(y), t = C.GetVariable("$version")
                    } catch (l) {
                    }
                }
                t && (t = t[N](" ")[1][N](","), t = t[0] + "." + t[1] + " r" + t[2])
            }
            var K = v.util.Vv("_r2");
            D = t ? (t + (K[S] > 0 ? ("_" + K[0]) : "")) : "-";
            var g = v.util.Vv("limgs");
            D = D + (g[S] > 0 ? ("_" + g[0]) : "");
            return D
        }, ax = function (g) {
            return T == g || "-" == g || "" == g
        }, X = function (l) {
            var g = 1, s = 0, p;
            if (!ax(l)) {
                g = 0;
                for (p = l[S] - 1; p >= 0; p--) {
                    s = l.charCodeAt(p), g = (g << 6 & 268435455) + s + (s << 14), s = g & 266338304, g = s != 0 ? g ^ s >> 21 : g
                }
            }
            return g
        }, ar = function () {
            var p = aO();
            for (var l = p, g = ae.navigator, l = g.appName + g.version + l.language + g.platform + g.userAgent + l.javaEnabled + l.D + l.C + (au.cookie ? au.cookie : "") + (au.referrer ? au.referrer : ""), g = l.length, s = ae.history.length; s > 0;) {
                l += s-- ^ g++
            }
            return X(l)
        }, ad = function () {
            var g = {name: "other", version: "0"}, s = navigator.userAgent.toLowerCase();
            browserRegExp = {
                jrapp: /jdjr[|\-]([\w.]+)/,
                jdapp: /jdapp[|\;]([\w.]+)/,
                weixin: /micromessenger[|\/]([\w.]+)/,
                walletclient: /[|\/]walletclient/,
                se360: /360se/,
                se360_2x: /qihu/,
                ie: /msie[ ]([\w.]+)/,
                firefox: /firefox[|\/]([\w.]+)/,
                chrome: /chrome[|\/]([\w.]+)/,
                safari: /version[|\/]([\w.]+)(\s\w.+)?\s?safari/,
                opera: /opera[|\/]([\w.]+)/
            };
            for (var p in browserRegExp) {
                var l = browserRegExp[p].exec(s);
                if (l) {
                    g.name = p;
                    g.version = l[1] || "0";
                    break
                }
            }
            return g
        }, I = function () {
            var g = /(win|android|linux|nokia|ipad|iphone|ipod|mac|sunos|solaris)/.exec(navigator.platform.toLowerCase());
            if (!g) {
                return "other"
            } else {
                if (g[0] == "linux") {
                    var l = /(android)/.exec(navigator.userAgent.toLowerCase());
                    return l == null ? g[0] : "android"
                } else {
                    return g[0]
                }
            }
        }, aM = function () {
            var p = "",
                y = ["jwotest_product", "jwotest_list", "jwotest_cart", "jwotest_orderinfo", "jwotest_homepage", "jwotest_other1", "jwotest_other2", "jwotest_other3"];
            for (var t = 0, g = y.length; t < g; t++) {
                var s = v.util.Vv(y[t]);
                if (s[S] == 0) {
                    continue
                }
                var C = ag(s[0]).match(/=(.*?)&/gi), l = [];
                if (C == null) {
                    continue
                }
                $.each(C, function (K, D) {
                    l.push(K == 0 ? "T" + D.substring(1, D.length - 1) : D.substring(1, D.length - 1))
                });
                p += l[H]("-") + ";"
            }
            return p
        }, aK = function (l) {
            l.set(ak, au.location.hostname);
            l.set(ao, au.title);
            l.set(aE, au.location.pathname);
            l.set(aD, au.referrer);
            l.set(aL, au.location.href);
            var C = __jrrda, s = C[S] > 0 ? C[0][N](".") : null;
            l.set(ah, s ? s[1] : Z());
            l.set(i, s ? s[2] : l.get(d));
            l.set(a, s ? s[3] : l.get(d));
            l.set(aS, s ? s[4] : l.get(d));
            l.set(aC, s ? s[5] : 1);
            var t = __jrrdv, g = t[S] > 0 ? t[0][N]("|") : null;
            l.set(f, g ? g[1] : "direct");
            l.set(aA, g ? g[2] : "-");
            l.set(c, g ? g[3] : "none");
            l.set(aw, g ? g[4] : "-");
            var y = __jrrdb, p = y[S] > 0 ? y[0][N](".") : null;
            l.set(R, p ? p[1] : 0);
            l.set(b, aM() || "-");
            return !0
        }, aI = function () {
            var l = __jrrdb, g = l[S] > 0 ? l[0][N](".") : null;
            return (g && g.length == 4) ? g[1] * 1 : 0
        }, aJ = function (bb) {
            var s = au.location.href, D = au.referrer, a8 = bb.get(M), C = v.util.getParameter(s, "utm_source"), t = [],
                aa = bb.get(f), W = bb.get(aA), O = bb.get(c), K = bb.get(aw), g = (__jrrdb.length == 0);
            if (C) {
                var l = v.util.getParameter(s, "utm_campaign"), ba = v.util.getParameter(s, "utm_medium"),
                    a2 = v.util.getParameter(s, "utm_term");
                t[Q](C);
                t[Q](l || "-");
                t[Q](ba || "-");
                t[Q](a2 || "not set")
            } else {
                var p = D && D[N]("/")[2], a9 = false;
                if (p && p[z](a8) < 0) {
                    for (var a3 = bb.get(aQ), a5 = 0; a5 < a3.length; a5++) {
                        var a7 = a3[a5][N](":");
                        if (p[z](a7[0][J]()) > -1 && D[z]((a7[1] + "=")[J]()) > -1) {
                            var y = /jrad_([0-9]{1,})/;
                            var a4 = y.exec(bb.get(f));
                            if (a4 != null) {
                                a9 = true;
                                break
                            }
                            var a6 = ag(a7[1][J]()), L = v.util.getParameter(D, a6);
                            t[Q](a7[0]);
                            t[Q]("-");
                            t[Q]("organic");
                            t[Q](L || "not set");
                            a9 = true;
                            break
                        }
                    }
                    if (!a9) {
                        if (p[z]("zol.com.cn") > -1) {
                            t[Q]("zol.com.cn");
                            t[Q]("-");
                            t[Q]("cpc");
                            t[Q]("not set")
                        } else {
                            t[Q](p);
                            t[Q]("-");
                            t[Q]("referral");
                            t[Q]("-")
                        }
                    }
                }
            }
            if (t[S] > 0 && ((t[0] != aa || t[1] != W || t[2] != O) || (g && t[2] === "referral"))) {
                bb.set(f, t[0] || "direct");
                bb.set(aA, t[1] || "-");
                bb.set(c, t[2] || "none");
                bb.set(aw, t[3] || "-");
                ay(bb)
            } else {
                if (g) {
                    ay(bb)
                } else {
                    h(bb)
                }
            }
        }, k = function (l, g) {
            var p = g.split(".");
            l.set(i, p[2]);
            l.set(a, p[4]);
            l.set(aS, aY());
            l.m(aC);
            l.set(R, 1)
        }, G = function (l) {
            var g = l.get(d);
            l.set(ah, Z());
            l.set(i, g);
            l.set(a, g);
            l.set(aS, g);
            l.set(aC, 1);
            l.set(R, 1)
        }, h = function (g) {
            g.m(R)
        }, w = function (g) {
            return [g.get(am), g.get(ah) || "-", g.get(i) || "-", g.get(a) || "-", g.get(aS) || "-", g.get(aC) || 1][H](".")
        }, e = function (g) {
            return [g.get(am), g.get(R) || 1, g.get(ah) + "|" + g.get(aC) || 1, g.get(aS) || g.get(d)][H](".")
        }, A = function (g) {
            return [g.get(am), g.get(f) || au.domain, g.get(aA) || "(direct)", g.get(c) || "direct", g.get(aw) || "-"][H]("|")
        }, ay = function (g) {
            var l = __jrrda;
            l.length == 0 ? G(g) : k(g, l[0])
        };
    var r = new aT(), aB = function () {
        this.a = {};
        this.add = function (g, l) {
            this.a[g] = l
        };
        this.get = function (g) {
            return this.a[g]
        };
        this.toString = function () {
            return this.a[H]("&")
        }
    }, al = function (l, g) {
        function s(y, t) {
            t && p[Q](y + "=" + t + ";")
        }

        var p = [];
        s("__jrrda", w(l));
        s("__jrrdv", A(l));
        g.add("jdcc", p[H]("+"))
    }, q = function (l, g) {
        g.add("jdac", l.get(ap)), g.add("jduid", l.get(ah)), g.add("jdsid", l.get(ah) + "|" + l.get(aC)), g.add("jdje", l.get(o)), g.add("jdsc", l.get(P)), g.add("jdsr", l.get(B)), g.add("jdul", l.get(aG)), g.add("jdcs", l.get(E)), g.add("jddt", l.get(ao) || "-"), g.add("jdmr", aH(l.get(aD))), g.add("jdhn", l.get(ak) || "-"), g.add("jdfl", l.get(aU)), g.add("jdos", l.get(F)), g.add("jdbr", l.get(ab)), g.add("jdbv", l.get(V)), g.add("jdwb", l.get(i)), g.add("jdxb", l.get(a)), g.add("jdyb", l.get(aS)), g.add("jdzb", l.get(aC)), g.add("jdcb", l.get(R)), g.add("jdusc", l.get(f) || "direct"), g.add("jducp", l.get(aA) || "-"), g.add("jdumd", l.get(c) || "-"), g.add("jduct", l.get(aw) || "-"), g.add("jdlt", typeof jdpts != "object" ? 0 : jdpts._st == undefined ? 0 : l.get(a1) - jdpts._st), g.add("jdtad", l.get(b)), g.add("nav", l.get(j) || "-"), g.add("did", l.get(u) || "-")
    }, aW = function (l, g, p, s) {
        g.add("jdac", l.get(ap)), g.add("jduid", l.get(ah)), g.add("jdsid", l.get(ah) + "|" + l.get(aC)), g.add("jdje", "-"), g.add("jdsc", "-"), g.add("jdsr", "-"), g.add("jdul", "-"), g.add("jdcs", "-"), g.add("jddt", "-"), g.add("jdmr", aH(l.get(aD))), g.add("jdhn", "-"), g.add("jdfl", "-"), g.add("jdos", "-"), g.add("jdbr", "-"), g.add("jdbv", "-"), g.add("jdwb", "-"), g.add("jdxb", "-"), g.add("jdyb", "-"), g.add("jdzb", l.get(aC)), g.add("jdcb", s ? (aI() + s) : l.get(R)), g.add("jdusc", "-"), g.add("jducp", "-"), g.add("jdumd", "-"), g.add("jduct", "-"), g.add("jdlt", 0), g.add("jdtad", p)
    }, aV = function () {
        aK(r) && aJ(r);
        aZ(r);
        var l = new aB(), g = r.get(M);
        q(r, l);
        __jrrda = w(r);
        __jrrdb = e(r);
        __jrrdc = r.get(am);
        __jrrdv = A(r);
        return l.a
    }, aF = function () {
        var g = new aB();
        q(r, g);
        return g.a
    }, aR = function (g, l) {
        var p = new aB();
        aW(r, p, g, l);
        return p.a
    }, az = function (l) {
        if (l instanceof Array) {
            var s = "";
            for (var p = 0, g = l.length; p < g; p++) {
                s += l[p] + ((p == g - 1) ? "" : "|||")
            }
            return s
        }
        return l
    };
    v.tracker = {
        bloading: function (p, l, s) {
            var g = aV()
        }
    };
    v.tracker.bloading("J", "A", new Date().getTime());
    $(document).bind("click", function (y) {
        y = y || event;
        var W = document;
        var aa = y.srcElement || y.target;
        var C = $(aa).attr("clstag");
        var L = "";
        while (!C) {
            aa = aa.parentNode;
            if (!aa || (aa.nodeName == "BODY")) {
                break
            }
            C = $(aa).attr("clstag")
        }
        if (C) {
            var l = C.split("|"), g = l[1], K = l[2], O = l[3];
            if (aa.nodeName == "IMG") {
                aa = aa.parentNode
            }
            var p = $(aa).attr("href");
            if (p == undefined || p.indexOf("javascript") != -1) {
                p = ""
            } else {
                if (p.indexOf("http") == -1) {
                    p = window.location.host + p
                }
            }
            switch (g) {
                case"keycount":
                    var D = {page: K, location: O, tag: "Q", href: p};
                    a0.req("www.130000", D);
                    L = K + "|" + O;
                    break
            }
        }
    });
    (function () {
        var g = aF();
        var l = {
            je: g.jdje,
            sc: g.jdsc,
            sr: g.jdsr,
            ul: g.jdul,
            cs: g.jdcs,
            dt: g.jddt,
            hn: g.jdhn,
            fl: g.jdfl,
            os: g.jdos,
            br: g.jdbr,
            bv: g.jdbv,
            wb: g.jdwb,
            xb: g.jdxb,
            yb: g.jdyb,
            zb: g.jdzb,
            cb: g.jdcb,
            usc: g.jdusc,
            ucp: g.jducp,
            umd: g.jdumd,
            uct: g.jduct,
            lt: g.jdlt,
            ct: new Date().getTime(),
            tad: g.jdtad,
            nav: g.nav,
            did: g.did
        };
        a0.visit();
        a0.req("www.110000", l)
    })()
})();