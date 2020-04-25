var Client = (function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 2))
  );
})([
  function(e, t, r) {
    "use strict";
    var n,
      o = function() {
        return (
          void 0 === n &&
            (n = Boolean(window && document && document.all && !window.atob)),
          n
        );
      },
      i = (function() {
        var e = {};
        return function(t) {
          if (void 0 === e[t]) {
            var r = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            )
              try {
                r = r.contentDocument.head;
              } catch (e) {
                r = null;
              }
            e[t] = r;
          }
          return e[t];
        };
      })(),
      a = [];
    function s(e) {
      for (var t = -1, r = 0; r < a.length; r++)
        if (a[r].identifier === e) {
          t = r;
          break;
        }
      return t;
    }
    function c(e, t) {
      for (var r = {}, n = [], o = 0; o < e.length; o++) {
        var i = e[o],
          c = t.base ? i[0] + t.base : i[0],
          l = r[c] || 0,
          d = "".concat(c, " ").concat(l);
        r[c] = l + 1;
        var u = s(d),
          p = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== u
          ? (a[u].references++, a[u].updater(p))
          : a.push({ identifier: d, updater: h(p, t), references: 1 }),
          n.push(d);
      }
      return n;
    }
    function l(e) {
      var t = document.createElement("style"),
        n = e.attributes || {};
      if (void 0 === n.nonce) {
        var o = r.nc;
        o && (n.nonce = o);
      }
      if (
        (Object.keys(n).forEach(function(e) {
          t.setAttribute(e, n[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = i(e.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var d,
      u =
        ((d = []),
        function(e, t) {
          return (d[e] = t), d.filter(Boolean).join("\n");
        });
    function p(e, t, r, n) {
      var o = r
        ? ""
        : n.media
        ? "@media ".concat(n.media, " {").concat(n.css, "}")
        : n.css;
      if (e.styleSheet) e.styleSheet.cssText = u(t, o);
      else {
        var i = document.createTextNode(o),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function f(e, t, r) {
      var n = r.css,
        o = r.media,
        i = r.sourceMap;
      if (
        (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
        i &&
          btoa &&
          (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    var m = null,
      g = 0;
    function h(e, t) {
      var r, n, o;
      if (t.singleton) {
        var i = g++;
        (r = m || (m = l(t))),
          (n = p.bind(null, r, i, !1)),
          (o = p.bind(null, r, i, !0));
      } else
        (r = l(t)),
          (n = f.bind(null, r, t)),
          (o = function() {
            !(function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(r);
          });
      return (
        n(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            n((e = t));
          } else o();
        }
      );
    }
    e.exports = function(e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = o());
      var r = c((e = e || []), t);
      return function(e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var n = 0; n < r.length; n++) {
            var o = s(r[n]);
            a[o].references--;
          }
          for (var i = c(e, t), l = 0; l < r.length; l++) {
            var d = s(r[l]);
            0 === a[d].references && (a[d].updater(), a.splice(d, 1));
          }
          r = i;
        }
      };
    };
  },
  function(e, t, r) {
    "use strict";
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var r = (function(e, t) {
              var r = e[1] || "",
                n = e[3];
              if (!n) return r;
              if (t && "function" == typeof btoa) {
                var o =
                    ((a = n),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      s
                    )),
                    "/*# ".concat(c, " */")),
                  i = n.sources.map(function(e) {
                    return "/*# sourceURL="
                      .concat(n.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [r]
                  .concat(i)
                  .concat([o])
                  .join("\n");
              }
              var a, s, c;
              return [r].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
          }).join("");
        }),
        (t.i = function(e, r, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (n)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (o[a] = !0);
            }
          for (var s = 0; s < e.length; s++) {
            var c = [].concat(e[s]);
            (n && o[c[0]]) ||
              (r &&
                (c[2]
                  ? (c[2] = "".concat(r, " and ").concat(c[2]))
                  : (c[2] = r)),
              t.push(c));
          }
        }),
        t
      );
    };
  },
  function(e, t, r) {
    "use strict";
    r.r(t);
    r(3), r(5), r(7), r(9), r(11);
  },
  function(e, t, r) {
    var n = r(0),
      o = r(4);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (n(o, i), o.locals ? o.locals : {});
    e.exports = a;
  },
  function(e, t, r) {
    (t = r(1)(!1)).push([
      e.i,
      "@import url(https://fonts.googleapis.com/css2?family=Puritan&display=swap);"
    ]),
      t.push([
        e.i,
        '*,*::after,*::before{box-sizing:border-box;scroll-behavior:smooth}a{text-decoration:none;color:black}body{font-family:"Puritan", sans-serif}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}input{display:block;margin:0 auto}input[type="text"],input[type="date"]{display:block;padding:1rem 0.5rem;width:100%;margin:1rem 0.5rem}input[type="submit"]{background:#061641;color:white;border:1.5px solid white;padding:1rem 1.5rem;margin-top:3rem;border-radius:100px;cursor:pointer;font-size:1.25rem}input[type="submit"]:hover{color:#061641;background:white}input[type="submit"]:active{transform:translateY(5px)}.fas{transition:all 0.2s ease-in}.fas:hover{color:orangered}\n',
        ""
      ]),
      (e.exports = t);
  },
  function(e, t, r) {
    var n = r(0),
      o = r(6);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (n(o, i), o.locals ? o.locals : {});
    e.exports = a;
  },
  function(e, t, r) {
    (t = r(1)(!1)).push([
      e.i,
      "#nav{font-size:1.75rem;display:flex;justify-content:space-between;align-items:center;padding:1.5rem 1rem;position:fixed;top:0;left:0;width:100%;background:#061641;color:white}#nav_right{display:flex}#nav_right li a{color:inherit;margin-left:2.5rem}#nav_right li a:hover{border-bottom:2.5px solid orangered}@media only screen and (max-width: 680px){#nav{flex-direction:column}.logo{margin-bottom:1rem}}\n",
      ""
    ]),
      (e.exports = t);
  },
  function(e, t, r) {
    var n = r(0),
      o = r(8);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (n(o, i), o.locals ? o.locals : {});
    e.exports = a;
  },
  function(e, t, r) {
    (t = r(1)(!1)).push([
      e.i,
      "#footer{background:#061641;padding:1rem 0;color:white;text-align:center;font-size:1.25rem}\n",
      ""
    ]),
      (e.exports = t);
  },
  function(e, t, r) {
    var n = r(0),
      o = r(10);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[e.i, o, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (n(o, i), o.locals ? o.locals : {});
    e.exports = a;
  },
  function(e, t, r) {
    (t = r(1)(!1)).push([
      e.i,
      "#plan{height:100vh;background:url(/src/client/media/trip.jpeg) no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;justify-content:center;align-items:center}#plan .information{background:#061641;color:white;padding:1.5rem 1.5rem;width:90%;max-width:80rem;text-align:center;border:1px solid white;border-radius:10px;font-size:1.25rem}#plan .information h2,#plan .information h3{margin:1.5rem 0}#trips{height:100vh;background:url(/src/client/media/world.jpeg) no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;justify-content:center;align-items:center}#trips .trip{background:#061641;color:white;padding:1.5rem 1.5rem;width:90%;max-width:80rem;text-align:center;border:1px solid white;border-radius:10px;font-size:1.25rem;display:grid;grid-template-columns:1fr 2fr;justify-content:center;align-items:center}#trips .trip h2,#trips .trip h3{margin:1.5rem 0}#trips .trip #submit_trip{width:100%}#result{height:100vh;background:url(/src/client/media/result.jpeg) no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;display:flex;justify-content:center;align-items:center}#result .img img{border-radius:50rem;border:1.5px solid white;width:20rem;height:20rem}#result #print_trip,#result #remove_trip{padding:0.5rem 1rem;margin-top:0.2rem;cursor:pointer;border-radius:50rem;width:10rem}#result #remove_trip{color:white;background-color:red}#result .result{background:#061641;color:white;padding:1.5rem 1.5rem;width:90%;max-width:80rem;border:1px solid white;border-radius:10px;font-size:1.25rem;display:grid;grid-template-columns:1fr 1fr;justify-content:center;align-items:center}#result .result .img{margin:0 auto}#result .result h2,#result .result h3{margin:1.5rem 0}#result .result p{padding:0.5rem 0}#result .result .content .fas{width:30px;margin-right:1rem}.invisible{display:none !important}#error{display:none}.error{padding:1rem;margin:1.5rem auto 0 auto;border:1px solid red;width:60%;color:red;font-weight:bold;background:white;display:block !important}@media only screen and (max-width: 980px){#result .result{grid-template-columns:1fr;text-align:center}#result .result .img{margin-bottom:3rem}#trips .trip{grid-template-columns:1fr}}\n",
      ""
    ]),
      (e.exports = t);
  },
  function(e, t, r) {
    const n = r(12),
      o = document.getElementById("date"),
      i = document.getElementById("departure"),
      a = document.getElementById("destination"),
      s = document.getElementById("submit_trip"),
      c = document.getElementById("result"),
      l = document.getElementById("start_plan"),
      d = document.getElementById("error"),
      u = () => {
        document.getElementById("tripresult").remove(),
          c.classList.add("invisible");
      },
      p = () => {
        window.print();
      };
    l.addEventListener("click", function() {
      document.getElementById("trips").scrollIntoView({ behavior: "smooth" });
    }),
      s.addEventListener("click", function() {
        d.classList.remove("error");
        const e = document.getElementById("tripresult");
        null != e && e.remove(),
          (async (e, t, r) => {
            const o = await n(`${e}${t}&maxRows=10&username=${r}`);
            try {
              return (await o.json()).geonames[0];
            } catch (e) {
              console.log("error", e);
            }
          })("http://api.geonames.org/searchJSON?q=", a.value, "mylady17")
            .then(function(e) {
              const t = e.lng;
              return (async (e, t, r, o) => {
                const i = await n(`${e}lat=${t}&lon=${r}&key=${o}`);
                try {
                  return (await i.json()).data;
                } catch (e) {
                  console.log("error", e);
                }
              })("https://api.weatherbit.io/v2.0/forecast/daily?", e.lat, t, "572263d82ca443f69bbff78db51a3358");
            })
            .catch(function(e) {
              d.classList.add("error");
            })
            .then(function(e) {
              return e.filter(function(e) {
                return e.datetime === o.value;
              });
            })
            .catch(function(e) {
              d.classList.add("error");
            })
            .then(function(e) {
              const t = (e => {
                  let t = new Date();
                  const r = String(t.getDate()).padStart(2, "0"),
                    n = String(t.getMonth() + 1).padStart(2, "0"),
                    o = t.getFullYear();
                  (t = new Date(o + "-" + n + "-" + r)), (e = new Date(e));
                  const i = Date.UTC(
                      t.getFullYear(),
                      t.getMonth(),
                      t.getDate()
                    ),
                    a = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
                  return Math.floor((a - i) / 864e5);
                })(e[0].datetime),
                r = {
                  departure: i.value,
                  destination: a.value,
                  temp: e[0].temp,
                  desc: e[0].weather.description,
                  daysToTrip: t
                };
              return (
                (async (e, t) => {
                  const r = await n(e, {
                    method: "POST",
                    credentials: "same-origin",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(t)
                  });
                  try {
                    await r.json();
                  } catch (e) {
                    console.log("error", e);
                  }
                })("http://localhost:8081/add", r),
                r
              );
            })
            .catch(function(e) {
              d.classList.add("error");
            })
            .then(function(e) {
              (async e => {
                const t = await n(
                  `https://pixabay.com/api/?key=16173643-780305ef8f03c6c4b73f053c7&q=${a.value}+city&image_type=photo`
                );
                try {
                  const r = await t.json(),
                    n = document.createElement("div");
                  n.classList.add("result"),
                    (n.id = "tripresult"),
                    (n.innerHTML = `<div class="img">\n      <img src="${r.hits[0].webformatURL}" alt="No picture">\n      </div>\n    <div class="content" id="content>\n      <p><i class="fas fa-map-marker-alt"></i>Your destination: ${e.destination}</p>\n      <p><i class="fas fa-calendar-day"></i>Start Date: ${o.value}</p>\n      <p><i class="fas fa-clock"></i>Days to trip: ${e.daysToTrip}</p>\n      <p><i class="fas fa-cloud-sun"></i>The weather will likely be: ${e.desc}</p>\n      <p><i class="fas fa-thermometer-full"></i>Termpature: ${e.temp} °C</p>\n      <div id=trip_buttons>\n      <button id="print_trip">Print trip</button>\n      <button id="remove_trip">Remove Trip</button>\n      </div>\n    </div>`),
                    c.appendChild(n),
                    c.classList.remove("invisible"),
                    document
                      .getElementById("print_trip")
                      .addEventListener("click", p),
                    document
                      .getElementById("remove_trip")
                      .addEventListener("click", u),
                    c.scrollIntoView({ behavior: "smooth" });
                } catch (e) {
                  console.log("error", e);
                }
              })(e);
            })
            .catch(function(e) {
              d.classList.add("error");
            });
      });
  },
  function(e, t, r) {
    "use strict";
    var n = (function() {
      if ("undefined" != typeof self) return self;
      if ("undefined" != typeof window) return window;
      if (void 0 !== n) return n;
      throw new Error("unable to locate global object");
    })();
    (e.exports = t = n.fetch),
      (t.default = n.fetch.bind(n)),
      (t.Headers = n.Headers),
      (t.Request = n.Request),
      (t.Response = n.Response);
  }
]);
//# sourceMappingURL=main.js.map
