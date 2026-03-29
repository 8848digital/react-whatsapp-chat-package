import ve, { useContext as Kt, createContext as Yt, useRef as ae, useMemo as me, useEffect as se, forwardRef as Mn, useImperativeHandle as Un, useState as Y, useCallback as Oe } from "react";
import { WhatsappLogo as Dn, User as Ln, X as In, Paperclip as $n, FileText as Bn, PaperPlaneTilt as Wn, ArrowSquareOut as qn, Check as zn, Checks as Hn, Warning as Jn, Clock as Vn, Eye as Kn } from "@phosphor-icons/react";
import { useStore as Yn, createStore as Xn, create as Gn } from "zustand";
import './index.css';var Ie = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function Zn() {
  if (Et) return Ee;
  Et = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(s, r, o) {
    var a = null;
    if (o !== void 0 && (a = "" + o), r.key !== void 0 && (a = "" + r.key), "key" in r) {
      o = {};
      for (var i in r)
        i !== "key" && (o[i] = r[i]);
    } else o = r;
    return r = o.ref, {
      $$typeof: e,
      type: s,
      key: a,
      ref: r !== void 0 ? r : null,
      props: o
    };
  }
  return Ee.Fragment = t, Ee.jsx = n, Ee.jsxs = n, Ee;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function Qn() {
  return Tt || (Tt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === ce ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case y:
          return "Fragment";
        case C:
          return "Profiler";
        case _:
          return "StrictMode";
        case M:
          return "Suspense";
        case R:
          return "SuspenseList";
        case J:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case h:
            return "Portal";
          case v:
            return g.displayName || "Context";
          case O:
            return (g._context.displayName || "Context") + ".Consumer";
          case N:
            var T = g.render;
            return g = g.displayName, g || (g = T.displayName || T.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case L:
            return T = g.displayName || null, T !== null ? T : e(g.type) || "Memo";
          case q:
            T = g._payload, g = g._init;
            try {
              return e(g(T));
            } catch {
            }
        }
      return null;
    }
    function t(g) {
      return "" + g;
    }
    function n(g) {
      try {
        t(g);
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var A = T.error, F = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return A.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), t(g);
      }
    }
    function s(g) {
      if (g === y) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === q)
        return "<...>";
      try {
        var T = e(g);
        return T ? "<" + T + ">" : "<...>";
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
      if (H.call(g, "key")) {
        var T = Object.getOwnPropertyDescriptor(g, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function i(g, T) {
      function A() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: A,
        configurable: !0
      });
    }
    function m() {
      var g = e(this.type);
      return re[g] || (re[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function p(g, T, A, F, te, Re) {
      var D = A.ref;
      return g = {
        $$typeof: l,
        type: g,
        key: T,
        props: A,
        _owner: F
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: m
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
        value: te
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Re
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function u(g, T, A, F, te, Re) {
      var D = T.children;
      if (D !== void 0)
        if (F)
          if (I(D)) {
            for (F = 0; F < D.length; F++)
              d(D[F]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(D);
      if (H.call(T, "key")) {
        D = e(g);
        var fe = Object.keys(T).filter(function(Qe) {
          return Qe !== "key";
        });
        F = 0 < fe.length ? "{key: someKey, " + fe.join(": ..., ") + ": ...}" : "{key: someKey}", le[D + F] || (fe = 0 < fe.length ? "{" + fe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          D,
          fe,
          D
        ), le[D + F] = !0);
      }
      if (D = null, A !== void 0 && (n(A), D = "" + A), a(T) && (n(T.key), D = "" + T.key), "key" in T) {
        A = {};
        for (var Se in T)
          Se !== "key" && (A[Se] = T[Se]);
      } else A = T;
      return D && i(
        A,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), p(
        g,
        D,
        A,
        r(),
        te,
        Re
      );
    }
    function d(g) {
      w(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === q && (g._payload.status === "fulfilled" ? w(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
    }
    function w(g) {
      return typeof g == "object" && g !== null && g.$$typeof === l;
    }
    var b = ve, l = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), v = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), ce = Symbol.for("react.client.reference"), B = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, I = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(g) {
        return g();
      }
    };
    var P, re = {}, ee = b.react_stack_bottom_frame.bind(
      b,
      o
    )(), de = Q(s(o)), le = {};
    Te.Fragment = y, Te.jsx = function(g, T, A) {
      var F = 1e4 > B.recentlyCreatedOwnerStacks++;
      return u(
        g,
        T,
        A,
        !1,
        F ? Error("react-stack-top-frame") : ee,
        F ? Q(s(g)) : de
      );
    }, Te.jsxs = function(g, T, A) {
      var F = 1e4 > B.recentlyCreatedOwnerStacks++;
      return u(
        g,
        T,
        A,
        !0,
        F ? Error("react-stack-top-frame") : ee,
        F ? Q(s(g)) : de
      );
    };
  })()), Te;
}
var jt;
function es() {
  return jt || (jt = 1, process.env.NODE_ENV === "production" ? Ie.exports = Zn() : Ie.exports = Qn()), Ie.exports;
}
var c = es();
const ts = (e) => /* @__PURE__ */ c.jsx(Ln, { ...e }), ns = (e) => /* @__PURE__ */ c.jsx($n, { ...e }), ss = (e) => /* @__PURE__ */ c.jsx(Wn, { ...e }), ft = (e) => /* @__PURE__ */ c.jsx(In, { ...e }), rs = (e) => /* @__PURE__ */ c.jsx(Kn, { ...e }), Ot = (e) => /* @__PURE__ */ c.jsx(Hn, { ...e }), vt = (e) => /* @__PURE__ */ c.jsx(zn, { ...e }), os = (e) => /* @__PURE__ */ c.jsx(qn, { ...e }), Xt = (e) => /* @__PURE__ */ c.jsx(Bn, { ...e }), as = (e) => /* @__PURE__ */ c.jsx(Vn, { ...e }), is = (e) => /* @__PURE__ */ c.jsx(Jn, { ...e }), Gt = (e) => /* @__PURE__ */ c.jsx(Dn, { ...e }), Zt = (e) => {
  if (!e) return "";
  try {
    return new Date(e).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}, Qt = (e, t) => {
  if (t !== 1) return null;
  const n = (s) => ({
    size: 14,
    style: { color: s, marginLeft: "4px" }
  });
  switch (e) {
    case 5:
      return /* @__PURE__ */ c.jsx(as, { ...n("#999") });
    case 2:
      return /* @__PURE__ */ c.jsx(is, { ...n("#ff4444") });
    case 1:
      return /* @__PURE__ */ c.jsx(vt, { ...n("#999") });
    case 3:
      return /* @__PURE__ */ c.jsx(Ot, { ...n("#999"), weight: "bold" });
    case 4:
      return /* @__PURE__ */ c.jsx(Ot, { ...n("#53bdeb"), weight: "bold" });
    default:
      return /* @__PURE__ */ c.jsx(vt, { ...n("#999") });
  }
}, cs = (e) => {
  if (!e) return null;
  const t = /(https?:\/\/[^\s]+|(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?)/g, n = [];
  let s = 0, r, o = 0;
  for (; (r = t.exec(e)) !== null; ) {
    r.index > s && n.push(e.substring(s, r.index));
    const a = r[0], i = a.startsWith("http://") || a.startsWith("https://") ? a : `https://${a}`;
    n.push(
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
    ), s = r.index + r[0].length;
  }
  return s < e.length && n.push(e.substring(s)), n.length > 0 ? /* @__PURE__ */ c.jsx(ve.Fragment, { children: n }) : e;
};
function ls(e) {
  if (!e) return;
  const t = e.toLowerCase();
  if (t === "success" || t === "sent") return 1;
  if (t === "failed") return 2;
  if (t === "delivered") return 3;
  if (t === "read") return 4;
  const n = parseInt(e, 10);
  if (!isNaN(n) && n >= 1 && n <= 5) return n;
}
function pt(e) {
  var u;
  if (!(e != null && e.name)) return null;
  const n = String(e.type ?? "").trim().toLowerCase() === "outgoing" || e.is_outbound === 1 || e.is_outbound === "1";
  let s = ls(e.status ?? void 0);
  s === void 0 && n && (s = 5);
  const r = e.message_type === "Template", o = e.message != null ? String(e.message) : void 0, a = o != null && o.trim() !== "" && o !== "Template message", i = r && !a && e.template ? e.template : o ?? e.template ?? "", m = (u = e.links) != null && u.length ? e.links.filter((d) => !!(d != null && d.button_label && (d != null && d.link))).map((d) => ({ button_label: d.button_label, link: d.link })) : void 0, p = e.from_name || e.profile_name;
  return {
    name: e.name,
    message: i,
    sender: p || (n ? "You" : "Customer"),
    creation: e.creation ?? (/* @__PURE__ */ new Date()).toISOString(),
    is_outbound: n ? 1 : 0,
    attach: Array.isArray(e.attach) ? e.attach : e.attach ?? void 0,
    content_type: e.content_type ?? void 0,
    status: s,
    header: r ? e.header ?? void 0 : void 0,
    footer: r ? e.footer ?? void 0 : void 0,
    template_links: m != null && m.length ? m : void 0,
    from: e.from || e.sender || null,
    reference_name: e.reference_name || e.customer || null,
    message_type: e.message_type,
    header_type: r ? e.header_type ?? void 0 : void 0,
    sample: r ? e.sample ?? void 0 : void 0
  };
}
const $e = Gn((e) => ({
  incomingData: [],
  setIncomingData: (t) => e({ incomingData: t }),
  handleIncomingMessage: (t) => e((n) => {
    if (t.is_outbound === 1) return n;
    const s = [...n.incomingData], r = t.name, o = t.from || t.sender || "", a = t.reference_name || "";
    if (t.status === 4) {
      const u = s.findIndex((d) => {
        var w;
        return (w = d.names) == null ? void 0 : w.includes(r);
      });
      if (u !== -1) {
        const d = { ...s[u] };
        return d.names = d.names.filter((w) => w !== r), d.counts = Math.max(0, (d.counts || 0) - 1), d.counts === 0 ? s.splice(u, 1) : s[u] = d, { incomingData: s };
      }
      return n;
    }
    if (s.some((u) => {
      var d;
      return (d = u.names) == null ? void 0 : d.includes(r);
    })) return n;
    const p = s.findIndex(
      (u) => u.type === "whatsapp" && (o && u.from === o || a && u.customer === a)
    );
    if (p !== -1)
      return s[p] = {
        ...s[p],
        counts: (s[p].counts || 0) + 1,
        names: [...s[p].names || [], r]
      }, { incomingData: s };
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
      return { incomingData: [...s, u] };
    }
  }),
  clearContact: (t, n) => e((s) => ({ incomingData: s.incomingData.filter((o) => o.type !== "whatsapp" ? !0 : !(t && o.from === t || n && o.customer === n)) }))
})), us = () => Xn((e) => ({
  messages: [],
  isLoading: !1,
  error: null,
  setMessages: (t) => e({ messages: t }),
  appendMessage: (t) => e((n) => ({ messages: [...n.messages, t] })),
  updateMessageStatus: (t, n) => e((s) => ({
    messages: s.messages.map((r) => r.name === t ? { ...r, status: n } : r)
  })),
  replaceMessage: (t, n) => e((s) => ({
    messages: s.messages.map((r) => r.name === t ? n : r)
  })),
  clearMessages: () => e({ messages: [], error: null }),
  setLoading: (t) => e({ isLoading: t }),
  setError: (t) => e({ error: t })
})), en = Yt(void 0), tn = Yt(void 0), nn = ({
  apiAdapter: e,
  config: t,
  socketAdapter: n,
  socketPayload: s,
  children: r
}) => {
  const [o] = ve.useState(() => us());
  return /* @__PURE__ */ c.jsx(en.Provider, { value: { apiAdapter: e, config: t, socketAdapter: n, socketPayload: s }, children: /* @__PURE__ */ c.jsx(tn.Provider, { value: o, children: r }) });
}, Ce = () => {
  const e = Kt(en);
  if (!e) throw new Error("Missing WhatsappChatProvider");
  return e;
}, sn = () => {
  const e = Kt(tn);
  if (!e) throw new Error("Missing WhatsappChatProvider");
  return e;
}, ue = (e) => {
  const t = sn();
  return Yn(t, e);
};
function ds(e) {
  return e.startsWith("/") ? e.slice(1) : e;
}
const rn = ({
  header: e,
  message: t,
  footer: n,
  template_links: s,
  creation: r,
  is_outbound: o,
  status: a,
  header_type: i,
  sample: m,
  isPreview: p = !1
}) => {
  const { config: u } = Ce(), d = u.apiBaseUrl || "", w = m ? `${d}/${ds(m)}` : void 0, b = i === "IMAGE" && w, l = i === "DOCUMENT" && w, h = !i || i === "TEXT";
  return /* @__PURE__ */ c.jsx("div", { className: "whatsapp-template-message-card", children: /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-template-card-inner", children: [
    b && /* @__PURE__ */ c.jsx(
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
          /* @__PURE__ */ c.jsx(Xt, { size: 24, color: "#e74c3c" }),
          /* @__PURE__ */ c.jsx("span", { children: (m == null ? void 0 : m.split("/").pop()) || "Untitled" })
        ]
      }
    ),
    h && e && /* @__PURE__ */ c.jsx("h4", { className: "whatsapp-template-card-header", children: e }),
    /* @__PURE__ */ c.jsx("p", { className: "whatsapp-template-card-body", children: t }),
    n && /* @__PURE__ */ c.jsx("p", { className: "whatsapp-template-card-footer", children: n }),
    s && s.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "whatsapp-template-card-buttons", children: s.map((y, _) => /* @__PURE__ */ c.jsxs("a", { href: y.link, target: "_blank", rel: "noopener noreferrer", className: "whatsapp-template-card-button", children: [
      /* @__PURE__ */ c.jsx(os, { size: 16, color: "currentColor" }),
      /* @__PURE__ */ c.jsx("span", { children: y.button_label })
    ] }, _)) }),
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-template-card-meta", children: [
      /* @__PURE__ */ c.jsx("span", { children: Zt(r) }),
      !p && o === 1 && Qt(a, o)
    ] })
  ] }) });
}, X = ({ width: e, height: t, className: n, style: s }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: `whatsapp-skeleton ${n || ""}`,
    style: {
      width: e,
      height: t,
      ...s
    }
  }
), fs = () => {
  const e = { marginBottom: 8 };
  return /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-message-list", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx(X, { width: "140px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(X, { width: "60px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble sent", style: e, children: [
      /* @__PURE__ */ c.jsx(X, { width: "100px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(X, { width: "55px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx(X, { width: "180px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(X, { width: "60px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble sent", style: e, children: [
      /* @__PURE__ */ c.jsx(X, { width: "120px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(X, { width: "55px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx(X, { width: "90px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(X, { width: "60px", height: "0.75rem" })
    ] })
  ] });
};
function ps(e, t) {
  if (e == null || e === "") return t ? 5 : void 0;
  if (typeof e == "number" && e >= 1 && e <= 5) return e;
  if (typeof e == "string") {
    const n = e.toLowerCase();
    if (n === "success" || n === "sent") return 1;
    if (n === "failed") return 2;
    if (n === "delivered") return 3;
    if (n === "read") return 4;
    if (n === "pending") return 5;
    const s = parseInt(e, 10);
    if (!isNaN(s) && s >= 1 && s <= 5) return s;
  }
  return t ? 5 : void 0;
}
const ms = ({
  messages: e,
  isLoading: t = !1,
  error: n = null,
  activity: s,
  icon: r,
  showIcon: o = !1,
  enableScroll: a = !0
}) => {
  const { config: i } = Ce(), m = i.apiBaseUrl || "", p = ae(null), u = me(() => {
    var d;
    if (s) {
      const w = s.creation || (s.date && s.time ? `${s.date} ${s.time}` : (/* @__PURE__ */ new Date()).toISOString()), b = s.type === "Outgoing" || s.is_outbound === 1, l = ((d = s.links) == null ? void 0 : d.map((h) => ({
        button_label: h.button_label ?? "",
        link: h.link ?? h.website_url ?? ""
      }))) ?? void 0;
      return [
        {
          name: s.name || `activity-${w}`,
          message: s.message || "",
          sender: s.type === "Outgoing" ? "You" : "Customer",
          creation: w,
          is_outbound: b ? 1 : 0,
          attach: s.attach,
          content_type: s.content_type,
          status: ps(s.status, b),
          message_type: s.message_type,
          header: s.header,
          footer: s.footer,
          template_links: l != null && l.filter((h) => h.link || h.button_label).length ? l : void 0,
          header_type: s.header_type,
          sample: s.sample
        }
      ];
    }
    return e || [];
  }, [s, e]);
  return se(() => {
    var d;
    a && ((d = p.current) == null || d.scrollIntoView({ behavior: "smooth" }));
  }, [u, a]), t ? /* @__PURE__ */ c.jsx(fs, {}) : n ? /* @__PURE__ */ c.jsx("div", { className: "whatsapp-message-list", style: { textAlign: "center", color: "#c53030", padding: "20px" }, children: n }) : /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-message-list", children: [
    u.length === 0 && /* @__PURE__ */ c.jsx("div", { style: { textAlign: "center", color: "#888", padding: "20px" }, children: "No messages yet. Start the conversation!" }),
    u.map((d, w) => {
      const b = d, l = Array.isArray(b.attach) ? b.attach : b.attach ? [b.attach] : [], h = b.content_type;
      return b.message_type === "Template" ? /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: `message-bubble ${d.is_outbound ? "sent" : "received"} message-bubble--template`,
          children: [
            o && r && /* @__PURE__ */ c.jsx("div", { className: "message-icon-wrapper", children: r }),
            /* @__PURE__ */ c.jsx(
              rn,
              {
                header: b.header,
                message: d.message,
                footer: b.footer,
                template_links: b.template_links,
                creation: d.creation,
                is_outbound: d.is_outbound,
                status: d.status,
                header_type: b.header_type,
                sample: b.sample
              }
            )
          ]
        },
        `${d.name}-${w}`
      ) : /* @__PURE__ */ c.jsxs("div", { className: `message-bubble ${d.is_outbound ? "sent" : "received"}`, children: [
        o && r && /* @__PURE__ */ c.jsx("div", { className: "message-icon-wrapper", children: r }),
        /* @__PURE__ */ c.jsxs("div", { className: "message-content", children: [
          cs(d.message) || d.message,
          l.length > 0 && l.map((_, C) => /* @__PURE__ */ c.jsx("div", { className: "message-attachment", children: h === "image" ? /* @__PURE__ */ c.jsx(
            "img",
            {
              src: `${m}/${_}`,
              alt: "attachment",
              className: "message-attachment-image",
              style: { maxWidth: "200px", borderRadius: "4px" }
            }
          ) : /* @__PURE__ */ c.jsx(
            "a",
            {
              href: `${m}/${_}`,
              target: "_blank",
              rel: "noreferrer",
              className: "message-attachment-link",
              title: "View attachment",
              children: _.split("/").pop() || "Attachment"
            }
          ) }, `${d.name}-attach-${C}`)),
          /* @__PURE__ */ c.jsxs("div", { className: "message-time", children: [
            Zt(d.creation),
            Qt(d.status, d.is_outbound)
          ] })
        ] })
      ] }, `${d.name}-${w}`);
    }),
    /* @__PURE__ */ c.jsx("div", { ref: p })
  ] });
}, on = Mn(({ onSelect: e, multiple: t = !0, accept: n, maxFileSize: s, className: r = "" }, o) => {
  const a = ae(null);
  Un(o, () => ({
    click: () => {
      var m;
      (m = a.current) == null || m.click();
    }
  }));
  const i = (m) => {
    const p = m.target.files;
    if (p && e) {
      const u = Array.from(p);
      if (s) {
        const d = u.filter((w) => w.size <= s);
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
      accept: n,
      onChange: i,
      className: r,
      style: { display: "none" }
    }
  );
});
on.displayName = "FileUpload";
const Ne = ({
  open: e,
  onClose: t,
  header: n,
  children: s,
  width: r = "600px",
  className: o = ""
}) => (se(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
  document.body.style.overflow = "unset";
}), [e]), e ? /* @__PURE__ */ c.jsx("div", { className: `raw-modal-overlay ${o}`, onClick: t, children: /* @__PURE__ */ c.jsxs(
  "div",
  {
    className: "raw-modal-container",
    style: { maxWidth: r },
    onClick: (a) => a.stopPropagation(),
    children: [
      /* @__PURE__ */ c.jsxs("div", { className: "raw-modal-header", children: [
        /* @__PURE__ */ c.jsx("div", { className: "raw-modal-title", children: n }),
        /* @__PURE__ */ c.jsx("button", { className: "raw-modal-close", onClick: t, children: /* @__PURE__ */ c.jsx(ft, { size: 20 }) })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "raw-modal-body", children: s })
    ]
  }
) }) : null), hs = ({
  selectedTemplateName: e,
  templateText: t,
  template: n,
  onClearTemplate: s
}) => {
  var b;
  const [r, o] = Y(!1), a = () => {
    s(), o(!1);
  }, i = e.split("-")[0], m = (n == null ? void 0 : n.template) ?? t ?? "", p = (n == null ? void 0 : n.header) ?? null, u = (n == null ? void 0 : n.footer) ?? null, d = ((b = n == null ? void 0 : n.links) == null ? void 0 : b.map((l) => ({
    button_label: l.button_label ?? "",
    link: l.link ?? ""
  }))) || [], w = (n == null ? void 0 : n.modified) || (n == null ? void 0 : n.creation) || (/* @__PURE__ */ new Date()).toISOString();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-template-chip", children: [
      /* @__PURE__ */ c.jsxs("span", { children: [
        "Template: ",
        i
      ] }),
      /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => o(!0), className: "whatsapp-template-chip-preview", title: "Preview template", children: /* @__PURE__ */ c.jsx(rs, { size: 20, color: "currentColor" }) }),
      /* @__PURE__ */ c.jsx("button", { type: "button", onClick: a, className: "whatsapp-template-chip-clear", title: "Send as normal message instead", children: /* @__PURE__ */ c.jsx(ft, { size: 20, color: "currentColor" }) })
    ] }),
    /* @__PURE__ */ c.jsx(
      Ne,
      {
        open: r,
        onClose: () => o(!1),
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Template Preview" }),
        children: /* @__PURE__ */ c.jsx("div", { style: { padding: "20px 0" }, children: n ? /* @__PURE__ */ c.jsx(
          rn,
          {
            header: p,
            message: m,
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
}, gs = ({ attachedFile: e, onFileRemove: t }) => /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-attachment-preview", children: [
  e.preview && /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsx("img", { src: e.preview, alt: "Preview", className: "whatsapp-attachment-image-thumb" }) }),
  /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-attachment-info", children: [
    /* @__PURE__ */ c.jsx("span", { className: "whatsapp-attachment-name", children: e.file.name }),
    t && /* @__PURE__ */ c.jsx("button", { onClick: t, type: "button", className: "whatsapp-attachment-remove", title: "Remove attachment", children: /* @__PURE__ */ c.jsx(ft, { size: 14, color: "#666" }) })
  ] })
] }), Ct = () => /* @__PURE__ */ c.jsx("div", { className: "whatsapp-spinner" }), an = ({
  onSend: e,
  isLoading: t,
  isUploading: n = !1,
  isSending: s = !1,
  onTemplateClick: r,
  templateText: o,
  selectedTemplateName: a,
  selectedTemplate: i,
  onClearTemplate: m,
  attachedFiles: p = [],
  onFileRemove: u,
  onFileSelect: d,
  initialInputText: w = ""
}) => {
  const [b, l] = Y(w), h = ae(null), y = ae(null), _ = !!a;
  ve.useEffect(() => {
    var R;
    _ && ((R = h.current) == null || R.focus());
  }, [_]), ve.useEffect(() => {
    o !== void 0 && o !== "" ? l(o) : a || l(w ?? "");
  }, [o, a, w]);
  const C = () => {
    var q;
    const R = p.map((J) => J.fileUrl).filter(Boolean).map((J) => ({ file: J })), L = (q = p[0]) == null ? void 0 : q.contentType;
    (b.trim() || R.length > 0 || _) && (e(b, R, L), _ || l(""));
  }, O = () => {
    var R;
    (R = y.current) == null || R.click();
  }, v = (R) => {
    R != null && R.length && d && d(R);
  }, N = (R) => {
    R.key === "Enter" && !t && C();
  }, M = (R) => {
    const L = R.target.value;
    l(L), !L.trim() && a && m && m();
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: h,
      className: "whatsapp-input-container",
      onKeyDown: N,
      tabIndex: _ ? 0 : void 0,
      style: { outline: "none" },
      children: [
        /* @__PURE__ */ c.jsx(on, { ref: y, onSelect: v, multiple: !0, accept: "image/*,video/*,audio/*,.pdf,.doc,.docx" }),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: O,
            type: "button",
            className: "whatsapp-input-btn",
            disabled: t,
            title: n ? "Uploading..." : "Attach File",
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
            children: n ? /* @__PURE__ */ c.jsx(Ct, {}) : /* @__PURE__ */ c.jsx(ns, { size: 20, color: "#175353" })
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
            children: /* @__PURE__ */ c.jsx(Xt, { size: 20, color: "#175353" })
          }
        ),
        a && m && /* @__PURE__ */ c.jsx(
          hs,
          {
            selectedTemplateName: a,
            templateText: o,
            template: i,
            onClearTemplate: () => {
              m(), l("");
            }
          }
        ),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            value: b,
            onChange: M,
            placeholder: "Type a message...",
            className: "whatsapp-input-field",
            disabled: t || _
          }
        ),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: C,
            className: "whatsapp-send-btn",
            disabled: t || !_ && !b.trim() && p.length === 0,
            title: s ? "Sending..." : "Send",
            children: s ? /* @__PURE__ */ c.jsx(Ct, {}) : /* @__PURE__ */ c.jsx(ss, { size: 20, color: "white" })
          }
        ),
        p.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "whatsapp-input-attachments-row", children: p.map((R, L) => /* @__PURE__ */ c.jsx(
          gs,
          {
            attachedFile: R,
            onFileRemove: u ? () => u(L) : void 0
          },
          `${R.file.name}-${L}`
        )) })
      ]
    }
  );
}, ys = () => /* @__PURE__ */ c.jsx("div", { className: "whatsapp-templates-grid", children: Array.from({ length: 4 }).map((e, t) => /* @__PURE__ */ c.jsxs(
  "div",
  {
    className: "whatsapp-template-skeleton-item",
    children: [
      /* @__PURE__ */ c.jsx(X, { width: "40%", height: "12px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-item-divider" }),
      /* @__PURE__ */ c.jsx(X, { width: "100%", height: "14px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx(X, { width: "90%", height: "14px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx(X, { width: "60%", height: "14px" })
    ]
  },
  t
)) });
function ws(e) {
  let t = "";
  return e.header && (t += `*${e.header}*

`), t += e.template || "", e.footer && (t += `

${e.footer}`), t;
}
const cn = ({ templates: e, onSelect: t, isLoading: n = !1 }) => {
  const [s, r] = Y(null);
  return n ? /* @__PURE__ */ c.jsx(ys, {}) : e.length === 0 ? /* @__PURE__ */ c.jsx("section", { style: { padding: "1rem", textAlign: "center" }, children: /* @__PURE__ */ c.jsx("p", { style: { color: "#666", fontSize: "0.875rem" }, children: "No templates available" }) }) : /* @__PURE__ */ c.jsx("section", { style: { padding: "1rem" }, children: /* @__PURE__ */ c.jsx("div", { className: "template-scroll-container", children: /* @__PURE__ */ c.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }, children: e.map((o) => {
    const a = ws(o), i = s === o.name;
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
function bs(e) {
  return e.type.startsWith("image/") ? "image" : e.type.startsWith("video/") ? "video" : e.type.startsWith("audio/") ? "audio" : "document";
}
function ln(e) {
  const t = e.toLowerCase();
  return /\.(png|jpe?g|gif|webp|bmp|svg)$/.test(t) ? "image" : /\.(mp4|webm|mov|mkv)$/.test(t) ? "video" : /\.(mp3|wav|ogg|m4a)$/.test(t) ? "audio" : "document";
}
function xs(e, t) {
  if (ln(e) !== "image") return;
  const n = e.trim();
  if (n.startsWith("http://") || n.startsWith("https://")) return n;
  const s = (t || "").replace(/\/$/, ""), r = n.startsWith("/") ? n : `/${n}`;
  return s ? `${s}${r}` : n;
}
function _s(e, t) {
  const n = e.file.trim(), s = n.split("/").filter(Boolean).pop() || "attachment", r = ln(n);
  return {
    file: new File([], s, {
      type: r === "image" ? "image/png" : r === "video" ? "video/mp4" : "application/octet-stream"
    }),
    fileUrl: n,
    contentType: r,
    preview: xs(n, t)
  };
}
function un() {
  const { config: e, apiAdapter: t, socketAdapter: n, socketPayload: s } = Ce(), r = sn(), o = ue((S) => S.messages), a = ue((S) => S.isLoading), i = ue((S) => S.error), m = ue((S) => S.setMessages), p = ue((S) => S.appendMessage), u = ue((S) => S.replaceMessage), d = ue((S) => S.updateMessageStatus), w = ue((S) => S.setLoading), b = ue((S) => S.setError), [l, h] = Y(!1), y = (n == null ? void 0 : n.isConnected) ?? !0, [_, C] = Y(!1), [O, v] = Y(), [N, M] = Y(), [R, L] = Y(), [q, J] = Y([]), [ce, B] = Y(!1), [H, I] = Y([]), [Q, P] = Y(!1), [re, ee] = Y(0), de = ae(null), le = me(() => {
    var oe;
    const S = e.doctype || "", x = e.refName || "", E = e.activeLeadDoctype || "", z = e.activeLeadName || "";
    let k = S, K = x, W = e.links || [];
    if (z)
      k = E, K = z, W = S ? [{ link_doctype: S, link_name: x }] : [];
    else {
      const pe = (oe = e.links) == null ? void 0 : oe.find((Ue) => {
        var we;
        return (we = Ue.link_doctype) == null ? void 0 : we.includes("Lead");
      });
      pe && (k = pe.link_doctype, K = pe.link_name, W = S ? [{ link_doctype: S, link_name: x }] : []);
    }
    const U = z ? [{ reference_doctype: E, reference_name: z }] : [{ reference_doctype: S, reference_name: x }, ...(e.links || []).map((pe) => ({ reference_doctype: pe.link_doctype, reference_name: pe.link_name }))];
    return {
      primaryDoctype: k,
      primaryName: K,
      secondaryLinks: W,
      templateRefs: U,
      baseDoctype: S,
      baseName: x,
      activeLeadDoctype: E,
      activeLeadName: z
    };
  }, [e]), g = ae(t.getMessages);
  se(() => {
    g.current = t.getMessages;
  }, [t.getMessages]), se(() => {
    var E;
    const S = e.isChatOpen, x = de.current;
    de.current = S, S && (x === !1 && ee((z) => z + 1), (x === !1 || x === null) && ((E = e.attach) != null && E.length ? I(e.attach.map((z) => _s(z, e.apiBaseUrl))) : I([])));
  }, [e.isChatOpen, e.attach, e.apiBaseUrl]), se(() => {
    if (!e.isChatOpen || e.preventHistoryFetch) return;
    (async () => {
      var x;
      w(!0), b(null);
      try {
        const E = await ((x = g.current) == null ? void 0 : x.call(g, e.doctype || "", e.refName || ""));
        E && m([...E].reverse());
      } catch (E) {
        b(E instanceof Error ? E.message : "Failed to fetch");
      } finally {
        w(!1);
      }
    })();
  }, [e.isChatOpen, e.doctype, e.refName, w, b, m]), se(() => {
    if (!_ || q.length > 0) return;
    (async () => {
      var x;
      B(!0);
      try {
        const E = await ((x = t.getTemplates) == null ? void 0 : x.call(t, le.templateRefs));
        E && J(E);
      } catch (E) {
        console.error("Template fetch failed", E);
      } finally {
        B(!1);
      }
    })();
  }, [_, t, le.templateRefs, q.length]);
  const T = ae(!1), A = ae(/* @__PURE__ */ new Set()), F = ae(null), te = ae(null);
  se(() => {
    if (!e.isChatOpen) {
      T.current = !1, A.current.clear();
      return;
    }
    if (T.current || !o.length || !t.sendReadReceipt)
      return;
    const S = o.findLast((x) => x.is_outbound === 0 && (x.status === null || x.status === void 0));
    S != null && S.name && !A.current.has(S.name) ? (t.sendReadReceipt(S.name), A.current.add(S.name), T.current = !0) : o.length > 0 && (T.current = !0);
  }, [e.isChatOpen, o, t]);
  const Re = Oe((S) => {
    I((x) => {
      const E = x[S];
      return E != null && E.preview && URL.revokeObjectURL(E.preview), x.filter((z, k) => k !== S);
    });
  }, []), D = Oe(() => {
    I((S) => (S.forEach((x) => {
      x.preview && URL.revokeObjectURL(x.preview);
    }), []));
  }, []), fe = Oe(
    async (S, x, E) => {
      var xt, _t, Rt, St;
      const {
        primaryDoctype: z,
        primaryName: k,
        secondaryLinks: K,
        baseDoctype: W,
        baseName: U,
        activeLeadDoctype: oe,
        activeLeadName: pe
      } = le, Ue = {
        to: e.phone
      };
      if (N) {
        const be = ((R == null ? void 0 : R.for_doctype) ?? "").trim();
        let tt = z, nt = k, st = K;
        be.includes("Lead") ? (tt = oe || be, nt = pe || k, st = W ? [{ link_doctype: W, link_name: U }] : []) : (tt = W || z, nt = U || k, st = e.links || []);
        const Le = `temp-${Date.now()}`;
        te.current = Le;
        const Pn = {
          name: Le,
          message: O ?? (R == null ? void 0 : R.template) ?? "",
          sender: "You",
          creation: (/* @__PURE__ */ new Date()).toISOString(),
          is_outbound: 1,
          status: 5,
          message_type: "Template",
          header: R == null ? void 0 : R.header,
          footer: R == null ? void 0 : R.footer
        };
        p(Pn), h(!0);
        try {
          await t.sendTemplate({
            ...Ue,
            reference_doctype: tt,
            reference_name: nt,
            template: N,
            links: st
          }), d(Le, 1), (xt = t.showNotification) == null || xt.call(t, "WhatsApp", "Template sent successfully"), M(void 0), v(void 0), L(void 0), D(), t.onMessageSent && t.onMessageSent();
        } catch (Fn) {
          console.error(Fn), d(Le, 2), (_t = t.showError) == null || _t.call(t, "WhatsApp", "Failed to send template message");
        } finally {
          h(!1);
        }
        return;
      }
      const we = (S || "").trim();
      if (!we && (!x || x.length === 0)) return;
      const De = `temp-${Date.now()}`;
      F.current = De;
      const et = (x == null ? void 0 : x.map((be) => be.file).filter(Boolean)) || [], bt = et[0];
      p({
        name: De,
        message: we,
        sender: "You",
        creation: (/* @__PURE__ */ new Date()).toISOString(),
        is_outbound: 1,
        attach: et.length ? et : void 0,
        content_type: bt ? E || "document" : void 0,
        status: 5
      }), h(!0);
      try {
        await t.sendMessage({
          ...Ue,
          reference_doctype: z,
          reference_name: k,
          message: we,
          attach: x && x.length ? x : "",
          content_type: bt ? E : void 0,
          links: K
        }), d(De, 1), (Rt = t.showNotification) == null || Rt.call(t, "WhatsApp", "Message sent successfully"), D(), t.onMessageSent && t.onMessageSent();
      } catch (be) {
        console.error(be), d(De, 2), (St = t.showError) == null || St.call(t, "WhatsApp", "Failed to send message");
      } finally {
        h(!1);
      }
    },
    [N, t, e.phone, e.links, R, O, p, d, le, D]
  ), Se = (S, x, E) => {
    v(S), M(x), L(E), C(!1);
  }, Qe = Oe(async (S) => {
    var x;
    if (!(!t.uploadFiles && !t.uploadFile || !S.length)) {
      P(!0);
      try {
        let E = [];
        t.uploadFiles ? E = (await t.uploadFiles(S)).file_urls || [] : E = (await Promise.all(S.map((K) => t.uploadFile(K)))).map((K) => K.file_url).filter(Boolean);
        const z = S.map((k, K) => ({
          file: k,
          fileUrl: E[K] || "",
          contentType: bs(k),
          preview: k.type.startsWith("image/") ? URL.createObjectURL(k) : void 0
        })).filter((k) => !!k.fileUrl);
        I((k) => [...k, ...z]);
      } catch (E) {
        console.error(E), (x = t.showError) == null || x.call(t, "WhatsApp", "Failed to upload file");
      } finally {
        P(!1);
      }
    }
  }, [t]);
  return se(() => {
    const S = (x) => {
      var K;
      if (!x || !x.name) return;
      const E = r.getState().messages, z = x.status !== null && x.status !== void 0;
      let k = -1;
      if (x.is_outbound === 0 && z) {
        E.some((U) => U.name === x.name) && typeof x.status == "number" && d(x.name, x.status);
        return;
      }
      if (e.isChatOpen && x.is_outbound === 0 && x.name && e.phone === x.from && !(x.status === 4) && !A.current.has(x.name) && ((K = t.sendReadReceipt) == null || K.call(t, x.name), A.current.add(x.name)), x.is_outbound === 1)
        if (x.message_type === "Template") {
          const W = te.current;
          if (W && (k = E.findIndex((U) => U.name === W)), k === -1)
            for (let U = E.length - 1; U >= 0; U--) {
              const oe = E[U];
              if (oe.name.startsWith("temp-") && oe.message_type === "Template") {
                k = U;
                break;
              }
            }
        } else {
          const W = F.current;
          if (W && (k = E.findIndex((U) => U.name === W)), k === -1 && (x.message && (k = E.findIndex((U) => U.name.startsWith("temp-") && U.is_outbound === 1 && U.message === x.message)), k === -1))
            for (let U = E.length - 1; U >= 0; U--) {
              const oe = E[U];
              if (oe.name.startsWith("temp-") && oe.is_outbound === 1 && oe.message_type !== "Template") {
                k = U;
                break;
              }
            }
        }
      if (k !== -1) {
        const W = E[k];
        u(W.name, x), W.name === F.current && (F.current = null), W.name === te.current && (te.current = null);
      } else
        E.some((U) => U.name === x.name) ? typeof x.status == "number" && d(x.name, x.status) : p(x);
    };
    if (n != null && n.onMessage) {
      const x = (E) => S(E);
      return n.onMessage(x), () => {
        var E;
        return (E = n.offMessage) == null ? void 0 : E.call(n, x);
      };
    }
    if (s && s.event === "whatsapp_message") {
      const x = s.message, E = pt(x);
      S(E);
    }
  }, [n, s, e.phone, e.isChatOpen, t, r, u, p, d]), {
    displayMessages: o,
    isLoading: a,
    messagesError: i,
    isConnected: y,
    isSending: l,
    isTemplateModalOpen: _,
    setIsTemplateModalOpen: C,
    selectedTemplateText: O,
    selectedTemplateName: N,
    selectedTemplate: R,
    setSelectedTemplateText: v,
    setSelectedTemplateName: M,
    setSelectedTemplate: L,
    attachedFiles: H,
    templates: q,
    isLoadingTemplates: ce,
    sendMessage: fe,
    handleTemplateSelect: Se,
    handleFileSelect: Qe,
    handleFileRemove: Re,
    uploadFileMutation: { isPending: Q },
    composerMountKey: re
  };
}
function dn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Rs } = Object.prototype, { getPrototypeOf: mt } = Object, { iterator: Ve, toStringTag: fn } = Symbol, Ke = /* @__PURE__ */ ((e) => (t) => {
  const n = Rs.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ie = (e) => (e = e.toLowerCase(), (t) => Ke(t) === e), Ye = (e) => (t) => typeof t === e, { isArray: _e } = Array, xe = Ye("undefined");
function Ae(e) {
  return e !== null && !xe(e) && e.constructor !== null && !xe(e.constructor) && G(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const pn = ie("ArrayBuffer");
function Ss(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && pn(e.buffer), t;
}
const Es = Ye("string"), G = Ye("function"), mn = Ye("number"), ke = (e) => e !== null && typeof e == "object", Ts = (e) => e === !0 || e === !1, qe = (e) => {
  if (Ke(e) !== "object")
    return !1;
  const t = mt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(fn in e) && !(Ve in e);
}, js = (e) => {
  if (!ke(e) || Ae(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Os = ie("Date"), vs = ie("File"), Cs = (e) => !!(e && typeof e.uri < "u"), Ns = (e) => e && typeof e.getParts < "u", As = ie("Blob"), ks = ie("FileList"), Ps = (e) => ke(e) && G(e.pipe);
function Fs() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Nt = Fs(), At = typeof Nt.FormData < "u" ? Nt.FormData : void 0, Ms = (e) => {
  let t;
  return e && (At && e instanceof At || G(e.append) && ((t = Ke(e)) === "formdata" || // detect form-data instance
  t === "object" && G(e.toString) && e.toString() === "[object FormData]"));
}, Us = ie("URLSearchParams"), [Ds, Ls, Is, $s] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(ie), Bs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Pe(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, r;
  if (typeof e != "object" && (e = [e]), _e(e))
    for (s = 0, r = e.length; s < r; s++)
      t.call(null, e[s], s, e);
  else {
    if (Ae(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let i;
    for (s = 0; s < a; s++)
      i = o[s], t.call(null, e[i], i, e);
  }
}
function hn(e, t) {
  if (Ae(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, r;
  for (; s-- > 0; )
    if (r = n[s], t === r.toLowerCase())
      return r;
  return null;
}
const he = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, gn = (e) => !xe(e) && e !== he;
function ct() {
  const { caseless: e, skipUndefined: t } = gn(this) && this || {}, n = {}, s = (r, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const a = e && hn(n, o) || o;
    qe(n[a]) && qe(r) ? n[a] = ct(n[a], r) : qe(r) ? n[a] = ct({}, r) : _e(r) ? n[a] = r.slice() : (!t || !xe(r)) && (n[a] = r);
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Pe(arguments[r], s);
  return n;
}
const Ws = (e, t, n, { allOwnKeys: s } = {}) => (Pe(
  t,
  (r, o) => {
    n && G(r) ? Object.defineProperty(e, o, {
      value: dn(r, n),
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
  { allOwnKeys: s }
), e), qs = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), zs = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Hs = (e, t, n, s) => {
  let r, o, a;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      a = r[o], (!s || s(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = n !== !1 && mt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Js = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, Vs = (e) => {
  if (!e) return null;
  if (_e(e)) return e;
  let t = e.length;
  if (!mn(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ks = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && mt(Uint8Array)), Ys = (e, t) => {
  const s = (e && e[Ve]).call(e);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, Xs = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, Gs = ie("HTMLFormElement"), Zs = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, s, r) {
  return s.toUpperCase() + r;
}), kt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Qs = ie("RegExp"), yn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  Pe(n, (r, o) => {
    let a;
    (a = t(r, o, e)) !== !1 && (s[o] = a || r);
  }), Object.defineProperties(e, s);
}, er = (e) => {
  yn(e, (t, n) => {
    if (G(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if (G(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, tr = (e, t) => {
  const n = {}, s = (r) => {
    r.forEach((o) => {
      n[o] = !0;
    });
  };
  return _e(e) ? s(e) : s(String(e).split(t)), n;
}, nr = () => {
}, sr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function rr(e) {
  return !!(e && G(e.append) && e[fn] === "FormData" && e[Ve]);
}
const or = (e) => {
  const t = new Array(10), n = (s, r) => {
    if (ke(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (Ae(s))
        return s;
      if (!("toJSON" in s)) {
        t[r] = s;
        const o = _e(s) ? [] : {};
        return Pe(s, (a, i) => {
          const m = n(a, r + 1);
          !xe(m) && (o[i] = m);
        }), t[r] = void 0, o;
      }
    }
    return s;
  };
  return n(e, 0);
}, ar = ie("AsyncFunction"), ir = (e) => e && (ke(e) || G(e)) && G(e.then) && G(e.catch), wn = ((e, t) => e ? setImmediate : t ? ((n, s) => (he.addEventListener(
  "message",
  ({ source: r, data: o }) => {
    r === he && o === n && s.length && s.shift()();
  },
  !1
), (r) => {
  s.push(r), he.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", G(he.postMessage)), cr = typeof queueMicrotask < "u" ? queueMicrotask.bind(he) : typeof process < "u" && process.nextTick || wn, lr = (e) => e != null && G(e[Ve]), f = {
  isArray: _e,
  isArrayBuffer: pn,
  isBuffer: Ae,
  isFormData: Ms,
  isArrayBufferView: Ss,
  isString: Es,
  isNumber: mn,
  isBoolean: Ts,
  isObject: ke,
  isPlainObject: qe,
  isEmptyObject: js,
  isReadableStream: Ds,
  isRequest: Ls,
  isResponse: Is,
  isHeaders: $s,
  isUndefined: xe,
  isDate: Os,
  isFile: vs,
  isReactNativeBlob: Cs,
  isReactNative: Ns,
  isBlob: As,
  isRegExp: Qs,
  isFunction: G,
  isStream: Ps,
  isURLSearchParams: Us,
  isTypedArray: Ks,
  isFileList: ks,
  forEach: Pe,
  merge: ct,
  extend: Ws,
  trim: Bs,
  stripBOM: qs,
  inherits: zs,
  toFlatObject: Hs,
  kindOf: Ke,
  kindOfTest: ie,
  endsWith: Js,
  toArray: Vs,
  forEachEntry: Ys,
  matchAll: Xs,
  isHTMLForm: Gs,
  hasOwnProperty: kt,
  hasOwnProp: kt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: yn,
  freezeMethods: er,
  toObjectSet: tr,
  toCamelCase: Zs,
  noop: nr,
  toFiniteNumber: sr,
  findKey: hn,
  global: he,
  isContextDefined: gn,
  isSpecCompliantForm: rr,
  toJSONObject: or,
  isAsyncFn: ar,
  isThenable: ir,
  setImmediate: wn,
  asap: cr,
  isIterable: lr
};
let j = class bn extends Error {
  static from(t, n, s, r, o, a) {
    const i = new bn(t.message, n || t.code, s, r, o);
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
  constructor(t, n, s, r, o) {
    super(t), Object.defineProperty(this, "message", {
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), s && (this.config = s), r && (this.request = r), o && (this.response = o, this.status = o.status);
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
j.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
j.ERR_BAD_OPTION = "ERR_BAD_OPTION";
j.ECONNABORTED = "ECONNABORTED";
j.ETIMEDOUT = "ETIMEDOUT";
j.ERR_NETWORK = "ERR_NETWORK";
j.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
j.ERR_DEPRECATED = "ERR_DEPRECATED";
j.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
j.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
j.ERR_CANCELED = "ERR_CANCELED";
j.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
j.ERR_INVALID_URL = "ERR_INVALID_URL";
const ur = null;
function lt(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function xn(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function rt(e, t, n) {
  return e ? e.concat(t).map(function(r, o) {
    return r = xn(r), !n && o ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function dr(e) {
  return f.isArray(e) && !e.some(lt);
}
const fr = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Xe(e, t, n) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = f.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(h, y) {
      return !f.isUndefined(y[h]);
    }
  );
  const s = n.metaTokens, r = n.visitor || u, o = n.dots, a = n.indexes, m = (n.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(r))
    throw new TypeError("visitor must be a function");
  function p(l) {
    if (l === null) return "";
    if (f.isDate(l))
      return l.toISOString();
    if (f.isBoolean(l))
      return l.toString();
    if (!m && f.isBlob(l))
      throw new j("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(l) || f.isTypedArray(l) ? m && typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l;
  }
  function u(l, h, y) {
    let _ = l;
    if (f.isReactNative(t) && f.isReactNativeBlob(l))
      return t.append(rt(y, h, o), p(l)), !1;
    if (l && !y && typeof l == "object") {
      if (f.endsWith(h, "{}"))
        h = s ? h : h.slice(0, -2), l = JSON.stringify(l);
      else if (f.isArray(l) && dr(l) || (f.isFileList(l) || f.endsWith(h, "[]")) && (_ = f.toArray(l)))
        return h = xn(h), _.forEach(function(O, v) {
          !(f.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? rt([h], v, o) : a === null ? h : h + "[]",
            p(O)
          );
        }), !1;
    }
    return lt(l) ? !0 : (t.append(rt(y, h, o), p(l)), !1);
  }
  const d = [], w = Object.assign(fr, {
    defaultVisitor: u,
    convertValue: p,
    isVisitable: lt
  });
  function b(l, h) {
    if (!f.isUndefined(l)) {
      if (d.indexOf(l) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(l), f.forEach(l, function(_, C) {
        (!(f.isUndefined(_) || _ === null) && r.call(t, _, f.isString(C) ? C.trim() : C, h, w)) === !0 && b(_, h ? h.concat(C) : [C]);
      }), d.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function Pt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
    return t[s];
  });
}
function ht(e, t) {
  this._pairs = [], e && Xe(e, this, t);
}
const _n = ht.prototype;
_n.append = function(t, n) {
  this._pairs.push([t, n]);
};
_n.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, Pt);
  } : Pt;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function pr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Rn(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || pr, r = f.isFunction(n) ? {
    serialize: n
  } : n, o = r && r.serialize;
  let a;
  if (o ? a = o(t, r) : a = f.isURLSearchParams(t) ? t.toString() : new ht(t, r).toString(s), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Ft {
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
  use(t, n, s) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
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
    f.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const gt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, mr = typeof URLSearchParams < "u" ? URLSearchParams : ht, hr = typeof FormData < "u" ? FormData : null, gr = typeof Blob < "u" ? Blob : null, yr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: mr,
    FormData: hr,
    Blob: gr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, yt = typeof window < "u" && typeof document < "u", ut = typeof navigator == "object" && navigator || void 0, wr = yt && (!ut || ["ReactNative", "NativeScript", "NS"].indexOf(ut.product) < 0), br = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", xr = yt && window.location.href || "http://localhost", _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: yt,
  hasStandardBrowserEnv: wr,
  hasStandardBrowserWebWorkerEnv: br,
  navigator: ut,
  origin: xr
}, Symbol.toStringTag, { value: "Module" })), V = {
  ..._r,
  ...yr
};
function Rr(e, t) {
  return Xe(e, new V.classes.URLSearchParams(), {
    visitor: function(n, s, r, o) {
      return V.isNode && f.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Sr(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Er(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const r = n.length;
  let o;
  for (s = 0; s < r; s++)
    o = n[s], t[o] = e[o];
  return t;
}
function Sn(e) {
  function t(n, s, r, o) {
    let a = n[o++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), m = o >= n.length;
    return a = !a && f.isArray(r) ? r.length : a, m ? (f.hasOwnProp(r, a) ? r[a] = [r[a], s] : r[a] = s, !i) : ((!r[a] || !f.isObject(r[a])) && (r[a] = []), t(n, s, r[a], o) && f.isArray(r[a]) && (r[a] = Er(r[a])), !i);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (s, r) => {
      t(Sr(s), r, n, 0);
    }), n;
  }
  return null;
}
function Tr(e, t, n) {
  if (f.isString(e))
    try {
      return (t || JSON.parse)(e), f.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const Fe = {
  transitional: gt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const s = n.getContentType() || "", r = s.indexOf("application/json") > -1, o = f.isObject(t);
      if (o && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
        return r ? JSON.stringify(Sn(t)) : t;
      if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t) || f.isReadableStream(t))
        return t;
      if (f.isArrayBufferView(t))
        return t.buffer;
      if (f.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (o) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return Rr(t, this.formSerializer).toString();
        if ((i = f.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
          const m = this.env && this.env.FormData;
          return Xe(
            i ? { "files[]": t } : t,
            m && new m(),
            this.formSerializer
          );
        }
      }
      return o || r ? (n.setContentType("application/json", !1), Tr(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || Fe.transitional, s = n && n.forcedJSONParsing, r = this.responseType === "json";
      if (f.isResponse(t) || f.isReadableStream(t))
        return t;
      if (t && f.isString(t) && (s && !this.responseType || r)) {
        const a = !(n && n.silentJSONParsing) && r;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (i) {
          if (a)
            throw i.name === "SyntaxError" ? j.from(i, j.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: V.classes.FormData,
    Blob: V.classes.Blob
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
  Fe.headers[e] = {};
});
const jr = f.toObjectSet([
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
]), Or = (e) => {
  const t = {};
  let n, s, r;
  return e && e.split(`
`).forEach(function(a) {
    r = a.indexOf(":"), n = a.substring(0, r).trim().toLowerCase(), s = a.substring(r + 1).trim(), !(!n || t[n] && jr[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Mt = Symbol("internals");
function je(e) {
  return e && String(e).trim().toLowerCase();
}
function ze(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(ze) : String(e);
}
function vr(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const Cr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ot(e, t, n, s, r) {
  if (f.isFunction(s))
    return s.call(this, t, n);
  if (r && (t = n), !!f.isString(t)) {
    if (f.isString(s))
      return t.indexOf(s) !== -1;
    if (f.isRegExp(s))
      return s.test(t);
  }
}
function Nr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function Ar(e, t) {
  const n = f.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function(r, o, a) {
        return this[s].call(this, t, r, o, a);
      },
      configurable: !0
    });
  });
}
let Z = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function o(i, m, p) {
      const u = je(m);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = f.findKey(r, u);
      (!d || r[d] === void 0 || p === !0 || p === void 0 && r[d] !== !1) && (r[d || m] = ze(i));
    }
    const a = (i, m) => f.forEach(i, (p, u) => o(p, u, m));
    if (f.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (f.isString(t) && (t = t.trim()) && !Cr(t))
      a(Or(t), n);
    else if (f.isObject(t) && f.isIterable(t)) {
      let i = {}, m, p;
      for (const u of t) {
        if (!f.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        i[p = u[0]] = (m = i[p]) ? f.isArray(m) ? [...m, u[1]] : [m, u[1]] : u[1];
      }
      a(i, n);
    } else
      t != null && o(n, t, s);
    return this;
  }
  get(t, n) {
    if (t = je(t), t) {
      const s = f.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n)
          return r;
        if (n === !0)
          return vr(r);
        if (f.isFunction(n))
          return n.call(this, r, s);
        if (f.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = je(t), t) {
      const s = f.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || ot(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function o(a) {
      if (a = je(a), a) {
        const i = f.findKey(s, a);
        i && (!n || ot(s, s[i], i, n)) && (delete s[i], r = !0);
      }
    }
    return f.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, r = !1;
    for (; s--; ) {
      const o = n[s];
      (!t || ot(this, this[o], o, t, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, s = {};
    return f.forEach(this, (r, o) => {
      const a = f.findKey(s, o);
      if (a) {
        n[a] = ze(r), delete n[o];
        return;
      }
      const i = t ? Nr(o) : String(o).trim();
      i !== o && delete n[o], n[i] = ze(r), s[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (s, r) => {
      s != null && s !== !1 && (n[r] = t && f.isArray(s) ? s.join(", ") : s);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
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
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((r) => s.set(r)), s;
  }
  static accessor(t) {
    const s = (this[Mt] = this[Mt] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(a) {
      const i = je(a);
      s[i] || (Ar(r, a), s[i] = !0);
    }
    return f.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Z.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
f.reduceDescriptors(Z.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
f.freezeMethods(Z);
function at(e, t) {
  const n = this || Fe, s = t || n, r = Z.from(s.headers);
  let o = s.data;
  return f.forEach(e, function(i) {
    o = i.call(n, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function En(e) {
  return !!(e && e.__CANCEL__);
}
let Me = class extends j {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, s) {
    super(t ?? "canceled", j.ERR_CANCELED, n, s), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Tn(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(
    new j(
      "Request failed with status code " + n.status,
      [j.ERR_BAD_REQUEST, j.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    )
  );
}
function kr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Pr(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let r = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(m) {
    const p = Date.now(), u = s[o];
    a || (a = p), n[r] = m, s[r] = p;
    let d = o, w = 0;
    for (; d !== r; )
      w += n[d++], d = d % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), p - a < t)
      return;
    const b = u && p - u;
    return b ? Math.round(w * 1e3 / b) : void 0;
  };
}
function Fr(e, t) {
  let n = 0, s = 1e3 / t, r, o;
  const a = (p, u = Date.now()) => {
    n = u, r = null, o && (clearTimeout(o), o = null), e(...p);
  };
  return [(...p) => {
    const u = Date.now(), d = u - n;
    d >= s ? a(p, u) : (r = p, o || (o = setTimeout(() => {
      o = null, a(r);
    }, s - d)));
  }, () => r && a(r)];
}
const Je = (e, t, n = 3) => {
  let s = 0;
  const r = Pr(50, 250);
  return Fr((o) => {
    const a = o.loaded, i = o.lengthComputable ? o.total : void 0, m = a - s, p = r(m), u = a <= i;
    s = a;
    const d = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: m,
      rate: p || void 0,
      estimated: p && i && u ? (i - a) / p : void 0,
      event: o,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, Ut = (e, t) => {
  const n = e != null;
  return [
    (s) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: s
    }),
    t[1]
  ];
}, Dt = (e) => (...t) => f.asap(() => e(...t)), Mr = V.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, V.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(V.origin),
  V.navigator && /(msie|trident)/i.test(V.navigator.userAgent)
) : () => !0, Ur = V.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, s, r, o, a) {
      if (typeof document > "u") return;
      const i = [`${e}=${encodeURIComponent(t)}`];
      f.isNumber(n) && i.push(`expires=${new Date(n).toUTCString()}`), f.isString(s) && i.push(`path=${s}`), f.isString(r) && i.push(`domain=${r}`), o === !0 && i.push("secure"), f.isString(a) && i.push(`SameSite=${a}`), document.cookie = i.join("; ");
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
function Dr(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Lr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function jn(e, t, n) {
  let s = !Dr(t);
  return e && (s || n == !1) ? Lr(e, t) : t;
}
const Lt = (e) => e instanceof Z ? { ...e } : e;
function ye(e, t) {
  t = t || {};
  const n = {};
  function s(p, u, d, w) {
    return f.isPlainObject(p) && f.isPlainObject(u) ? f.merge.call({ caseless: w }, p, u) : f.isPlainObject(u) ? f.merge({}, u) : f.isArray(u) ? u.slice() : u;
  }
  function r(p, u, d, w) {
    if (f.isUndefined(u)) {
      if (!f.isUndefined(p))
        return s(void 0, p, d, w);
    } else return s(p, u, d, w);
  }
  function o(p, u) {
    if (!f.isUndefined(u))
      return s(void 0, u);
  }
  function a(p, u) {
    if (f.isUndefined(u)) {
      if (!f.isUndefined(p))
        return s(void 0, p);
    } else return s(void 0, u);
  }
  function i(p, u, d) {
    if (d in t)
      return s(p, u);
    if (d in e)
      return s(void 0, p);
  }
  const m = {
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
    headers: (p, u, d) => r(Lt(p), Lt(u), d, !0)
  };
  return f.forEach(Object.keys({ ...e, ...t }), function(u) {
    if (u === "__proto__" || u === "constructor" || u === "prototype") return;
    const d = f.hasOwnProp(m, u) ? m[u] : r, w = d(e[u], t[u], u);
    f.isUndefined(w) && d !== i || (n[u] = w);
  }), n;
}
const On = (e) => {
  const t = ye({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: o, headers: a, auth: i } = t;
  if (t.headers = a = Z.from(a), t.url = Rn(
    jn(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), i && a.set(
    "Authorization",
    "Basic " + btoa(
      (i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : "")
    )
  ), f.isFormData(n)) {
    if (V.hasStandardBrowserEnv || V.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (f.isFunction(n.getHeaders)) {
      const m = n.getHeaders(), p = ["content-type", "content-length"];
      Object.entries(m).forEach(([u, d]) => {
        p.includes(u.toLowerCase()) && a.set(u, d);
      });
    }
  }
  if (V.hasStandardBrowserEnv && (s && f.isFunction(s) && (s = s(t)), s || s !== !1 && Mr(t.url))) {
    const m = r && o && Ur.read(o);
    m && a.set(r, m);
  }
  return t;
}, Ir = typeof XMLHttpRequest < "u", $r = Ir && function(e) {
  return new Promise(function(n, s) {
    const r = On(e);
    let o = r.data;
    const a = Z.from(r.headers).normalize();
    let { responseType: i, onUploadProgress: m, onDownloadProgress: p } = r, u, d, w, b, l;
    function h() {
      b && b(), l && l(), r.cancelToken && r.cancelToken.unsubscribe(u), r.signal && r.signal.removeEventListener("abort", u);
    }
    let y = new XMLHttpRequest();
    y.open(r.method.toUpperCase(), r.url, !0), y.timeout = r.timeout;
    function _() {
      if (!y)
        return;
      const O = Z.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), N = {
        data: !i || i === "text" || i === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: O,
        config: e,
        request: y
      };
      Tn(
        function(R) {
          n(R), h();
        },
        function(R) {
          s(R), h();
        },
        N
      ), y = null;
    }
    "onloadend" in y ? y.onloadend = _ : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, y.onabort = function() {
      y && (s(new j("Request aborted", j.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function(v) {
      const N = v && v.message ? v.message : "Network Error", M = new j(N, j.ERR_NETWORK, e, y);
      M.event = v || null, s(M), y = null;
    }, y.ontimeout = function() {
      let v = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const N = r.transitional || gt;
      r.timeoutErrorMessage && (v = r.timeoutErrorMessage), s(
        new j(
          v,
          N.clarifyTimeoutError ? j.ETIMEDOUT : j.ECONNABORTED,
          e,
          y
        )
      ), y = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in y && f.forEach(a.toJSON(), function(v, N) {
      y.setRequestHeader(N, v);
    }), f.isUndefined(r.withCredentials) || (y.withCredentials = !!r.withCredentials), i && i !== "json" && (y.responseType = r.responseType), p && ([w, l] = Je(p, !0), y.addEventListener("progress", w)), m && y.upload && ([d, b] = Je(m), y.upload.addEventListener("progress", d), y.upload.addEventListener("loadend", b)), (r.cancelToken || r.signal) && (u = (O) => {
      y && (s(!O || O.type ? new Me(null, e, y) : O), y.abort(), y = null);
    }, r.cancelToken && r.cancelToken.subscribe(u), r.signal && (r.signal.aborted ? u() : r.signal.addEventListener("abort", u)));
    const C = kr(r.url);
    if (C && V.protocols.indexOf(C) === -1) {
      s(
        new j(
          "Unsupported protocol " + C + ":",
          j.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    y.send(o || null);
  });
}, Br = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let s = new AbortController(), r;
    const o = function(p) {
      if (!r) {
        r = !0, i();
        const u = p instanceof Error ? p : this.reason;
        s.abort(
          u instanceof j ? u : new Me(u instanceof Error ? u.message : u)
        );
      }
    };
    let a = t && setTimeout(() => {
      a = null, o(new j(`timeout of ${t}ms exceeded`, j.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((p) => {
        p.unsubscribe ? p.unsubscribe(o) : p.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((p) => p.addEventListener("abort", o));
    const { signal: m } = s;
    return m.unsubscribe = () => f.asap(i), m;
  }
}, Wr = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, r;
  for (; s < n; )
    r = s + t, yield e.slice(s, r), s = r;
}, qr = async function* (e, t) {
  for await (const n of zr(e))
    yield* Wr(n, t);
}, zr = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: s } = await t.read();
      if (n)
        break;
      yield s;
    }
  } finally {
    await t.cancel();
  }
}, It = (e, t, n, s) => {
  const r = qr(e, t);
  let o = 0, a, i = (m) => {
    a || (a = !0, s && s(m));
  };
  return new ReadableStream(
    {
      async pull(m) {
        try {
          const { done: p, value: u } = await r.next();
          if (p) {
            i(), m.close();
            return;
          }
          let d = u.byteLength;
          if (n) {
            let w = o += d;
            n(w);
          }
          m.enqueue(new Uint8Array(u));
        } catch (p) {
          throw i(p), p;
        }
      },
      cancel(m) {
        return i(m), r.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, $t = 64 * 1024, { isFunction: Be } = f, Hr = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(f.global), { ReadableStream: Bt, TextEncoder: Wt } = f.global, qt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Jr = (e) => {
  e = f.merge.call(
    {
      skipUndefined: !0
    },
    Hr,
    e
  );
  const { fetch: t, Request: n, Response: s } = e, r = t ? Be(t) : typeof fetch == "function", o = Be(n), a = Be(s);
  if (!r)
    return !1;
  const i = r && Be(Bt), m = r && (typeof Wt == "function" ? /* @__PURE__ */ ((l) => (h) => l.encode(h))(new Wt()) : async (l) => new Uint8Array(await new n(l).arrayBuffer())), p = o && i && qt(() => {
    let l = !1;
    const h = new n(V.origin, {
      body: new Bt(),
      method: "POST",
      get duplex() {
        return l = !0, "half";
      }
    }).headers.has("Content-Type");
    return l && !h;
  }), u = a && i && qt(() => f.isReadableStream(new s("").body)), d = {
    stream: u && ((l) => l.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((l) => {
    !d[l] && (d[l] = (h, y) => {
      let _ = h && h[l];
      if (_)
        return _.call(h);
      throw new j(
        `Response type '${l}' is not supported`,
        j.ERR_NOT_SUPPORT,
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
      return (await new n(V.origin, {
        method: "POST",
        body: l
      }).arrayBuffer()).byteLength;
    if (f.isArrayBufferView(l) || f.isArrayBuffer(l))
      return l.byteLength;
    if (f.isURLSearchParams(l) && (l = l + ""), f.isString(l))
      return (await m(l)).byteLength;
  }, b = async (l, h) => {
    const y = f.toFiniteNumber(l.getContentLength());
    return y ?? w(h);
  };
  return async (l) => {
    let {
      url: h,
      method: y,
      data: _,
      signal: C,
      cancelToken: O,
      timeout: v,
      onDownloadProgress: N,
      onUploadProgress: M,
      responseType: R,
      headers: L,
      withCredentials: q = "same-origin",
      fetchOptions: J
    } = On(l), ce = t || fetch;
    R = R ? (R + "").toLowerCase() : "text";
    let B = Br(
      [C, O && O.toAbortSignal()],
      v
    ), H = null;
    const I = B && B.unsubscribe && (() => {
      B.unsubscribe();
    });
    let Q;
    try {
      if (M && p && y !== "get" && y !== "head" && (Q = await b(L, _)) !== 0) {
        let g = new n(h, {
          method: "POST",
          body: _,
          duplex: "half"
        }), T;
        if (f.isFormData(_) && (T = g.headers.get("content-type")) && L.setContentType(T), g.body) {
          const [A, F] = Ut(
            Q,
            Je(Dt(M))
          );
          _ = It(g.body, $t, A, F);
        }
      }
      f.isString(q) || (q = q ? "include" : "omit");
      const P = o && "credentials" in n.prototype, re = {
        ...J,
        signal: B,
        method: y.toUpperCase(),
        headers: L.normalize().toJSON(),
        body: _,
        duplex: "half",
        credentials: P ? q : void 0
      };
      H = o && new n(h, re);
      let ee = await (o ? ce(H, J) : ce(h, re));
      const de = u && (R === "stream" || R === "response");
      if (u && (N || de && I)) {
        const g = {};
        ["status", "statusText", "headers"].forEach((te) => {
          g[te] = ee[te];
        });
        const T = f.toFiniteNumber(ee.headers.get("content-length")), [A, F] = N && Ut(
          T,
          Je(Dt(N), !0)
        ) || [];
        ee = new s(
          It(ee.body, $t, A, () => {
            F && F(), I && I();
          }),
          g
        );
      }
      R = R || "text";
      let le = await d[f.findKey(d, R) || "text"](
        ee,
        l
      );
      return !de && I && I(), await new Promise((g, T) => {
        Tn(g, T, {
          data: le,
          headers: Z.from(ee.headers),
          status: ee.status,
          statusText: ee.statusText,
          config: l,
          request: H
        });
      });
    } catch (P) {
      throw I && I(), P && P.name === "TypeError" && /Load failed|fetch/i.test(P.message) ? Object.assign(
        new j(
          "Network Error",
          j.ERR_NETWORK,
          l,
          H,
          P && P.response
        ),
        {
          cause: P.cause || P
        }
      ) : j.from(P, P && P.code, l, H, P && P.response);
    }
  };
}, Vr = /* @__PURE__ */ new Map(), vn = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: s, Response: r } = t, o = [s, r, n];
  let a = o.length, i = a, m, p, u = Vr;
  for (; i--; )
    m = o[i], p = u.get(m), p === void 0 && u.set(m, p = i ? /* @__PURE__ */ new Map() : Jr(t)), u = p;
  return p;
};
vn();
const wt = {
  http: ur,
  xhr: $r,
  fetch: {
    get: vn
  }
};
f.forEach(wt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const zt = (e) => `- ${e}`, Kr = (e) => f.isFunction(e) || e === null || e === !1;
function Yr(e, t) {
  e = f.isArray(e) ? e : [e];
  const { length: n } = e;
  let s, r;
  const o = {};
  for (let a = 0; a < n; a++) {
    s = e[a];
    let i;
    if (r = s, !Kr(s) && (r = wt[(i = String(s)).toLowerCase()], r === void 0))
      throw new j(`Unknown adapter '${i}'`);
    if (r && (f.isFunction(r) || (r = r.get(t))))
      break;
    o[i || "#" + a] = r;
  }
  if (!r) {
    const a = Object.entries(o).map(
      ([m, p]) => `adapter ${m} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = n ? a.length > 1 ? `since :
` + a.map(zt).join(`
`) : " " + zt(a[0]) : "as no adapter specified";
    throw new j(
      "There is no suitable adapter to dispatch the request " + i,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
const Cn = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Yr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: wt
};
function it(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Me(null, e);
}
function Ht(e) {
  return it(e), e.headers = Z.from(e.headers), e.data = at.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Cn.getAdapter(e.adapter || Fe.adapter, e)(e).then(
    function(s) {
      return it(e), s.data = at.call(e, e.transformResponse, s), s.headers = Z.from(s.headers), s;
    },
    function(s) {
      return En(s) || (it(e), s && s.response && (s.response.data = at.call(
        e,
        e.transformResponse,
        s.response
      ), s.response.headers = Z.from(s.response.headers))), Promise.reject(s);
    }
  );
}
const Nn = "1.13.6", Ge = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ge[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Jt = {};
Ge.transitional = function(t, n, s) {
  function r(o, a) {
    return "[Axios v" + Nn + "] Transitional option '" + o + "'" + a + (s ? ". " + s : "");
  }
  return (o, a, i) => {
    if (t === !1)
      throw new j(
        r(a, " has been removed" + (n ? " in " + n : "")),
        j.ERR_DEPRECATED
      );
    return n && !Jt[a] && (Jt[a] = !0, console.warn(
      r(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, i) : !0;
  };
};
Ge.spelling = function(t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function Xr(e, t, n) {
  if (typeof e != "object")
    throw new j("options must be an object", j.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const o = s[r], a = t[o];
    if (a) {
      const i = e[o], m = i === void 0 || a(i, o, e);
      if (m !== !0)
        throw new j(
          "option " + o + " must be " + m,
          j.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new j("Unknown option " + o, j.ERR_BAD_OPTION);
  }
}
const He = {
  assertOptions: Xr,
  validators: Ge
}, ne = He.validators;
let ge = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ft(),
      response: new Ft()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (s) {
      if (s instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? o && !String(s.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + o) : s.stack = o;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ye(this.defaults, n);
    const { transitional: s, paramsSerializer: r, headers: o } = n;
    s !== void 0 && He.assertOptions(
      s,
      {
        silentJSONParsing: ne.transitional(ne.boolean),
        forcedJSONParsing: ne.transitional(ne.boolean),
        clarifyTimeoutError: ne.transitional(ne.boolean),
        legacyInterceptorReqResOrdering: ne.transitional(ne.boolean)
      },
      !1
    ), r != null && (f.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : He.assertOptions(
      r,
      {
        encode: ne.function,
        serialize: ne.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), He.assertOptions(
      n,
      {
        baseUrl: ne.spelling("baseURL"),
        withXsrfToken: ne.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && f.merge(o.common, o[n.method]);
    o && f.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (l) => {
      delete o[l];
    }), n.headers = Z.concat(a, o);
    const i = [];
    let m = !0;
    this.interceptors.request.forEach(function(h) {
      if (typeof h.runWhen == "function" && h.runWhen(n) === !1)
        return;
      m = m && h.synchronous;
      const y = n.transitional || gt;
      y && y.legacyInterceptorReqResOrdering ? i.unshift(h.fulfilled, h.rejected) : i.push(h.fulfilled, h.rejected);
    });
    const p = [];
    this.interceptors.response.forEach(function(h) {
      p.push(h.fulfilled, h.rejected);
    });
    let u, d = 0, w;
    if (!m) {
      const l = [Ht.bind(this), void 0];
      for (l.unshift(...i), l.push(...p), w = l.length, u = Promise.resolve(n); d < w; )
        u = u.then(l[d++], l[d++]);
      return u;
    }
    w = i.length;
    let b = n;
    for (; d < w; ) {
      const l = i[d++], h = i[d++];
      try {
        b = l(b);
      } catch (y) {
        h.call(this, y);
        break;
      }
    }
    try {
      u = Ht.call(this, b);
    } catch (l) {
      return Promise.reject(l);
    }
    for (d = 0, w = p.length; d < w; )
      u = u.then(p[d++], p[d++]);
    return u;
  }
  getUri(t) {
    t = ye(this.defaults, t);
    const n = jn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Rn(n, t.params, t.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(t) {
  ge.prototype[t] = function(n, s) {
    return this.request(
      ye(s || {}, {
        method: t,
        url: n,
        data: (s || {}).data
      })
    );
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(o, a, i) {
      return this.request(
        ye(i || {}, {
          method: t,
          headers: s ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: a
        })
      );
    };
  }
  ge.prototype[t] = n(), ge.prototype[t + "Form"] = n(!0);
});
let Gr = class An {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const s = this;
    this.promise.then((r) => {
      if (!s._listeners) return;
      let o = s._listeners.length;
      for (; o-- > 0; )
        s._listeners[o](r);
      s._listeners = null;
    }), this.promise.then = (r) => {
      let o;
      const a = new Promise((i) => {
        s.subscribe(i), o = i;
      }).then(r);
      return a.cancel = function() {
        s.unsubscribe(o);
      }, a;
    }, t(function(o, a, i) {
      s.reason || (s.reason = new Me(o, a, i), n(s.reason));
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
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (s) => {
      t.abort(s);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new An(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function Zr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Qr(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const dt = {
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
Object.entries(dt).forEach(([e, t]) => {
  dt[t] = e;
});
function kn(e) {
  const t = new ge(e), n = dn(ge.prototype.request, t);
  return f.extend(n, ge.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return kn(ye(e, r));
  }, n;
}
const $ = kn(Fe);
$.Axios = ge;
$.CanceledError = Me;
$.CancelToken = Gr;
$.isCancel = En;
$.VERSION = Nn;
$.toFormData = Xe;
$.AxiosError = j;
$.Cancel = $.CanceledError;
$.all = function(t) {
  return Promise.all(t);
};
$.spread = Zr;
$.isAxiosError = Qr;
$.mergeConfig = ye;
$.AxiosHeaders = Z;
$.formToJSON = (e) => Sn(f.isHTMLForm(e) ? new FormData(e) : e);
$.getAdapter = Cn.getAdapter;
$.HttpStatusCode = dt;
$.default = $;
const {
  Axios: wo,
  AxiosError: bo,
  CanceledError: xo,
  isCancel: _o,
  CancelToken: Ro,
  VERSION: So,
  all: Eo,
  Cancel: To,
  isAxiosError: jo,
  spread: Oo,
  toFormData: vo,
  AxiosHeaders: Co,
  HttpStatusCode: No,
  formToJSON: Ao,
  getAdapter: ko,
  mergeConfig: Po
} = $, eo = (e, t) => {
  const n = $.create({
    baseURL: e,
    withCredentials: !0
  });
  return t && (n.defaults.headers.common.Authorization = `token ${t}`), {
    getMessages: async (s) => {
      const r = new URLSearchParams();
      r.append("reference_doctype", s.reference_doctype), r.append("reference_name", s.reference_name);
      const o = `/api/method/crm_integration.crm_integration.api.whatsapp.get_whatsapp_messages?${r.toString()}`;
      return (await n.get(o, {
        headers: { "Content-Type": "text/plain" }
      })).data;
    },
    sendMessage: async (s) => {
      var i;
      const r = new URLSearchParams();
      s.reference_doctype && r.append("reference_doctype", s.reference_doctype), s.reference_name && r.append("reference_name", s.reference_name), r.append("message", s.message), r.append("to", s.to), s.attach && (Array.isArray(s.attach) ? r.append("attach", JSON.stringify(s.attach)) : r.append("attach", s.attach)), s.content_type && r.append("content_type", s.content_type), s.reply_to !== void 0 && r.append("reply_to", s.reply_to || ""), (i = s.links) != null && i.length && r.append("links", JSON.stringify(s.links));
      const o = `/api/method/crm_integration.crm_integration.api.whatsapp.create_whatsapp_message?${r.toString()}`;
      return (await n.post(o, void 0, {
        headers: { "Content-Type": "text/plain" }
      })).data;
    },
    getTemplates: async (s) => {
      const r = new URLSearchParams();
      r.set("references", JSON.stringify(s));
      const o = `/api/method/crm_integration.crm_integration.api.whatsapp.get_templates_list?${r.toString()}`;
      return (await n.get(o)).data;
    },
    sendTemplate: async (s) => {
      var i;
      const r = "/api/method/crm_integration.crm_integration.api.whatsapp.send_whatsapp_template", o = new FormData();
      return s.reference_doctype && o.append("reference_doctype", s.reference_doctype), s.reference_name && o.append("reference_name", s.reference_name), o.append("to", s.to), o.append("template", s.template), (i = s.links) != null && i.length && o.append("links", JSON.stringify(s.links)), (await n.post(r, o)).data;
    },
    sendReadReceipt: async (s) => {
      const r = new URLSearchParams();
      r.append("name", s.name);
      const o = `/api/method/crm_integration.crm_integration.api.whatsapp.send_read_receipt?${r.toString()}`;
      return (await n.get(o, {
        headers: { "Content-Type": "text/plain" }
      })).data;
    },
    uploadFile: async (s) => {
      const r = "/api/method/crm_integration.crm_integration.api.whatsapp.upload_files_from_portal", o = new FormData();
      return o.append("file0", s), (await n.post(r, o)).data;
    },
    uploadFiles: async (s) => {
      const r = "/api/method/crm_integration.crm_integration.api.whatsapp.upload_files_from_portal", o = new FormData();
      return s.forEach((i, m) => {
        o.append(`file${m}`, i);
      }), (await n.post(r, o, {
        headers: { "Content-Type": "multipart/form-data" }
      })).data;
    },
    getIncomingCommunications: async (s) => {
      const r = new URLSearchParams();
      r.set("user", s);
      const o = `/api/method/crm_integration.crm_integration.api.dashboard.get_incoming_communications?${r.toString()}`;
      return (await n.get(o)).data;
    }
  };
}, to = (e, t, n) => {
  const s = me(() => e ? eo(e, t) : null, [e, t]);
  return me(() => s ? {
    getMessages: async (r, o) => ((await s.getMessages({ reference_doctype: r, reference_name: o })).message || []).map((m) => pt(m)).filter((m) => !!m),
    sendMessage: async (r) => {
      const o = await s.sendMessage(r);
      return { name: o == null ? void 0 : o.name };
    },
    sendTemplate: async (r) => s.sendTemplate(r),
    getTemplates: async (r) => {
      var a;
      return ((a = (await s.getTemplates(r)).message) == null ? void 0 : a.data) || [];
    },
    uploadFile: async (r) => {
      const o = await s.uploadFile(r), a = Array.isArray(o.message) ? o.message[0] : o.message;
      return { file_url: (a == null ? void 0 : a.file_url) || o.file_url || "" };
    },
    uploadFiles: async (r) => {
      var i;
      const o = await s.uploadFiles(r);
      return { file_urls: Array.isArray(o.message) ? o.message.map((m) => m.file_url).filter((m) => !!m) : (i = o.message) != null && i.file_url ? [o.message.file_url] : o.file_url ? [o.file_url] : [] };
    },
    sendReadReceipt: async (r) => {
      await s.sendReadReceipt({ name: r });
    },
    getUnreadCount: async (r, o) => {
      var a, i;
      if (!t || !n) return 0;
      try {
        const p = ((a = (await s.getIncomingCommunications(n)).message) == null ? void 0 : a.data) || [];
        return !r && !o ? p.filter((d) => d.type === "whatsapp").reduce((d, w) => d + (w.counts || 0), 0) : ((i = p.find(
          (d) => d.type === "whatsapp" && (r && d.from === r || o && d.customer === o)
        )) == null ? void 0 : i.counts) ?? 0;
      } catch (m) {
        return console.error("[WhatsApp Widget] Failed to fetch unread count:", m), 0;
      }
    },
    getIncomingCommunications: async (r) => {
      var a;
      return t ? ((a = (await s.getIncomingCommunications(r)).message) == null ? void 0 : a.data) || [] : [];
    },
    showNotification: (r, o) => {
      typeof Notification < "u" && Notification.permission === "granted" ? new Notification(r, { body: o }) : console.log(`[WhatsApp Widget] ${r}: ${o}`);
    }
  } : null, [s, t, n]);
}, no = (e, t) => {
  if (!e) return null;
  const { showNotification: n, showWarning: s, showError: r } = t;
  return !n && !s && !r ? e : {
    ...e,
    showNotification: n || e.showNotification,
    showWarning: s || e.showWarning,
    showError: r || e.showError
  };
}, Ze = (e) => {
  const {
    apiAdapter: t,
    config: n,
    socketAdapter: s,
    baseURL: r,
    token: o,
    socketConnected: a,
    currentUserEmail: i,
    currentUserFullName: m,
    phone: p,
    refDoctype: u = "Contact",
    refName: d = "",
    links: w = [],
    isChatOpen: b,
    attach: l,
    preAddedMessages: h,
    showNotification: y,
    showWarning: _,
    showError: C
  } = e, O = to(r, o, i), v = t || O, N = me(
    () => no(v, { showNotification: y, showWarning: _, showError: C }),
    [v, y, _, C]
  ), M = me(() => n ? {
    ...n,
    ...l !== void 0 ? { attach: l } : {},
    ...h !== void 0 ? { preAddedMessages: h } : {}
  } : {
    currentUser: i || "",
    currentUserFullName: m,
    doctype: u,
    refName: d || "",
    phone: p || "",
    links: w,
    isChatOpen: b,
    apiBaseUrl: r,
    ...l !== void 0 ? { attach: l } : {},
    ...h !== void 0 ? { preAddedMessages: h } : {}
  }, [
    n,
    i,
    m,
    u,
    d,
    p,
    w,
    b,
    r,
    l,
    h
  ]), R = me(() => {
    if (a !== void 0)
      return { isConnected: a };
  }, [a]);
  return {
    apiAdapter: N,
    config: M,
    finalSocketAdapter: s || R
  };
}, so = () => {
  const {
    displayMessages: e,
    isLoading: t,
    messagesError: n,
    isConnected: s,
    isSending: r,
    isTemplateModalOpen: o,
    setIsTemplateModalOpen: a,
    selectedTemplateText: i,
    selectedTemplateName: m,
    selectedTemplate: p,
    setSelectedTemplateText: u,
    setSelectedTemplateName: d,
    setSelectedTemplate: w,
    attachedFiles: b,
    templates: l,
    isLoadingTemplates: h,
    sendMessage: y,
    handleTemplateSelect: _,
    handleFileSelect: C,
    handleFileRemove: O,
    uploadFileMutation: v,
    composerMountKey: N
  } = un(), { config: M } = Ce();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-chat-container", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header", children: [
        /* @__PURE__ */ c.jsx("div", { className: "whatsapp-header-avatar", children: /* @__PURE__ */ c.jsx(ts, { size: 20, color: "#008069" }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header-info", children: [
          /* @__PURE__ */ c.jsx("h4", { children: M.currentUserFullName || "WhatsApp Chat" }),
          /* @__PURE__ */ c.jsx("span", { className: s ? "connection-status connected" : "connection-status reconnecting", children: s ? "● Connected" : "○ Reconnecting..." })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(ms, { messages: e, isLoading: t, error: n }),
      /* @__PURE__ */ c.jsx(
        an,
        {
          initialInputText: M.preAddedMessages ?? "",
          onSend: y,
          isLoading: t || r || v.isPending,
          isUploading: v.isPending,
          isSending: r,
          onTemplateClick: () => a(!0),
          templateText: i,
          selectedTemplateName: m,
          selectedTemplate: p,
          onClearTemplate: () => {
            d(void 0), u(void 0), w(void 0);
          },
          attachedFiles: b,
          onFileSelect: C,
          onFileRemove: O
        },
        N
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      Ne,
      {
        open: o,
        onClose: () => a(!1),
        width: "700px",
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Select WhatsApp Template" }),
        children: /* @__PURE__ */ c.jsx(cn, { templates: l, onSelect: _, isLoading: h })
      }
    )
  ] });
}, ro = ({
  apiAdapter: e,
  config: t,
  socketAdapter: n,
  socketPayload: s,
  socketConnected: r,
  baseURL: o,
  token: a,
  currentUserEmail: i,
  currentUserFullName: m,
  phone: p,
  refDoctype: u = "Contact",
  refName: d = "",
  links: w = [],
  attach: b,
  preAddedMessages: l,
  showNotification: h,
  showWarning: y,
  showError: _
}) => {
  const { apiAdapter: C, config: O, finalSocketAdapter: v } = Ze({
    apiAdapter: e,
    config: t,
    socketAdapter: n,
    baseURL: o,
    token: a,
    socketConnected: r,
    currentUserEmail: i,
    currentUserFullName: m,
    phone: p,
    refDoctype: u,
    refName: d,
    links: w,
    isChatOpen: !0,
    // Standalone component assumes it is active/open if rendered
    attach: b,
    preAddedMessages: l,
    showNotification: h,
    showWarning: y,
    showError: _
  });
  return !C || !O ? null : /* @__PURE__ */ c.jsx(nn, { apiAdapter: C, config: O, socketAdapter: v, socketPayload: s, children: /* @__PURE__ */ c.jsx(so, {}) });
}, oo = () => {
  const {
    isLoading: e,
    isConnected: t,
    isSending: n,
    isTemplateModalOpen: s,
    setIsTemplateModalOpen: r,
    selectedTemplateText: o,
    selectedTemplateName: a,
    selectedTemplate: i,
    setSelectedTemplateText: m,
    setSelectedTemplateName: p,
    setSelectedTemplate: u,
    attachedFiles: d,
    templates: w,
    isLoadingTemplates: b,
    sendMessage: l,
    handleTemplateSelect: h,
    handleFileSelect: y,
    handleFileRemove: _,
    uploadFileMutation: C,
    composerMountKey: O
  } = un(), { config: v } = Ce();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-chat-container whatsapp-send-msg-only", children: [
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-send-only-spacer", style: { flex: 1, minHeight: "20px" } }),
      /* @__PURE__ */ c.jsx(
        an,
        {
          initialInputText: v.preAddedMessages ?? "",
          onSend: l,
          isLoading: e || n || C.isPending,
          isUploading: C.isPending,
          isSending: n,
          onTemplateClick: () => r(!0),
          templateText: o,
          selectedTemplateName: a,
          selectedTemplate: i,
          onClearTemplate: () => {
            p(void 0), m(void 0), u(void 0);
          },
          attachedFiles: d,
          onFileSelect: y,
          onFileRemove: _
        },
        O
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      Ne,
      {
        open: s,
        onClose: () => r(!1),
        width: "700px",
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Select WhatsApp Template" }),
        children: /* @__PURE__ */ c.jsx(cn, { templates: w, onSelect: h, isLoading: b })
      }
    )
  ] });
}, ao = ({
  apiAdapter: e,
  config: t,
  socketAdapter: n,
  socketPayload: s,
  socketConnected: r,
  baseURL: o,
  token: a,
  currentUserEmail: i,
  currentUserFullName: m,
  phone: p,
  refDoctype: u = "Contact",
  refName: d = "",
  links: w = [],
  attach: b,
  preAddedMessages: l,
  showNotification: h,
  showWarning: y,
  showError: _
}) => {
  const { apiAdapter: C, config: O, finalSocketAdapter: v } = Ze({
    apiAdapter: e,
    config: t,
    socketAdapter: n,
    baseURL: o,
    token: a,
    socketConnected: r,
    currentUserEmail: i,
    currentUserFullName: m,
    phone: p,
    refDoctype: u,
    refName: d,
    links: w,
    isChatOpen: !0,
    attach: b,
    preAddedMessages: l,
    showNotification: h,
    showWarning: y,
    showError: _
  });
  return !C || !O ? null : /* @__PURE__ */ c.jsx(
    nn,
    {
      apiAdapter: C,
      config: { ...O, isChatOpen: !0, preventHistoryFetch: !0 },
      socketAdapter: v,
      socketPayload: s,
      children: /* @__PURE__ */ c.jsx(oo, {})
    }
  );
}, Vt = /* @__PURE__ */ new Set(), We = /* @__PURE__ */ new Map(), io = 6e4;
function co(e) {
  const t = e, n = t.message_id ? String(t.message_id) : "";
  return n ? `mid:${n}` : e.name ? `name:${String(e.name)}` : `fallback:${String(e.from ?? "")}|${String(e.creation ?? "")}|${String(e.message ?? "")}`;
}
function lo(e) {
  const t = Date.now();
  for (const [s, r] of We.entries())
    t - r > io && We.delete(s);
  const n = co(e);
  return n ? We.has(n) ? !1 : (We.set(n, t), !0) : !0;
}
function uo(e, t, n, s, r, o, a) {
  const i = $e((l) => l.incomingData), m = $e((l) => l.setIncomingData), p = $e((l) => l.handleIncomingMessage), u = $e((l) => l.clearContact), d = ae(null), w = me(() => {
    if (!s && !r)
      return i.filter((h) => h.type === "whatsapp").reduce((h, y) => h + (y.counts || 0), 0);
    const l = i.find(
      (h) => h.type === "whatsapp" && (s && h.from === s || r && h.customer === r)
    );
    return (l == null ? void 0 : l.counts) ?? 0;
  }, [i, s, r]), b = Oe(async () => {
    if (e.getIncomingCommunications)
      try {
        const l = await e.getIncomingCommunications(a || "");
        m(l);
      } catch (l) {
        console.error("Failed to fetch incoming communications:", l);
      }
    else
      try {
        await e.getUnreadCount(s || "", r || "");
      } catch (l) {
        console.error("Failed to fetch unread count:", l);
      }
  }, [e, s, r, m]);
  return se(() => {
    b();
  }, [b]), se(() => {
    o && u(s, r);
  }, [o, s, r, u]), se(() => {
    if (!e) return;
    const l = e.onMessageSent;
    return e.onMessageSent = () => {
      b(), l && l();
    }, () => {
      e.onMessageSent && (e.onMessageSent = l);
    };
  }, [e, b]), se(() => {
    const l = (h) => {
      if (!h || h.name === void 0) return;
      const y = h.status !== null && h.status !== void 0;
      if (h.is_outbound === 0 && !y && (p(h), !o && !Vt.has(h.name) && lo(h) && (Vt.add(h.name), e.showNotification))) {
        const _ = h.sender || h.from_name || "Customer";
        e.showNotification("WhatsApp", `New message received from ${_}`);
      }
    };
    if (t != null && t.onMessage) {
      const h = (y) => l(y);
      return t.onMessage(h), () => {
        var y;
        return (y = t.offMessage) == null ? void 0 : y.call(t, h);
      };
    }
    if (n && n.event === "whatsapp_message") {
      const h = n.message, y = String((h == null ? void 0 : h.name) ?? (h == null ? void 0 : h.message_id) ?? "");
      if (y && d.current === y)
        return;
      y && (d.current = y);
      const _ = pt(h);
      l(_);
    }
  }, [t, n, e, p, o]), w;
}
const Fo = ({
  apiAdapter: e,
  config: t,
  socketAdapter: n,
  baseURL: s,
  token: r,
  socketPayload: o,
  socketConnected: a,
  currentUserEmail: i,
  currentUserFullName: m,
  phone: p,
  refDoctype: u = "Contact",
  refName: d = "",
  links: w = [],
  attach: b,
  preAddedMessages: l,
  buttonLabel: h,
  icon: y,
  btnClassName: _ = "",
  modalSize: C = "1024px",
  variant: O = "default",
  isOpen: v,
  onOpen: N,
  onClose: M,
  showNotification: R,
  showWarning: L,
  showError: q
}) => {
  const [J, ce] = Y(!1), B = v !== void 0 ? v : J, { apiAdapter: H, config: I, finalSocketAdapter: Q } = Ze({
    apiAdapter: e,
    config: t,
    socketAdapter: n,
    baseURL: s,
    token: r,
    socketConnected: a,
    currentUserEmail: i,
    currentUserFullName: m,
    phone: p,
    refDoctype: u,
    refName: d,
    links: w,
    isChatOpen: B,
    attach: b,
    preAddedMessages: l,
    showNotification: R,
    showWarning: L,
    showError: q
  }), P = uo(H, Q, o, p, d || void 0, B, I == null ? void 0 : I.currentUser), re = () => {
    v !== void 0 ? B ? M == null || M() : N == null || N() : ce(!J);
  };
  return H ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    O === "plain" ? /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: _,
        onClick: re,
        style: {
          position: "relative",
          ...typeof _ == "string" && _.includes("button") ? {} : { border: "none", background: "none", cursor: "pointer", padding: 0 }
        },
        children: [
          y || h,
          P > 0 && /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-badge", style: { top: "-10px", right: "-10px" }, children: P })
        ]
      }
    ) : /* @__PURE__ */ c.jsxs("div", { className: `whatsapp-trigger-wrapper ${_}`, onClick: re, children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-trigger-icon-container", children: [
        y || /* @__PURE__ */ c.jsx(Gt, { size: 20, color: "#175353" }),
        P > 0 && /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-badge", children: P })
      ] }),
      /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-label", children: h })
    ] }),
    /* @__PURE__ */ c.jsx(
      Ne,
      {
        open: B,
        onClose: re,
        width: C,
        header: /* @__PURE__ */ c.jsx("h3", { style: { margin: 0, fontSize: "1.1rem" }, children: "WhatsApp Chat" }),
        children: /* @__PURE__ */ c.jsx(
          ro,
          {
            apiAdapter: H,
            config: I,
            socketAdapter: Q,
            socketPayload: o,
            currentUserFullName: m,
            attach: b,
            preAddedMessages: l
          }
        )
      }
    )
  ] }) : null;
}, Mo = ({
  apiAdapter: e,
  config: t,
  socketAdapter: n,
  baseURL: s,
  token: r,
  socketPayload: o,
  socketConnected: a,
  currentUserEmail: i,
  currentUserFullName: m,
  phone: p,
  refDoctype: u = "Contact",
  refName: d = "",
  links: w = [],
  attach: b,
  preAddedMessages: l,
  buttonLabel: h = "Send WhatsApp",
  icon: y,
  btnClassName: _ = "",
  modalSize: C = "600px",
  variant: O = "default",
  isOpen: v,
  onOpen: N,
  onClose: M,
  showNotification: R,
  showWarning: L,
  showError: q
}) => {
  const [J, ce] = Y(!1), B = v !== void 0 ? v : J, { apiAdapter: H, config: I, finalSocketAdapter: Q } = Ze({
    apiAdapter: e,
    config: t,
    socketAdapter: n,
    baseURL: s,
    token: r,
    socketConnected: a,
    currentUserEmail: i,
    currentUserFullName: m,
    phone: p,
    refDoctype: u,
    refName: d,
    links: w,
    isChatOpen: B,
    attach: b,
    preAddedMessages: l,
    showNotification: R,
    showWarning: L,
    showError: q
  }), P = () => {
    v !== void 0 ? B ? M == null || M() : N == null || N() : ce(!J);
  };
  return H ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    O === "plain" ? /* @__PURE__ */ c.jsx(
      "button",
      {
        className: _,
        onClick: P,
        style: {
          position: "relative",
          ...typeof _ == "string" && _.includes("button") ? {} : { border: "none", background: "none", cursor: "pointer", padding: 0 }
        },
        children: y || h
      }
    ) : /* @__PURE__ */ c.jsxs("div", { className: `whatsapp-trigger-wrapper ${_}`, onClick: P, children: [
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-trigger-icon-container", children: y || /* @__PURE__ */ c.jsx(Gt, { size: 20, color: "#175353" }) }),
      /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-label", children: h })
    ] }),
    /* @__PURE__ */ c.jsx(
      Ne,
      {
        open: B,
        onClose: P,
        width: C,
        header: /* @__PURE__ */ c.jsx("h3", { style: { margin: 0, fontSize: "1.1rem" }, children: "WhatsApp Chat" }),
        children: /* @__PURE__ */ c.jsx("div", { style: { padding: "0 4px 8px 4px" }, children: /* @__PURE__ */ c.jsx(
          ao,
          {
            apiAdapter: H,
            config: I,
            socketAdapter: Q,
            socketPayload: o,
            currentUserFullName: m,
            attach: b,
            preAddedMessages: l
          }
        ) })
      }
    )
  ] }) : null;
};
export {
  fs as WhatsAppMessageSkeleton,
  ys as WhatsAppTemplateSkeleton,
  ro as WhatsappChat,
  nn as WhatsappChatProvider,
  Fo as WhatsappChatTrigger,
  so as WhatsappChatWidget,
  ao as WhatsappSendMessage,
  Mo as WhatsappSendMessageTrigger,
  oo as WhatsappSendMessageWidget,
  uo as useWhatsappBadgeCount,
  Ce as useWhatsappChatConfig,
  un as useWhatsappWidgetLogic,
  ue as useWhatsappWidgetZustand
};
