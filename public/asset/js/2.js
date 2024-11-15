!(function (e) {

    var t = {};
    function n(r) {
        var i;
        return (t[r] || ((i = t[r] = { i: r, l: !1, exports: {} }), e[r].call(i.exports, i, i.exports, n), (i.l = !0), i)).exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = "/"),
        n((n.s = 0));


    })({



        0: function (e, t, n) {
            n("TVt4"), (e.exports = n("9s0C"));
        },
        "3IRH": function (e, t) {
            e.exports = function (e) {
                return (
                    e.webpackPolyfill ||
                        ((e.deprecate = function () {}),
                        (e.paths = []),
                        e.children || (e.children = []),
                        Object.defineProperty(e, "loaded", {
                            enumerable: !0,
                            get: function () {
                                return e.l;
                            },
                        }),
                        Object.defineProperty(e, "id", {
                            enumerable: !0,
                            get: function () {
                                return e.i;
                            },
                        }),
                        (e.webpackPolyfill = 1)),
                    e
                );
            };
        },
        "7t+N": function (e, t, n) {
            var r;
            !(function (t, n) {
                "use strict";
                "object" == typeof e && "object" == typeof e.exports
                    ? (e.exports = t.document
                          ? n(t, !0)
                          : function (e) {
                                if (e.document) return n(e);
                                throw new Error("jQuery requires a window with a document");
                            })
                    : n(t);
            })("undefined" != typeof window ? window : this, function (n, i) {
                "use strict";
                function o(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType;
                }
                function a(e) {
                    return null != e && e === e.window;
                }
                var s = [],
                    c = Object.getPrototypeOf,
                    u = s.slice,
                    l = s.flat
                        ? function (e) {
                              return s.flat.call(e);
                          }
                        : function (e) {
                              return s.concat.apply([], e);
                          },
                    d = s.push,
                    p = s.indexOf,
                    f = {},
                    h = f.toString,
                    g = f.hasOwnProperty,
                    m = g.toString,
                    v = m.call(Object),
                    y = {},
                    b = n.document,
                    x = { type: !0, src: !0, nonce: !0, noModule: !0 };
                function k(e, t, n) {
                    var r,
                        i,
                        o = (n = n || b).createElement("script");
                    if (((o.text = e), t)) for (r in x) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
                    n.head.appendChild(o).parentNode.removeChild(o);
                }
                function _(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[h.call(e)] || "object" : typeof e;
                }
                var w = function (e, t) {
                    return new w.fn.init(e, t);
                };
                function D(e) {
                    var t = !!e && "length" in e && e.length,
                        n = _(e);
                    return !o(e) && !a(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
                }
                function C(e, t, n) {
                    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (i && w(e).is(n)) break;
                            r.push(e);
                        }
                    return r;
                }
                function T(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n;
                }
                (w.fn = w.prototype = {
                    jquery: "3.5.1",
                    constructor: w,
                    length: 0,
                    toArray: function () {
                        return u.call(this);
                    },
                    get: function (e) {
                        return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e];
                    },
                    pushStack: function (e) {
                        return ((e = w.merge(this.constructor(), e)).prevObject = this), e;
                    },
                    each: function (e) {
                        return w.each(this, e);
                    },
                    map: function (e) {
                        return this.pushStack(
                            w.map(this, function (t, n) {
                                return e.call(t, n, t);
                            })
                        );
                    },
                    slice: function () {
                        return this.pushStack(u.apply(this, arguments));
                    },
                    first: function () {
                        return this.eq(0);
                    },
                    last: function () {
                        return this.eq(-1);
                    },
                    even: function () {
                        return this.pushStack(
                            w.grep(this, function (e, t) {
                                return (t + 1) % 2;
                            })
                        );
                    },
                    odd: function () {
                        return this.pushStack(
                            w.grep(this, function (e, t) {
                                return t % 2;
                            })
                        );
                    },
                    eq: function (e) {
                        var t = this.length;
                        return (e = +e + (e < 0 ? t : 0)), this.pushStack(0 <= e && e < t ? [this[e]] : []);
                    },
                    end: function () {
                        return this.prevObject || this.constructor();
                    },
                    push: d,
                    sort: s.sort,
                    splice: s.splice,
                }),
                    (w.extend = w.fn.extend = function () {
                        var e,
                            t,
                            n,
                            r,
                            i,
                            a = arguments[0] || {},
                            s = 1,
                            c = arguments.length,
                            u = !1;
                        for ("boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++), "object" == typeof a || o(a) || (a = {}), s === c && ((a = this), s--); s < c; s++)
                            if (null != (e = arguments[s]))
                                for (t in e)
                                    (n = e[t]),
                                        "__proto__" !== t &&
                                            a !== n &&
                                            (u && n && (w.isPlainObject(n) || (r = Array.isArray(n)))
                                                ? ((i = a[t]), (i = r && !Array.isArray(i) ? [] : r || w.isPlainObject(i) ? i : {}), (r = !1), (a[t] = w.extend(u, i, n)))
                                                : void 0 !== n && (a[t] = n));
                        return a;
                    }),
                    w.extend({
                        expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function (e) {
                            throw new Error(e);
                        },
                        noop: function () {},
                        isPlainObject: function (e) {
                            return !(!e || "[object Object]" !== h.call(e) || ((e = c(e)) && ("function" != typeof (e = g.call(e, "constructor") && e.constructor) || m.call(e) !== v)));
                        },
                        isEmptyObject: function (e) {
                            for (var t in e) return !1;
                            return !0;
                        },
                        globalEval: function (e, t, n) {
                            k(e, { nonce: t && t.nonce }, n);
                        },
                        each: function (e, t) {
                            var n,
                                r = 0;
                            if (D(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                            return e;
                        },
                        makeArray: function (e, t) {
                            return (t = t || []), null != e && (D(Object(e)) ? w.merge(t, "string" == typeof e ? [e] : e) : d.call(t, e)), t;
                        },
                        inArray: function (e, t, n) {
                            return null == t ? -1 : p.call(t, e, n);
                        },
                        merge: function (e, t) {
                            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                            return (e.length = i), e;
                        },
                        grep: function (e, t, n) {
                            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
                            return r;
                        },
                        map: function (e, t, n) {
                            var r,
                                i,
                                o = 0,
                                a = [];
                            if (D(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                            else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                            return l(a);
                        },
                        guid: 1,
                        support: y,
                    }),
                    "function" == typeof Symbol && (w.fn[Symbol.iterator] = s[Symbol.iterator]),
                    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                        f["[object " + t + "]"] = t.toLowerCase();
                    });
                var S = (function (e) {
                        function t(e, t) {
                            return (e = "0x" + e.slice(1) - 65536), t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320));
                        }
                        function n(e, t) {
                            return t ? ("\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                        }
                        function r() {
                            g();
                        }
                        var i,
                            o,
                            a,
                            s,
                            c,
                            u,
                            l,
                            d,
                            p,
                            f,
                            h,
                            g,
                            m,
                            v,
                            y,
                            b,
                            x,
                            k,
                            _,
                            w = "sizzle" + +new Date(),
                            D = e.document,
                            C = 0,
                            T = 0,
                            S = ce(),
                            M = ce(),
                            A = ce(),
                            j = ce(),
                            E = function (e, t) {
                                return e === t && (h = !0), 0;
                            },
                            N = {}.hasOwnProperty,
                            I = [],
                            O = I.pop,
                            L = I.push,
                            P = I.push,
                            F = I.slice,
                            R = function (e, t) {
                                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                                return -1;
                            },
                            q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            H = "[\\x20\\t\\r\\n\\f]",
                            Y = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            W = "\\[" + H + "*(" + Y + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Y + "))|)" + H + "*\\]",
                            B = ":(" + Y + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
                            K = new RegExp(H + "+", "g"),
                            $ = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                            U = new RegExp("^" + H + "*," + H + "*"),
                            z = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                            V = new RegExp(H + "|>"),
                            G = new RegExp(B),
                            X = new RegExp("^" + Y + "$"),
                            J = {
                                ID: new RegExp("^#(" + Y + ")"),
                                CLASS: new RegExp("^\\.(" + Y + ")"),
                                TAG: new RegExp("^(" + Y + "|[*])"),
                                ATTR: new RegExp("^" + W),
                                PSEUDO: new RegExp("^" + B),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + q + ")$", "i"),
                                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i"),
                            },
                            Q = /HTML$/i,
                            Z = /^(?:input|select|textarea|button)$/i,
                            ee = /^h\d$/i,
                            te = /^[^{]+\{\s*\[native \w/,
                            ne = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            re = /[+~]/,
                            ie = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
                            oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            ae = ye(
                                function (e) {
                                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                                },
                                { dir: "parentNode", next: "legend" }
                            );
                        try {
                            P.apply((I = F.call(D.childNodes)), D.childNodes), I[D.childNodes.length].nodeType;
                        } catch (e) {
                            P = {
                                apply: I.length
                                    ? function (e, t) {
                                          L.apply(e, F.call(t));
                                      }
                                    : function (e, t) {
                                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                                          e.length = n - 1;
                                      },
                            };
                        }
                        function se(e, t, r, i) {
                            var a,
                                s,
                                c,
                                l,
                                p,
                                f,
                                h = t && t.ownerDocument,
                                v = t ? t.nodeType : 9;
                            if (((r = r || []), "string" != typeof e || !e || (1 !== v && 9 !== v && 11 !== v))) return r;
                            if (!i && (g(t), (t = t || m), y)) {
                                if (11 !== v && (l = ne.exec(e)))
                                    if ((a = l[1])) {
                                        if (9 === v) {
                                            if (!(f = t.getElementById(a))) return r;
                                            if (f.id === a) return r.push(f), r;
                                        } else if (h && (f = h.getElementById(a)) && _(t, f) && f.id === a) return r.push(f), r;
                                    } else {
                                        if (l[2]) return P.apply(r, t.getElementsByTagName(e)), r;
                                        if ((a = l[3]) && o.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(a)), r;
                                    }
                                if (o.qsa && !j[e + " "] && (!b || !b.test(e)) && (1 !== v || "object" !== t.nodeName.toLowerCase())) {
                                    if (((f = e), (h = t), 1 === v && (V.test(e) || z.test(e)))) {
                                        for (((h = (re.test(e) && ge(t.parentNode)) || t) === t && o.scope) || ((c = t.getAttribute("id")) ? (c = c.replace(oe, n)) : t.setAttribute("id", (c = w))), s = (p = u(e)).length; s--; )
                                            p[s] = (c ? "#" + c : ":scope") + " " + ve(p[s]);
                                        f = p.join(",");
                                    }
                                    try {
                                        return P.apply(r, h.querySelectorAll(f)), r;
                                    } catch (t) {
                                        j(e, !0);
                                    } finally {
                                        c === w && t.removeAttribute("id");
                                    }
                                }
                            }
                            return d(e.replace($, "$1"), t, r, i);
                        }
                        function ce() {
                            var e = [];
                            return function t(n, r) {
                                return e.push(n + " ") > a.cacheLength && delete t[e.shift()], (t[n + " "] = r);
                            };
                        }
                        function ue(e) {
                            return (e[w] = !0), e;
                        }
                        function le(e) {
                            var t = m.createElement("fieldset");
                            try {
                                return !!e(t);
                            } catch (e) {
                                return !1;
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t);
                            }
                        }
                        function de(e, t) {
                            for (var n = e.split("|"), r = n.length; r--; ) a.attrHandle[n[r]] = t;
                        }
                        function pe(e, t) {
                            var n = t && e,
                                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (r) return r;
                            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                            return e ? 1 : -1;
                        }
                        function fe(e) {
                            return function (t) {
                                return "form" in t
                                    ? t.parentNode && !1 === t.disabled
                                        ? "label" in t
                                            ? "label" in t.parentNode
                                                ? t.parentNode.disabled === e
                                                : t.disabled === e
                                            : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                                        : t.disabled === e
                                    : "label" in t && t.disabled === e;
                            };
                        }
                        function he(e) {
                            return ue(function (t) {
                                return (
                                    (t = +t),
                                    ue(function (n, r) {
                                        for (var i, o = e([], n.length, t), a = o.length; a--; ) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                                    })
                                );
                            });
                        }
                        function ge(e) {
                            return e && void 0 !== e.getElementsByTagName && e;
                        }
                        for (i in ((o = se.support = {}),
                        (c = se.isXML = function (e) {
                            var t = e.namespaceURI;
                            return (e = (e.ownerDocument || e).documentElement), !Q.test(t || (e && e.nodeName) || "HTML");
                        }),
                        (g = se.setDocument = function (e) {
                            return (
                                (e = e ? e.ownerDocument || e : D) != m &&
                                    9 === e.nodeType &&
                                    e.documentElement &&
                                    ((v = (m = e).documentElement),
                                    (y = !c(m)),
                                    D != m && (e = m.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", r, !1) : e.attachEvent && e.attachEvent("onunload", r)),
                                    (o.scope = le(function (e) {
                                        return v.appendChild(e).appendChild(m.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                                    })),
                                    (o.attributes = le(function (e) {
                                        return (e.className = "i"), !e.getAttribute("className");
                                    })),
                                    (o.getElementsByTagName = le(function (e) {
                                        return e.appendChild(m.createComment("")), !e.getElementsByTagName("*").length;
                                    })),
                                    (o.getElementsByClassName = te.test(m.getElementsByClassName)),
                                    (o.getById = le(function (e) {
                                        return (v.appendChild(e).id = w), !m.getElementsByName || !m.getElementsByName(w).length;
                                    })),
                                    o.getById
                                        ? ((a.filter.ID = function (e) {
                                              var n = e.replace(ie, t);
                                              return function (e) {
                                                  return e.getAttribute("id") === n;
                                              };
                                          }),
                                          (a.find.ID = function (e, t) {
                                              if (void 0 !== t.getElementById && y) return (t = t.getElementById(e)) ? [t] : [];
                                          }))
                                        : ((a.filter.ID = function (e) {
                                              var n = e.replace(ie, t);
                                              return function (e) {
                                                  return (e = void 0 !== e.getAttributeNode && e.getAttributeNode("id")) && e.value === n;
                                              };
                                          }),
                                          (a.find.ID = function (e, t) {
                                              if (void 0 !== t.getElementById && y) {
                                                  var n,
                                                      r,
                                                      i,
                                                      o = t.getElementById(e);
                                                  if (o) {
                                                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                  }
                                                  return [];
                                              }
                                          })),
                                    (a.find.TAG = o.getElementsByTagName
                                        ? function (e, t) {
                                              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : o.qsa ? t.querySelectorAll(e) : void 0;
                                          }
                                        : function (e, t) {
                                              var n,
                                                  r = [],
                                                  i = 0,
                                                  o = t.getElementsByTagName(e);
                                              if ("*" !== e) return o;
                                              for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                                              return r;
                                          }),
                                    (a.find.CLASS =
                                        o.getElementsByClassName &&
                                        function (e, t) {
                                            if (void 0 !== t.getElementsByClassName && y) return t.getElementsByClassName(e);
                                        }),
                                    (x = []),
                                    (b = []),
                                    (o.qsa = te.test(m.querySelectorAll)) &&
                                        (le(function (e) {
                                            var t;
                                            (v.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                                e.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + H + "*(?:''|\"\")"),
                                                e.querySelectorAll("[selected]").length || b.push("\\[" + H + "*(?:value|" + q + ")"),
                                                e.querySelectorAll("[id~=" + w + "-]").length || b.push("~="),
                                                (t = m.createElement("input")).setAttribute("name", ""),
                                                e.appendChild(t),
                                                e.querySelectorAll("[name='']").length || b.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"),
                                                e.querySelectorAll(":checked").length || b.push(":checked"),
                                                e.querySelectorAll("a#" + w + "+*").length || b.push(".#.+[+~]"),
                                                e.querySelectorAll("\\\f"),
                                                b.push("[\\r\\n\\f]");
                                        }),
                                        le(function (e) {
                                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                            var t = m.createElement("input");
                                            t.setAttribute("type", "hidden"),
                                                e.appendChild(t).setAttribute("name", "D"),
                                                e.querySelectorAll("[name=d]").length && b.push("name" + H + "*[*^$|!~]?="),
                                                2 !== e.querySelectorAll(":enabled").length && b.push(":enabled", ":disabled"),
                                                (v.appendChild(e).disabled = !0),
                                                2 !== e.querySelectorAll(":disabled").length && b.push(":enabled", ":disabled"),
                                                e.querySelectorAll("*,:x"),
                                                b.push(",.*:");
                                        })),
                                    (o.matchesSelector = te.test((k = v.matches || v.webkitMatchesSelector || v.mozMatchesSelector || v.oMatchesSelector || v.msMatchesSelector))) &&
                                        le(function (e) {
                                            (o.disconnectedMatch = k.call(e, "*")), k.call(e, "[s!='']:x"), x.push("!=", B);
                                        }),
                                    (b = b.length && new RegExp(b.join("|"))),
                                    (x = x.length && new RegExp(x.join("|"))),
                                    (e = te.test(v.compareDocumentPosition)),
                                    (_ =
                                        e || te.test(v.contains)
                                            ? function (e, t) {
                                                  var n = 9 === e.nodeType ? e.documentElement : e;
                                                  return e === (t = t && t.parentNode) || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
                                              }
                                            : function (e, t) {
                                                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                                  return !1;
                                              }),
                                    (E = e
                                        ? function (e, t) {
                                              var n;
                                              return e === t
                                                  ? ((h = !0), 0)
                                                  : !e.compareDocumentPosition - !t.compareDocumentPosition ||
                                                        (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!o.sortDetached && t.compareDocumentPosition(e) === n)
                                                            ? e == m || (e.ownerDocument == D && _(D, e))
                                                                ? -1
                                                                : t == m || (t.ownerDocument == D && _(D, t))
                                                                ? 1
                                                                : f
                                                                ? R(f, e) - R(f, t)
                                                                : 0
                                                            : 4 & n
                                                            ? -1
                                                            : 1);
                                          }
                                        : function (e, t) {
                                              if (e === t) return (h = !0), 0;
                                              var n,
                                                  r = 0,
                                                  i = e.parentNode,
                                                  o = t.parentNode,
                                                  a = [e],
                                                  s = [t];
                                              if (!i || !o) return e == m ? -1 : t == m ? 1 : i ? -1 : o ? 1 : f ? R(f, e) - R(f, t) : 0;
                                              if (i === o) return pe(e, t);
                                              for (n = e; (n = n.parentNode); ) a.unshift(n);
                                              for (n = t; (n = n.parentNode); ) s.unshift(n);
                                              for (; a[r] === s[r]; ) r++;
                                              return r ? pe(a[r], s[r]) : a[r] == D ? -1 : s[r] == D ? 1 : 0;
                                          })),
                                m
                            );
                        }),
                        (se.matches = function (e, t) {
                            return se(e, null, null, t);
                        }),
                        (se.matchesSelector = function (e, t) {
                            if ((g(e), o.matchesSelector && y && !j[t + " "] && (!x || !x.test(t)) && (!b || !b.test(t))))
                                try {
                                    var n = k.call(e, t);
                                    if (n || o.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                                } catch (e) {
                                    j(t, !0);
                                }
                            return 0 < se(t, m, null, [e]).length;
                        }),
                        (se.contains = function (e, t) {
                            return (e.ownerDocument || e) != m && g(e), _(e, t);
                        }),
                        (se.attr = function (e, t) {
                            var n;
                            return (
                                (e.ownerDocument || e) != m && g(e),
                                void 0 !== (n = (n = a.attrHandle[t.toLowerCase()]) && N.call(a.attrHandle, t.toLowerCase()) ? n(e, t, !y) : void 0)
                                    ? n
                                    : o.attributes || !y
                                    ? e.getAttribute(t)
                                    : (n = e.getAttributeNode(t)) && n.specified
                                    ? n.value
                                    : null
                            );
                        }),
                        (se.escape = function (e) {
                            return (e + "").replace(oe, n);
                        }),
                        (se.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e);
                        }),
                        (se.uniqueSort = function (e) {
                            var t,
                                n = [],
                                r = 0,
                                i = 0;
                            if (((h = !o.detectDuplicates), (f = !o.sortStable && e.slice(0)), e.sort(E), h)) {
                                for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                                for (; r--; ) e.splice(n[r], 1);
                            }
                            return (f = null), e;
                        }),
                        (s = se.getText = function (e) {
                            var t,
                                n = "",
                                r = 0,
                                i = e.nodeType;
                            if (i) {
                                if (1 === i || 9 === i || 11 === i) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
                                } else if (3 === i || 4 === i) return e.nodeValue;
                            } else for (; (t = e[r++]); ) n += s(t);
                            return n;
                        }),
                        ((a = se.selectors = {
                            cacheLength: 50,
                            createPseudo: ue,
                            match: J,
                            attrHandle: {},
                            find: {},
                            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                            preFilter: {
                                ATTR: function (e) {
                                    return (e[1] = e[1].replace(ie, t)), (e[3] = (e[3] || e[4] || e[5] || "").replace(ie, t)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                                },
                                CHILD: function (e) {
                                    return (
                                        (e[1] = e[1].toLowerCase()),
                                        "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && se.error(e[0]),
                                        e
                                    );
                                },
                                PSEUDO: function (e) {
                                    var t,
                                        n = !e[6] && e[2];
                                    return J.CHILD.test(e[0])
                                        ? null
                                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && G.test(n) && (t = (t = u(n, !0)) && n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                                },
                            },
                            filter: {
                                TAG: function (e) {
                                    var n = e.replace(ie, t).toLowerCase();
                                    return "*" === e
                                        ? function () {
                                              return !0;
                                          }
                                        : function (e) {
                                              return e.nodeName && e.nodeName.toLowerCase() === n;
                                          };
                                },
                                CLASS: function (e) {
                                    var t = S[e + " "];
                                    return (
                                        t ||
                                        ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                                            S(e, function (e) {
                                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                            }))
                                    );
                                },
                                ATTR: function (e, t, n) {
                                    return function (r) {
                                        return null == (r = se.attr(r, e))
                                            ? "!=" === t
                                            : !t ||
                                                  ((r += ""),
                                                  "=" === t
                                                      ? r === n
                                                      : "!=" === t
                                                      ? r !== n
                                                      : "^=" === t
                                                      ? n && 0 === r.indexOf(n)
                                                      : "*=" === t
                                                      ? n && -1 < r.indexOf(n)
                                                      : "$=" === t
                                                      ? n && r.slice(-n.length) === n
                                                      : "~=" === t
                                                      ? -1 < (" " + r.replace(K, " ") + " ").indexOf(n)
                                                      : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
                                    };
                                },
                                CHILD: function (e, t, n, r, i) {
                                    var o = "nth" !== e.slice(0, 3),
                                        a = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === r && 0 === i
                                        ? function (e) {
                                              return !!e.parentNode;
                                          }
                                        : function (t, n, c) {
                                              var u,
                                                  l,
                                                  d,
                                                  p,
                                                  f,
                                                  h,
                                                  g = o != a ? "nextSibling" : "previousSibling",
                                                  m = t.parentNode,
                                                  v = s && t.nodeName.toLowerCase(),
                                                  y = !c && !s,
                                                  b = !1;
                                              if (m) {
                                                  if (o) {
                                                      for (; g; ) {
                                                          for (p = t; (p = p[g]); ) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                                          h = g = "only" === e && !h && "nextSibling";
                                                      }
                                                      return !0;
                                                  }
                                                  if (((h = [a ? m.firstChild : m.lastChild]), a && y)) {
                                                      for (
                                                          b = (f = (u = (l = (d = (p = m)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === C && u[1]) && u[2], p = f && m.childNodes[f];
                                                          (p = (++f && p && p[g]) || ((b = f = 0), h.pop()));
    
                                                      )
                                                          if (1 === p.nodeType && ++b && p === t) {
                                                              l[e] = [C, f, b];
                                                              break;
                                                          }
                                                  } else if (!1 === (b = y ? (f = (u = (l = (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === C && u[1]) : b))
                                                      for (
                                                          ;
                                                          (p = (++f && p && p[g]) || ((b = f = 0), h.pop())) &&
                                                          ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((l = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [C, b]), p !== t));
    
                                                      );
                                                  return (b -= i) === r || (b % r == 0 && 0 <= b / r);
                                              }
                                          };
                                },
                                PSEUDO: function (e, t) {
                                    var n,
                                        r = a.pseudos[e] || a.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                    return r[w]
                                        ? r(t)
                                        : 1 < r.length
                                        ? ((n = [e, e, "", t]),
                                          a.setFilters.hasOwnProperty(e.toLowerCase())
                                              ? ue(function (e, n) {
                                                    for (var i, o = r(e, t), a = o.length; a--; ) e[(i = R(e, o[a]))] = !(n[i] = o[a]);
                                                })
                                              : function (e) {
                                                    return r(e, 0, n);
                                                })
                                        : r;
                                },
                            },
                            pseudos: {
                                not: ue(function (e) {
                                    var t = [],
                                        n = [],
                                        r = l(e.replace($, "$1"));
                                    return r[w]
                                        ? ue(function (e, t, n, i) {
                                              for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                                          })
                                        : function (e, i, o) {
                                              return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                                          };
                                }),
                                has: ue(function (e) {
                                    return function (t) {
                                        return 0 < se(e, t).length;
                                    };
                                }),
                                contains: ue(function (e) {
                                    return (
                                        (e = e.replace(ie, t)),
                                        function (t) {
                                            return -1 < (t.textContent || s(t)).indexOf(e);
                                        }
                                    );
                                }),
                                lang: ue(function (e) {
                                    return (
                                        X.test(e || "") || se.error("unsupported lang: " + e),
                                        (e = e.replace(ie, t).toLowerCase()),
                                        function (t) {
                                            var n;
                                            do {
                                                if ((n = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1;
                                        }
                                    );
                                }),
                                target: function (t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id;
                                },
                                root: function (e) {
                                    return e === v;
                                },
                                focus: function (e) {
                                    return e === m.activeElement && (!m.hasFocus || m.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                                },
                                enabled: fe(!1),
                                disabled: fe(!0),
                                checked: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                                },
                                selected: function (e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                                },
                                empty: function (e) {
                                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                    return !0;
                                },
                                parent: function (e) {
                                    return !a.pseudos.empty(e);
                                },
                                header: function (e) {
                                    return ee.test(e.nodeName);
                                },
                                input: function (e) {
                                    return Z.test(e.nodeName);
                                },
                                button: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && "button" === e.type) || "button" === t;
                                },
                                text: function (e) {
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
                                },
                                first: he(function () {
                                    return [0];
                                }),
                                last: he(function (e, t) {
                                    return [t - 1];
                                }),
                                eq: he(function (e, t, n) {
                                    return [n < 0 ? n + t : n];
                                }),
                                even: he(function (e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                odd: he(function (e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                lt: he(function (e, t, n) {
                                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                                    return e;
                                }),
                                gt: he(function (e, t, n) {
                                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                                    return e;
                                }),
                            },
                        }).pseudos.nth = a.pseudos.eq),
                        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                            a.pseudos[i] = (function (e) {
                                return function (t) {
                                    return "input" === t.nodeName.toLowerCase() && t.type === e;
                                };
                            })(i);
                        for (i in { submit: !0, reset: !0 })
                            a.pseudos[i] = (function (e) {
                                return function (t) {
                                    var n = t.nodeName.toLowerCase();
                                    return ("input" === n || "button" === n) && t.type === e;
                                };
                            })(i);
                        function me() {}
                        function ve(e) {
                            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                            return r;
                        }
                        function ye(e, t, n) {
                            var r = t.dir,
                                i = t.next,
                                o = i || r,
                                a = n && "parentNode" === o,
                                s = T++;
                            return t.first
                                ? function (t, n, i) {
                                      for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
                                      return !1;
                                  }
                                : function (t, n, c) {
                                      var u,
                                          l,
                                          d = [C, s];
                                      if (c) {
                                          for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, c)) return !0;
                                      } else
                                          for (; (t = t[r]); )
                                              if (1 === t.nodeType || a)
                                                  if (((l = (l = t[w] || (t[w] = {}))[t.uniqueID] || (l[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                                  else {
                                                      if ((u = l[o]) && u[0] === C && u[1] === s) return (d[2] = u[2]);
                                                      if (((l[o] = d)[2] = e(t, n, c))) return !0;
                                                  }
                                      return !1;
                                  };
                        }
                        function be(e) {
                            return 1 < e.length
                                ? function (t, n, r) {
                                      for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                                      return !0;
                                  }
                                : e[0];
                        }
                        function xe(e, t, n, r, i) {
                            for (var o, a = [], s = 0, c = e.length, u = null != t; s < c; s++) !(o = e[s]) || (n && !n(o, r, i)) || (a.push(o), u && t.push(s));
                            return a;
                        }
                        function ke(e) {
                            for (
                                var t,
                                    n,
                                    r,
                                    i = e.length,
                                    o = a.relative[e[0].type],
                                    s = o || a.relative[" "],
                                    c = o ? 1 : 0,
                                    u = ye(
                                        function (e) {
                                            return e === t;
                                        },
                                        s,
                                        !0
                                    ),
                                    l = ye(
                                        function (e) {
                                            return -1 < R(t, e);
                                        },
                                        s,
                                        !0
                                    ),
                                    d = [
                                        function (e, n, r) {
                                            return (e = (!o && (r || n !== p)) || ((t = n).nodeType ? u : l)(e, n, r)), (t = null), e;
                                        },
                                    ];
                                c < i;
                                c++
                            )
                                if ((n = a.relative[e[c].type])) d = [ye(be(d), n)];
                                else {
                                    if ((n = a.filter[e[c].type].apply(null, e[c].matches))[w]) {
                                        for (r = ++c; r < i && !a.relative[e[r].type]; r++);
                                        return (function e(t, n, r, i, o, a) {
                                            return (
                                                i && !i[w] && (i = e(i)),
                                                o && !o[w] && (o = e(o, a)),
                                                ue(function (e, a, s, c) {
                                                    var u,
                                                        l,
                                                        d,
                                                        p = [],
                                                        f = [],
                                                        h = a.length,
                                                        g =
                                                            e ||
                                                            (function (e, t, n) {
                                                                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                                                return n;
                                                            })(n || "*", s.nodeType ? [s] : s, []),
                                                        m = !t || (!e && n) ? g : xe(g, p, t, s, c),
                                                        v = r ? (o || (e ? t : h || i) ? [] : a) : m;
                                                    if ((r && r(m, v, s, c), i)) for (u = xe(v, f), i(u, [], s, c), l = u.length; l--; ) (d = u[l]) && (v[f[l]] = !(m[f[l]] = d));
                                                    if (e) {
                                                        if (o || t) {
                                                            if (o) {
                                                                for (u = [], l = v.length; l--; ) (d = v[l]) && u.push((m[l] = d));
                                                                o(null, (v = []), u, c);
                                                            }
                                                            for (l = v.length; l--; ) (d = v[l]) && -1 < (u = o ? R(e, d) : p[l]) && (e[u] = !(a[u] = d));
                                                        }
                                                    } else (v = xe(v === a ? v.splice(h, v.length) : v)), o ? o(null, a, v, c) : P.apply(a, v);
                                                })
                                            );
                                        })(1 < c && be(d), 1 < c && ve(e.slice(0, c - 1).concat({ value: " " === e[c - 2].type ? "*" : "" })).replace($, "$1"), n, c < r && ke(e.slice(c, r)), r < i && ke((e = e.slice(r))), r < i && ve(e));
                                    }
                                    d.push(n);
                                }
                            return be(d);
                        }
                        return (
                            (me.prototype = a.filters = a.pseudos),
                            (a.setFilters = new me()),
                            (u = se.tokenize = function (e, t) {
                                var n,
                                    r,
                                    i,
                                    o,
                                    s,
                                    c,
                                    u,
                                    l = M[e + " "];
                                if (l) return t ? 0 : l.slice(0);
                                for (s = e, c = [], u = a.preFilter; s; ) {
                                    for (o in ((n && !(r = U.exec(s))) || (r && (s = s.slice(r[0].length) || s), c.push((i = []))),
                                    (n = !1),
                                    (r = z.exec(s)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace($, " ") }), (s = s.slice(n.length))),
                                    a.filter))
                                        !(r = J[o].exec(s)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (s = s.slice(n.length)));
                                    if (!n) break;
                                }
                                return t ? s.length : s ? se.error(e) : M(e, c).slice(0);
                            }),
                            (l = se.compile = function (e, t) {
                                var n,
                                    r,
                                    i,
                                    o,
                                    s,
                                    c = [],
                                    l = [],
                                    d = A[e + " "];
                                if (!d) {
                                    for (n = (t = t || u(e)).length; n--; ) ((d = ke(t[n]))[w] ? c : l).push(d);
                                    (d = A(e, ((s = 0 < (r = l).length), (o = 0 < (i = c).length) ? ue(f) : f))).selector = e;
                                }
                                function f(e, t, n, c, u) {
                                    var l,
                                        d,
                                        f,
                                        h = 0,
                                        v = "0",
                                        b = e && [],
                                        x = [],
                                        k = p,
                                        _ = e || (s && a.find.TAG("*", u)),
                                        w = (C += null == k ? 1 : Math.random() || 0.1),
                                        D = _.length;
                                    for (u && (p = t == m || t || u); v !== D && null != (l = _[v]); v++) {
                                        if (s && l) {
                                            for (d = 0, t || l.ownerDocument == m || (g(l), (n = !y)); (f = r[d++]); )
                                                if (f(l, t || m, n)) {
                                                    c.push(l);
                                                    break;
                                                }
                                            u && (C = w);
                                        }
                                        o && ((l = !f && l) && h--, e) && b.push(l);
                                    }
                                    if (((h += v), o && v !== h)) {
                                        for (d = 0; (f = i[d++]); ) f(b, x, t, n);
                                        if (e) {
                                            if (0 < h) for (; v--; ) b[v] || x[v] || (x[v] = O.call(c));
                                            x = xe(x);
                                        }
                                        P.apply(c, x), u && !e && 0 < x.length && 1 < h + i.length && se.uniqueSort(c);
                                    }
                                    return u && ((C = w), (p = k)), b;
                                }
                                return d;
                            }),
                            (d = se.select = function (e, n, r, i) {
                                var o,
                                    s,
                                    c,
                                    d,
                                    p,
                                    f = "function" == typeof e && e,
                                    h = !i && u((e = f.selector || e));
                                if (((r = r || []), 1 === h.length)) {
                                    if (2 < (s = h[0] = h[0].slice(0)).length && "ID" === (c = s[0]).type && 9 === n.nodeType && y && a.relative[s[1].type]) {
                                        if (!(n = (a.find.ID(c.matches[0].replace(ie, t), n) || [])[0])) return r;
                                        f && (n = n.parentNode), (e = e.slice(s.shift().value.length));
                                    }
                                    for (o = J.needsContext.test(e) ? 0 : s.length; o-- && ((c = s[o]), !a.relative[(d = c.type)]); )
                                        if ((p = a.find[d]) && (i = p(c.matches[0].replace(ie, t), (re.test(s[0].type) && ge(n.parentNode)) || n))) {
                                            if ((s.splice(o, 1), (e = i.length && ve(s)))) break;
                                            return P.apply(r, i), r;
                                        }
                                }
                                return (f || l(e, h))(i, n, !y, r, !n || (re.test(e) && ge(n.parentNode)) || n), r;
                            }),
                            (o.sortStable = w.split("").sort(E).join("") === w),
                            (o.detectDuplicates = !!h),
                            g(),
                            (o.sortDetached = le(function (e) {
                                return 1 & e.compareDocumentPosition(m.createElement("fieldset"));
                            })),
                            le(function (e) {
                                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                            }) ||
                                de("type|href|height|width", function (e, t, n) {
                                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                                }),
                            (o.attributes &&
                                le(function (e) {
                                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                                })) ||
                                de("value", function (e, t, n) {
                                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                                }),
                            le(function (e) {
                                return null == e.getAttribute("disabled");
                            }) ||
                                de(q, function (e, t, n) {
                                    if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
                                }),
                            se
                        );
                    })(n),
                    M =
                        ((w.find = S),
                        (w.expr = S.selectors),
                        (w.expr[":"] = w.expr.pseudos),
                        (w.uniqueSort = w.unique = S.uniqueSort),
                        (w.text = S.getText),
                        (w.isXMLDoc = S.isXML),
                        (w.contains = S.contains),
                        (w.escapeSelector = S.escape),
                        w.expr.match.needsContext);
                function A(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                }
                var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function E(e, t, n) {
                    return o(t)
                        ? w.grep(e, function (e, r) {
                              return !!t.call(e, r, e) !== n;
                          })
                        : t.nodeType
                        ? w.grep(e, function (e) {
                              return (e === t) !== n;
                          })
                        : "string" != typeof t
                        ? w.grep(e, function (e) {
                              return -1 < p.call(t, e) !== n;
                          })
                        : w.filter(t, e, n);
                }
                (w.filter = function (e, t, n) {
                    var r = t[0];
                    return (
                        n && (e = ":not(" + e + ")"),
                        1 === t.length && 1 === r.nodeType
                            ? w.find.matchesSelector(r, e)
                                ? [r]
                                : []
                            : w.find.matches(
                                  e,
                                  w.grep(t, function (e) {
                                      return 1 === e.nodeType;
                                  })
                              )
                    );
                }),
                    w.fn.extend({
                        find: function (e) {
                            var t,
                                n,
                                r = this.length,
                                i = this;
                            if ("string" != typeof e)
                                return this.pushStack(
                                    w(e).filter(function () {
                                        for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                                    })
                                );
                            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                            return 1 < r ? w.uniqueSort(n) : n;
                        },
                        filter: function (e) {
                            return this.pushStack(E(this, e || [], !1));
                        },
                        not: function (e) {
                            return this.pushStack(E(this, e || [], !0));
                        },
                        is: function (e) {
                            return !!E(this, "string" == typeof e && M.test(e) ? w(e) : e || [], !1).length;
                        },
                    });
                var N,
                    I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                    O =
                        (((w.fn.init = function (e, t, n) {
                            if (e) {
                                if (((n = n || N), "string" != typeof e)) return e.nodeType ? ((this[0] = e), (this.length = 1), this) : o(e) ? (void 0 !== n.ready ? n.ready(e) : e(w)) : w.makeArray(e, this);
                                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || (!r[1] && t)) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                                if (r[1]) {
                                    if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), j.test(r[1]) && w.isPlainObject(t)))
                                        for (var r in t) o(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                } else (n = b.getElementById(r[2])) && ((this[0] = n), (this.length = 1));
                            }
                            return this;
                        }).prototype = w.fn),
                        (N = w(b)),
                        /^(?:parents|prev(?:Until|All))/),
                    L = { children: !0, contents: !0, next: !0, prev: !0 };
                function P(e, t) {
                    for (; (e = e[t]) && 1 !== e.nodeType; );
                    return e;
                }
                w.fn.extend({
                    has: function (e) {
                        var t = w(e, this),
                            n = t.length;
                        return this.filter(function () {
                            for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
                        });
                    },
                    closest: function (e, t) {
                        var n,
                            r = 0,
                            i = this.length,
                            o = [],
                            a = "string" != typeof e && w(e);
                        if (!M.test(e))
                            for (; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break;
                                    }
                        return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
                    },
                    index: function (e) {
                        return e ? ("string" == typeof e ? p.call(w(e), this[0]) : p.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                    },
                    add: function (e, t) {
                        return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
                    },
                    addBack: function (e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                    },
                }),
                    w.each(
                        {
                            parent: function (e) {
                                return (e = e.parentNode) && 11 !== e.nodeType ? e : null;
                            },
                            parents: function (e) {
                                return C(e, "parentNode");
                            },
                            parentsUntil: function (e, t, n) {
                                return C(e, "parentNode", n);
                            },
                            next: function (e) {
                                return P(e, "nextSibling");
                            },
                            prev: function (e) {
                                return P(e, "previousSibling");
                            },
                            nextAll: function (e) {
                                return C(e, "nextSibling");
                            },
                            prevAll: function (e) {
                                return C(e, "previousSibling");
                            },
                            nextUntil: function (e, t, n) {
                                return C(e, "nextSibling", n);
                            },
                            prevUntil: function (e, t, n) {
                                return C(e, "previousSibling", n);
                            },
                            siblings: function (e) {
                                return T((e.parentNode || {}).firstChild, e);
                            },
                            children: function (e) {
                                return T(e.firstChild);
                            },
                            contents: function (e) {
                                return null != e.contentDocument && c(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
                            },
                        },
                        function (e, t) {
                            w.fn[e] = function (n, r) {
                                var i = w.map(this, t, n);
                                return (r = "Until" !== e.slice(-5) ? n : r) && "string" == typeof r && (i = w.filter(r, i)), 1 < this.length && (L[e] || w.uniqueSort(i), O.test(e)) && i.reverse(), this.pushStack(i);
                            };
                        }
                    );
                var F = /[^\x20\t\r\n\f]+/g;
                function R(e) {
                    return e;
                }
                function q(e) {
                    throw e;
                }
                function H(e, t, n, r) {
                    var i;
                    try {
                        e && o((i = e.promise)) ? i.call(e).done(t).fail(n) : e && o((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
                    } catch (e) {
                        n.apply(void 0, [e]);
                    }
                }
                (w.Callbacks = function (e) {
                    var t, n;
                    function r() {
                        for (c = c || e.once, s = i = !0; l.length; d = -1) for (a = l.shift(); ++d < u.length; ) !1 === u[d].apply(a[0], a[1]) && e.stopOnFalse && ((d = u.length), (a = !1));
                        e.memory || (a = !1), (i = !1), c && (u = a ? [] : "");
                    }
                    e =
                        "string" == typeof e
                            ? ((t = e),
                              (n = {}),
                              w.each(t.match(F) || [], function (e, t) {
                                  n[t] = !0;
                              }),
                              n)
                            : w.extend({}, e);
                    var i,
                        a,
                        s,
                        c,
                        u = [],
                        l = [],
                        d = -1,
                        p = {
                            add: function () {
                                return (
                                    u &&
                                        (a && !i && ((d = u.length - 1), l.push(a)),
                                        (function t(n) {
                                            w.each(n, function (n, r) {
                                                o(r) ? (e.unique && p.has(r)) || u.push(r) : r && r.length && "string" !== _(r) && t(r);
                                            });
                                        })(arguments),
                                        a) &&
                                        !i &&
                                        r(),
                                    this
                                );
                            },
                            remove: function () {
                                return (
                                    w.each(arguments, function (e, t) {
                                        for (var n; -1 < (n = w.inArray(t, u, n)); ) u.splice(n, 1), n <= d && d--;
                                    }),
                                    this
                                );
                            },
                            has: function (e) {
                                return e ? -1 < w.inArray(e, u) : 0 < u.length;
                            },
                            empty: function () {
                                return (u = u && []), this;
                            },
                            disable: function () {
                                return (c = l = []), (u = a = ""), this;
                            },
                            disabled: function () {
                                return !u;
                            },
                            lock: function () {
                                return (c = l = []), a || i || (u = a = ""), this;
                            },
                            locked: function () {
                                return !!c;
                            },
                            fireWith: function (e, t) {
                                return c || ((t = [e, (t = t || []).slice ? t.slice() : t]), l.push(t), i) || r(), this;
                            },
                            fire: function () {
                                return p.fireWith(this, arguments), this;
                            },
                            fired: function () {
                                return !!s;
                            },
                        };
                    return p;
                }),
                    w.extend({
                        Deferred: function (e) {
                            var t = [
                                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                                ],
                                r = "pending",
                                i = {
                                    state: function () {
                                        return r;
                                    },
                                    always: function () {
                                        return a.done(arguments).fail(arguments), this;
                                    },
                                    catch: function (e) {
                                        return i.then(null, e);
                                    },
                                    pipe: function () {
                                        var e = arguments;
                                        return w
                                            .Deferred(function (n) {
                                                w.each(t, function (t, r) {
                                                    var i = o(e[r[4]]) && e[r[4]];
                                                    a[r[1]](function () {
                                                        var e = i && i.apply(this, arguments);
                                                        e && o(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                                                    });
                                                }),
                                                    (e = null);
                                            })
                                            .promise();
                                    },
                                    then: function (e, r, i) {
                                        var a = 0;
                                        function s(e, t, r, i) {
                                            return function () {
                                                function c() {
                                                    var n, c;
                                                    if (!(e < a)) {
                                                        if ((n = r.apply(u, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                        o((c = n && ("object" == typeof n || "function" == typeof n) && n.then))
                                                            ? i
                                                                ? c.call(n, s(a, t, R, i), s(a, t, q, i))
                                                                : (a++, c.call(n, s(a, t, R, i), s(a, t, q, i), s(a, t, R, t.notifyWith)))
                                                            : (r !== R && ((u = void 0), (l = [n])), (i || t.resolveWith)(u, l));
                                                    }
                                                }
                                                var u = this,
                                                    l = arguments,
                                                    d = i
                                                        ? c
                                                        : function () {
                                                              try {
                                                                  c();
                                                              } catch (n) {
                                                                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(n, d.stackTrace), a <= e + 1 && (r !== q && ((u = void 0), (l = [n])), t.rejectWith(u, l));
                                                              }
                                                          };
                                                e ? d() : (w.Deferred.getStackHook && (d.stackTrace = w.Deferred.getStackHook()), n.setTimeout(d));
                                            };
                                        }
                                        return w
                                            .Deferred(function (n) {
                                                t[0][3].add(s(0, n, o(i) ? i : R, n.notifyWith)), t[1][3].add(s(0, n, o(e) ? e : R)), t[2][3].add(s(0, n, o(r) ? r : q));
                                            })
                                            .promise();
                                    },
                                    promise: function (e) {
                                        return null != e ? w.extend(e, i) : i;
                                    },
                                },
                                a = {};
                            return (
                                w.each(t, function (e, n) {
                                    var o = n[2],
                                        s = n[5];
                                    (i[n[1]] = o.add),
                                        s &&
                                            o.add(
                                                function () {
                                                    r = s;
                                                },
                                                t[3 - e][2].disable,
                                                t[3 - e][3].disable,
                                                t[0][2].lock,
                                                t[0][3].lock
                                            ),
                                        o.add(n[3].fire),
                                        (a[n[0]] = function () {
                                            return a[n[0] + "With"](this === a ? void 0 : this, arguments), this;
                                        }),
                                        (a[n[0] + "With"] = o.fireWith);
                                }),
                                i.promise(a),
                                e && e.call(a, a),
                                a
                            );
                        },
                        when: function (e) {
                            function t(e) {
                                return function (t) {
                                    (i[e] = this), (a[e] = 1 < arguments.length ? u.call(arguments) : t), --n || s.resolveWith(i, a);
                                };
                            }
                            var n = arguments.length,
                                r = n,
                                i = Array(r),
                                a = u.call(arguments),
                                s = w.Deferred();
                            if (n <= 1 && (H(e, s.done(t(r)).resolve, s.reject, !n), "pending" === s.state() || o(a[r] && a[r].then))) return s.then();
                            for (; r--; ) H(a[r], t(r), s.reject);
                            return s.promise();
                        },
                    });
                var Y = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
                    W =
                        ((w.Deferred.exceptionHook = function (e, t) {
                            n.console && n.console.warn && e && Y.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
                        }),
                        (w.readyException = function (e) {
                            n.setTimeout(function () {
                                throw e;
                            });
                        }),
                        w.Deferred());
                function B() {
                    b.removeEventListener("DOMContentLoaded", B), n.removeEventListener("load", B), w.ready();
                }
                function K(e, t, n, r, i, a, s) {
                    var c = 0,
                        u = e.length,
                        l = null == n;
                    if ("object" === _(n)) for (c in ((i = !0), n)) K(e, t, c, n[c], !0, a, s);
                    else if (
                        void 0 !== r &&
                        ((i = !0),
                        o(r) || (s = !0),
                        (t = l
                            ? s
                                ? (t.call(e, r), null)
                                : ((l = t),
                                  function (e, t, n) {
                                      return l.call(w(e), n);
                                  })
                            : t))
                    )
                        for (; c < u; c++) t(e[c], n, s ? r : r.call(e[c], c, t(e[c], n)));
                    return i ? e : l ? t.call(e) : u ? t(e[0], n) : a;
                }
                (w.fn.ready = function (e) {
                    return (
                        W.then(e).catch(function (e) {
                            w.readyException(e);
                        }),
                        this
                    );
                }),
                    w.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function (e) {
                            (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0) !== e && 0 < --w.readyWait) || W.resolveWith(b, [w]);
                        },
                    }),
                    (w.ready.then = W.then),
                    "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll) ? n.setTimeout(w.ready) : (b.addEventListener("DOMContentLoaded", B), n.addEventListener("load", B));
                var $ = /^-ms-/,
                    U = /-([a-z])/g;
                function z(e, t) {
                    return t.toUpperCase();
                }
                function V(e) {
                    return e.replace($, "ms-").replace(U, z);
                }
                function G(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                }
                function X() {
                    this.expando = w.expando + X.uid++;
                }
                (X.uid = 1),
                    (X.prototype = {
                        cache: function (e) {
                            var t = e[this.expando];
                            return t || ((t = {}), G(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                        },
                        set: function (e, t, n) {
                            var r,
                                i = this.cache(e);
                            if ("string" == typeof t) i[V(t)] = n;
                            else for (r in t) i[V(r)] = t[r];
                            return i;
                        },
                        get: function (e, t) {
                            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
                        },
                        access: function (e, t, n) {
                            return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                        },
                        remove: function (e, t) {
                            var n,
                                r = e[this.expando];
                            if (void 0 !== r) {
                                if (void 0 !== t) {
                                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(F) || []).length;
                                    for (; n--; ) delete r[t[n]];
                                }
                                (void 0 !== t && !w.isEmptyObject(r)) || (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                            }
                        },
                        hasData: function (e) {
                            return void 0 !== (e = e[this.expando]) && !w.isEmptyObject(e);
                        },
                    });
                var J = new X(),
                    Q = new X(),
                    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    ee = /[A-Z]/g;
                function te(e, t, n) {
                    var r, i;
                    if (void 0 === n && 1 === e.nodeType)
                        if (((r = "data-" + t.replace(ee, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                            try {
                                n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : Z.test(i) ? JSON.parse(i) : i));
                            } catch (e) {}
                            Q.set(e, t, n);
                        } else n = void 0;
                    return n;
                }
                function ne(e, t) {
                    return "none" === (e = t || e).style.display || ("" === e.style.display && ae(e) && "none" === w.css(e, "display"));
                }
                w.extend({
                    hasData: function (e) {
                        return Q.hasData(e) || J.hasData(e);
                    },
                    data: function (e, t, n) {
                        return Q.access(e, t, n);
                    },
                    removeData: function (e, t) {
                        Q.remove(e, t);
                    },
                    _data: function (e, t, n) {
                        return J.access(e, t, n);
                    },
                    _removeData: function (e, t) {
                        J.remove(e, t);
                    },
                }),
                    w.fn.extend({
                        data: function (e, t) {
                            var n,
                                r,
                                i,
                                o = this[0],
                                a = o && o.attributes;
                            if (void 0 !== e)
                                return "object" == typeof e
                                    ? this.each(function () {
                                          Q.set(this, e);
                                      })
                                    : K(
                                          this,
                                          function (t) {
                                              var n;
                                              if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) || void 0 !== (n = te(o, e)) ? n : void 0;
                                              this.each(function () {
                                                  Q.set(this, e, t);
                                              });
                                          },
                                          null,
                                          t,
                                          1 < arguments.length,
                                          null,
                                          !0
                                      );
                            if (this.length && ((i = Q.get(o)), 1 === o.nodeType) && !J.get(o, "hasDataAttrs")) {
                                for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = V(r.slice(5))), te(o, r, i[r]));
                                J.set(o, "hasDataAttrs", !0);
                            }
                            return i;
                        },
                        removeData: function (e) {
                            return this.each(function () {
                                Q.remove(this, e);
                            });
                        },
                    }),
                    w.extend({
                        queue: function (e, t, n) {
                            var r;
                            if (e) return (r = J.get(e, (t = (t || "fx") + "queue"))), n && (!r || Array.isArray(n) ? (r = J.access(e, t, w.makeArray(n))) : r.push(n)), r || [];
                        },
                        dequeue: function (e, t) {
                            t = t || "fx";
                            var n = w.queue(e, t),
                                r = n.length,
                                i = n.shift(),
                                o = w._queueHooks(e, t);
                            "inprogress" === i && ((i = n.shift()), r--),
                                i &&
                                    ("fx" === t && n.unshift("inprogress"),
                                    delete o.stop,
                                    i.call(
                                        e,
                                        function () {
                                            w.dequeue(e, t);
                                        },
                                        o
                                    )),
                                !r && o && o.empty.fire();
                        },
                        _queueHooks: function (e, t) {
                            var n = t + "queueHooks";
                            return (
                                J.get(e, n) ||
                                J.access(e, n, {
                                    empty: w.Callbacks("once memory").add(function () {
                                        J.remove(e, [t + "queue", n]);
                                    }),
                                })
                            );
                        },
                    }),
                    w.fn.extend({
                        queue: function (e, t) {
                            var n = 2;
                            return (
                                "string" != typeof e && ((t = e), (e = "fx"), n--),
                                arguments.length < n
                                    ? w.queue(this[0], e)
                                    : void 0 === t
                                    ? this
                                    : this.each(function () {
                                          var n = w.queue(this, e, t);
                                          w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                                      })
                            );
                        },
                        dequeue: function (e) {
                            return this.each(function () {
                                w.dequeue(this, e);
                            });
                        },
                        clearQueue: function (e) {
                            return this.queue(e || "fx", []);
                        },
                        promise: function (e, t) {
                            function n() {
                                --i || o.resolveWith(a, [a]);
                            }
                            var r,
                                i = 1,
                                o = w.Deferred(),
                                a = this,
                                s = this.length;
                            for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (r = J.get(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
                            return n(), o.promise(t);
                        },
                    }),
                    (S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source);
                var re = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
                    ie = ["Top", "Right", "Bottom", "Left"],
                    oe = b.documentElement,
                    ae = function (e) {
                        return w.contains(e.ownerDocument, e);
                    },
                    se = { composed: !0 };
                function ce(e, t, n, r) {
                    var i,
                        o,
                        a = 20,
                        s = r
                            ? function () {
                                  return r.cur();
                              }
                            : function () {
                                  return w.css(e, t, "");
                              },
                        c = s(),
                        u = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
                        l = e.nodeType && (w.cssNumber[t] || ("px" !== u && +c)) && re.exec(w.css(e, t));
                    if (l && l[3] !== u) {
                        for (u = u || l[3], l = +(c /= 2) || 1; a--; ) w.style(e, t, l + u), (1 - o) * (1 - (o = s() / c || 0.5)) <= 0 && (a = 0), (l /= o);
                        w.style(e, t, (l *= 2) + u), (n = n || []);
                    }
                    return n && ((l = +l || +c || 0), (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]), r) && ((r.unit = u), (r.start = l), (r.end = i)), i;
                }
                oe.getRootNode &&
                    (ae = function (e) {
                        return w.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument;
                    });
                var ue = {};
                function le(e, t) {
                    for (var n, r, i, o, a, s = [], c = 0, u = e.length; c < u; c++)
                        (r = e[c]).style &&
                            ((n = r.style.display),
                            t
                                ? ("none" === n && ((s[c] = J.get(r, "display") || null), s[c] || (r.style.display = "")),
                                  "" === r.style.display &&
                                      ne(r) &&
                                      (s[c] =
                                          ((a = o = void 0),
                                          (o = (i = r).ownerDocument),
                                          (a = ue[(i = i.nodeName)]) || ((o = o.body.appendChild(o.createElement(i))), (a = w.css(o, "display")), o.parentNode.removeChild(o), (ue[i] = a = "none" === a ? "block" : a)))))
                                : "none" !== n && ((s[c] = "none"), J.set(r, "display", n)));
                    for (c = 0; c < u; c++) null != s[c] && (e[c].style.display = s[c]);
                    return e;
                }
                w.fn.extend({
                    show: function () {
                        return le(this, !0);
                    },
                    hide: function () {
                        return le(this);
                    },
                    toggle: function (e) {
                        return "boolean" == typeof e
                            ? e
                                ? this.show()
                                : this.hide()
                            : this.each(function () {
                                  ne(this) ? w(this).show() : w(this).hide();
                              });
                    },
                });
                var de = /^(?:checkbox|radio)$/i,
                    pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    fe = /^$|^module$|\/(?:java|ecma)script/i,
                    he = b.createDocumentFragment().appendChild(b.createElement("div")),
                    ge =
                        ((ft = b.createElement("input")).setAttribute("type", "radio"),
                        ft.setAttribute("checked", "checked"),
                        ft.setAttribute("name", "t"),
                        he.appendChild(ft),
                        (y.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
                        (he.innerHTML = "<textarea>x</textarea>"),
                        (y.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
                        (he.innerHTML = "<option></option>"),
                        (y.option = !!he.lastChild),
                        { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] });
                function me(e, t) {
                    var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                    return void 0 === t || (t && A(e, t)) ? w.merge([e], n) : n;
                }
                function ve(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
                }
                (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td), y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
                var ye = /<|&#?\w+;/;
                function be(e, t, n, r, i) {
                    for (var o, a, s, c, u, l = t.createDocumentFragment(), d = [], p = 0, f = e.length; p < f; p++)
                        if ((o = e[p]) || 0 === o)
                            if ("object" === _(o)) w.merge(d, o.nodeType ? [o] : o);
                            else if (ye.test(o)) {
                                for (a = a || l.appendChild(t.createElement("div")), s = (pe.exec(o) || ["", ""])[1].toLowerCase(), s = ge[s] || ge._default, a.innerHTML = s[1] + w.htmlPrefilter(o) + s[2], u = s[0]; u--; ) a = a.lastChild;
                                w.merge(d, a.childNodes), ((a = l.firstChild).textContent = "");
                            } else d.push(t.createTextNode(o));
                    for (l.textContent = "", p = 0; (o = d[p++]); )
                        if (r && -1 < w.inArray(o, r)) i && i.push(o);
                        else if (((c = ae(o)), (a = me(l.appendChild(o), "script")), c && ve(a), n)) for (u = 0; (o = a[u++]); ) fe.test(o.type || "") && n.push(o);
                    return l;
                }
                var xe = /^key/,
                    ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                    _e = /^([^.]*)(?:\.(.+)|)/;
                function we() {
                    return !0;
                }
                function De() {
                    return !1;
                }
                function Ce(e, t) {
                    return (
                        (e ===
                            (function () {
                                try {
                                    return b.activeElement;
                                } catch (e) {}
                            })()) ==
                        ("focus" === t)
                    );
                }
                function Te(e, t, n, r, i, o) {
                    var a, s;
                    if ("object" == typeof t) {
                        for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Te(e, s, n, r, t[s], o);
                        return e;
                    }
                    if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = De;
                    else if (!i) return e;
                    return (
                        1 === o &&
                            ((a = i),
                            ((i = function (e) {
                                return w().off(e), a.apply(this, arguments);
                            }).guid = a.guid || (a.guid = w.guid++))),
                        e.each(function () {
                            w.event.add(this, t, i, r, n);
                        })
                    );
                }
                function Se(e, t, n) {
                    n
                        ? (J.set(e, t, !1),
                          w.event.add(e, t, {
                              namespace: !1,
                              handler: function (e) {
                                  var r,
                                      i,
                                      o = J.get(this, t);
                                  if (1 & e.isTrigger && this[t]) {
                                      if (o.length) (w.event.special[t] || {}).delegateType && e.stopPropagation();
                                      else if (((o = u.call(arguments)), J.set(this, t, o), (r = n(this, t)), this[t](), o !== (i = J.get(this, t)) || r ? J.set(this, t, !1) : (i = {}), o !== i))
                                          return e.stopImmediatePropagation(), e.preventDefault(), i.value;
                                  } else o.length && (J.set(this, t, { value: w.event.trigger(w.extend(o[0], w.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
                              },
                          }))
                        : void 0 === J.get(e, t) && w.event.add(e, t, we);
                }
                (w.event = {
                    global: {},
                    add: function (e, t, n, r, i) {
                        var o,
                            a,
                            s,
                            c,
                            u,
                            l,
                            d,
                            p,
                            f,
                            h = J.get(e);
                        if (G(e))
                            for (
                                n.handler && ((n = (o = n).handler), (i = o.selector)),
                                    i && w.find.matchesSelector(oe, i),
                                    n.guid || (n.guid = w.guid++),
                                    s = (s = h.events) || (h.events = Object.create(null)),
                                    a =
                                        (a = h.handle) ||
                                        (h.handle = function (t) {
                                            return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                                        }),
                                    c = (t = (t || "").match(F) || [""]).length;
                                c--;
    
                            )
                                (d = f = (p = _e.exec(t[c]) || [])[1]),
                                    (p = (p[2] || "").split(".").sort()),
                                    d &&
                                        ((u = w.event.special[d] || {}),
                                        (d = (i ? u.delegateType : u.bindType) || d),
                                        (u = w.event.special[d] || {}),
                                        (f = w.extend({ type: d, origType: f, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: p.join(".") }, o)),
                                        (l = s[d]) || (((l = s[d] = []).delegateCount = 0), u.setup && !1 !== u.setup.call(e, r, p, a)) || (e.addEventListener && e.addEventListener(d, a)),
                                        u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)),
                                        i ? l.splice(l.delegateCount++, 0, f) : l.push(f),
                                        (w.event.global[d] = !0));
                    },
                    remove: function (e, t, n, r, i) {
                        var o,
                            a,
                            s,
                            c,
                            u,
                            l,
                            d,
                            p,
                            f,
                            h,
                            g,
                            m = J.hasData(e) && J.get(e);
                        if (m && (c = m.events)) {
                            for (u = (t = (t || "").match(F) || [""]).length; u--; )
                                if (((f = g = (s = _e.exec(t[u]) || [])[1]), (h = (s[2] || "").split(".").sort()), f)) {
                                    for (d = w.event.special[f] || {}, p = c[(f = (r ? d.delegateType : d.bindType) || f)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--; )
                                        (l = p[o]),
                                            (!i && g !== l.origType) ||
                                                (n && n.guid !== l.guid) ||
                                                (s && !s.test(l.namespace)) ||
                                                (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                                                (p.splice(o, 1), l.selector && p.delegateCount--, d.remove && d.remove.call(e, l));
                                    a && !p.length && ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) || w.removeEvent(e, f, m.handle), delete c[f]);
                                } else for (f in c) w.event.remove(e, f + t[u], n, r, !0);
                            w.isEmptyObject(c) && J.remove(e, "handle events");
                        }
                    },
                    dispatch: function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            a = new Array(arguments.length),
                            s = w.event.fix(e),
                            c = ((e = (J.get(this, "events") || Object.create(null))[s.type] || []), w.event.special[s.type] || {});
                        for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                        if (((s.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, s))) {
                            for (o = w.event.handlers.call(this, s, e), t = 0; (r = o[t++]) && !s.isPropagationStopped(); )
                                for (s.currentTarget = r.elem, n = 0; (i = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                                    (s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace)) ||
                                        ((s.handleObj = i), (s.data = i.data), void 0 !== (i = ((w.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                            return c.postDispatch && c.postDispatch.call(this, s), s.result;
                        }
                    },
                    handlers: function (e, t) {
                        var n,
                            r,
                            i,
                            o,
                            a,
                            s = [],
                            c = t.delegateCount,
                            u = e.target;
                        if (c && u.nodeType && !("click" === e.type && 1 <= e.button))
                            for (; u !== this; u = u.parentNode || this)
                                if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                                    for (o = [], a = {}, n = 0; n < c; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < w(i, this).index(u) : w.find(i, this, null, [u]).length), a[i] && o.push(r);
                                    o.length && s.push({ elem: u, handlers: o });
                                }
                        return (u = this), c < t.length && s.push({ elem: u, handlers: t.slice(c) }), s;
                    },
                    addProp: function (e, t) {
                        Object.defineProperty(w.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: o(t)
                                ? function () {
                                      if (this.originalEvent) return t(this.originalEvent);
                                  }
                                : function () {
                                      if (this.originalEvent) return this.originalEvent[e];
                                  },
                            set: function (t) {
                                Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                            },
                        });
                    },
                    fix: function (e) {
                        return e[w.expando] ? e : new w.Event(e);
                    },
                    special: {
                        load: { noBubble: !0 },
                        click: {
                            setup: function (e) {
                                return (e = this || e), de.test(e.type) && e.click && A(e, "input") && Se(e, "click", we), !1;
                            },
                            trigger: function (e) {
                                return (e = this || e), de.test(e.type) && e.click && A(e, "input") && Se(e, "click"), !0;
                            },
                            _default: function (e) {
                                return (e = e.target), (de.test(e.type) && e.click && A(e, "input") && J.get(e, "click")) || A(e, "a");
                            },
                        },
                        beforeunload: {
                            postDispatch: function (e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                            },
                        },
                    },
                }),
                    (w.removeEvent = function (e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n);
                    }),
                    (w.Event = function (e, t) {
                        if (!(this instanceof w.Event)) return new w.Event(e, t);
                        e && e.type
                            ? ((this.originalEvent = e),
                              (this.type = e.type),
                              (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? we : De),
                              (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                              (this.currentTarget = e.currentTarget),
                              (this.relatedTarget = e.relatedTarget))
                            : (this.type = e),
                            t && w.extend(this, t),
                            (this.timeStamp = (e && e.timeStamp) || Date.now()),
                            (this[w.expando] = !0);
                    }),
                    (w.Event.prototype = {
                        constructor: w.Event,
                        isDefaultPrevented: De,
                        isPropagationStopped: De,
                        isImmediatePropagationStopped: De,
                        isSimulated: !1,
                        preventDefault: function () {
                            var e = this.originalEvent;
                            (this.isDefaultPrevented = we), e && !this.isSimulated && e.preventDefault();
                        },
                        stopPropagation: function () {
                            var e = this.originalEvent;
                            (this.isPropagationStopped = we), e && !this.isSimulated && e.stopPropagation();
                        },
                        stopImmediatePropagation: function () {
                            var e = this.originalEvent;
                            (this.isImmediatePropagationStopped = we), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                        },
                    }),
                    w.each(
                        {
                            altKey: !0,
                            bubbles: !0,
                            cancelable: !0,
                            changedTouches: !0,
                            ctrlKey: !0,
                            detail: !0,
                            eventPhase: !0,
                            metaKey: !0,
                            pageX: !0,
                            pageY: !0,
                            shiftKey: !0,
                            view: !0,
                            char: !0,
                            code: !0,
                            charCode: !0,
                            key: !0,
                            keyCode: !0,
                            button: !0,
                            buttons: !0,
                            clientX: !0,
                            clientY: !0,
                            offsetX: !0,
                            offsetY: !0,
                            pointerId: !0,
                            pointerType: !0,
                            screenX: !0,
                            screenY: !0,
                            targetTouches: !0,
                            toElement: !0,
                            touches: !0,
                            which: function (e) {
                                var t = e.button;
                                return null == e.which && xe.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && ke.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                            },
                        },
                        w.event.addProp
                    ),
                    w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                        w.event.special[e] = {
                            setup: function () {
                                return Se(this, e, Ce), !1;
                            },
                            trigger: function () {
                                return Se(this, e), !0;
                            },
                            delegateType: t,
                        };
                    }),
                    w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                        w.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function (e) {
                                var n,
                                    r = e.relatedTarget,
                                    i = e.handleObj;
                                return (r && (r === this || w.contains(this, r))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                            },
                        };
                    }),
                    w.fn.extend({
                        on: function (e, t, n, r) {
                            return Te(this, e, t, n, r);
                        },
                        one: function (e, t, n, r) {
                            return Te(this, e, t, n, r, 1);
                        },
                        off: function (e, t, n) {
                            var r, i;
                            if (e && e.preventDefault && e.handleObj) (r = e.handleObj), w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                            else {
                                if ("object" != typeof e)
                                    return (
                                        (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                                        !1 === n && (n = De),
                                        this.each(function () {
                                            w.event.remove(this, e, n, t);
                                        })
                                    );
                                for (i in e) this.off(i, t, e[i]);
                            }
                            return this;
                        },
                    });
                var Me = /<script|<style|<link/i,
                    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                function Ee(e, t) {
                    return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0]) || e;
                }
                function Ne(e) {
                    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
                }
                function Ie(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
                }
                function Oe(e, t) {
                    var n, r, i, o;
                    if (1 === t.nodeType) {
                        if (J.hasData(e) && (o = J.get(e).events)) for (i in (J.remove(t, "handle events"), o)) for (n = 0, r = o[i].length; n < r; n++) w.event.add(t, i, o[i][n]);
                        Q.hasData(e) && ((e = Q.access(e)), (e = w.extend({}, e)), Q.set(t, e));
                    }
                }
                function Le(e, t, n, r) {
                    t = l(t);
                    var i,
                        a,
                        s,
                        c,
                        u,
                        d,
                        p = 0,
                        f = e.length,
                        h = f - 1,
                        g = t[0],
                        m = o(g);
                    if (m || (1 < f && "string" == typeof g && !y.checkClone && Ae.test(g)))
                        return e.each(function (i) {
                            var o = e.eq(i);
                            m && (t[0] = g.call(this, i, o.html())), Le(o, t, n, r);
                        });
                    if (f && ((a = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = a), a || r)) {
                        for (c = (s = w.map(me(i, "script"), Ne)).length; p < f; p++) (u = i), p !== h && ((u = w.clone(u, !0, !0)), c) && w.merge(s, me(u, "script")), n.call(e[p], u, p);
                        if (c)
                            for (d = s[s.length - 1].ownerDocument, w.map(s, Ie), p = 0; p < c; p++)
                                (u = s[p]),
                                    fe.test(u.type || "") &&
                                        !J.access(u, "globalEval") &&
                                        w.contains(d, u) &&
                                        (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, d) : k(u.textContent.replace(je, ""), u, d));
                    }
                    return e;
                }
                function Pe(e, t, n) {
                    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(me(r)), r.parentNode && (n && ae(r) && ve(me(r, "script")), r.parentNode.removeChild(r));
                    return e;
                }
                function Fe(e) {
                    var t = e.ownerDocument.defaultView;
                    return (t = t && t.opener ? t : n).getComputedStyle(e);
                }
                function Re(e, t, n) {
                    var r,
                        i = {};
                    for (r in t) (i[r] = e.style[r]), (e.style[r] = t[r]);
                    for (r in ((n = n.call(e)), t)) e.style[r] = i[r];
                    return n;
                }
                w.extend({
                    htmlPrefilter: function (e) {
                        return e;
                    },
                    clone: function (e, t, n) {
                        var r,
                            i,
                            o,
                            a,
                            s,
                            c,
                            u,
                            l = e.cloneNode(!0),
                            d = ae(e);
                        if (!(y.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e)))
                            for (a = me(l), r = 0, i = (o = me(e)).length; r < i; r++)
                                (s = o[r]), "input" === (u = (c = a[r]).nodeName.toLowerCase()) && de.test(s.type) ? (c.checked = s.checked) : ("input" !== u && "textarea" !== u) || (c.defaultValue = s.defaultValue);
                        if (t)
                            if (n) for (o = o || me(e), a = a || me(l), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                            else Oe(e, l);
                        return 0 < (a = me(l, "script")).length && ve(a, !d && me(e, "script")), l;
                    },
                    cleanData: function (e) {
                        for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                            if (G(n)) {
                                if ((t = n[J.expando])) {
                                    if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                                    n[J.expando] = void 0;
                                }
                                n[Q.expando] && (n[Q.expando] = void 0);
                            }
                    },
                }),
                    w.fn.extend({
                        detach: function (e) {
                            return Pe(this, e, !0);
                        },
                        remove: function (e) {
                            return Pe(this, e);
                        },
                        text: function (e) {
                            return K(
                                this,
                                function (e) {
                                    return void 0 === e
                                        ? w.text(this)
                                        : this.empty().each(function () {
                                              (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                          });
                                },
                                null,
                                e,
                                arguments.length
                            );
                        },
                        append: function () {
                            return Le(this, arguments, function (e) {
                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Ee(this, e).appendChild(e);
                            });
                        },
                        prepend: function () {
                            return Le(this, arguments, function (e) {
                                var t;
                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (t = Ee(this, e)).insertBefore(e, t.firstChild);
                            });
                        },
                        before: function () {
                            return Le(this, arguments, function (e) {
                                this.parentNode && this.parentNode.insertBefore(e, this);
                            });
                        },
                        after: function () {
                            return Le(this, arguments, function (e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                            });
                        },
                        empty: function () {
                            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), (e.textContent = ""));
                            return this;
                        },
                        clone: function (e, t) {
                            return (
                                (e = null != e && e),
                                (t = null == t ? e : t),
                                this.map(function () {
                                    return w.clone(this, e, t);
                                })
                            );
                        },
                        html: function (e) {
                            return K(
                                this,
                                function (e) {
                                    var t = this[0] || {},
                                        n = 0,
                                        r = this.length;
                                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                    if ("string" == typeof e && !Me.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                                        e = w.htmlPrefilter(e);
                                        try {
                                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), (t.innerHTML = e));
                                            t = 0;
                                        } catch (e) {}
                                    }
                                    t && this.empty().append(e);
                                },
                                null,
                                e,
                                arguments.length
                            );
                        },
                        replaceWith: function () {
                            var e = [];
                            return Le(
                                this,
                                arguments,
                                function (t) {
                                    var n = this.parentNode;
                                    w.inArray(this, e) < 0 && (w.cleanData(me(this)), n) && n.replaceChild(t, this);
                                },
                                e
                            );
                        },
                    }),
                    w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                        w.fn[e] = function (e) {
                            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), w(i[a])[t](n), d.apply(r, n.get());
                            return this.pushStack(r);
                        };
                    });
                var qe,
                    He,
                    Ye,
                    We,
                    Be,
                    Ke,
                    $e,
                    Ue,
                    ze = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
                    Ve = new RegExp(ie.join("|"), "i");
                function Ge(e, t, n) {
                    var r,
                        i,
                        o = e.style;
                    return (
                        (n = n || Fe(e)) &&
                            ("" !== (i = n.getPropertyValue(t) || n[t]) || ae(e) || (i = w.style(e, t)), !y.pixelBoxStyles()) &&
                            ze.test(i) &&
                            Ve.test(t) &&
                            ((e = o.width), (t = o.minWidth), (r = o.maxWidth), (o.minWidth = o.maxWidth = o.width = i), (i = n.width), (o.width = e), (o.minWidth = t), (o.maxWidth = r)),
                        void 0 !== i ? i + "" : i
                    );
                }
                function Xe(e, t) {
                    return {
                        get: function () {
                            if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get;
                        },
                    };
                }
                function Je() {
                    var e;
                    Ue &&
                        (($e.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                        (Ue.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                        oe.appendChild($e).appendChild(Ue),
                        (e = n.getComputedStyle(Ue)),
                        (qe = "1%" !== e.top),
                        (Ke = 12 === Qe(e.marginLeft)),
                        (Ue.style.right = "60%"),
                        (We = 36 === Qe(e.right)),
                        (He = 36 === Qe(e.width)),
                        (Ue.style.position = "absolute"),
                        (Ye = 12 === Qe(Ue.offsetWidth / 3)),
                        oe.removeChild($e),
                        (Ue = null));
                }
                function Qe(e) {
                    return Math.round(parseFloat(e));
                }
                ($e = b.createElement("div")),
                    (Ue = b.createElement("div")).style &&
                        ((Ue.style.backgroundClip = "content-box"),
                        (Ue.cloneNode(!0).style.backgroundClip = ""),
                        (y.clearCloneStyle = "content-box" === Ue.style.backgroundClip),
                        w.extend(y, {
                            boxSizingReliable: function () {
                                return Je(), He;
                            },
                            pixelBoxStyles: function () {
                                return Je(), We;
                            },
                            pixelPosition: function () {
                                return Je(), qe;
                            },
                            reliableMarginLeft: function () {
                                return Je(), Ke;
                            },
                            scrollboxSize: function () {
                                return Je(), Ye;
                            },
                            reliableTrDimensions: function () {
                                var e, t, r;
                                return (
                                    null == Be &&
                                        ((e = b.createElement("table")),
                                        (t = b.createElement("tr")),
                                        (r = b.createElement("div")),
                                        (e.style.cssText = "position:absolute;left:-11111px"),
                                        (t.style.height = "1px"),
                                        (r.style.height = "9px"),
                                        oe.appendChild(e).appendChild(t).appendChild(r),
                                        (r = n.getComputedStyle(t)),
                                        (Be = 3 < parseInt(r.height)),
                                        oe.removeChild(e)),
                                    Be
                                );
                            },
                        }));
                var Ze = ["Webkit", "Moz", "ms"],
                    et = b.createElement("div").style,
                    tt = {};
                function nt(e) {
                    return (
                        w.cssProps[e] ||
                        tt[e] ||
                        (e in et
                            ? e
                            : (tt[e] =
                                  (function (e) {
                                      for (var t = e[0].toUpperCase() + e.slice(1), n = Ze.length; n--; ) if ((e = Ze[n] + t) in et) return e;
                                  })(e) || e))
                    );
                }
                var rt = /^(none|table(?!-c[ea]).+)/,
                    it = /^--/,
                    ot = { position: "absolute", visibility: "hidden", display: "block" },
                    at = { letterSpacing: "0", fontWeight: "400" };
                function st(e, t, n) {
                    var r = re.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
                }
                function ct(e, t, n, r, i, o) {
                    var a = "width" === t ? 1 : 0,
                        s = 0,
                        c = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (; a < 4; a += 2)
                        "margin" === n && (c += w.css(e, n + ie[a], !0, i)),
                            r
                                ? ("content" === n && (c -= w.css(e, "padding" + ie[a], !0, i)), "margin" !== n && (c -= w.css(e, "border" + ie[a] + "Width", !0, i)))
                                : ((c += w.css(e, "padding" + ie[a], !0, i)), "padding" !== n ? (c += w.css(e, "border" + ie[a] + "Width", !0, i)) : (s += w.css(e, "border" + ie[a] + "Width", !0, i)));
                    return !r && 0 <= o && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - s - 0.5)) || 0), c;
                }
                function ut(e, t, n) {
                    var r = Fe(e),
                        i = (!y.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
                        o = i,
                        a = Ge(e, t, r),
                        s = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (ze.test(a)) {
                        if (!n) return a;
                        a = "auto";
                    }
                    return (
                        ((!y.boxSizingReliable() && i) || (!y.reliableTrDimensions() && A(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === w.css(e, "display", !1, r))) &&
                            e.getClientRects().length &&
                            ((i = "border-box" === w.css(e, "boxSizing", !1, r)), (o = s in e)) &&
                            (a = e[s]),
                        (a = parseFloat(a) || 0) + ct(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                    );
                }
                function lt(e, t, n, r, i) {
                    return new lt.prototype.init(e, t, n, r, i);
                }
                w.extend({
                    cssHooks: {
                        opacity: {
                            get: function (e, t) {
                                if (t) return "" === (t = Ge(e, "opacity")) ? "1" : t;
                            },
                        },
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                    },
                    cssProps: {},
                    style: function (e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var i,
                                o,
                                a,
                                s = V(t),
                                c = it.test(t),
                                u = e.style;
                            if ((c || (t = nt(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                            "string" == (o = typeof n) && (i = re.exec(n)) && i[1] && ((n = ce(e, t, i)), (o = "number")),
                                null != n &&
                                    n == n &&
                                    ("number" !== o || c || (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
                                    y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (c ? u.setProperty(t, n) : (u[t] = n)));
                        }
                    },
                    css: function (e, t, n, r) {
                        var i,
                            o = V(t);
                        return (
                            it.test(t) || (t = nt(o)),
                            "normal" === (i = void 0 === (i = (o = w.cssHooks[t] || w.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : i) ? Ge(e, t, r) : i) && t in at && (i = at[t]),
                            ("" === n || n) && ((o = parseFloat(i)), !0 === n || isFinite(o)) ? o || 0 : i
                        );
                    },
                }),
                    w.each(["height", "width"], function (e, t) {
                        w.cssHooks[t] = {
                            get: function (e, n, r) {
                                if (n)
                                    return !rt.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                        ? ut(e, t, r)
                                        : Re(e, ot, function () {
                                              return ut(e, t, r);
                                          });
                            },
                            set: function (e, n, r) {
                                var i = Fe(e),
                                    o = !y.scrollboxSize() && "absolute" === i.position,
                                    a = (o || r) && "border-box" === w.css(e, "boxSizing", !1, i);
                                return (
                                    (r = r ? ct(e, t, r, a, i) : 0),
                                    a && o && (r -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - ct(e, t, "border", !1, i) - 0.5)),
                                    r && (a = re.exec(n)) && "px" !== (a[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
                                    st(0, n, r)
                                );
                            },
                        };
                    }),
                    (w.cssHooks.marginLeft = Xe(y.reliableMarginLeft, function (e, t) {
                        if (t)
                            return (
                                (parseFloat(Ge(e, "marginLeft")) ||
                                    e.getBoundingClientRect().left -
                                        Re(e, { marginLeft: 0 }, function () {
                                            return e.getBoundingClientRect().left;
                                        })) + "px"
                            );
                    })),
                    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                        (w.cssHooks[e + t] = {
                            expand: function (n) {
                                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
                                return i;
                            },
                        }),
                            "margin" !== e && (w.cssHooks[e + t].set = st);
                    }),
                    w.fn.extend({
                        css: function (e, t) {
                            return K(
                                this,
                                function (e, t, n) {
                                    var r,
                                        i,
                                        o = {},
                                        a = 0;
                                    if (Array.isArray(t)) {
                                        for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                                        return o;
                                    }
                                    return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                                },
                                e,
                                t,
                                1 < arguments.length
                            );
                        },
                    }),
                    (((w.Tween = lt).prototype = {
                        constructor: lt,
                        init: function (e, t, n, r, i, o) {
                            (this.elem = e), (this.prop = n), (this.easing = i || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (w.cssNumber[n] ? "" : "px"));
                        },
                        cur: function () {
                            var e = lt.propHooks[this.prop];
                            return (e && e.get ? e : lt.propHooks._default).get(this);
                        },
                        run: function (e) {
                            var t,
                                n = lt.propHooks[this.prop];
                            return (
                                this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                                (this.now = (this.end - this.start) * t + this.start),
                                this.options.step && this.options.step.call(this.elem, this.now, this),
                                (n && n.set ? n : lt.propHooks._default).set(this),
                                this
                            );
                        },
                    }).init.prototype = lt.prototype),
                    ((lt.propHooks = {
                        _default: {
                            get: function (e) {
                                return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (e = w.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0;
                            },
                            set: function (e) {
                                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!w.cssHooks[e.prop] && null == e.elem.style[nt(e.prop)]) ? (e.elem[e.prop] = e.now) : w.style(e.elem, e.prop, e.now + e.unit);
                            },
                        },
                    }).scrollTop = lt.propHooks.scrollLeft = {
                        set: function (e) {
                            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                        },
                    }),
                    (w.easing = {
                        linear: function (e) {
                            return e;
                        },
                        swing: function (e) {
                            return 0.5 - Math.cos(e * Math.PI) / 2;
                        },
                        _default: "swing",
                    }),
                    (w.fx = lt.prototype.init),
                    (w.fx.step = {});
                var dt,
                    pt,
                    ft,
                    ht = /^(?:toggle|show|hide)$/,
                    gt = /queueHooks$/;
                function mt() {
                    pt && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(mt) : n.setTimeout(mt, w.fx.interval), w.fx.tick());
                }
                function vt() {
                    return (
                        n.setTimeout(function () {
                            dt = void 0;
                        }),
                        (dt = Date.now())
                    );
                }
                function yt(e, t) {
                    var n,
                        r = 0,
                        i = { height: e };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ie[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e), i;
                }
                function bt(e, t, n) {
                    for (var r, i = (xt.tweeners[t] || []).concat(xt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
                }
                function xt(e, t, n) {
                    var r,
                        i,
                        a,
                        s,
                        c,
                        u,
                        l,
                        d = 0,
                        p = xt.prefilters.length,
                        f = w.Deferred().always(function () {
                            delete h.elem;
                        }),
                        h = function () {
                            if (i) return !1;
                            for (var t = dt || vt(), n = 1 - ((t = Math.max(0, g.startTime + g.duration - t)) / g.duration || 0), r = 0, o = g.tweens.length; r < o; r++) g.tweens[r].run(n);
                            return f.notifyWith(e, [g, n, t]), n < 1 && o ? t : (o || f.notifyWith(e, [g, 1, 0]), f.resolveWith(e, [g]), !1);
                        },
                        g = f.promise({
                            elem: e,
                            props: w.extend({}, t),
                            opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                            originalProperties: t,
                            originalOptions: n,
                            startTime: dt || vt(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function (t, n) {
                                return (n = w.Tween(e, g.opts, t, n, g.opts.specialEasing[t] || g.opts.easing)), g.tweens.push(n), n;
                            },
                            stop: function (t) {
                                var n = 0,
                                    r = t ? g.tweens.length : 0;
                                if (!i) {
                                    for (i = !0; n < r; n++) g.tweens[n].run(1);
                                    t ? (f.notifyWith(e, [g, 1, 0]), f.resolveWith(e, [g, t])) : f.rejectWith(e, [g, t]);
                                }
                                return this;
                            },
                        }),
                        m = g.props,
                        v = m,
                        y = g.opts.specialEasing;
                    for (a in v)
                        if (((c = y[(s = V(a))]), (u = v[a]), Array.isArray(u) && ((c = u[1]), (u = v[a] = u[0])), a !== s && ((v[s] = u), delete v[a]), (l = w.cssHooks[s]) && "expand" in l))
                            for (a in ((u = l.expand(u)), delete v[s], u)) a in v || ((v[a] = u[a]), (y[a] = c));
                        else y[s] = c;
                    for (; d < p; d++) if ((r = xt.prefilters[d].call(g, e, m, g.opts))) return o(r.stop) && (w._queueHooks(g.elem, g.opts.queue).stop = r.stop.bind(r)), r;
                    return (
                        w.map(m, bt, g),
                        o(g.opts.start) && g.opts.start.call(e, g),
                        g.progress(g.opts.progress).done(g.opts.done, g.opts.complete).fail(g.opts.fail).always(g.opts.always),
                        w.fx.timer(w.extend(h, { elem: e, anim: g, queue: g.opts.queue })),
                        g
                    );
                }
                (w.Animation = w.extend(xt, {
                    tweeners: {
                        "*": [
                            function (e, t) {
                                var n = this.createTween(e, t);
                                return ce(n.elem, e, re.exec(t), n), n;
                            },
                        ],
                    },
                    tweener: function (e, t) {
                        for (var n, r = 0, i = (e = o(e) ? ((t = e), ["*"]) : e.match(F)).length; r < i; r++) (n = e[r]), (xt.tweeners[n] = xt.tweeners[n] || []), xt.tweeners[n].unshift(t);
                    },
                    prefilters: [
                        function (e, t, n) {
                            var r,
                                i,
                                o,
                                a,
                                s,
                                c,
                                u,
                                l = "width" in t || "height" in t,
                                d = this,
                                p = {},
                                f = e.style,
                                h = e.nodeType && ne(e),
                                g = J.get(e, "fxshow");
                            for (r in (n.queue ||
                                (null == (a = w._queueHooks(e, "fx")).unqueued &&
                                    ((a.unqueued = 0),
                                    (s = a.empty.fire),
                                    (a.empty.fire = function () {
                                        a.unqueued || s();
                                    })),
                                a.unqueued++,
                                d.always(function () {
                                    d.always(function () {
                                        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                                    });
                                })),
                            t))
                                if (((i = t[r]), ht.test(i))) {
                                    if ((delete t[r], (o = o || "toggle" === i), i === (h ? "hide" : "show"))) {
                                        if ("show" !== i || !g || void 0 === g[r]) continue;
                                        h = !0;
                                    }
                                    p[r] = (g && g[r]) || w.style(e, r);
                                }
                            if ((c = !w.isEmptyObject(t)) || !w.isEmptyObject(p))
                                for (r in (l &&
                                    1 === e.nodeType &&
                                    ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                                    null == (u = g && g.display) && (u = J.get(e, "display")),
                                    "none" === (l = w.css(e, "display")) && (u ? (l = u) : (le([e], !0), (u = e.style.display || u), (l = w.css(e, "display")), le([e]))),
                                    "inline" === l || ("inline-block" === l && null != u)) &&
                                    "none" === w.css(e, "float") &&
                                    (c ||
                                        (d.done(function () {
                                            f.display = u;
                                        }),
                                        null == u && ((l = f.display), (u = "none" === l ? "" : l))),
                                    (f.display = "inline-block")),
                                n.overflow &&
                                    ((f.overflow = "hidden"),
                                    d.always(function () {
                                        (f.overflow = n.overflow[0]), (f.overflowX = n.overflow[1]), (f.overflowY = n.overflow[2]);
                                    })),
                                (c = !1),
                                p))
                                    c ||
                                        (g ? "hidden" in g && (h = g.hidden) : (g = J.access(e, "fxshow", { display: u })),
                                        o && (g.hidden = !h),
                                        h && le([e], !0),
                                        d.done(function () {
                                            for (r in (h || le([e]), J.remove(e, "fxshow"), p)) w.style(e, r, p[r]);
                                        })),
                                        (c = bt(h ? g[r] : 0, r, d)),
                                        r in g || ((g[r] = c.start), h && ((c.end = c.start), (c.start = 0)));
                        },
                    ],
                    prefilter: function (e, t) {
                        t ? xt.prefilters.unshift(e) : xt.prefilters.push(e);
                    },
                })),
                    (w.speed = function (e, t, n) {
                        var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || (!n && t) || (o(e) && e), duration: e, easing: (n && t) || (t && !o(t) && t) };
                        return (
                            w.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in w.fx.speeds ? (r.duration = w.fx.speeds[r.duration]) : (r.duration = w.fx.speeds._default)),
                            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                            (r.old = r.complete),
                            (r.complete = function () {
                                o(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
                            }),
                            r
                        );
                    }),
                    w.fn.extend({
                        fadeTo: function (e, t, n, r) {
                            return this.filter(ne).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
                        },
                        animate: function (e, t, n, r) {
                            function i() {
                                var t = xt(this, w.extend({}, e), a);
                                (o || J.get(this, "finish")) && t.stop(!0);
                            }
                            var o = w.isEmptyObject(e),
                                a = w.speed(t, n, r);
                            return (i.finish = i), o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i);
                        },
                        stop: function (e, t, n) {
                            function r(e) {
                                var t = e.stop;
                                delete e.stop, t(n);
                            }
                            return (
                                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                                t && this.queue(e || "fx", []),
                                this.each(function () {
                                    var t = !0,
                                        i = null != e && e + "queueHooks",
                                        o = w.timers,
                                        a = J.get(this);
                                    if (i) a[i] && a[i].stop && r(a[i]);
                                    else for (i in a) a[i] && a[i].stop && gt.test(i) && r(a[i]);
                                    for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                                    (!t && n) || w.dequeue(this, e);
                                })
                            );
                        },
                        finish: function (e) {
                            return (
                                !1 !== e && (e = e || "fx"),
                                this.each(function () {
                                    var t,
                                        n = J.get(this),
                                        r = n[e + "queue"],
                                        i = n[e + "queueHooks"],
                                        o = w.timers,
                                        a = r ? r.length : 0;
                                    for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                    delete n.finish;
                                })
                            );
                        },
                    }),
                    w.each(["toggle", "show", "hide"], function (e, t) {
                        var n = w.fn[t];
                        w.fn[t] = function (e, r, i) {
                            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(yt(t, !0), e, r, i);
                        };
                    }),
                    w.each({ slideDown: yt("show"), slideUp: yt("hide"), slideToggle: yt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                        w.fn[e] = function (e, n, r) {
                            return this.animate(t, e, n, r);
                        };
                    }),
                    (w.timers = []),
                    (w.fx.tick = function () {
                        var e,
                            t = 0,
                            n = w.timers;
                        for (dt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                        n.length || w.fx.stop(), (dt = void 0);
                    }),
                    (w.fx.timer = function (e) {
                        w.timers.push(e), w.fx.start();
                    }),
                    (w.fx.interval = 13),
                    (w.fx.start = function () {
                        pt || ((pt = !0), mt());
                    }),
                    (w.fx.stop = function () {
                        pt = null;
                    }),
                    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                    (w.fn.delay = function (e, t) {
                        return (
                            (e = (w.fx && w.fx.speeds[e]) || e),
                            this.queue((t = t || "fx"), function (t, r) {
                                var i = n.setTimeout(t, e);
                                r.stop = function () {
                                    n.clearTimeout(i);
                                };
                            })
                        );
                    }),
                    (ft = b.createElement("input")),
                    (he = b.createElement("select").appendChild(b.createElement("option"))),
                    (ft.type = "checkbox"),
                    (y.checkOn = "" !== ft.value),
                    (y.optSelected = he.selected),
                    ((ft = b.createElement("input")).value = "t"),
                    (ft.type = "radio"),
                    (y.radioValue = "t" === ft.value);
                var kt,
                    _t = w.expr.attrHandle,
                    wt =
                        (w.fn.extend({
                            attr: function (e, t) {
                                return K(this, w.attr, e, t, 1 < arguments.length);
                            },
                            removeAttr: function (e) {
                                return this.each(function () {
                                    w.removeAttr(this, e);
                                });
                            },
                        }),
                        w.extend({
                            attr: function (e, t, n) {
                                var r,
                                    i,
                                    o = e.nodeType;
                                if (3 !== o && 8 !== o && 2 !== o)
                                    return void 0 === e.getAttribute
                                        ? w.prop(e, t, n)
                                        : ((1 === o && w.isXMLDoc(e)) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? kt : void 0)),
                                          void 0 !== n
                                              ? null === n
                                                  ? void w.removeAttr(e, t)
                                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                                  ? r
                                                  : (e.setAttribute(t, n + ""), n)
                                              : (i && "get" in i && null !== (r = i.get(e, t))) || null != (r = w.find.attr(e, t))
                                              ? r
                                              : void 0);
                            },
                            attrHooks: {
                                type: {
                                    set: function (e, t) {
                                        var n;
                                        if (!y.radioValue && "radio" === t && A(e, "input")) return (n = e.value), e.setAttribute("type", t), n && (e.value = n), t;
                                    },
                                },
                            },
                            removeAttr: function (e, t) {
                                var n,
                                    r = 0,
                                    i = t && t.match(F);
                                if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
                            },
                        }),
                        (kt = {
                            set: function (e, t, n) {
                                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
                            },
                        }),
                        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
                            var n = _t[t] || w.find.attr;
                            _t[t] = function (e, t, r) {
                                var i,
                                    o,
                                    a = t.toLowerCase();
                                return r || ((o = _t[a]), (_t[a] = i), (i = null != n(e, t, r) ? a : null), (_t[a] = o)), i;
                            };
                        }),
                        /^(?:input|select|textarea|button)$/i),
                    Dt = /^(?:a|area)$/i;
                function Ct(e) {
                    return (e.match(F) || []).join(" ");
                }
                function Tt(e) {
                    return (e.getAttribute && e.getAttribute("class")) || "";
                }
                function St(e) {
                    return Array.isArray(e) ? e : ("string" == typeof e && e.match(F)) || [];
                }
                function Mt(e) {
                    e.stopPropagation();
                }
                w.fn.extend({
                    prop: function (e, t) {
                        return K(this, w.prop, e, t, 1 < arguments.length);
                    },
                    removeProp: function (e) {
                        return this.each(function () {
                            delete this[w.propFix[e] || e];
                        });
                    },
                }),
                    w.extend({
                        prop: function (e, t, n) {
                            var r,
                                i,
                                o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o)
                                return (
                                    (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                                    void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                                );
                        },
                        propHooks: {
                            tabIndex: {
                                get: function (e) {
                                    var t = w.find.attr(e, "tabindex");
                                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || (Dt.test(e.nodeName) && e.href) ? 0 : -1;
                                },
                            },
                        },
                        propFix: { for: "htmlFor", class: "className" },
                    }),
                    y.optSelected ||
                        (w.propHooks.selected = {
                            get: function (e) {
                                return (e = e.parentNode) && e.parentNode && e.parentNode.selectedIndex, null;
                            },
                            set: function (e) {
                                (e = e.parentNode) && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex;
                            },
                        }),
                    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                        w.propFix[this.toLowerCase()] = this;
                    }),
                    w.fn.extend({
                        addClass: function (e) {
                            var t,
                                n,
                                r,
                                i,
                                a,
                                s,
                                c = 0;
                            if (o(e))
                                return this.each(function (t) {
                                    w(this).addClass(e.call(this, t, Tt(this)));
                                });
                            if ((t = St(e)).length)
                                for (; (n = this[c++]); )
                                    if (((s = Tt(n)), (r = 1 === n.nodeType && " " + Ct(s) + " "))) {
                                        for (a = 0; (i = t[a++]); ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                        s !== (s = Ct(r)) && n.setAttribute("class", s);
                                    }
                            return this;
                        },
                        removeClass: function (e) {
                            var t,
                                n,
                                r,
                                i,
                                a,
                                s,
                                c = 0;
                            if (o(e))
                                return this.each(function (t) {
                                    w(this).removeClass(e.call(this, t, Tt(this)));
                                });
                            if (!arguments.length) return this.attr("class", "");
                            if ((t = St(e)).length)
                                for (; (n = this[c++]); )
                                    if (((s = Tt(n)), (r = 1 === n.nodeType && " " + Ct(s) + " "))) {
                                        for (a = 0; (i = t[a++]); ) for (; -1 < r.indexOf(" " + i + " "); ) r = r.replace(" " + i + " ", " ");
                                        s !== (s = Ct(r)) && n.setAttribute("class", s);
                                    }
                            return this;
                        },
                        toggleClass: function (e, t) {
                            var n = typeof e,
                                r = "string" == n || Array.isArray(e);
                            return "boolean" == typeof t && r
                                ? t
                                    ? this.addClass(e)
                                    : this.removeClass(e)
                                : o(e)
                                ? this.each(function (n) {
                                      w(this).toggleClass(e.call(this, n, Tt(this), t), t);
                                  })
                                : this.each(function () {
                                      var t, i, o, a;
                                      if (r) for (i = 0, o = w(this), a = St(e); (t = a[i++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                      else (void 0 !== e && "boolean" != n) || ((t = Tt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", (!t && !1 !== e && J.get(this, "__className__")) || ""));
                                  });
                        },
                        hasClass: function (e) {
                            for (var t, n = 0, r = " " + e + " "; (t = this[n++]); ) if (1 === t.nodeType && -1 < (" " + Ct(Tt(t)) + " ").indexOf(r)) return !0;
                            return !1;
                        },
                    });
                var At = /\r/g,
                    jt =
                        (w.fn.extend({
                            val: function (e) {
                                var t,
                                    n,
                                    r,
                                    i = this[0];
                                return arguments.length
                                    ? ((r = o(e)),
                                      this.each(function (n) {
                                          1 === this.nodeType &&
                                              (null == (n = r ? e.call(this, n, w(this).val()) : e)
                                                  ? (n = "")
                                                  : "number" == typeof n
                                                  ? (n += "")
                                                  : Array.isArray(n) &&
                                                    (n = w.map(n, function (e) {
                                                        return null == e ? "" : e + "";
                                                    })),
                                              ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, n, "value")) || (this.value = n));
                                      }))
                                    : i
                                    ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                                        ? n
                                        : "string" == typeof (n = i.value)
                                        ? n.replace(At, "")
                                        : null == n
                                        ? ""
                                        : n
                                    : void 0;
                            },
                        }),
                        w.extend({
                            valHooks: {
                                option: {
                                    get: function (e) {
                                        var t = w.find.attr(e, "value");
                                        return null != t ? t : Ct(w.text(e));
                                    },
                                },
                                select: {
                                    get: function (e) {
                                        for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r : 0; s < a; s++)
                                            if (((t = n[s]).selected || s === r) && !t.disabled && (!t.parentNode.disabled || !A(t.parentNode, "optgroup"))) {
                                                if (((t = w(t).val()), i)) return t;
                                                o.push(t);
                                            }
                                        return o;
                                    },
                                    set: function (e, t) {
                                        for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = -1 < w.inArray(w.valHooks.option.get(r), o)) && (n = !0);
                                        return n || (e.selectedIndex = -1), o;
                                    },
                                },
                            },
                        }),
                        w.each(["radio", "checkbox"], function () {
                            (w.valHooks[this] = {
                                set: function (e, t) {
                                    if (Array.isArray(t)) return (e.checked = -1 < w.inArray(w(e).val(), t));
                                },
                            }),
                                y.checkOn ||
                                    (w.valHooks[this].get = function (e) {
                                        return null === e.getAttribute("value") ? "on" : e.value;
                                    });
                        }),
                        (y.focusin = "onfocusin" in n),
                        /^(?:focusinfocus|focusoutblur)$/),
                    Et =
                        (w.extend(w.event, {
                            trigger: function (e, t, r, i) {
                                var s,
                                    c,
                                    u,
                                    l,
                                    d,
                                    p,
                                    f,
                                    h = [r || b],
                                    m = g.call(e, "type") ? e.type : e,
                                    v = g.call(e, "namespace") ? e.namespace.split(".") : [],
                                    y = (f = c = r = r || b);
                                if (
                                    3 !== r.nodeType &&
                                    8 !== r.nodeType &&
                                    !jt.test(m + w.event.triggered) &&
                                    (-1 < m.indexOf(".") && ((m = (v = m.split(".")).shift()), v.sort()),
                                    (l = m.indexOf(":") < 0 && "on" + m),
                                    ((e = e[w.expando] ? e : new w.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
                                    (e.namespace = v.join(".")),
                                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                    (e.result = void 0),
                                    e.target || (e.target = r),
                                    (t = null == t ? [e] : w.makeArray(t, [e])),
                                    (p = w.event.special[m] || {}),
                                    i || !p.trigger || !1 !== p.trigger.apply(r, t))
                                ) {
                                    if (!i && !p.noBubble && !a(r)) {
                                        for (u = p.delegateType || m, jt.test(u + m) || (y = y.parentNode); y; y = y.parentNode) h.push(y), (c = y);
                                        c === (r.ownerDocument || b) && h.push(c.defaultView || c.parentWindow || n);
                                    }
                                    for (s = 0; (y = h[s++]) && !e.isPropagationStopped(); )
                                        (f = y),
                                            (e.type = 1 < s ? u : p.bindType || m),
                                            (d = (J.get(y, "events") || Object.create(null))[e.type] && J.get(y, "handle")) && d.apply(y, t),
                                            (d = l && y[l]) && d.apply && G(y) && ((e.result = d.apply(y, t)), !1 === e.result) && e.preventDefault();
                                    return (
                                        (e.type = m),
                                        i ||
                                            e.isDefaultPrevented() ||
                                            (p._default && !1 !== p._default.apply(h.pop(), t)) ||
                                            !G(r) ||
                                            (l &&
                                                o(r[m]) &&
                                                !a(r) &&
                                                ((c = r[l]) && (r[l] = null),
                                                (w.event.triggered = m),
                                                e.isPropagationStopped() && f.addEventListener(m, Mt),
                                                r[m](),
                                                e.isPropagationStopped() && f.removeEventListener(m, Mt),
                                                (w.event.triggered = void 0),
                                                c) &&
                                                (r[l] = c)),
                                        e.result
                                    );
                                }
                            },
                            simulate: function (e, t, n) {
                                (n = w.extend(new w.Event(), n, { type: e, isSimulated: !0 })), w.event.trigger(n, null, t);
                            },
                        }),
                        w.fn.extend({
                            trigger: function (e, t) {
                                return this.each(function () {
                                    w.event.trigger(e, t, this);
                                });
                            },
                            triggerHandler: function (e, t) {
                                var n = this[0];
                                if (n) return w.event.trigger(e, t, n, !0);
                            },
                        }),
                        y.focusin ||
                            w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                                function n(e) {
                                    w.event.simulate(t, e.target, w.event.fix(e));
                                }
                                w.event.special[t] = {
                                    setup: function () {
                                        var r = this.ownerDocument || this.document || this,
                                            i = J.access(r, t);
                                        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
                                    },
                                    teardown: function () {
                                        var r = this.ownerDocument || this.document || this,
                                            i = J.access(r, t) - 1;
                                        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
                                    },
                                };
                            }),
                        n.location),
                    Nt = { guid: Date.now() },
                    It = /\?/,
                    Ot =
                        ((w.parseXML = function (e) {
                            var t;
                            if (!e || "string" != typeof e) return null;
                            try {
                                t = new n.DOMParser().parseFromString(e, "text/xml");
                            } catch (e) {
                                t = void 0;
                            }
                            return (t && !t.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + e), t;
                        }),
                        /\[\]$/),
                    Lt = /\r?\n/g,
                    Pt = /^(?:submit|button|image|reset|file)$/i,
                    Ft = /^(?:input|select|textarea|keygen)/i;
                (w.param = function (e, t) {
                    function n(e, t) {
                        (t = o(t) ? t() : t), (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t));
                    }
                    var r,
                        i = [];
                    if (null == e) return "";
                    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
                        w.each(e, function () {
                            n(this.name, this.value);
                        });
                    else
                        for (r in e)
                            !(function e(t, n, r, i) {
                                if (Array.isArray(n))
                                    w.each(n, function (n, o) {
                                        r || Ot.test(t) ? i(t, o) : e(t + "[" + ("object" == typeof o && null != o ? n : "") + "]", o, r, i);
                                    });
                                else if (r || "object" !== _(n)) i(t, n);
                                else for (var o in n) e(t + "[" + o + "]", n[o], r, i);
                            })(r, e[r], t, n);
                    return i.join("&");
                }),
                    w.fn.extend({
                        serialize: function () {
                            return w.param(this.serializeArray());
                        },
                        serializeArray: function () {
                            return this.map(function () {
                                var e = w.prop(this, "elements");
                                return e ? w.makeArray(e) : this;
                            })
                                .filter(function () {
                                    var e = this.type;
                                    return this.name && !w(this).is(":disabled") && Ft.test(this.nodeName) && !Pt.test(e) && (this.checked || !de.test(e));
                                })
                                .map(function (e, t) {
                                    var n = w(this).val();
                                    return null == n
                                        ? null
                                        : Array.isArray(n)
                                        ? w.map(n, function (e) {
                                              return { name: t.name, value: e.replace(Lt, "\r\n") };
                                          })
                                        : { name: t.name, value: n.replace(Lt, "\r\n") };
                                })
                                .get();
                        },
                    });
                var Rt = /%20/g,
                    qt = /#.*$/,
                    Ht = /([?&])_=[^&]*/,
                    Yt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    Wt = /^(?:GET|HEAD)$/,
                    Bt = /^\/\//,
                    Kt = {},
                    $t = {},
                    Ut = "*/".concat("*"),
                    zt = b.createElement("a");
                function Vt(e) {
                    return function (t, n) {
                        "string" != typeof t && ((n = t), (t = "*"));
                        var r,
                            i = 0,
                            a = t.toLowerCase().match(F) || [];
                        if (o(n)) for (; (r = a[i++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                    };
                }
                function Gt(e, t, n, r) {
                    var i = {},
                        o = e === $t;
                    function a(s) {
                        var c;
                        return (
                            (i[s] = !0),
                            w.each(e[s] || [], function (e, s) {
                                return "string" != typeof (s = s(t, n, r)) || o || i[s] ? (o ? !(c = s) : void 0) : (t.dataTypes.unshift(s), a(s), !1);
                            }),
                            c
                        );
                    }
                    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
                }
                function Xt(e, t) {
                    var n,
                        r,
                        i = w.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
                    return r && w.extend(!0, e, r), e;
                }
                (zt.href = Et.href),
                    w.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: Et.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: { "*": Ut, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                            converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
                            flatOptions: { url: !0, context: !0 },
                        },
                        ajaxSetup: function (e, t) {
                            return t ? Xt(Xt(e, w.ajaxSettings), t) : Xt(w.ajaxSettings, e);
                        },
                        ajaxPrefilter: Vt(Kt),
                        ajaxTransport: Vt($t),
                        ajax: function (e, t) {
                            "object" == typeof e && ((t = e), (e = void 0));
                            var r,
                                i,
                                o,
                                a,
                                s,
                                c,
                                u,
                                l,
                                d,
                                p = w.ajaxSetup({}, (t = t || {})),
                                f = p.context || p,
                                h = p.context && (f.nodeType || f.jquery) ? w(f) : w.event,
                                g = w.Deferred(),
                                m = w.Callbacks("once memory"),
                                v = p.statusCode || {},
                                y = {},
                                x = {},
                                k = "canceled",
                                _ = {
                                    readyState: 0,
                                    getResponseHeader: function (e) {
                                        var t;
                                        if (c) {
                                            if (!a) for (a = {}; (t = Yt.exec(o)); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                            t = a[e.toLowerCase() + " "];
                                        }
                                        return null == t ? null : t.join(", ");
                                    },
                                    getAllResponseHeaders: function () {
                                        return c ? o : null;
                                    },
                                    setRequestHeader: function (e, t) {
                                        return null == c && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (y[e] = t)), this;
                                    },
                                    overrideMimeType: function (e) {
                                        return null == c && (p.mimeType = e), this;
                                    },
                                    statusCode: function (e) {
                                        if (e)
                                            if (c) _.always(e[_.status]);
                                            else for (var t in e) v[t] = [v[t], e[t]];
                                        return this;
                                    },
                                    abort: function (e) {
                                        return (e = e || k), r && r.abort(e), D(0, e), this;
                                    },
                                };
                            if (
                                (g.promise(_),
                                (p.url = ((e || p.url || Et.href) + "").replace(Bt, Et.protocol + "//")),
                                (p.type = t.method || t.type || p.method || p.type),
                                (p.dataTypes = (p.dataType || "*").toLowerCase().match(F) || [""]),
                                null == p.crossDomain)
                            ) {
                                d = b.createElement("a");
                                try {
                                    (d.href = p.url), (d.href = d.href), (p.crossDomain = zt.protocol + "//" + zt.host != d.protocol + "//" + d.host);
                                } catch (e) {
                                    p.crossDomain = !0;
                                }
                            }
                            if ((p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Gt(Kt, p, t, _), !c)) {
                                for (l in ((u = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                                (p.type = p.type.toUpperCase()),
                                (p.hasContent = !Wt.test(p.type)),
                                (i = p.url.replace(qt, "")),
                                p.hasContent
                                    ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Rt, "+"))
                                    : ((d = p.url.slice(i.length)),
                                      p.data && (p.processData || "string" == typeof p.data) && ((i += (It.test(i) ? "&" : "?") + p.data), delete p.data),
                                      !1 === p.cache && ((i = i.replace(Ht, "$1")), (d = (It.test(i) ? "&" : "?") + "_=" + Nt.guid++ + d)),
                                      (p.url = i + d)),
                                p.ifModified && (w.lastModified[i] && _.setRequestHeader("If-Modified-Since", w.lastModified[i]), w.etag[i]) && _.setRequestHeader("If-None-Match", w.etag[i]),
                                ((p.data && p.hasContent && !1 !== p.contentType) || t.contentType) && _.setRequestHeader("Content-Type", p.contentType),
                                _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : p.accepts["*"]),
                                p.headers))
                                    _.setRequestHeader(l, p.headers[l]);
                                if (p.beforeSend && (!1 === p.beforeSend.call(f, _, p) || c)) return _.abort();
                                if (((k = "abort"), m.add(p.complete), _.done(p.success), _.fail(p.error), (r = Gt($t, p, t, _)))) {
                                    if (((_.readyState = 1), u && h.trigger("ajaxSend", [_, p]), c)) return _;
                                    p.async &&
                                        0 < p.timeout &&
                                        (s = n.setTimeout(function () {
                                            _.abort("timeout");
                                        }, p.timeout));
                                    try {
                                        (c = !1), r.send(y, D);
                                    } catch (e) {
                                        if (c) throw e;
                                        D(-1, e);
                                    }
                                } else D(-1, "No Transport");
                            }
                            return _;
                            function D(e, t, a, l) {
                                var d,
                                    y,
                                    b,
                                    x = t;
                                c ||
                                    ((c = !0),
                                    s && n.clearTimeout(s),
                                    (r = void 0),
                                    (o = l || ""),
                                    (_.readyState = 0 < e ? 4 : 0),
                                    (l = (200 <= e && e < 300) || 304 === e),
                                    a &&
                                        (b = (function (e, t, n) {
                                            for (var r, i, o, a, s = e.contents, c = e.dataTypes; "*" === c[0]; ) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                            if (r)
                                                for (i in s)
                                                    if (s[i] && s[i].test(r)) {
                                                        c.unshift(i);
                                                        break;
                                                    }
                                            if (c[0] in n) o = c[0];
                                            else {
                                                for (i in n) {
                                                    if (!c[0] || e.converters[i + " " + c[0]]) {
                                                        o = i;
                                                        break;
                                                    }
                                                    a = a || i;
                                                }
                                                o = o || a;
                                            }
                                            if (o) return o !== c[0] && c.unshift(o), n[o];
                                        })(p, _, a)),
                                    !l && -1 < w.inArray("script", p.dataTypes) && (p.converters["text script"] = function () {}),
                                    (b = (function (e, t, n, r) {
                                        var i,
                                            o,
                                            a,
                                            s,
                                            c,
                                            u = {},
                                            l = e.dataTypes.slice();
                                        if (l[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                                        for (o = l.shift(); o; )
                                            if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (c = o), (o = l.shift())))
                                                if ("*" === o) o = c;
                                                else if ("*" !== c && c !== o) {
                                                    if (!(a = u[c + " " + o] || u["* " + o]))
                                                        for (i in u)
                                                            if ((s = i.split(" "))[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                                                                !0 === a ? (a = u[i]) : !0 !== u[i] && ((o = s[0]), l.unshift(s[1]));
                                                                break;
                                                            }
                                                    if (!0 !== a)
                                                        if (a && e.throws) t = a(t);
                                                        else
                                                            try {
                                                                t = a(t);
                                                            } catch (e) {
                                                                return { state: "parsererror", error: a ? e : "No conversion from " + c + " to " + o };
                                                            }
                                                }
                                        return { state: "success", data: t };
                                    })(p, b, _, l)),
                                    l
                                        ? (p.ifModified && ((a = _.getResponseHeader("Last-Modified")) && (w.lastModified[i] = a), (a = _.getResponseHeader("etag"))) && (w.etag[i] = a),
                                          204 === e || "HEAD" === p.type ? (x = "nocontent") : 304 === e ? (x = "notmodified") : ((x = b.state), (d = b.data), (l = !(y = b.error))))
                                        : ((y = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                                    (_.status = e),
                                    (_.statusText = (t || x) + ""),
                                    l ? g.resolveWith(f, [d, x, _]) : g.rejectWith(f, [_, x, y]),
                                    _.statusCode(v),
                                    (v = void 0),
                                    u && h.trigger(l ? "ajaxSuccess" : "ajaxError", [_, p, l ? d : y]),
                                    m.fireWith(f, [_, x]),
                                    u && (h.trigger("ajaxComplete", [_, p]), --w.active || w.event.trigger("ajaxStop")));
                            }
                        },
                        getJSON: function (e, t, n) {
                            return w.get(e, t, n, "json");
                        },
                        getScript: function (e, t) {
                            return w.get(e, void 0, t, "script");
                        },
                    }),
                    w.each(["get", "post"], function (e, t) {
                        w[t] = function (e, n, r, i) {
                            return o(n) && ((i = i || r), (r = n), (n = void 0)), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
                        };
                    }),
                    w.ajaxPrefilter(function (e) {
                        for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                    }),
                    (w._evalUrl = function (e, t, n) {
                        return w.ajax({
                            url: e,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: { "text script": function () {} },
                            dataFilter: function (e) {
                                w.globalEval(e, t, n);
                            },
                        });
                    }),
                    w.fn.extend({
                        wrapAll: function (e) {
                            return (
                                this[0] &&
                                    (o(e) && (e = e.call(this[0])),
                                    (e = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                                    this[0].parentNode && e.insertBefore(this[0]),
                                    e
                                        .map(function () {
                                            for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                            return e;
                                        })
                                        .append(this)),
                                this
                            );
                        },
                        wrapInner: function (e) {
                            return o(e)
                                ? this.each(function (t) {
                                      w(this).wrapInner(e.call(this, t));
                                  })
                                : this.each(function () {
                                      var t = w(this),
                                          n = t.contents();
                                      n.length ? n.wrapAll(e) : t.append(e);
                                  });
                        },
                        wrap: function (e) {
                            var t = o(e);
                            return this.each(function (n) {
                                w(this).wrapAll(t ? e.call(this, n) : e);
                            });
                        },
                        unwrap: function (e) {
                            return (
                                this.parent(e)
                                    .not("body")
                                    .each(function () {
                                        w(this).replaceWith(this.childNodes);
                                    }),
                                this
                            );
                        },
                    }),
                    (w.expr.pseudos.hidden = function (e) {
                        return !w.expr.pseudos.visible(e);
                    }),
                    (w.expr.pseudos.visible = function (e) {
                        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                    }),
                    (w.ajaxSettings.xhr = function () {
                        try {
                            return new n.XMLHttpRequest();
                        } catch (e) {}
                    });
                var Jt = { 0: 200, 1223: 204 },
                    Qt = w.ajaxSettings.xhr();
                (y.cors = !!Qt && "withCredentials" in Qt),
                    (y.ajax = Qt = !!Qt),
                    w.ajaxTransport(function (e) {
                        var t, r;
                        if (y.cors || (Qt && !e.crossDomain))
                            return {
                                send: function (i, o) {
                                    var a,
                                        s = e.xhr();
                                    if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                                    for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i)) s.setRequestHeader(a, i[a]);
                                    (t = function (e) {
                                        return function () {
                                            t &&
                                                ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                                "abort" === e
                                                    ? s.abort()
                                                    : "error" === e
                                                    ? "number" != typeof s.status
                                                        ? o(0, "error")
                                                        : o(s.status, s.statusText)
                                                    : o(
                                                          Jt[s.status] || s.status,
                                                          s.statusText,
                                                          "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText },
                                                          s.getAllResponseHeaders()
                                                      ));
                                        };
                                    }),
                                        (s.onload = t()),
                                        (r = s.onerror = s.ontimeout = t("error")),
                                        void 0 !== s.onabort
                                            ? (s.onabort = r)
                                            : (s.onreadystatechange = function () {
                                                  4 === s.readyState &&
                                                      n.setTimeout(function () {
                                                          t && r();
                                                      });
                                              }),
                                        (t = t("abort"));
                                    try {
                                        s.send((e.hasContent && e.data) || null);
                                    } catch (i) {
                                        if (t) throw i;
                                    }
                                },
                                abort: function () {
                                    t && t();
                                },
                            };
                    }),
                    w.ajaxPrefilter(function (e) {
                        e.crossDomain && (e.contents.script = !1);
                    }),
                    w.ajaxSetup({
                        accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                        contents: { script: /\b(?:java|ecma)script\b/ },
                        converters: {
                            "text script": function (e) {
                                return w.globalEval(e), e;
                            },
                        },
                    }),
                    w.ajaxPrefilter("script", function (e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                    }),
                    w.ajaxTransport("script", function (e) {
                        var t, n;
                        if (e.crossDomain || e.scriptAttrs)
                            return {
                                send: function (r, i) {
                                    (t = w("<script>")
                                        .attr(e.scriptAttrs || {})
                                        .prop({ charset: e.scriptCharset, src: e.url })
                                        .on(
                                            "load error",
                                            (n = function (e) {
                                                t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
                                            })
                                        )),
                                        b.head.appendChild(t[0]);
                                },
                                abort: function () {
                                    n && n();
                                },
                            };
                    });
                var Zt = [],
                    en = /(=)\?(?=&|$)|\?\?/,
                    tn =
                        (w.ajaxSetup({
                            jsonp: "callback",
                            jsonpCallback: function () {
                                var e = Zt.pop() || w.expando + "_" + Nt.guid++;
                                return (this[e] = !0), e;
                            },
                        }),
                        w.ajaxPrefilter("json jsonp", function (e, t, r) {
                            var i,
                                a,
                                s,
                                c = !1 !== e.jsonp && (en.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
                            if (c || "jsonp" === e.dataTypes[0])
                                return (
                                    (i = e.jsonpCallback = o(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                                    c ? (e[c] = e[c].replace(en, "$1" + i)) : !1 !== e.jsonp && (e.url += (It.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                                    (e.converters["script json"] = function () {
                                        return s || w.error(i + " was not called"), s[0];
                                    }),
                                    (e.dataTypes[0] = "json"),
                                    (a = n[i]),
                                    (n[i] = function () {
                                        s = arguments;
                                    }),
                                    r.always(function () {
                                        void 0 === a ? w(n).removeProp(i) : (n[i] = a), e[i] && ((e.jsonpCallback = t.jsonpCallback), Zt.push(i)), s && o(a) && a(s[0]), (s = a = void 0);
                                    }),
                                    "script"
                                );
                        }),
                        (y.createHTMLDocument = (((S = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === S.childNodes.length)),
                        (w.parseHTML = function (e, t, n) {
                            return "string" != typeof e
                                ? []
                                : ("boolean" == typeof t && ((n = t), (t = !1)),
                                  t || (y.createHTMLDocument ? (((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href), t.head.appendChild(r)) : (t = b)),
                                  (r = !n && []),
                                  (n = j.exec(e)) ? [t.createElement(n[1])] : ((n = be([e], t, r)), r && r.length && w(r).remove(), w.merge([], n.childNodes)));
                            var r;
                        }),
                        (w.fn.load = function (e, t, n) {
                            var r,
                                i,
                                a,
                                s = this,
                                c = e.indexOf(" ");
                            return (
                                -1 < c && ((r = Ct(e.slice(c))), (e = e.slice(0, c))),
                                o(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                                0 < s.length &&
                                    w
                                        .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                                        .done(function (e) {
                                            (a = arguments), s.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                                        })
                                        .always(
                                            n &&
                                                function (e, t) {
                                                    s.each(function () {
                                                        n.apply(this, a || [e.responseText, t, e]);
                                                    });
                                                }
                                        ),
                                this
                            );
                        }),
                        (w.expr.pseudos.animated = function (e) {
                            return w.grep(w.timers, function (t) {
                                return e === t.elem;
                            }).length;
                        }),
                        (w.offset = {
                            setOffset: function (e, t, n) {
                                var r,
                                    i,
                                    a,
                                    s,
                                    c = w.css(e, "position"),
                                    u = w(e),
                                    l = {};
                                "static" === c && (e.style.position = "relative"),
                                    (a = u.offset()),
                                    (r = w.css(e, "top")),
                                    (s = w.css(e, "left")),
                                    (c = ("absolute" === c || "fixed" === c) && -1 < (r + s).indexOf("auto") ? ((i = (c = u.position()).top), c.left) : ((i = parseFloat(r) || 0), parseFloat(s) || 0)),
                                    null != (t = o(t) ? t.call(e, n, w.extend({}, a)) : t).top && (l.top = t.top - a.top + i),
                                    null != t.left && (l.left = t.left - a.left + c),
                                    "using" in t ? t.using.call(e, l) : ("number" == typeof l.top && (l.top += "px"), "number" == typeof l.left && (l.left += "px"), u.css(l));
                            },
                        }),
                        w.fn.extend({
                            offset: function (e) {
                                var t, n;
                                return arguments.length
                                    ? void 0 === e
                                        ? this
                                        : this.each(function (t) {
                                              w.offset.setOffset(this, e, t);
                                          })
                                    : (n = this[0])
                                    ? n.getClientRects().length
                                        ? ((t = n.getBoundingClientRect()), (n = n.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                                        : { top: 0, left: 0 }
                                    : void 0;
                            },
                            position: function () {
                                if (this[0]) {
                                    var e,
                                        t,
                                        n,
                                        r = this[0],
                                        i = { top: 0, left: 0 };
                                    if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                                    else {
                                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"); ) e = e.parentNode;
                                        e && e !== r && 1 === e.nodeType && (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (i.left += w.css(e, "borderLeftWidth", !0)));
                                    }
                                    return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
                                }
                            },
                            offsetParent: function () {
                                return this.map(function () {
                                    for (var e = this.offsetParent; e && "static" === w.css(e, "position"); ) e = e.offsetParent;
                                    return e || oe;
                                });
                            },
                        }),
                        w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                            var n = "pageYOffset" === t;
                            w.fn[e] = function (r) {
                                return K(
                                    this,
                                    function (e, r, i) {
                                        var o;
                                        if ((a(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                                    },
                                    e,
                                    r,
                                    arguments.length
                                );
                            };
                        }),
                        w.each(["top", "left"], function (e, t) {
                            w.cssHooks[t] = Xe(y.pixelPosition, function (e, n) {
                                if (n) return (n = Ge(e, t)), ze.test(n) ? w(e).position()[t] + "px" : n;
                            });
                        }),
                        w.each({ Height: "height", Width: "width" }, function (e, t) {
                            w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                                w.fn[r] = function (i, o) {
                                    var s = arguments.length && (n || "boolean" != typeof i),
                                        c = n || (!0 === i || !0 === o ? "margin" : "border");
                                    return K(
                                        this,
                                        function (t, n, i) {
                                            var o;
                                            return a(t)
                                                ? 0 === r.indexOf("outer")
                                                    ? t["inner" + e]
                                                    : t.document.documentElement["client" + e]
                                                : 9 === t.nodeType
                                                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                                : void 0 === i
                                                ? w.css(t, n, c)
                                                : w.style(t, n, i, c);
                                        },
                                        t,
                                        s ? i : void 0,
                                        s
                                    );
                                };
                            });
                        }),
                        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                            w.fn[t] = function (e) {
                                return this.on(t, e);
                            };
                        }),
                        w.fn.extend({
                            bind: function (e, t, n) {
                                return this.on(e, null, t, n);
                            },
                            unbind: function (e, t) {
                                return this.off(e, null, t);
                            },
                            delegate: function (e, t, n, r) {
                                return this.on(t, e, n, r);
                            },
                            undelegate: function (e, t, n) {
                                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                            },
                            hover: function (e, t) {
                                return this.mouseenter(e).mouseleave(t || e);
                            },
                        }),
                        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                            w.fn[t] = function (e, n) {
                                return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
                            };
                        }),
                        /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
                    nn =
                        ((w.proxy = function (e, t) {
                            var n, r;
                            if (("string" == typeof t && ((r = e[t]), (t = e), (e = r)), o(e)))
                                return (
                                    (n = u.call(arguments, 2)),
                                    ((r = function () {
                                        return e.apply(t || this, n.concat(u.call(arguments)));
                                    }).guid = e.guid = e.guid || w.guid++),
                                    r
                                );
                        }),
                        (w.holdReady = function (e) {
                            e ? w.readyWait++ : w.ready(!0);
                        }),
                        (w.isArray = Array.isArray),
                        (w.parseJSON = JSON.parse),
                        (w.nodeName = A),
                        (w.isFunction = o),
                        (w.isWindow = a),
                        (w.camelCase = V),
                        (w.type = _),
                        (w.now = Date.now),
                        (w.isNumeric = function (e) {
                            var t = w.type(e);
                            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                        }),
                        (w.trim = function (e) {
                            return null == e ? "" : (e + "").replace(tn, "");
                        }),
                        void 0 !==
                            (r = function () {
                                return w;
                            }.apply(t, [])) && (e.exports = r),
                        n.jQuery),
                    rn = n.$;
                return (
                    (w.noConflict = function (e) {
                        return n.$ === w && (n.$ = rn), e && n.jQuery === w && (n.jQuery = nn), w;
                    }),
                    void 0 === i && (n.jQuery = n.$ = w),
                    w
                );
            });
        },
    
});
