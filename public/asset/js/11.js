!(function (n) {
  var r = {};
  function e(t) {
    var o;
    return (
      r[t] ||
      ((o = r[t] = { i: t, l: !1, exports: {} }),
      n[t].call(o.exports, o, o.exports, e),
      (o.l = !0),
      o)
    ).exports;
  }
  (e.m = n),
    (e.c = r),
    (e.d = function (n, r, t) {
      e.o(n, r) ||
        Object.defineProperty(n, r, {
          configurable: !1,
          enumerable: !0,
          get: t,
        });
    }),
    (e.n = function (n) {
      var r =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return e.d(r, "a", r), r;
    }),
    (e.o = function (n, r) {
      return Object.prototype.hasOwnProperty.call(n, r);
    }),
    (e.p = "/"),
    e((e.s = 0));
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
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, i) {
      "use strict";
      var o = [],
        a = Object.getPrototypeOf,
        s = o.slice,
        u = o.flat
          ? function (e) {
              return o.flat.call(e);
            }
          : function (e) {
              return o.concat.apply([], e);
            },
        c = o.push,
        l = o.indexOf,
        d = {},
        p = d.toString,
        f = d.hasOwnProperty,
        h = f.toString,
        g = h.call(Object),
        v = {},
        m = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        b = n.document,
        x = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function k(e, t, n) {
        var r,
          i,
          o = (n = n || b).createElement("script");
        if (((o.text = e), t))
          for (r in x)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function _(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? d[p.call(e)] || "object"
          : typeof e;
      }
      var w = function (e, t) {
        return new w.fn.init(e, t);
      };
      function D(e) {
        var t = !!e && "length" in e && e.length,
          n = _(e);
        return (
          !m(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (w.fn = w.prototype =
        {
          jquery: "3.5.1",
          constructor: w,
          length: 0,
          toArray: function () {
            return s.call(this);
          },
          get: function (e) {
            return null == e
              ? s.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
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
            return this.pushStack(s.apply(this, arguments));
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
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: o.sort,
          splice: o.splice,
        }),
        (w.extend = w.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              s = 1,
              u = arguments.length,
              c = !1;
            for (
              "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
                "object" == typeof a || m(a) || (a = {}),
                s === u && ((a = this), s--);
              s < u;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (r = e[t]),
                    "__proto__" !== t &&
                      a !== r &&
                      (c && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = a[t]),
                          (o =
                            i && !Array.isArray(n)
                              ? []
                              : i || w.isPlainObject(n)
                              ? n
                              : {}),
                          (i = !1),
                          (a[t] = w.extend(c, o, r)))
                        : void 0 !== r && (a[t] = r));
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
            var t, n;
            return (
              !(!e || "[object Object]" !== p.call(e)) &&
              (!(t = a(e)) ||
                ("function" ==
                  typeof (n = f.call(t, "constructor") && t.constructor) &&
                  h.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            k(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (D(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (D(Object(e))
                  ? w.merge(n, "string" == typeof e ? [e] : e)
                  : c.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : l.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
              !t(e[i], i) !== a && r.push(e[i]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              i,
              o = 0,
              a = [];
            if (D(e))
              for (r = e.length; o < r; o++)
                null != (i = t(e[o], o, n)) && a.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return u(a);
          },
          guid: 1,
          support: v,
        }),
        "function" == typeof Symbol &&
          (w.fn[Symbol.iterator] = o[Symbol.iterator]),
        w.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var C = (function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u,
          c,
          l,
          d,
          p,
          f,
          h,
          g,
          v,
          m,
          y,
          b,
          x = "sizzle" + 1 * new Date(),
          k = e.document,
          _ = 0,
          w = 0,
          D = ue(),
          C = ue(),
          T = ue(),
          S = ue(),
          M = function (e, t) {
            return e === t && (d = !0), 0;
          },
          A = {}.hasOwnProperty,
          j = [],
          E = j.pop,
          N = j.push,
          I = j.push,
          O = j.slice,
          L = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
          },
          P =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          F = "[\\x20\\t\\r\\n\\f]",
          R =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            F +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          q =
            "\\[" +
            F +
            "*(" +
            R +
            ")(?:" +
            F +
            "*([*^$|!~]?=)" +
            F +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            R +
            "))|)" +
            F +
            "*\\]",
          H =
            ":(" +
            R +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            q +
            ")*)|.*)\\)|)",
          Y = new RegExp(F + "+", "g"),
          W = new RegExp(
            "^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$",
            "g"
          ),
          B = new RegExp("^" + F + "*," + F + "*"),
          K = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
          $ = new RegExp(F + "|>"),
          U = new RegExp(H),
          z = new RegExp("^" + R + "$"),
          V = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + q),
            PSEUDO: new RegExp("^" + H),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                F +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                F +
                "*(?:([+-]|)" +
                F +
                "*(\\d+)|))" +
                F +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + P + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                F +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                F +
                "*((?:-\\d)?\\d*)" +
                F +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          G = /HTML$/i,
          X = /^(?:input|select|textarea|button)$/i,
          J = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          ne = function (e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return (
              t ||
              (n < 0
                ? String.fromCharCode(n + 65536)
                : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
            );
          },
          re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ie = function (e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          },
          oe = function () {
            p();
          },
          ae = xe(
            function (e) {
              return (
                !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
              );
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          I.apply((j = O.call(k.childNodes)), k.childNodes),
            j[k.childNodes.length].nodeType;
        } catch (e) {
          I = {
            apply: j.length
              ? function (e, t) {
                  N.apply(e, O.call(t));
                }
              : function (e, t) {
                  for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                  e.length = n - 1;
                },
          };
        }
        function se(e, t, r, i) {
          var o,
            s,
            c,
            l,
            d,
            h,
            m,
            y = t && t.ownerDocument,
            k = t ? t.nodeType : 9;
          if (
            ((r = r || []),
            "string" != typeof e || !e || (1 !== k && 9 !== k && 11 !== k))
          )
            return r;
          if (!i && (p(t), (t = t || f), g)) {
            if (11 !== k && (d = Z.exec(e)))
              if ((o = d[1])) {
                if (9 === k) {
                  if (!(c = t.getElementById(o))) return r;
                  if (c.id === o) return r.push(c), r;
                } else if (
                  y &&
                  (c = y.getElementById(o)) &&
                  b(t, c) &&
                  c.id === o
                )
                  return r.push(c), r;
              } else {
                if (d[2]) return I.apply(r, t.getElementsByTagName(e)), r;
                if (
                  (o = d[3]) &&
                  n.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return I.apply(r, t.getElementsByClassName(o)), r;
              }
            if (
              n.qsa &&
              !S[e + " "] &&
              (!v || !v.test(e)) &&
              (1 !== k || "object" !== t.nodeName.toLowerCase())
            ) {
              if (((m = e), (y = t), 1 === k && ($.test(e) || K.test(e)))) {
                for (
                  ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                    n.scope) ||
                    ((l = t.getAttribute("id"))
                      ? (l = l.replace(re, ie))
                      : t.setAttribute("id", (l = x))),
                    s = (h = a(e)).length;
                  s--;

                )
                  h[s] = (l ? "#" + l : ":scope") + " " + be(h[s]);
                m = h.join(",");
              }
              try {
                return I.apply(r, y.querySelectorAll(m)), r;
              } catch (t) {
                S(e, !0);
              } finally {
                l === x && t.removeAttribute("id");
              }
            }
          }
          return u(e.replace(W, "$1"), t, r, i);
        }
        function ue() {
          var e = [];
          return function t(n, i) {
            return (
              e.push(n + " ") > r.cacheLength && delete t[e.shift()],
              (t[n + " "] = i)
            );
          };
        }
        function ce(e) {
          return (e[x] = !0), e;
        }
        function le(e) {
          var t = f.createElement("fieldset");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function de(e, t) {
          for (var n = e.split("|"), i = n.length; i--; )
            r.attrHandle[n[i]] = t;
        }
        function pe(e, t) {
          var n = t && e,
            r =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function fe(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }
        function he(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }
        function ge(e) {
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
        function ve(e) {
          return ce(function (t) {
            return (
              (t = +t),
              ce(function (n, r) {
                for (var i, o = e([], n.length, t), a = o.length; a--; )
                  n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
              })
            );
          });
        }
        function me(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = se.support = {}),
        (o = se.isXML =
          function (e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !G.test(t || (n && n.nodeName) || "HTML");
          }),
        (p = se.setDocument =
          function (e) {
            var t,
              i,
              a = e ? e.ownerDocument || e : k;
            return a != f && 9 === a.nodeType && a.documentElement
              ? ((h = (f = a).documentElement),
                (g = !o(f)),
                k != f &&
                  (i = f.defaultView) &&
                  i.top !== i &&
                  (i.addEventListener
                    ? i.addEventListener("unload", oe, !1)
                    : i.attachEvent && i.attachEvent("onunload", oe)),
                (n.scope = le(function (e) {
                  return (
                    h.appendChild(e).appendChild(f.createElement("div")),
                    void 0 !== e.querySelectorAll &&
                      !e.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (n.attributes = le(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = le(function (e) {
                  return (
                    e.appendChild(f.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = Q.test(f.getElementsByClassName)),
                (n.getById = le(function (e) {
                  return (
                    (h.appendChild(e).id = x),
                    !f.getElementsByName || !f.getElementsByName(x).length
                  );
                })),
                n.getById
                  ? ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n,
                          r,
                          i,
                          o = t.getElementById(e);
                        if (o) {
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                          for (
                            i = t.getElementsByName(e), r = 0;
                            (o = i[r++]);

                          )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return o;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                      return t.getElementsByClassName(e);
                  }),
                (m = []),
                (v = []),
                (n.qsa = Q.test(f.querySelectorAll)) &&
                  (le(function (e) {
                    var t;
                    (h.appendChild(e).innerHTML =
                      "<a id='" +
                      x +
                      "'></a><select id='" +
                      x +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        v.push("[*^$]=" + F + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        v.push("\\[" + F + "*(?:value|" + P + ")"),
                      e.querySelectorAll("[id~=" + x + "-]").length ||
                        v.push("~="),
                      (t = f.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        v.push(
                          "\\[" + F + "*name" + F + "*=" + F + "*(?:''|\"\")"
                        ),
                      e.querySelectorAll(":checked").length ||
                        v.push(":checked"),
                      e.querySelectorAll("a#" + x + "+*").length ||
                        v.push(".#.+[+~]"),
                      e.querySelectorAll("\\\f"),
                      v.push("[\\r\\n\\f]");
                  }),
                  le(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        v.push("name" + F + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        v.push(":enabled", ":disabled"),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        v.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      v.push(",.*:");
                  })),
                (n.matchesSelector = Q.test(
                  (y =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector)
                )) &&
                  le(function (e) {
                    (n.disconnectedMatch = y.call(e, "*")),
                      y.call(e, "[s!='']:x"),
                      m.push("!=", H);
                  }),
                (v = v.length && new RegExp(v.join("|"))),
                (m = m.length && new RegExp(m.join("|"))),
                (t = Q.test(h.compareDocumentPosition)),
                (b =
                  t || Q.test(h.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (M = t
                  ? function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) == (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e == f || (e.ownerDocument == k && b(k, e))
                            ? -1
                            : t == f || (t.ownerDocument == k && b(k, t))
                            ? 1
                            : l
                            ? L(l, e) - L(l, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (d = !0), 0;
                      var n,
                        r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                      if (!i || !o)
                        return e == f
                          ? -1
                          : t == f
                          ? 1
                          : i
                          ? -1
                          : o
                          ? 1
                          : l
                          ? L(l, e) - L(l, t)
                          : 0;
                      if (i === o) return pe(e, t);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                      for (; a[r] === s[r]; ) r++;
                      return r
                        ? pe(a[r], s[r])
                        : a[r] == k
                        ? -1
                        : s[r] == k
                        ? 1
                        : 0;
                    }),
                f)
              : f;
          }),
        (se.matches = function (e, t) {
          return se(e, null, null, t);
        }),
        (se.matchesSelector = function (e, t) {
          if (
            (p(e),
            n.matchesSelector &&
              g &&
              !S[t + " "] &&
              (!m || !m.test(t)) &&
              (!v || !v.test(t)))
          )
            try {
              var r = y.call(e, t);
              if (
                r ||
                n.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return r;
            } catch (e) {
              S(t, !0);
            }
          return se(t, f, null, [e]).length > 0;
        }),
        (se.contains = function (e, t) {
          return (e.ownerDocument || e) != f && p(e), b(e, t);
        }),
        (se.attr = function (e, t) {
          (e.ownerDocument || e) != f && p(e);
          var i = r.attrHandle[t.toLowerCase()],
            o =
              i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
          return void 0 !== o
            ? o
            : n.attributes || !g
            ? e.getAttribute(t)
            : (o = e.getAttributeNode(t)) && o.specified
            ? o.value
            : null;
        }),
        (se.escape = function (e) {
          return (e + "").replace(re, ie);
        }),
        (se.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (se.uniqueSort = function (e) {
          var t,
            r = [],
            i = 0,
            o = 0;
          if (
            ((d = !n.detectDuplicates),
            (l = !n.sortStable && e.slice(0)),
            e.sort(M),
            d)
          ) {
            for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
            for (; i--; ) e.splice(r[i], 1);
          }
          return (l = null), e;
        }),
        (i = se.getText =
          function (e) {
            var t,
              n = "",
              r = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += i(t);
            return n;
          }),
        ((r = se.selectors =
          {
            cacheLength: 50,
            createPseudo: ce,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || se.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && se.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return V.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        U.test(n) &&
                        (t = a(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = D[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) &&
                    D(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (r) {
                  var i = se.attr(r, e);
                  return null == i
                    ? "!=" === t
                    : !t ||
                        ((i += ""),
                        "=" === t
                          ? i === n
                          : "!=" === t
                          ? i !== n
                          : "^=" === t
                          ? n && 0 === i.indexOf(n)
                          : "*=" === t
                          ? n && i.indexOf(n) > -1
                          : "$=" === t
                          ? n && i.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + i.replace(Y, " ") + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (i === n || i.slice(0, n.length + 1) === n + "-"));
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
                  : function (t, n, u) {
                      var c,
                        l,
                        d,
                        p,
                        f,
                        h,
                        g = o !== a ? "nextSibling" : "previousSibling",
                        v = t.parentNode,
                        m = s && t.nodeName.toLowerCase(),
                        y = !u && !s,
                        b = !1;
                      if (v) {
                        if (o) {
                          for (; g; ) {
                            for (p = t; (p = p[g]); )
                              if (
                                s
                                  ? p.nodeName.toLowerCase() === m
                                  : 1 === p.nodeType
                              )
                                return !1;
                            h = g = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? v.firstChild : v.lastChild]), a && y)) {
                          for (
                            b =
                              (f =
                                (c =
                                  (l =
                                    (d = (p = v)[x] || (p[x] = {}))[
                                      p.uniqueID
                                    ] || (d[p.uniqueID] = {}))[e] || [])[0] ===
                                  _ && c[1]) && c[2],
                              p = f && v.childNodes[f];
                            (p = (++f && p && p[g]) || (b = f = 0) || h.pop());

                          )
                            if (1 === p.nodeType && ++b && p === t) {
                              l[e] = [_, f, b];
                              break;
                            }
                        } else if (
                          (y &&
                            (b = f =
                              (c =
                                (l =
                                  (d = (p = t)[x] || (p[x] = {}))[p.uniqueID] ||
                                  (d[p.uniqueID] = {}))[e] || [])[0] === _ &&
                              c[1]),
                          !1 === b)
                        )
                          for (
                            ;
                            (p =
                              (++f && p && p[g]) || (b = f = 0) || h.pop()) &&
                            ((s
                              ? p.nodeName.toLowerCase() !== m
                              : 1 !== p.nodeType) ||
                              !++b ||
                              (y &&
                                ((l =
                                  (d = p[x] || (p[x] = {}))[p.uniqueID] ||
                                  (d[p.uniqueID] = {}))[e] = [_, b]),
                              p !== t));

                          );
                        return (b -= i) === r || (b % r == 0 && b / r >= 0);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  i =
                    r.pseudos[e] ||
                    r.setFilters[e.toLowerCase()] ||
                    se.error("unsupported pseudo: " + e);
                return i[x]
                  ? i(t)
                  : i.length > 1
                  ? ((n = [e, e, "", t]),
                    r.setFilters.hasOwnProperty(e.toLowerCase())
                      ? ce(function (e, n) {
                          for (var r, o = i(e, t), a = o.length; a--; )
                            e[(r = L(e, o[a]))] = !(n[r] = o[a]);
                        })
                      : function (e) {
                          return i(e, 0, n);
                        })
                  : i;
              },
            },
            pseudos: {
              not: ce(function (e) {
                var t = [],
                  n = [],
                  r = s(e.replace(W, "$1"));
                return r[x]
                  ? ce(function (e, t, n, i) {
                      for (var o, a = r(e, null, i, []), s = e.length; s--; )
                        (o = a[s]) && (e[s] = !(t[s] = o));
                    })
                  : function (e, i, o) {
                      return (
                        (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: ce(function (e) {
                return function (t) {
                  return se(e, t).length > 0;
                };
              }),
              contains: ce(function (e) {
                return (
                  (e = e.replace(te, ne)),
                  function (t) {
                    return (t.textContent || i(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: ce(function (e) {
                return (
                  z.test(e || "") || se.error("unsupported lang: " + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = g
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
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
                return e === h;
              },
              focus: function (e) {
                return (
                  e === f.activeElement &&
                  (!f.hasFocus || f.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: ge(!1),
              disabled: ge(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !r.pseudos.empty(e);
              },
              header: function (e) {
                return J.test(e.nodeName);
              },
              input: function (e) {
                return X.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: ve(function () {
                return [0];
              }),
              last: ve(function (e, t) {
                return [t - 1];
              }),
              eq: ve(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: ve(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: ve(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: ve(function (e, t, n) {
                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                  e.push(r);
                return e;
              }),
              gt: ve(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              }),
            },
          }).pseudos.nth = r.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          r.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
        function ye() {}
        function be(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r;
        }
        function xe(e, t, n) {
          var r = t.dir,
            i = t.next,
            o = i || r,
            a = n && "parentNode" === o,
            s = w++;
          return t.first
            ? function (t, n, i) {
                for (; (t = t[r]); )
                  if (1 === t.nodeType || a) return e(t, n, i);
                return !1;
              }
            : function (t, n, u) {
                var c,
                  l,
                  d,
                  p = [_, s];
                if (u) {
                  for (; (t = t[r]); )
                    if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                } else
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a)
                      if (
                        ((l =
                          (d = t[x] || (t[x] = {}))[t.uniqueID] ||
                          (d[t.uniqueID] = {})),
                        i && i === t.nodeName.toLowerCase())
                      )
                        t = t[r] || t;
                      else {
                        if ((c = l[o]) && c[0] === _ && c[1] === s)
                          return (p[2] = c[2]);
                        if (((l[o] = p), (p[2] = e(t, n, u)))) return !0;
                      }
                return !1;
              };
        }
        function ke(e) {
          return e.length > 1
            ? function (t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
              }
            : e[0];
        }
        function _e(e, t, n, r, i) {
          for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
            (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), c && t.push(s)));
          return a;
        }
        function we(e, t, n, r, i, o) {
          return (
            r && !r[x] && (r = we(r)),
            i && !i[x] && (i = we(i, o)),
            ce(function (o, a, s, u) {
              var c,
                l,
                d,
                p = [],
                f = [],
                h = a.length,
                g =
                  o ||
                  (function (e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                    return n;
                  })(t || "*", s.nodeType ? [s] : s, []),
                v = !e || (!o && t) ? g : _e(g, p, e, s, u),
                m = n ? (i || (o ? e : h || r) ? [] : a) : v;
              if ((n && n(v, m, s, u), r))
                for (c = _e(m, f), r(c, [], s, u), l = c.length; l--; )
                  (d = c[l]) && (m[f[l]] = !(v[f[l]] = d));
              if (o) {
                if (i || e) {
                  if (i) {
                    for (c = [], l = m.length; l--; )
                      (d = m[l]) && c.push((v[l] = d));
                    i(null, (m = []), c, u);
                  }
                  for (l = m.length; l--; )
                    (d = m[l]) &&
                      (c = i ? L(o, d) : p[l]) > -1 &&
                      (o[c] = !(a[c] = d));
                }
              } else (m = _e(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, u) : I.apply(a, m);
            })
          );
        }
        function De(e) {
          for (
            var t,
              n,
              i,
              o = e.length,
              a = r.relative[e[0].type],
              s = a || r.relative[" "],
              u = a ? 1 : 0,
              l = xe(
                function (e) {
                  return e === t;
                },
                s,
                !0
              ),
              d = xe(
                function (e) {
                  return L(t, e) > -1;
                },
                s,
                !0
              ),
              p = [
                function (e, n, r) {
                  var i =
                    (!a && (r || n !== c)) ||
                    ((t = n).nodeType ? l(e, n, r) : d(e, n, r));
                  return (t = null), i;
                },
              ];
            u < o;
            u++
          )
            if ((n = r.relative[e[u].type])) p = [xe(ke(p), n)];
            else {
              if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                return we(
                  u > 1 && ke(p),
                  u > 1 &&
                    be(
                      e
                        .slice(0, u - 1)
                        .concat({ value: " " === e[u - 2].type ? "*" : "" })
                    ).replace(W, "$1"),
                  n,
                  u < i && De(e.slice(u, i)),
                  i < o && De((e = e.slice(i))),
                  i < o && be(e)
                );
              }
              p.push(n);
            }
          return ke(p);
        }
        return (
          (ye.prototype = r.filters = r.pseudos),
          (r.setFilters = new ye()),
          (a = se.tokenize =
            function (e, t) {
              var n,
                i,
                o,
                a,
                s,
                u,
                c,
                l = C[e + " "];
              if (l) return t ? 0 : l.slice(0);
              for (s = e, u = [], c = r.preFilter; s; ) {
                for (a in ((n && !(i = B.exec(s))) ||
                  (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                (n = !1),
                (i = K.exec(s)) &&
                  ((n = i.shift()),
                  o.push({ value: n, type: i[0].replace(W, " ") }),
                  (s = s.slice(n.length))),
                r.filter))
                  !(i = V[a].exec(s)) ||
                    (c[a] && !(i = c[a](i))) ||
                    ((n = i.shift()),
                    o.push({ value: n, type: a, matches: i }),
                    (s = s.slice(n.length)));
                if (!n) break;
              }
              return t ? s.length : s ? se.error(e) : C(e, u).slice(0);
            }),
          (s = se.compile =
            function (e, t) {
              var n,
                i = [],
                o = [],
                s = T[e + " "];
              if (!s) {
                for (t || (t = a(e)), n = t.length; n--; )
                  (s = De(t[n]))[x] ? i.push(s) : o.push(s);
                (s = T(
                  e,
                  (function (e, t) {
                    var n = t.length > 0,
                      i = e.length > 0,
                      o = function (o, a, s, u, l) {
                        var d,
                          h,
                          v,
                          m = 0,
                          y = "0",
                          b = o && [],
                          x = [],
                          k = c,
                          w = o || (i && r.find.TAG("*", l)),
                          D = (_ += null == k ? 1 : Math.random() || 0.1),
                          C = w.length;
                        for (
                          l && (c = a == f || a || l);
                          y !== C && null != (d = w[y]);
                          y++
                        ) {
                          if (i && d) {
                            for (
                              h = 0,
                                a || d.ownerDocument == f || (p(d), (s = !g));
                              (v = e[h++]);

                            )
                              if (v(d, a || f, s)) {
                                u.push(d);
                                break;
                              }
                            l && (_ = D);
                          }
                          n && ((d = !v && d) && m--, o && b.push(d));
                        }
                        if (((m += y), n && y !== m)) {
                          for (h = 0; (v = t[h++]); ) v(b, x, a, s);
                          if (o) {
                            if (m > 0)
                              for (; y--; ) b[y] || x[y] || (x[y] = E.call(u));
                            x = _e(x);
                          }
                          I.apply(u, x),
                            l &&
                              !o &&
                              x.length > 0 &&
                              m + t.length > 1 &&
                              se.uniqueSort(u);
                        }
                        return l && ((_ = D), (c = k)), b;
                      };
                    return n ? ce(o) : o;
                  })(o, i)
                )).selector = e;
              }
              return s;
            }),
          (u = se.select =
            function (e, t, n, i) {
              var o,
                u,
                c,
                l,
                d,
                p = "function" == typeof e && e,
                f = !i && a((e = p.selector || e));
              if (((n = n || []), 1 === f.length)) {
                if (
                  (u = f[0] = f[0].slice(0)).length > 2 &&
                  "ID" === (c = u[0]).type &&
                  9 === t.nodeType &&
                  g &&
                  r.relative[u[1].type]
                ) {
                  if (
                    !(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])
                  )
                    return n;
                  p && (t = t.parentNode),
                    (e = e.slice(u.shift().value.length));
                }
                for (
                  o = V.needsContext.test(e) ? 0 : u.length;
                  o-- && ((c = u[o]), !r.relative[(l = c.type)]);

                )
                  if (
                    (d = r.find[l]) &&
                    (i = d(
                      c.matches[0].replace(te, ne),
                      (ee.test(u[0].type) && me(t.parentNode)) || t
                    ))
                  ) {
                    if ((u.splice(o, 1), !(e = i.length && be(u))))
                      return I.apply(n, i), n;
                    break;
                  }
              }
              return (
                (p || s(e, f))(
                  i,
                  t,
                  !g,
                  n,
                  !t || (ee.test(e) && me(t.parentNode)) || t
                ),
                n
              );
            }),
          (n.sortStable = x.split("").sort(M).join("") === x),
          (n.detectDuplicates = !!d),
          p(),
          (n.sortDetached = le(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
          })),
          le(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              "#" === e.firstChild.getAttribute("href")
            );
          }) ||
            de("type|href|height|width", function (e, t, n) {
              if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
          (n.attributes &&
            le(function (e) {
              return (
                (e.innerHTML = "<input/>"),
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
              );
            })) ||
            de("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
          le(function (e) {
            return null == e.getAttribute("disabled");
          }) ||
            de(P, function (e, t, n) {
              var r;
              if (!n)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (r = e.getAttributeNode(t)) && r.specified
                  ? r.value
                  : null;
            }),
          se
        );
      })(n);
      (w.find = C),
        (w.expr = C.selectors),
        (w.expr[":"] = w.expr.pseudos),
        (w.uniqueSort = w.unique = C.uniqueSort),
        (w.text = C.getText),
        (w.isXMLDoc = C.isXML),
        (w.contains = C.contains),
        (w.escapeSelector = C.escape);
      var T = function (e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && w(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        S = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        M = w.expr.match.needsContext;
      function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function E(e, t, n) {
        return m(t)
          ? w.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? w.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? w.grep(e, function (e) {
              return l.call(t, e) > -1 !== n;
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
            return r > 1 ? w.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(E(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(E(this, e || [], !0));
          },
          is: function (e) {
            return !!E(
              this,
              "string" == typeof e && M.test(e) ? w(e) : e || [],
              !1
            ).length;
          },
        });
      var N,
        I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((w.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || N), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : I.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof w ? t[0] : t),
              w.merge(
                this,
                w.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : b,
                  !0
                )
              ),
              j.test(r[1]) && w.isPlainObject(t))
            )
              for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (i = b.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : m(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(w)
          : w.makeArray(e, this);
      }).prototype = w.fn),
        (N = w(b));
      var O = /^(?:parents|prev(?:Until|All))/,
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
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && w.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? l.call(w(e), this[0])
              : l.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        w.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return T(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return T(e, "parentNode", n);
            },
            next: function (e) {
              return P(e, "nextSibling");
            },
            prev: function (e) {
              return P(e, "previousSibling");
            },
            nextAll: function (e) {
              return T(e, "nextSibling");
            },
            prevAll: function (e) {
              return T(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return T(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return T(e, "previousSibling", n);
            },
            siblings: function (e) {
              return S((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return S(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && a(e.contentDocument)
                ? e.contentDocument
                : (A(e, "template") && (e = e.content || e),
                  w.merge([], e.childNodes));
            },
          },
          function (e, t) {
            w.fn[e] = function (n, r) {
              var i = w.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = w.filter(r, i)),
                this.length > 1 &&
                  (L[e] || w.uniqueSort(i), O.test(e) && i.reverse()),
                this.pushStack(i)
              );
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
          e && m((i = e.promise))
            ? i.call(e).done(t).fail(n)
            : e && m((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (w.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  w.each(e.match(F) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : w.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          a = [],
          s = -1,
          u = function () {
            for (i = i || e.once, r = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < o.length; )
                !1 === o[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                o &&
                  (n && !t && ((s = o.length - 1), a.push(n)),
                  (function t(n) {
                    w.each(n, function (n, r) {
                      m(r)
                        ? (e.unique && c.has(r)) || o.push(r)
                        : r && r.length && "string" !== _(r) && t(r);
                    });
                  })(arguments),
                  n && !t && u()),
                this
              );
            },
            remove: function () {
              return (
                w.each(arguments, function (e, t) {
                  for (var n; (n = w.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? w.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (i = a = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (i = a = []), n || t || (o = n = ""), this;
            },
            locked: function () {
              return !!i;
            },
            fireWith: function (e, n) {
              return (
                i ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  t || u()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return c;
      }),
        w.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  w.Callbacks("memory"),
                  w.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  w.Callbacks("once memory"),
                  w.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  w.Callbacks("once memory"),
                  w.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return i.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return w
                    .Deferred(function (n) {
                      w.each(t, function (t, r) {
                        var i = m(e[r[4]]) && e[r[4]];
                        o[r[1]](function () {
                          var e = i && i.apply(this, arguments);
                          e && m(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[r[0] + "With"](this, i ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                then: function (e, r, i) {
                  var o = 0;
                  function a(e, t, r, i) {
                    return function () {
                      var s = this,
                        u = arguments,
                        c = function () {
                          var n, c;
                          if (!(e < o)) {
                            if ((n = r.apply(s, u)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              m(c)
                                ? i
                                  ? c.call(n, a(o, t, R, i), a(o, t, q, i))
                                  : (o++,
                                    c.call(
                                      n,
                                      a(o, t, R, i),
                                      a(o, t, q, i),
                                      a(o, t, R, t.notifyWith)
                                    ))
                                : (r !== R && ((s = void 0), (u = [n])),
                                  (i || t.resolveWith)(s, u));
                          }
                        },
                        l = i
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                w.Deferred.exceptionHook &&
                                  w.Deferred.exceptionHook(n, l.stackTrace),
                                  e + 1 >= o &&
                                    (r !== q && ((s = void 0), (u = [n])),
                                    t.rejectWith(s, u));
                              }
                            };
                      e
                        ? l()
                        : (w.Deferred.getStackHook &&
                            (l.stackTrace = w.Deferred.getStackHook()),
                          n.setTimeout(l));
                    };
                  }
                  return w
                    .Deferred(function (n) {
                      t[0][3].add(a(0, n, m(i) ? i : R, n.notifyWith)),
                        t[1][3].add(a(0, n, m(e) ? e : R)),
                        t[2][3].add(a(0, n, m(r) ? r : q));
                    })
                    .promise();
                },
                promise: function (e) {
                  return null != e ? w.extend(e, i) : i;
                },
              },
              o = {};
            return (
              w.each(t, function (e, n) {
                var a = n[2],
                  s = n[5];
                (i[n[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        r = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = a.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              i = s.call(arguments),
              o = w.Deferred(),
              a = function (e) {
                return function (n) {
                  (r[e] = this),
                    (i[e] = arguments.length > 1 ? s.call(arguments) : n),
                    --t || o.resolveWith(r, i);
                };
              };
            if (
              t <= 1 &&
              (H(e, o.done(a(n)).resolve, o.reject, !t),
              "pending" === o.state() || m(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) H(i[n], a(n), o.reject);
            return o.promise();
          },
        });
      var Y = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (w.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          Y.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (w.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var W = w.Deferred();
      function B() {
        b.removeEventListener("DOMContentLoaded", B),
          n.removeEventListener("load", B),
          w.ready();
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
            (!0 === e ? --w.readyWait : w.isReady) ||
              ((w.isReady = !0),
              (!0 !== e && --w.readyWait > 0) || W.resolveWith(b, [w]));
          },
        }),
        (w.ready.then = W.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(w.ready)
          : (b.addEventListener("DOMContentLoaded", B),
            n.addEventListener("load", B));
      var K = function (e, t, n, r, i, o, a) {
          var s = 0,
            u = e.length,
            c = null == n;
          if ("object" === _(n))
            for (s in ((i = !0), n)) K(e, t, s, n[s], !0, o, a);
          else if (
            void 0 !== r &&
            ((i = !0),
            m(r) || (a = !0),
            c &&
              (a
                ? (t.call(e, r), (t = null))
                : ((c = t),
                  (t = function (e, t, n) {
                    return c.call(w(e), n);
                  }))),
            t)
          )
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
        },
        $ = /^-ms-/,
        U = /-([a-z])/g;
      function z(e, t) {
        return t.toUpperCase();
      }
      function V(e) {
        return e.replace($, "ms-").replace(U, z);
      }
      var G = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function X() {
        this.expando = w.expando + X.uid++;
      }
      (X.uid = 1),
        (X.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                G(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else for (r in t) i[V(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][V(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(V)
                  : (t = V(t)) in r
                  ? [t]
                  : t.match(F) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || w.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t);
          },
        });
      var J = new X(),
        Q = new X(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : Z.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            Q.set(e, t, n);
          } else n = void 0;
        return n;
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
            if (void 0 === e) {
              if (
                this.length &&
                ((i = Q.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (r = a[n].name).indexOf("data-") &&
                    ((r = V(r.slice(5))), te(o, r, i[r]));
                J.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" == typeof e
              ? this.each(function () {
                  Q.set(this, e);
                })
              : K(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = Q.get(o, e))
                        ? n
                        : void 0 !== (n = te(o, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      Q.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
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
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = J.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = J.access(e, t, w.makeArray(n)))
                    : r.push(n)),
                r || []
              );
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
                    w._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
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
            var n,
              r = 1,
              i = w.Deferred(),
              o = this,
              a = this.length,
              s = function () {
                --r || i.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = J.get(o[a], e + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(s));
            return s(), i.promise(t);
          },
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        oe = b.documentElement,
        ae = function (e) {
          return w.contains(e.ownerDocument, e);
        },
        se = { composed: !0 };
      oe.getRootNode &&
        (ae = function (e) {
          return (
            w.contains(e.ownerDocument, e) ||
            e.getRootNode(se) === e.ownerDocument
          );
        });
      var ue = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && ae(e) && "none" === w.css(e, "display"))
        );
      };
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
          u = s(),
          c = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
          l =
            e.nodeType &&
            (w.cssNumber[t] || ("px" !== c && +u)) &&
            re.exec(w.css(e, t));
        if (l && l[3] !== c) {
          for (u /= 2, c = c || l[3], l = +u || 1; a--; )
            w.style(e, t, l + c),
              (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
              (l /= o);
          (l *= 2), w.style(e, t, l + c), (n = n || []);
        }
        return (
          n &&
            ((l = +l || +u || 0),
            (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = c), (r.start = l), (r.end = i))),
          i
        );
      }
      var le = {};
      function de(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = le[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = w.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === i && (i = "block"),
          (le[r] = i),
          i)
        );
      }
      function pe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((i[o] = J.get(r, "display") || null),
                  i[o] || (r.style.display = "")),
                "" === r.style.display && ue(r) && (i[o] = de(r)))
              : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      w.fn.extend({
        show: function () {
          return pe(this, !0);
        },
        hide: function () {
          return pe(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ue(this) ? w(this).show() : w(this).hide();
              });
        },
      });
      var fe,
        he,
        ge = /^(?:checkbox|radio)$/i,
        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i;
      (fe = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (he = b.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        fe.appendChild(he),
        (v.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (fe.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
        (fe.innerHTML = "<option></option>"),
        (v.option = !!fe.lastChild);
      var ye = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function be(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && A(e, t)) ? w.merge([e], n) : n
        );
      }
      function xe(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td),
        v.option ||
          (ye.optgroup = ye.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var ke = /<|&#?\w+;/;
      function _e(e, t, n, r, i) {
        for (
          var o,
            a,
            s,
            u,
            c,
            l,
            d = t.createDocumentFragment(),
            p = [],
            f = 0,
            h = e.length;
          f < h;
          f++
        )
          if ((o = e[f]) || 0 === o)
            if ("object" === _(o)) w.merge(p, o.nodeType ? [o] : o);
            else if (ke.test(o)) {
              for (
                a = a || d.appendChild(t.createElement("div")),
                  s = (ve.exec(o) || ["", ""])[1].toLowerCase(),
                  u = ye[s] || ye._default,
                  a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
                  l = u[0];
                l--;

              )
                a = a.lastChild;
              w.merge(p, a.childNodes), ((a = d.firstChild).textContent = "");
            } else p.push(t.createTextNode(o));
        for (d.textContent = "", f = 0; (o = p[f++]); )
          if (r && w.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((c = ae(o)), (a = be(d.appendChild(o), "script")), c && xe(a), n)
          )
            for (l = 0; (o = a[l++]); ) me.test(o.type || "") && n.push(o);
        return d;
      }
      var we = /^key/,
        De = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
      function Te() {
        return !0;
      }
      function Se() {
        return !1;
      }
      function Me(e, t) {
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
      function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
          for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            Ae(e, s, n, r, t[s], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = Se;
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
      function je(e, t, n) {
        n
          ? (J.set(e, t, !1),
            w.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  i,
                  o = J.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length)
                    (w.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((o = s.call(arguments)),
                    J.set(this, t, o),
                    (r = n(this, t)),
                    this[t](),
                    o !== (i = J.get(this, t)) || r
                      ? J.set(this, t, !1)
                      : (i = {}),
                    o !== i)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), i.value
                    );
                } else
                  o.length &&
                    (J.set(this, t, {
                      value: w.event.trigger(
                        w.extend(o[0], w.Event.prototype),
                        o.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === J.get(e, t) && w.event.add(e, t, Te);
      }
      (w.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            c,
            l,
            d,
            p,
            f,
            h,
            g,
            v = J.get(e);
          if (G(e))
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && w.find.matchesSelector(oe, i),
                n.guid || (n.guid = w.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) ||
                  (a = v.handle =
                    function (t) {
                      return void 0 !== w && w.event.triggered !== t.type
                        ? w.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                c = (t = (t || "").match(F) || [""]).length;
              c--;

            )
              (f = g = (s = Ce.exec(t[c]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                f &&
                  ((d = w.event.special[f] || {}),
                  (f = (i ? d.delegateType : d.bindType) || f),
                  (d = w.event.special[f] || {}),
                  (l = w.extend(
                    {
                      type: f,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && w.expr.match.needsContext.test(i),
                      namespace: h.join("."),
                    },
                    o
                  )),
                  (p = u[f]) ||
                    (((p = u[f] = []).delegateCount = 0),
                    (d.setup && !1 !== d.setup.call(e, r, h, a)) ||
                      (e.addEventListener && e.addEventListener(f, a))),
                  d.add &&
                    (d.add.call(e, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                  i ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                  (w.event.global[f] = !0));
        },
        remove: function (e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            c,
            l,
            d,
            p,
            f,
            h,
            g,
            v = J.hasData(e) && J.get(e);
          if (v && (u = v.events)) {
            for (c = (t = (t || "").match(F) || [""]).length; c--; )
              if (
                ((f = g = (s = Ce.exec(t[c]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  d = w.event.special[f] || {},
                    p = u[(f = (r ? d.delegateType : d.bindType) || f)] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = o = p.length;
                  o--;

                )
                  (l = p[o]),
                    (!i && g !== l.origType) ||
                      (n && n.guid !== l.guid) ||
                      (s && !s.test(l.namespace)) ||
                      (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                      (p.splice(o, 1),
                      l.selector && p.delegateCount--,
                      d.remove && d.remove.call(e, l));
                a &&
                  !p.length &&
                  ((d.teardown && !1 !== d.teardown.call(e, h, v.handle)) ||
                    w.removeEvent(e, f, v.handle),
                  delete u[f]);
              } else for (f in u) w.event.remove(e, f + t[c], n, r, !0);
            w.isEmptyObject(u) && J.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s = new Array(arguments.length),
            u = w.event.fix(e),
            c = (J.get(this, "events") || Object.create(null))[u.type] || [],
            l = w.event.special[u.type] || {};
          for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (
            ((u.delegateTarget = this),
            !l.preDispatch || !1 !== l.preDispatch.call(this, u))
          ) {
            for (
              a = w.event.handlers.call(this, u, c), t = 0;
              (i = a[t++]) && !u.isPropagationStopped();

            )
              for (
                u.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

              )
                (u.rnamespace &&
                  !1 !== o.namespace &&
                  !u.rnamespace.test(o.namespace)) ||
                  ((u.handleObj = o),
                  (u.data = o.data),
                  void 0 !==
                    (r = (
                      (w.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, s)) &&
                    !1 === (u.result = r) &&
                    (u.preventDefault(), u.stopPropagation()));
            return l.postDispatch && l.postDispatch.call(this, u), u.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s = [],
            u = t.delegateCount,
            c = e.target;
          if (u && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (o = [], a = {}, n = 0; n < u; n++)
                  void 0 === a[(i = (r = t[n]).selector + " ")] &&
                    (a[i] = r.needsContext
                      ? w(i, this).index(c) > -1
                      : w.find(i, this, null, [c]).length),
                    a[i] && o.push(r);
                o.length && s.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            u < t.length && s.push({ elem: c, handlers: t.slice(u) }),
            s
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(w.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: m(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
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
              var t = this || e;
              return (
                ge.test(t.type) &&
                  t.click &&
                  A(t, "input") &&
                  je(t, "click", Te),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) && t.click && A(t, "input") && je(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (ge.test(t.type) &&
                  t.click &&
                  A(t, "input") &&
                  J.get(t, "click")) ||
                A(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
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
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Te
                  : Se),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && w.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
          constructor: w.Event,
          isDefaultPrevented: Se,
          isPropagationStopped: Se,
          isImmediatePropagationStopped: Se,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Te),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Te),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Te),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
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
              return null == e.which && we.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && De.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          w.event.addProp
        ),
        w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          w.event.special[e] = {
            setup: function () {
              return je(this, e, Me), !1;
            },
            trigger: function () {
              return je(this, e), !0;
            },
            delegateType: t,
          };
        }),
        w.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            w.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = e.relatedTarget,
                  i = e.handleObj;
                return (
                  (r && (r === this || w.contains(this, r))) ||
                    ((e.type = i.origType),
                    (n = i.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        w.fn.extend({
          on: function (e, t, n, r) {
            return Ae(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Ae(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                w(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Se),
              this.each(function () {
                w.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Ee = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Oe(e, t) {
        return (
          (A(e, "table") &&
            A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            w(e).children("tbody")[0]) ||
          e
        );
      }
      function Le(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Pe(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Fe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
          if (J.hasData(e) && (s = J.get(e).events))
            for (i in (J.remove(t, "handle events"), s))
              for (n = 0, r = s[i].length; n < r; n++)
                w.event.add(t, i, s[i][n]);
          Q.hasData(e) &&
            ((o = Q.access(e)), (a = w.extend({}, o)), Q.set(t, a));
        }
      }
      function Re(e, t, n, r) {
        t = u(t);
        var i,
          o,
          a,
          s,
          c,
          l,
          d = 0,
          p = e.length,
          f = p - 1,
          h = t[0],
          g = m(h);
        if (g || (p > 1 && "string" == typeof h && !v.checkClone && Ne.test(h)))
          return e.each(function (i) {
            var o = e.eq(i);
            g && (t[0] = h.call(this, i, o.html())), Re(o, t, n, r);
          });
        if (
          p &&
          ((o = (i = _e(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (s = (a = w.map(be(i, "script"), Le)).length; d < p; d++)
            (c = i),
              d !== f &&
                ((c = w.clone(c, !0, !0)), s && w.merge(a, be(c, "script"))),
              n.call(e[d], c, d);
          if (s)
            for (
              l = a[a.length - 1].ownerDocument, w.map(a, Pe), d = 0;
              d < s;
              d++
            )
              (c = a[d]),
                me.test(c.type || "") &&
                  !J.access(c, "globalEval") &&
                  w.contains(l, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? w._evalUrl &&
                      !c.noModule &&
                      w._evalUrl(
                        c.src,
                        { nonce: c.nonce || c.getAttribute("nonce") },
                        l
                      )
                    : k(c.textContent.replace(Ie, ""), c, l));
        }
        return e;
      }
      function qe(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || w.cleanData(be(r)),
            r.parentNode &&
              (n && ae(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
        return e;
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
            u,
            c,
            l = e.cloneNode(!0),
            d = ae(e);
          if (
            !(
              v.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              w.isXMLDoc(e)
            )
          )
            for (a = be(l), r = 0, i = (o = be(e)).length; r < i; r++)
              (s = o[r]),
                (u = a[r]),
                void 0,
                "input" === (c = u.nodeName.toLowerCase()) && ge.test(s.type)
                  ? (u.checked = s.checked)
                  : ("input" !== c && "textarea" !== c) ||
                    (u.defaultValue = s.defaultValue);
          if (t)
            if (n)
              for (
                o = o || be(e), a = a || be(l), r = 0, i = o.length;
                r < i;
                r++
              )
                Fe(o[r], a[r]);
            else Fe(e, l);
          return (
            (a = be(l, "script")).length > 0 && xe(a, !d && be(e, "script")), l
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = w.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (G(n)) {
              if ((t = n[J.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                n[J.expando] = void 0;
              }
              n[Q.expando] && (n[Q.expando] = void 0);
            }
        },
      }),
        w.fn.extend({
          detach: function (e) {
            return qe(this, e, !0);
          },
          remove: function (e) {
            return qe(this, e);
          },
          text: function (e) {
            return K(
              this,
              function (e) {
                return void 0 === e
                  ? w.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Re(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Oe(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Re(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Oe(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Re(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Re(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (w.cleanData(be(e, !1)), (e.textContent = ""));
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
                if (
                  "string" == typeof e &&
                  !Ee.test(e) &&
                  !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = w.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (w.cleanData(be(t, !1)), (t.innerHTML = e));
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
            return Re(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 &&
                  (w.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        w.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            w.fn[e] = function (e) {
              for (
                var n, r = [], i = w(e), o = i.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  w(i[a])[t](n),
                  c.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var He = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        Ye = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        We = function (e, t, n) {
          var r,
            i,
            o = {};
          for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
          for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
          return r;
        },
        Be = new RegExp(ie.join("|"), "i");
      function Ke(e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          (n = n || Ye(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) ||
              ae(e) ||
              (a = w.style(e, t)),
            !v.pixelBoxStyles() &&
              He.test(a) &&
              Be.test(t) &&
              ((r = s.width),
              (i = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = i),
              (s.maxWidth = o))),
          void 0 !== a ? a + "" : a
        );
      }
      function $e(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (l) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (l.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              oe.appendChild(c).appendChild(l);
            var e = n.getComputedStyle(l);
            (r = "1%" !== e.top),
              (u = 12 === t(e.marginLeft)),
              (l.style.right = "60%"),
              (a = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (l.style.position = "absolute"),
              (o = 12 === t(l.offsetWidth / 3)),
              oe.removeChild(c),
              (l = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          i,
          o,
          a,
          s,
          u,
          c = b.createElement("div"),
          l = b.createElement("div");
        l.style &&
          ((l.style.backgroundClip = "content-box"),
          (l.cloneNode(!0).style.backgroundClip = ""),
          (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
          w.extend(v, {
            boxSizingReliable: function () {
              return e(), i;
            },
            pixelBoxStyles: function () {
              return e(), a;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), u;
            },
            scrollboxSize: function () {
              return e(), o;
            },
            reliableTrDimensions: function () {
              var e, t, r, i;
              return (
                null == s &&
                  ((e = b.createElement("table")),
                  (t = b.createElement("tr")),
                  (r = b.createElement("div")),
                  (e.style.cssText = "position:absolute;left:-11111px"),
                  (t.style.height = "1px"),
                  (r.style.height = "9px"),
                  oe.appendChild(e).appendChild(t).appendChild(r),
                  (i = n.getComputedStyle(t)),
                  (s = parseInt(i.height) > 3),
                  oe.removeChild(e)),
                s
              );
            },
          }));
      })();
      var Ue = ["Webkit", "Moz", "ms"],
        ze = b.createElement("div").style,
        Ve = {};
      function Ge(e) {
        var t = w.cssProps[e] || Ve[e];
        return (
          t ||
          (e in ze
            ? e
            : (Ve[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
                    n--;

                  )
                    if ((e = Ue[n] + t) in ze) return e;
                })(e) || e))
        );
      }
      var Xe = /^(none|table(?!-c[ea]).+)/,
        Je = /^--/,
        Qe = { position: "absolute", visibility: "hidden", display: "block" },
        Ze = { letterSpacing: "0", fontWeight: "400" };
      function et(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function tt(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (u += w.css(e, n + ie[a], !0, i)),
            r
              ? ("content" === n && (u -= w.css(e, "padding" + ie[a], !0, i)),
                "margin" !== n &&
                  (u -= w.css(e, "border" + ie[a] + "Width", !0, i)))
              : ((u += w.css(e, "padding" + ie[a], !0, i)),
                "padding" !== n
                  ? (u += w.css(e, "border" + ie[a] + "Width", !0, i))
                  : (s += w.css(e, "border" + ie[a] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (u +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    u -
                    s -
                    0.5
                )
              ) || 0),
          u
        );
      }
      function nt(e, t, n) {
        var r = Ye(e),
          i =
            (!v.boxSizingReliable() || n) &&
            "border-box" === w.css(e, "boxSizing", !1, r),
          o = i,
          a = Ke(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (He.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!v.boxSizingReliable() && i) ||
            (!v.reliableTrDimensions() && A(e, "tr")) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === w.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === w.css(e, "boxSizing", !1, r)),
            (o = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) +
            tt(e, t, n || (i ? "border" : "content"), o, r, a) +
            "px"
        );
      }
      function rt(e, t, n, r, i) {
        return new rt.prototype.init(e, t, n, r, i);
      }
      w.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ke(e, "opacity");
                return "" === n ? "1" : n;
              }
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
              u = Je.test(t),
              c = e.style;
            if (
              (u || (t = Ge(s)),
              (a = w.cssHooks[t] || w.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                ? i
                : c[t];
            "string" === (o = typeof n) &&
              (i = re.exec(n)) &&
              i[1] &&
              ((n = ce(e, t, i)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  u ||
                  (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
                v.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (u ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            a,
            s = V(t);
          return (
            Je.test(t) || (t = Ge(s)),
            (a = w.cssHooks[t] || w.cssHooks[s]) &&
              "get" in a &&
              (i = a.get(e, !0, n)),
            void 0 === i && (i = Ke(e, t, r)),
            "normal" === i && t in Ze && (i = Ze[t]),
            "" === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        w.each(["height", "width"], function (e, t) {
          w.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Xe.test(w.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? nt(e, t, r)
                  : We(e, Qe, function () {
                      return nt(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var i,
                o = Ye(e),
                a = !v.scrollboxSize() && "absolute" === o.position,
                s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
                u = r ? tt(e, t, r, s, o) : 0;
              return (
                s &&
                  a &&
                  (u -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      tt(e, t, "border", !1, o) -
                      0.5
                  )),
                u &&
                  (i = re.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((e.style[t] = n), (n = w.css(e, t))),
                et(0, n, u)
              );
            },
          };
        }),
        (w.cssHooks.marginLeft = $e(v.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ke(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  We(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (w.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  i = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            "margin" !== e && (w.cssHooks[e + t].set = et);
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
                  for (r = Ye(e), i = t.length; a < i; a++)
                    o[t[a]] = w.css(e, t[a], !1, r);
                  return o;
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (w.Tween = rt),
        (rt.prototype = {
          constructor: rt,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || w.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (w.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = rt.propHooks[this.prop];
            return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = rt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    w.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : rt.propHooks._default.set(this),
              this
            );
          },
        }),
        (rt.prototype.init.prototype = rt.prototype),
        (rt.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              w.fx.step[e.prop]
                ? w.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!w.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : w.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (rt.propHooks.scrollTop = rt.propHooks.scrollLeft =
          {
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
        (w.fx = rt.prototype.init),
        (w.fx.step = {});
      var it,
        ot,
        at = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
      function ut() {
        ot &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ut)
            : n.setTimeout(ut, w.fx.interval),
          w.fx.tick());
      }
      function ct() {
        return (
          n.setTimeout(function () {
            it = void 0;
          }),
          (it = Date.now())
        );
      }
      function lt(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = ie[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function dt(e, t, n) {
        for (
          var r,
            i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
            o = 0,
            a = i.length;
          o < a;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function pt(e, t, n) {
        var r,
          i,
          o = 0,
          a = pt.prefilters.length,
          s = w.Deferred().always(function () {
            delete u.elem;
          }),
          u = function () {
            if (i) return !1;
            for (
              var t = it || ct(),
                n = Math.max(0, c.startTime + c.duration - t),
                r = 1 - (n / c.duration || 0),
                o = 0,
                a = c.tweens.length;
              o < a;
              o++
            )
              c.tweens[o].run(r);
            return (
              s.notifyWith(e, [c, r, n]),
              r < 1 && a
                ? n
                : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            );
          },
          c = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(
              !0,
              { specialEasing: {}, easing: w.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: it || ct(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = w.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? c.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) c.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                  : s.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          l = c.props;
        for (
          !(function (e, t) {
            var n, r, i, o, a;
            for (n in e)
              if (
                ((i = t[(r = V(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (a = w.cssHooks[r]) && ("expand" in a))
              )
                for (n in ((o = a.expand(o)), delete e[r], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(l, c.opts.specialEasing);
          o < a;
          o++
        )
          if ((r = pt.prefilters[o].call(c, e, l, c.opts)))
            return (
              m(r.stop) &&
                (w._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          w.map(l, dt, c),
          m(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          w.fx.timer(w.extend(u, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (w.Animation = w.extend(pt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ce(n.elem, e, re.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          m(e) ? ((t = e), (e = ["*"])) : (e = e.match(F));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]),
              (pt.tweeners[n] = pt.tweeners[n] || []),
              pt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              d = "width" in t || "height" in t,
              p = this,
              f = {},
              h = e.style,
              g = e.nodeType && ue(e),
              v = J.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (a = w._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || s();
                })),
              a.unqueued++,
              p.always(function () {
                p.always(function () {
                  a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), at.test(i))) {
                if (
                  (delete t[r],
                  (o = o || "toggle" === i),
                  i === (g ? "hide" : "show"))
                ) {
                  if ("show" !== i || !v || void 0 === v[r]) continue;
                  g = !0;
                }
                f[r] = (v && v[r]) || w.style(e, r);
              }
            if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(f))
              for (r in (d &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (c = v && v.display) && (c = J.get(e, "display")),
                "none" === (l = w.css(e, "display")) &&
                  (c
                    ? (l = c)
                    : (pe([e], !0),
                      (c = e.style.display || c),
                      (l = w.css(e, "display")),
                      pe([e]))),
                ("inline" === l || ("inline-block" === l && null != c)) &&
                  "none" === w.css(e, "float") &&
                  (u ||
                    (p.done(function () {
                      h.display = c;
                    }),
                    null == c &&
                      ((l = h.display), (c = "none" === l ? "" : l))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                p.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (u = !1),
              f))
                u ||
                  (v
                    ? "hidden" in v && (g = v.hidden)
                    : (v = J.access(e, "fxshow", { display: c })),
                  o && (v.hidden = !g),
                  g && pe([e], !0),
                  p.done(function () {
                    for (r in (g || pe([e]), J.remove(e, "fxshow"), f))
                      w.style(e, r, f[r]);
                  })),
                  (u = dt(g ? v[r] : 0, r, p)),
                  r in v ||
                    ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
      })),
        (w.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? w.extend({}, e)
              : {
                  complete: n || (!n && t) || (m(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !m(t) && t),
                };
          return (
            w.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in w.fx.speeds
                  ? (r.duration = w.fx.speeds[r.duration])
                  : (r.duration = w.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              m(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
            }),
            r
          );
        }),
        w.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(ue)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = w.isEmptyObject(e),
              o = w.speed(t, n, r),
              a = function () {
                var t = pt(this, w.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  i = null != e && e + "queueHooks",
                  o = w.timers,
                  a = J.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && st.test(i) && r(a[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
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
                for (
                  n.finish = !0,
                    w.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
          var n = w.fn[t];
          w.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(lt(t, !0), e, r, i);
          };
        }),
        w.each(
          {
            slideDown: lt("show"),
            slideUp: lt("hide"),
            slideToggle: lt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            w.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (w.timers = []),
        (w.fx.tick = function () {
          var e,
            t = 0,
            n = w.timers;
          for (it = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || w.fx.stop(), (it = void 0);
        }),
        (w.fx.timer = function (e) {
          w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
          ot || ((ot = !0), ut());
        }),
        (w.fx.stop = function () {
          ot = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (e, t) {
          return (
            (e = (w.fx && w.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, r) {
              var i = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var e = b.createElement("input"),
            t = b
              .createElement("select")
              .appendChild(b.createElement("option"));
          (e.type = "checkbox"),
            (v.checkOn = "" !== e.value),
            (v.optSelected = t.selected),
            ((e = b.createElement("input")).value = "t"),
            (e.type = "radio"),
            (v.radioValue = "t" === e.value);
        })();
      var ft,
        ht = w.expr.attrHandle;
      w.fn.extend({
        attr: function (e, t) {
          return K(this, w.attr, e, t, arguments.length > 1);
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
                : ((1 === o && w.isXMLDoc(e)) ||
                    (i =
                      w.attrHooks[t.toLowerCase()] ||
                      (w.expr.match.bool.test(t) ? ft : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void w.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = w.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!v.radioValue && "radio" === t && A(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(F);
            if (i && 1 === e.nodeType)
              for (; (n = i[r++]); ) e.removeAttribute(n);
          },
        }),
        (ft = {
          set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = ht[t] || w.find.attr;
          ht[t] = function (e, t, r) {
            var i,
              o,
              a = t.toLowerCase();
            return (
              r ||
                ((o = ht[a]),
                (ht[a] = i),
                (i = null != n(e, t, r) ? a : null),
                (ht[a] = o)),
              i
            );
          };
        });
      var gt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;
      function mt(e) {
        return (e.match(F) || []).join(" ");
      }
      function yt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function bt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(F)) || [];
      }
      w.fn.extend({
        prop: function (e, t) {
          return K(this, w.prop, e, t, arguments.length > 1);
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
                (1 === o && w.isXMLDoc(e)) ||
                  ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = w.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : gt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        v.optSelected ||
          (w.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        w.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            w.propFix[this.toLowerCase()] = this;
          }
        ),
        w.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (m(e))
              return this.each(function (t) {
                w(this).addClass(e.call(this, t, yt(this)));
              });
            if ((t = bt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((i = yt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))
                ) {
                  for (a = 0; (o = t[a++]); )
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  i !== (s = mt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;
            if (m(e))
              return this.each(function (t) {
                w(this).removeClass(e.call(this, t, yt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = bt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((i = yt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))
                ) {
                  for (a = 0; (o = t[a++]); )
                    for (; r.indexOf(" " + o + " ") > -1; )
                      r = r.replace(" " + o + " ", " ");
                  i !== (s = mt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : m(e)
              ? this.each(function (n) {
                  w(this).toggleClass(e.call(this, n, yt(this), t), t);
                })
              : this.each(function () {
                  var t, i, o, a;
                  if (r)
                    for (i = 0, o = w(this), a = bt(e); (t = a[i++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = yt(this)) && J.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : J.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + mt(yt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var xt = /\r/g;
      w.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            i = this[0];
          return arguments.length
            ? ((r = m(e)),
              this.each(function (n) {
                var i;
                1 === this.nodeType &&
                  (null == (i = r ? e.call(this, n, w(this).val()) : e)
                    ? (i = "")
                    : "number" == typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = w.map(i, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    w.valHooks[this.type] ||
                    w.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, i, "value")) ||
                    (this.value = i));
              }))
            : i
            ? (t =
                w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(i, "value"))
              ? n
              : "string" == typeof (n = i.value)
              ? n.replace(xt, "")
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
                return null != t ? t : mt(w.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  u = a ? o + 1 : i.length;
                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                  ) {
                    if (((t = w(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (
                  var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                  a--;

                )
                  ((r = i[a]).selected =
                    w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        w.each(["radio", "checkbox"], function () {
          (w.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = w.inArray(w(e).val(), t) > -1);
            },
          }),
            v.checkOn ||
              (w.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (v.focusin = "onfocusin" in n);
      var kt = /^(?:focusinfocus|focusoutblur)$/,
        _t = function (e) {
          e.stopPropagation();
        };
      w.extend(w.event, {
        trigger: function (e, t, r, i) {
          var o,
            a,
            s,
            u,
            c,
            l,
            d,
            p,
            h = [r || b],
            g = f.call(e, "type") ? e.type : e,
            v = f.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = p = s = r = r || b),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !kt.test(g + w.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((g = (v = g.split(".")).shift()), v.sort()),
              (c = g.indexOf(":") < 0 && "on" + g),
              ((e = e[w.expando]
                ? e
                : new w.Event(g, "object" == typeof e && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = v.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : w.makeArray(t, [e])),
              (d = w.event.special[g] || {}),
              i || !d.trigger || !1 !== d.trigger.apply(r, t)))
          ) {
            if (!i && !d.noBubble && !y(r)) {
              for (
                u = d.delegateType || g, kt.test(u + g) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                h.push(a), (s = a);
              s === (r.ownerDocument || b) &&
                h.push(s.defaultView || s.parentWindow || n);
            }
            for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
              (p = a),
                (e.type = o > 1 ? u : d.bindType || g),
                (l =
                  (J.get(a, "events") || Object.create(null))[e.type] &&
                  J.get(a, "handle")) && l.apply(a, t),
                (l = c && a[c]) &&
                  l.apply &&
                  G(a) &&
                  ((e.result = l.apply(a, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              i ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                !G(r) ||
                (c &&
                  m(r[g]) &&
                  !y(r) &&
                  ((s = r[c]) && (r[c] = null),
                  (w.event.triggered = g),
                  e.isPropagationStopped() && p.addEventListener(g, _t),
                  r[g](),
                  e.isPropagationStopped() && p.removeEventListener(g, _t),
                  (w.event.triggered = void 0),
                  s && (r[c] = s))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
          w.event.trigger(r, null, t);
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
        v.focusin ||
          w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              w.event.simulate(t, e.target, w.event.fix(e));
            };
            w.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  i = J.access(r, t) - 1;
                i
                  ? J.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), J.remove(r, t));
              },
            };
          });
      var wt = n.location,
        Dt = { guid: Date.now() },
        Ct = /\?/;
      w.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            w.error("Invalid XML: " + e),
          t
        );
      };
      var Tt = /\[\]$/,
        St = /\r?\n/g,
        Mt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
      function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          w.each(t, function (t, i) {
            n || Tt.test(e)
              ? r(e, i)
              : jt(
                  e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                  i,
                  n,
                  r
                );
          });
        else if (n || "object" !== _(t)) r(e, t);
        else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
      }
      (w.param = function (e, t) {
        var n,
          r = [],
          i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
          w.each(e, function () {
            i(this.name, this.value);
          });
        else for (n in e) jt(n, e[n], t, i);
        return r.join("&");
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
                return (
                  this.name &&
                  !w(this).is(":disabled") &&
                  At.test(this.nodeName) &&
                  !Mt.test(e) &&
                  (this.checked || !ge.test(e))
                );
              })
              .map(function (e, t) {
                var n = w(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? w.map(n, function (e) {
                      return { name: t.name, value: e.replace(St, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(St, "\r\n") };
              })
              .get();
          },
        });
      var Et = /%20/g,
        Nt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Ft = {},
        Rt = {},
        qt = "*/".concat("*"),
        Ht = b.createElement("a");
      function Yt(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            i = 0,
            o = t.toLowerCase().match(F) || [];
          if (m(n))
            for (; (r = o[i++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function Wt(e, t, n, r) {
        var i = {},
          o = e === Rt;
        function a(s) {
          var u;
          return (
            (i[s] = !0),
            w.each(e[s] || [], function (e, s) {
              var c = s(t, n, r);
              return "string" != typeof c || o || i[c]
                ? o
                  ? !(u = c)
                  : void 0
                : (t.dataTypes.unshift(c), a(c), !1);
            }),
            u
          );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
      }
      function Bt(e, t) {
        var n,
          r,
          i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e;
      }
      (Ht.href = wt.href),
        w.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                wt.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": qt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": w.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Bt(Bt(e, w.ajaxSettings), t) : Bt(w.ajaxSettings, e);
          },
          ajaxPrefilter: Yt(Ft),
          ajaxTransport: Yt(Rt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              d,
              p,
              f = w.ajaxSetup({}, t),
              h = f.context || f,
              g = f.context && (h.nodeType || h.jquery) ? w(h) : w.event,
              v = w.Deferred(),
              m = w.Callbacks("once memory"),
              y = f.statusCode || {},
              x = {},
              k = {},
              _ = "canceled",
              D = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (c) {
                    if (!a)
                      for (a = {}; (t = Ot.exec(o)); )
                        a[t[1].toLowerCase() + " "] = (
                          a[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = a[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return c ? o : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == c &&
                      ((e = k[e.toLowerCase()] = k[e.toLowerCase()] || e),
                      (x[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == c && (f.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (c) D.always(e[D.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || _;
                  return r && r.abort(t), C(0, t), this;
                },
              };
            if (
              (v.promise(D),
              (f.url = ((e || f.url || wt.href) + "").replace(
                Pt,
                wt.protocol + "//"
              )),
              (f.type = t.method || t.type || f.method || f.type),
              (f.dataTypes = (f.dataType || "*").toLowerCase().match(F) || [
                "",
              ]),
              null == f.crossDomain)
            ) {
              u = b.createElement("a");
              try {
                (u.href = f.url),
                  (u.href = u.href),
                  (f.crossDomain =
                    Ht.protocol + "//" + Ht.host != u.protocol + "//" + u.host);
              } catch (e) {
                f.crossDomain = !0;
              }
            }
            if (
              (f.data &&
                f.processData &&
                "string" != typeof f.data &&
                (f.data = w.param(f.data, f.traditional)),
              Wt(Ft, f, t, D),
              c)
            )
              return D;
            for (d in ((l = w.event && f.global) &&
              0 == w.active++ &&
              w.event.trigger("ajaxStart"),
            (f.type = f.type.toUpperCase()),
            (f.hasContent = !Lt.test(f.type)),
            (i = f.url.replace(Nt, "")),
            f.hasContent
              ? f.data &&
                f.processData &&
                0 ===
                  (f.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (f.data = f.data.replace(Et, "+"))
              : ((p = f.url.slice(i.length)),
                f.data &&
                  (f.processData || "string" == typeof f.data) &&
                  ((i += (Ct.test(i) ? "&" : "?") + f.data), delete f.data),
                !1 === f.cache &&
                  ((i = i.replace(It, "$1")),
                  (p = (Ct.test(i) ? "&" : "?") + "_=" + Dt.guid++ + p)),
                (f.url = i + p)),
            f.ifModified &&
              (w.lastModified[i] &&
                D.setRequestHeader("If-Modified-Since", w.lastModified[i]),
              w.etag[i] && D.setRequestHeader("If-None-Match", w.etag[i])),
            ((f.data && f.hasContent && !1 !== f.contentType) ||
              t.contentType) &&
              D.setRequestHeader("Content-Type", f.contentType),
            D.setRequestHeader(
              "Accept",
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ("*" !== f.dataTypes[0] ? ", " + qt + "; q=0.01" : "")
                : f.accepts["*"]
            ),
            f.headers))
              D.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(h, D, f) || c))
              return D.abort();
            if (
              ((_ = "abort"),
              m.add(f.complete),
              D.done(f.success),
              D.fail(f.error),
              (r = Wt(Rt, f, t, D)))
            ) {
              if (((D.readyState = 1), l && g.trigger("ajaxSend", [D, f]), c))
                return D;
              f.async &&
                f.timeout > 0 &&
                (s = n.setTimeout(function () {
                  D.abort("timeout");
                }, f.timeout));
              try {
                (c = !1), r.send(x, C);
              } catch (e) {
                if (c) throw e;
                C(-1, e);
              }
            } else C(-1, "No Transport");
            function C(e, t, a, u) {
              var d,
                p,
                b,
                x,
                k,
                _ = t;
              c ||
                ((c = !0),
                s && n.clearTimeout(s),
                (r = void 0),
                (o = u || ""),
                (D.readyState = e > 0 ? 4 : 0),
                (d = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (x = (function (e, t, n) {
                    for (
                      var r, i, o, a, s = e.contents, u = e.dataTypes;
                      "*" === u[0];

                    )
                      u.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (i in s)
                        if (s[i] && s[i].test(r)) {
                          u.unshift(i);
                          break;
                        }
                    if (u[0] in n) o = u[0];
                    else {
                      for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                          o = i;
                          break;
                        }
                        a || (a = i);
                      }
                      o = o || a;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                  })(f, D, a)),
                !d &&
                  w.inArray("script", f.dataTypes) > -1 &&
                  (f.converters["text script"] = function () {}),
                (x = (function (e, t, n, r) {
                  var i,
                    o,
                    a,
                    s,
                    u,
                    c = {},
                    l = e.dataTypes.slice();
                  if (l[1])
                    for (a in e.converters)
                      c[a.toLowerCase()] = e.converters[a];
                  for (o = l.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !u &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (u = o),
                      (o = l.shift()))
                    )
                      if ("*" === o) o = u;
                      else if ("*" !== u && u !== o) {
                        if (!(a = c[u + " " + o] || c["* " + o]))
                          for (i in c)
                            if (
                              (s = i.split(" "))[1] === o &&
                              (a = c[u + " " + s[0]] || c["* " + s[0]])
                            ) {
                              !0 === a
                                ? (a = c[i])
                                : !0 !== c[i] && ((o = s[0]), l.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? e
                                  : "No conversion from " + u + " to " + o,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(f, x, D, d)),
                d
                  ? (f.ifModified &&
                      ((k = D.getResponseHeader("Last-Modified")) &&
                        (w.lastModified[i] = k),
                      (k = D.getResponseHeader("etag")) && (w.etag[i] = k)),
                    204 === e || "HEAD" === f.type
                      ? (_ = "nocontent")
                      : 304 === e
                      ? (_ = "notmodified")
                      : ((_ = x.state), (p = x.data), (d = !(b = x.error))))
                  : ((b = _), (!e && _) || ((_ = "error"), e < 0 && (e = 0))),
                (D.status = e),
                (D.statusText = (t || _) + ""),
                d ? v.resolveWith(h, [p, _, D]) : v.rejectWith(h, [D, _, b]),
                D.statusCode(y),
                (y = void 0),
                l &&
                  g.trigger(d ? "ajaxSuccess" : "ajaxError", [D, f, d ? p : b]),
                m.fireWith(h, [D, _]),
                l &&
                  (g.trigger("ajaxComplete", [D, f]),
                  --w.active || w.event.trigger("ajaxStop")));
            }
            return D;
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
            return (
              m(n) && ((i = i || r), (r = n), (n = void 0)),
              w.ajax(
                w.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  w.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        w.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
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
            var t;
            return (
              this[0] &&
                (m(e) && (e = e.call(this[0])),
                (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return m(e)
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
            var t = m(e);
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
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (w.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Kt = { 0: 200, 1223: 204 },
        $t = w.ajaxSettings.xhr();
      (v.cors = !!$t && "withCredentials" in $t),
        (v.ajax = $t = !!$t),
        w.ajaxTransport(function (e) {
          var t, r;
          if (v.cors || ($t && !e.crossDomain))
            return {
              send: function (i, o) {
                var a,
                  s = e.xhr();
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest"),
                i))
                  s.setRequestHeader(a, i[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        r =
                        s.onload =
                        s.onerror =
                        s.onabort =
                        s.ontimeout =
                        s.onreadystatechange =
                          null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? "number" != typeof s.status
                          ? o(0, "error")
                          : o(s.status, s.statusText)
                        : o(
                            Kt[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
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
                } catch (e) {
                  if (t) throw e;
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
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return w.globalEval(e), e;
            },
          },
        }),
        w.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
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
                      t.remove(),
                        (n = null),
                        e && i("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Ut,
        zt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
      w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = zt.pop() || w.expando + "_" + Dt.guid++;
          return (this[e] = !0), e;
        },
      }),
        w.ajaxPrefilter("json jsonp", function (e, t, r) {
          var i,
            o,
            a,
            s =
              !1 !== e.jsonp &&
              (Vt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Vt.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (i = e.jsonpCallback =
                m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(Vt, "$1" + i))
                : !1 !== e.jsonp &&
                  (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return a || w.error(i + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[i]),
              (n[i] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === o ? w(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), zt.push(i)),
                  a && m(o) && o(a[0]),
                  (a = o = void 0);
              }),
              "script"
            );
        }),
        (v.createHTMLDocument =
          (((Ut = b.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Ut.childNodes.length)),
        (w.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((r = (t =
                      b.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = b.location.href),
                    t.head.appendChild(r))
                  : (t = b)),
              (i = j.exec(e)),
              (o = !n && []),
              i
                ? [t.createElement(i[1])]
                : ((i = _e([e], t, o)),
                  o && o.length && w(o).remove(),
                  w.merge([], i.childNodes)));
          var r, i, o;
        }),
        (w.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
            m(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (i = "POST"),
            a.length > 0 &&
              w
                .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
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
              o,
              a,
              s,
              u,
              c = w.css(e, "position"),
              l = w(e),
              d = {};
            "static" === c && (e.style.position = "relative"),
              (s = l.offset()),
              (o = w.css(e, "top")),
              (u = w.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              (o + u).indexOf("auto") > -1
                ? ((a = (r = l.position()).top), (i = r.left))
                : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
              m(t) && (t = t.call(e, n, w.extend({}, s))),
              null != t.top && (d.top = t.top - s.top + a),
              null != t.left && (d.left = t.left - s.left + i),
              "using" in t
                ? t.using.call(e, d)
                : ("number" == typeof d.top && (d.top += "px"),
                  "number" == typeof d.left && (d.left += "px"),
                  l.css(d));
          },
        }),
        w.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    w.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
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
              if ("fixed" === w.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === w.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
                  (i.left += w.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - w.css(r, "marginTop", !0),
                left: t.left - i.left - w.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === w.css(e, "position");

              )
                e = e.offsetParent;
              return e || oe;
            });
          },
        }),
        w.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] = function (r) {
              return K(
                this,
                function (e, r, i) {
                  var o;
                  if (
                    (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === i)
                  )
                    return o ? o[t] : e[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        w.each(["top", "left"], function (e, t) {
          w.cssHooks[t] = $e(v.pixelPosition, function (e, n) {
            if (n)
              return (n = Ke(e, t)), He.test(n) ? w(e).position()[t] + "px" : n;
          });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
          w.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                  s = n || (!0 === i || !0 === o ? "margin" : "border");
                return K(
                  this,
                  function (t, n, i) {
                    var o;
                    return y(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          o["scroll" + e],
                          t.body["offset" + e],
                          o["offset" + e],
                          o["client" + e]
                        ))
                      : void 0 === i
                      ? w.css(t, n, s)
                      : w.style(t, n, i, s);
                  },
                  t,
                  a ? i : void 0,
                  a
                );
              };
            }
          );
        }),
        w.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            w.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
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
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        w.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            w.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (w.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
          return (
            (r = s.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, r.concat(s.call(arguments)));
            }).guid = e.guid =
              e.guid || w.guid++),
            i
          );
      }),
        (w.holdReady = function (e) {
          e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = A),
        (w.isFunction = m),
        (w.isWindow = y),
        (w.camelCase = V),
        (w.type = _),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
          var t = w.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (w.trim = function (e) {
          return null == e ? "" : (e + "").replace(Gt, "");
        }),
        void 0 ===
          (r = function () {
            return w;
          }.apply(t, [])) || (e.exports = r);
      var Xt = n.jQuery,
        Jt = n.$;
      return (
        (w.noConflict = function (e) {
          return (
            n.$ === w && (n.$ = Jt), e && n.jQuery === w && (n.jQuery = Xt), w
          );
        }),
        void 0 === i && (n.jQuery = n.$ = w),
        w
      );
    });
  },
});
