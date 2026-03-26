import _e, { useContext as Wt, createContext as $t, useRef as ae, useMemo as de, useEffect as te, forwardRef as On, useImperativeHandle as Nn, useState as X, useCallback as Ue } from "react";
import { WhatsappLogo as Cn, User as vn, X as An, Paperclip as kn, FileText as Pn, PaperPlaneTilt as Mn, ArrowSquareOut as Ln, Check as Dn, Checks as Un, Warning as Fn, Clock as In, Eye as Bn } from "@phosphor-icons/react";
import { useStore as Wn, createStore as $n, create as qn } from "zustand";
import './index.css';var Me = { exports: {} }, be = {};
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
  if (yt) return be;
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
  return be.Fragment = t, be.jsx = s, be.jsxs = s, be;
}
var xe = {};
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
        return g.$$typeof === Y ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case y:
          return "Fragment";
        case N:
          return "Profiler";
        case _:
          return "StrictMode";
        case v:
          return "Suspense";
        case j:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case h:
            return "Portal";
          case C:
            return g.displayName || "Context";
          case O:
            return (g._context.displayName || "Context") + ".Consumer";
          case P:
            var S = g.render;
            return g = g.displayName, g || (g = S.displayName || S.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case J:
            return S = g.displayName || null, S !== null ? S : e(g.type) || "Memo";
          case I:
            S = g._payload, g = g._init;
            try {
              return e(g(S));
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
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var A = S.error, M = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return A.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(g);
      }
    }
    function n(g) {
      if (g === y) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === I)
        return "<...>";
      try {
        var S = e(g);
        return S ? "<" + S + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var g = $.A;
      return g === null ? null : g.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(g) {
      if (W.call(g, "key")) {
        var S = Object.getOwnPropertyDescriptor(g, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function i(g, S) {
      function A() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: A,
        configurable: !0
      });
    }
    function m() {
      var g = e(this.type);
      return se[g] || (se[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function p(g, S, A, M, ie, we) {
      var b = A.ref;
      return g = {
        $$typeof: l,
        type: g,
        key: S,
        props: A,
        _owner: M
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(g, "ref", {
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
        value: ie
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: we
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function u(g, S, A, M, ie, we) {
      var b = S.children;
      if (b !== void 0)
        if (M)
          if (D(b)) {
            for (M = 0; M < b.length; M++)
              f(b[M]);
            Object.freeze && Object.freeze(b);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(b);
      if (W.call(S, "key")) {
        b = e(g);
        var R = Object.keys(S).filter(function(L) {
          return L !== "key";
        });
        M = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", oe[b + M] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          b,
          R,
          b
        ), oe[b + M] = !0);
      }
      if (b = null, A !== void 0 && (s(A), b = "" + A), a(S) && (s(S.key), b = "" + S.key), "key" in S) {
        A = {};
        for (var T in S)
          T !== "key" && (A[T] = S[T]);
      } else A = S;
      return b && i(
        A,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), p(
        g,
        b,
        A,
        r(),
        ie,
        we
      );
    }
    function f(g) {
      w(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === I && (g._payload.status === "fulfilled" ? w(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
    }
    function w(g) {
      return typeof g == "object" && g !== null && g.$$typeof === l;
    }
    var x = _e, l = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), C = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), Y = Symbol.for("react.client.reference"), $ = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, D = Array.isArray, le = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(g) {
        return g();
      }
    };
    var F, se = {}, q = x.react_stack_bottom_frame.bind(
      x,
      o
    )(), re = le(n(o)), oe = {};
    xe.Fragment = y, xe.jsx = function(g, S, A) {
      var M = 1e4 > $.recentlyCreatedOwnerStacks++;
      return u(
        g,
        S,
        A,
        !1,
        M ? Error("react-stack-top-frame") : q,
        M ? le(n(g)) : re
      );
    }, xe.jsxs = function(g, S, A) {
      var M = 1e4 > $.recentlyCreatedOwnerStacks++;
      return u(
        g,
        S,
        A,
        !0,
        M ? Error("react-stack-top-frame") : q,
        M ? le(n(g)) : re
      );
    };
  })()), xe;
}
var bt;
function Jn() {
  return bt || (bt = 1, process.env.NODE_ENV === "production" ? Me.exports = zn() : Me.exports = Hn()), Me.exports;
}
var c = Jn();
const Vn = (e) => /* @__PURE__ */ c.jsx(vn, { ...e }), Yn = (e) => /* @__PURE__ */ c.jsx(kn, { ...e }), Kn = (e) => /* @__PURE__ */ c.jsx(Mn, { ...e }), at = (e) => /* @__PURE__ */ c.jsx(An, { ...e }), Xn = (e) => /* @__PURE__ */ c.jsx(Bn, { ...e }), xt = (e) => /* @__PURE__ */ c.jsx(Un, { ...e }), Rt = (e) => /* @__PURE__ */ c.jsx(Dn, { ...e }), Gn = (e) => /* @__PURE__ */ c.jsx(Ln, { ...e }), qt = (e) => /* @__PURE__ */ c.jsx(Pn, { ...e }), Zn = (e) => /* @__PURE__ */ c.jsx(In, { ...e }), Qn = (e) => /* @__PURE__ */ c.jsx(Fn, { ...e }), zt = (e) => /* @__PURE__ */ c.jsx(Cn, { ...e }), Ht = (e) => {
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
  const r = e.message_type === "Template", o = e.message != null ? String(e.message) : void 0, a = o != null && o.trim() !== "" && o !== "Template message", i = r && !a && e.template ? e.template : o ?? e.template ?? "", m = (u = e.links) != null && u.length ? e.links.filter((f) => !!(f != null && f.button_label && (f != null && f.link))).map((f) => ({ button_label: f.button_label, link: f.link })) : void 0, p = e.from_name || e.profile_name;
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
    template_links: m != null && m.length ? m : void 0,
    from: e.from || e.sender || null,
    reference_name: e.reference_name || e.customer || null,
    message_type: e.message_type,
    header_type: r ? e.header_type ?? void 0 : void 0,
    sample: r ? e.sample ?? void 0 : void 0
  };
}
const Le = qn((e) => ({
  incomingData: [],
  setIncomingData: (t) => e({ incomingData: t }),
  handleIncomingMessage: (t) => e((s) => {
    if (t.is_outbound === 1) return s;
    const n = [...s.incomingData], r = t.name, o = t.from || t.sender || "", a = t.reference_name || "";
    if (t.status === 4) {
      const u = n.findIndex((f) => {
        var w;
        return (w = f.names) == null ? void 0 : w.includes(r);
      });
      if (u !== -1) {
        const f = { ...n[u] };
        return f.names = f.names.filter((w) => w !== r), f.counts = Math.max(0, (f.counts || 0) - 1), f.counts === 0 ? n.splice(u, 1) : n[u] = f, { incomingData: n };
      }
      return s;
    }
    if (n.some((u) => {
      var f;
      return (f = u.names) == null ? void 0 : f.includes(r);
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
}, $e = () => {
  const e = Wt(Vt);
  if (!e) throw new Error("Missing WhatsappChatProvider");
  return e;
}, Xt = () => {
  const e = Wt(Yt);
  if (!e) throw new Error("Missing WhatsappChatProvider");
  return e;
}, ce = (e) => {
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
  sample: m,
  isPreview: p = !1
}) => {
  const { config: u } = $e(), f = u.apiBaseUrl || "", w = m ? `${f}/${ss(m)}` : void 0, x = i === "IMAGE" && w, l = i === "DOCUMENT" && w, h = !i || i === "TEXT";
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
          /* @__PURE__ */ c.jsx("span", { children: (m == null ? void 0 : m.split("/").pop()) || "Untitled" })
        ]
      }
    ),
    h && e && /* @__PURE__ */ c.jsx("h4", { className: "whatsapp-template-card-header", children: e }),
    /* @__PURE__ */ c.jsx("p", { className: "whatsapp-template-card-body", children: t }),
    s && /* @__PURE__ */ c.jsx("p", { className: "whatsapp-template-card-footer", children: s }),
    n && n.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "whatsapp-template-card-buttons", children: n.map((y, _) => /* @__PURE__ */ c.jsxs("a", { href: y.link, target: "_blank", rel: "noopener noreferrer", className: "whatsapp-template-card-button", children: [
      /* @__PURE__ */ c.jsx(Gn, { size: 16, color: "currentColor" }),
      /* @__PURE__ */ c.jsx("span", { children: y.button_label })
    ] }, _)) }),
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-template-card-meta", children: [
      /* @__PURE__ */ c.jsx("span", { children: Ht(r) }),
      !p && o === 1 && Jt(a, o)
    ] })
  ] }) });
}, K = ({ width: e, height: t, className: s, style: n }) => /* @__PURE__ */ c.jsx(
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
      /* @__PURE__ */ c.jsx(K, { width: "140px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(K, { width: "60px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble sent", style: e, children: [
      /* @__PURE__ */ c.jsx(K, { width: "100px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(K, { width: "55px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx(K, { width: "180px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(K, { width: "60px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble sent", style: e, children: [
      /* @__PURE__ */ c.jsx(K, { width: "120px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(K, { width: "55px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx(K, { width: "90px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(K, { width: "60px", height: "0.75rem" })
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
  const { config: i } = $e(), m = i.apiBaseUrl || "", p = ae(null), u = de(() => {
    var f;
    if (n) {
      const w = n.creation || (n.date && n.time ? `${n.date} ${n.time}` : (/* @__PURE__ */ new Date()).toISOString()), x = n.type === "Outgoing" || n.is_outbound === 1, l = ((f = n.links) == null ? void 0 : f.map((h) => ({
        button_label: h.button_label ?? "",
        link: h.link ?? h.website_url ?? ""
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
          template_links: l != null && l.filter((h) => h.link || h.button_label).length ? l : void 0,
          header_type: n.header_type,
          sample: n.sample
        }
      ];
    }
    return e || [];
  }, [n, e]);
  return te(() => {
    var f;
    a && ((f = p.current) == null || f.scrollIntoView({ behavior: "smooth" }));
  }, [u, a]), t ? /* @__PURE__ */ c.jsx(rs, {}) : s ? /* @__PURE__ */ c.jsx("div", { className: "whatsapp-message-list", style: { textAlign: "center", color: "#c53030", padding: "20px" }, children: s }) : /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-message-list", children: [
    u.length === 0 && /* @__PURE__ */ c.jsx("div", { style: { textAlign: "center", color: "#888", padding: "20px" }, children: "No messages yet. Start the conversation!" }),
    u.map((f, w) => {
      const x = f, l = x.attach, h = x.content_type;
      return x.message_type === "Template" ? /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: `message-bubble ${f.is_outbound ? "sent" : "received"} message-bubble--template`,
          children: [
            o && r && /* @__PURE__ */ c.jsx("div", { className: "message-icon-wrapper", children: r }),
            /* @__PURE__ */ c.jsx(
              Gt,
              {
                header: x.header,
                message: f.message,
                footer: x.footer,
                template_links: x.template_links,
                creation: f.creation,
                is_outbound: f.is_outbound,
                status: f.status,
                header_type: x.header_type,
                sample: x.sample
              }
            )
          ]
        },
        `${f.name}-${w}`
      ) : /* @__PURE__ */ c.jsxs("div", { className: `message-bubble ${f.is_outbound ? "sent" : "received"}`, children: [
        o && r && /* @__PURE__ */ c.jsx("div", { className: "message-icon-wrapper", children: r }),
        /* @__PURE__ */ c.jsxs("div", { className: "message-content", children: [
          es(f.message) || f.message,
          l && /* @__PURE__ */ c.jsx("div", { className: "message-attachment", children: h === "image" ? /* @__PURE__ */ c.jsx(
            "img",
            {
              src: `${m}/${l}`,
              alt: "attachment",
              className: "message-attachment-image",
              style: { maxWidth: "200px", borderRadius: "4px" }
            }
          ) : /* @__PURE__ */ c.jsx(
            "a",
            {
              href: `${m}/${l}`,
              target: "_blank",
              rel: "noreferrer",
              className: "message-attachment-link",
              title: "View attachment",
              children: l.split("/").pop() || "Attachment"
            }
          ) }),
          /* @__PURE__ */ c.jsxs("div", { className: "message-time", children: [
            Ht(f.creation),
            Jt(f.status, f.is_outbound)
          ] })
        ] })
      ] }, `${f.name}-${w}`);
    }),
    /* @__PURE__ */ c.jsx("div", { ref: p })
  ] });
}, Zt = On(({ onSelect: e, multiple: t = !0, accept: s, maxFileSize: n, className: r = "" }, o) => {
  const a = ae(null);
  Nn(o, () => ({
    click: () => {
      var m;
      (m = a.current) == null || m.click();
    }
  }));
  const i = (m) => {
    const p = m.target.files;
    if (p && e) {
      const u = Array.from(p);
      if (n) {
        const f = u.filter((w) => w.size <= n);
        e(f);
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
const Se = ({
  open: e,
  onClose: t,
  header: s,
  children: n,
  width: r = "600px",
  className: o = ""
}) => (te(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
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
  const [r, o] = X(!1), a = () => {
    n(), o(!1);
  }, i = e.split("-")[0], m = (s == null ? void 0 : s.template) ?? t ?? "", p = (s == null ? void 0 : s.header) ?? null, u = (s == null ? void 0 : s.footer) ?? null, f = ((x = s == null ? void 0 : s.links) == null ? void 0 : x.map((l) => ({
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
      Se,
      {
        open: r,
        onClose: () => o(!1),
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Template Preview" }),
        children: /* @__PURE__ */ c.jsx("div", { style: { padding: "20px 0" }, children: s ? /* @__PURE__ */ c.jsx(
          Gt,
          {
            header: p,
            message: m,
            footer: u,
            template_links: f,
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
] }), _t = () => /* @__PURE__ */ c.jsx("div", { className: "whatsapp-spinner" }), Qt = ({
  onSend: e,
  isLoading: t,
  isUploading: s = !1,
  isSending: n = !1,
  onTemplateClick: r,
  templateText: o,
  selectedTemplateName: a,
  selectedTemplate: i,
  onClearTemplate: m,
  attachedFile: p,
  onFileRemove: u,
  onFileSelect: f
}) => {
  const [w, x] = X(""), l = ae(null), h = ae(null), y = !!a;
  _e.useEffect(() => {
    var v;
    y && ((v = l.current) == null || v.focus());
  }, [y]), _e.useEffect(() => {
    o !== void 0 && o !== "" ? x(o) : (o === void 0 || o === "") && x("");
  }, [o]);
  const _ = () => {
    (w.trim() || p || y) && (e(w, p == null ? void 0 : p.fileUrl, p == null ? void 0 : p.contentType), y || (x(""), u && u()));
  }, N = () => {
    var v;
    (v = h.current) == null || v.click();
  }, O = (v) => {
    const j = v == null ? void 0 : v[0];
    j && f && f(j);
  }, C = (v) => {
    v.key === "Enter" && !t && _();
  }, P = (v) => {
    const j = v.target.value;
    x(j), !j.trim() && a && m && m();
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
        /* @__PURE__ */ c.jsx(Zt, { ref: h, onSelect: O, multiple: !1, accept: "image/*,video/*,audio/*,.pdf,.doc,.docx" }),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: N,
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
            children: s ? /* @__PURE__ */ c.jsx(_t, {}) : /* @__PURE__ */ c.jsx(Yn, { size: 20, color: "#175353" })
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
        a && m && /* @__PURE__ */ c.jsx(
          is,
          {
            selectedTemplateName: a,
            templateText: o,
            template: i,
            onClearTemplate: () => {
              m(), x("");
            }
          }
        ),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            value: w,
            onChange: P,
            placeholder: "Type a message...",
            className: "whatsapp-input-field",
            disabled: t || y
          }
        ),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: _,
            className: "whatsapp-send-btn",
            disabled: t || !y && !w.trim() && !p,
            title: n ? "Sending..." : "Send",
            children: n ? /* @__PURE__ */ c.jsx(_t, {}) : /* @__PURE__ */ c.jsx(Kn, { size: 20, color: "white" })
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
      /* @__PURE__ */ c.jsx(K, { width: "40%", height: "12px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-item-divider" }),
      /* @__PURE__ */ c.jsx(K, { width: "100%", height: "14px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx(K, { width: "90%", height: "14px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx(K, { width: "60%", height: "14px" })
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
  const [n, r] = X(null);
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
  const { config: e, apiAdapter: t, socketAdapter: s, socketPayload: n } = $e(), r = Xt(), o = ce((b) => b.messages), a = ce((b) => b.isLoading), i = ce((b) => b.error), m = ce((b) => b.setMessages), p = ce((b) => b.appendMessage), u = ce((b) => b.replaceMessage), f = ce((b) => b.updateMessageStatus), w = ce((b) => b.setLoading), x = ce((b) => b.setError), [l, h] = X(!1), y = (s == null ? void 0 : s.isConnected) ?? !0, [_, N] = X(!1), [O, C] = X(), [P, v] = X(), [j, J] = X(), [I, V] = X([]), [Y, $] = X(!1), [W, D] = X(null), [le, F] = X(!1), se = de(() => {
    var Ce;
    const b = e.doctype || "", R = e.refName || "", T = e.activeLeadDoctype || "", L = e.activeLeadName || "";
    let H = b, B = R, k = e.links || [];
    if (L)
      H = T, B = L, k = b ? [{ link_doctype: b, link_name: R }] : [];
    else {
      const ue = (Ce = e.links) == null ? void 0 : Ce.find((ve) => {
        var he;
        return (he = ve.link_doctype) == null ? void 0 : he.includes("Lead");
      });
      ue && (H = ue.link_doctype, B = ue.link_name, k = b ? [{ link_doctype: b, link_name: R }] : []);
    }
    const ee = L ? [{ reference_doctype: T, reference_name: L }] : [{ reference_doctype: b, reference_name: R }, ...(e.links || []).map((ue) => ({ reference_doctype: ue.link_doctype, reference_name: ue.link_name }))];
    return {
      primaryDoctype: H,
      primaryName: B,
      secondaryLinks: k,
      templateRefs: ee,
      baseDoctype: b,
      baseName: R,
      activeLeadDoctype: T,
      activeLeadName: L
    };
  }, [e]), q = ae(t.getMessages);
  te(() => {
    q.current = t.getMessages;
  }, [t.getMessages]), te(() => {
    if (!e.isChatOpen || e.preventHistoryFetch) return;
    (async () => {
      var R;
      w(!0), x(null);
      try {
        const T = await ((R = q.current) == null ? void 0 : R.call(q, e.doctype || "", e.refName || ""));
        T && m([...T].reverse());
      } catch (T) {
        x(T instanceof Error ? T.message : "Failed to fetch");
      } finally {
        w(!1);
      }
    })();
  }, [e.isChatOpen, e.doctype, e.refName, w, x, m]), te(() => {
    if (!_ || I.length > 0) return;
    (async () => {
      var R;
      $(!0);
      try {
        const T = await ((R = t.getTemplates) == null ? void 0 : R.call(t, se.templateRefs));
        T && V(T);
      } catch (T) {
        console.error("Template fetch failed", T);
      } finally {
        $(!1);
      }
    })();
  }, [_, t, se.templateRefs, I.length]);
  const re = ae(!1), oe = ae(/* @__PURE__ */ new Set()), g = ae(null), S = ae(null);
  te(() => {
    if (!e.isChatOpen) {
      re.current = !1, oe.current.clear();
      return;
    }
    if (re.current || !o.length || !t.sendReadReceipt)
      return;
    const b = o.findLast((R) => R.is_outbound === 0 && (R.status === null || R.status === void 0));
    b != null && b.name && !oe.current.has(b.name) ? (t.sendReadReceipt(b.name), oe.current.add(b.name), re.current = !0) : o.length > 0 && (re.current = !0);
  }, [e.isChatOpen, o, t]);
  const A = Ue(() => {
    D((b) => (b != null && b.preview && URL.revokeObjectURL(b.preview), null));
  }, []), M = Ue(
    async (b, R, T) => {
      var pt, mt, ht, gt;
      const {
        primaryDoctype: L,
        primaryName: H,
        secondaryLinks: B,
        baseDoctype: k,
        baseName: ee,
        activeLeadDoctype: Ce,
        activeLeadName: ue
      } = se, ve = {
        to: e.phone
      };
      if (P) {
        const ke = ((j == null ? void 0 : j.for_doctype) ?? "").trim();
        let Ke = L, Xe = H, Ge = B;
        ke.includes("Lead") ? (Ke = Ce || ke, Xe = ue || H, Ge = k ? [{ link_doctype: k, link_name: ee }] : []) : (Ke = k || L, Xe = ee || H, Ge = e.links || []);
        const Pe = `temp-${Date.now()}`;
        S.current = Pe;
        const Tn = {
          name: Pe,
          message: O ?? (j == null ? void 0 : j.template) ?? "",
          sender: "You",
          creation: (/* @__PURE__ */ new Date()).toISOString(),
          is_outbound: 1,
          status: 5,
          message_type: "Template",
          header: j == null ? void 0 : j.header,
          footer: j == null ? void 0 : j.footer
        };
        p(Tn), h(!0);
        try {
          await t.sendTemplate({
            ...ve,
            reference_doctype: Ke,
            reference_name: Xe,
            template: P,
            links: Ge
          }), f(Pe, 1), (pt = t.showNotification) == null || pt.call(t, "WhatsApp", "Template sent successfully"), v(void 0), C(void 0), J(void 0), A(), t.onMessageSent && t.onMessageSent();
        } catch (jn) {
          console.error(jn), f(Pe, 2), (mt = t.showError) == null || mt.call(t, "WhatsApp", "Failed to send template message");
        } finally {
          h(!1);
        }
        return;
      }
      const he = (b || "").trim();
      if (!he && !R) return;
      const Ae = `temp-${Date.now()}`;
      g.current = Ae, p({
        name: Ae,
        message: he,
        sender: "You",
        creation: (/* @__PURE__ */ new Date()).toISOString(),
        is_outbound: 1,
        attach: R,
        content_type: T,
        status: 5
      }), h(!0);
      try {
        await t.sendMessage({
          ...ve,
          reference_doctype: L,
          reference_name: H,
          message: he,
          attach: R || "",
          content_type: T,
          links: B
        }), f(Ae, 1), (ht = t.showNotification) == null || ht.call(t, "WhatsApp", "Message sent successfully"), A(), t.onMessageSent && t.onMessageSent();
      } catch (ke) {
        console.error(ke), f(Ae, 2), (gt = t.showError) == null || gt.call(t, "WhatsApp", "Failed to send message");
      } finally {
        h(!1);
      }
    },
    [P, t, e.phone, e.links, j, O, p, f, se, A]
  ), ie = (b, R, T) => {
    C(b), v(R), J(T), N(!1);
  }, we = Ue(async (b) => {
    var L;
    if (!t.uploadFile) return;
    F(!0);
    const R = ds(b);
    let T;
    b.type.startsWith("image/") && (T = URL.createObjectURL(b));
    try {
      const { file_url: H } = await t.uploadFile(b);
      D({ file: b, fileUrl: H, contentType: R, preview: T });
    } catch (H) {
      console.error(H), (L = t.showError) == null || L.call(t, "WhatsApp", "Failed to upload file"), T && URL.revokeObjectURL(T), D(null);
    } finally {
      F(!1);
    }
  }, [t]);
  return te(() => {
    const b = (R) => {
      var H;
      if (!R || !R.name) return;
      const T = r.getState().messages;
      let L = -1;
      if (e.isChatOpen && R.is_outbound === 0 && R.name && e.phone === R.from && !(R.status === 4) && !oe.current.has(R.name) && ((H = t.sendReadReceipt) == null || H.call(t, R.name), oe.current.add(R.name)), R.is_outbound === 1)
        if (R.message_type === "Template") {
          const B = S.current;
          if (B && (L = T.findIndex((k) => k.name === B)), L === -1)
            for (let k = T.length - 1; k >= 0; k--) {
              const ee = T[k];
              if (ee.name.startsWith("temp-") && ee.message_type === "Template") {
                L = k;
                break;
              }
            }
        } else {
          const B = g.current;
          if (B && (L = T.findIndex((k) => k.name === B)), L === -1 && (R.message && (L = T.findIndex((k) => k.name.startsWith("temp-") && k.is_outbound === 1 && k.message === R.message)), L === -1))
            for (let k = T.length - 1; k >= 0; k--) {
              const ee = T[k];
              if (ee.name.startsWith("temp-") && ee.is_outbound === 1 && ee.message_type !== "Template") {
                L = k;
                break;
              }
            }
        }
      if (L !== -1) {
        const B = T[L];
        u(B.name, R), B.name === g.current && (g.current = null), B.name === S.current && (S.current = null);
      } else
        T.some((k) => k.name === R.name) ? R.status !== void 0 && R.is_outbound === 1 && f(R.name, R.status) : p(R);
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
  }, [s, n, e.phone, e.isChatOpen, t, r, u, p, f]), {
    displayMessages: o,
    isLoading: a,
    messagesError: i,
    isConnected: y,
    isSending: l,
    isTemplateModalOpen: _,
    setIsTemplateModalOpen: N,
    selectedTemplateText: O,
    selectedTemplateName: P,
    selectedTemplate: j,
    setSelectedTemplateText: C,
    setSelectedTemplateName: v,
    setSelectedTemplate: J,
    attachedFile: W,
    templates: I,
    isLoadingTemplates: Y,
    sendMessage: M,
    handleTemplateSelect: ie,
    handleFileSelect: we,
    handleFileRemove: A,
    uploadFileMutation: { isPending: le }
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
})(/* @__PURE__ */ Object.create(null)), ne = (e) => (e = e.toLowerCase(), (t) => ze(t) === e), He = (e) => (t) => typeof t === e, { isArray: ye } = Array, ge = He("undefined");
function Ee(e) {
  return e !== null && !ge(e) && e.constructor !== null && !ge(e.constructor) && G(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const rn = ne("ArrayBuffer");
function ps(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && rn(e.buffer), t;
}
const ms = He("string"), G = He("function"), on = He("number"), Te = (e) => e !== null && typeof e == "object", hs = (e) => e === !0 || e === !1, Fe = (e) => {
  if (ze(e) !== "object")
    return !1;
  const t = ct(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(sn in e) && !(qe in e);
}, gs = (e) => {
  if (!Te(e) || Ee(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, ys = ne("Date"), ws = ne("File"), bs = (e) => !!(e && typeof e.uri < "u"), xs = (e) => e && typeof e.getParts < "u", Rs = ne("Blob"), _s = ne("FileList"), Ss = (e) => Te(e) && G(e.pipe);
function Es() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const St = Es(), Et = typeof St.FormData < "u" ? St.FormData : void 0, Ts = (e) => {
  let t;
  return e && (Et && e instanceof Et || G(e.append) && ((t = ze(e)) === "formdata" || // detect form-data instance
  t === "object" && G(e.toString) && e.toString() === "[object FormData]"));
}, js = ne("URLSearchParams"), [Os, Ns, Cs, vs] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(ne), As = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function je(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), ye(e))
    for (n = 0, r = e.length; n < r; n++)
      t.call(null, e[n], n, e);
  else {
    if (Ee(e))
      return;
    const o = s ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let i;
    for (n = 0; n < a; n++)
      i = o[n], t.call(null, e[i], i, e);
  }
}
function an(e, t) {
  if (Ee(e))
    return null;
  t = t.toLowerCase();
  const s = Object.keys(e);
  let n = s.length, r;
  for (; n-- > 0; )
    if (r = s[n], t === r.toLowerCase())
      return r;
  return null;
}
const fe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, cn = (e) => !ge(e) && e !== fe;
function nt() {
  const { caseless: e, skipUndefined: t } = cn(this) && this || {}, s = {}, n = (r, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const a = e && an(s, o) || o;
    Fe(s[a]) && Fe(r) ? s[a] = nt(s[a], r) : Fe(r) ? s[a] = nt({}, r) : ye(r) ? s[a] = r.slice() : (!t || !ge(r)) && (s[a] = r);
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && je(arguments[r], n);
  return s;
}
const ks = (e, t, s, { allOwnKeys: n } = {}) => (je(
  t,
  (r, o) => {
    s && G(r) ? Object.defineProperty(e, o, {
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
}, Ds = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const n = e.indexOf(t, s);
  return n !== -1 && n === s;
}, Us = (e) => {
  if (!e) return null;
  if (ye(e)) return e;
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
}, Ws = ne("HTMLFormElement"), $s = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, n, r) {
  return n.toUpperCase() + r;
}), Tt = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), qs = ne("RegExp"), ln = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), n = {};
  je(s, (r, o) => {
    let a;
    (a = t(r, o, e)) !== !1 && (n[o] = a || r);
  }), Object.defineProperties(e, n);
}, zs = (e) => {
  ln(e, (t, s) => {
    if (G(e) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const n = e[s];
    if (G(n)) {
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
  return ye(e) ? n(e) : n(String(e).split(t)), s;
}, Js = () => {
}, Vs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Ys(e) {
  return !!(e && G(e.append) && e[sn] === "FormData" && e[qe]);
}
const Ks = (e) => {
  const t = new Array(10), s = (n, r) => {
    if (Te(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (Ee(n))
        return n;
      if (!("toJSON" in n)) {
        t[r] = n;
        const o = ye(n) ? [] : {};
        return je(n, (a, i) => {
          const m = s(a, r + 1);
          !ge(m) && (o[i] = m);
        }), t[r] = void 0, o;
      }
    }
    return n;
  };
  return s(e, 0);
}, Xs = ne("AsyncFunction"), Gs = (e) => e && (Te(e) || G(e)) && G(e.then) && G(e.catch), un = ((e, t) => e ? setImmediate : t ? ((s, n) => (fe.addEventListener(
  "message",
  ({ source: r, data: o }) => {
    r === fe && o === s && n.length && n.shift()();
  },
  !1
), (r) => {
  n.push(r), fe.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(typeof setImmediate == "function", G(fe.postMessage)), Zs = typeof queueMicrotask < "u" ? queueMicrotask.bind(fe) : typeof process < "u" && process.nextTick || un, Qs = (e) => e != null && G(e[qe]), d = {
  isArray: ye,
  isArrayBuffer: rn,
  isBuffer: Ee,
  isFormData: Ts,
  isArrayBufferView: ps,
  isString: ms,
  isNumber: on,
  isBoolean: hs,
  isObject: Te,
  isPlainObject: Fe,
  isEmptyObject: gs,
  isReadableStream: Os,
  isRequest: Ns,
  isResponse: Cs,
  isHeaders: vs,
  isUndefined: ge,
  isDate: ys,
  isFile: ws,
  isReactNativeBlob: bs,
  isReactNative: xs,
  isBlob: Rs,
  isRegExp: qs,
  isFunction: G,
  isStream: Ss,
  isURLSearchParams: js,
  isTypedArray: Fs,
  isFileList: _s,
  forEach: je,
  merge: nt,
  extend: ks,
  trim: As,
  stripBOM: Ps,
  inherits: Ms,
  toFlatObject: Ls,
  kindOf: ze,
  kindOfTest: ne,
  endsWith: Ds,
  toArray: Us,
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
  global: fe,
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
      config: d.toJSONObject(this.config),
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
  return d.isPlainObject(e) || d.isArray(e);
}
function fn(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ze(e, t, s) {
  return e ? e.concat(t).map(function(r, o) {
    return r = fn(r), !s && o ? "[" + r + "]" : r;
  }).join(s ? "." : "") : t;
}
function tr(e) {
  return d.isArray(e) && !e.some(st);
}
const nr = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Je(e, t, s) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), s = d.toFlatObject(
    s,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(h, y) {
      return !d.isUndefined(y[h]);
    }
  );
  const n = s.metaTokens, r = s.visitor || u, o = s.dots, a = s.indexes, m = (s.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(r))
    throw new TypeError("visitor must be a function");
  function p(l) {
    if (l === null) return "";
    if (d.isDate(l))
      return l.toISOString();
    if (d.isBoolean(l))
      return l.toString();
    if (!m && d.isBlob(l))
      throw new E("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(l) || d.isTypedArray(l) ? m && typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l;
  }
  function u(l, h, y) {
    let _ = l;
    if (d.isReactNative(t) && d.isReactNativeBlob(l))
      return t.append(Ze(y, h, o), p(l)), !1;
    if (l && !y && typeof l == "object") {
      if (d.endsWith(h, "{}"))
        h = n ? h : h.slice(0, -2), l = JSON.stringify(l);
      else if (d.isArray(l) && tr(l) || (d.isFileList(l) || d.endsWith(h, "[]")) && (_ = d.toArray(l)))
        return h = fn(h), _.forEach(function(O, C) {
          !(d.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ze([h], C, o) : a === null ? h : h + "[]",
            p(O)
          );
        }), !1;
    }
    return st(l) ? !0 : (t.append(Ze(y, h, o), p(l)), !1);
  }
  const f = [], w = Object.assign(nr, {
    defaultVisitor: u,
    convertValue: p,
    isVisitable: st
  });
  function x(l, h) {
    if (!d.isUndefined(l)) {
      if (f.indexOf(l) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      f.push(l), d.forEach(l, function(_, N) {
        (!(d.isUndefined(_) || _ === null) && r.call(t, _, d.isString(N) ? N.trim() : N, h, w)) === !0 && x(_, h ? h.concat(N) : [N]);
      }), f.pop();
    }
  }
  if (!d.isObject(e))
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
  const n = s && s.encode || sr, r = d.isFunction(s) ? {
    serialize: s
  } : s, o = r && r.serialize;
  let a;
  if (o ? a = o(t, r) : a = d.isURLSearchParams(t) ? t.toString() : new lt(t, r).toString(n), a) {
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
    d.forEach(this.handlers, function(n) {
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
      return z.isNode && d.isBuffer(s) ? (this.append(n, s.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function pr(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
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
    const i = Number.isFinite(+a), m = o >= s.length;
    return a = !a && d.isArray(r) ? r.length : a, m ? (d.hasOwnProp(r, a) ? r[a] = [r[a], n] : r[a] = n, !i) : ((!r[a] || !d.isObject(r[a])) && (r[a] = []), t(s, n, r[a], o) && d.isArray(r[a]) && (r[a] = mr(r[a])), !i);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const s = {};
    return d.forEachEntry(e, (n, r) => {
      t(pr(n), r, s, 0);
    }), s;
  }
  return null;
}
function hr(e, t, s) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (s || JSON.stringify)(e);
}
const Oe = {
  transitional: ut,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, s) {
      const n = s.getContentType() || "", r = n.indexOf("application/json") > -1, o = d.isObject(t);
      if (o && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
        return r ? JSON.stringify(hn(t)) : t;
      if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t) || d.isReadableStream(t))
        return t;
      if (d.isArrayBufferView(t))
        return t.buffer;
      if (d.isURLSearchParams(t))
        return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (o) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return fr(t, this.formSerializer).toString();
        if ((i = d.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const m = this.env && this.env.FormData;
          return Je(
            i ? { "files[]": t } : t,
            m && new m(),
            this.formSerializer
          );
        }
      }
      return o || r ? (s.setContentType("application/json", !1), hr(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const s = this.transitional || Oe.transitional, n = s && s.forcedJSONParsing, r = this.responseType === "json";
      if (d.isResponse(t) || d.isReadableStream(t))
        return t;
      if (t && d.isString(t) && (n && !this.responseType || r)) {
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
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Oe.headers[e] = {};
});
const gr = d.toObjectSet([
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
function Re(e) {
  return e && String(e).trim().toLowerCase();
}
function Ie(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(Ie) : String(e);
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
  if (d.isFunction(n))
    return n.call(this, t, s);
  if (r && (t = s), !!d.isString(t)) {
    if (d.isString(n))
      return t.indexOf(n) !== -1;
    if (d.isRegExp(n))
      return n.test(t);
  }
}
function xr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, n) => s.toUpperCase() + n);
}
function Rr(e, t) {
  const s = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + s, {
      value: function(r, o, a) {
        return this[n].call(this, t, r, o, a);
      },
      configurable: !0
    });
  });
}
let Z = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, s, n) {
    const r = this;
    function o(i, m, p) {
      const u = Re(m);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = d.findKey(r, u);
      (!f || r[f] === void 0 || p === !0 || p === void 0 && r[f] !== !1) && (r[f || m] = Ie(i));
    }
    const a = (i, m) => d.forEach(i, (p, u) => o(p, u, m));
    if (d.isPlainObject(t) || t instanceof this.constructor)
      a(t, s);
    else if (d.isString(t) && (t = t.trim()) && !br(t))
      a(yr(t), s);
    else if (d.isObject(t) && d.isIterable(t)) {
      let i = {}, m, p;
      for (const u of t) {
        if (!d.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        i[p = u[0]] = (m = i[p]) ? d.isArray(m) ? [...m, u[1]] : [m, u[1]] : u[1];
      }
      a(i, s);
    } else
      t != null && o(s, t, n);
    return this;
  }
  get(t, s) {
    if (t = Re(t), t) {
      const n = d.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!s)
          return r;
        if (s === !0)
          return wr(r);
        if (d.isFunction(s))
          return s.call(this, r, n);
        if (d.isRegExp(s))
          return s.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, s) {
    if (t = Re(t), t) {
      const n = d.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!s || Qe(this, this[n], n, s)));
    }
    return !1;
  }
  delete(t, s) {
    const n = this;
    let r = !1;
    function o(a) {
      if (a = Re(a), a) {
        const i = d.findKey(n, a);
        i && (!s || Qe(n, n[i], i, s)) && (delete n[i], r = !0);
      }
    }
    return d.isArray(t) ? t.forEach(o) : o(t), r;
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
    return d.forEach(this, (r, o) => {
      const a = d.findKey(n, o);
      if (a) {
        s[a] = Ie(r), delete s[o];
        return;
      }
      const i = t ? xr(o) : String(o).trim();
      i !== o && delete s[o], s[i] = Ie(r), n[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const s = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (n, r) => {
      n != null && n !== !1 && (s[r] = t && d.isArray(n) ? n.join(", ") : n);
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
      const i = Re(a);
      n[i] || (Rr(r, a), n[i] = !0);
    }
    return d.isArray(t) ? t.forEach(o) : o(t), this;
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
d.reduceDescriptors(Z.prototype, ({ value: e }, t) => {
  let s = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[s] = n;
    }
  };
});
d.freezeMethods(Z);
function et(e, t) {
  const s = this || Oe, n = t || s, r = Z.from(n.headers);
  let o = n.data;
  return d.forEach(e, function(i) {
    o = i.call(s, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function gn(e) {
  return !!(e && e.__CANCEL__);
}
let Ne = class extends E {
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
function _r(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Sr(e, t) {
  e = e || 10;
  const s = new Array(e), n = new Array(e);
  let r = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(m) {
    const p = Date.now(), u = n[o];
    a || (a = p), s[r] = m, n[r] = p;
    let f = o, w = 0;
    for (; f !== r; )
      w += s[f++], f = f % e;
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
    const u = Date.now(), f = u - s;
    f >= n ? a(p, u) : (r = p, o || (o = setTimeout(() => {
      o = null, a(r);
    }, n - f)));
  }, () => r && a(r)];
}
const We = (e, t, s = 3) => {
  let n = 0;
  const r = Sr(50, 250);
  return Er((o) => {
    const a = o.loaded, i = o.lengthComputable ? o.total : void 0, m = a - n, p = r(m), u = a <= i;
    n = a;
    const f = {
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
    e(f);
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
}, vt = (e) => (...t) => d.asap(() => e(...t)), Tr = z.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (s) => (s = new URL(s, z.origin), e.protocol === s.protocol && e.host === s.host && (t || e.port === s.port)))(
  new URL(z.origin),
  z.navigator && /(msie|trident)/i.test(z.navigator.userAgent)
) : () => !0, jr = z.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, s, n, r, o, a) {
      if (typeof document > "u") return;
      const i = [`${e}=${encodeURIComponent(t)}`];
      d.isNumber(s) && i.push(`expires=${new Date(s).toUTCString()}`), d.isString(n) && i.push(`path=${n}`), d.isString(r) && i.push(`domain=${r}`), o === !0 && i.push("secure"), d.isString(a) && i.push(`SameSite=${a}`), document.cookie = i.join("; ");
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
const At = (e) => e instanceof Z ? { ...e } : e;
function me(e, t) {
  t = t || {};
  const s = {};
  function n(p, u, f, w) {
    return d.isPlainObject(p) && d.isPlainObject(u) ? d.merge.call({ caseless: w }, p, u) : d.isPlainObject(u) ? d.merge({}, u) : d.isArray(u) ? u.slice() : u;
  }
  function r(p, u, f, w) {
    if (d.isUndefined(u)) {
      if (!d.isUndefined(p))
        return n(void 0, p, f, w);
    } else return n(p, u, f, w);
  }
  function o(p, u) {
    if (!d.isUndefined(u))
      return n(void 0, u);
  }
  function a(p, u) {
    if (d.isUndefined(u)) {
      if (!d.isUndefined(p))
        return n(void 0, p);
    } else return n(void 0, u);
  }
  function i(p, u, f) {
    if (f in t)
      return n(p, u);
    if (f in e)
      return n(void 0, p);
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
    headers: (p, u, f) => r(At(p), At(u), f, !0)
  };
  return d.forEach(Object.keys({ ...e, ...t }), function(u) {
    if (u === "__proto__" || u === "constructor" || u === "prototype") return;
    const f = d.hasOwnProp(m, u) ? m[u] : r, w = f(e[u], t[u], u);
    d.isUndefined(w) && f !== i || (s[u] = w);
  }), s;
}
const bn = (e) => {
  const t = me({}, e);
  let { data: s, withXSRFToken: n, xsrfHeaderName: r, xsrfCookieName: o, headers: a, auth: i } = t;
  if (t.headers = a = Z.from(a), t.url = mn(
    wn(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), i && a.set(
    "Authorization",
    "Basic " + btoa(
      (i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : "")
    )
  ), d.isFormData(s)) {
    if (z.hasStandardBrowserEnv || z.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (d.isFunction(s.getHeaders)) {
      const m = s.getHeaders(), p = ["content-type", "content-length"];
      Object.entries(m).forEach(([u, f]) => {
        p.includes(u.toLowerCase()) && a.set(u, f);
      });
    }
  }
  if (z.hasStandardBrowserEnv && (n && d.isFunction(n) && (n = n(t)), n || n !== !1 && Tr(t.url))) {
    const m = r && o && jr.read(o);
    m && a.set(r, m);
  }
  return t;
}, Cr = typeof XMLHttpRequest < "u", vr = Cr && function(e) {
  return new Promise(function(s, n) {
    const r = bn(e);
    let o = r.data;
    const a = Z.from(r.headers).normalize();
    let { responseType: i, onUploadProgress: m, onDownloadProgress: p } = r, u, f, w, x, l;
    function h() {
      x && x(), l && l(), r.cancelToken && r.cancelToken.unsubscribe(u), r.signal && r.signal.removeEventListener("abort", u);
    }
    let y = new XMLHttpRequest();
    y.open(r.method.toUpperCase(), r.url, !0), y.timeout = r.timeout;
    function _() {
      if (!y)
        return;
      const O = Z.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), P = {
        data: !i || i === "text" || i === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: O,
        config: e,
        request: y
      };
      yn(
        function(j) {
          s(j), h();
        },
        function(j) {
          n(j), h();
        },
        P
      ), y = null;
    }
    "onloadend" in y ? y.onloadend = _ : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, y.onabort = function() {
      y && (n(new E("Request aborted", E.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function(C) {
      const P = C && C.message ? C.message : "Network Error", v = new E(P, E.ERR_NETWORK, e, y);
      v.event = C || null, n(v), y = null;
    }, y.ontimeout = function() {
      let C = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const P = r.transitional || ut;
      r.timeoutErrorMessage && (C = r.timeoutErrorMessage), n(
        new E(
          C,
          P.clarifyTimeoutError ? E.ETIMEDOUT : E.ECONNABORTED,
          e,
          y
        )
      ), y = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in y && d.forEach(a.toJSON(), function(C, P) {
      y.setRequestHeader(P, C);
    }), d.isUndefined(r.withCredentials) || (y.withCredentials = !!r.withCredentials), i && i !== "json" && (y.responseType = r.responseType), p && ([w, l] = We(p, !0), y.addEventListener("progress", w)), m && y.upload && ([f, x] = We(m), y.upload.addEventListener("progress", f), y.upload.addEventListener("loadend", x)), (r.cancelToken || r.signal) && (u = (O) => {
      y && (n(!O || O.type ? new Ne(null, e, y) : O), y.abort(), y = null);
    }, r.cancelToken && r.cancelToken.subscribe(u), r.signal && (r.signal.aborted ? u() : r.signal.addEventListener("abort", u)));
    const N = _r(r.url);
    if (N && z.protocols.indexOf(N) === -1) {
      n(
        new E(
          "Unsupported protocol " + N + ":",
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
          u instanceof E ? u : new Ne(u instanceof Error ? u.message : u)
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
    const { signal: m } = n;
    return m.unsubscribe = () => d.asap(i), m;
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
  let o = 0, a, i = (m) => {
    a || (a = !0, n && n(m));
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
          let f = u.byteLength;
          if (s) {
            let w = o += f;
            s(w);
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
}, Pt = 64 * 1024, { isFunction: De } = d, Lr = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(d.global), { ReadableStream: Mt, TextEncoder: Lt } = d.global, Dt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Dr = (e) => {
  e = d.merge.call(
    {
      skipUndefined: !0
    },
    Lr,
    e
  );
  const { fetch: t, Request: s, Response: n } = e, r = t ? De(t) : typeof fetch == "function", o = De(s), a = De(n);
  if (!r)
    return !1;
  const i = r && De(Mt), m = r && (typeof Lt == "function" ? /* @__PURE__ */ ((l) => (h) => l.encode(h))(new Lt()) : async (l) => new Uint8Array(await new s(l).arrayBuffer())), p = o && i && Dt(() => {
    let l = !1;
    const h = new s(z.origin, {
      body: new Mt(),
      method: "POST",
      get duplex() {
        return l = !0, "half";
      }
    }).headers.has("Content-Type");
    return l && !h;
  }), u = a && i && Dt(() => d.isReadableStream(new n("").body)), f = {
    stream: u && ((l) => l.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((l) => {
    !f[l] && (f[l] = (h, y) => {
      let _ = h && h[l];
      if (_)
        return _.call(h);
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
    if (d.isBlob(l))
      return l.size;
    if (d.isSpecCompliantForm(l))
      return (await new s(z.origin, {
        method: "POST",
        body: l
      }).arrayBuffer()).byteLength;
    if (d.isArrayBufferView(l) || d.isArrayBuffer(l))
      return l.byteLength;
    if (d.isURLSearchParams(l) && (l = l + ""), d.isString(l))
      return (await m(l)).byteLength;
  }, x = async (l, h) => {
    const y = d.toFiniteNumber(l.getContentLength());
    return y ?? w(h);
  };
  return async (l) => {
    let {
      url: h,
      method: y,
      data: _,
      signal: N,
      cancelToken: O,
      timeout: C,
      onDownloadProgress: P,
      onUploadProgress: v,
      responseType: j,
      headers: J,
      withCredentials: I = "same-origin",
      fetchOptions: V
    } = bn(l), Y = t || fetch;
    j = j ? (j + "").toLowerCase() : "text";
    let $ = Ar(
      [N, O && O.toAbortSignal()],
      C
    ), W = null;
    const D = $ && $.unsubscribe && (() => {
      $.unsubscribe();
    });
    let le;
    try {
      if (v && p && y !== "get" && y !== "head" && (le = await x(J, _)) !== 0) {
        let g = new s(h, {
          method: "POST",
          body: _,
          duplex: "half"
        }), S;
        if (d.isFormData(_) && (S = g.headers.get("content-type")) && J.setContentType(S), g.body) {
          const [A, M] = Ct(
            le,
            We(vt(v))
          );
          _ = kt(g.body, Pt, A, M);
        }
      }
      d.isString(I) || (I = I ? "include" : "omit");
      const F = o && "credentials" in s.prototype, se = {
        ...V,
        signal: $,
        method: y.toUpperCase(),
        headers: J.normalize().toJSON(),
        body: _,
        duplex: "half",
        credentials: F ? I : void 0
      };
      W = o && new s(h, se);
      let q = await (o ? Y(W, V) : Y(h, se));
      const re = u && (j === "stream" || j === "response");
      if (u && (P || re && D)) {
        const g = {};
        ["status", "statusText", "headers"].forEach((ie) => {
          g[ie] = q[ie];
        });
        const S = d.toFiniteNumber(q.headers.get("content-length")), [A, M] = P && Ct(
          S,
          We(vt(P), !0)
        ) || [];
        q = new n(
          kt(q.body, Pt, A, () => {
            M && M(), D && D();
          }),
          g
        );
      }
      j = j || "text";
      let oe = await f[d.findKey(f, j) || "text"](
        q,
        l
      );
      return !re && D && D(), await new Promise((g, S) => {
        yn(g, S, {
          data: oe,
          headers: Z.from(q.headers),
          status: q.status,
          statusText: q.statusText,
          config: l,
          request: W
        });
      });
    } catch (F) {
      throw D && D(), F && F.name === "TypeError" && /Load failed|fetch/i.test(F.message) ? Object.assign(
        new E(
          "Network Error",
          E.ERR_NETWORK,
          l,
          W,
          F && F.response
        ),
        {
          cause: F.cause || F
        }
      ) : E.from(F, F && F.code, l, W, F && F.response);
    }
  };
}, Ur = /* @__PURE__ */ new Map(), xn = (e) => {
  let t = e && e.env || {};
  const { fetch: s, Request: n, Response: r } = t, o = [n, r, s];
  let a = o.length, i = a, m, p, u = Ur;
  for (; i--; )
    m = o[i], p = u.get(m), p === void 0 && u.set(m, p = i ? /* @__PURE__ */ new Map() : Dr(t)), u = p;
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
d.forEach(ft, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ut = (e) => `- ${e}`, Fr = (e) => d.isFunction(e) || e === null || e === !1;
function Ir(e, t) {
  e = d.isArray(e) ? e : [e];
  const { length: s } = e;
  let n, r;
  const o = {};
  for (let a = 0; a < s; a++) {
    n = e[a];
    let i;
    if (r = n, !Fr(n) && (r = ft[(i = String(n)).toLowerCase()], r === void 0))
      throw new E(`Unknown adapter '${i}'`);
    if (r && (d.isFunction(r) || (r = r.get(t))))
      break;
    o[i || "#" + a] = r;
  }
  if (!r) {
    const a = Object.entries(o).map(
      ([m, p]) => `adapter ${m} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = s ? a.length > 1 ? `since :
` + a.map(Ut).join(`
`) : " " + Ut(a[0]) : "as no adapter specified";
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
    throw new Ne(null, e);
}
function Ft(e) {
  return tt(e), e.headers = Z.from(e.headers), e.data = et.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rn.getAdapter(e.adapter || Oe.adapter, e)(e).then(
    function(n) {
      return tt(e), n.data = et.call(e, e.transformResponse, n), n.headers = Z.from(n.headers), n;
    },
    function(n) {
      return gn(n) || (tt(e), n && n.response && (n.response.data = et.call(
        e,
        e.transformResponse,
        n.response
      ), n.response.headers = Z.from(n.response.headers))), Promise.reject(n);
    }
  );
}
const _n = "1.13.6", Ve = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ve[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const It = {};
Ve.transitional = function(t, s, n) {
  function r(o, a) {
    return "[Axios v" + _n + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
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
      const i = e[o], m = i === void 0 || a(i, o, e);
      if (m !== !0)
        throw new E(
          "option " + o + " must be " + m,
          E.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (s !== !0)
      throw new E("Unknown option " + o, E.ERR_BAD_OPTION);
  }
}
const Be = {
  assertOptions: Br,
  validators: Ve
}, Q = Be.validators;
let pe = class {
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
    typeof t == "string" ? (s = s || {}, s.url = t) : s = t || {}, s = me(this.defaults, s);
    const { transitional: n, paramsSerializer: r, headers: o } = s;
    n !== void 0 && Be.assertOptions(
      n,
      {
        silentJSONParsing: Q.transitional(Q.boolean),
        forcedJSONParsing: Q.transitional(Q.boolean),
        clarifyTimeoutError: Q.transitional(Q.boolean),
        legacyInterceptorReqResOrdering: Q.transitional(Q.boolean)
      },
      !1
    ), r != null && (d.isFunction(r) ? s.paramsSerializer = {
      serialize: r
    } : Be.assertOptions(
      r,
      {
        encode: Q.function,
        serialize: Q.function
      },
      !0
    )), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), Be.assertOptions(
      s,
      {
        baseUrl: Q.spelling("baseURL"),
        withXsrfToken: Q.spelling("withXSRFToken")
      },
      !0
    ), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let a = o && d.merge(o.common, o[s.method]);
    o && d.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (l) => {
      delete o[l];
    }), s.headers = Z.concat(a, o);
    const i = [];
    let m = !0;
    this.interceptors.request.forEach(function(h) {
      if (typeof h.runWhen == "function" && h.runWhen(s) === !1)
        return;
      m = m && h.synchronous;
      const y = s.transitional || ut;
      y && y.legacyInterceptorReqResOrdering ? i.unshift(h.fulfilled, h.rejected) : i.push(h.fulfilled, h.rejected);
    });
    const p = [];
    this.interceptors.response.forEach(function(h) {
      p.push(h.fulfilled, h.rejected);
    });
    let u, f = 0, w;
    if (!m) {
      const l = [Ft.bind(this), void 0];
      for (l.unshift(...i), l.push(...p), w = l.length, u = Promise.resolve(s); f < w; )
        u = u.then(l[f++], l[f++]);
      return u;
    }
    w = i.length;
    let x = s;
    for (; f < w; ) {
      const l = i[f++], h = i[f++];
      try {
        x = l(x);
      } catch (y) {
        h.call(this, y);
        break;
      }
    }
    try {
      u = Ft.call(this, x);
    } catch (l) {
      return Promise.reject(l);
    }
    for (f = 0, w = p.length; f < w; )
      u = u.then(p[f++], p[f++]);
    return u;
  }
  getUri(t) {
    t = me(this.defaults, t);
    const s = wn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return mn(s, t.params, t.paramsSerializer);
  }
};
d.forEach(["delete", "get", "head", "options"], function(t) {
  pe.prototype[t] = function(s, n) {
    return this.request(
      me(n || {}, {
        method: t,
        url: s,
        data: (n || {}).data
      })
    );
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function s(n) {
    return function(o, a, i) {
      return this.request(
        me(i || {}, {
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
  pe.prototype[t] = s(), pe.prototype[t + "Form"] = s(!0);
});
let Wr = class Sn {
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
      n.reason || (n.reason = new Ne(o, a, i), s(n.reason));
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
      token: new Sn(function(r) {
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
  return d.isObject(e) && e.isAxiosError === !0;
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
  const t = new pe(e), s = nn(pe.prototype.request, t);
  return d.extend(s, pe.prototype, t, { allOwnKeys: !0 }), d.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(r) {
    return En(me(e, r));
  }, s;
}
const U = En(Oe);
U.Axios = pe;
U.CanceledError = Ne;
U.CancelToken = Wr;
U.isCancel = gn;
U.VERSION = _n;
U.toFormData = Je;
U.AxiosError = E;
U.Cancel = U.CanceledError;
U.all = function(t) {
  return Promise.all(t);
};
U.spread = $r;
U.isAxiosError = qr;
U.mergeConfig = me;
U.AxiosHeaders = Z;
U.formToJSON = (e) => hn(d.isHTMLForm(e) ? new FormData(e) : e);
U.getAdapter = Rn.getAdapter;
U.HttpStatusCode = ot;
U.default = U;
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
} = U, zr = (e, t) => {
  const s = U.create({
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
  const n = de(() => e ? zr(e, t) : null, [e, t]);
  return de(() => n ? {
    getMessages: async (r, o) => ((await n.getMessages({ reference_doctype: r, reference_name: o })).message || []).map((m) => it(m)).filter((m) => !!m),
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
        return !r && !o ? p.filter((f) => f.type === "whatsapp").reduce((f, w) => f + (w.counts || 0), 0) : ((i = p.find(
          (f) => f.type === "whatsapp" && (r && f.from === r || o && f.customer === o)
        )) == null ? void 0 : i.counts) ?? 0;
      } catch (m) {
        return console.error("[WhatsApp Widget] Failed to fetch unread count:", m), 0;
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
    currentUserFullName: m,
    phone: p,
    refDoctype: u = "Contact",
    refName: f = "",
    links: w = [],
    isChatOpen: x,
    showNotification: l,
    showWarning: h,
    showError: y
  } = e, _ = Hr(r, o, i), N = t || _, O = de(
    () => Jr(N, { showNotification: l, showWarning: h, showError: y }),
    [N, l, h, y]
  ), C = de(() => s || {
    currentUser: i || "",
    currentUserFullName: m,
    doctype: u,
    refName: f || "",
    phone: p || "",
    links: w,
    isChatOpen: x,
    apiBaseUrl: r
  }, [s, i, m, u, f, p, w, x, r]), P = de(() => {
    if (a !== void 0)
      return { isConnected: a };
  }, [a]);
  return {
    apiAdapter: O,
    config: C,
    finalSocketAdapter: n || P
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
    selectedTemplateName: m,
    selectedTemplate: p,
    setSelectedTemplateText: u,
    setSelectedTemplateName: f,
    setSelectedTemplate: w,
    attachedFile: x,
    templates: l,
    isLoadingTemplates: h,
    sendMessage: y,
    handleTemplateSelect: _,
    handleFileSelect: N,
    handleFileRemove: O,
    uploadFileMutation: C
  } = tn();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-chat-container", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header", children: [
        /* @__PURE__ */ c.jsx("div", { className: "whatsapp-header-avatar", children: /* @__PURE__ */ c.jsx(Vn, { size: 20, color: "#008069" }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header-info", children: [
          /* @__PURE__ */ c.jsx("h4", { children: "WhatsApp Chat" }),
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
          selectedTemplateName: m,
          selectedTemplate: p,
          onClearTemplate: () => {
            f(void 0), u(void 0), w(void 0);
          },
          attachedFile: x,
          onFileSelect: N,
          onFileRemove: O
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      Se,
      {
        open: o,
        onClose: () => a(!1),
        width: "700px",
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Select WhatsApp Template" }),
        children: /* @__PURE__ */ c.jsx(en, { templates: l, onSelect: _, isLoading: h })
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
  phone: m,
  refDoctype: p = "Contact",
  refName: u = "",
  links: f = [],
  showNotification: w,
  showWarning: x,
  showError: l
}) => {
  const { apiAdapter: h, config: y, finalSocketAdapter: _ } = Ye({
    apiAdapter: e,
    config: t,
    socketAdapter: s,
    baseURL: o,
    token: a,
    socketConnected: r,
    currentUserEmail: i,
    phone: m,
    refDoctype: p,
    refName: u,
    links: f,
    isChatOpen: !0,
    // Standalone component assumes it is active/open if rendered
    showNotification: w,
    showWarning: x,
    showError: l
  });
  return !h || !y ? null : /* @__PURE__ */ c.jsx(Kt, { apiAdapter: h, config: y, socketAdapter: _, socketPayload: n, children: /* @__PURE__ */ c.jsx(Vr, {}) });
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
    setSelectedTemplateText: m,
    setSelectedTemplateName: p,
    setSelectedTemplate: u,
    attachedFile: f,
    templates: w,
    isLoadingTemplates: x,
    sendMessage: l,
    handleTemplateSelect: h,
    handleFileSelect: y,
    handleFileRemove: _,
    uploadFileMutation: N
  } = tn(), { config: O } = $e();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-chat-container whatsapp-send-msg-only", children: [
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-send-only-spacer", style: { flex: 1, minHeight: "20px" } }),
      /* @__PURE__ */ c.jsx(
        Qt,
        {
          onSend: l,
          isLoading: e || s || N.isPending,
          isUploading: N.isPending,
          isSending: s,
          onTemplateClick: () => r(!0),
          templateText: o,
          selectedTemplateName: a,
          selectedTemplate: i,
          onClearTemplate: () => {
            p(void 0), m(void 0), u(void 0);
          },
          attachedFile: f,
          onFileSelect: y,
          onFileRemove: _
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      Se,
      {
        open: n,
        onClose: () => r(!1),
        width: "700px",
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Select WhatsApp Template" }),
        children: /* @__PURE__ */ c.jsx(en, { templates: w, onSelect: h, isLoading: x })
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
  currentUserFullName: m,
  phone: p,
  refDoctype: u = "Contact",
  refName: f = "",
  links: w = [],
  showNotification: x,
  showWarning: l,
  showError: h
}) => {
  const { apiAdapter: y, config: _, finalSocketAdapter: N } = Ye({
    apiAdapter: e,
    config: t,
    socketAdapter: s,
    baseURL: o,
    token: a,
    socketConnected: r,
    currentUserEmail: i,
    currentUserFullName: m,
    phone: p,
    refDoctype: u,
    refName: f,
    links: w,
    isChatOpen: !0,
    showNotification: x,
    showWarning: l,
    showError: h
  });
  return !y || !_ ? null : /* @__PURE__ */ c.jsx(
    Kt,
    {
      apiAdapter: y,
      config: { ..._, isChatOpen: !0, preventHistoryFetch: !0 },
      socketAdapter: N,
      socketPayload: n,
      children: /* @__PURE__ */ c.jsx(Kr, {})
    }
  );
}, Bt = /* @__PURE__ */ new Set();
function Gr(e, t, s, n, r, o, a) {
  const i = Le((l) => l.incomingData), m = Le((l) => l.setIncomingData), p = Le((l) => l.handleIncomingMessage), u = Le((l) => l.clearContact), f = ae(null), w = de(() => {
    if (!n && !r)
      return i.filter((h) => h.type === "whatsapp").reduce((h, y) => h + (y.counts || 0), 0);
    const l = i.find(
      (h) => h.type === "whatsapp" && (n && h.from === n || r && h.customer === r)
    );
    return (l == null ? void 0 : l.counts) ?? 0;
  }, [i, n, r]), x = Ue(async () => {
    if (e.getIncomingCommunications)
      try {
        const l = await e.getIncomingCommunications(a || "");
        m(l);
      } catch (l) {
        console.error("Failed to fetch incoming communications:", l);
      }
    else
      try {
        await e.getUnreadCount(n || "", r || "");
      } catch (l) {
        console.error("Failed to fetch unread count:", l);
      }
  }, [e, n, r, m]);
  return te(() => {
    x();
  }, [x]), te(() => {
    o && u(n, r);
  }, [o, n, r, u]), te(() => {
    if (!e) return;
    const l = e.onMessageSent;
    return e.onMessageSent = () => {
      x(), l && l();
    }, () => {
      e.onMessageSent && (e.onMessageSent = l);
    };
  }, [e, x]), te(() => {
    const l = (h) => {
      if (!(!h || h.name === void 0) && h.is_outbound === 0) {
        p(h);
        const y = h.status === 4;
        if (!o && !y && !Bt.has(h.name) && (Bt.add(h.name), e.showNotification)) {
          const _ = h.sender || h.from_name || "Customer";
          e.showNotification("WhatsApp", `New message received from ${_}`);
        }
      }
    };
    if (t != null && t.onMessage) {
      const h = (y) => l(y);
      return t.onMessage(h), () => {
        var y;
        return (y = t.offMessage) == null ? void 0 : y.call(t, h);
      };
    }
    if (s && s.event === "whatsapp_message") {
      const h = s.message, y = String((h == null ? void 0 : h.name) ?? (h == null ? void 0 : h.message_id) ?? "");
      if (y && f.current === y)
        return;
      y && (f.current = y);
      const _ = it(h);
      l(_);
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
  phone: m,
  refDoctype: p = "Contact",
  refName: u = "",
  links: f = [],
  buttonLabel: w,
  icon: x,
  btnClassName: l = "",
  modalSize: h = "1024px",
  variant: y = "default",
  isOpen: _,
  onOpen: N,
  onClose: O,
  showNotification: C,
  showWarning: P,
  showError: v
}) => {
  const [j, J] = X(!1), I = _ !== void 0 ? _ : j, { apiAdapter: V, config: Y, finalSocketAdapter: $ } = Ye({
    apiAdapter: e,
    config: t,
    socketAdapter: s,
    baseURL: n,
    token: r,
    socketConnected: a,
    currentUserEmail: i,
    phone: m,
    refDoctype: p,
    refName: u,
    links: f,
    isChatOpen: I,
    showNotification: C,
    showWarning: P,
    showError: v
  }), W = Gr(V, $, o, m, u || void 0, I, Y == null ? void 0 : Y.currentUser), D = () => {
    _ !== void 0 ? I ? O == null || O() : N == null || N() : J(!j);
  };
  return V ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    y === "plain" ? /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: l,
        onClick: D,
        style: {
          position: "relative",
          ...typeof l == "string" && l.includes("button") ? {} : { border: "none", background: "none", cursor: "pointer", padding: 0 }
        },
        children: [
          x || w,
          W > 0 && /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-badge", style: { top: "-10px", right: "-10px" }, children: W })
        ]
      }
    ) : /* @__PURE__ */ c.jsxs("div", { className: `whatsapp-trigger-wrapper ${l}`, onClick: D, children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-trigger-icon-container", children: [
        x || /* @__PURE__ */ c.jsx(zt, { size: 20, color: "#175353" }),
        W > 0 && /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-badge", children: W })
      ] }),
      /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-label", children: w })
    ] }),
    /* @__PURE__ */ c.jsx(
      Se,
      {
        open: I,
        onClose: D,
        width: h,
        header: /* @__PURE__ */ c.jsx("h3", { style: { margin: 0, fontSize: "1.1rem" }, children: "WhatsApp Chat" }),
        children: /* @__PURE__ */ c.jsx(Yr, { apiAdapter: V, config: Y, socketAdapter: $, socketPayload: o })
      }
    )
  ] }) : null;
}, _o = ({
  apiAdapter: e,
  config: t,
  socketAdapter: s,
  baseURL: n,
  token: r,
  socketPayload: o,
  socketConnected: a,
  currentUserEmail: i,
  currentUserFullName: m,
  phone: p,
  refDoctype: u = "Contact",
  refName: f = "",
  links: w = [],
  buttonLabel: x = "Send WhatsApp",
  icon: l,
  btnClassName: h = "",
  modalSize: y = "600px",
  variant: _ = "default",
  isOpen: N,
  onOpen: O,
  onClose: C,
  showNotification: P,
  showWarning: v,
  showError: j
}) => {
  const [J, I] = X(!1), V = N !== void 0 ? N : J, { apiAdapter: Y, config: $, finalSocketAdapter: W } = Ye({
    apiAdapter: e,
    config: t,
    socketAdapter: s,
    baseURL: n,
    token: r,
    socketConnected: a,
    currentUserEmail: i,
    currentUserFullName: m,
    phone: p,
    refDoctype: u,
    refName: f,
    links: w,
    isChatOpen: V,
    showNotification: P,
    showWarning: v,
    showError: j
  }), D = () => {
    N !== void 0 ? V ? C == null || C() : O == null || O() : I(!J);
  };
  return Y ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    _ === "plain" ? /* @__PURE__ */ c.jsx(
      "button",
      {
        className: h,
        onClick: D,
        style: {
          position: "relative",
          ...typeof h == "string" && h.includes("button") ? {} : { border: "none", background: "none", cursor: "pointer", padding: 0 }
        },
        children: l || x
      }
    ) : /* @__PURE__ */ c.jsxs("div", { className: `whatsapp-trigger-wrapper ${h}`, onClick: D, children: [
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-trigger-icon-container", children: l || /* @__PURE__ */ c.jsx(zt, { size: 20, color: "#175353" }) }),
      /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-label", children: x })
    ] }),
    /* @__PURE__ */ c.jsx(
      Se,
      {
        open: V,
        onClose: D,
        width: y,
        header: /* @__PURE__ */ c.jsx("h3", { style: { margin: 0, fontSize: "1.1rem" }, children: "WhatsApp Chat" }),
        children: /* @__PURE__ */ c.jsx("div", { style: { padding: "0 4px 8px 4px" }, children: /* @__PURE__ */ c.jsx(
          Xr,
          {
            apiAdapter: Y,
            config: $,
            socketAdapter: W,
            socketPayload: o,
            currentUserFullName: m
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
  _o as WhatsappSendMessageTrigger,
  Kr as WhatsappSendMessageWidget,
  Gr as useWhatsappBadgeCount,
  $e as useWhatsappChatConfig,
  tn as useWhatsappWidgetLogic,
  ce as useWhatsappWidgetZustand
};
