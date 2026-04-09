import Oe, { useContext as Kt, createContext as Yt, useRef as ie, useMemo as me, useEffect as re, forwardRef as Un, useImperativeHandle as Dn, useState as Y, useCallback as ve } from "react";
import { WhatsappLogo as Ln, User as In, X as $n, Paperclip as Bn, FileText as Wn, PaperPlaneTilt as qn, ArrowSquareOut as zn, Check as Hn, Checks as Jn, Warning as Vn, Clock as Kn, Eye as Yn } from "@phosphor-icons/react";
import { useStore as Xn, createStore as Gn, create as Zn } from "zustand";
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
function Qn() {
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
function es() {
  return Tt || (Tt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === P ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case y:
          return "Fragment";
        case O:
          return "Profiler";
        case _:
          return "StrictMode";
        case F:
          return "Suspense";
        case C:
          return "SuspenseList";
        case X:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case h:
            return "Portal";
          case j:
            return g.displayName || "Context";
          case v:
            return (g._context.displayName || "Context") + ".Consumer";
          case N:
            var E = g.render;
            return g = g.displayName, g || (g = E.displayName || E.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case J:
            return E = g.displayName || null, E !== null ? E : e(g.type) || "Memo";
          case z:
            E = g._payload, g = g._init;
            try {
              return e(g(E));
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
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var A = E.error, U = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return A.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          U
        ), t(g);
      }
    }
    function s(g) {
      if (g === y) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === z)
        return "<...>";
      try {
        var E = e(g);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var g = D.A;
      return g === null ? null : g.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(g) {
      if (W.call(g, "key")) {
        var E = Object.getOwnPropertyDescriptor(g, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function i(g, E) {
      function A() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: A,
        configurable: !0
      });
    }
    function m() {
      var g = e(this.type);
      return oe[g] || (oe[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function p(g, E, A, U, ne, Re) {
      var $ = A.ref;
      return g = {
        $$typeof: l,
        type: g,
        key: E,
        props: A,
        _owner: U
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(g, "ref", {
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
        value: ne
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Re
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function u(g, E, A, U, ne, Re) {
      var $ = E.children;
      if ($ !== void 0)
        if (U)
          if (L($)) {
            for (U = 0; U < $.length; U++)
              d($[U]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d($);
      if (W.call(E, "key")) {
        $ = e(g);
        var fe = Object.keys(E).filter(function(Qe) {
          return Qe !== "key";
        });
        U = 0 < fe.length ? "{key: someKey, " + fe.join(": ..., ") + ": ...}" : "{key: someKey}", le[$ + U] || (fe = 0 < fe.length ? "{" + fe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          U,
          $,
          fe,
          $
        ), le[$ + U] = !0);
      }
      if ($ = null, A !== void 0 && (n(A), $ = "" + A), a(E) && (n(E.key), $ = "" + E.key), "key" in E) {
        A = {};
        for (var Se in E)
          Se !== "key" && (A[Se] = E[Se]);
      } else A = E;
      return $ && i(
        A,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), p(
        g,
        $,
        A,
        r(),
        ne,
        Re
      );
    }
    function d(g) {
      w(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === z && (g._payload.status === "fulfilled" ? w(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
    }
    function w(g) {
      return typeof g == "object" && g !== null && g.$$typeof === l;
    }
    var x = Oe, l = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), j = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), P = Symbol.for("react.client.reference"), D = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, L = Array.isArray, ee = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(g) {
        return g();
      }
    };
    var M, oe = {}, te = x.react_stack_bottom_frame.bind(
      x,
      o
    )(), de = ee(s(o)), le = {};
    Te.Fragment = y, Te.jsx = function(g, E, A) {
      var U = 1e4 > D.recentlyCreatedOwnerStacks++;
      return u(
        g,
        E,
        A,
        !1,
        U ? Error("react-stack-top-frame") : te,
        U ? ee(s(g)) : de
      );
    }, Te.jsxs = function(g, E, A) {
      var U = 1e4 > D.recentlyCreatedOwnerStacks++;
      return u(
        g,
        E,
        A,
        !0,
        U ? Error("react-stack-top-frame") : te,
        U ? ee(s(g)) : de
      );
    };
  })()), Te;
}
var jt;
function ts() {
  return jt || (jt = 1, process.env.NODE_ENV === "production" ? Ie.exports = Qn() : Ie.exports = es()), Ie.exports;
}
var c = ts();
const Xt = (e) => /* @__PURE__ */ c.jsx(In, { ...e }), ns = (e) => /* @__PURE__ */ c.jsx(Bn, { ...e }), ss = (e) => /* @__PURE__ */ c.jsx(qn, { ...e }), ft = (e) => /* @__PURE__ */ c.jsx($n, { ...e }), rs = (e) => /* @__PURE__ */ c.jsx(Yn, { ...e }), vt = (e) => /* @__PURE__ */ c.jsx(Jn, { ...e }), Ot = (e) => /* @__PURE__ */ c.jsx(Hn, { ...e }), os = (e) => /* @__PURE__ */ c.jsx(zn, { ...e }), Gt = (e) => /* @__PURE__ */ c.jsx(Wn, { ...e }), as = (e) => /* @__PURE__ */ c.jsx(Kn, { ...e }), is = (e) => /* @__PURE__ */ c.jsx(Vn, { ...e }), Zt = (e) => /* @__PURE__ */ c.jsx(Ln, { ...e }), Qt = (e) => {
  if (!e) return "";
  try {
    return new Date(e).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}, en = (e, t) => {
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
      return /* @__PURE__ */ c.jsx(Ot, { ...n("#999") });
    case 3:
      return /* @__PURE__ */ c.jsx(vt, { ...n("#999"), weight: "bold" });
    case 4:
      return /* @__PURE__ */ c.jsx(vt, { ...n("#53bdeb"), weight: "bold" });
    default:
      return /* @__PURE__ */ c.jsx(Ot, { ...n("#999") });
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
  return s < e.length && n.push(e.substring(s)), n.length > 0 ? /* @__PURE__ */ c.jsx(Oe.Fragment, { children: n }) : e;
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
const $e = Zn((e) => ({
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
    const p = s.findIndex((u) => u.type === "whatsapp" && (o && u.from === o || a && u.customer === a));
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
})), us = () => Gn((e) => ({
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
})), tn = Yt(void 0), nn = Yt(void 0), sn = ({
  apiAdapter: e,
  config: t,
  socketAdapter: n,
  socketPayload: s,
  children: r
}) => {
  const [o] = Oe.useState(() => us());
  return /* @__PURE__ */ c.jsx(tn.Provider, { value: { apiAdapter: e, config: t, socketAdapter: n, socketPayload: s }, children: /* @__PURE__ */ c.jsx(nn.Provider, { value: o, children: r }) });
}, Ne = () => {
  const e = Kt(tn);
  if (!e) throw new Error("Missing WhatsappChatProvider");
  return e;
}, rn = () => {
  const e = Kt(nn);
  if (!e) throw new Error("Missing WhatsappChatProvider");
  return e;
}, ue = (e) => {
  const t = rn();
  return Xn(t, e);
};
function ds(e) {
  return e.startsWith("/") ? e.slice(1) : e;
}
const on = ({
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
  const { config: u } = Ne(), d = u.apiBaseUrl || "", w = m ? `${d}/${ds(m)}` : void 0, x = i === "IMAGE" && w, l = i === "DOCUMENT" && w, h = !i || i === "TEXT";
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
          /* @__PURE__ */ c.jsx(Gt, { size: 24, color: "#e74c3c" }),
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
      /* @__PURE__ */ c.jsx("span", { children: Qt(r) }),
      !p && o === 1 && en(a, o)
    ] })
  ] }) });
}, G = ({ width: e, height: t, className: n, style: s }) => /* @__PURE__ */ c.jsx(
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
      /* @__PURE__ */ c.jsx(G, { width: "140px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(G, { width: "60px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble sent", style: e, children: [
      /* @__PURE__ */ c.jsx(G, { width: "100px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(G, { width: "55px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx(G, { width: "180px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(G, { width: "60px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble sent", style: e, children: [
      /* @__PURE__ */ c.jsx(G, { width: "120px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(G, { width: "55px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx(G, { width: "90px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(G, { width: "60px", height: "0.75rem" })
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
  const { config: i } = Ne(), m = i.apiBaseUrl || "", p = ie(null), u = me(() => {
    var d;
    if (s) {
      const w = s.creation || (s.date && s.time ? `${s.date} ${s.time}` : (/* @__PURE__ */ new Date()).toISOString()), x = s.type === "Outgoing" || s.is_outbound === 1, l = ((d = s.links) == null ? void 0 : d.map((h) => ({
        button_label: h.button_label ?? "",
        link: h.link ?? h.website_url ?? ""
      }))) ?? void 0;
      return [
        {
          name: s.name || `activity-${w}`,
          message: s.message || "",
          sender: s.type === "Outgoing" ? "You" : "Customer",
          creation: w,
          is_outbound: x ? 1 : 0,
          attach: s.attach,
          content_type: s.content_type,
          status: ps(s.status, x),
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
  return re(() => {
    var d;
    a && ((d = p.current) == null || d.scrollIntoView({ behavior: "smooth" }));
  }, [u, a]), t ? /* @__PURE__ */ c.jsx(fs, {}) : n ? /* @__PURE__ */ c.jsx("div", { className: "whatsapp-message-list", style: { textAlign: "center", color: "#c53030", padding: "20px" }, children: n }) : /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-message-list", children: [
    u.length === 0 && /* @__PURE__ */ c.jsx("div", { style: { textAlign: "center", color: "#888", padding: "20px" }, children: "No messages yet. Start the conversation!" }),
    u.map((d, w) => {
      const x = d, l = Array.isArray(x.attach) ? x.attach : x.attach ? [x.attach] : [], h = x.content_type;
      return x.message_type === "Template" ? /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: `message-bubble ${d.is_outbound ? "sent" : "received"} message-bubble--template`,
          children: [
            o && r && /* @__PURE__ */ c.jsx("div", { className: "message-icon-wrapper", children: r }),
            /* @__PURE__ */ c.jsx(
              on,
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
          cs(d.message) || d.message,
          l.length > 0 && l.map((_, O) => /* @__PURE__ */ c.jsx("div", { className: "message-attachment", children: h === "image" ? /* @__PURE__ */ c.jsx(
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
          ) }, `${d.name}-attach-${O}`)),
          /* @__PURE__ */ c.jsxs("div", { className: "message-time", children: [
            Qt(d.creation),
            en(d.status, d.is_outbound)
          ] })
        ] })
      ] }, `${d.name}-${w}`);
    }),
    /* @__PURE__ */ c.jsx("div", { ref: p })
  ] });
}, an = Un(({ onSelect: e, multiple: t = !0, accept: n, maxFileSize: s, className: r = "" }, o) => {
  const a = ie(null);
  Dn(o, () => ({
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
an.displayName = "FileUpload";
const Ce = ({ open: e, onClose: t, header: n, children: s, width: r = "600px", className: o = "" }) => (re(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
  document.body.style.overflow = "unset";
}), [e]), e ? /* @__PURE__ */ c.jsx("div", { className: `raw-modal-overlay ${o}`, onClick: t, children: /* @__PURE__ */ c.jsxs("div", { className: "raw-modal-container", style: { maxWidth: r }, onClick: (a) => a.stopPropagation(), children: [
  /* @__PURE__ */ c.jsxs("div", { className: "raw-modal-header", children: [
    /* @__PURE__ */ c.jsx("div", { className: "raw-modal-title", children: n }),
    /* @__PURE__ */ c.jsx("button", { className: "raw-modal-close", onClick: t, children: /* @__PURE__ */ c.jsx(ft, { size: 20 }) })
  ] }),
  /* @__PURE__ */ c.jsx("div", { className: "raw-modal-body", children: s })
] }) }) : null), hs = ({
  selectedTemplateName: e,
  templateText: t,
  template: n,
  onClearTemplate: s
}) => {
  var x;
  const [r, o] = Y(!1), a = () => {
    s(), o(!1);
  }, i = e.split("-")[0], m = (n == null ? void 0 : n.template) ?? t ?? "", p = (n == null ? void 0 : n.header) ?? null, u = (n == null ? void 0 : n.footer) ?? null, d = ((x = n == null ? void 0 : n.links) == null ? void 0 : x.map((l) => ({
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
      Ce,
      {
        open: r,
        onClose: () => o(!1),
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Template Preview" }),
        children: /* @__PURE__ */ c.jsx("div", { style: { padding: "20px 0" }, children: n ? /* @__PURE__ */ c.jsx(
          on,
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
] }), Nt = () => /* @__PURE__ */ c.jsx("div", { className: "whatsapp-spinner" }), cn = ({
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
  initialInputText: w = "",
  isPreviewOpen: x,
  setIsPreviewOpen: l,
  style: h,
  className: y
}) => {
  const [_, O] = Y(w), v = ie(null), j = ie(null), N = !!a;
  Oe.useEffect(() => {
    var P;
    N && ((P = v.current) == null || P.focus());
  }, [N]), Oe.useEffect(() => {
    o !== void 0 && o !== "" ? O(o) : a || O(w ?? "");
  }, [o, a, w]);
  const F = () => {
    var W;
    const P = p.map((L) => L.fileUrl).filter(Boolean).map((L) => ({ file: L })), D = (W = p[0]) == null ? void 0 : W.contentType;
    (_.trim() || P.length > 0 || N) && (e(_, P, D), N || O(""));
  }, C = () => {
    var P;
    (P = j.current) == null || P.click();
  }, J = (P) => {
    P != null && P.length && d && d(P);
  }, z = (P) => {
    P.key === "Enter" && !t && F();
  }, X = (P) => {
    const D = P.target.value;
    O(D), !D.trim() && a && m && m();
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: v,
      className: `whatsapp-input-container ${y || ""}`,
      onKeyDown: z,
      tabIndex: N ? 0 : void 0,
      style: { outline: "none", ...h },
      children: [
        /* @__PURE__ */ c.jsx(an, { ref: j, onSelect: J, multiple: !0, accept: "image/*,video/*,audio/*,.pdf,.doc,.docx" }),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: C,
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
            children: n ? /* @__PURE__ */ c.jsx(Nt, {}) : /* @__PURE__ */ c.jsx(ns, { size: 20, color: "#175353" })
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
            children: /* @__PURE__ */ c.jsx(Gt, { size: 20, color: "#175353" })
          }
        ),
        a && m && /* @__PURE__ */ c.jsx(
          hs,
          {
            selectedTemplateName: a,
            templateText: o,
            template: i,
            onClearTemplate: () => {
              m(), O("");
            }
          }
        ),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            value: _,
            onChange: X,
            placeholder: "Type a message...",
            className: "whatsapp-input-field",
            disabled: t || N
          }
        ),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: F,
            className: "whatsapp-send-btn",
            disabled: t || !N && !_.trim() && p.length === 0,
            title: s ? "Sending..." : "Send",
            children: s ? /* @__PURE__ */ c.jsx(Nt, {}) : /* @__PURE__ */ c.jsx(ss, { size: 20, color: "white" })
          }
        ),
        p.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "whatsapp-input-attachments-row", children: p.map((P, D) => /* @__PURE__ */ c.jsx(
          gs,
          {
            attachedFile: P,
            onFileRemove: u ? () => u(D) : void 0
          },
          `${P.file.name}-${D}`
        )) })
      ]
    }
  );
}, ys = () => /* @__PURE__ */ c.jsx("div", { className: "whatsapp-templates-grid", children: Array.from({ length: 4 }).map((e, t) => /* @__PURE__ */ c.jsxs(
  "div",
  {
    className: "whatsapp-template-skeleton-item",
    children: [
      /* @__PURE__ */ c.jsx(G, { width: "40%", height: "12px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-item-divider" }),
      /* @__PURE__ */ c.jsx(G, { width: "100%", height: "14px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx(G, { width: "90%", height: "14px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx(G, { width: "60%", height: "14px" })
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
const ln = ({ templates: e, onSelect: t, isLoading: n = !1 }) => {
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
function un(e) {
  const t = e.toLowerCase();
  return /\.(png|jpe?g|gif|webp|bmp|svg)$/.test(t) ? "image" : /\.(mp4|webm|mov|mkv)$/.test(t) ? "video" : /\.(mp3|wav|ogg|m4a)$/.test(t) ? "audio" : "document";
}
function xs(e, t) {
  if (un(e) !== "image") return;
  const n = e.trim();
  if (n.startsWith("http://") || n.startsWith("https://")) return n;
  const s = (t || "").replace(/\/$/, ""), r = n.startsWith("/") ? n : `/${n}`;
  return s ? `${s}${r}` : n;
}
function _s(e, t) {
  const n = e.file.trim(), s = n.split("/").filter(Boolean).pop() || "attachment", r = un(n);
  return {
    file: new File([], s, {
      type: r === "image" ? "image/png" : r === "video" ? "video/mp4" : "application/octet-stream"
    }),
    fileUrl: n,
    contentType: r,
    preview: xs(n, t)
  };
}
function dn() {
  const { config: e, apiAdapter: t, socketAdapter: n, socketPayload: s } = Ne(), r = rn(), o = ue((R) => R.messages), a = ue((R) => R.isLoading), i = ue((R) => R.error), m = ue((R) => R.setMessages), p = ue((R) => R.appendMessage), u = ue((R) => R.replaceMessage), d = ue((R) => R.updateMessageStatus), w = ue((R) => R.setLoading), x = ue((R) => R.setError), [l, h] = Y(!1), y = (n == null ? void 0 : n.isConnected) ?? !1, [_, O] = Y(!1), [v, j] = Y(), [N, F] = Y(), [C, J] = Y(), [z, X] = Y([]), [P, D] = Y(!1), [W, L] = Y([]), [ee, M] = Y(!1), [oe, te] = Y(0), de = ie(null), le = me(() => {
    var ae;
    const R = e.doctype || "", b = e.refName || "", S = e.activeLeadDoctype || "", H = e.activeLeadName || "";
    let k = R, K = b, q = e.links || [];
    if (H)
      k = S, K = H, q = R ? [{ link_doctype: R, link_name: b }] : [];
    else {
      const pe = (ae = e.links) == null ? void 0 : ae.find((Ue) => {
        var we;
        return (we = Ue.link_doctype) == null ? void 0 : we.includes("Lead");
      });
      pe && (k = pe.link_doctype, K = pe.link_name, q = R ? [{ link_doctype: R, link_name: b }] : []);
    }
    const I = H ? [{ reference_doctype: S, reference_name: H }] : [{ reference_doctype: R, reference_name: b }, ...(e.links || []).map((pe) => ({ reference_doctype: pe.link_doctype, reference_name: pe.link_name }))];
    return {
      primaryDoctype: k,
      primaryName: K,
      secondaryLinks: q,
      templateRefs: I,
      baseDoctype: R,
      baseName: b,
      activeLeadDoctype: S,
      activeLeadName: H
    };
  }, [e]), g = ie(t.getMessages);
  re(() => {
    g.current = t.getMessages;
  }, [t.getMessages]), re(() => {
    var S;
    const R = e.isChatOpen, b = de.current;
    de.current = R, R && (b === !1 && te((H) => H + 1), (b === !1 || b === null) && ((S = e.attach) != null && S.length ? L(e.attach.map((H) => _s(H, e.apiBaseUrl))) : L([])));
  }, [e.isChatOpen, e.attach, e.apiBaseUrl]), re(() => {
    if (!e.isChatOpen || e.preventHistoryFetch) return;
    (async () => {
      var b;
      w(!0), x(null);
      try {
        const S = await ((b = g.current) == null ? void 0 : b.call(g, e.doctype || "", e.refName || ""));
        S && m([...S].reverse());
      } catch (S) {
        x(S instanceof Error ? S.message : "Failed to fetch");
      } finally {
        w(!1);
      }
    })();
  }, [e.isChatOpen, e.doctype, e.refName, w, x, m]), re(() => {
    if (!_ || z.length > 0) return;
    (async () => {
      var b;
      D(!0);
      try {
        const S = await ((b = t.getTemplates) == null ? void 0 : b.call(t, le.templateRefs));
        S && X(S);
      } catch (S) {
        console.error("Template fetch failed", S);
      } finally {
        D(!1);
      }
    })();
  }, [_, t, le.templateRefs, z.length]);
  const E = ie(!1), A = ie(/* @__PURE__ */ new Set()), U = ie(null), ne = ie(null);
  re(() => {
    if (!e.isChatOpen) {
      E.current = !1, A.current.clear();
      return;
    }
    if (E.current || !o.length || !t.sendReadReceipt)
      return;
    const R = o.findLast((b) => b.is_outbound === 0 && (b.status === null || b.status === void 0));
    R != null && R.name && !A.current.has(R.name) ? (t.sendReadReceipt(R.name), A.current.add(R.name), E.current = !0) : o.length > 0 && (E.current = !0);
  }, [e.isChatOpen, o, t]);
  const Re = ve((R) => {
    L((b) => {
      const S = b[R];
      return S != null && S.preview && URL.revokeObjectURL(S.preview), b.filter((H, k) => k !== R);
    });
  }, []), $ = ve(() => {
    L((R) => (R.forEach((b) => {
      b.preview && URL.revokeObjectURL(b.preview);
    }), []));
  }, []), fe = ve(
    async (R, b, S) => {
      var xt, _t, Rt, St;
      const {
        primaryDoctype: H,
        primaryName: k,
        secondaryLinks: K,
        baseDoctype: q,
        baseName: I,
        activeLeadDoctype: ae,
        activeLeadName: pe
      } = le, Ue = {
        to: e.phone
      };
      if (N) {
        const be = ((C == null ? void 0 : C.for_doctype) ?? "").trim();
        let tt = H, nt = k, st = K;
        be.includes("Lead") ? (tt = ae || be, nt = pe || k, st = q ? [{ link_doctype: q, link_name: I }] : []) : (tt = q || H, nt = I || k, st = e.links || []);
        const Le = `temp-${Date.now()}`;
        ne.current = Le;
        const Fn = {
          name: Le,
          message: v ?? (C == null ? void 0 : C.template) ?? "",
          sender: "You",
          creation: (/* @__PURE__ */ new Date()).toISOString(),
          is_outbound: 1,
          status: 5,
          message_type: "Template",
          header: C == null ? void 0 : C.header,
          footer: C == null ? void 0 : C.footer
        };
        p(Fn), h(!0);
        try {
          await t.sendTemplate({
            ...Ue,
            reference_doctype: tt,
            reference_name: nt,
            template: N,
            links: st
          }), d(Le, 1), (xt = t.showNotification) == null || xt.call(t, "WhatsApp", "Template sent successfully"), F(void 0), j(void 0), J(void 0), $(), t.onMessageSent && t.onMessageSent();
        } catch (Mn) {
          console.error(Mn), d(Le, 2), (_t = t.showError) == null || _t.call(t, "WhatsApp", "Failed to send template message");
        } finally {
          h(!1);
        }
        return;
      }
      const we = (R || "").trim();
      if (!we && (!b || b.length === 0)) return;
      const De = `temp-${Date.now()}`;
      U.current = De;
      const et = (b == null ? void 0 : b.map((be) => be.file).filter(Boolean)) || [], bt = et[0];
      p({
        name: De,
        message: we,
        sender: "You",
        creation: (/* @__PURE__ */ new Date()).toISOString(),
        is_outbound: 1,
        attach: et.length ? et : void 0,
        content_type: bt ? S || "document" : void 0,
        status: 5
      }), h(!0);
      try {
        await t.sendMessage({
          ...Ue,
          reference_doctype: H,
          reference_name: k,
          message: we,
          attach: b && b.length ? b : "",
          content_type: bt ? S : void 0,
          links: K
        }), d(De, 1), (Rt = t.showNotification) == null || Rt.call(t, "WhatsApp", "Message sent successfully"), $(), t.onMessageSent && t.onMessageSent();
      } catch (be) {
        console.error(be), d(De, 2), (St = t.showError) == null || St.call(t, "WhatsApp", "Failed to send message");
      } finally {
        h(!1);
      }
    },
    [N, t, e.phone, e.links, C, v, p, d, le, $]
  ), Se = (R, b, S) => {
    j(R), F(b), J(S), O(!1);
  }, Qe = ve(async (R) => {
    var b;
    if (!(!t.uploadFiles && !t.uploadFile || !R.length)) {
      M(!0);
      try {
        let S = [];
        t.uploadFiles ? S = (await t.uploadFiles(R)).file_urls || [] : S = (await Promise.all(R.map((K) => t.uploadFile(K)))).map((K) => K.file_url).filter(Boolean);
        const H = R.map((k, K) => ({
          file: k,
          fileUrl: S[K] || "",
          contentType: bs(k),
          preview: k.type.startsWith("image/") ? URL.createObjectURL(k) : void 0
        })).filter((k) => !!k.fileUrl);
        L((k) => [...k, ...H]);
      } catch (S) {
        console.error(S), (b = t.showError) == null || b.call(t, "WhatsApp", "Failed to upload file");
      } finally {
        M(!1);
      }
    }
  }, [t]);
  return re(() => {
    const R = (b) => {
      var K;
      if (!b || !b.name) return;
      const S = r.getState().messages, H = b.status !== null && b.status !== void 0;
      let k = -1;
      if (b.is_outbound === 0 && H) {
        S.some((I) => I.name === b.name) && typeof b.status == "number" && d(b.name, b.status);
        return;
      }
      if (e.isChatOpen && b.is_outbound === 0 && b.name && e.phone === b.from && !(b.status === 4) && !A.current.has(b.name) && ((K = t.sendReadReceipt) == null || K.call(t, b.name), A.current.add(b.name)), b.is_outbound === 1)
        if (b.message_type === "Template") {
          const q = ne.current;
          if (q && (k = S.findIndex((I) => I.name === q)), k === -1)
            for (let I = S.length - 1; I >= 0; I--) {
              const ae = S[I];
              if (ae.name.startsWith("temp-") && ae.message_type === "Template") {
                k = I;
                break;
              }
            }
        } else {
          const q = U.current;
          if (q && (k = S.findIndex((I) => I.name === q)), k === -1 && (b.message && (k = S.findIndex((I) => I.name.startsWith("temp-") && I.is_outbound === 1 && I.message === b.message)), k === -1))
            for (let I = S.length - 1; I >= 0; I--) {
              const ae = S[I];
              if (ae.name.startsWith("temp-") && ae.is_outbound === 1 && ae.message_type !== "Template") {
                k = I;
                break;
              }
            }
        }
      if (k !== -1) {
        const q = S[k];
        u(q.name, b), q.name === U.current && (U.current = null), q.name === ne.current && (ne.current = null);
      } else
        S.some((I) => I.name === b.name) ? typeof b.status == "number" && d(b.name, b.status) : p(b);
    };
    if (n != null && n.onMessage) {
      const b = (S) => R(S);
      return n.onMessage(b), () => {
        var S;
        return (S = n.offMessage) == null ? void 0 : S.call(n, b);
      };
    }
    if (s && s.event === "whatsapp_message") {
      const b = s.message, S = pt(b);
      R(S);
    }
  }, [n, s, e.phone, e.isChatOpen, t, r, u, p, d]), {
    displayMessages: o,
    isLoading: a,
    messagesError: i,
    isConnected: y,
    isSending: l,
    isTemplateModalOpen: _,
    setIsTemplateModalOpen: O,
    selectedTemplateText: v,
    selectedTemplateName: N,
    selectedTemplate: C,
    setSelectedTemplateText: j,
    setSelectedTemplateName: F,
    setSelectedTemplate: J,
    attachedFiles: W,
    templates: z,
    isLoadingTemplates: P,
    sendMessage: fe,
    handleTemplateSelect: Se,
    handleFileSelect: Qe,
    handleFileRemove: Re,
    uploadFileMutation: { isPending: ee },
    composerMountKey: oe
  };
}
function fn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Rs } = Object.prototype, { getPrototypeOf: mt } = Object, { iterator: Ve, toStringTag: pn } = Symbol, Ke = /* @__PURE__ */ ((e) => (t) => {
  const n = Rs.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ce = (e) => (e = e.toLowerCase(), (t) => Ke(t) === e), Ye = (e) => (t) => typeof t === e, { isArray: _e } = Array, xe = Ye("undefined");
function Ae(e) {
  return e !== null && !xe(e) && e.constructor !== null && !xe(e.constructor) && Z(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const mn = ce("ArrayBuffer");
function Ss(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && mn(e.buffer), t;
}
const Es = Ye("string"), Z = Ye("function"), hn = Ye("number"), ke = (e) => e !== null && typeof e == "object", Ts = (e) => e === !0 || e === !1, qe = (e) => {
  if (Ke(e) !== "object")
    return !1;
  const t = mt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(pn in e) && !(Ve in e);
}, js = (e) => {
  if (!ke(e) || Ae(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, vs = ce("Date"), Os = ce("File"), Ns = (e) => !!(e && typeof e.uri < "u"), Cs = (e) => e && typeof e.getParts < "u", As = ce("Blob"), ks = ce("FileList"), Ps = (e) => ke(e) && Z(e.pipe);
function Fs() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Ct = Fs(), At = typeof Ct.FormData < "u" ? Ct.FormData : void 0, Ms = (e) => {
  let t;
  return e && (At && e instanceof At || Z(e.append) && ((t = Ke(e)) === "formdata" || // detect form-data instance
  t === "object" && Z(e.toString) && e.toString() === "[object FormData]"));
}, Us = ce("URLSearchParams"), [Ds, Ls, Is, $s] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(ce), Bs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function gn(e, t) {
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
const he = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, yn = (e) => !xe(e) && e !== he;
function ct() {
  const { caseless: e, skipUndefined: t } = yn(this) && this || {}, n = {}, s = (r, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const a = e && gn(n, o) || o;
    qe(n[a]) && qe(r) ? n[a] = ct(n[a], r) : qe(r) ? n[a] = ct({}, r) : _e(r) ? n[a] = r.slice() : (!t || !xe(r)) && (n[a] = r);
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Pe(arguments[r], s);
  return n;
}
const Ws = (e, t, n, { allOwnKeys: s } = {}) => (Pe(
  t,
  (r, o) => {
    n && Z(r) ? Object.defineProperty(e, o, {
      value: fn(r, n),
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
  if (!hn(t)) return null;
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
}, Gs = ce("HTMLFormElement"), Zs = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, s, r) {
  return s.toUpperCase() + r;
}), kt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Qs = ce("RegExp"), wn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  Pe(n, (r, o) => {
    let a;
    (a = t(r, o, e)) !== !1 && (s[o] = a || r);
  }), Object.defineProperties(e, s);
}, er = (e) => {
  wn(e, (t, n) => {
    if (Z(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if (Z(s)) {
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
  return !!(e && Z(e.append) && e[pn] === "FormData" && e[Ve]);
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
}, ar = ce("AsyncFunction"), ir = (e) => e && (ke(e) || Z(e)) && Z(e.then) && Z(e.catch), bn = ((e, t) => e ? setImmediate : t ? ((n, s) => (he.addEventListener(
  "message",
  ({ source: r, data: o }) => {
    r === he && o === n && s.length && s.shift()();
  },
  !1
), (r) => {
  s.push(r), he.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Z(he.postMessage)), cr = typeof queueMicrotask < "u" ? queueMicrotask.bind(he) : typeof process < "u" && process.nextTick || bn, lr = (e) => e != null && Z(e[Ve]), f = {
  isArray: _e,
  isArrayBuffer: mn,
  isBuffer: Ae,
  isFormData: Ms,
  isArrayBufferView: Ss,
  isString: Es,
  isNumber: hn,
  isBoolean: Ts,
  isObject: ke,
  isPlainObject: qe,
  isEmptyObject: js,
  isReadableStream: Ds,
  isRequest: Ls,
  isResponse: Is,
  isHeaders: $s,
  isUndefined: xe,
  isDate: vs,
  isFile: Os,
  isReactNativeBlob: Ns,
  isReactNative: Cs,
  isBlob: As,
  isRegExp: Qs,
  isFunction: Z,
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
  kindOfTest: ce,
  endsWith: Js,
  toArray: Vs,
  forEachEntry: Ys,
  matchAll: Xs,
  isHTMLForm: Gs,
  hasOwnProperty: kt,
  hasOwnProp: kt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wn,
  freezeMethods: er,
  toObjectSet: tr,
  toCamelCase: Zs,
  noop: nr,
  toFiniteNumber: sr,
  findKey: gn,
  global: he,
  isContextDefined: yn,
  isSpecCompliantForm: rr,
  toJSONObject: or,
  isAsyncFn: ar,
  isThenable: ir,
  setImmediate: bn,
  asap: cr,
  isIterable: lr
};
let T = class xn extends Error {
  static from(t, n, s, r, o, a) {
    const i = new xn(t.message, n || t.code, s, r, o);
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
T.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
T.ERR_BAD_OPTION = "ERR_BAD_OPTION";
T.ECONNABORTED = "ECONNABORTED";
T.ETIMEDOUT = "ETIMEDOUT";
T.ERR_NETWORK = "ERR_NETWORK";
T.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
T.ERR_DEPRECATED = "ERR_DEPRECATED";
T.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
T.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
T.ERR_CANCELED = "ERR_CANCELED";
T.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
T.ERR_INVALID_URL = "ERR_INVALID_URL";
const ur = null;
function lt(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function _n(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function rt(e, t, n) {
  return e ? e.concat(t).map(function(r, o) {
    return r = _n(r), !n && o ? "[" + r + "]" : r;
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
      throw new T("Blob is not supported. Use a Buffer instead.");
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
        return h = _n(h), _.forEach(function(v, j) {
          !(f.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? rt([h], j, o) : a === null ? h : h + "[]",
            p(v)
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
  function x(l, h) {
    if (!f.isUndefined(l)) {
      if (d.indexOf(l) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(l), f.forEach(l, function(_, O) {
        (!(f.isUndefined(_) || _ === null) && r.call(t, _, f.isString(O) ? O.trim() : O, h, w)) === !0 && x(_, h ? h.concat(O) : [O]);
      }), d.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return x(e), t;
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
const Rn = ht.prototype;
Rn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Rn.toString = function(t) {
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
function Sn(e, t, n) {
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
function En(e) {
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
        return r ? JSON.stringify(En(t)) : t;
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
            throw i.name === "SyntaxError" ? T.from(i, T.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
]), vr = (e) => {
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
function Or(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const Nr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function Cr(e) {
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
let Q = class {
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
    else if (f.isString(t) && (t = t.trim()) && !Nr(t))
      a(vr(t), n);
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
          return Or(r);
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
      const i = t ? Cr(o) : String(o).trim();
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
Q.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
f.reduceDescriptors(Q.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
f.freezeMethods(Q);
function at(e, t) {
  const n = this || Fe, s = t || n, r = Q.from(s.headers);
  let o = s.data;
  return f.forEach(e, function(i) {
    o = i.call(n, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function Tn(e) {
  return !!(e && e.__CANCEL__);
}
let Me = class extends T {
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
    super(t ?? "canceled", T.ERR_CANCELED, n, s), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function jn(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(
    new T(
      "Request failed with status code " + n.status,
      [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
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
    const x = u && p - u;
    return x ? Math.round(w * 1e3 / x) : void 0;
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
function vn(e, t, n) {
  let s = !Dr(t);
  return e && (s || n == !1) ? Lr(e, t) : t;
}
const Lt = (e) => e instanceof Q ? { ...e } : e;
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
  if (t.headers = a = Q.from(a), t.url = Sn(
    vn(t.baseURL, t.url, t.allowAbsoluteUrls),
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
    const a = Q.from(r.headers).normalize();
    let { responseType: i, onUploadProgress: m, onDownloadProgress: p } = r, u, d, w, x, l;
    function h() {
      x && x(), l && l(), r.cancelToken && r.cancelToken.unsubscribe(u), r.signal && r.signal.removeEventListener("abort", u);
    }
    let y = new XMLHttpRequest();
    y.open(r.method.toUpperCase(), r.url, !0), y.timeout = r.timeout;
    function _() {
      if (!y)
        return;
      const v = Q.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), N = {
        data: !i || i === "text" || i === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: v,
        config: e,
        request: y
      };
      jn(
        function(C) {
          n(C), h();
        },
        function(C) {
          s(C), h();
        },
        N
      ), y = null;
    }
    "onloadend" in y ? y.onloadend = _ : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, y.onabort = function() {
      y && (s(new T("Request aborted", T.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function(j) {
      const N = j && j.message ? j.message : "Network Error", F = new T(N, T.ERR_NETWORK, e, y);
      F.event = j || null, s(F), y = null;
    }, y.ontimeout = function() {
      let j = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const N = r.transitional || gt;
      r.timeoutErrorMessage && (j = r.timeoutErrorMessage), s(
        new T(
          j,
          N.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
          e,
          y
        )
      ), y = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in y && f.forEach(a.toJSON(), function(j, N) {
      y.setRequestHeader(N, j);
    }), f.isUndefined(r.withCredentials) || (y.withCredentials = !!r.withCredentials), i && i !== "json" && (y.responseType = r.responseType), p && ([w, l] = Je(p, !0), y.addEventListener("progress", w)), m && y.upload && ([d, x] = Je(m), y.upload.addEventListener("progress", d), y.upload.addEventListener("loadend", x)), (r.cancelToken || r.signal) && (u = (v) => {
      y && (s(!v || v.type ? new Me(null, e, y) : v), y.abort(), y = null);
    }, r.cancelToken && r.cancelToken.subscribe(u), r.signal && (r.signal.aborted ? u() : r.signal.addEventListener("abort", u)));
    const O = kr(r.url);
    if (O && V.protocols.indexOf(O) === -1) {
      s(
        new T(
          "Unsupported protocol " + O + ":",
          T.ERR_BAD_REQUEST,
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
          u instanceof T ? u : new Me(u instanceof Error ? u.message : u)
        );
      }
    };
    let a = t && setTimeout(() => {
      a = null, o(new T(`timeout of ${t}ms exceeded`, T.ETIMEDOUT));
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
      throw new T(
        `Response type '${l}' is not supported`,
        T.ERR_NOT_SUPPORT,
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
  }, x = async (l, h) => {
    const y = f.toFiniteNumber(l.getContentLength());
    return y ?? w(h);
  };
  return async (l) => {
    let {
      url: h,
      method: y,
      data: _,
      signal: O,
      cancelToken: v,
      timeout: j,
      onDownloadProgress: N,
      onUploadProgress: F,
      responseType: C,
      headers: J,
      withCredentials: z = "same-origin",
      fetchOptions: X
    } = On(l), P = t || fetch;
    C = C ? (C + "").toLowerCase() : "text";
    let D = Br(
      [O, v && v.toAbortSignal()],
      j
    ), W = null;
    const L = D && D.unsubscribe && (() => {
      D.unsubscribe();
    });
    let ee;
    try {
      if (F && p && y !== "get" && y !== "head" && (ee = await x(J, _)) !== 0) {
        let g = new n(h, {
          method: "POST",
          body: _,
          duplex: "half"
        }), E;
        if (f.isFormData(_) && (E = g.headers.get("content-type")) && J.setContentType(E), g.body) {
          const [A, U] = Ut(
            ee,
            Je(Dt(F))
          );
          _ = It(g.body, $t, A, U);
        }
      }
      f.isString(z) || (z = z ? "include" : "omit");
      const M = o && "credentials" in n.prototype, oe = {
        ...X,
        signal: D,
        method: y.toUpperCase(),
        headers: J.normalize().toJSON(),
        body: _,
        duplex: "half",
        credentials: M ? z : void 0
      };
      W = o && new n(h, oe);
      let te = await (o ? P(W, X) : P(h, oe));
      const de = u && (C === "stream" || C === "response");
      if (u && (N || de && L)) {
        const g = {};
        ["status", "statusText", "headers"].forEach((ne) => {
          g[ne] = te[ne];
        });
        const E = f.toFiniteNumber(te.headers.get("content-length")), [A, U] = N && Ut(
          E,
          Je(Dt(N), !0)
        ) || [];
        te = new s(
          It(te.body, $t, A, () => {
            U && U(), L && L();
          }),
          g
        );
      }
      C = C || "text";
      let le = await d[f.findKey(d, C) || "text"](
        te,
        l
      );
      return !de && L && L(), await new Promise((g, E) => {
        jn(g, E, {
          data: le,
          headers: Q.from(te.headers),
          status: te.status,
          statusText: te.statusText,
          config: l,
          request: W
        });
      });
    } catch (M) {
      throw L && L(), M && M.name === "TypeError" && /Load failed|fetch/i.test(M.message) ? Object.assign(
        new T(
          "Network Error",
          T.ERR_NETWORK,
          l,
          W,
          M && M.response
        ),
        {
          cause: M.cause || M
        }
      ) : T.from(M, M && M.code, l, W, M && M.response);
    }
  };
}, Vr = /* @__PURE__ */ new Map(), Nn = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: s, Response: r } = t, o = [s, r, n];
  let a = o.length, i = a, m, p, u = Vr;
  for (; i--; )
    m = o[i], p = u.get(m), p === void 0 && u.set(m, p = i ? /* @__PURE__ */ new Map() : Jr(t)), u = p;
  return p;
};
Nn();
const wt = {
  http: ur,
  xhr: $r,
  fetch: {
    get: Nn
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
      throw new T(`Unknown adapter '${i}'`);
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
    throw new T(
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
  return it(e), e.headers = Q.from(e.headers), e.data = at.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Cn.getAdapter(e.adapter || Fe.adapter, e)(e).then(
    function(s) {
      return it(e), s.data = at.call(e, e.transformResponse, s), s.headers = Q.from(s.headers), s;
    },
    function(s) {
      return Tn(s) || (it(e), s && s.response && (s.response.data = at.call(
        e,
        e.transformResponse,
        s.response
      ), s.response.headers = Q.from(s.response.headers))), Promise.reject(s);
    }
  );
}
const An = "1.13.6", Ge = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ge[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Jt = {};
Ge.transitional = function(t, n, s) {
  function r(o, a) {
    return "[Axios v" + An + "] Transitional option '" + o + "'" + a + (s ? ". " + s : "");
  }
  return (o, a, i) => {
    if (t === !1)
      throw new T(
        r(a, " has been removed" + (n ? " in " + n : "")),
        T.ERR_DEPRECATED
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
    throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const o = s[r], a = t[o];
    if (a) {
      const i = e[o], m = i === void 0 || a(i, o, e);
      if (m !== !0)
        throw new T(
          "option " + o + " must be " + m,
          T.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new T("Unknown option " + o, T.ERR_BAD_OPTION);
  }
}
const He = {
  assertOptions: Xr,
  validators: Ge
}, se = He.validators;
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
        silentJSONParsing: se.transitional(se.boolean),
        forcedJSONParsing: se.transitional(se.boolean),
        clarifyTimeoutError: se.transitional(se.boolean),
        legacyInterceptorReqResOrdering: se.transitional(se.boolean)
      },
      !1
    ), r != null && (f.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : He.assertOptions(
      r,
      {
        encode: se.function,
        serialize: se.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), He.assertOptions(
      n,
      {
        baseUrl: se.spelling("baseURL"),
        withXsrfToken: se.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && f.merge(o.common, o[n.method]);
    o && f.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (l) => {
      delete o[l];
    }), n.headers = Q.concat(a, o);
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
    let x = n;
    for (; d < w; ) {
      const l = i[d++], h = i[d++];
      try {
        x = l(x);
      } catch (y) {
        h.call(this, y);
        break;
      }
    }
    try {
      u = Ht.call(this, x);
    } catch (l) {
      return Promise.reject(l);
    }
    for (d = 0, w = p.length; d < w; )
      u = u.then(p[d++], p[d++]);
    return u;
  }
  getUri(t) {
    t = ye(this.defaults, t);
    const n = vn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Sn(n, t.params, t.paramsSerializer);
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
let Gr = class kn {
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
      token: new kn(function(r) {
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
function Pn(e) {
  const t = new ge(e), n = fn(ge.prototype.request, t);
  return f.extend(n, ge.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return Pn(ye(e, r));
  }, n;
}
const B = Pn(Fe);
B.Axios = ge;
B.CanceledError = Me;
B.CancelToken = Gr;
B.isCancel = Tn;
B.VERSION = An;
B.toFormData = Xe;
B.AxiosError = T;
B.Cancel = B.CanceledError;
B.all = function(t) {
  return Promise.all(t);
};
B.spread = Zr;
B.isAxiosError = Qr;
B.mergeConfig = ye;
B.AxiosHeaders = Q;
B.formToJSON = (e) => En(f.isHTMLForm(e) ? new FormData(e) : e);
B.getAdapter = Cn.getAdapter;
B.HttpStatusCode = dt;
B.default = B;
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
  spread: vo,
  toFormData: Oo,
  AxiosHeaders: No,
  HttpStatusCode: Co,
  formToJSON: Ao,
  getAdapter: ko,
  mergeConfig: Po
} = B, eo = (e, t) => {
  const n = B.create({
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
    isChatOpen: x,
    attach: l,
    preAddedMessages: h,
    showNotification: y,
    showWarning: _,
    showError: O
  } = e, v = to(r, o, i), j = t || v, N = me(
    () => no(j, { showNotification: y, showWarning: _, showError: O }),
    [j, y, _, O]
  ), F = me(() => n ? {
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
    isChatOpen: x,
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
    x,
    r,
    l,
    h
  ]), C = me(() => {
    if (a !== void 0)
      return { isConnected: a };
  }, [a]);
  return {
    apiAdapter: N,
    config: F,
    finalSocketAdapter: s || C
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
    attachedFiles: x,
    templates: l,
    isLoadingTemplates: h,
    sendMessage: y,
    handleTemplateSelect: _,
    handleFileSelect: O,
    handleFileRemove: v,
    uploadFileMutation: j,
    composerMountKey: N
  } = dn(), { config: F } = Ne();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-chat-container", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header", children: [
        /* @__PURE__ */ c.jsx("div", { className: "whatsapp-header-avatar", children: /* @__PURE__ */ c.jsx(Xt, { size: 20, color: "#008069" }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header-info", children: [
          /* @__PURE__ */ c.jsx("h4", { children: F.currentUserFullName || "WhatsApp Chat" }),
          /* @__PURE__ */ c.jsx("span", { className: s ? "connection-status connected" : "connection-status reconnecting", children: s ? "● Connected" : "○ Reconnecting..." })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(ms, { messages: e, isLoading: t, error: n }),
      /* @__PURE__ */ c.jsx(
        cn,
        {
          initialInputText: F.preAddedMessages ?? "",
          onSend: y,
          isLoading: t || r || j.isPending,
          isUploading: j.isPending,
          isSending: r,
          onTemplateClick: () => a(!0),
          templateText: i,
          selectedTemplateName: m,
          selectedTemplate: p,
          onClearTemplate: () => {
            d(void 0), u(void 0), w(void 0);
          },
          attachedFiles: x,
          onFileSelect: O,
          onFileRemove: v
        },
        N
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      Ce,
      {
        open: o,
        onClose: () => a(!1),
        width: "700px",
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Select WhatsApp Template" }),
        children: /* @__PURE__ */ c.jsx(ln, { templates: l, onSelect: _, isLoading: h })
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
  attach: x,
  preAddedMessages: l,
  showNotification: h,
  showWarning: y,
  showError: _
}) => {
  const { apiAdapter: O, config: v, finalSocketAdapter: j } = Ze({
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
    attach: x,
    preAddedMessages: l,
    showNotification: h,
    showWarning: y,
    showError: _
  });
  return !O || !v ? null : /* @__PURE__ */ c.jsx(sn, { apiAdapter: O, config: v, socketAdapter: j, socketPayload: s, children: /* @__PURE__ */ c.jsx(so, {}) });
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
    isLoadingTemplates: x,
    sendMessage: l,
    handleTemplateSelect: h,
    handleFileSelect: y,
    handleFileRemove: _,
    uploadFileMutation: O,
    composerMountKey: v
  } = dn(), { config: j } = Ne();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-chat-container whatsapp-send-msg-only", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header", style: { borderRadius: "6px 6px 0 0", boxShadow: "none", borderBottom: "1px solid #DCE2E5" }, children: [
        /* @__PURE__ */ c.jsx("div", { className: "whatsapp-header-avatar", children: /* @__PURE__ */ c.jsx(Xt, { size: 20, color: "#008069" }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header-info", children: [
          /* @__PURE__ */ c.jsx("h4", { children: j.currentUserFullName || "Send WhatsApp Message" }),
          /* @__PURE__ */ c.jsx("span", { className: t ? "connection-status connected" : "connection-status reconnecting", children: t ? "● Connected" : "○ Reconnecting..." })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(
        cn,
        {
          initialInputText: j.preAddedMessages ?? "",
          onSend: l,
          isLoading: e || n || O.isPending,
          isUploading: O.isPending,
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
          onFileRemove: _,
          style: { borderRadius: "0 0 6px 6px" }
        },
        v
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      Ce,
      {
        open: s,
        onClose: () => r(!1),
        width: "700px",
        header: /* @__PURE__ */ c.jsx("h4", { className: "whatsapp-modal-header-title", children: "Select WhatsApp Template" }),
        children: /* @__PURE__ */ c.jsx(ln, { templates: w, onSelect: h, isLoading: x })
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
  attach: x,
  preAddedMessages: l,
  showNotification: h,
  showWarning: y,
  showError: _
}) => {
  const { apiAdapter: O, config: v, finalSocketAdapter: j } = Ze({
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
    attach: x,
    preAddedMessages: l,
    showNotification: h,
    showWarning: y,
    showError: _
  });
  return !O || !v ? null : /* @__PURE__ */ c.jsx(
    sn,
    {
      apiAdapter: O,
      config: { ...v, isChatOpen: !0, preventHistoryFetch: !0 },
      socketAdapter: j,
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
  const i = $e((l) => l.incomingData), m = $e((l) => l.setIncomingData), p = $e((l) => l.handleIncomingMessage), u = $e((l) => l.clearContact), d = ie(null), w = me(() => {
    if (!s && !r)
      return i.filter((h) => h.type === "whatsapp").reduce((h, y) => h + (y.counts || 0), 0);
    const l = i.find(
      (h) => h.type === "whatsapp" && (s && h.from === s || r && h.customer === r)
    );
    return (l == null ? void 0 : l.counts) ?? 0;
  }, [i, s, r]), x = ve(async () => {
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
  return re(() => {
    x();
  }, [x]), re(() => {
    o && u(s, r);
  }, [o, s, r, u]), re(() => {
    if (!e) return;
    const l = e.onMessageSent;
    return e.onMessageSent = () => {
      x(), l && l();
    }, () => {
      e.onMessageSent && (e.onMessageSent = l);
    };
  }, [e, x]), re(() => {
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
  attach: x,
  preAddedMessages: l,
  buttonLabel: h,
  icon: y,
  btnClassName: _ = "",
  modalSize: O = "1024px",
  variant: v = "default",
  isOpen: j,
  onOpen: N,
  onClose: F,
  showNotification: C,
  showWarning: J,
  showError: z
}) => {
  const [X, P] = Y(!1), D = j !== void 0 ? j : X, { apiAdapter: W, config: L, finalSocketAdapter: ee } = Ze({
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
    isChatOpen: D,
    attach: x,
    preAddedMessages: l,
    showNotification: C,
    showWarning: J,
    showError: z
  }), M = uo(
    W,
    ee,
    o,
    p,
    d || void 0,
    D,
    L == null ? void 0 : L.currentUser
  ), oe = () => {
    j !== void 0 ? D ? F == null || F() : N == null || N() : P(!X);
  };
  return W ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    v === "plain" ? /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: _,
        onClick: oe,
        style: {
          position: "relative",
          ...typeof _ == "string" && _.includes("button") ? {} : { border: "none", background: "none", cursor: "pointer", padding: 0 }
        },
        children: [
          y || h,
          M > 0 && /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-badge", style: { top: "-10px", right: "-10px" }, children: M })
        ]
      }
    ) : /* @__PURE__ */ c.jsxs("div", { className: `whatsapp-trigger-wrapper ${_}`, onClick: oe, children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-trigger-icon-container", children: [
        y || /* @__PURE__ */ c.jsx(Zt, { size: 20, color: "#175353" }),
        M > 0 && /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-badge", children: M })
      ] }),
      /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-label", children: h })
    ] }),
    /* @__PURE__ */ c.jsx(Ce, { open: D, onClose: oe, width: O, header: /* @__PURE__ */ c.jsx("h3", { className: "whatsapp-modal-header-title", children: "WhatsApp Chat" }), children: /* @__PURE__ */ c.jsx(
      ro,
      {
        apiAdapter: W,
        config: L,
        socketAdapter: ee,
        socketPayload: o,
        currentUserFullName: m,
        attach: x,
        preAddedMessages: l
      }
    ) })
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
  attach: x,
  preAddedMessages: l,
  buttonLabel: h = "Send WhatsApp",
  icon: y,
  btnClassName: _ = "",
  modalSize: O = "600px",
  variant: v = "default",
  isOpen: j,
  onOpen: N,
  onClose: F,
  showNotification: C,
  showWarning: J,
  showError: z
}) => {
  const [X, P] = Y(!1), D = j !== void 0 ? j : X, { apiAdapter: W, config: L, finalSocketAdapter: ee } = Ze({
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
    isChatOpen: D,
    attach: x,
    preAddedMessages: l,
    showNotification: C,
    showWarning: J,
    showError: z
  }), M = () => {
    j !== void 0 ? D ? F == null || F() : N == null || N() : P(!X);
  };
  return W ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    v === "plain" ? /* @__PURE__ */ c.jsx(
      "button",
      {
        className: _,
        onClick: M,
        style: {
          position: "relative",
          ...typeof _ == "string" && _.includes("button") ? {} : { border: "none", background: "none", cursor: "pointer", padding: 0 }
        },
        children: y || h
      }
    ) : /* @__PURE__ */ c.jsxs("div", { className: `whatsapp-trigger-wrapper ${_}`, onClick: M, children: [
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-trigger-icon-container", children: y || /* @__PURE__ */ c.jsx(Zt, { size: 20, color: "#175353" }) }),
      /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-label", children: h })
    ] }),
    /* @__PURE__ */ c.jsx(
      Ce,
      {
        open: D,
        onClose: M,
        width: "780px",
        header: /* @__PURE__ */ c.jsx("h3", { className: "whatsapp-modal-header-title", children: "WhatsApp Chat" }),
        children: /* @__PURE__ */ c.jsx(
          ao,
          {
            apiAdapter: W,
            config: L,
            socketAdapter: ee,
            socketPayload: o,
            currentUserFullName: m,
            attach: x,
            preAddedMessages: l
          }
        )
      }
    )
  ] }) : null;
};
export {
  fs as WhatsAppMessageSkeleton,
  ys as WhatsAppTemplateSkeleton,
  ro as WhatsappChat,
  sn as WhatsappChatProvider,
  Fo as WhatsappChatTrigger,
  so as WhatsappChatWidget,
  ao as WhatsappSendMessage,
  Mo as WhatsappSendMessageTrigger,
  oo as WhatsappSendMessageWidget,
  uo as useWhatsappBadgeCount,
  Ne as useWhatsappChatConfig,
  dn as useWhatsappWidgetLogic,
  ue as useWhatsappWidgetZustand
};
