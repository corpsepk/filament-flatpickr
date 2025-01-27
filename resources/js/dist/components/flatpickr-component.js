var De = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
    z = {
        _disable: [],
        allowInput: !1,
        allowInvalidPreload: !1,
        altFormat: "F j, Y",
        altInput: !1,
        altInputClass: "form-control input",
        animate: typeof window == "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        autoFillDefaultTime: !0,
        clickOpens: !0,
        closeOnSelect: !0,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: !1,
        enableSeconds: !1,
        enableTime: !1,
        errorHandler: function (a) {
            return typeof console < "u" && console.warn(a)
        },
        getWeek: function (a) {
            var r = new Date(a.getTime());
            r.setHours(0, 0, 0, 0), r.setDate(r.getDate() + 3 - (r.getDay() + 6) % 7);
            var e = new Date(r.getFullYear(), 0, 4);
            return 1 + Math.round(((r.getTime() - e.getTime()) / 864e5 - 3 + (e.getDay() + 6) % 7) / 7)
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: !1,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: !1,
        now: new Date,
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: void 0,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: !1,
        showMonths: 1,
        static: !1,
        time_24hr: !1,
        weekNumbers: !1,
        wrap: !1
    };
var be = {
    weekdays: {
        shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        longhand: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    },
    months: {
        shorthand: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        longhand: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 1,
    ordinal: function (a) {
        var r = a % 100;
        if (r > 3 && r < 21) return "th";
        switch (r % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th"
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Год",
    monthAriaLabel: "Месяц",
    hourAriaLabel: "Час",
    minuteAriaLabel: "Минута",
    time_24hr: !1
}, Ce = be;
var O = function (a, r) {
    return r === void 0 && (r = 2), ("000" + a).slice(r * -1)
}, H = function (a) {
    return a === !0 ? 1 : 0
};

function Ye(a, r) {
    var e;
    return function () {
        var c = this, u = arguments;
        clearTimeout(e), e = setTimeout(function () {
            return a.apply(c, u)
        }, r)
    }
}

var Me = function (a) {
    return a instanceof Array ? a : [a]
};

function Y(a, r, e) {
    if (e === !0) return a.classList.add(r);
    a.classList.remove(r)
}

function y(a, r, e) {
    var c = window.document.createElement(a);
    return r = r || "", e = e || "", c.className = r, e !== void 0 && (c.textContent = e), c
}

function le(a) {
    for (; a.firstChild;) a.removeChild(a.firstChild)
}

function Ae(a, r) {
    if (r(a)) return a;
    if (a.parentNode) return Ae(a.parentNode, r)
}

function se(a, r) {
    var e = y("div", "numInputWrapper"), c = y("input", "numInput " + a), u = y("span", "arrowUp"),
        h = y("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1 ? c.type = "number" : (c.type = "text", c.pattern = "\\d*"), r !== void 0) for (var D in r) c.setAttribute(D, r[D]);
    return e.appendChild(c), e.appendChild(u), e.appendChild(h), e
}

function L(a) {
    try {
        if (typeof a.composedPath == "function") {
            var r = a.composedPath();
            return r[0]
        }
        return a.target
    } catch {
        return a.target
    }
}

var Ne = function () {
}, ue = function (a, r, e) {
    return e.months[r ? "shorthand" : "longhand"][a]
}, Ge = {
    D: Ne, F: function (a, r, e) {
        a.setMonth(e.months.longhand.indexOf(r))
    }, G: function (a, r) {
        a.setHours((a.getHours() >= 12 ? 12 : 0) + parseFloat(r))
    }, H: function (a, r) {
        a.setHours(parseFloat(r))
    }, J: function (a, r) {
        a.setDate(parseFloat(r))
    }, K: function (a, r, e) {
        a.setHours(a.getHours() % 12 + 12 * H(new RegExp(e.amPM[1], "i").test(r)))
    }, M: function (a, r, e) {
        a.setMonth(e.months.shorthand.indexOf(r))
    }, S: function (a, r) {
        a.setSeconds(parseFloat(r))
    }, U: function (a, r) {
        return new Date(parseFloat(r) * 1e3)
    }, W: function (a, r, e) {
        var c = parseInt(r), u = new Date(a.getFullYear(), 0, 2 + (c - 1) * 7, 0, 0, 0, 0);
        return u.setDate(u.getDate() - u.getDay() + e.firstDayOfWeek), u
    }, Y: function (a, r) {
        a.setFullYear(parseFloat(r))
    }, Z: function (a, r) {
        return new Date(r)
    }, d: function (a, r) {
        a.setDate(parseFloat(r))
    }, h: function (a, r) {
        a.setHours((a.getHours() >= 12 ? 12 : 0) + parseFloat(r))
    }, i: function (a, r) {
        a.setMinutes(parseFloat(r))
    }, j: function (a, r) {
        a.setDate(parseFloat(r))
    }, l: Ne, m: function (a, r) {
        a.setMonth(parseFloat(r) - 1)
    }, n: function (a, r) {
        a.setMonth(parseFloat(r) - 1)
    }, s: function (a, r) {
        a.setSeconds(parseFloat(r))
    }, u: function (a, r) {
        return new Date(parseFloat(r))
    }, w: Ne, y: function (a, r) {
        a.setFullYear(2e3 + parseFloat(r))
    }
}, V = {
    D: "",
    F: "",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})"
}, ne = {
    Z: function (a) {
        return a.toISOString()
    }, D: function (a, r, e) {
        return r.weekdays.shorthand[ne.w(a, r, e)]
    }, F: function (a, r, e) {
        return ue(ne.n(a, r, e) - 1, !1, r)
    }, G: function (a, r, e) {
        return O(ne.h(a, r, e))
    }, H: function (a) {
        return O(a.getHours())
    }, J: function (a, r) {
        return r.ordinal !== void 0 ? a.getDate() + r.ordinal(a.getDate()) : a.getDate()
    }, K: function (a, r) {
        return r.amPM[H(a.getHours() > 11)]
    }, M: function (a, r) {
        return ue(a.getMonth(), !0, r)
    }, S: function (a) {
        return O(a.getSeconds())
    }, U: function (a) {
        return a.getTime() / 1e3
    }, W: function (a, r, e) {
        return e.getWeek(a)
    }, Y: function (a) {
        return O(a.getFullYear(), 4)
    }, d: function (a) {
        return O(a.getDate())
    }, h: function (a) {
        return a.getHours() % 12 ? a.getHours() % 12 : 12
    }, i: function (a) {
        return O(a.getMinutes())
    }, j: function (a) {
        return a.getDate()
    }, l: function (a, r) {
        return r.weekdays.longhand[a.getDay()]
    }, m: function (a) {
        return O(a.getMonth() + 1)
    }, n: function (a) {
        return a.getMonth() + 1
    }, s: function (a) {
        return a.getSeconds()
    }, u: function (a) {
        return a.getTime()
    }, w: function (a) {
        return a.getDay()
    }, y: function (a) {
        return String(a.getFullYear()).substring(2)
    }
};
var Pe = function (a) {
    var r = a.config, e = r === void 0 ? z : r, c = a.l10n, u = c === void 0 ? be : c, h = a.isMobile,
        D = h === void 0 ? !1 : h;
    return function (w, p, F) {
        var k = F || u;
        return e.formatDate !== void 0 && !D ? e.formatDate(w, p, k) : p.split("").map(function (_, I, P) {
            return ne[_] && P[I - 1] !== "\\" ? ne[_](w, k, e) : _ !== "\\" ? _ : ""
        }).join("")
    }
}, we = function (a) {
    var r = a.config, e = r === void 0 ? z : r, c = a.l10n, u = c === void 0 ? be : c;
    return function (h, D, w, p) {
        if (!(h !== 0 && !h)) {
            var F = p || u, k, _ = h;
            if (h instanceof Date) k = new Date(h.getTime()); else if (typeof h != "string" && h.toFixed !== void 0) k = new Date(h); else if (typeof h == "string") {
                var I = D || (e || z).dateFormat, P = String(h).trim();
                if (P === "today") k = new Date, w = !0; else if (e && e.parseDate) k = e.parseDate(h, I); else if (/Z$/.test(P) || /GMT$/.test(P)) k = new Date(h); else {
                    for (var K = void 0, M = [], q = 0, ae = 0, m = ""; q < I.length; q++) {
                        var b = I[q], x = b === "\\", N = I[q - 1] === "\\" || x;
                        if (V[b] && !N) {
                            m += V[b];
                            var W = new RegExp(m).exec(h);
                            W && (K = !0) && M[b !== "Y" ? "push" : "unshift"]({fn: Ge[b], val: W[++ae]})
                        } else x || (m += ".")
                    }
                    k = !e || !e.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0)), M.forEach(function ($) {
                        var B = $.fn, Q = $.val;
                        return k = B(k, Q, F) || k
                    }), k = K ? k : void 0
                }
            }
            if (!(k instanceof Date && !isNaN(k.getTime()))) {
                e.errorHandler(new Error("Invalid date provided: " + _));
                return
            }
            return w === !0 && k.setHours(0, 0, 0, 0), k
        }
    }
};

function j(a, r, e) {
    return e === void 0 && (e = !0), e !== !1 ? new Date(a.getTime()).setHours(0, 0, 0, 0) - new Date(r.getTime()).setHours(0, 0, 0, 0) : a.getTime() - r.getTime()
}

var Ze = function (a, r, e) {
    return a > Math.min(r, e) && a < Math.max(r, e)
}, ye = function (a, r, e) {
    return a * 3600 + r * 60 + e
}, Qe = function (a) {
    var r = Math.floor(a / 3600), e = (a - r * 3600) / 60;
    return [r, e, a - r * 3600 - e * 60]
}, Xe = {DAY: 864e5};

function xe(a) {
    var r = a.defaultHour, e = a.defaultMinute, c = a.defaultSeconds;
    if (a.minDate !== void 0) {
        var u = a.minDate.getHours(), h = a.minDate.getMinutes(), D = a.minDate.getSeconds();
        r < u && (r = u), r === u && e < h && (e = h), r === u && e === h && c < D && (c = a.minDate.getSeconds())
    }
    if (a.maxDate !== void 0) {
        var w = a.maxDate.getHours(), p = a.maxDate.getMinutes();
        r = Math.min(r, w), r === w && (e = Math.min(p, e)), r === w && e === p && (c = a.maxDate.getSeconds())
    }
    return {hours: r, minutes: e, seconds: c}
}

typeof Object.assign != "function" && (Object.assign = function (a) {
    for (var r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
    if (!a) throw TypeError("Cannot convert undefined or null to object");
    for (var c = function (w) {
        w && Object.keys(w).forEach(function (p) {
            return a[p] = w[p]
        })
    }, u = 0, h = r; u < h.length; u++) {
        var D = h[u];
        c(D)
    }
    return a
});
var A = function () {
    return A = Object.assign || function (a) {
        for (var r, e = 1, c = arguments.length; e < c; e++) {
            r = arguments[e];
            for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && (a[u] = r[u])
        }
        return a
    }, A.apply(this, arguments)
}, en = function () {
    for (var a = 0, r = 0, e = arguments.length; r < e; r++) a += arguments[r].length;
    for (var c = Array(a), u = 0, r = 0; r < e; r++) for (var h = arguments[r], D = 0, w = h.length; D < w; D++, u++) c[u] = h[D];
    return c
}, jn = 300;

function Rn(a, r) {
    var e = {config: A(A({}, z), T.defaultConfig), l10n: Ce};
    e.parseDate = we({
        config: e.config,
        l10n: e.l10n
    }), e._handlers = [], e.pluginElements = [], e.loadedPlugins = [], e._bind = M, e._setHoursFromDate = I, e._positionCalendar = he, e.changeMonth = Ee, e.changeYear = de, e.clear = dn, e.close = mn, e.onMouseOver = ge, e._createElement = y, e.createDay = W, e.destroy = gn, e.isEnabled = G, e.jumpToDate = m, e.updateValue = J, e.open = vn, e.redraw = qe, e.set = Mn, e.setDate = wn, e.toggle = En;

    function c() {
        e.utils = {
            getDaysInMonth: function (n, t) {
                return n === void 0 && (n = e.currentMonth), t === void 0 && (t = e.currentYear), n === 1 && (t % 4 === 0 && t % 100 !== 0 || t % 400 === 0) ? 29 : e.l10n.daysInMonth[n]
            }
        }
    }

    function u() {
        e.element = e.input = a, e.isOpen = !1, Dn(), Ue(), xn(), yn(), c(), e.isMobile || N(), ae(), (e.selectedDates.length || e.config.noCalendar) && (e.config.enableTime && I(e.config.noCalendar ? e.latestSelectedDateObj : void 0), J(!1)), w();
        var n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        !e.isMobile && n && he(), S("onReady")
    }

    function h() {
        var n;
        return ((n = e.calendarContainer) === null || n === void 0 ? void 0 : n.getRootNode()).activeElement || document.activeElement
    }

    function D(n) {
        return n.bind(e)
    }

    function w() {
        var n = e.config;
        n.weekNumbers === !1 && n.showMonths === 1 || n.noCalendar !== !0 && window.requestAnimationFrame(function () {
            if (e.calendarContainer !== void 0 && (e.calendarContainer.style.visibility = "hidden", e.calendarContainer.style.display = "block"), e.daysContainer !== void 0) {
                var t = (e.days.offsetWidth + 1) * n.showMonths;
                e.daysContainer.style.width = t + "px", e.calendarContainer.style.width = t + (e.weekWrapper !== void 0 ? e.weekWrapper.offsetWidth : 0) + "px", e.calendarContainer.style.removeProperty("visibility"), e.calendarContainer.style.removeProperty("display")
            }
        })
    }

    function p(n) {
        if (e.selectedDates.length === 0) {
            var t = e.config.minDate === void 0 || j(new Date, e.config.minDate) >= 0 ? new Date : new Date(e.config.minDate.getTime()),
                i = xe(e.config);
            t.setHours(i.hours, i.minutes, i.seconds, t.getMilliseconds()), e.selectedDates = [t], e.latestSelectedDateObj = t
        }
        n !== void 0 && n.type !== "blur" && Fn(n);
        var o = e._input.value;
        _(), J(), e._input.value !== o && e._debouncedChange()
    }

    function F(n, t) {
        return n % 12 + 12 * H(t === e.l10n.amPM[1])
    }

    function k(n) {
        switch (n % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return n % 12
        }
    }

    function _() {
        if (!(e.hourElement === void 0 || e.minuteElement === void 0)) {
            var n = (parseInt(e.hourElement.value.slice(-2), 10) || 0) % 24,
                t = (parseInt(e.minuteElement.value, 10) || 0) % 60,
                i = e.secondElement !== void 0 ? (parseInt(e.secondElement.value, 10) || 0) % 60 : 0;
            e.amPM !== void 0 && (n = F(n, e.amPM.textContent));
            var o = e.config.minTime !== void 0 || e.config.minDate && e.minDateHasTime && e.latestSelectedDateObj && j(e.latestSelectedDateObj, e.config.minDate, !0) === 0,
                l = e.config.maxTime !== void 0 || e.config.maxDate && e.maxDateHasTime && e.latestSelectedDateObj && j(e.latestSelectedDateObj, e.config.maxDate, !0) === 0;
            if (e.config.maxTime !== void 0 && e.config.minTime !== void 0 && e.config.minTime > e.config.maxTime) {
                var s = ye(e.config.minTime.getHours(), e.config.minTime.getMinutes(), e.config.minTime.getSeconds()),
                    v = ye(e.config.maxTime.getHours(), e.config.maxTime.getMinutes(), e.config.maxTime.getSeconds()),
                    d = ye(n, t, i);
                if (d > v && d < s) {
                    var C = Qe(s);
                    n = C[0], t = C[1], i = C[2]
                }
            } else {
                if (l) {
                    var f = e.config.maxTime !== void 0 ? e.config.maxTime : e.config.maxDate;
                    n = Math.min(n, f.getHours()), n === f.getHours() && (t = Math.min(t, f.getMinutes())), t === f.getMinutes() && (i = Math.min(i, f.getSeconds()))
                }
                if (o) {
                    var g = e.config.minTime !== void 0 ? e.config.minTime : e.config.minDate;
                    n = Math.max(n, g.getHours()), n === g.getHours() && t < g.getMinutes() && (t = g.getMinutes()), t === g.getMinutes() && (i = Math.max(i, g.getSeconds()))
                }
            }
            P(n, t, i)
        }
    }

    function I(n) {
        var t = n || e.latestSelectedDateObj;
        t && t instanceof Date && P(t.getHours(), t.getMinutes(), t.getSeconds())
    }

    function P(n, t, i) {
        e.latestSelectedDateObj !== void 0 && e.latestSelectedDateObj.setHours(n % 24, t, i || 0, 0), !(!e.hourElement || !e.minuteElement || e.isMobile) && (e.hourElement.value = O(e.config.time_24hr ? n : (12 + n) % 12 + 12 * H(n % 12 === 0)), e.minuteElement.value = O(t), e.amPM !== void 0 && (e.amPM.textContent = e.l10n.amPM[H(n >= 12)]), e.secondElement !== void 0 && (e.secondElement.value = O(i)))
    }

    function K(n) {
        var t = L(n), i = parseInt(t.value) + (n.delta || 0);
        (i / 1e3 > 1 || n.key === "Enter" && !/[^\d]/.test(i.toString())) && de(i)
    }

    function M(n, t, i, o) {
        if (t instanceof Array) return t.forEach(function (l) {
            return M(n, l, i, o)
        });
        if (n instanceof Array) return n.forEach(function (l) {
            return M(l, t, i, o)
        });
        n.addEventListener(t, i, o), e._handlers.push({
            remove: function () {
                return n.removeEventListener(t, i, o)
            }
        })
    }

    function q() {
        S("onChange")
    }

    function ae() {
        if (e.config.wrap && ["open", "close", "toggle", "clear"].forEach(function (i) {
            Array.prototype.forEach.call(e.element.querySelectorAll("[data-" + i + "]"), function (o) {
                return M(o, "click", e[i])
            })
        }), e.isMobile) {
            kn();
            return
        }
        var n = Ye(pn, 50);
        if (e._debouncedChange = Ye(q, jn), e.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && M(e.daysContainer, "mouseover", function (i) {
            e.config.mode === "range" && ge(L(i))
        }), M(e._input, "keydown", We), e.calendarContainer !== void 0 && M(e.calendarContainer, "keydown", We), !e.config.inline && !e.config.static && M(window, "resize", n), window.ontouchstart !== void 0 ? M(window.document, "touchstart", Se) : M(window.document, "mousedown", Se), M(window.document, "focus", Se, {capture: !0}), e.config.clickOpens === !0 && (M(e._input, "focus", e.open), M(e._input, "click", e.open)), e.daysContainer !== void 0 && (M(e.monthNav, "click", Tn), M(e.monthNav, ["keyup", "increment"], K), M(e.daysContainer, "click", Je)), e.timeContainer !== void 0 && e.minuteElement !== void 0 && e.hourElement !== void 0) {
            var t = function (i) {
                return L(i).select()
            };
            M(e.timeContainer, ["increment"], p), M(e.timeContainer, "blur", p, {capture: !0}), M(e.timeContainer, "click", b), M([e.hourElement, e.minuteElement], ["focus", "click"], t), e.secondElement !== void 0 && M(e.secondElement, "focus", function () {
                return e.secondElement && e.secondElement.select()
            }), e.amPM !== void 0 && M(e.amPM, "click", function (i) {
                p(i)
            })
        }
        e.config.allowInput && M(e._input, "blur", hn)
    }

    function m(n, t) {
        var i = n !== void 0 ? e.parseDate(n) : e.latestSelectedDateObj || (e.config.minDate && e.config.minDate > e.now ? e.config.minDate : e.config.maxDate && e.config.maxDate < e.now ? e.config.maxDate : e.now),
            o = e.currentYear, l = e.currentMonth;
        try {
            i !== void 0 && (e.currentYear = i.getFullYear(), e.currentMonth = i.getMonth())
        } catch (s) {
            s.message = "Invalid date supplied: " + i, e.config.errorHandler(s)
        }
        t && e.currentYear !== o && (S("onYearChange"), X()), t && (e.currentYear !== o || e.currentMonth !== l) && S("onMonthChange"), e.redraw()
    }

    function b(n) {
        var t = L(n);
        ~t.className.indexOf("arrow") && x(n, t.classList.contains("arrowUp") ? 1 : -1)
    }

    function x(n, t, i) {
        var o = n && L(n), l = i || o && o.parentNode && o.parentNode.firstChild, s = Fe("increment");
        s.delta = t, l && l.dispatchEvent(s)
    }

    function N() {
        var n = window.document.createDocumentFragment();
        if (e.calendarContainer = y("div", "flatpickr-calendar"), e.calendarContainer.tabIndex = -1, !e.config.noCalendar) {
            if (n.appendChild(un()), e.innerContainer = y("div", "flatpickr-innerContainer"), e.config.weekNumbers) {
                var t = fn(), i = t.weekWrapper, o = t.weekNumbers;
                e.innerContainer.appendChild(i), e.weekNumbers = o, e.weekWrapper = i
            }
            e.rContainer = y("div", "flatpickr-rContainer"), e.rContainer.appendChild(je()), e.daysContainer || (e.daysContainer = y("div", "flatpickr-days"), e.daysContainer.tabIndex = -1), fe(), e.rContainer.appendChild(e.daysContainer), e.innerContainer.appendChild(e.rContainer), n.appendChild(e.innerContainer)
        }
        e.config.enableTime && n.appendChild(cn()), Y(e.calendarContainer, "rangeMode", e.config.mode === "range"), Y(e.calendarContainer, "animate", e.config.animate === !0), Y(e.calendarContainer, "multiMonth", e.config.showMonths > 1), e.calendarContainer.appendChild(n);
        var l = e.config.appendTo !== void 0 && e.config.appendTo.nodeType !== void 0;
        if ((e.config.inline || e.config.static) && (e.calendarContainer.classList.add(e.config.inline ? "inline" : "static"), e.config.inline && (!l && e.element.parentNode ? e.element.parentNode.insertBefore(e.calendarContainer, e._input.nextSibling) : e.config.appendTo !== void 0 && e.config.appendTo.appendChild(e.calendarContainer)), e.config.static)) {
            var s = y("div", "flatpickr-wrapper");
            e.element.parentNode && e.element.parentNode.insertBefore(s, e.element), s.appendChild(e.element), e.altInput && s.appendChild(e.altInput), s.appendChild(e.calendarContainer)
        }
        !e.config.static && !e.config.inline && (e.config.appendTo !== void 0 ? e.config.appendTo : window.document.body).appendChild(e.calendarContainer)
    }

    function W(n, t, i, o) {
        var l = G(t, !0), s = y("span", n, t.getDate().toString());
        return s.dateObj = t, s.$i = o, s.setAttribute("aria-label", e.formatDate(t, e.config.ariaDateFormat)), n.indexOf("hidden") === -1 && j(t, e.now) === 0 && (e.todayDateElem = s, s.classList.add("today"), s.setAttribute("aria-current", "date")), l ? (s.tabIndex = -1, _e(t) && (s.classList.add("selected"), e.selectedDateElem = s, e.config.mode === "range" && (Y(s, "startRange", e.selectedDates[0] && j(t, e.selectedDates[0], !0) === 0), Y(s, "endRange", e.selectedDates[1] && j(t, e.selectedDates[1], !0) === 0), n === "nextMonthDay" && s.classList.add("inRange")))) : s.classList.add("flatpickr-disabled"), e.config.mode === "range" && Sn(t) && !_e(t) && s.classList.add("inRange"), e.weekNumbers && e.config.showMonths === 1 && n !== "prevMonthDay" && o % 7 === 6 && e.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + e.config.getWeek(t) + "</span>"), S("onDayCreate", s), s
    }

    function $(n) {
        n.focus(), e.config.mode === "range" && ge(n)
    }

    function B(n) {
        for (var t = n > 0 ? 0 : e.config.showMonths - 1, i = n > 0 ? e.config.showMonths : -1, o = t; o != i; o += n) for (var l = e.daysContainer.children[o], s = n > 0 ? 0 : l.children.length - 1, v = n > 0 ? l.children.length : -1, d = s; d != v; d += n) {
            var C = l.children[d];
            if (C.className.indexOf("hidden") === -1 && G(C.dateObj)) return C
        }
    }

    function Q(n, t) {
        for (var i = n.className.indexOf("Month") === -1 ? n.dateObj.getMonth() : e.currentMonth, o = t > 0 ? e.config.showMonths : -1, l = t > 0 ? 1 : -1, s = i - e.currentMonth; s != o; s += l) for (var v = e.daysContainer.children[s], d = i - e.currentMonth === s ? n.$i + t : t < 0 ? v.children.length - 1 : 0, C = v.children.length, f = d; f >= 0 && f < C && f != (t > 0 ? C : -1); f += l) {
            var g = v.children[f];
            if (g.className.indexOf("hidden") === -1 && G(g.dateObj) && Math.abs(n.$i - f) >= Math.abs(t)) return $(g)
        }
        e.changeMonth(l), re(B(l), 0)
    }

    function re(n, t) {
        var i = h(), o = me(i || document.body),
            l = n !== void 0 ? n : o ? i : e.selectedDateElem !== void 0 && me(e.selectedDateElem) ? e.selectedDateElem : e.todayDateElem !== void 0 && me(e.todayDateElem) ? e.todayDateElem : B(t > 0 ? 1 : -1);
        l === void 0 ? e._input.focus() : o ? Q(l, t) : $(l)
    }

    function ln(n, t) {
        for (var i = (new Date(n, t, 1).getDay() - e.l10n.firstDayOfWeek + 7) % 7, o = e.utils.getDaysInMonth((t - 1 + 12) % 12, n), l = e.utils.getDaysInMonth(t, n), s = window.document.createDocumentFragment(), v = e.config.showMonths > 1, d = v ? "prevMonthDay hidden" : "prevMonthDay", C = v ? "nextMonthDay hidden" : "nextMonthDay", f = o + 1 - i, g = 0; f <= o; f++, g++) s.appendChild(W("flatpickr-day " + d, new Date(n, t - 1, f), f, g));
        for (f = 1; f <= l; f++, g++) s.appendChild(W("flatpickr-day", new Date(n, t, f), f, g));
        for (var E = l + 1; E <= 42 - i && (e.config.showMonths === 1 || g % 7 !== 0); E++, g++) s.appendChild(W("flatpickr-day " + C, new Date(n, t + 1, E % l), E, g));
        var U = y("div", "dayContainer");
        return U.appendChild(s), U
    }

    function fe() {
        if (e.daysContainer !== void 0) {
            le(e.daysContainer), e.weekNumbers && le(e.weekNumbers);
            for (var n = document.createDocumentFragment(), t = 0; t < e.config.showMonths; t++) {
                var i = new Date(e.currentYear, e.currentMonth, 1);
                i.setMonth(e.currentMonth + t), n.appendChild(ln(i.getFullYear(), i.getMonth()))
            }
            e.daysContainer.appendChild(n), e.days = e.daysContainer.firstChild, e.config.mode === "range" && e.selectedDates.length === 1 && ge()
        }
    }

    function X() {
        if (!(e.config.showMonths > 1 || e.config.monthSelectorType !== "dropdown")) {
            var n = function (o) {
                return e.config.minDate !== void 0 && e.currentYear === e.config.minDate.getFullYear() && o < e.config.minDate.getMonth() ? !1 : !(e.config.maxDate !== void 0 && e.currentYear === e.config.maxDate.getFullYear() && o > e.config.maxDate.getMonth())
            };
            e.monthsDropdownContainer.tabIndex = -1, e.monthsDropdownContainer.innerHTML = "";
            for (var t = 0; t < 12; t++) if (n(t)) {
                var i = y("option", "flatpickr-monthDropdown-month");
                i.value = new Date(e.currentYear, t).getMonth().toString(), i.textContent = ue(t, e.config.shorthandCurrentMonth, e.l10n), i.tabIndex = -1, e.currentMonth === t && (i.selected = !0), e.monthsDropdownContainer.appendChild(i)
            }
        }
    }

    function sn() {
        var n = y("div", "flatpickr-month"), t = window.document.createDocumentFragment(), i;
        e.config.showMonths > 1 || e.config.monthSelectorType === "static" ? i = y("span", "cur-month") : (e.monthsDropdownContainer = y("select", "flatpickr-monthDropdown-months"), e.monthsDropdownContainer.setAttribute("aria-label", e.l10n.monthAriaLabel), M(e.monthsDropdownContainer, "change", function (v) {
            var d = L(v), C = parseInt(d.value, 10);
            e.changeMonth(C - e.currentMonth), S("onMonthChange")
        }), X(), i = e.monthsDropdownContainer);
        var o = se("cur-year", {tabindex: "-1"}), l = o.getElementsByTagName("input")[0];
        l.setAttribute("aria-label", e.l10n.yearAriaLabel), e.config.minDate && l.setAttribute("min", e.config.minDate.getFullYear().toString()), e.config.maxDate && (l.setAttribute("max", e.config.maxDate.getFullYear().toString()), l.disabled = !!e.config.minDate && e.config.minDate.getFullYear() === e.config.maxDate.getFullYear());
        var s = y("div", "flatpickr-current-month");
        return s.appendChild(i), s.appendChild(o), t.appendChild(s), n.appendChild(t), {
            container: n,
            yearElement: l,
            monthElement: i
        }
    }

    function Le() {
        le(e.monthNav), e.monthNav.appendChild(e.prevMonthNav), e.config.showMonths && (e.yearElements = [], e.monthElements = []);
        for (var n = e.config.showMonths; n--;) {
            var t = sn();
            e.yearElements.push(t.yearElement), e.monthElements.push(t.monthElement), e.monthNav.appendChild(t.container)
        }
        e.monthNav.appendChild(e.nextMonthNav)
    }

    function un() {
        return e.monthNav = y("div", "flatpickr-months"), e.yearElements = [], e.monthElements = [], e.prevMonthNav = y("span", "flatpickr-prev-month"), e.prevMonthNav.innerHTML = e.config.prevArrow, e.nextMonthNav = y("span", "flatpickr-next-month"), e.nextMonthNav.innerHTML = e.config.nextArrow, Le(), Object.defineProperty(e, "_hidePrevMonthArrow", {
            get: function () {
                return e.__hidePrevMonthArrow
            }, set: function (n) {
                e.__hidePrevMonthArrow !== n && (Y(e.prevMonthNav, "flatpickr-disabled", n), e.__hidePrevMonthArrow = n)
            }
        }), Object.defineProperty(e, "_hideNextMonthArrow", {
            get: function () {
                return e.__hideNextMonthArrow
            }, set: function (n) {
                e.__hideNextMonthArrow !== n && (Y(e.nextMonthNav, "flatpickr-disabled", n), e.__hideNextMonthArrow = n)
            }
        }), e.currentYearElement = e.yearElements[0], ve(), e.monthNav
    }

    function cn() {
        e.calendarContainer.classList.add("hasTime"), e.config.noCalendar && e.calendarContainer.classList.add("noCalendar");
        var n = xe(e.config);
        e.timeContainer = y("div", "flatpickr-time"), e.timeContainer.tabIndex = -1;
        var t = y("span", "flatpickr-time-separator", ":"),
            i = se("flatpickr-hour", {"aria-label": e.l10n.hourAriaLabel});
        e.hourElement = i.getElementsByTagName("input")[0];
        var o = se("flatpickr-minute", {"aria-label": e.l10n.minuteAriaLabel});
        if (e.minuteElement = o.getElementsByTagName("input")[0], e.hourElement.tabIndex = e.minuteElement.tabIndex = -1, e.hourElement.value = O(e.latestSelectedDateObj ? e.latestSelectedDateObj.getHours() : e.config.time_24hr ? n.hours : k(n.hours)), e.minuteElement.value = O(e.latestSelectedDateObj ? e.latestSelectedDateObj.getMinutes() : n.minutes), e.hourElement.setAttribute("step", e.config.hourIncrement.toString()), e.minuteElement.setAttribute("step", e.config.minuteIncrement.toString()), e.hourElement.setAttribute("min", e.config.time_24hr ? "0" : "1"), e.hourElement.setAttribute("max", e.config.time_24hr ? "23" : "12"), e.hourElement.setAttribute("maxlength", "2"), e.minuteElement.setAttribute("min", "0"), e.minuteElement.setAttribute("max", "59"), e.minuteElement.setAttribute("maxlength", "2"), e.timeContainer.appendChild(i), e.timeContainer.appendChild(t), e.timeContainer.appendChild(o), e.config.time_24hr && e.timeContainer.classList.add("time24hr"), e.config.enableSeconds) {
            e.timeContainer.classList.add("hasSeconds");
            var l = se("flatpickr-second");
            e.secondElement = l.getElementsByTagName("input")[0], e.secondElement.value = O(e.latestSelectedDateObj ? e.latestSelectedDateObj.getSeconds() : n.seconds), e.secondElement.setAttribute("step", e.minuteElement.getAttribute("step")), e.secondElement.setAttribute("min", "0"), e.secondElement.setAttribute("max", "59"), e.secondElement.setAttribute("maxlength", "2"), e.timeContainer.appendChild(y("span", "flatpickr-time-separator", ":")), e.timeContainer.appendChild(l)
        }
        return e.config.time_24hr || (e.amPM = y("span", "flatpickr-am-pm", e.l10n.amPM[H((e.latestSelectedDateObj ? e.hourElement.value : e.config.defaultHour) > 11)]), e.amPM.title = e.l10n.toggleTitle, e.amPM.tabIndex = -1, e.timeContainer.appendChild(e.amPM)), e.timeContainer
    }

    function je() {
        e.weekdayContainer ? le(e.weekdayContainer) : e.weekdayContainer = y("div", "flatpickr-weekdays");
        for (var n = e.config.showMonths; n--;) {
            var t = y("div", "flatpickr-weekdaycontainer");
            e.weekdayContainer.appendChild(t)
        }
        return Re(), e.weekdayContainer
    }

    function Re() {
        if (e.weekdayContainer) {
            var n = e.l10n.firstDayOfWeek, t = en(e.l10n.weekdays.shorthand);
            n > 0 && n < t.length && (t = en(t.splice(n, t.length), t.splice(0, n)));
            for (var i = e.config.showMonths; i--;) e.weekdayContainer.children[i].innerHTML = `
      <span class='flatpickr-weekday'>
        ` + t.join("</span><span class='flatpickr-weekday'>") + `
      </span>
      `
        }
    }

    function fn() {
        e.calendarContainer.classList.add("hasWeeks");
        var n = y("div", "flatpickr-weekwrapper");
        n.appendChild(y("span", "flatpickr-weekday", e.l10n.weekAbbreviation));
        var t = y("div", "flatpickr-weeks");
        return n.appendChild(t), {weekWrapper: n, weekNumbers: t}
    }

    function Ee(n, t) {
        t === void 0 && (t = !0);
        var i = t ? n : n - e.currentMonth;
        i < 0 && e._hidePrevMonthArrow === !0 || i > 0 && e._hideNextMonthArrow === !0 || (e.currentMonth += i, (e.currentMonth < 0 || e.currentMonth > 11) && (e.currentYear += e.currentMonth > 11 ? 1 : -1, e.currentMonth = (e.currentMonth + 12) % 12, S("onYearChange"), X()), fe(), S("onMonthChange"), ve())
    }

    function dn(n, t) {
        if (n === void 0 && (n = !0), t === void 0 && (t = !0), e.input.value = "", e.altInput !== void 0 && (e.altInput.value = ""), e.mobileInput !== void 0 && (e.mobileInput.value = ""), e.selectedDates = [], e.latestSelectedDateObj = void 0, t === !0 && (e.currentYear = e._initialDate.getFullYear(), e.currentMonth = e._initialDate.getMonth()), e.config.enableTime === !0) {
            var i = xe(e.config), o = i.hours, l = i.minutes, s = i.seconds;
            P(o, l, s)
        }
        e.redraw(), n && S("onChange")
    }

    function mn() {
        e.isOpen = !1, e.isMobile || (e.calendarContainer !== void 0 && e.calendarContainer.classList.remove("open"), e._input !== void 0 && e._input.classList.remove("active")), S("onClose")
    }

    function gn() {
        e.config !== void 0 && S("onDestroy");
        for (var n = e._handlers.length; n--;) e._handlers[n].remove();
        if (e._handlers = [], e.mobileInput) e.mobileInput.parentNode && e.mobileInput.parentNode.removeChild(e.mobileInput), e.mobileInput = void 0; else if (e.calendarContainer && e.calendarContainer.parentNode) if (e.config.static && e.calendarContainer.parentNode) {
            var t = e.calendarContainer.parentNode;
            if (t.lastChild && t.removeChild(t.lastChild), t.parentNode) {
                for (; t.firstChild;) t.parentNode.insertBefore(t.firstChild, t);
                t.parentNode.removeChild(t)
            }
        } else e.calendarContainer.parentNode.removeChild(e.calendarContainer);
        e.altInput && (e.input.type = "text", e.altInput.parentNode && e.altInput.parentNode.removeChild(e.altInput), delete e.altInput), e.input && (e.input.type = e.input._type, e.input.classList.remove("flatpickr-input"), e.input.removeAttribute("readonly")), ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (i) {
            try {
                delete e[i]
            } catch {
            }
        })
    }

    function ie(n) {
        return e.calendarContainer.contains(n)
    }

    function Se(n) {
        if (e.isOpen && !e.config.inline) {
            var t = L(n), i = ie(t),
                o = t === e.input || t === e.altInput || e.element.contains(t) || n.path && n.path.indexOf && (~n.path.indexOf(e.input) || ~n.path.indexOf(e.altInput)),
                l = !o && !i && !ie(n.relatedTarget), s = !e.config.ignoredFocusElements.some(function (v) {
                    return v.contains(t)
                });
            l && s && (e.config.allowInput && e.setDate(e._input.value, !1, e.config.altInput ? e.config.altFormat : e.config.dateFormat), e.timeContainer !== void 0 && e.minuteElement !== void 0 && e.hourElement !== void 0 && e.input.value !== "" && e.input.value !== void 0 && p(), e.close(), e.config && e.config.mode === "range" && e.selectedDates.length === 1 && e.clear(!1))
        }
    }

    function de(n) {
        if (!(!n || e.config.minDate && n < e.config.minDate.getFullYear() || e.config.maxDate && n > e.config.maxDate.getFullYear())) {
            var t = n, i = e.currentYear !== t;
            e.currentYear = t || e.currentYear, e.config.maxDate && e.currentYear === e.config.maxDate.getFullYear() ? e.currentMonth = Math.min(e.config.maxDate.getMonth(), e.currentMonth) : e.config.minDate && e.currentYear === e.config.minDate.getFullYear() && (e.currentMonth = Math.max(e.config.minDate.getMonth(), e.currentMonth)), i && (e.redraw(), S("onYearChange"), X())
        }
    }

    function G(n, t) {
        var i;
        t === void 0 && (t = !0);
        var o = e.parseDate(n, void 0, t);
        if (e.config.minDate && o && j(o, e.config.minDate, t !== void 0 ? t : !e.minDateHasTime) < 0 || e.config.maxDate && o && j(o, e.config.maxDate, t !== void 0 ? t : !e.maxDateHasTime) > 0) return !1;
        if (!e.config.enable && e.config.disable.length === 0) return !0;
        if (o === void 0) return !1;
        for (var l = !!e.config.enable, s = (i = e.config.enable) !== null && i !== void 0 ? i : e.config.disable, v = 0, d = void 0; v < s.length; v++) {
            if (d = s[v], typeof d == "function" && d(o)) return l;
            if (d instanceof Date && o !== void 0 && d.getTime() === o.getTime()) return l;
            if (typeof d == "string") {
                var C = e.parseDate(d, void 0, !0);
                return C && C.getTime() === o.getTime() ? l : !l
            } else if (typeof d == "object" && o !== void 0 && d.from && d.to && o.getTime() >= d.from.getTime() && o.getTime() <= d.to.getTime()) return l
        }
        return !l
    }

    function me(n) {
        return e.daysContainer !== void 0 ? n.className.indexOf("hidden") === -1 && n.className.indexOf("flatpickr-disabled") === -1 && e.daysContainer.contains(n) : !1
    }

    function hn(n) {
        var t = n.target === e._input, i = e._input.value.trimEnd() !== Ie();
        t && i && !(n.relatedTarget && ie(n.relatedTarget)) && e.setDate(e._input.value, !0, n.target === e.altInput ? e.config.altFormat : e.config.dateFormat)
    }

    function We(n) {
        var t = L(n), i = e.config.wrap ? a.contains(t) : t === e._input, o = e.config.allowInput,
            l = e.isOpen && (!o || !i), s = e.config.inline && i && !o;
        if (n.keyCode === 13 && i) {
            if (o) return e.setDate(e._input.value, !0, t === e.altInput ? e.config.altFormat : e.config.dateFormat), e.close(), t.blur();
            e.open()
        } else if (ie(t) || l || s) {
            var v = !!e.timeContainer && e.timeContainer.contains(t);
            switch (n.keyCode) {
                case 13:
                    v ? (n.preventDefault(), p(), Te()) : Je(n);
                    break;
                case 27:
                    n.preventDefault(), Te();
                    break;
                case 8:
                case 46:
                    i && !e.config.allowInput && (n.preventDefault(), e.clear());
                    break;
                case 37:
                case 39:
                    if (!v && !i) {
                        n.preventDefault();
                        var d = h();
                        if (e.daysContainer !== void 0 && (o === !1 || d && me(d))) {
                            var C = n.keyCode === 39 ? 1 : -1;
                            n.ctrlKey ? (n.stopPropagation(), Ee(C), re(B(1), 0)) : re(void 0, C)
                        }
                    } else e.hourElement && e.hourElement.focus();
                    break;
                case 38:
                case 40:
                    n.preventDefault();
                    var f = n.keyCode === 40 ? 1 : -1;
                    e.daysContainer && t.$i !== void 0 || t === e.input || t === e.altInput ? n.ctrlKey ? (n.stopPropagation(), de(e.currentYear - f), re(B(1), 0)) : v || re(void 0, f * 7) : t === e.currentYearElement ? de(e.currentYear - f) : e.config.enableTime && (!v && e.hourElement && e.hourElement.focus(), p(n), e._debouncedChange());
                    break;
                case 9:
                    if (v) {
                        var g = [e.hourElement, e.minuteElement, e.secondElement, e.amPM].concat(e.pluginElements).filter(function (R) {
                            return R
                        }), E = g.indexOf(t);
                        if (E !== -1) {
                            var U = g[E + (n.shiftKey ? -1 : 1)];
                            n.preventDefault(), (U || e._input).focus()
                        }
                    } else !e.config.noCalendar && e.daysContainer && e.daysContainer.contains(t) && n.shiftKey && (n.preventDefault(), e._input.focus());
                    break;
                default:
                    break
            }
        }
        if (e.amPM !== void 0 && t === e.amPM) switch (n.key) {
            case e.l10n.amPM[0].charAt(0):
            case e.l10n.amPM[0].charAt(0).toLowerCase():
                e.amPM.textContent = e.l10n.amPM[0], _(), J();
                break;
            case e.l10n.amPM[1].charAt(0):
            case e.l10n.amPM[1].charAt(0).toLowerCase():
                e.amPM.textContent = e.l10n.amPM[1], _(), J();
                break
        }
        (i || ie(t)) && S("onKeyDown", n)
    }

    function ge(n, t) {
        if (t === void 0 && (t = "flatpickr-day"), !(e.selectedDates.length !== 1 || n && (!n.classList.contains(t) || n.classList.contains("flatpickr-disabled")))) {
            for (var i = n ? n.dateObj.getTime() : e.days.firstElementChild.dateObj.getTime(), o = e.parseDate(e.selectedDates[0], void 0, !0).getTime(), l = Math.min(i, e.selectedDates[0].getTime()), s = Math.max(i, e.selectedDates[0].getTime()), v = !1, d = 0, C = 0, f = l; f < s; f += Xe.DAY) G(new Date(f), !0) || (v = v || f > l && f < s, f < o && (!d || f > d) ? d = f : f > o && (!C || f < C) && (C = f));
            var g = Array.from(e.rContainer.querySelectorAll("*:nth-child(-n+" + e.config.showMonths + ") > ." + t));
            g.forEach(function (E) {
                var U = E.dateObj, R = U.getTime(), oe = d > 0 && R < d || C > 0 && R > C;
                if (oe) {
                    E.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function (ee) {
                        E.classList.remove(ee)
                    });
                    return
                } else if (v && !oe) return;
                ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (ee) {
                    E.classList.remove(ee)
                }), n !== void 0 && (n.classList.add(i <= e.selectedDates[0].getTime() ? "startRange" : "endRange"), o < i && R === o ? E.classList.add("startRange") : o > i && R === o && E.classList.add("endRange"), R >= d && (C === 0 || R <= C) && Ze(R, o, i) && E.classList.add("inRange"))
            })
        }
    }

    function pn() {
        e.isOpen && !e.config.static && !e.config.inline && he()
    }

    function vn(n, t) {
        if (t === void 0 && (t = e._positionElement), e.isMobile === !0) {
            if (n) {
                n.preventDefault();
                var i = L(n);
                i && i.blur()
            }
            e.mobileInput !== void 0 && (e.mobileInput.focus(), e.mobileInput.click()), S("onOpen");
            return
        } else if (e._input.disabled || e.config.inline) return;
        var o = e.isOpen;
        e.isOpen = !0, o || (e.calendarContainer.classList.add("open"), e._input.classList.add("active"), S("onOpen"), he(t)), e.config.enableTime === !0 && e.config.noCalendar === !0 && e.config.allowInput === !1 && (n === void 0 || !e.timeContainer.contains(n.relatedTarget)) && setTimeout(function () {
            return e.hourElement.select()
        }, 50)
    }

    function Ke(n) {
        return function (t) {
            var i = e.config["_" + n + "Date"] = e.parseDate(t, e.config.dateFormat),
                o = e.config["_" + (n === "min" ? "max" : "min") + "Date"];
            i !== void 0 && (e[n === "min" ? "minDateHasTime" : "maxDateHasTime"] = i.getHours() > 0 || i.getMinutes() > 0 || i.getSeconds() > 0), e.selectedDates && (e.selectedDates = e.selectedDates.filter(function (l) {
                return G(l)
            }), !e.selectedDates.length && n === "min" && I(i), J()), e.daysContainer && (qe(), i !== void 0 ? e.currentYearElement[n] = i.getFullYear().toString() : e.currentYearElement.removeAttribute(n), e.currentYearElement.disabled = !!o && i !== void 0 && o.getFullYear() === i.getFullYear())
        }
    }

    function Dn() {
        var n = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
            t = A(A({}, JSON.parse(JSON.stringify(a.dataset || {}))), r), i = {};
        e.config.parseDate = t.parseDate, e.config.formatDate = t.formatDate, Object.defineProperty(e.config, "enable", {
            get: function () {
                return e.config._enable
            }, set: function (g) {
                e.config._enable = $e(g)
            }
        }), Object.defineProperty(e.config, "disable", {
            get: function () {
                return e.config._disable
            }, set: function (g) {
                e.config._disable = $e(g)
            }
        });
        var o = t.mode === "time";
        if (!t.dateFormat && (t.enableTime || o)) {
            var l = T.defaultConfig.dateFormat || z.dateFormat;
            i.dateFormat = t.noCalendar || o ? "H:i" + (t.enableSeconds ? ":S" : "") : l + " H:i" + (t.enableSeconds ? ":S" : "")
        }
        if (t.altInput && (t.enableTime || o) && !t.altFormat) {
            var s = T.defaultConfig.altFormat || z.altFormat;
            i.altFormat = t.noCalendar || o ? "h:i" + (t.enableSeconds ? ":S K" : " K") : s + (" h:i" + (t.enableSeconds ? ":S" : "") + " K")
        }
        Object.defineProperty(e.config, "minDate", {
            get: function () {
                return e.config._minDate
            }, set: Ke("min")
        }), Object.defineProperty(e.config, "maxDate", {
            get: function () {
                return e.config._maxDate
            }, set: Ke("max")
        });
        var v = function (g) {
            return function (E) {
                e.config[g === "min" ? "_minTime" : "_maxTime"] = e.parseDate(E, "H:i:S")
            }
        };
        Object.defineProperty(e.config, "minTime", {
            get: function () {
                return e.config._minTime
            }, set: v("min")
        }), Object.defineProperty(e.config, "maxTime", {
            get: function () {
                return e.config._maxTime
            }, set: v("max")
        }), t.mode === "time" && (e.config.noCalendar = !0, e.config.enableTime = !0), Object.assign(e.config, i, t);
        for (var d = 0; d < n.length; d++) e.config[n[d]] = e.config[n[d]] === !0 || e.config[n[d]] === "true";
        De.filter(function (g) {
            return e.config[g] !== void 0
        }).forEach(function (g) {
            e.config[g] = Me(e.config[g] || []).map(D)
        }), e.isMobile = !e.config.disableMobile && !e.config.inline && e.config.mode === "single" && !e.config.disable.length && !e.config.enable && !e.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (var d = 0; d < e.config.plugins.length; d++) {
            var C = e.config.plugins[d](e) || {};
            for (var f in C) De.indexOf(f) > -1 ? e.config[f] = Me(C[f]).map(D).concat(e.config[f]) : typeof t[f] > "u" && (e.config[f] = C[f])
        }
        t.altInputClass || (e.config.altInputClass = Be().className + " " + e.config.altInputClass), S("onParseConfig")
    }

    function Be() {
        return e.config.wrap ? a.querySelector("[data-input]") : a
    }

    function Ue() {
        typeof e.config.locale != "object" && typeof T.l10ns[e.config.locale] > "u" && e.config.errorHandler(new Error("flatpickr: invalid locale " + e.config.locale)), e.l10n = A(A({}, T.l10ns.default), typeof e.config.locale == "object" ? e.config.locale : e.config.locale !== "default" ? T.l10ns[e.config.locale] : void 0), V.D = "(" + e.l10n.weekdays.shorthand.join("|") + ")", V.l = "(" + e.l10n.weekdays.longhand.join("|") + ")", V.M = "(" + e.l10n.months.shorthand.join("|") + ")", V.F = "(" + e.l10n.months.longhand.join("|") + ")", V.K = "(" + e.l10n.amPM[0] + "|" + e.l10n.amPM[1] + "|" + e.l10n.amPM[0].toLowerCase() + "|" + e.l10n.amPM[1].toLowerCase() + ")";
        var n = A(A({}, r), JSON.parse(JSON.stringify(a.dataset || {})));
        n.time_24hr === void 0 && T.defaultConfig.time_24hr === void 0 && (e.config.time_24hr = e.l10n.time_24hr), e.formatDate = Pe(e), e.parseDate = we({
            config: e.config,
            l10n: e.l10n
        })
    }

    function he(n) {
        if (typeof e.config.position == "function") return void e.config.position(e, n);
        if (e.calendarContainer !== void 0) {
            S("onPreCalendarPosition");
            var t = n || e._positionElement,
                i = Array.prototype.reduce.call(e.calendarContainer.children, function (Hn, Ln) {
                    return Hn + Ln.offsetHeight
                }, 0), o = e.calendarContainer.offsetWidth, l = e.config.position.split(" "), s = l[0],
                v = l.length > 1 ? l[1] : null, d = t.getBoundingClientRect(), C = window.innerHeight - d.bottom,
                f = s === "above" || s !== "below" && C < i && d.top > i,
                g = window.pageYOffset + d.top + (f ? -i - 2 : t.offsetHeight + 2);
            if (Y(e.calendarContainer, "arrowTop", !f), Y(e.calendarContainer, "arrowBottom", f), !e.config.inline) {
                var E = window.pageXOffset + d.left, U = !1, R = !1;
                v === "center" ? (E -= (o - d.width) / 2, U = !0) : v === "right" && (E -= o - d.width, R = !0), Y(e.calendarContainer, "arrowLeft", !U && !R), Y(e.calendarContainer, "arrowCenter", U), Y(e.calendarContainer, "arrowRight", R);
                var oe = window.document.body.offsetWidth - (window.pageXOffset + d.right),
                    ee = E + o > window.document.body.offsetWidth, _n = oe + o > window.document.body.offsetWidth;
                if (Y(e.calendarContainer, "rightMost", ee), !e.config.static) if (e.calendarContainer.style.top = g + "px", !ee) e.calendarContainer.style.left = E + "px", e.calendarContainer.style.right = "auto"; else if (!_n) e.calendarContainer.style.left = "auto", e.calendarContainer.style.right = oe + "px"; else {
                    var Oe = bn();
                    if (Oe === void 0) return;
                    var In = window.document.body.offsetWidth, On = Math.max(0, In / 2 - o / 2),
                        Yn = ".flatpickr-calendar.centerMost:before", An = ".flatpickr-calendar.centerMost:after",
                        Nn = Oe.cssRules.length, Pn = "{left:" + d.left + "px;right:auto;}";
                    Y(e.calendarContainer, "rightMost", !1), Y(e.calendarContainer, "centerMost", !0), Oe.insertRule(Yn + "," + An + Pn, Nn), e.calendarContainer.style.left = On + "px", e.calendarContainer.style.right = "auto"
                }
            }
        }
    }

    function bn() {
        for (var n = null, t = 0; t < document.styleSheets.length; t++) {
            var i = document.styleSheets[t];
            if (i.cssRules) {
                try {
                    i.cssRules
                } catch {
                    continue
                }
                n = i;
                break
            }
        }
        return n ?? Cn()
    }

    function Cn() {
        var n = document.createElement("style");
        return document.head.appendChild(n), n.sheet
    }

    function qe() {
        e.config.noCalendar || e.isMobile || (X(), ve(), fe())
    }

    function Te() {
        e._input.focus(), window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0 ? setTimeout(e.close, 0) : e.close()
    }

    function Je(n) {
        n.preventDefault(), n.stopPropagation();
        var t = function (g) {
            return g.classList && g.classList.contains("flatpickr-day") && !g.classList.contains("flatpickr-disabled") && !g.classList.contains("notAllowed")
        }, i = Ae(L(n), t);
        if (i !== void 0) {
            var o = i, l = e.latestSelectedDateObj = new Date(o.dateObj.getTime()),
                s = (l.getMonth() < e.currentMonth || l.getMonth() > e.currentMonth + e.config.showMonths - 1) && e.config.mode !== "range";
            if (e.selectedDateElem = o, e.config.mode === "single") e.selectedDates = [l]; else if (e.config.mode === "multiple") {
                var v = _e(l);
                v ? e.selectedDates.splice(parseInt(v), 1) : e.selectedDates.push(l)
            } else e.config.mode === "range" && (e.selectedDates.length === 2 && e.clear(!1, !1), e.latestSelectedDateObj = l, e.selectedDates.push(l), j(l, e.selectedDates[0], !0) !== 0 && e.selectedDates.sort(function (g, E) {
                return g.getTime() - E.getTime()
            }));
            if (_(), s) {
                var d = e.currentYear !== l.getFullYear();
                e.currentYear = l.getFullYear(), e.currentMonth = l.getMonth(), d && (S("onYearChange"), X()), S("onMonthChange")
            }
            if (ve(), fe(), J(), !s && e.config.mode !== "range" && e.config.showMonths === 1 ? $(o) : e.selectedDateElem !== void 0 && e.hourElement === void 0 && e.selectedDateElem && e.selectedDateElem.focus(), e.hourElement !== void 0 && e.hourElement !== void 0 && e.hourElement.focus(), e.config.closeOnSelect) {
                var C = e.config.mode === "single" && !e.config.enableTime,
                    f = e.config.mode === "range" && e.selectedDates.length === 2 && !e.config.enableTime;
                (C || f) && Te()
            }
            q()
        }
    }

    var pe = {
        locale: [Ue, Re],
        showMonths: [Le, w, je],
        minDate: [m],
        maxDate: [m],
        positionElement: [ze],
        clickOpens: [function () {
            e.config.clickOpens === !0 ? (M(e._input, "focus", e.open), M(e._input, "click", e.open)) : (e._input.removeEventListener("focus", e.open), e._input.removeEventListener("click", e.open))
        }]
    };

    function Mn(n, t) {
        if (n !== null && typeof n == "object") {
            Object.assign(e.config, n);
            for (var i in n) pe[i] !== void 0 && pe[i].forEach(function (o) {
                return o()
            })
        } else e.config[n] = t, pe[n] !== void 0 ? pe[n].forEach(function (o) {
            return o()
        }) : De.indexOf(n) > -1 && (e.config[n] = Me(t));
        e.redraw(), J(!0)
    }

    function Ve(n, t) {
        var i = [];
        if (n instanceof Array) i = n.map(function (o) {
            return e.parseDate(o, t)
        }); else if (n instanceof Date || typeof n == "number") i = [e.parseDate(n, t)]; else if (typeof n == "string") switch (e.config.mode) {
            case"single":
            case"time":
                i = [e.parseDate(n, t)];
                break;
            case"multiple":
                i = n.split(e.config.conjunction).map(function (o) {
                    return e.parseDate(o, t)
                });
                break;
            case"range":
                i = n.split(e.l10n.rangeSeparator).map(function (o) {
                    return e.parseDate(o, t)
                });
                break;
            default:
                break
        } else e.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(n)));
        e.selectedDates = e.config.allowInvalidPreload ? i : i.filter(function (o) {
            return o instanceof Date && G(o, !1)
        }), e.config.mode === "range" && e.selectedDates.sort(function (o, l) {
            return o.getTime() - l.getTime()
        })
    }

    function wn(n, t, i) {
        if (t === void 0 && (t = !1), i === void 0 && (i = e.config.dateFormat), n !== 0 && !n || n instanceof Array && n.length === 0) return e.clear(t);
        Ve(n, i), e.latestSelectedDateObj = e.selectedDates[e.selectedDates.length - 1], e.redraw(), m(void 0, t), I(), e.selectedDates.length === 0 && e.clear(!1), J(t), t && S("onChange")
    }

    function $e(n) {
        return n.slice().map(function (t) {
            return typeof t == "string" || typeof t == "number" || t instanceof Date ? e.parseDate(t, void 0, !0) : t && typeof t == "object" && t.from && t.to ? {
                from: e.parseDate(t.from, void 0),
                to: e.parseDate(t.to, void 0)
            } : t
        }).filter(function (t) {
            return t
        })
    }

    function yn() {
        e.selectedDates = [], e.now = e.parseDate(e.config.now) || new Date;
        var n = e.config.defaultDate || ((e.input.nodeName === "INPUT" || e.input.nodeName === "TEXTAREA") && e.input.placeholder && e.input.value === e.input.placeholder ? null : e.input.value);
        n && Ve(n, e.config.dateFormat), e._initialDate = e.selectedDates.length > 0 ? e.selectedDates[0] : e.config.minDate && e.config.minDate.getTime() > e.now.getTime() ? e.config.minDate : e.config.maxDate && e.config.maxDate.getTime() < e.now.getTime() ? e.config.maxDate : e.now, e.currentYear = e._initialDate.getFullYear(), e.currentMonth = e._initialDate.getMonth(), e.selectedDates.length > 0 && (e.latestSelectedDateObj = e.selectedDates[0]), e.config.minTime !== void 0 && (e.config.minTime = e.parseDate(e.config.minTime, "H:i")), e.config.maxTime !== void 0 && (e.config.maxTime = e.parseDate(e.config.maxTime, "H:i")), e.minDateHasTime = !!e.config.minDate && (e.config.minDate.getHours() > 0 || e.config.minDate.getMinutes() > 0 || e.config.minDate.getSeconds() > 0), e.maxDateHasTime = !!e.config.maxDate && (e.config.maxDate.getHours() > 0 || e.config.maxDate.getMinutes() > 0 || e.config.maxDate.getSeconds() > 0)
    }

    function xn() {
        if (e.input = Be(), !e.input) {
            e.config.errorHandler(new Error("Invalid input element specified"));
            return
        }
        e.input._type = e.input.type, e.input.type = "text", e.input.classList.add("flatpickr-input"), e._input = e.input, e.config.altInput && (e.altInput = y(e.input.nodeName, e.config.altInputClass), e._input = e.altInput, e.altInput.placeholder = e.input.placeholder, e.altInput.disabled = e.input.disabled, e.altInput.required = e.input.required, e.altInput.tabIndex = e.input.tabIndex, e.altInput.type = "text", e.input.setAttribute("type", "hidden"), !e.config.static && e.input.parentNode && e.input.parentNode.insertBefore(e.altInput, e.input.nextSibling)), e.config.allowInput || e._input.setAttribute("readonly", "readonly"), ze()
    }

    function ze() {
        e._positionElement = e.config.positionElement || e._input
    }

    function kn() {
        var n = e.config.enableTime ? e.config.noCalendar ? "time" : "datetime-local" : "date";
        e.mobileInput = y("input", e.input.className + " flatpickr-mobile"), e.mobileInput.tabIndex = 1, e.mobileInput.type = n, e.mobileInput.disabled = e.input.disabled, e.mobileInput.required = e.input.required, e.mobileInput.placeholder = e.input.placeholder, e.mobileFormatStr = n === "datetime-local" ? "Y-m-d\\TH:i:S" : n === "date" ? "Y-m-d" : "H:i:S", e.selectedDates.length > 0 && (e.mobileInput.defaultValue = e.mobileInput.value = e.formatDate(e.selectedDates[0], e.mobileFormatStr)), e.config.minDate && (e.mobileInput.min = e.formatDate(e.config.minDate, "Y-m-d")), e.config.maxDate && (e.mobileInput.max = e.formatDate(e.config.maxDate, "Y-m-d")), e.input.getAttribute("step") && (e.mobileInput.step = String(e.input.getAttribute("step"))), e.input.type = "hidden", e.altInput !== void 0 && (e.altInput.type = "hidden");
        try {
            e.input.parentNode && e.input.parentNode.insertBefore(e.mobileInput, e.input.nextSibling)
        } catch {
        }
        M(e.mobileInput, "change", function (t) {
            e.setDate(L(t).value, !1, e.mobileFormatStr), S("onChange"), S("onClose")
        })
    }

    function En(n) {
        if (e.isOpen === !0) return e.close();
        e.open(n)
    }

    function S(n, t) {
        if (e.config !== void 0) {
            var i = e.config[n];
            if (i !== void 0 && i.length > 0) for (var o = 0; i[o] && o < i.length; o++) i[o](e.selectedDates, e.input.value, e, t);
            n === "onChange" && (e.input.dispatchEvent(Fe("change")), e.input.dispatchEvent(Fe("input")))
        }
    }

    function Fe(n) {
        var t = document.createEvent("Event");
        return t.initEvent(n, !0, !0), t
    }

    function _e(n) {
        for (var t = 0; t < e.selectedDates.length; t++) {
            var i = e.selectedDates[t];
            if (i instanceof Date && j(i, n) === 0) return "" + t
        }
        return !1
    }

    function Sn(n) {
        return e.config.mode !== "range" || e.selectedDates.length < 2 ? !1 : j(n, e.selectedDates[0]) >= 0 && j(n, e.selectedDates[1]) <= 0
    }

    function ve() {
        e.config.noCalendar || e.isMobile || !e.monthNav || (e.yearElements.forEach(function (n, t) {
            var i = new Date(e.currentYear, e.currentMonth, 1);
            i.setMonth(e.currentMonth + t), e.config.showMonths > 1 || e.config.monthSelectorType === "static" ? e.monthElements[t].textContent = ue(i.getMonth(), e.config.shorthandCurrentMonth, e.l10n) + " " : e.monthsDropdownContainer.value = i.getMonth().toString(), n.value = i.getFullYear().toString()
        }), e._hidePrevMonthArrow = e.config.minDate !== void 0 && (e.currentYear === e.config.minDate.getFullYear() ? e.currentMonth <= e.config.minDate.getMonth() : e.currentYear < e.config.minDate.getFullYear()), e._hideNextMonthArrow = e.config.maxDate !== void 0 && (e.currentYear === e.config.maxDate.getFullYear() ? e.currentMonth + 1 > e.config.maxDate.getMonth() : e.currentYear > e.config.maxDate.getFullYear()))
    }

    function Ie(n) {
        var t = n || (e.config.altInput ? e.config.altFormat : e.config.dateFormat);
        return e.selectedDates.map(function (i) {
            return e.formatDate(i, t)
        }).filter(function (i, o, l) {
            return e.config.mode !== "range" || e.config.enableTime || l.indexOf(i) === o
        }).join(e.config.mode !== "range" ? e.config.conjunction : e.l10n.rangeSeparator)
    }

    function J(n) {
        n === void 0 && (n = !0), e.mobileInput !== void 0 && e.mobileFormatStr && (e.mobileInput.value = e.latestSelectedDateObj !== void 0 ? e.formatDate(e.latestSelectedDateObj, e.mobileFormatStr) : ""), e.input.value = Ie(e.config.dateFormat), e.altInput !== void 0 && (e.altInput.value = Ie(e.config.altFormat)), n !== !1 && S("onValueUpdate")
    }

    function Tn(n) {
        var t = L(n), i = e.prevMonthNav.contains(t), o = e.nextMonthNav.contains(t);
        i || o ? Ee(i ? -1 : 1) : e.yearElements.indexOf(t) >= 0 ? t.select() : t.classList.contains("arrowUp") ? e.changeYear(e.currentYear + 1) : t.classList.contains("arrowDown") && e.changeYear(e.currentYear - 1)
    }

    function Fn(n) {
        n.preventDefault();
        var t = n.type === "keydown", i = L(n), o = i;
        e.amPM !== void 0 && i === e.amPM && (e.amPM.textContent = e.l10n.amPM[H(e.amPM.textContent === e.l10n.amPM[0])]);
        var l = parseFloat(o.getAttribute("min")), s = parseFloat(o.getAttribute("max")),
            v = parseFloat(o.getAttribute("step")), d = parseInt(o.value, 10),
            C = n.delta || (t ? n.which === 38 ? 1 : -1 : 0), f = d + v * C;
        if (typeof o.value < "u" && o.value.length === 2) {
            var g = o === e.hourElement, E = o === e.minuteElement;
            f < l ? (f = s + f + H(!g) + (H(g) && H(!e.amPM)), E && x(void 0, -1, e.hourElement)) : f > s && (f = o === e.hourElement ? f - s - H(!e.amPM) : l, E && x(void 0, 1, e.hourElement)), e.amPM && g && (v === 1 ? f + d === 23 : Math.abs(f - d) > v) && (e.amPM.textContent = e.l10n.amPM[H(e.amPM.textContent === e.l10n.amPM[0])]), o.value = O(f)
        }
    }

    return u(), e
}

function te(a, r) {
    for (var e = Array.prototype.slice.call(a).filter(function (D) {
        return D instanceof HTMLElement
    }), c = [], u = 0; u < e.length; u++) {
        var h = e[u];
        try {
            if (h.getAttribute("data-fp-omit") !== null) continue;
            h._flatpickr !== void 0 && (h._flatpickr.destroy(), h._flatpickr = void 0), h._flatpickr = Rn(h, r || {}), c.push(h._flatpickr)
        } catch (D) {
            console.error(D)
        }
    }
    return c.length === 1 ? c[0] : c
}

typeof HTMLElement < "u" && typeof HTMLCollection < "u" && typeof NodeList < "u" && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (a) {
    return te(this, a)
}, HTMLElement.prototype.flatpickr = function (a) {
    return te([this], a)
});
var T = function (a, r) {
    return typeof a == "string" ? te(window.document.querySelectorAll(a), r) : a instanceof Node ? te([a], r) : te(a, r)
};
T.defaultConfig = {};
T.l10ns = {en: A({}, Ce), default: A({}, Ce)};
T.localize = function (a) {
    T.l10ns.default = A(A({}, T.l10ns.default), a)
};
T.setDefaults = function (a) {
    T.defaultConfig = A(A({}, T.defaultConfig), a)
};
T.parseDate = we({});
T.formatDate = Pe({});
T.compareDates = j;
typeof jQuery < "u" && typeof jQuery.fn < "u" && (jQuery.fn.flatpickr = function (a) {
    return te(this, a)
});
Date.prototype.fp_incr = function (a) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof a == "string" ? parseInt(a, 10) : a))
};
typeof window < "u" && (window.flatpickr = T);
var nn = T;

function He(a) {
    for (; a.firstChild;) a.removeChild(a.firstChild)
}

function Z(a) {
    try {
        if (typeof a.composedPath == "function") {
            var r = a.composedPath();
            return r[0]
        }
        return a.target
    } catch {
        return a.target
    }
}

var ce = function () {
    return ce = Object.assign || function (a) {
        for (var r, e = 1, c = arguments.length; e < c; e++) {
            r = arguments[e];
            for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && (a[u] = r[u])
        }
        return a
    }, ce.apply(this, arguments)
}, Wn = {
    confirmIcon: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='17' height='17' viewBox='0 0 17 17'> <g> </g> <path d='M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z' fill='#000000' /> </svg>",
    confirmText: "OK ",
    showAlways: !1,
    theme: "light"
};

function Kn(a) {
    var r = ce(ce({}, Wn), a), e, c = "flatpickr-confirm";
    return function (u) {
        return u.config.noCalendar || u.isMobile ? {} : ce({
            onKeyDown: function (h, D, w, p) {
                var F = Z(p),
                    k = !u.config.time_24hr && F === u.amPM || u.config.time_24hr && (u.config.enableSeconds && F === u.secondElement || !u.config.enableSeconds && F === u.minuteElement);
                u.config.enableTime && p.key === "Tab" && k ? (p.preventDefault(), e.focus()) : p.key === "Enter" && F === e && u.close()
            }, onReady: function () {
                e = u._createElement("div", c + " " + (r.showAlways ? "visible" : "") + " " + r.theme + "Theme", r.confirmText), e.tabIndex = -1, e.innerHTML += r.confirmIcon, e.addEventListener("click", u.close), u.calendarContainer.appendChild(e), u.loadedPlugins.push("confirmDate")
            }
        }, r.showAlways ? {} : {
            onChange: function (h, D) {
                var w = u.config.enableTime || u.config.mode === "multiple" || u.loadedPlugins.indexOf("monthSelect") !== -1,
                    p = u.calendarContainer.querySelector("." + c);
                if (p) {
                    if (D && !u.config.inline && w && p) return p.classList.add("visible");
                    p.classList.remove("visible")
                }
            }
        })
    }
}

var tn = Kn;
var an = function (a, r, e) {
    return e.months[r ? "shorthand" : "longhand"][a]
};
var ke = function () {
    return ke = Object.assign || function (a) {
        for (var r, e = 1, c = arguments.length; e < c; e++) {
            r = arguments[e];
            for (var u in r) Object.prototype.hasOwnProperty.call(r, u) && (a[u] = r[u])
        }
        return a
    }, ke.apply(this, arguments)
}, Bn = {shorthand: !1, dateFormat: "F Y", altFormat: "F Y", theme: "light"};

function Un(a) {
    var r = ke(ke({}, Bn), a);
    return function (e) {
        e.config.dateFormat = r.dateFormat, e.config.altFormat = r.altFormat;
        var c = {monthsContainer: null};

        function u() {
            if (e.rContainer) {
                He(e.rContainer);
                for (var m = 0; m < e.monthElements.length; m++) {
                    var b = e.monthElements[m];
                    b.parentNode && b.parentNode.removeChild(b)
                }
            }
        }

        function h() {
            e.rContainer && (c.monthsContainer = e._createElement("div", "flatpickr-monthSelect-months"), c.monthsContainer.tabIndex = -1, D(), e.rContainer.appendChild(c.monthsContainer), e.calendarContainer.classList.add("flatpickr-monthSelect-theme-" + r.theme))
        }

        function D() {
            if (c.monthsContainer) {
                He(c.monthsContainer);
                for (var m = document.createDocumentFragment(), b = 0; b < 12; b++) {
                    var x = e.createDay("flatpickr-monthSelect-month", new Date(e.currentYear, b), 0, b);
                    x.dateObj.getMonth() === new Date().getMonth() && x.dateObj.getFullYear() === new Date().getFullYear() && x.classList.add("today"), x.textContent = an(b, r.shorthand, e.l10n), x.addEventListener("click", k), m.appendChild(x)
                }
                c.monthsContainer.appendChild(m), e.config.minDate && e.currentYear === e.config.minDate.getFullYear() ? e.prevMonthNav.classList.add("flatpickr-disabled") : e.prevMonthNav.classList.remove("flatpickr-disabled"), e.config.maxDate && e.currentYear === e.config.maxDate.getFullYear() ? e.nextMonthNav.classList.add("flatpickr-disabled") : e.nextMonthNav.classList.remove("flatpickr-disabled")
            }
        }

        function w() {
            e._bind(e.prevMonthNav, "click", function (m) {
                m.preventDefault(), m.stopPropagation(), e.changeYear(e.currentYear - 1), F(), D()
            }), e._bind(e.nextMonthNav, "click", function (m) {
                m.preventDefault(), m.stopPropagation(), e.changeYear(e.currentYear + 1), F(), D()
            }), e._bind(c.monthsContainer, "mouseover", function (m) {
                e.config.mode === "range" && e.onMouseOver(Z(m), "flatpickr-monthSelect-month")
            })
        }

        function p() {
            if (e.rContainer && e.selectedDates.length) {
                for (var m = e.rContainer.querySelectorAll(".flatpickr-monthSelect-month.selected"), b = 0; b < m.length; b++) m[b].classList.remove("selected");
                var x = e.selectedDates[0].getMonth(),
                    N = e.rContainer.querySelector(".flatpickr-monthSelect-month:nth-child(" + (x + 1) + ")");
                N && N.classList.add("selected")
            }
        }

        function F() {
            var m = e.selectedDates[0];
            if (m && (m = new Date(m), m.setFullYear(e.currentYear), e.config.minDate && m < e.config.minDate && (m = e.config.minDate), e.config.maxDate && m > e.config.maxDate && (m = e.config.maxDate), e.currentYear = m.getFullYear()), e.currentYearElement.value = String(e.currentYear), e.rContainer) {
                var b = e.rContainer.querySelectorAll(".flatpickr-monthSelect-month");
                b.forEach(function (x) {
                    x.dateObj.setFullYear(e.currentYear), e.config.minDate && x.dateObj < e.config.minDate || e.config.maxDate && x.dateObj > e.config.maxDate ? x.classList.add("flatpickr-disabled") : x.classList.remove("flatpickr-disabled")
                })
            }
            p()
        }

        function k(m) {
            m.preventDefault(), m.stopPropagation();
            var b = Z(m);
            if (b instanceof Element && !b.classList.contains("flatpickr-disabled") && !b.classList.contains("notAllowed") && (_(b.dateObj), e.config.closeOnSelect)) {
                var x = e.config.mode === "single", N = e.config.mode === "range" && e.selectedDates.length === 2;
                (x || N) && e.close()
            }
        }

        function _(m) {
            var b = new Date(e.currentYear, m.getMonth(), m.getDate()), x = [];
            switch (e.config.mode) {
                case"single":
                    x = [b];
                    break;
                case"multiple":
                    x.push(b);
                    break;
                case"range":
                    e.selectedDates.length === 2 ? x = [b] : (x = e.selectedDates.concat([b]), x.sort(function (N, W) {
                        return N.getTime() - W.getTime()
                    }));
                    break
            }
            e.setDate(x, !0), p()
        }

        var I = {37: -1, 39: 1, 40: 3, 38: -3};

        function P(m, b, x, N) {
            var W = I[N.keyCode] !== void 0;
            if (!(!W && N.keyCode !== 13) && !(!e.rContainer || !c.monthsContainer)) {
                var $ = e.rContainer.querySelector(".flatpickr-monthSelect-month.selected"),
                    B = Array.prototype.indexOf.call(c.monthsContainer.children, document.activeElement);
                if (B === -1) {
                    var Q = $ || c.monthsContainer.firstElementChild;
                    Q.focus(), B = Q.$i
                }
                W ? c.monthsContainer.children[(12 + B + I[N.keyCode]) % 12].focus() : N.keyCode === 13 && c.monthsContainer.contains(document.activeElement) && _(document.activeElement.dateObj)
            }
        }

        function K() {
            var m;
            ((m = e.config) === null || m === void 0 ? void 0 : m.mode) === "range" && e.selectedDates.length === 1 && e.clear(!1), e.selectedDates.length || D()
        }

        function M() {
            r._stubbedCurrentMonth = e._initialDate.getMonth(), e._initialDate.setMonth(r._stubbedCurrentMonth), e.currentMonth = r._stubbedCurrentMonth
        }

        function q() {
            r._stubbedCurrentMonth && (e._initialDate.setMonth(r._stubbedCurrentMonth), e.currentMonth = r._stubbedCurrentMonth, delete r._stubbedCurrentMonth)
        }

        function ae() {
            if (c.monthsContainer !== null) for (var m = c.monthsContainer.querySelectorAll(".flatpickr-monthSelect-month"), b = 0; b < m.length; b++) m[b].removeEventListener("click", k)
        }

        return {
            onParseConfig: function () {
                e.config.enableTime = !1
            }, onValueUpdate: p, onKeyDown: P, onReady: [M, u, h, w, p, function () {
                e.config.onClose.push(K), e.loadedPlugins.push("monthSelect")
            }], onDestroy: [q, ae, function () {
                e.config.onClose = e.config.onClose.filter(function (m) {
                    return m !== K
                })
            }]
        }
    }
}

var rn = Un;

function qn() {
    return function (a) {
        function r(D) {
            var w = Z(D);
            if (w.classList.contains("flatpickr-day")) for (var p = a.days.childNodes, F = w.$i, k = F / 7, _ = p[7 * Math.floor(k)].dateObj, I = p[7 * Math.ceil(k + .01) - 1].dateObj, P = p.length; P--;) {
                var K = p[P], M = K.dateObj;
                M > I || M < _ ? K.classList.remove("inRange") : K.classList.add("inRange")
            }
        }

        function e() {
            var D = a.latestSelectedDateObj;
            D !== void 0 && D.getMonth() === a.currentMonth && D.getFullYear() === a.currentYear && (a.weekStartDay = a.days.childNodes[7 * Math.floor(a.selectedDateElem.$i / 7)].dateObj, a.weekEndDay = a.days.childNodes[7 * Math.ceil(a.selectedDateElem.$i / 7 + .01) - 1].dateObj);
            for (var w = a.days.childNodes, p = w.length; p--;) {
                var F = w[p].dateObj;
                F >= a.weekStartDay && F <= a.weekEndDay && w[p].classList.add("week", "selected")
            }
        }

        function c() {
            for (var D = a.days.childNodes, w = D.length; w--;) D[w].classList.remove("inRange")
        }

        function u() {
            a.daysContainer !== void 0 && a.daysContainer.addEventListener("mouseover", r)
        }

        function h() {
            a.daysContainer !== void 0 && a.daysContainer.removeEventListener("mouseover", r)
        }

        return {
            onValueUpdate: e, onMonthChange: e, onYearChange: e, onOpen: e, onClose: c, onParseConfig: function () {
                a.config.mode = "single", a.config.enableTime = !1, a.config.dateFormat = a.config.dateFormat ? a.config.dateFormat : "\\W\\e\\e\\k #W, Y", a.config.altFormat = a.config.altFormat ? a.config.altFormat : "\\W\\e\\e\\k #W, Y"
            }, onReady: [u, e, function () {
                a.loadedPlugins.push("weekSelect")
            }], onDestroy: h
        }
    }
}

var on = qn;

function Jn(a) {
    return {
        state: a.state,
        mode: "light",
        attribs: a.attribs ?? {},
        packageConfig: a.packageConfig ?? {},
        fp: null,
        get darkStatus() {
            return window.matchMedia("(prefers-color-scheme: dark)").matches
        },
        get getMode() {
            return localStorage.getItem("theme") ? localStorage.getItem("theme") : (this.mode = this.darkStatus ? "dark" : "light", this.mode)
        },
        get darkLightAssetUrl() {
            return this.darkStatus ? this.attribs.darkThemeAsset : this.attribs.lightThemeAsset
        },
        init: function () {
            this.mode = this.darkStatus ? "dark" : "light";
            let r = {
                mode: this.attribs.mode,
                time_24hr: !0,
                altFormat: "F j, Y",
                disableMobile: !0,
                initialDate: this.state,
                allowInvalidPreload: !1,
                static: !1,
                defaultDate: this.state, ...this.packageConfig,
                plugins: [new tn({confirmText: "OK", showAlways: !1, theme: this.mode})]
            };
            if (this.getMode === "dark") {
                let e = document.querySelector("#pickr-theme");
                console.log(e), e && (e.href = this.attribs.darkThemeAsset)
            }
            this.attribs.monthSelect ? r.plugins.push(new rn({
                shorthand: !1,
                dateFormat: a.packageConfig.dateFormat ?? "F Y",
                altInput: a.packageConfig.altInput ?? !0,
                theme: this.mode
            })) : this.attribs.weekSelect && r.plugins.push(new on({})), this.fp = nn(this.$refs.picker, r), this.fp.parseDate(this.state, this.packageConfig.dateFormat), window.addEventListener("theme-changed", e => {
                this.mode = e.detail;
                let c;
                this.mode === "dark" ? c = this.attribs.darkThemeAsset : c = this.attribs.themeAsset, document.querySelector("#pickr-theme").href = c
            })
        }
    }
}

export {Jn as default};
