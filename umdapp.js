!(function (e, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], n)
    : "object" == typeof exports
    ? (exports["isv-home"] = n(require("react")))
    : (e["isv-home"] = n(e.react));
})(window, function (e) {
  return (function (e) {
      var n = {};
      function t(r) {
            if (n[r]) return n[r].exports;
            var o = (n[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
          }
      return (
            (t.m = e),
            (t.c = n),
            (t.d = function (e, n, r) {
                    t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
                  }),
            (t.r = function (e) {
                    "undefined" != typeof Symbol &&
                      Symbol.toStringTag &&
                      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                      Object.defineProperty(e, "__esModule", { value: !0 });
                  }),
            (t.t = function (e, n) {
                    if ((1 & n && (e = t(e)), 8 & n)) return e;
                    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (
                              (t.r(r),
                                        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
                                        2 & n && "string" != typeof e)
                            )
                      for (var o in e)
                        t.d(
                                      r,
                                      o,
                                      function (n) {
                                                      return e[n];
                                                    }.bind(null, o)
                                    );
                    return r;
                  }),
            (t.n = function (e) {
                    var n =
                      e && e.__esModule
                        ? function () {
                                        return e.default;
                                      }
                        : function () {
                                        return e;
                                      };
                    return t.d(n, "a", n), n;
                  }),
            (t.o = function (e, n) {
                    return Object.prototype.hasOwnProperty.call(e, n);
                  }),
            (t.p = "https://localhost:8080/assets/"),
            t((t.s = 192))
          );
    })({
        0: function (n, t) {
              n.exports = e;
            },
        192: function (e, n, t) {
              "use strict";
              t.r(n);
              var r = t(0),
                o = t.n(r);
              t(193);
              n.default = (e) =>
                o.a.createElement(
                          "div",
                          { className: "idp-home-id-management" },
                          "App loaded from apploader!"
                        );
            },
        193: function (e, n, t) {
              var r = t(4),
                o = t(194);
              "string" == typeof (o = o.__esModule ? o.default : o) &&
                (o = [[e.i, o, ""]]);
              var i = { insert: "head", singleton: !1 };
              r(o, i);
              e.exports = o.locals || {};
            },
        194: function (e, n, t) {
              (n = t(5)(!1)).push([
                      e.i,
                      ".idp-home-id-management {\n  transition: box-shadow 0.5s ease;\n  flex-direction: column;\n  border: 1px solid #d3dae6;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.idp-home-id-management:hover {\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n}\n.idp-home-id-management .header {\n  width: 100%;\n  height: 39px;\n  background: #f0f2f5;\n  border-radius: 12px 12px 0 0;\n  text-align: left;\n  line-height: 39px;\n  padding: 0 16px 0 16px;\n}\n.idp-home-id-management .body {\n  width: 100%;\n  padding: 0 16px;\n  margin-top: 16px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  align-items: center;\n}\n.idp-home-id-management .body .left {\n  display: flex;\n  align-items: center;\n}\n.idp-home-id-management .body .left .avatar {\n  height: 48px;\n  width: 48px;\n  background: #e8f5ff;\n  border-radius: 4.92px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 16px;\n  font-size: 22px;\n  color: #3888ff;\n}\n.idp-home-id-management .body .left .content .row {\n  display: flex;\n  align-items: center;\n}\n.idp-home-id-management .body .left .content .row .label {\n  display: inline-block;\n  font-weight: 500;\n  font-size: 14px;\n  color: #353a42;\n  width: 75px;\n  margin-right: 18px;\n}\n",
                      ""
                    ]),
                (e.exports = n);
            },
        4: function (e, n, t) {
              "use strict";
              var r,
                o = function () {
                          return (
                                      void 0 === r &&
                                        (r = Boolean(window && document && document.all && !window.atob)),
                                      r
                                    );
                        },
                i = (function () {
                          var e = {};
                          return function (n) {
                                      if (void 0 === e[n]) {
                                                    var t = document.querySelector(n);
                                                    if (
                                                                    window.HTMLIFrameElement &&
                                                                    t instanceof window.HTMLIFrameElement
                                                                  )
                                                      try {
                                                                        t = t.contentDocument.head;
                                                                      } catch (e) {
                                                                                        t = null;
                                                                                      }
                                                    e[n] = t;
                                                  }
                                      return e[n];
                                    };
                        })(),
                a = [];
              function c(e) {
                      for (var n = -1, t = 0; t < a.length; t++)
                        if (a[t].identifier === e) {
                                    n = t;
                                    break;
                                  }
                      return n;
                    }
              function s(e, n) {
                      for (var t = {}, r = [], o = 0; o < e.length; o++) {
                                var i = e[o],
                                  s = n.base ? i[0] + n.base : i[0],
                                  u = t[s] || 0,
                                  d = "".concat(s, " ").concat(u);
                                t[s] = u + 1;
                                var f = c(d),
                                  l = { css: i[1], media: i[2], sourceMap: i[3] };
                                -1 !== f
                                  ? (a[f].references++, a[f].updater(l))
                                  : a.push({ identifier: d, updater: b(l, n), references: 1 }),
                                  r.push(d);
                              }
                      return r;
                    }
              function u(e) {
                      var n = document.createElement("style"),
                        r = e.attributes || {};
                      if (void 0 === r.nonce) {
                                var o = t.nc;
                                o && (r.nonce = o);
                              }
                      if (
                                (Object.keys(r).forEach(function (e) {
                                            n.setAttribute(e, r[e]);
                                          }),
                                          "function" == typeof e.insert)
                              )
                        e.insert(n);
                      else {
                                var a = i(e.insert || "head");
                                if (!a)
                                  throw new Error(
                                                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                                              );
                                a.appendChild(n);
                              }
                      return n;
                    }
              var d,
                f =
                  ((d = []),
                            function (e, n) {
                                        return (d[e] = n), d.filter(Boolean).join("\n");
                                      });
              function l(e, n, t, r) {
                      var o = t
                        ? ""
                        : r.media
                        ? "@media ".concat(r.media, " {").concat(r.css, "}")
                          : r.css;
                        if (e.styleSheet) e.styleSheet.cssText = f(n, o);
                        else {
                                  var i = document.createTextNode(o),
                                    a = e.childNodes;
                                  a[n] && e.removeChild(a[n]),
                                    a.length ? e.insertBefore(i, a[n]) : e.appendChild(i);
                                }
                      }
                function p(e, n, t) {
                        var r = t.css,
                          o = t.media,
                          i = t.sourceMap;
                        if (
                                  (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
                                            i &&
                                              "undefined" != typeof btoa &&
                                              (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                                                            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                                                            " */"
                                                          )),
                                            e.styleSheet)
                                )
                          e.styleSheet.cssText = r;
                        else {
                                  for (; e.firstChild; ) e.removeChild(e.firstChild);
                                  e.appendChild(document.createTextNode(r));
                                }
                      }
                var m = null,
                    h = 0;
                function b(e, n) {
                        var t, r, o;
                        if (n.singleton) {
                                  var i = h++;
                                  (t = m || (m = u(n))),
                                    (r = l.bind(null, t, i, !1)),
                                    (o = l.bind(null, t, i, !0));
                                } else
                          (t = u(n)),
                            (r = p.bind(null, t, n)),
                            (o = function () {
                                          !(function (e) {
                                                          if (null === e.parentNode) return !1;
                                                          e.parentNode.removeChild(e);
                                                        })(t);
                                        });
                        return (
                                  r(e),
                                  function (n) {
                                              if (n) {
                                                            if (
                                                                            n.css === e.css &&
                                                                            n.media === e.media &&
                                                                            n.sourceMap === e.sourceMap
                                                                          )
                                                              return;
                                                            r((e = n));
                                                          } else o();
                                            }
                                );
                      }
                e.exports = function (e, n) {
                        (n = n || {}).singleton ||
                          "boolean" == typeof n.singleton ||
                          (n.singleton = o());
                        var t = s((e = e || []), n);
                        return function (e) {
                                  if (
                                              ((e = e || []),
                                                          "[object Array]" === Object.prototype.toString.call(e))
                                            ) {
                                              for (var r = 0; r < t.length; r++) {
                                                            var o = c(t[r]);
                                                            a[o].references--;
                                                          }
                                              for (var i = s(e, n), u = 0; u < t.length; u++) {
                                                            var d = c(t[u]);
                                                            0 === a[d].references && (a[d].updater(), a.splice(d, 1));
                                                          }
                                              t = i;
                                            }
                                };
                      };
              },
          5: function (e, n, t) {
                "use strict";
                e.exports = function (e) {
                        var n = [];
                        return (
                                  (n.toString = function () {
                                              return this.map(function (n) {
                                                            var t = (function (e, n) {
                                                                            var t = e[1] || "",
                                                                              r = e[3];
                                                                            if (!r) return t;
                                                                            if (n && "function" == typeof btoa) {
                                                                                              var o =
                                                                                                  ((a = r),
                                                                                                                        (c = btoa(
                                                                                                                                                unescape(encodeURIComponent(JSON.stringify(a)))
                                                                                                                                              )),
                                                                                                                        (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                                                                                                                                                c
                                                                                                                                              )),
                                                                                                                        "/*# ".concat(s, " */")),
                                                                                                i = r.sources.map(function (e) {
                                                                                                                      return "/*# sourceURL="
                                                                                                                        .concat(r.sourceRoot || "")
                                                                                                                        .concat(e, " */");
                                                                                                                    });
                                                                                              return [t].concat(i).concat([o]).join("\n");
                                                                                            }
                                                                            var a, c, s;
                                                                            return [t].join("\n");
                                                                          })(n, e);
                                                            return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
                                                            }).join("");
                                              }),
                                    (n.i = function (e, t, r) {
                                                "string" == typeof e && (e = [[null, e, ""]]);
                                                var o = {};
                                                if (r)
                                                  for (var i = 0; i < this.length; i++) {
                                                                  var a = this[i][0];
                                                                  null != a && (o[a] = !0);
                                                                }
                                                for (var c = 0; c < e.length; c++) {
                                                              var s = [].concat(e[c]);
                                                              (r && o[s[0]]) ||
                                                                (t &&
                                                                                  (s[2]
                                                                                                      ? (s[2] = "".concat(t, " and ").concat(s[2]))
                                                                                                      : (s[2] = t)),
                                                                                n.push(s));
                                                            }
                                              }),
                                    n
                                  );
                        };
                }
        });
});
//# sourceMappingURL=idManagementWidget.js.map
//"}")})}))}}"}")}}})})
