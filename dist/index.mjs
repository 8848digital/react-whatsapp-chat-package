import _e, { useContext as Wt, createContext as $t, useRef as ie, useMemo as fe, useEffect as ne, forwardRef as On, useImperativeHandle as Nn, useState as K, useCallback as Fe } from "react";
import { WhatsappLogo as Cn, User as vn, X as An, Paperclip as kn, FileText as Pn, PaperPlaneTilt as Mn, ArrowSquareOut as Ln, Check as Un, Checks as Dn, Warning as Fn, Clock as In, Eye as Bn } from "@phosphor-icons/react";
import { useStore as Wn, createStore as $n, create as qn } from "zustand";
import './index.css';var Le = { exports: {} }, xe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function zn() {
  if (yt) return xe;
  yt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function s(n, r, o) {
    var a = null;
    if (o !== void 0 && (a = "" + o), r.key !== void 0 && (a = "" + r.key), "key" in r) {
      o = {};
      for (var i in r)
        i !== "key" && (o[i] = r[i]);
    } else o = r;
    return r = o.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: r !== void 0 ? r : null,
      props: o
    };
  }
  return xe.Fragment = t, xe.jsx = s, xe.jsxs = s, xe;
}
var Re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wt;
function Hn() {
  return wt || (wt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === Z ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case y:
          return "Fragment";
        case j:
          return "Profiler";
        case S:
          return "StrictMode";
        case v:
          return "Suspense";
        case N:
          return "SuspenseList";
        case J:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case m:
            return "Portal";
          case C:
            return g.displayName || "Context";
          case O:
            return (g._context.displayName || "Context") + ".Consumer";
          case k:
            var _ = g.render;
            return g = g.displayName, g || (g = _.displayName || _.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case H:
            return _ = g.displayName || null, _ !== null ? _ : e(g.type) || "Memo";
          case W:
            _ = g._payload, g = g._init;
            try {
              return e(g(_));
            } catch {
            }
        }
      return null;
    }
    function t(g) {
      return "" + g;
    }
    function s(g) {
      try {
        t(g);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var A = _.error, P = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return A.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(g);
      }
    }
    function n(g) {
      if (g === y) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === W)
        return "<...>";
      try {
        var _ = e(g);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var g = B.A;
      return g === null ? null : g.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(g) {
      if (V.call(g, "key")) {
        var _ = Object.getOwnPropertyDescriptor(g, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function i(g, _) {
      function A() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: A,
        configurable: !0
      });
    }
    function h() {
      var g = e(this.type);
      return re[g] || (re[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function p(g, _, A, P, ce, be) {
      var b = A.ref;
      return g = {
        $$typeof: l,
        type: g,
        key: _,
        props: A,
        _owner: P
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: be
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function u(g, _, A, P, ce, be) {
      var b = _.children;
      if (b !== void 0)
        if (P)
          if (U(b)) {
            for (P = 0; P < b.length; P++)
              d(b[P]);
            Object.freeze && Object.freeze(b);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(b);
      if (V.call(_, "key")) {
        b = e(g);
        var R = Object.keys(_).filter(function(q) {
          return q !== "key";
        });
        P = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", ae[b + P] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          b,
          R,
          b
        ), ae[b + P] = !0);
      }
      if (b = null, A !== void 0 && (s(A), b = "" + A), a(_) && (s(_.key), b = "" + _.key), "key" in _) {
        A = {};
        for (var T in _)
          T !== "key" && (A[T] = _[T]);
      } else A = _;
      return b && i(
        A,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), p(
        g,
        b,
        A,
        r(),
        ce,
        be
      );
    }
    function d(g) {
      w(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === W && (g._payload.status === "fulfilled" ? w(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
    }
    function w(g) {
      return typeof g == "object" && g !== null && g.$$typeof === l;
    }
    var x = _e, l = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), C = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), B = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, U = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(g) {
        return g();
      }
    };
    var F, re = {}, $ = x.react_stack_bottom_frame.bind(
      x,
      o
    )(), oe = Q(n(o)), ae = {};
    Re.Fragment = y, Re.jsx = function(g, _, A) {
      var P = 1e4 > B.recentlyCreatedOwnerStacks++;
      return u(
        g,
        _,
        A,
        !1,
        P ? Error("react-stack-top-frame") : $,
        P ? Q(n(g)) : oe
      );
    }, Re.jsxs = function(g, _, A) {
      var P = 1e4 > B.recentlyCreatedOwnerStacks++;
      return u(
        g,
        _,
        A,
        !0,
        P ? Error("react-stack-top-frame") : $,
        P ? Q(n(g)) : oe
      );
    };
  })()), Re;
}
var bt;
function Jn() {
  return bt || (bt = 1, process.env.NODE_ENV === "production" ? Le.exports = zn() : Le.exports = Hn()), Le.exports;
}
var c = Jn();
const Vn = (e) => /* @__PURE__ */ c.jsx(vn, { ...e }), Yn = (e) => /* @__PURE__ */ c.jsx(kn, { ...e }), Kn = (e) => /* @__PURE__ */ c.jsx(Mn, { ...e }), at = (e) => /* @__PURE__ */ c.jsx(An, { ...e }), Xn = (e) => /* @__PURE__ */ c.jsx(Bn, { ...e }), xt = (e) => /* @__PURE__ */ c.jsx(Dn, { ...e }), Rt = (e) => /* @__PURE__ */ c.jsx(Un, { ...e }), Gn = (e) => /* @__PURE__ */ c.jsx(Ln, { ...e }), qt = (e) => /* @__PURE__ */ c.jsx(Pn, { ...e }), Zn = (e) => /* @__PURE__ */ c.jsx(In, { ...e }), Qn = (e) => /* @__PURE__ */ c.jsx(Fn, { ...e }), zt = (e) => /* @__PURE__ */ c.jsx(Cn, { ...e }), Ht = (e) => {
  if (!e) return "";
  try {
    return new Date(e).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}, Jt = (e, t) => {
  if (t !== 1) return null;
  const s = (n) => ({
    size: 14,
    style: { color: n, marginLeft: "4px" }
  });
  switch (e) {
    case 5:
      return /* @__PURE__ */ c.jsx(Zn, { ...s("#999") });
    case 2:
      return /* @__PURE__ */ c.jsx(Qn, { ...s("#ff4444") });
    case 1:
      return /* @__PURE__ */ c.jsx(Rt, { ...s("#999") });
    case 3:
      return /* @__PURE__ */ c.jsx(xt, { ...s("#999"), weight: "bold" });
    case 4:
      return /* @__PURE__ */ c.jsx(xt, { ...s("#53bdeb"), weight: "bold" });
    default:
      return /* @__PURE__ */ c.jsx(Rt, { ...s("#999") });
  }
}, es = (e) => {
  if (!e) return null;
  const t = /(https?:\/\/[^\s]+|(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?)/g, s = [];
  let n = 0, r, o = 0;
  for (; (r = t.exec(e)) !== null; ) {
    r.index > n && s.push(e.substring(n, r.index));
    const a = r[0], i = a.startsWith("http://") || a.startsWith("https://") ? a : `https://${a}`;
    s.push(
      /* @__PURE__ */ c.jsx(
        "a",
        {
          href: i,
          target: "_blank",
          rel: "noopener noreferrer",
          style: { color: "#0066cc", textDecoration: "underline" },
          children: a
        },
        `link-${o++}`
      )
    ), n = r.index + r[0].length;
  }
  return n < e.length && s.push(e.substring(n)), s.length > 0 ? /* @__PURE__ */ c.jsx(_e.Fragment, { children: s }) : e;
};
function ts(e) {
  if (!e) return;
  const t = e.toLowerCase();
  if (t === "success" || t === "sent") return 1;
  if (t === "failed") return 2;
  if (t === "delivered") return 3;
  if (t === "read") return 4;
  const s = parseInt(e, 10);
  if (!isNaN(s) && s >= 1 && s <= 5) return s;
}
function it(e) {
  var u;
  if (!(e != null && e.name)) return null;
  const s = String(e.type ?? "").trim().toLowerCase() === "outgoing" || e.is_outbound === 1 || e.is_outbound === "1";
  let n = ts(e.status ?? void 0);
  n === void 0 && s && (n = 5);
  const r = e.message_type === "Template", o = e.message != null ? String(e.message) : void 0, a = o != null && o.trim() !== "" && o !== "Template message", i = r && !a && e.template ? e.template : o ?? e.template ?? "", h = (u = e.links) != null && u.length ? e.links.filter((d) => !!(d != null && d.button_label && (d != null && d.link))).map((d) => ({ button_label: d.button_label, link: d.link })) : void 0, p = e.from_name || e.profile_name;
  return {
    name: e.name,
    message: i,
    sender: p || (s ? "You" : "Customer"),
    creation: e.creation ?? (/* @__PURE__ */ new Date()).toISOString(),
    is_outbound: s ? 1 : 0,
    attach: e.attach ?? void 0,
    content_type: e.content_type ?? void 0,
    status: n,
    header: r ? e.header ?? void 0 : void 0,
    footer: r ? e.footer ?? void 0 : void 0,
    template_links: h != null && h.length ? h : void 0,
    from: e.from || e.sender || null,
    reference_name: e.reference_name || e.customer || null,
    message_type: e.message_type,
    header_type: r ? e.header_type ?? void 0 : void 0,
    sample: r ? e.sample ?? void 0 : void 0
  };
}
const Ue = qn((e) => ({
  incomingData: [],
  setIncomingData: (t) => e({ incomingData: t }),
  handleIncomingMessage: (t) => e((s) => {
    if (t.is_outbound === 1) return s;
    const n = [...s.incomingData], r = t.name, o = t.from || t.sender || "", a = t.reference_name || "";
    if (t.status === 4) {
      const u = n.findIndex((d) => {
        var w;
        return (w = d.names) == null ? void 0 : w.includes(r);
      });
      if (u !== -1) {
        const d = { ...n[u] };
        return d.names = d.names.filter((w) => w !== r), d.counts = Math.max(0, (d.counts || 0) - 1), d.counts === 0 ? n.splice(u, 1) : n[u] = d, { incomingData: n };
      }
      return s;
    }
    if (n.some((u) => {
      var d;
      return (d = u.names) == null ? void 0 : d.includes(r);
    })) return s;
    const p = n.findIndex(
      (u) => u.type === "whatsapp" && (o && u.from === o || a && u.customer === a)
    );
    if (p !== -1)
      return n[p] = {
        ...n[p],
        counts: (n[p].counts || 0) + 1,
        names: [...n[p].names || [], r]
      }, { incomingData: n };
    {
      const u = {
        from: o,
        counts: 1,
        received_at: t.creation || (/* @__PURE__ */ new Date()).toISOString(),
        names: [r],
        customer: a,
        type: "whatsapp",
        full_name: t.from_name || "New Message",
        data: []
      };
      return { incomingData: [...n, u] };
    }
  }),
  clearContact: (t, s) => e((n) => ({ incomingData: n.incomingData.filter((o) => o.type !== "whatsapp" ? !0 : !(t && o.from === t || s && o.customer === s)) }))
})), ns = () => $n((e) => ({
  messages: [],
  isLoading: !1,
  error: null,
  setMessages: (t) => e({ messages: t }),
  appendMessage: (t) => e((s) => ({ messages: [...s.messages, t] })),
  updateMessageStatus: (t, s) => e((n) => ({
    messages: n.messages.map((r) => r.name === t ? { ...r, status: s } : r)
  })),
  replaceMessage: (t, s) => e((n) => ({
    messages: n.messages.map((r) => r.name === t ? s : r)
  })),
  clearMessages: () => e({ messages: [], error: null }),
  setLoading: (t) => e({ isLoading: t }),
  setError: (t) => e({ error: t })
})), Vt = $t(void 0), Yt = $t(void 0), Kt = ({
  apiAdapter: e,
  config: t,
  socketAdapter: s,
  socketPayload: n,
  children: r
}) => {
  const [o] = _e.useState(() => ns());
  return /* @__PURE__ */ c.jsx(Vt.Provider, { value: { apiAdapter: e, config: t, socketAdapter: s, socketPayload: n }, children: /* @__PURE__ */ c.jsx(Yt.Provider, { value: o, children: r }) });
}, Ee = () => {
  const e = Wt(Vt);
  if (!e) throw new Error("Missing WhatsappChatProvider");
  return e;
}, Xt = () => {
  const e = Wt(Yt);
  if (!e) throw new Error("Missing WhatsappChatProvider");
  return e;
}, ue = (e) => {
  const t = Xt();
  return Wn(t, e);
};
function ss(e) {
  return e.startsWith("/") ? e.slice(1) : e;
}
const Gt = ({
  header: e,
  message: t,
  footer: s,
  template_links: n,
  creation: r,
  is_outbound: o,
  status: a,
  header_type: i,
  sample: h,
  isPreview: p = !1
}) => {
  const { config: u } = Ee(), d = u.apiBaseUrl || "", w = h ? `${d}/${ss(h)}` : void 0, x = i === "IMAGE" && w, l = i === "DOCUMENT" && w, m = !i || i === "TEXT";
  return /* @__PURE__ */ c.jsx("div", { className: "whatsapp-template-message-card", children: /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-template-card-inner", children: [
    x && /* @__PURE__ */ c.jsx(
      "a",
      {
        href: w,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "whatsapp-template-card-header-media whatsapp-template-card-header-image",
        title: "Open image in new tab",
        children: /* @__PURE__ */ c.jsx(
          "img",
          {
            src: w,
            alt: "Template header",
            className: "whatsapp-template-card-image"
          }
        )
      }
    ),
    l && /* @__PURE__ */ c.jsxs(
      "a",
      {
        href: w,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "whatsapp-template-card-header-media whatsapp-template-card-header-document",
        title: "Open document in new tab",
        children: [
          /* @__PURE__ */ c.jsx(qt, { size: 24, color: "#e74c3c" }),
          /* @__PURE__ */ c.jsx("span", { children: (h == null ? void 0 : h.split("/").pop()) || "Untitled" })
        ]
      }
    ),
    m && e && /* @__PURE__ */ c.jsx("h4", { className: "whatsapp-template-card-header", children: e }),
    /* @__PURE__ */ c.jsx("p", { className: "whatsapp-template-card-body", children: t }),
    s && /* @__PURE__ */ c.jsx("p", { className: "whatsapp-template-card-footer", children: s }),
    n && n.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "whatsapp-template-card-buttons", children: n.map((y, S) => /* @__PURE__ */ c.jsxs("a", { href: y.link, target: "_blank", rel: "noopener noreferrer", className: "whatsapp-template-card-button", children: [
      /* @__PURE__ */ c.jsx(Gn, { size: 16, color: "currentColor" }),
      /* @__PURE__ */ c.jsx("span", { children: y.button_label })
    ] }, S)) }),
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-template-card-meta", children: [
      /* @__PURE__ */ c.jsx("span", { children: Ht(r) }),
      !p && o === 1 && Jt(a, o)
    ] })
  ] }) });
}, Y = ({ width: e, height: t, className: s, style: n }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: `whatsapp-skeleton ${s || ""}`,
    style: {
      width: e,
      height: t,
      ...n
    }
  }
), rs = () => {
  const e = { marginBottom: 8 };
  return /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-message-list", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx(Y, { width: "140px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(Y, { width: "60px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble sent", style: e, children: [
      /* @__PURE__ */ c.jsx(Y, { width: "100px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(Y, { width: "55px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx(Y, { width: "180px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(Y, { width: "60px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble sent", style: e, children: [
      /* @__PURE__ */ c.jsx(Y, { width: "120px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(Y, { width: "55px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx(Y, { width: "90px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(Y, { width: "60px", height: "0.75rem" })
    ] })
  ] });
};
function os(e, t) {
  if (e == null || e === "") return t ? 5 : void 0;
  if (typeof e == "number" && e >= 1 && e <= 5) return e;
  if (typeof e == "string") {
    const s = e.toLowerCase();
    if (s === "success" || s === "sent") return 1;
    if (s === "failed") return 2;
    if (s === "delivered") return 3;
    if (s === "read") return 4;
    if (s === "pending") return 5;
    const n = parseInt(e, 10);
    if (!isNaN(n) && n >= 1 && n <= 5) return n;
  }
  return t ? 5 : void 0;
}
const as = ({
  messages: e,
  isLoading: t = !1,
  error: s = null,
  activity: n,
  icon: r,
  showIcon: o = !1,
  enableScroll: a = !0
}) => {
  const { config: i } = Ee(), h = i.apiBaseUrl || "", p = ie(null), u = fe(() => {
    var d;
    if (n) {
      const w = n.creation || (n.date && n.time ? `${n.date} ${n.time}` : (/* @__PURE__ */ new Date()).toISOString()), x = n.type === "Outgoing" || n.is_outbound === 1, l = ((d = n.links) == null ? void 0 : d.map((m) => ({
        button_label: m.button_label ?? "",
        link: m.link ?? m.website_url ?? ""
      }))) ?? void 0;
      return [
        {
          name: n.name || `activity-${w}`,
          message: n.message || "",
          sender: n.type === "Outgoing" ? "You" : "Customer",
          creation: w,
          is_outbound: x ? 1 : 0,
          attach: n.attach,
          content_type: n.content_type,
          status: os(n.status, x),
          message_type: n.message_type,
          header: n.header,
          footer: n.footer,
          template_links: l != null && l.filter((m) => m.link || m.button_label).length ? l : void 0,
          header_type: n.header_type,
          sample: n.sample
        }
      ];
    }
    return e || [];
  }, [n, e]);
  return ne(() => {
    var d;
    a && ((d = p.current) == null || d.scrollIntoView({ behavior: "smooth" }));
  }, [u, a]), t ? /* @__PURE__ */ c.jsx(rs, {}) : s ? /* @__PURE__ */ c.jsx("div", { className: "whatsapp-message-list", style: { textAlign: "center", color: "#c53030", padding: "20px" }, children: s }) : /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-message-list", children: [
    u.length === 0 && /* @__PURE__ */ c.jsx("div", { style: { textAlign: "center", color: "#888", padding: "20px" }, children: "No messages yet. Start the conversation!" }),
    u.map((d, w) => {
      const x = d, l = x.attach, m = x.content_type;
      return x.message_type === "Template" ? /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: `message-bubble ${d.is_outbound ? "sent" : "received"} message-bubble--template`,
          children: [
            o && r && /* @__PURE__ */ c.jsx("div", { className: "message-icon-wrapper", children: r }),
            /* @__PURE__ */ c.jsx(
              Gt,
              {
                header: x.header,
                message: d.message,
                footer: x.footer,
                template_links: x.template_links,
                creation: d.creation,
                is_outbound: d.is_outbound,
                status: d.status,
                header_type: x.header_type,
                sample: x.sample
              }
            )
          ]
        },
        `${d.name}-${w}`
      ) : /* @__PURE__ */ c.jsxs("div", { className: `message-bubble ${d.is_outbound ? "sent" : "received"}`, children: [
        o && r && /* @__PURE__ */ c.jsx("div", { className: "message-icon-wrapper", children: r }),
        /* @__PURE__ */ c.jsxs("div", { className: "message-content", children: [
          es(d.message) || d.message,
          l && /* @__PURE__ */ c.jsx("div", { className: "message-attachment", children: m === "image" ? /* @__PURE__ */ c.jsx(
            "img",
            {
              src: `${h}/${l}`,
              alt: "attachment",
              className: "message-attachment-image",
              style: { maxWidth: "200px", borderRadius: "4px" }
            }
          ) : /* @__PURE__ */ c.jsx(
            "a",
            {
              href: `${h}/${l}`,
              target: "_blank",
              rel: "noreferrer",
              className: "message-attachment-link",
              title: "View attachment",
              children: l.split("/").pop() || "Attachment"
            }
          ) }),
          /* @__PURE__ */ c.jsxs("div", { className: "message-time", children: [
            Ht(d.creation),
            Jt(d.status, d.is_outbound)
          ] })
        ] })
      ] }, `${d.name}-${w}`);
    }),
    /* @__PURE__ */ c.jsx("div", { ref: p })
  ] });
}, Zt = On(({ onSelect: e, multiple: t = !0, accept: s, maxFileSize: n, className: r = "" }, o) => {
  const a = ie(null);
  Nn(o, () => ({
    click: () => {
      var h;
      (h = a.current) == null || h.click();
    }
  }));
  const i = (h) => {
    const p = h.target.files;
    if (p && e) {
      const u = Array.from(p);
      if (n) {
        const d = u.filter((w) => w.size <= n);
        e(d);
      } else
        e(u);
    }
    a.current && (a.current.value = "");
  };
  return /* @__PURE__ */ c.jsx(
    "input",
    {
      ref: a,
      type: "file",
      multiple: t,
      accept: s,
      onChange: i,
      className: r,
      style: { display: "none" }
    }
  );
});
Zt.displayName = "FileUpload";
const Te = ({
  open: e,
  onClose: t,
  header: s,
  children: n,
  width: r = "600px",
  className: o = ""
}) => (ne(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
  document.body.style.overflow = "unset";
}), [e]), e ? /* @__PURE__ */ c.jsx("div", { className: `raw-modal-overlay ${o}`, onClick: t, children: /* @__PURE__ */ c.jsxs(
  "div",
  {
    className: "raw-modal-container",
    style: { maxWidth: r },
    onClick: (a) => a.stopPropagation(),
    children: [
      /* @__PURE__ */ c.jsxs("div", { className: "raw-modal-header", children: [
        /* @__PURE__ */ c.jsx("div", { className: "raw-modal-title", children: s }),
        /* @__PURE__ */ c.jsx("button", { className: "raw-modal-close", onClick: t, children: /* @__PURE__ */ c.jsx(at, { size: 20 }) })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "raw-modal-body", children: n })
    ]
  }
) }) : null), is = ({
  selectedTemplateName: e,
  templateText: t,
  template: s,
  onClearTemplate: n
}) => {
  var x;
  const [r, o] = K(!1), a = () => {
    n(), o(!1);
  }, i = e.split("-")[0], h = (s == null ? void 0 : s.template) ?? t ?? "", p = (s == null ? void 0 : s.header) ?? null, u = (s == null ? void 0 : s.footer) ?? null, d = ((x = s == null ? void 0 : s.links) == null ? void 0 : x.map((l) => ({
    button_label: l.button_label ?? "",
    link: l.link ?? ""
  }))) || [], w = (s == null ? void 0 : s.modified) || (s == null ? void 0 : s.creation) || (/* @__PURE__ */ new Date()).toISOString();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-template-chip", children: [
      /* @__PURE__ */ c.jsxs("span", { children: [
        "Template: ",
        i
      ] }),
      /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => o(!0), className: "whatsapp-template-chip-preview", title: "Preview template", children: /* @__PURE__ */ c.jsx(Xn, { size: 20, color: "currentColor" }) }),
      /* @__PURE__ */ c.jsx("button", { type: "button", onClick: a, className: "whatsapp-template-chip-clear", title: "Send as normal message instead", children: /* @__PURE__ */ c.jsx(at, { size: 20, color: "currentColor" }) })
    ] }),
    /* @__PURE__ */ c.jsx(
      Te,
      {
        open: r,
        onClose: () => o(!1),
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Template Preview" }),
        children: /* @__PURE__ */ c.jsx("div", { style: { padding: "20px 0" }, children: s ? /* @__PURE__ */ c.jsx(
          Gt,
          {
            header: p,
            message: h,
            footer: u,
            template_links: d,
            creation: w,
            is_outbound: 1,
            status: void 0,
            isPreview: !0
          }
        ) : /* @__PURE__ */ c.jsx("pre", { className: "whatsapp-template-preview-content", children: t ?? "" }) })
      }
    )
  ] });
}, cs = ({ attachedFile: e, onFileRemove: t }) => /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-attachment-preview", children: [
  e.preview && /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsx("img", { src: e.preview, alt: "Preview", className: "whatsapp-attachment-image-thumb" }) }),
  /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-attachment-info", children: [
    /* @__PURE__ */ c.jsx("span", { className: "whatsapp-attachment-name", children: e.file.name }),
    t && /* @__PURE__ */ c.jsx("button", { onClick: t, type: "button", className: "whatsapp-attachment-remove", title: "Remove attachment", children: /* @__PURE__ */ c.jsx(at, { size: 14, color: "#666" }) })
  ] })
] }), St = () => /* @__PURE__ */ c.jsx("div", { className: "whatsapp-spinner" }), Qt = ({
  onSend: e,
  isLoading: t,
  isUploading: s = !1,
  isSending: n = !1,
  onTemplateClick: r,
  templateText: o,
  selectedTemplateName: a,
  selectedTemplate: i,
  onClearTemplate: h,
  attachedFile: p,
  onFileRemove: u,
  onFileSelect: d
}) => {
  const [w, x] = K(""), l = ie(null), m = ie(null), y = !!a;
  _e.useEffect(() => {
    var v;
    y && ((v = l.current) == null || v.focus());
  }, [y]), _e.useEffect(() => {
    o !== void 0 && o !== "" ? x(o) : (o === void 0 || o === "") && x("");
  }, [o]);
  const S = () => {
    (w.trim() || p || y) && (e(w, p == null ? void 0 : p.fileUrl, p == null ? void 0 : p.contentType), y || (x(""), u && u()));
  }, j = () => {
    var v;
    (v = m.current) == null || v.click();
  }, O = (v) => {
    const N = v == null ? void 0 : v[0];
    N && d && d(N);
  }, C = (v) => {
    v.key === "Enter" && !t && S();
  }, k = (v) => {
    const N = v.target.value;
    x(N), !N.trim() && a && h && h();
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: l,
      className: "whatsapp-input-container",
      onKeyDown: C,
      tabIndex: y ? 0 : void 0,
      style: { outline: "none" },
      children: [
        /* @__PURE__ */ c.jsx(Zt, { ref: m, onSelect: O, multiple: !1, accept: "image/*,video/*,audio/*,.pdf,.doc,.docx" }),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: j,
            type: "button",
            className: "whatsapp-input-btn",
            disabled: t,
            title: s ? "Uploading..." : "Attach File",
            style: {
              padding: "0.5rem",
              background: "transparent",
              border: "none",
              cursor: t ? "not-allowed" : "pointer",
              color: "#175353",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: s ? /* @__PURE__ */ c.jsx(St, {}) : /* @__PURE__ */ c.jsx(Yn, { size: 20, color: "#175353" })
          }
        ),
        r && /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: r,
            className: "whatsapp-template-btn",
            type: "button",
            disabled: t,
            title: "Select Template",
            style: {
              padding: "0.5rem",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#175353",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ c.jsx(qt, { size: 20, color: "#175353" })
          }
        ),
        a && h && /* @__PURE__ */ c.jsx(
          is,
          {
            selectedTemplateName: a,
            templateText: o,
            template: i,
            onClearTemplate: () => {
              h(), x("");
            }
          }
        ),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            value: w,
            onChange: k,
            placeholder: "Type a message...",
            className: "whatsapp-input-field",
            disabled: t || y
          }
        ),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: S,
            className: "whatsapp-send-btn",
            disabled: t || !y && !w.trim() && !p,
            title: n ? "Sending..." : "Send",
            children: n ? /* @__PURE__ */ c.jsx(St, {}) : /* @__PURE__ */ c.jsx(Kn, { size: 20, color: "white" })
          }
        ),
        p && /* @__PURE__ */ c.jsx(cs, { attachedFile: p, onFileRemove: u })
      ]
    }
  );
}, ls = () => /* @__PURE__ */ c.jsx("div", { className: "whatsapp-templates-grid", children: Array.from({ length: 4 }).map((e, t) => /* @__PURE__ */ c.jsxs(
  "div",
  {
    className: "whatsapp-template-skeleton-item",
    children: [
      /* @__PURE__ */ c.jsx(Y, { width: "40%", height: "12px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-item-divider" }),
      /* @__PURE__ */ c.jsx(Y, { width: "100%", height: "14px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx(Y, { width: "90%", height: "14px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx(Y, { width: "60%", height: "14px" })
    ]
  },
  t
)) });
function us(e) {
  let t = "";
  return e.header && (t += `*${e.header}*

`), t += e.template || "", e.footer && (t += `

${e.footer}`), t;
}
const en = ({ templates: e, onSelect: t, isLoading: s = !1 }) => {
  const [n, r] = K(null);
  return s ? /* @__PURE__ */ c.jsx(ls, {}) : e.length === 0 ? /* @__PURE__ */ c.jsx("section", { style: { padding: "1rem", textAlign: "center" }, children: /* @__PURE__ */ c.jsx("p", { style: { color: "#666", fontSize: "0.875rem" }, children: "No templates available" }) }) : /* @__PURE__ */ c.jsx("section", { style: { padding: "1rem" }, children: /* @__PURE__ */ c.jsx("div", { className: "template-scroll-container", children: /* @__PURE__ */ c.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }, children: e.map((o) => {
    const a = us(o), i = n === o.name;
    return /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        onClick: () => t(a, o.name, o),
        onMouseEnter: () => r(o.name),
        onMouseLeave: () => r(null),
        className: "whatsapp-template-card",
        style: {
          backgroundColor: i ? "#f2f5f6" : "white",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #eee",
          borderRadius: "8px",
          padding: "12px 16px",
          cursor: "pointer",
          textAlign: "left"
        },
        children: [
          /* @__PURE__ */ c.jsx("header", { style: { fontSize: "12px", color: "#575E60", marginBottom: "8px", textTransform: "uppercase" }, children: o.category || "TEMPLATE" }),
          /* @__PURE__ */ c.jsx("div", { style: { borderTop: "1px solid #eee", width: "100%", marginBottom: "12px" } }),
          /* @__PURE__ */ c.jsx(
            "p",
            {
              style: {
                fontSize: "14px",
                lineHeight: "1.5",
                color: "#414141",
                maxHeight: "100px",
                overflowY: "auto",
                whiteSpace: "pre-wrap"
              },
              children: a
            }
          )
        ]
      },
      o.name
    );
  }) }) }) });
};
function ds(e) {
  return e.type.startsWith("image/") ? "image" : e.type.startsWith("video/") ? "video" : e.type.startsWith("audio/") ? "audio" : "document";
}
function tn() {
  const { config: e, apiAdapter: t, socketAdapter: s, socketPayload: n } = Ee(), r = Xt(), o = ue((b) => b.messages), a = ue((b) => b.isLoading), i = ue((b) => b.error), h = ue((b) => b.setMessages), p = ue((b) => b.appendMessage), u = ue((b) => b.replaceMessage), d = ue((b) => b.updateMessageStatus), w = ue((b) => b.setLoading), x = ue((b) => b.setError), [l, m] = K(!1), y = (s == null ? void 0 : s.isConnected) ?? !0, [S, j] = K(!1), [O, C] = K(), [k, v] = K(), [N, H] = K(), [W, J] = K([]), [Z, B] = K(!1), [V, U] = K(null), [Q, F] = K(!1), re = fe(() => {
    var te;
    const b = e.doctype || "", R = e.refName || "", T = e.activeLeadDoctype || "", q = e.activeLeadName || "";
    let L = b, le = R, I = e.links || [];
    if (q)
      L = T, le = q, I = b ? [{ link_doctype: b, link_name: R }] : [];
    else {
      const de = (te = e.links) == null ? void 0 : te.find((Ae) => {
        var ge;
        return (ge = Ae.link_doctype) == null ? void 0 : ge.includes("Lead");
      });
      de && (L = de.link_doctype, le = de.link_name, I = b ? [{ link_doctype: b, link_name: R }] : []);
    }
    const M = q ? [{ reference_doctype: T, reference_name: q }] : [{ reference_doctype: b, reference_name: R }, ...(e.links || []).map((de) => ({ reference_doctype: de.link_doctype, reference_name: de.link_name }))];
    return {
      primaryDoctype: L,
      primaryName: le,
      secondaryLinks: I,
      templateRefs: M,
      baseDoctype: b,
      baseName: R,
      activeLeadDoctype: T,
      activeLeadName: q
    };
  }, [e]), $ = ie(t.getMessages);
  ne(() => {
    $.current = t.getMessages;
  }, [t.getMessages]), ne(() => {
    if (!e.isChatOpen || e.preventHistoryFetch) return;
    (async () => {
      var R;
      w(!0), x(null);
      try {
        const T = await ((R = $.current) == null ? void 0 : R.call($, e.doctype || "", e.refName || ""));
        T && h([...T].reverse());
      } catch (T) {
        x(T instanceof Error ? T.message : "Failed to fetch");
      } finally {
        w(!1);
      }
    })();
  }, [e.isChatOpen, e.doctype, e.refName, w, x, h]), ne(() => {
    if (!S || W.length > 0) return;
    (async () => {
      var R;
      B(!0);
      try {
        const T = await ((R = t.getTemplates) == null ? void 0 : R.call(t, re.templateRefs));
        T && J(T);
      } catch (T) {
        console.error("Template fetch failed", T);
      } finally {
        B(!1);
      }
    })();
  }, [S, t, re.templateRefs, W.length]);
  const oe = ie(!1), ae = ie(/* @__PURE__ */ new Set()), g = ie(null), _ = ie(null);
  ne(() => {
    if (!e.isChatOpen) {
      oe.current = !1, ae.current.clear();
      return;
    }
    if (oe.current || !o.length || !t.sendReadReceipt)
      return;
    const b = o.findLast((R) => R.is_outbound === 0 && (R.status === null || R.status === void 0));
    b != null && b.name && !ae.current.has(b.name) ? (t.sendReadReceipt(b.name), ae.current.add(b.name), oe.current = !0) : o.length > 0 && (oe.current = !0);
  }, [e.isChatOpen, o, t]);
  const A = Fe(() => {
    U((b) => (b != null && b.preview && URL.revokeObjectURL(b.preview), null));
  }, []), P = Fe(
    async (b, R, T) => {
      var pt, mt, ht, gt;
      const {
        primaryDoctype: q,
        primaryName: L,
        secondaryLinks: le,
        baseDoctype: I,
        baseName: M,
        activeLeadDoctype: te,
        activeLeadName: de
      } = re, Ae = {
        to: e.phone
      };
      if (k) {
        const Pe = ((N == null ? void 0 : N.for_doctype) ?? "").trim();
        let Ke = q, Xe = L, Ge = le;
        Pe.includes("Lead") ? (Ke = te || Pe, Xe = de || L, Ge = I ? [{ link_doctype: I, link_name: M }] : []) : (Ke = I || q, Xe = M || L, Ge = e.links || []);
        const Me = `temp-${Date.now()}`;
        _.current = Me;
        const Tn = {
          name: Me,
          message: O ?? (N == null ? void 0 : N.template) ?? "",
          sender: "You",
          creation: (/* @__PURE__ */ new Date()).toISOString(),
          is_outbound: 1,
          status: 5,
          message_type: "Template",
          header: N == null ? void 0 : N.header,
          footer: N == null ? void 0 : N.footer
        };
        p(Tn), m(!0);
        try {
          await t.sendTemplate({
            ...Ae,
            reference_doctype: Ke,
            reference_name: Xe,
            template: k,
            links: Ge
          }), d(Me, 1), (pt = t.showNotification) == null || pt.call(t, "WhatsApp", "Template sent successfully"), v(void 0), C(void 0), H(void 0), A(), t.onMessageSent && t.onMessageSent();
        } catch (jn) {
          console.error(jn), d(Me, 2), (mt = t.showError) == null || mt.call(t, "WhatsApp", "Failed to send template message");
        } finally {
          m(!1);
        }
        return;
      }
      const ge = (b || "").trim();
      if (!ge && !R) return;
      const ke = `temp-${Date.now()}`;
      g.current = ke, p({
        name: ke,
        message: ge,
        sender: "You",
        creation: (/* @__PURE__ */ new Date()).toISOString(),
        is_outbound: 1,
        attach: R,
        content_type: T,
        status: 5
      }), m(!0);
      try {
        await t.sendMessage({
          ...Ae,
          reference_doctype: q,
          reference_name: L,
          message: ge,
          attach: R || "",
          content_type: T,
          links: le
        }), d(ke, 1), (ht = t.showNotification) == null || ht.call(t, "WhatsApp", "Message sent successfully"), A(), t.onMessageSent && t.onMessageSent();
      } catch (Pe) {
        console.error(Pe), d(ke, 2), (gt = t.showError) == null || gt.call(t, "WhatsApp", "Failed to send message");
      } finally {
        m(!1);
      }
    },
    [k, t, e.phone, e.links, N, O, p, d, re, A]
  ), ce = (b, R, T) => {
    C(b), v(R), H(T), j(!1);
  }, be = Fe(async (b) => {
    var q;
    if (!t.uploadFile) return;
    F(!0);
    const R = ds(b);
    let T;
    b.type.startsWith("image/") && (T = URL.createObjectURL(b));
    try {
      const { file_url: L } = await t.uploadFile(b);
      U({ file: b, fileUrl: L, contentType: R, preview: T });
    } catch (L) {
      console.error(L), (q = t.showError) == null || q.call(t, "WhatsApp", "Failed to upload file"), T && URL.revokeObjectURL(T), U(null);
    } finally {
      F(!1);
    }
  }, [t]);
  return ne(() => {
    const b = (R) => {
      var le;
      if (!R || !R.name) return;
      const T = r.getState().messages, q = R.status !== null && R.status !== void 0;
      let L = -1;
      if (R.is_outbound === 0 && q) {
        T.some((M) => M.name === R.name) && typeof R.status == "number" && d(R.name, R.status);
        return;
      }
      if (e.isChatOpen && R.is_outbound === 0 && R.name && e.phone === R.from && !(R.status === 4) && !ae.current.has(R.name) && ((le = t.sendReadReceipt) == null || le.call(t, R.name), ae.current.add(R.name)), R.is_outbound === 1)
        if (R.message_type === "Template") {
          const I = _.current;
          if (I && (L = T.findIndex((M) => M.name === I)), L === -1)
            for (let M = T.length - 1; M >= 0; M--) {
              const te = T[M];
              if (te.name.startsWith("temp-") && te.message_type === "Template") {
                L = M;
                break;
              }
            }
        } else {
          const I = g.current;
          if (I && (L = T.findIndex((M) => M.name === I)), L === -1 && (R.message && (L = T.findIndex((M) => M.name.startsWith("temp-") && M.is_outbound === 1 && M.message === R.message)), L === -1))
            for (let M = T.length - 1; M >= 0; M--) {
              const te = T[M];
              if (te.name.startsWith("temp-") && te.is_outbound === 1 && te.message_type !== "Template") {
                L = M;
                break;
              }
            }
        }
      if (L !== -1) {
        const I = T[L];
        u(I.name, R), I.name === g.current && (g.current = null), I.name === _.current && (_.current = null);
      } else
        T.some((M) => M.name === R.name) ? typeof R.status == "number" && d(R.name, R.status) : p(R);
    };
    if (s != null && s.onMessage) {
      const R = (T) => b(T);
      return s.onMessage(R), () => {
        var T;
        return (T = s.offMessage) == null ? void 0 : T.call(s, R);
      };
    }
    if (n && n.event === "whatsapp_message") {
      const R = n.message, T = it(R);
      b(T);
    }
  }, [s, n, e.phone, e.isChatOpen, t, r, u, p, d]), {
    displayMessages: o,
    isLoading: a,
    messagesError: i,
    isConnected: y,
    isSending: l,
    isTemplateModalOpen: S,
    setIsTemplateModalOpen: j,
    selectedTemplateText: O,
    selectedTemplateName: k,
    selectedTemplate: N,
    setSelectedTemplateText: C,
    setSelectedTemplateName: v,
    setSelectedTemplate: H,
    attachedFile: V,
    templates: W,
    isLoadingTemplates: Z,
    sendMessage: P,
    handleTemplateSelect: ce,
    handleFileSelect: be,
    handleFileRemove: A,
    uploadFileMutation: { isPending: Q }
  };
}
function nn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: fs } = Object.prototype, { getPrototypeOf: ct } = Object, { iterator: qe, toStringTag: sn } = Symbol, ze = /* @__PURE__ */ ((e) => (t) => {
  const s = fs.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), se = (e) => (e = e.toLowerCase(), (t) => ze(t) === e), He = (e) => (t) => typeof t === e, { isArray: we } = Array, ye = He("undefined");
function je(e) {
  return e !== null && !ye(e) && e.constructor !== null && !ye(e.constructor) && X(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const rn = se("ArrayBuffer");
function ps(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && rn(e.buffer), t;
}
const ms = He("string"), X = He("function"), on = He("number"), Oe = (e) => e !== null && typeof e == "object", hs = (e) => e === !0 || e === !1, Ie = (e) => {
  if (ze(e) !== "object")
    return !1;
  const t = ct(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(sn in e) && !(qe in e);
}, gs = (e) => {
  if (!Oe(e) || je(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, ys = se("Date"), ws = se("File"), bs = (e) => !!(e && typeof e.uri < "u"), xs = (e) => e && typeof e.getParts < "u", Rs = se("Blob"), Ss = se("FileList"), _s = (e) => Oe(e) && X(e.pipe);
function Es() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const _t = Es(), Et = typeof _t.FormData < "u" ? _t.FormData : void 0, Ts = (e) => {
  let t;
  return e && (Et && e instanceof Et || X(e.append) && ((t = ze(e)) === "formdata" || // detect form-data instance
  t === "object" && X(e.toString) && e.toString() === "[object FormData]"));
}, js = se("URLSearchParams"), [Os, Ns, Cs, vs] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(se), As = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ne(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), we(e))
    for (n = 0, r = e.length; n < r; n++)
      t.call(null, e[n], n, e);
  else {
    if (je(e))
      return;
    const o = s ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let i;
    for (n = 0; n < a; n++)
      i = o[n], t.call(null, e[i], i, e);
  }
}
function an(e, t) {
  if (je(e))
    return null;
  t = t.toLowerCase();
  const s = Object.keys(e);
  let n = s.length, r;
  for (; n-- > 0; )
    if (r = s[n], t === r.toLowerCase())
      return r;
  return null;
}
const pe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, cn = (e) => !ye(e) && e !== pe;
function nt() {
  const { caseless: e, skipUndefined: t } = cn(this) && this || {}, s = {}, n = (r, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const a = e && an(s, o) || o;
    Ie(s[a]) && Ie(r) ? s[a] = nt(s[a], r) : Ie(r) ? s[a] = nt({}, r) : we(r) ? s[a] = r.slice() : (!t || !ye(r)) && (s[a] = r);
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ne(arguments[r], n);
  return s;
}
const ks = (e, t, s, { allOwnKeys: n } = {}) => (Ne(
  t,
  (r, o) => {
    s && X(r) ? Object.defineProperty(e, o, {
      value: nn(r, s),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, o, {
      value: r,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: n }
), e), Ps = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ms = (e, t, s, n) => {
  e.prototype = Object.create(t.prototype, n), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, Ls = (e, t, s, n) => {
  let r, o, a;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      a = r[o], (!n || n(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = s !== !1 && ct(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, Us = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const n = e.indexOf(t, s);
  return n !== -1 && n === s;
}, Ds = (e) => {
  if (!e) return null;
  if (we(e)) return e;
  let t = e.length;
  if (!on(t)) return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, Fs = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ct(Uint8Array)), Is = (e, t) => {
  const n = (e && e[qe]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, Bs = (e, t) => {
  let s;
  const n = [];
  for (; (s = e.exec(t)) !== null; )
    n.push(s);
  return n;
}, Ws = se("HTMLFormElement"), $s = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, n, r) {
  return n.toUpperCase() + r;
}), Tt = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), qs = se("RegExp"), ln = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), n = {};
  Ne(s, (r, o) => {
    let a;
    (a = t(r, o, e)) !== !1 && (n[o] = a || r);
  }), Object.defineProperties(e, n);
}, zs = (e) => {
  ln(e, (t, s) => {
    if (X(e) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const n = e[s];
    if (X(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, Hs = (e, t) => {
  const s = {}, n = (r) => {
    r.forEach((o) => {
      s[o] = !0;
    });
  };
  return we(e) ? n(e) : n(String(e).split(t)), s;
}, Js = () => {
}, Vs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Ys(e) {
  return !!(e && X(e.append) && e[sn] === "FormData" && e[qe]);
}
const Ks = (e) => {
  const t = new Array(10), s = (n, r) => {
    if (Oe(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (je(n))
        return n;
      if (!("toJSON" in n)) {
        t[r] = n;
        const o = we(n) ? [] : {};
        return Ne(n, (a, i) => {
          const h = s(a, r + 1);
          !ye(h) && (o[i] = h);
        }), t[r] = void 0, o;
      }
    }
    return n;
  };
  return s(e, 0);
}, Xs = se("AsyncFunction"), Gs = (e) => e && (Oe(e) || X(e)) && X(e.then) && X(e.catch), un = ((e, t) => e ? setImmediate : t ? ((s, n) => (pe.addEventListener(
  "message",
  ({ source: r, data: o }) => {
    r === pe && o === s && n.length && n.shift()();
  },
  !1
), (r) => {
  n.push(r), pe.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(typeof setImmediate == "function", X(pe.postMessage)), Zs = typeof queueMicrotask < "u" ? queueMicrotask.bind(pe) : typeof process < "u" && process.nextTick || un, Qs = (e) => e != null && X(e[qe]), f = {
  isArray: we,
  isArrayBuffer: rn,
  isBuffer: je,
  isFormData: Ts,
  isArrayBufferView: ps,
  isString: ms,
  isNumber: on,
  isBoolean: hs,
  isObject: Oe,
  isPlainObject: Ie,
  isEmptyObject: gs,
  isReadableStream: Os,
  isRequest: Ns,
  isResponse: Cs,
  isHeaders: vs,
  isUndefined: ye,
  isDate: ys,
  isFile: ws,
  isReactNativeBlob: bs,
  isReactNative: xs,
  isBlob: Rs,
  isRegExp: qs,
  isFunction: X,
  isStream: _s,
  isURLSearchParams: js,
  isTypedArray: Fs,
  isFileList: Ss,
  forEach: Ne,
  merge: nt,
  extend: ks,
  trim: As,
  stripBOM: Ps,
  inherits: Ms,
  toFlatObject: Ls,
  kindOf: ze,
  kindOfTest: se,
  endsWith: Us,
  toArray: Ds,
  forEachEntry: Is,
  matchAll: Bs,
  isHTMLForm: Ws,
  hasOwnProperty: Tt,
  hasOwnProp: Tt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ln,
  freezeMethods: zs,
  toObjectSet: Hs,
  toCamelCase: $s,
  noop: Js,
  toFiniteNumber: Vs,
  findKey: an,
  global: pe,
  isContextDefined: cn,
  isSpecCompliantForm: Ys,
  toJSONObject: Ks,
  isAsyncFn: Xs,
  isThenable: Gs,
  setImmediate: un,
  asap: Zs,
  isIterable: Qs
};
let E = class dn extends Error {
  static from(t, s, n, r, o, a) {
    const i = new dn(t.message, s || t.code, n, r, o);
    return i.cause = t, i.name = t.name, t.status != null && i.status == null && (i.status = t.status), a && Object.assign(i, a), i;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, s, n, r, o) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, s && (this.code = s), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status);
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: f.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
E.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
E.ERR_BAD_OPTION = "ERR_BAD_OPTION";
E.ECONNABORTED = "ECONNABORTED";
E.ETIMEDOUT = "ETIMEDOUT";
E.ERR_NETWORK = "ERR_NETWORK";
E.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
E.ERR_DEPRECATED = "ERR_DEPRECATED";
E.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
E.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
E.ERR_CANCELED = "ERR_CANCELED";
E.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
E.ERR_INVALID_URL = "ERR_INVALID_URL";
const er = null;
function st(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function fn(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ze(e, t, s) {
  return e ? e.concat(t).map(function(r, o) {
    return r = fn(r), !s && o ? "[" + r + "]" : r;
  }).join(s ? "." : "") : t;
}
function tr(e) {
  return f.isArray(e) && !e.some(st);
}
const nr = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Je(e, t, s) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), s = f.toFlatObject(
    s,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(m, y) {
      return !f.isUndefined(y[m]);
    }
  );
  const n = s.metaTokens, r = s.visitor || u, o = s.dots, a = s.indexes, h = (s.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(r))
    throw new TypeError("visitor must be a function");
  function p(l) {
    if (l === null) return "";
    if (f.isDate(l))
      return l.toISOString();
    if (f.isBoolean(l))
      return l.toString();
    if (!h && f.isBlob(l))
      throw new E("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(l) || f.isTypedArray(l) ? h && typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l;
  }
  function u(l, m, y) {
    let S = l;
    if (f.isReactNative(t) && f.isReactNativeBlob(l))
      return t.append(Ze(y, m, o), p(l)), !1;
    if (l && !y && typeof l == "object") {
      if (f.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), l = JSON.stringify(l);
      else if (f.isArray(l) && tr(l) || (f.isFileList(l) || f.endsWith(m, "[]")) && (S = f.toArray(l)))
        return m = fn(m), S.forEach(function(O, C) {
          !(f.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ze([m], C, o) : a === null ? m : m + "[]",
            p(O)
          );
        }), !1;
    }
    return st(l) ? !0 : (t.append(Ze(y, m, o), p(l)), !1);
  }
  const d = [], w = Object.assign(nr, {
    defaultVisitor: u,
    convertValue: p,
    isVisitable: st
  });
  function x(l, m) {
    if (!f.isUndefined(l)) {
      if (d.indexOf(l) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(l), f.forEach(l, function(S, j) {
        (!(f.isUndefined(S) || S === null) && r.call(t, S, f.isString(j) ? j.trim() : j, m, w)) === !0 && x(S, m ? m.concat(j) : [j]);
      }), d.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return x(e), t;
}
function jt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function lt(e, t) {
  this._pairs = [], e && Je(e, this, t);
}
const pn = lt.prototype;
pn.append = function(t, s) {
  this._pairs.push([t, s]);
};
pn.toString = function(t) {
  const s = t ? function(n) {
    return t.call(this, n, jt);
  } : jt;
  return this._pairs.map(function(r) {
    return s(r[0]) + "=" + s(r[1]);
  }, "").join("&");
};
function sr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function mn(e, t, s) {
  if (!t)
    return e;
  const n = s && s.encode || sr, r = f.isFunction(s) ? {
    serialize: s
  } : s, o = r && r.serialize;
  let a;
  if (o ? a = o(t, r) : a = f.isURLSearchParams(t) ? t.toString() : new lt(t, r).toString(n), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Ot {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, s, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: s,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    f.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const ut = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, rr = typeof URLSearchParams < "u" ? URLSearchParams : lt, or = typeof FormData < "u" ? FormData : null, ar = typeof Blob < "u" ? Blob : null, ir = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rr,
    FormData: or,
    Blob: ar
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, dt = typeof window < "u" && typeof document < "u", rt = typeof navigator == "object" && navigator || void 0, cr = dt && (!rt || ["ReactNative", "NativeScript", "NS"].indexOf(rt.product) < 0), lr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ur = dt && window.location.href || "http://localhost", dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: dt,
  hasStandardBrowserEnv: cr,
  hasStandardBrowserWebWorkerEnv: lr,
  navigator: rt,
  origin: ur
}, Symbol.toStringTag, { value: "Module" })), z = {
  ...dr,
  ...ir
};
function fr(e, t) {
  return Je(e, new z.classes.URLSearchParams(), {
    visitor: function(s, n, r, o) {
      return z.isNode && f.isBuffer(s) ? (this.append(n, s.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function pr(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function mr(e) {
  const t = {}, s = Object.keys(e);
  let n;
  const r = s.length;
  let o;
  for (n = 0; n < r; n++)
    o = s[n], t[o] = e[o];
  return t;
}
function hn(e) {
  function t(s, n, r, o) {
    let a = s[o++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), h = o >= s.length;
    return a = !a && f.isArray(r) ? r.length : a, h ? (f.hasOwnProp(r, a) ? r[a] = [r[a], n] : r[a] = n, !i) : ((!r[a] || !f.isObject(r[a])) && (r[a] = []), t(s, n, r[a], o) && f.isArray(r[a]) && (r[a] = mr(r[a])), !i);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const s = {};
    return f.forEachEntry(e, (n, r) => {
      t(pr(n), r, s, 0);
    }), s;
  }
  return null;
}
function hr(e, t, s) {
  if (f.isString(e))
    try {
      return (t || JSON.parse)(e), f.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (s || JSON.stringify)(e);
}
const Ce = {
  transitional: ut,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, s) {
      const n = s.getContentType() || "", r = n.indexOf("application/json") > -1, o = f.isObject(t);
      if (o && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
        return r ? JSON.stringify(hn(t)) : t;
      if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t) || f.isReadableStream(t))
        return t;
      if (f.isArrayBufferView(t))
        return t.buffer;
      if (f.isURLSearchParams(t))
        return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (o) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return fr(t, this.formSerializer).toString();
        if ((i = f.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const h = this.env && this.env.FormData;
          return Je(
            i ? { "files[]": t } : t,
            h && new h(),
            this.formSerializer
          );
        }
      }
      return o || r ? (s.setContentType("application/json", !1), hr(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const s = this.transitional || Ce.transitional, n = s && s.forcedJSONParsing, r = this.responseType === "json";
      if (f.isResponse(t) || f.isReadableStream(t))
        return t;
      if (t && f.isString(t) && (n && !this.responseType || r)) {
        const a = !(s && s.silentJSONParsing) && r;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (i) {
          if (a)
            throw i.name === "SyntaxError" ? E.from(i, E.ERR_BAD_RESPONSE, this, null, this.response) : i;
        }
      }
      return t;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: z.classes.FormData,
    Blob: z.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
f.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ce.headers[e] = {};
});
const gr = f.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), yr = (e) => {
  const t = {};
  let s, n, r;
  return e && e.split(`
`).forEach(function(a) {
    r = a.indexOf(":"), s = a.substring(0, r).trim().toLowerCase(), n = a.substring(r + 1).trim(), !(!s || t[s] && gr[s]) && (s === "set-cookie" ? t[s] ? t[s].push(n) : t[s] = [n] : t[s] = t[s] ? t[s] + ", " + n : n);
  }), t;
}, Nt = Symbol("internals");
function Se(e) {
  return e && String(e).trim().toLowerCase();
}
function Be(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Be) : String(e);
}
function wr(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = s.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const br = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Qe(e, t, s, n, r) {
  if (f.isFunction(n))
    return n.call(this, t, s);
  if (r && (t = s), !!f.isString(t)) {
    if (f.isString(n))
      return t.indexOf(n) !== -1;
    if (f.isRegExp(n))
      return n.test(t);
  }
}
function xr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, n) => s.toUpperCase() + n);
}
function Rr(e, t) {
  const s = f.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + s, {
      value: function(r, o, a) {
        return this[n].call(this, t, r, o, a);
      },
      configurable: !0
    });
  });
}
let G = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, s, n) {
    const r = this;
    function o(i, h, p) {
      const u = Se(h);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = f.findKey(r, u);
      (!d || r[d] === void 0 || p === !0 || p === void 0 && r[d] !== !1) && (r[d || h] = Be(i));
    }
    const a = (i, h) => f.forEach(i, (p, u) => o(p, u, h));
    if (f.isPlainObject(t) || t instanceof this.constructor)
      a(t, s);
    else if (f.isString(t) && (t = t.trim()) && !br(t))
      a(yr(t), s);
    else if (f.isObject(t) && f.isIterable(t)) {
      let i = {}, h, p;
      for (const u of t) {
        if (!f.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        i[p = u[0]] = (h = i[p]) ? f.isArray(h) ? [...h, u[1]] : [h, u[1]] : u[1];
      }
      a(i, s);
    } else
      t != null && o(s, t, n);
    return this;
  }
  get(t, s) {
    if (t = Se(t), t) {
      const n = f.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!s)
          return r;
        if (s === !0)
          return wr(r);
        if (f.isFunction(s))
          return s.call(this, r, n);
        if (f.isRegExp(s))
          return s.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, s) {
    if (t = Se(t), t) {
      const n = f.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!s || Qe(this, this[n], n, s)));
    }
    return !1;
  }
  delete(t, s) {
    const n = this;
    let r = !1;
    function o(a) {
      if (a = Se(a), a) {
        const i = f.findKey(n, a);
        i && (!s || Qe(n, n[i], i, s)) && (delete n[i], r = !0);
      }
    }
    return f.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const s = Object.keys(this);
    let n = s.length, r = !1;
    for (; n--; ) {
      const o = s[n];
      (!t || Qe(this, this[o], o, t, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(t) {
    const s = this, n = {};
    return f.forEach(this, (r, o) => {
      const a = f.findKey(n, o);
      if (a) {
        s[a] = Be(r), delete s[o];
        return;
      }
      const i = t ? xr(o) : String(o).trim();
      i !== o && delete s[o], s[i] = Be(r), n[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const s = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (n, r) => {
      n != null && n !== !1 && (s[r] = t && f.isArray(n) ? n.join(", ") : n);
    }), s;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, s]) => t + ": " + s).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...s) {
    const n = new this(t);
    return s.forEach((r) => n.set(r)), n;
  }
  static accessor(t) {
    const n = (this[Nt] = this[Nt] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(a) {
      const i = Se(a);
      n[i] || (Rr(r, a), n[i] = !0);
    }
    return f.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
G.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
f.reduceDescriptors(G.prototype, ({ value: e }, t) => {
  let s = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[s] = n;
    }
  };
});
f.freezeMethods(G);
function et(e, t) {
  const s = this || Ce, n = t || s, r = G.from(n.headers);
  let o = n.data;
  return f.forEach(e, function(i) {
    o = i.call(s, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function gn(e) {
  return !!(e && e.__CANCEL__);
}
let ve = class extends E {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, s, n) {
    super(t ?? "canceled", E.ERR_CANCELED, s, n), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function yn(e, t, s) {
  const n = s.config.validateStatus;
  !s.status || !n || n(s.status) ? e(s) : t(
    new E(
      "Request failed with status code " + s.status,
      [E.ERR_BAD_REQUEST, E.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    )
  );
}
function Sr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function _r(e, t) {
  e = e || 10;
  const s = new Array(e), n = new Array(e);
  let r = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const p = Date.now(), u = n[o];
    a || (a = p), s[r] = h, n[r] = p;
    let d = o, w = 0;
    for (; d !== r; )
      w += s[d++], d = d % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), p - a < t)
      return;
    const x = u && p - u;
    return x ? Math.round(w * 1e3 / x) : void 0;
  };
}
function Er(e, t) {
  let s = 0, n = 1e3 / t, r, o;
  const a = (p, u = Date.now()) => {
    s = u, r = null, o && (clearTimeout(o), o = null), e(...p);
  };
  return [(...p) => {
    const u = Date.now(), d = u - s;
    d >= n ? a(p, u) : (r = p, o || (o = setTimeout(() => {
      o = null, a(r);
    }, n - d)));
  }, () => r && a(r)];
}
const $e = (e, t, s = 3) => {
  let n = 0;
  const r = _r(50, 250);
  return Er((o) => {
    const a = o.loaded, i = o.lengthComputable ? o.total : void 0, h = a - n, p = r(h), u = a <= i;
    n = a;
    const d = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: h,
      rate: p || void 0,
      estimated: p && i && u ? (i - a) / p : void 0,
      event: o,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, s);
}, Ct = (e, t) => {
  const s = e != null;
  return [
    (n) => t[0]({
      lengthComputable: s,
      total: e,
      loaded: n
    }),
    t[1]
  ];
}, vt = (e) => (...t) => f.asap(() => e(...t)), Tr = z.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (s) => (s = new URL(s, z.origin), e.protocol === s.protocol && e.host === s.host && (t || e.port === s.port)))(
  new URL(z.origin),
  z.navigator && /(msie|trident)/i.test(z.navigator.userAgent)
) : () => !0, jr = z.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, s, n, r, o, a) {
      if (typeof document > "u") return;
      const i = [`${e}=${encodeURIComponent(t)}`];
      f.isNumber(s) && i.push(`expires=${new Date(s).toUTCString()}`), f.isString(n) && i.push(`path=${n}`), f.isString(r) && i.push(`domain=${r}`), o === !0 && i.push("secure"), f.isString(a) && i.push(`SameSite=${a}`), document.cookie = i.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Or(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Nr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function wn(e, t, s) {
  let n = !Or(t);
  return e && (n || s == !1) ? Nr(e, t) : t;
}
const At = (e) => e instanceof G ? { ...e } : e;
function he(e, t) {
  t = t || {};
  const s = {};
  function n(p, u, d, w) {
    return f.isPlainObject(p) && f.isPlainObject(u) ? f.merge.call({ caseless: w }, p, u) : f.isPlainObject(u) ? f.merge({}, u) : f.isArray(u) ? u.slice() : u;
  }
  function r(p, u, d, w) {
    if (f.isUndefined(u)) {
      if (!f.isUndefined(p))
        return n(void 0, p, d, w);
    } else return n(p, u, d, w);
  }
  function o(p, u) {
    if (!f.isUndefined(u))
      return n(void 0, u);
  }
  function a(p, u) {
    if (f.isUndefined(u)) {
      if (!f.isUndefined(p))
        return n(void 0, p);
    } else return n(void 0, u);
  }
  function i(p, u, d) {
    if (d in t)
      return n(p, u);
    if (d in e)
      return n(void 0, p);
  }
  const h = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: i,
    headers: (p, u, d) => r(At(p), At(u), d, !0)
  };
  return f.forEach(Object.keys({ ...e, ...t }), function(u) {
    if (u === "__proto__" || u === "constructor" || u === "prototype") return;
    const d = f.hasOwnProp(h, u) ? h[u] : r, w = d(e[u], t[u], u);
    f.isUndefined(w) && d !== i || (s[u] = w);
  }), s;
}
const bn = (e) => {
  const t = he({}, e);
  let { data: s, withXSRFToken: n, xsrfHeaderName: r, xsrfCookieName: o, headers: a, auth: i } = t;
  if (t.headers = a = G.from(a), t.url = mn(
    wn(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), i && a.set(
    "Authorization",
    "Basic " + btoa(
      (i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : "")
    )
  ), f.isFormData(s)) {
    if (z.hasStandardBrowserEnv || z.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (f.isFunction(s.getHeaders)) {
      const h = s.getHeaders(), p = ["content-type", "content-length"];
      Object.entries(h).forEach(([u, d]) => {
        p.includes(u.toLowerCase()) && a.set(u, d);
      });
    }
  }
  if (z.hasStandardBrowserEnv && (n && f.isFunction(n) && (n = n(t)), n || n !== !1 && Tr(t.url))) {
    const h = r && o && jr.read(o);
    h && a.set(r, h);
  }
  return t;
}, Cr = typeof XMLHttpRequest < "u", vr = Cr && function(e) {
  return new Promise(function(s, n) {
    const r = bn(e);
    let o = r.data;
    const a = G.from(r.headers).normalize();
    let { responseType: i, onUploadProgress: h, onDownloadProgress: p } = r, u, d, w, x, l;
    function m() {
      x && x(), l && l(), r.cancelToken && r.cancelToken.unsubscribe(u), r.signal && r.signal.removeEventListener("abort", u);
    }
    let y = new XMLHttpRequest();
    y.open(r.method.toUpperCase(), r.url, !0), y.timeout = r.timeout;
    function S() {
      if (!y)
        return;
      const O = G.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), k = {
        data: !i || i === "text" || i === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: O,
        config: e,
        request: y
      };
      yn(
        function(N) {
          s(N), m();
        },
        function(N) {
          n(N), m();
        },
        k
      ), y = null;
    }
    "onloadend" in y ? y.onloadend = S : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, y.onabort = function() {
      y && (n(new E("Request aborted", E.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function(C) {
      const k = C && C.message ? C.message : "Network Error", v = new E(k, E.ERR_NETWORK, e, y);
      v.event = C || null, n(v), y = null;
    }, y.ontimeout = function() {
      let C = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const k = r.transitional || ut;
      r.timeoutErrorMessage && (C = r.timeoutErrorMessage), n(
        new E(
          C,
          k.clarifyTimeoutError ? E.ETIMEDOUT : E.ECONNABORTED,
          e,
          y
        )
      ), y = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in y && f.forEach(a.toJSON(), function(C, k) {
      y.setRequestHeader(k, C);
    }), f.isUndefined(r.withCredentials) || (y.withCredentials = !!r.withCredentials), i && i !== "json" && (y.responseType = r.responseType), p && ([w, l] = $e(p, !0), y.addEventListener("progress", w)), h && y.upload && ([d, x] = $e(h), y.upload.addEventListener("progress", d), y.upload.addEventListener("loadend", x)), (r.cancelToken || r.signal) && (u = (O) => {
      y && (n(!O || O.type ? new ve(null, e, y) : O), y.abort(), y = null);
    }, r.cancelToken && r.cancelToken.subscribe(u), r.signal && (r.signal.aborted ? u() : r.signal.addEventListener("abort", u)));
    const j = Sr(r.url);
    if (j && z.protocols.indexOf(j) === -1) {
      n(
        new E(
          "Unsupported protocol " + j + ":",
          E.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    y.send(o || null);
  });
}, Ar = (e, t) => {
  const { length: s } = e = e ? e.filter(Boolean) : [];
  if (t || s) {
    let n = new AbortController(), r;
    const o = function(p) {
      if (!r) {
        r = !0, i();
        const u = p instanceof Error ? p : this.reason;
        n.abort(
          u instanceof E ? u : new ve(u instanceof Error ? u.message : u)
        );
      }
    };
    let a = t && setTimeout(() => {
      a = null, o(new E(`timeout of ${t}ms exceeded`, E.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((p) => {
        p.unsubscribe ? p.unsubscribe(o) : p.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((p) => p.addEventListener("abort", o));
    const { signal: h } = n;
    return h.unsubscribe = () => f.asap(i), h;
  }
}, kr = function* (e, t) {
  let s = e.byteLength;
  if (s < t) {
    yield e;
    return;
  }
  let n = 0, r;
  for (; n < s; )
    r = n + t, yield e.slice(n, r), n = r;
}, Pr = async function* (e, t) {
  for await (const s of Mr(e))
    yield* kr(s, t);
}, Mr = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: s, value: n } = await t.read();
      if (s)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, kt = (e, t, s, n) => {
  const r = Pr(e, t);
  let o = 0, a, i = (h) => {
    a || (a = !0, n && n(h));
  };
  return new ReadableStream(
    {
      async pull(h) {
        try {
          const { done: p, value: u } = await r.next();
          if (p) {
            i(), h.close();
            return;
          }
          let d = u.byteLength;
          if (s) {
            let w = o += d;
            s(w);
          }
          h.enqueue(new Uint8Array(u));
        } catch (p) {
          throw i(p), p;
        }
      },
      cancel(h) {
        return i(h), r.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Pt = 64 * 1024, { isFunction: De } = f, Lr = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(f.global), { ReadableStream: Mt, TextEncoder: Lt } = f.global, Ut = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ur = (e) => {
  e = f.merge.call(
    {
      skipUndefined: !0
    },
    Lr,
    e
  );
  const { fetch: t, Request: s, Response: n } = e, r = t ? De(t) : typeof fetch == "function", o = De(s), a = De(n);
  if (!r)
    return !1;
  const i = r && De(Mt), h = r && (typeof Lt == "function" ? /* @__PURE__ */ ((l) => (m) => l.encode(m))(new Lt()) : async (l) => new Uint8Array(await new s(l).arrayBuffer())), p = o && i && Ut(() => {
    let l = !1;
    const m = new s(z.origin, {
      body: new Mt(),
      method: "POST",
      get duplex() {
        return l = !0, "half";
      }
    }).headers.has("Content-Type");
    return l && !m;
  }), u = a && i && Ut(() => f.isReadableStream(new n("").body)), d = {
    stream: u && ((l) => l.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((l) => {
    !d[l] && (d[l] = (m, y) => {
      let S = m && m[l];
      if (S)
        return S.call(m);
      throw new E(
        `Response type '${l}' is not supported`,
        E.ERR_NOT_SUPPORT,
        y
      );
    });
  });
  const w = async (l) => {
    if (l == null)
      return 0;
    if (f.isBlob(l))
      return l.size;
    if (f.isSpecCompliantForm(l))
      return (await new s(z.origin, {
        method: "POST",
        body: l
      }).arrayBuffer()).byteLength;
    if (f.isArrayBufferView(l) || f.isArrayBuffer(l))
      return l.byteLength;
    if (f.isURLSearchParams(l) && (l = l + ""), f.isString(l))
      return (await h(l)).byteLength;
  }, x = async (l, m) => {
    const y = f.toFiniteNumber(l.getContentLength());
    return y ?? w(m);
  };
  return async (l) => {
    let {
      url: m,
      method: y,
      data: S,
      signal: j,
      cancelToken: O,
      timeout: C,
      onDownloadProgress: k,
      onUploadProgress: v,
      responseType: N,
      headers: H,
      withCredentials: W = "same-origin",
      fetchOptions: J
    } = bn(l), Z = t || fetch;
    N = N ? (N + "").toLowerCase() : "text";
    let B = Ar(
      [j, O && O.toAbortSignal()],
      C
    ), V = null;
    const U = B && B.unsubscribe && (() => {
      B.unsubscribe();
    });
    let Q;
    try {
      if (v && p && y !== "get" && y !== "head" && (Q = await x(H, S)) !== 0) {
        let g = new s(m, {
          method: "POST",
          body: S,
          duplex: "half"
        }), _;
        if (f.isFormData(S) && (_ = g.headers.get("content-type")) && H.setContentType(_), g.body) {
          const [A, P] = Ct(
            Q,
            $e(vt(v))
          );
          S = kt(g.body, Pt, A, P);
        }
      }
      f.isString(W) || (W = W ? "include" : "omit");
      const F = o && "credentials" in s.prototype, re = {
        ...J,
        signal: B,
        method: y.toUpperCase(),
        headers: H.normalize().toJSON(),
        body: S,
        duplex: "half",
        credentials: F ? W : void 0
      };
      V = o && new s(m, re);
      let $ = await (o ? Z(V, J) : Z(m, re));
      const oe = u && (N === "stream" || N === "response");
      if (u && (k || oe && U)) {
        const g = {};
        ["status", "statusText", "headers"].forEach((ce) => {
          g[ce] = $[ce];
        });
        const _ = f.toFiniteNumber($.headers.get("content-length")), [A, P] = k && Ct(
          _,
          $e(vt(k), !0)
        ) || [];
        $ = new n(
          kt($.body, Pt, A, () => {
            P && P(), U && U();
          }),
          g
        );
      }
      N = N || "text";
      let ae = await d[f.findKey(d, N) || "text"](
        $,
        l
      );
      return !oe && U && U(), await new Promise((g, _) => {
        yn(g, _, {
          data: ae,
          headers: G.from($.headers),
          status: $.status,
          statusText: $.statusText,
          config: l,
          request: V
        });
      });
    } catch (F) {
      throw U && U(), F && F.name === "TypeError" && /Load failed|fetch/i.test(F.message) ? Object.assign(
        new E(
          "Network Error",
          E.ERR_NETWORK,
          l,
          V,
          F && F.response
        ),
        {
          cause: F.cause || F
        }
      ) : E.from(F, F && F.code, l, V, F && F.response);
    }
  };
}, Dr = /* @__PURE__ */ new Map(), xn = (e) => {
  let t = e && e.env || {};
  const { fetch: s, Request: n, Response: r } = t, o = [n, r, s];
  let a = o.length, i = a, h, p, u = Dr;
  for (; i--; )
    h = o[i], p = u.get(h), p === void 0 && u.set(h, p = i ? /* @__PURE__ */ new Map() : Ur(t)), u = p;
  return p;
};
xn();
const ft = {
  http: er,
  xhr: vr,
  fetch: {
    get: xn
  }
};
f.forEach(ft, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Dt = (e) => `- ${e}`, Fr = (e) => f.isFunction(e) || e === null || e === !1;
function Ir(e, t) {
  e = f.isArray(e) ? e : [e];
  const { length: s } = e;
  let n, r;
  const o = {};
  for (let a = 0; a < s; a++) {
    n = e[a];
    let i;
    if (r = n, !Fr(n) && (r = ft[(i = String(n)).toLowerCase()], r === void 0))
      throw new E(`Unknown adapter '${i}'`);
    if (r && (f.isFunction(r) || (r = r.get(t))))
      break;
    o[i || "#" + a] = r;
  }
  if (!r) {
    const a = Object.entries(o).map(
      ([h, p]) => `adapter ${h} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = s ? a.length > 1 ? `since :
` + a.map(Dt).join(`
`) : " " + Dt(a[0]) : "as no adapter specified";
    throw new E(
      "There is no suitable adapter to dispatch the request " + i,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
const Rn = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Ir,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: ft
};
function tt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ve(null, e);
}
function Ft(e) {
  return tt(e), e.headers = G.from(e.headers), e.data = et.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rn.getAdapter(e.adapter || Ce.adapter, e)(e).then(
    function(n) {
      return tt(e), n.data = et.call(e, e.transformResponse, n), n.headers = G.from(n.headers), n;
    },
    function(n) {
      return gn(n) || (tt(e), n && n.response && (n.response.data = et.call(
        e,
        e.transformResponse,
        n.response
      ), n.response.headers = G.from(n.response.headers))), Promise.reject(n);
    }
  );
}
const Sn = "1.13.6", Ve = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ve[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const It = {};
Ve.transitional = function(t, s, n) {
  function r(o, a) {
    return "[Axios v" + Sn + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, i) => {
    if (t === !1)
      throw new E(
        r(a, " has been removed" + (s ? " in " + s : "")),
        E.ERR_DEPRECATED
      );
    return s && !It[a] && (It[a] = !0, console.warn(
      r(
        a,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), t ? t(o, a, i) : !0;
  };
};
Ve.spelling = function(t) {
  return (s, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Br(e, t, s) {
  if (typeof e != "object")
    throw new E("options must be an object", E.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const o = n[r], a = t[o];
    if (a) {
      const i = e[o], h = i === void 0 || a(i, o, e);
      if (h !== !0)
        throw new E(
          "option " + o + " must be " + h,
          E.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (s !== !0)
      throw new E("Unknown option " + o, E.ERR_BAD_OPTION);
  }
}
const We = {
  assertOptions: Br,
  validators: Ve
}, ee = We.validators;
let me = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ot(),
      response: new Ot()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, s) {
    try {
      return await this._request(t, s);
    } catch (n) {
      if (n instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, s) {
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = he(this.defaults, s);
    const { transitional: n, paramsSerializer: r, headers: o } = s;
    n !== void 0 && We.assertOptions(
      n,
      {
        silentJSONParsing: ee.transitional(ee.boolean),
        forcedJSONParsing: ee.transitional(ee.boolean),
        clarifyTimeoutError: ee.transitional(ee.boolean),
        legacyInterceptorReqResOrdering: ee.transitional(ee.boolean)
      },
      !1
    ), r != null && (f.isFunction(r) ? s.paramsSerializer = {
      serialize: r
    } : We.assertOptions(
      r,
      {
        encode: ee.function,
        serialize: ee.function
      },
      !0
    )), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), We.assertOptions(
      s,
      {
        baseUrl: ee.spelling("baseURL"),
        withXsrfToken: ee.spelling("withXSRFToken")
      },
      !0
    ), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let a = o && f.merge(o.common, o[s.method]);
    o && f.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (l) => {
      delete o[l];
    }), s.headers = G.concat(a, o);
    const i = [];
    let h = !0;
    this.interceptors.request.forEach(function(m) {
      if (typeof m.runWhen == "function" && m.runWhen(s) === !1)
        return;
      h = h && m.synchronous;
      const y = s.transitional || ut;
      y && y.legacyInterceptorReqResOrdering ? i.unshift(m.fulfilled, m.rejected) : i.push(m.fulfilled, m.rejected);
    });
    const p = [];
    this.interceptors.response.forEach(function(m) {
      p.push(m.fulfilled, m.rejected);
    });
    let u, d = 0, w;
    if (!h) {
      const l = [Ft.bind(this), void 0];
      for (l.unshift(...i), l.push(...p), w = l.length, u = Promise.resolve(s); d < w; )
        u = u.then(l[d++], l[d++]);
      return u;
    }
    w = i.length;
    let x = s;
    for (; d < w; ) {
      const l = i[d++], m = i[d++];
      try {
        x = l(x);
      } catch (y) {
        m.call(this, y);
        break;
      }
    }
    try {
      u = Ft.call(this, x);
    } catch (l) {
      return Promise.reject(l);
    }
    for (d = 0, w = p.length; d < w; )
      u = u.then(p[d++], p[d++]);
    return u;
  }
  getUri(t) {
    t = he(this.defaults, t);
    const s = wn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return mn(s, t.params, t.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(t) {
  me.prototype[t] = function(s, n) {
    return this.request(
      he(n || {}, {
        method: t,
        url: s,
        data: (n || {}).data
      })
    );
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function s(n) {
    return function(o, a, i) {
      return this.request(
        he(i || {}, {
          method: t,
          headers: n ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: a
        })
      );
    };
  }
  me.prototype[t] = s(), me.prototype[t + "Form"] = s(!0);
});
let Wr = class _n {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(o) {
      s = o;
    });
    const n = this;
    this.promise.then((r) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](r);
      n._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const a = new Promise((i) => {
        n.subscribe(i), o = i;
      }).then(r);
      return a.cancel = function() {
        n.unsubscribe(o);
      }, a;
    }, t(function(o, a, i) {
      n.reason || (n.reason = new ve(o, a, i), s(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const s = this._listeners.indexOf(t);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), s = (n) => {
      t.abort(n);
    };
    return this.subscribe(s), t.signal.unsubscribe = () => this.unsubscribe(s), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new _n(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function $r(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function qr(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const ot = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(ot).forEach(([e, t]) => {
  ot[t] = e;
});
function En(e) {
  const t = new me(e), s = nn(me.prototype.request, t);
  return f.extend(s, me.prototype, t, { allOwnKeys: !0 }), f.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(r) {
    return En(he(e, r));
  }, s;
}
const D = En(Ce);
D.Axios = me;
D.CanceledError = ve;
D.CancelToken = Wr;
D.isCancel = gn;
D.VERSION = Sn;
D.toFormData = Je;
D.AxiosError = E;
D.Cancel = D.CanceledError;
D.all = function(t) {
  return Promise.all(t);
};
D.spread = $r;
D.isAxiosError = qr;
D.mergeConfig = he;
D.AxiosHeaders = G;
D.formToJSON = (e) => hn(f.isHTMLForm(e) ? new FormData(e) : e);
D.getAdapter = Rn.getAdapter;
D.HttpStatusCode = ot;
D.default = D;
const {
  Axios: ro,
  AxiosError: oo,
  CanceledError: ao,
  isCancel: io,
  CancelToken: co,
  VERSION: lo,
  all: uo,
  Cancel: fo,
  isAxiosError: po,
  spread: mo,
  toFormData: ho,
  AxiosHeaders: go,
  HttpStatusCode: yo,
  formToJSON: wo,
  getAdapter: bo,
  mergeConfig: xo
} = D, zr = (e, t) => {
  const s = D.create({
    baseURL: e,
    withCredentials: !0
  });
  return t && (s.defaults.headers.common.Authorization = `token ${t}`), {
    getMessages: async (n) => {
      const r = new URLSearchParams();
      r.append("reference_doctype", n.reference_doctype), r.append("reference_name", n.reference_name);
      const o = `/api/method/crm_integration.crm_integration.api.whatsapp.get_whatsapp_messages?${r.toString()}`;
      return (await s.get(o, {
        headers: { "Content-Type": "text/plain" }
      })).data;
    },
    sendMessage: async (n) => {
      var i;
      const r = new URLSearchParams();
      n.reference_doctype && r.append("reference_doctype", n.reference_doctype), n.reference_name && r.append("reference_name", n.reference_name), r.append("message", n.message), r.append("to", n.to), n.attach && r.append("attach", n.attach), n.content_type && r.append("content_type", n.content_type), n.reply_to !== void 0 && r.append("reply_to", n.reply_to || ""), (i = n.links) != null && i.length && r.append("links", JSON.stringify(n.links));
      const o = `/api/method/crm_integration.crm_integration.api.whatsapp.create_whatsapp_message?${r.toString()}`;
      return (await s.post(o, void 0, {
        headers: { "Content-Type": "text/plain" }
      })).data;
    },
    getTemplates: async (n) => {
      const r = new URLSearchParams();
      r.set("references", JSON.stringify(n));
      const o = `/api/method/crm_integration.crm_integration.api.whatsapp.get_templates_list?${r.toString()}`;
      return (await s.get(o)).data;
    },
    sendTemplate: async (n) => {
      var i;
      const r = "/api/method/crm_integration.crm_integration.api.whatsapp.send_whatsapp_template", o = new FormData();
      return n.reference_doctype && o.append("reference_doctype", n.reference_doctype), n.reference_name && o.append("reference_name", n.reference_name), o.append("to", n.to), o.append("template", n.template), (i = n.links) != null && i.length && o.append("links", JSON.stringify(n.links)), (await s.post(r, o)).data;
    },
    sendReadReceipt: async (n) => {
      const r = new URLSearchParams();
      r.append("name", n.name);
      const o = `/api/method/crm_integration.crm_integration.api.whatsapp.send_read_receipt?${r.toString()}`;
      return (await s.get(o, {
        headers: { "Content-Type": "text/plain" }
      })).data;
    },
    uploadFile: async (n) => {
      const r = "/api/method/upload_file", o = new FormData();
      return o.append("file", n), (await s.post(r, o)).data;
    },
    getIncomingCommunications: async (n) => {
      const r = new URLSearchParams();
      r.set("user", n);
      const o = `/api/method/crm_integration.crm_integration.api.dashboard.get_incoming_communications?${r.toString()}`;
      return (await s.get(o)).data;
    }
  };
}, Hr = (e, t, s) => {
  const n = fe(() => e ? zr(e, t) : null, [e, t]);
  return fe(() => n ? {
    getMessages: async (r, o) => ((await n.getMessages({ reference_doctype: r, reference_name: o })).message || []).map((h) => it(h)).filter((h) => !!h),
    sendMessage: async (r) => {
      const o = await n.sendMessage(r);
      return { name: o == null ? void 0 : o.name };
    },
    sendTemplate: async (r) => n.sendTemplate(r),
    getTemplates: async (r) => {
      var a;
      return ((a = (await n.getTemplates(r)).message) == null ? void 0 : a.data) || [];
    },
    uploadFile: async (r) => {
      var i;
      const o = await n.uploadFile(r);
      return { file_url: ((i = o.message) == null ? void 0 : i.file_url) || o.file_url || "" };
    },
    sendReadReceipt: async (r) => {
      await n.sendReadReceipt({ name: r });
    },
    getUnreadCount: async (r, o) => {
      var a, i;
      if (!t || !s) return 0;
      try {
        const p = ((a = (await n.getIncomingCommunications(s)).message) == null ? void 0 : a.data) || [];
        return !r && !o ? p.filter((d) => d.type === "whatsapp").reduce((d, w) => d + (w.counts || 0), 0) : ((i = p.find(
          (d) => d.type === "whatsapp" && (r && d.from === r || o && d.customer === o)
        )) == null ? void 0 : i.counts) ?? 0;
      } catch (h) {
        return console.error("[WhatsApp Widget] Failed to fetch unread count:", h), 0;
      }
    },
    getIncomingCommunications: async (r) => {
      var a;
      return t ? ((a = (await n.getIncomingCommunications(r)).message) == null ? void 0 : a.data) || [] : [];
    },
    showNotification: (r, o) => {
      typeof Notification < "u" && Notification.permission === "granted" ? new Notification(r, { body: o }) : console.log(`[WhatsApp Widget] ${r}: ${o}`);
    }
  } : null, [n, t, s]);
}, Jr = (e, t) => {
  if (!e) return null;
  const { showNotification: s, showWarning: n, showError: r } = t;
  return !s && !n && !r ? e : {
    ...e,
    showNotification: s || e.showNotification,
    showWarning: n || e.showWarning,
    showError: r || e.showError
  };
}, Ye = (e) => {
  const {
    apiAdapter: t,
    config: s,
    socketAdapter: n,
    baseURL: r,
    token: o,
    socketConnected: a,
    currentUserEmail: i,
    currentUserFullName: h,
    phone: p,
    refDoctype: u = "Contact",
    refName: d = "",
    links: w = [],
    isChatOpen: x,
    showNotification: l,
    showWarning: m,
    showError: y
  } = e, S = Hr(r, o, i), j = t || S, O = fe(
    () => Jr(j, { showNotification: l, showWarning: m, showError: y }),
    [j, l, m, y]
  ), C = fe(() => s || {
    currentUser: i || "",
    currentUserFullName: h,
    doctype: u,
    refName: d || "",
    phone: p || "",
    links: w,
    isChatOpen: x,
    apiBaseUrl: r
  }, [s, i, h, u, d, p, w, x, r]), k = fe(() => {
    if (a !== void 0)
      return { isConnected: a };
  }, [a]);
  return {
    apiAdapter: O,
    config: C,
    finalSocketAdapter: n || k
  };
}, Vr = () => {
  const {
    displayMessages: e,
    isLoading: t,
    messagesError: s,
    isConnected: n,
    isSending: r,
    isTemplateModalOpen: o,
    setIsTemplateModalOpen: a,
    selectedTemplateText: i,
    selectedTemplateName: h,
    selectedTemplate: p,
    setSelectedTemplateText: u,
    setSelectedTemplateName: d,
    setSelectedTemplate: w,
    attachedFile: x,
    templates: l,
    isLoadingTemplates: m,
    sendMessage: y,
    handleTemplateSelect: S,
    handleFileSelect: j,
    handleFileRemove: O,
    uploadFileMutation: C
  } = tn(), { config: k } = Ee();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-chat-container", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header", children: [
        /* @__PURE__ */ c.jsx("div", { className: "whatsapp-header-avatar", children: /* @__PURE__ */ c.jsx(Vn, { size: 20, color: "#008069" }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header-info", children: [
          /* @__PURE__ */ c.jsx("h4", { children: k.currentUserFullName || "WhatsApp Chat" }),
          /* @__PURE__ */ c.jsx("span", { className: n ? "connection-status connected" : "connection-status reconnecting", children: n ? "● Connected" : "○ Reconnecting..." })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(as, { messages: e, isLoading: t, error: s }),
      /* @__PURE__ */ c.jsx(
        Qt,
        {
          onSend: y,
          isLoading: t || r || C.isPending,
          isUploading: C.isPending,
          isSending: r,
          onTemplateClick: () => a(!0),
          templateText: i,
          selectedTemplateName: h,
          selectedTemplate: p,
          onClearTemplate: () => {
            d(void 0), u(void 0), w(void 0);
          },
          attachedFile: x,
          onFileSelect: j,
          onFileRemove: O
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      Te,
      {
        open: o,
        onClose: () => a(!1),
        width: "700px",
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Select WhatsApp Template" }),
        children: /* @__PURE__ */ c.jsx(en, { templates: l, onSelect: S, isLoading: m })
      }
    )
  ] });
}, Yr = ({
  apiAdapter: e,
  config: t,
  socketAdapter: s,
  socketPayload: n,
  socketConnected: r,
  baseURL: o,
  token: a,
  currentUserEmail: i,
  currentUserFullName: h,
  phone: p,
  refDoctype: u = "Contact",
  refName: d = "",
  links: w = [],
  showNotification: x,
  showWarning: l,
  showError: m
}) => {
  const { apiAdapter: y, config: S, finalSocketAdapter: j } = Ye({
    apiAdapter: e,
    config: t,
    socketAdapter: s,
    baseURL: o,
    token: a,
    socketConnected: r,
    currentUserEmail: i,
    currentUserFullName: h,
    phone: p,
    refDoctype: u,
    refName: d,
    links: w,
    isChatOpen: !0,
    // Standalone component assumes it is active/open if rendered
    showNotification: x,
    showWarning: l,
    showError: m
  });
  return !y || !S ? null : /* @__PURE__ */ c.jsx(Kt, { apiAdapter: y, config: S, socketAdapter: j, socketPayload: n, children: /* @__PURE__ */ c.jsx(Vr, {}) });
}, Kr = () => {
  const {
    isLoading: e,
    isConnected: t,
    isSending: s,
    isTemplateModalOpen: n,
    setIsTemplateModalOpen: r,
    selectedTemplateText: o,
    selectedTemplateName: a,
    selectedTemplate: i,
    setSelectedTemplateText: h,
    setSelectedTemplateName: p,
    setSelectedTemplate: u,
    attachedFile: d,
    templates: w,
    isLoadingTemplates: x,
    sendMessage: l,
    handleTemplateSelect: m,
    handleFileSelect: y,
    handleFileRemove: S,
    uploadFileMutation: j
  } = tn(), { config: O } = Ee();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-chat-container whatsapp-send-msg-only", children: [
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-send-only-spacer", style: { flex: 1, minHeight: "20px" } }),
      /* @__PURE__ */ c.jsx(
        Qt,
        {
          onSend: l,
          isLoading: e || s || j.isPending,
          isUploading: j.isPending,
          isSending: s,
          onTemplateClick: () => r(!0),
          templateText: o,
          selectedTemplateName: a,
          selectedTemplate: i,
          onClearTemplate: () => {
            p(void 0), h(void 0), u(void 0);
          },
          attachedFile: d,
          onFileSelect: y,
          onFileRemove: S
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      Te,
      {
        open: n,
        onClose: () => r(!1),
        width: "700px",
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Select WhatsApp Template" }),
        children: /* @__PURE__ */ c.jsx(en, { templates: w, onSelect: m, isLoading: x })
      }
    )
  ] });
}, Xr = ({
  apiAdapter: e,
  config: t,
  socketAdapter: s,
  socketPayload: n,
  socketConnected: r,
  baseURL: o,
  token: a,
  currentUserEmail: i,
  currentUserFullName: h,
  phone: p,
  refDoctype: u = "Contact",
  refName: d = "",
  links: w = [],
  showNotification: x,
  showWarning: l,
  showError: m
}) => {
  const { apiAdapter: y, config: S, finalSocketAdapter: j } = Ye({
    apiAdapter: e,
    config: t,
    socketAdapter: s,
    baseURL: o,
    token: a,
    socketConnected: r,
    currentUserEmail: i,
    currentUserFullName: h,
    phone: p,
    refDoctype: u,
    refName: d,
    links: w,
    isChatOpen: !0,
    showNotification: x,
    showWarning: l,
    showError: m
  });
  return !y || !S ? null : /* @__PURE__ */ c.jsx(
    Kt,
    {
      apiAdapter: y,
      config: { ...S, isChatOpen: !0, preventHistoryFetch: !0 },
      socketAdapter: j,
      socketPayload: n,
      children: /* @__PURE__ */ c.jsx(Kr, {})
    }
  );
}, Bt = /* @__PURE__ */ new Set();
function Gr(e, t, s, n, r, o, a) {
  const i = Ue((l) => l.incomingData), h = Ue((l) => l.setIncomingData), p = Ue((l) => l.handleIncomingMessage), u = Ue((l) => l.clearContact), d = ie(null), w = fe(() => {
    if (!n && !r)
      return i.filter((m) => m.type === "whatsapp").reduce((m, y) => m + (y.counts || 0), 0);
    const l = i.find(
      (m) => m.type === "whatsapp" && (n && m.from === n || r && m.customer === r)
    );
    return (l == null ? void 0 : l.counts) ?? 0;
  }, [i, n, r]), x = Fe(async () => {
    if (e.getIncomingCommunications)
      try {
        const l = await e.getIncomingCommunications(a || "");
        h(l);
      } catch (l) {
        console.error("Failed to fetch incoming communications:", l);
      }
    else
      try {
        await e.getUnreadCount(n || "", r || "");
      } catch (l) {
        console.error("Failed to fetch unread count:", l);
      }
  }, [e, n, r, h]);
  return ne(() => {
    x();
  }, [x]), ne(() => {
    o && u(n, r);
  }, [o, n, r, u]), ne(() => {
    if (!e) return;
    const l = e.onMessageSent;
    return e.onMessageSent = () => {
      x(), l && l();
    }, () => {
      e.onMessageSent && (e.onMessageSent = l);
    };
  }, [e, x]), ne(() => {
    const l = (m) => {
      if (!m || m.name === void 0) return;
      const y = m.status !== null && m.status !== void 0;
      if (m.is_outbound === 0 && !y && (p(m), !o && !Bt.has(m.name) && (Bt.add(m.name), e.showNotification))) {
        const S = m.sender || m.from_name || "Customer";
        e.showNotification("WhatsApp", `New message received from ${S}`);
      }
    };
    if (t != null && t.onMessage) {
      const m = (y) => l(y);
      return t.onMessage(m), () => {
        var y;
        return (y = t.offMessage) == null ? void 0 : y.call(t, m);
      };
    }
    if (s && s.event === "whatsapp_message") {
      const m = s.message, y = String((m == null ? void 0 : m.name) ?? (m == null ? void 0 : m.message_id) ?? "");
      if (y && d.current === y)
        return;
      y && (d.current = y);
      const S = it(m);
      l(S);
    }
  }, [t, s, e, p, o]), w;
}
const Ro = ({
  apiAdapter: e,
  config: t,
  socketAdapter: s,
  baseURL: n,
  token: r,
  socketPayload: o,
  socketConnected: a,
  currentUserEmail: i,
  currentUserFullName: h,
  phone: p,
  refDoctype: u = "Contact",
  refName: d = "",
  links: w = [],
  buttonLabel: x,
  icon: l,
  btnClassName: m = "",
  modalSize: y = "1024px",
  variant: S = "default",
  isOpen: j,
  onOpen: O,
  onClose: C,
  showNotification: k,
  showWarning: v,
  showError: N
}) => {
  const [H, W] = K(!1), J = j !== void 0 ? j : H, { apiAdapter: Z, config: B, finalSocketAdapter: V } = Ye({
    apiAdapter: e,
    config: t,
    socketAdapter: s,
    baseURL: n,
    token: r,
    socketConnected: a,
    currentUserEmail: i,
    currentUserFullName: h,
    phone: p,
    refDoctype: u,
    refName: d,
    links: w,
    isChatOpen: J,
    showNotification: k,
    showWarning: v,
    showError: N
  }), U = Gr(Z, V, o, p, d || void 0, J, B == null ? void 0 : B.currentUser), Q = () => {
    j !== void 0 ? J ? C == null || C() : O == null || O() : W(!H);
  };
  return Z ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    S === "plain" ? /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: m,
        onClick: Q,
        style: {
          position: "relative",
          ...typeof m == "string" && m.includes("button") ? {} : { border: "none", background: "none", cursor: "pointer", padding: 0 }
        },
        children: [
          l || x,
          U > 0 && /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-badge", style: { top: "-10px", right: "-10px" }, children: U })
        ]
      }
    ) : /* @__PURE__ */ c.jsxs("div", { className: `whatsapp-trigger-wrapper ${m}`, onClick: Q, children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-trigger-icon-container", children: [
        l || /* @__PURE__ */ c.jsx(zt, { size: 20, color: "#175353" }),
        U > 0 && /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-badge", children: U })
      ] }),
      /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-label", children: x })
    ] }),
    /* @__PURE__ */ c.jsx(
      Te,
      {
        open: J,
        onClose: Q,
        width: y,
        header: /* @__PURE__ */ c.jsx("h3", { style: { margin: 0, fontSize: "1.1rem" }, children: "WhatsApp Chat" }),
        children: /* @__PURE__ */ c.jsx(
          Yr,
          {
            apiAdapter: Z,
            config: B,
            socketAdapter: V,
            socketPayload: o,
            currentUserFullName: h
          }
        )
      }
    )
  ] }) : null;
}, So = ({
  apiAdapter: e,
  config: t,
  socketAdapter: s,
  baseURL: n,
  token: r,
  socketPayload: o,
  socketConnected: a,
  currentUserEmail: i,
  currentUserFullName: h,
  phone: p,
  refDoctype: u = "Contact",
  refName: d = "",
  links: w = [],
  buttonLabel: x = "Send WhatsApp",
  icon: l,
  btnClassName: m = "",
  modalSize: y = "600px",
  variant: S = "default",
  isOpen: j,
  onOpen: O,
  onClose: C,
  showNotification: k,
  showWarning: v,
  showError: N
}) => {
  const [H, W] = K(!1), J = j !== void 0 ? j : H, { apiAdapter: Z, config: B, finalSocketAdapter: V } = Ye({
    apiAdapter: e,
    config: t,
    socketAdapter: s,
    baseURL: n,
    token: r,
    socketConnected: a,
    currentUserEmail: i,
    currentUserFullName: h,
    phone: p,
    refDoctype: u,
    refName: d,
    links: w,
    isChatOpen: J,
    showNotification: k,
    showWarning: v,
    showError: N
  }), U = () => {
    j !== void 0 ? J ? C == null || C() : O == null || O() : W(!H);
  };
  return Z ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    S === "plain" ? /* @__PURE__ */ c.jsx(
      "button",
      {
        className: m,
        onClick: U,
        style: {
          position: "relative",
          ...typeof m == "string" && m.includes("button") ? {} : { border: "none", background: "none", cursor: "pointer", padding: 0 }
        },
        children: l || x
      }
    ) : /* @__PURE__ */ c.jsxs("div", { className: `whatsapp-trigger-wrapper ${m}`, onClick: U, children: [
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-trigger-icon-container", children: l || /* @__PURE__ */ c.jsx(zt, { size: 20, color: "#175353" }) }),
      /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-label", children: x })
    ] }),
    /* @__PURE__ */ c.jsx(
      Te,
      {
        open: J,
        onClose: U,
        width: y,
        header: /* @__PURE__ */ c.jsx("h3", { style: { margin: 0, fontSize: "1.1rem" }, children: "WhatsApp Chat" }),
        children: /* @__PURE__ */ c.jsx("div", { style: { padding: "0 4px 8px 4px" }, children: /* @__PURE__ */ c.jsx(
          Xr,
          {
            apiAdapter: Z,
            config: B,
            socketAdapter: V,
            socketPayload: o,
            currentUserFullName: h
          }
        ) })
      }
    )
  ] }) : null;
};
export {
  rs as WhatsAppMessageSkeleton,
  ls as WhatsAppTemplateSkeleton,
  Yr as WhatsappChat,
  Kt as WhatsappChatProvider,
  Ro as WhatsappChatTrigger,
  Vr as WhatsappChatWidget,
  Xr as WhatsappSendMessage,
  So as WhatsappSendMessageTrigger,
  Kr as WhatsappSendMessageWidget,
  Gr as useWhatsappBadgeCount,
  Ee as useWhatsappChatConfig,
  tn as useWhatsappWidgetLogic,
  ue as useWhatsappWidgetZustand
};
