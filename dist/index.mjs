import Pe, { useContext as en, createContext as tn, useRef as ue, useMemo as ge, useEffect as ce, forwardRef as Bn, useImperativeHandle as Wn, useState as Z, useCallback as ke } from "react";
import { WhatsappLogo as qn, User as zn, X as Hn, Paperclip as Jn, FileText as Vn, PaperPlaneTilt as Kn, ArrowSquareOut as Yn, Check as Xn, Checks as Gn, Warning as Zn, Clock as Qn, Eye as es } from "@phosphor-icons/react";
import { useStore as ts, createStore as ns, create as ss } from "zustand";
import './index.css';var ze = { exports: {} }, Oe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ct;
function rs() {
  if (Ct) return Oe;
  Ct = 1;
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
  return Oe.Fragment = t, Oe.jsx = n, Oe.jsxs = n, Oe;
}
var Ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function os() {
  return At || (At = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === A ? null : h.displayName || h.name || null;
      if (typeof h == "string") return h;
      switch (h) {
        case y:
          return "Fragment";
        case j:
          return "Profiler";
        case _:
          return "StrictMode";
        case D:
          return "Suspense";
        case C:
          return "SuspenseList";
        case J:
          return "Activity";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case g:
            return "Portal";
          case N:
            return h.displayName || "Context";
          case T:
            return (h._context.displayName || "Context") + ".Consumer";
          case O:
            var E = h.render;
            return h = h.displayName, h || (h = E.displayName || E.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case W:
            return E = h.displayName || null, E !== null ? E : e(h.type) || "Memo";
          case I:
            E = h._payload, h = h._init;
            try {
              return e(h(E));
            } catch {
            }
        }
      return null;
    }
    function t(h) {
      return "" + h;
    }
    function n(h) {
      try {
        t(h);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var k = E.error, F = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return k.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), t(h);
      }
    }
    function s(h) {
      if (h === y) return "<>";
      if (typeof h == "object" && h !== null && h.$$typeof === I)
        return "<...>";
      try {
        var E = e(h);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var h = $.A;
      return h === null ? null : h.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(h) {
      if (K.call(h, "key")) {
        var E = Object.getOwnPropertyDescriptor(h, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return h.key !== void 0;
    }
    function i(h, E) {
      function k() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: k,
        configurable: !0
      });
    }
    function m() {
      var h = e(this.type);
      return Q[h] || (Q[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function p(h, E, k, F, oe, ve) {
      var B = k.ref;
      return h = {
        $$typeof: d,
        type: h,
        key: E,
        props: k,
        _owner: F
      }, (B !== void 0 ? B : null) !== null ? Object.defineProperty(h, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(h, "ref", { enumerable: !1, value: null }), h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(h, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(h, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.defineProperty(h, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ve
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function l(h, E, k, F, oe, ve) {
      var B = E.children;
      if (B !== void 0)
        if (F)
          if (U(B)) {
            for (F = 0; F < B.length; F++)
              u(B[F]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(B);
      if (K.call(E, "key")) {
        B = e(h);
        var he = Object.keys(E).filter(function(rt) {
          return rt !== "key";
        });
        F = 0 < he.length ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}", V[B + F] || (he = 0 < he.length ? "{" + he.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          B,
          he,
          B
        ), V[B + F] = !0);
      }
      if (B = null, k !== void 0 && (n(k), B = "" + k), a(E) && (n(E.key), B = "" + E.key), "key" in E) {
        k = {};
        for (var Ne in E)
          Ne !== "key" && (k[Ne] = E[Ne]);
      } else k = E;
      return B && i(
        k,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), p(
        h,
        B,
        k,
        r(),
        oe,
        ve
      );
    }
    function u(h) {
      w(h) ? h._store && (h._store.validated = 1) : typeof h == "object" && h !== null && h.$$typeof === I && (h._payload.status === "fulfilled" ? w(h._payload.value) && h._payload.value._store && (h._payload.value._store.validated = 1) : h._store && (h._store.validated = 1));
    }
    function w(h) {
      return typeof h == "object" && h !== null && h.$$typeof === d;
    }
    var x = Pe, d = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), N = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), $ = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, U = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(h) {
        return h();
      }
    };
    var P, Q = {}, H = x.react_stack_bottom_frame.bind(
      x,
      o
    )(), se = re(s(o)), V = {};
    Ce.Fragment = y, Ce.jsx = function(h, E, k) {
      var F = 1e4 > $.recentlyCreatedOwnerStacks++;
      return l(
        h,
        E,
        k,
        !1,
        F ? Error("react-stack-top-frame") : H,
        F ? re(s(h)) : se
      );
    }, Ce.jsxs = function(h, E, k) {
      var F = 1e4 > $.recentlyCreatedOwnerStacks++;
      return l(
        h,
        E,
        k,
        !0,
        F ? Error("react-stack-top-frame") : H,
        F ? re(s(h)) : se
      );
    };
  })()), Ce;
}
var kt;
function as() {
  return kt || (kt = 1, process.env.NODE_ENV === "production" ? ze.exports = rs() : ze.exports = os()), ze.exports;
}
var c = as();
const nn = (e) => /* @__PURE__ */ c.jsx(zn, { ...e }), is = (e) => /* @__PURE__ */ c.jsx(Jn, { ...e }), cs = (e) => /* @__PURE__ */ c.jsx(Kn, { ...e }), gt = (e) => /* @__PURE__ */ c.jsx(Hn, { ...e }), ls = (e) => /* @__PURE__ */ c.jsx(es, { ...e }), Pt = (e) => /* @__PURE__ */ c.jsx(Gn, { ...e }), Ft = (e) => /* @__PURE__ */ c.jsx(Xn, { ...e }), us = (e) => /* @__PURE__ */ c.jsx(Yn, { ...e }), sn = (e) => /* @__PURE__ */ c.jsx(Vn, { ...e }), ds = (e) => /* @__PURE__ */ c.jsx(Qn, { ...e }), fs = (e) => /* @__PURE__ */ c.jsx(Zn, { ...e }), rn = (e) => /* @__PURE__ */ c.jsx(qn, { ...e }), on = (e) => {
  if (!e) return "";
  try {
    return new Date(e).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}, an = (e, t) => {
  if (t !== 1) return null;
  const n = (s) => ({
    size: 14,
    style: { color: s, marginLeft: "4px" }
  });
  switch (e) {
    case 5:
      return /* @__PURE__ */ c.jsx(ds, { ...n("#999") });
    case 2:
      return /* @__PURE__ */ c.jsx(fs, { ...n("#ff4444") });
    case 1:
      return /* @__PURE__ */ c.jsx(Ft, { ...n("#999") });
    case 3:
      return /* @__PURE__ */ c.jsx(Pt, { ...n("#999"), weight: "bold" });
    case 4:
      return /* @__PURE__ */ c.jsx(Pt, { ...n("#53bdeb"), weight: "bold" });
    default:
      return /* @__PURE__ */ c.jsx(Ft, { ...n("#999") });
  }
}, ps = (e) => {
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
  return s < e.length && n.push(e.substring(s)), n.length > 0 ? /* @__PURE__ */ c.jsx(Pe.Fragment, { children: n }) : e;
};
function ms(e) {
  if (!e) return;
  const t = e.toLowerCase();
  if (t === "success" || t === "sent") return 1;
  if (t === "failed") return 2;
  if (t === "delivered") return 3;
  if (t === "read") return 4;
  const n = parseInt(e, 10);
  if (!isNaN(n) && n >= 1 && n <= 5) return n;
}
function yt(e) {
  var l;
  if (!(e != null && e.name)) return null;
  const n = String(e.type ?? "").trim().toLowerCase() === "outgoing" || e.is_outbound === 1 || e.is_outbound === "1";
  let s = ms(e.status ?? void 0);
  s === void 0 && n && (s = 5);
  const r = e.message_type === "Template", o = e.message != null ? String(e.message) : void 0, a = o != null && o.trim() !== "" && o !== "Template message", i = r && !a && e.template ? e.template : o ?? e.template ?? "", m = (l = e.links) != null && l.length ? e.links.filter((u) => !!(u != null && u.button_label && (u != null && u.link))).map((u) => ({ button_label: u.button_label, link: u.link })) : void 0, p = e.from_name || e.profile_name;
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
const He = ss((e) => ({
  incomingData: [],
  setIncomingData: (t) => e({ incomingData: t }),
  handleIncomingMessage: (t) => e((n) => {
    if (t.is_outbound === 1) return n;
    const s = [...n.incomingData], r = t.name, o = t.from || t.sender || "", a = t.reference_name || "";
    if (t.status === 4) {
      const l = s.findIndex((u) => {
        var w;
        return (w = u.names) == null ? void 0 : w.includes(r);
      });
      if (l !== -1) {
        const u = { ...s[l] };
        return u.names = u.names.filter((w) => w !== r), u.counts = Math.max(0, (u.counts || 0) - 1), u.counts === 0 ? s.splice(l, 1) : s[l] = u, { incomingData: s };
      }
      return n;
    }
    if (s.some((l) => {
      var u;
      return (u = l.names) == null ? void 0 : u.includes(r);
    })) return n;
    const p = s.findIndex((l) => l.type === "whatsapp" && (o && l.from === o || a && l.customer === a));
    if (p !== -1)
      return s[p] = {
        ...s[p],
        counts: (s[p].counts || 0) + 1,
        names: [...s[p].names || [], r]
      }, { incomingData: s };
    {
      const l = {
        from: o,
        counts: 1,
        received_at: t.creation || (/* @__PURE__ */ new Date()).toISOString(),
        names: [r],
        customer: a,
        type: "whatsapp",
        full_name: t.from_name || "New Message",
        data: []
      };
      return { incomingData: [...s, l] };
    }
  }),
  clearContact: (t, n) => e((s) => ({ incomingData: s.incomingData.filter((o) => o.type !== "whatsapp" ? !0 : !(t && o.from === t || n && o.customer === n)) }))
})), hs = () => ns((e) => ({
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
})), cn = tn(void 0), ln = tn(void 0), un = ({
  apiAdapter: e,
  config: t,
  socketAdapter: n,
  socketPayload: s,
  children: r
}) => {
  const [o] = Pe.useState(() => hs());
  return /* @__PURE__ */ c.jsx(cn.Provider, { value: { apiAdapter: e, config: t, socketAdapter: n, socketPayload: s }, children: /* @__PURE__ */ c.jsx(ln.Provider, { value: o, children: r }) });
}, Fe = () => {
  const e = en(cn);
  if (!e) throw new Error("Missing WhatsappChatProvider");
  return e;
}, dn = () => {
  const e = en(ln);
  if (!e) throw new Error("Missing WhatsappChatProvider");
  return e;
}, me = (e) => {
  const t = dn();
  return ts(t, e);
};
function gs(e) {
  return e.startsWith("/") ? e.slice(1) : e;
}
const fn = ({
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
  const { config: l } = Fe(), u = l.apiBaseUrl || "", w = m ? `${u}/${gs(m)}` : void 0, x = i === "IMAGE" && w, d = i === "DOCUMENT" && w, g = !i || i === "TEXT";
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
    d && /* @__PURE__ */ c.jsxs(
      "a",
      {
        href: w,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "whatsapp-template-card-header-media whatsapp-template-card-header-document",
        title: "Open document in new tab",
        children: [
          /* @__PURE__ */ c.jsx(sn, { size: 24, color: "#e74c3c" }),
          /* @__PURE__ */ c.jsx("span", { children: (m == null ? void 0 : m.split("/").pop()) || "Untitled" })
        ]
      }
    ),
    g && e && /* @__PURE__ */ c.jsx("h4", { className: "whatsapp-template-card-header", children: e }),
    /* @__PURE__ */ c.jsx("p", { className: "whatsapp-template-card-body", children: t }),
    n && /* @__PURE__ */ c.jsx("p", { className: "whatsapp-template-card-footer", children: n }),
    s && s.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "whatsapp-template-card-buttons", children: s.map((y, _) => /* @__PURE__ */ c.jsxs("a", { href: y.link, target: "_blank", rel: "noopener noreferrer", className: "whatsapp-template-card-button", children: [
      /* @__PURE__ */ c.jsx(us, { size: 16, color: "currentColor" }),
      /* @__PURE__ */ c.jsx("span", { children: y.button_label })
    ] }, _)) }),
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-template-card-meta", children: [
      /* @__PURE__ */ c.jsx("span", { children: on(r) }),
      !p && o === 1 && an(a, o)
    ] })
  ] }) });
}, ee = ({ width: e, height: t, className: n, style: s }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: `whatsapp-skeleton ${n || ""}`,
    style: {
      width: e,
      height: t,
      ...s
    }
  }
), ys = () => {
  const e = { marginBottom: 8 };
  return /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-message-list", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx(ee, { width: "140px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(ee, { width: "60px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble sent", style: e, children: [
      /* @__PURE__ */ c.jsx(ee, { width: "100px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(ee, { width: "55px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx(ee, { width: "180px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(ee, { width: "60px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble sent", style: e, children: [
      /* @__PURE__ */ c.jsx(ee, { width: "120px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(ee, { width: "55px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx(ee, { width: "90px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx(ee, { width: "60px", height: "0.75rem" })
    ] })
  ] });
};
function ws(e, t) {
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
const bs = ({
  messages: e,
  isLoading: t = !1,
  error: n = null,
  activity: s,
  icon: r,
  showIcon: o = !1,
  enableScroll: a = !0
}) => {
  const { config: i } = Fe(), m = i.apiBaseUrl || "", p = ue(null), l = ge(() => {
    var u;
    if (s) {
      const w = s.creation || (s.date && s.time ? `${s.date} ${s.time}` : (/* @__PURE__ */ new Date()).toISOString()), x = s.type === "Outgoing" || s.is_outbound === 1, d = ((u = s.links) == null ? void 0 : u.map((g) => ({
        button_label: g.button_label ?? "",
        link: g.link ?? g.website_url ?? ""
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
          status: ws(s.status, x),
          message_type: s.message_type,
          header: s.header,
          footer: s.footer,
          template_links: d != null && d.filter((g) => g.link || g.button_label).length ? d : void 0,
          header_type: s.header_type,
          sample: s.sample
        }
      ];
    }
    return e || [];
  }, [s, e]);
  return ce(() => {
    if (!a) return;
    const u = setTimeout(() => {
      var w;
      (w = p.current) == null || w.scrollIntoView({ behavior: "smooth" });
    }, 0);
    return () => clearTimeout(u);
  }, [l, a]), t ? /* @__PURE__ */ c.jsx(ys, {}) : n ? /* @__PURE__ */ c.jsx("div", { className: "whatsapp-message-list", style: { textAlign: "center", color: "#c53030", padding: "20px" }, children: n }) : /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-message-list", children: [
    l.length === 0 && /* @__PURE__ */ c.jsx("div", { style: { textAlign: "center", color: "#888", padding: "20px" }, children: "No messages yet. Start the conversation!" }),
    l.map((u, w) => {
      const x = u, d = Array.isArray(x.attach) ? x.attach : x.attach ? [x.attach] : [], g = x.content_type;
      return x.message_type === "Template" ? /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: `message-bubble ${u.is_outbound ? "sent" : "received"} message-bubble--template`,
          children: [
            o && r && /* @__PURE__ */ c.jsx("div", { className: "message-icon-wrapper", children: r }),
            /* @__PURE__ */ c.jsx(
              fn,
              {
                header: x.header,
                message: u.message,
                footer: x.footer,
                template_links: x.template_links,
                creation: u.creation,
                is_outbound: u.is_outbound,
                status: u.status,
                header_type: x.header_type,
                sample: x.sample
              }
            )
          ]
        },
        `${u.name}-${w}`
      ) : /* @__PURE__ */ c.jsxs("div", { className: `message-bubble ${u.is_outbound ? "sent" : "received"}`, children: [
        o && r && /* @__PURE__ */ c.jsx("div", { className: "message-icon-wrapper", children: r }),
        /* @__PURE__ */ c.jsxs("div", { className: "message-content", children: [
          ps(u.message) || u.message,
          d.length > 0 && d.map((_, j) => /* @__PURE__ */ c.jsx("div", { className: "message-attachment", children: g === "image" ? /* @__PURE__ */ c.jsx(
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
          ) }, `${u.name}-attach-${j}`)),
          /* @__PURE__ */ c.jsxs("div", { className: "message-time", children: [
            on(u.creation),
            an(u.status, u.is_outbound)
          ] })
        ] })
      ] }, `${u.name}-${w}`);
    }),
    /* @__PURE__ */ c.jsx("div", { ref: p })
  ] });
}, pn = Bn(({ onSelect: e, multiple: t = !0, accept: n, maxFileSize: s, className: r = "" }, o) => {
  const a = ue(null);
  Wn(o, () => ({
    click: () => {
      var m;
      (m = a.current) == null || m.click();
    }
  }));
  const i = (m) => {
    const p = m.target.files;
    if (p && e) {
      const l = Array.from(p);
      if (s) {
        const u = l.filter((w) => w.size <= s);
        e(u);
      } else
        e(l);
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
pn.displayName = "FileUpload";
const Me = ({ open: e, onClose: t, header: n, children: s, width: r = "600px", className: o = "" }) => (ce(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
  document.body.style.overflow = "unset";
}), [e]), e ? /* @__PURE__ */ c.jsx("div", { className: `raw-modal-overlay ${o}`, onClick: t, children: /* @__PURE__ */ c.jsxs("div", { className: "raw-modal-container", style: { maxWidth: r }, onClick: (a) => a.stopPropagation(), children: [
  /* @__PURE__ */ c.jsxs("div", { className: "raw-modal-header", children: [
    /* @__PURE__ */ c.jsx("div", { className: "raw-modal-title", children: n }),
    /* @__PURE__ */ c.jsx("button", { className: "raw-modal-close", onClick: t, children: /* @__PURE__ */ c.jsx(gt, { size: 20 }) })
  ] }),
  /* @__PURE__ */ c.jsx("div", { className: "raw-modal-body", children: s })
] }) }) : null), xs = ({
  selectedTemplateName: e,
  templateText: t,
  template: n,
  onClearTemplate: s
}) => {
  var x;
  const [r, o] = Z(!1), a = () => {
    s(), o(!1);
  }, i = e.split("-")[0], m = (n == null ? void 0 : n.template) ?? t ?? "", p = (n == null ? void 0 : n.header) ?? null, l = (n == null ? void 0 : n.footer) ?? null, u = ((x = n == null ? void 0 : n.links) == null ? void 0 : x.map((d) => ({
    button_label: d.button_label ?? "",
    link: d.link ?? ""
  }))) || [], w = (n == null ? void 0 : n.modified) || (n == null ? void 0 : n.creation) || (/* @__PURE__ */ new Date()).toISOString();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-template-chip", children: [
      /* @__PURE__ */ c.jsxs("span", { children: [
        "Template: ",
        i
      ] }),
      /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => o(!0), className: "whatsapp-template-chip-preview", title: "Preview template", children: /* @__PURE__ */ c.jsx(ls, { size: 20, color: "currentColor" }) }),
      /* @__PURE__ */ c.jsx("button", { type: "button", onClick: a, className: "whatsapp-template-chip-clear", title: "Send as normal message instead", children: /* @__PURE__ */ c.jsx(gt, { size: 20, color: "currentColor" }) })
    ] }),
    /* @__PURE__ */ c.jsx(
      Me,
      {
        open: r,
        onClose: () => o(!1),
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Template Preview" }),
        children: /* @__PURE__ */ c.jsx("div", { style: { padding: "20px 0" }, children: n ? /* @__PURE__ */ c.jsx(
          fn,
          {
            header: p,
            message: m,
            footer: l,
            template_links: u,
            creation: w,
            is_outbound: 1,
            status: void 0,
            isPreview: !0
          }
        ) : /* @__PURE__ */ c.jsx("pre", { className: "whatsapp-template-preview-content", children: t ?? "" }) })
      }
    )
  ] });
}, _s = ({ attachedFile: e, onFileRemove: t }) => /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-attachment-preview", children: [
  e.preview && /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsx("img", { src: e.preview, alt: "Preview", className: "whatsapp-attachment-image-thumb" }) }),
  /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-attachment-info", children: [
    /* @__PURE__ */ c.jsx("span", { className: "whatsapp-attachment-name", children: e.file.name }),
    t && /* @__PURE__ */ c.jsx("button", { onClick: t, type: "button", className: "whatsapp-attachment-remove", title: "Remove attachment", children: /* @__PURE__ */ c.jsx(gt, { size: 14, color: "#666" }) })
  ] })
] }), Mt = () => /* @__PURE__ */ c.jsx("div", { className: "whatsapp-spinner" }), mn = ({
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
  onFileRemove: l,
  onFileSelect: u,
  initialInputText: w = "",
  isPreviewOpen: x,
  setIsPreviewOpen: d,
  style: g,
  className: y
}) => {
  const [_, j] = Z(w), T = ue(null), N = ue(null), O = !!a;
  Pe.useEffect(() => {
    var A;
    O && ((A = T.current) == null || A.focus());
  }, [O]), Pe.useEffect(() => {
    o !== void 0 && o !== "" ? j(o) : a || j(w ?? "");
  }, [o, a, w]);
  const D = () => {
    var K;
    const A = p.map((U) => U.fileUrl).filter(Boolean).map((U) => ({ file: U })), $ = (K = p[0]) == null ? void 0 : K.contentType;
    (_.trim() || A.length > 0 || O) && (e(_, A, $), O || j(""));
  }, C = () => {
    var A;
    (A = N.current) == null || A.click();
  }, W = (A) => {
    A != null && A.length && u && u(A);
  }, I = (A) => {
    A.key === "Enter" && !t && D();
  }, J = (A) => {
    const $ = A.target.value;
    j($), !$.trim() && a && m && m();
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: T,
      className: `whatsapp-input-container ${y || ""}`,
      onKeyDown: I,
      tabIndex: O ? 0 : void 0,
      style: { outline: "none", ...g },
      children: [
        /* @__PURE__ */ c.jsx(pn, { ref: N, onSelect: W, multiple: !0, accept: "image/*,video/*,audio/*,.pdf,.doc,.docx" }),
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
            children: n ? /* @__PURE__ */ c.jsx(Mt, {}) : /* @__PURE__ */ c.jsx(is, { size: 20, color: "#175353" })
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
            children: /* @__PURE__ */ c.jsx(sn, { size: 20, color: "#175353" })
          }
        ),
        a && m && /* @__PURE__ */ c.jsx(
          xs,
          {
            selectedTemplateName: a,
            templateText: o,
            template: i,
            onClearTemplate: () => {
              m(), j("");
            }
          }
        ),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            value: _,
            onChange: J,
            placeholder: "Type a message...",
            className: "whatsapp-input-field",
            disabled: t || O
          }
        ),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: D,
            className: "whatsapp-send-btn",
            disabled: t || !O && !_.trim() && p.length === 0,
            title: s ? "Sending..." : "Send",
            children: s ? /* @__PURE__ */ c.jsx(Mt, {}) : /* @__PURE__ */ c.jsx(cs, { size: 20, color: "white" })
          }
        ),
        p.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "whatsapp-input-attachments-row", children: p.map((A, $) => /* @__PURE__ */ c.jsx(
          _s,
          {
            attachedFile: A,
            onFileRemove: l ? () => l($) : void 0
          },
          `${A.file.name}-${$}`
        )) })
      ]
    }
  );
}, Rs = () => /* @__PURE__ */ c.jsx("div", { className: "whatsapp-templates-grid", children: Array.from({ length: 4 }).map((e, t) => /* @__PURE__ */ c.jsxs(
  "div",
  {
    className: "whatsapp-template-skeleton-item",
    children: [
      /* @__PURE__ */ c.jsx(ee, { width: "40%", height: "12px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-item-divider" }),
      /* @__PURE__ */ c.jsx(ee, { width: "100%", height: "14px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx(ee, { width: "90%", height: "14px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx(ee, { width: "60%", height: "14px" })
    ]
  },
  t
)) });
function Ss(e) {
  let t = "";
  return e.header && (t += `*${e.header}*

`), t += e.template || "", e.footer && (t += `

${e.footer}`), t;
}
const hn = ({ templates: e, onSelect: t, isLoading: n = !1 }) => {
  const [s, r] = Z(null);
  return n ? /* @__PURE__ */ c.jsx(Rs, {}) : e.length === 0 ? /* @__PURE__ */ c.jsx("section", { style: { padding: "1rem", textAlign: "center" }, children: /* @__PURE__ */ c.jsx("p", { style: { color: "#666", fontSize: "0.875rem" }, children: "No templates available" }) }) : /* @__PURE__ */ c.jsx("section", { style: { padding: "1rem" }, children: /* @__PURE__ */ c.jsx("div", { className: "template-scroll-container", children: /* @__PURE__ */ c.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }, children: e.map((o) => {
    const a = Ss(o), i = s === o.name;
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
function Es(e) {
  return e.type.startsWith("image/") ? "image" : e.type.startsWith("video/") ? "video" : e.type.startsWith("audio/") ? "audio" : "document";
}
function gn(e) {
  const t = e.toLowerCase();
  return /\.(png|jpe?g|gif|webp|bmp|svg)$/.test(t) ? "image" : /\.(mp4|webm|mov|mkv)$/.test(t) ? "video" : /\.(mp3|wav|ogg|m4a)$/.test(t) ? "audio" : "document";
}
function Ts(e, t) {
  if (gn(e) !== "image") return;
  const n = e.trim();
  if (n.startsWith("http://") || n.startsWith("https://")) return n;
  const s = (t || "").replace(/\/$/, ""), r = n.startsWith("/") ? n : `/${n}`;
  return s ? `${s}${r}` : n;
}
function js(e, t) {
  const n = e.file.trim(), s = n.split("/").filter(Boolean).pop() || "attachment", r = gn(n);
  return {
    file: new File([], s, {
      type: r === "image" ? "image/png" : r === "video" ? "video/mp4" : "application/octet-stream"
    }),
    fileUrl: n,
    contentType: r,
    preview: Ts(n, t)
  };
}
function yn() {
  const { config: e, apiAdapter: t, socketAdapter: n, socketPayload: s } = Fe(), r = dn(), o = me((R) => R.messages), a = me((R) => R.isLoading), i = me((R) => R.error), m = me((R) => R.setMessages), p = me((R) => R.appendMessage), l = me((R) => R.replaceMessage), u = me((R) => R.updateMessageStatus), w = me((R) => R.setLoading), x = me((R) => R.setError), [d, g] = Z(!1), y = (n == null ? void 0 : n.isConnected) ?? !1, [_, j] = Z(!1), [T, N] = Z(), [O, D] = Z(), [C, W] = Z(), [I, J] = Z([]), [A, $] = Z(!1), [K, U] = Z([]), [re, P] = Z(!1), [Q, H] = Z(0), se = ue(null), V = ge(() => {
    var Be;
    const R = e.doctype || "", b = e.refName || "", S = e.activeLeadDoctype || "", Y = e.activeLeadName || "", M = e.activeTaskDoctype || "", G = e.activeTaskName || "";
    let q = R, L = b, ae = e.links || [];
    if (Y)
      q = S || "CRM Lead", L = Y, ae = R ? [{ link_doctype: R, link_name: b }] : [];
    else {
      const le = (Be = e.links) == null ? void 0 : Be.find((ye) => {
        var Ee;
        return (Ee = ye.link_doctype) == null ? void 0 : Ee.includes("Lead");
      });
      le && (q = le.link_doctype, L = le.link_name, ae = R ? [{ link_doctype: R, link_name: b }] : []);
    }
    const fe = [];
    return Y && fe.push({ reference_doctype: S || "CRM Lead", reference_name: Y }), G && fe.push({ reference_doctype: M || "CRM Task", reference_name: G }), R && b && fe.push({ reference_doctype: R, reference_name: b }), (e.links || []).forEach((le) => {
      fe.some((ye) => ye.reference_name === le.link_name && ye.reference_doctype === le.link_doctype) || fe.push({ reference_doctype: le.link_doctype, reference_name: le.link_name });
    }), {
      primaryDoctype: q,
      primaryName: L,
      secondaryLinks: ae,
      templateRefs: fe,
      baseDoctype: R,
      baseName: b,
      activeLeadDoctype: S,
      activeLeadName: Y,
      activeTaskDoctype: M,
      activeTaskName: G
    };
  }, [e]), h = ue(t.getMessages);
  ce(() => {
    h.current = t.getMessages;
  }, [t.getMessages]), ce(() => {
    var S;
    const R = e.isChatOpen, b = se.current;
    se.current = R, R && (b === !1 && H((Y) => Y + 1), (b === !1 || b === null) && ((S = e.attach) != null && S.length ? U(e.attach.map((Y) => js(Y, e.apiBaseUrl))) : U([])));
  }, [e.isChatOpen, e.attach, e.apiBaseUrl]), ce(() => {
    if (!e.isChatOpen || e.preventHistoryFetch) return;
    (async () => {
      var b;
      w(!0), x(null);
      try {
        const S = await ((b = h.current) == null ? void 0 : b.call(h, e.doctype || "", e.refName || ""));
        S && m([...S].reverse());
      } catch (S) {
        x(S instanceof Error ? S.message : "Failed to fetch");
      } finally {
        w(!1);
      }
    })();
  }, [e.isChatOpen, e.doctype, e.refName, w, x, m]), ce(() => {
    if (!_ || I.length > 0) return;
    (async () => {
      var b;
      $(!0);
      try {
        const S = await ((b = t.getTemplates) == null ? void 0 : b.call(t, V.templateRefs));
        S && J(S);
      } catch (S) {
        console.error("Template fetch failed", S);
      } finally {
        $(!1);
      }
    })();
  }, [_, t, V.templateRefs, I.length]);
  const E = ue(!1), k = ue(/* @__PURE__ */ new Set()), F = ue(null), oe = ue(null);
  ce(() => {
    if (!e.isChatOpen) {
      E.current = !1, k.current.clear();
      return;
    }
    if (E.current || !o.length || !t.sendReadReceipt)
      return;
    const R = o.findLast((b) => b.is_outbound === 0 && (b.status === null || b.status === void 0));
    R != null && R.name && !k.current.has(R.name) ? (t.sendReadReceipt(R.name), k.current.add(R.name), E.current = !0) : o.length > 0 && (E.current = !0);
  }, [e.isChatOpen, o, t]);
  const ve = ke((R) => {
    U((b) => {
      const S = b[R];
      return S != null && S.preview && URL.revokeObjectURL(S.preview), b.filter((Y, M) => M !== R);
    });
  }, []), B = ke(() => {
    U((R) => (R.forEach((b) => {
      b.preview && URL.revokeObjectURL(b.preview);
    }), []));
  }, []), he = ke(
    async (R, b, S) => {
      var Et, Tt, jt, vt, Nt;
      const {
        primaryDoctype: Y,
        primaryName: M,
        secondaryLinks: G,
        baseDoctype: q,
        baseName: L,
        activeLeadDoctype: ae,
        activeLeadName: fe,
        activeTaskDoctype: Be,
        activeTaskName: le
      } = V, ye = {
        to: e.phone
      };
      if (O) {
        const pe = ((C == null ? void 0 : C.for_doctype) ?? "").trim();
        let we = Y, be = M, at = G;
        if (pe)
          if (q === pe)
            we = q, be = L;
          else if (pe.includes("Lead") && fe)
            we = ae || "CRM Lead", be = fe;
          else if (pe.includes("Task") && le)
            we = Be || "CRM Task", be = le;
          else {
            const xe = (Et = e.links) == null ? void 0 : Et.find((it) => it.link_doctype === pe);
            xe && (we = xe.link_doctype, be = xe.link_name);
          }
        if (be !== L || we !== q) {
          const xe = q ? [{ link_doctype: q, link_name: L }] : [], it = (e.links || []).filter(
            (Ot) => Ot.link_name !== be || Ot.link_doctype !== we
          );
          at = [...xe, ...it];
        } else
          at = e.links || [];
        const qe = `temp-${Date.now()}`;
        oe.current = qe;
        const $n = {
          name: qe,
          message: T ?? (C == null ? void 0 : C.template) ?? "",
          sender: "You",
          creation: (/* @__PURE__ */ new Date()).toISOString(),
          is_outbound: 1,
          status: 5,
          message_type: "Template",
          header: C == null ? void 0 : C.header,
          footer: C == null ? void 0 : C.footer
        };
        p($n), g(!0);
        try {
          await t.sendTemplate({
            ...ye,
            reference_doctype: we,
            reference_name: be,
            template: O,
            links: at
          }), u(qe, 1), (Tt = t.showNotification) == null || Tt.call(t, "WhatsApp", "Template sent successfully"), D(void 0), N(void 0), W(void 0), B(), t.onMessageSent && t.onMessageSent();
        } catch (xe) {
          console.error(xe), u(qe, 2), (jt = t.showError) == null || jt.call(t, "WhatsApp", "Failed to send template message");
        } finally {
          g(!1);
        }
        return;
      }
      const Ee = (R || "").trim();
      if (!Ee && (!b || b.length === 0)) return;
      const We = `temp-${Date.now()}`;
      F.current = We;
      const ot = (b == null ? void 0 : b.map((pe) => pe.file).filter(Boolean)) || [], St = ot[0];
      p({
        name: We,
        message: Ee,
        sender: "You",
        creation: (/* @__PURE__ */ new Date()).toISOString(),
        is_outbound: 1,
        attach: ot.length ? ot : void 0,
        content_type: St ? S || "document" : void 0,
        status: 5
      }), g(!0);
      try {
        await t.sendMessage({
          ...ye,
          reference_doctype: Y,
          reference_name: M,
          message: Ee,
          attach: b && b.length ? b : "",
          content_type: St ? S : void 0,
          links: G
        }), u(We, 1), (vt = t.showNotification) == null || vt.call(t, "WhatsApp", "Message sent successfully"), B(), t.onMessageSent && t.onMessageSent();
      } catch (pe) {
        console.error(pe), u(We, 2), (Nt = t.showError) == null || Nt.call(t, "WhatsApp", "Failed to send message");
      } finally {
        g(!1);
      }
    },
    [O, t, e.phone, e.links, C, T, p, u, V, B]
  ), Ne = (R, b, S) => {
    N(R), D(b), W(S), j(!1);
  }, rt = ke(async (R) => {
    var b;
    if (!(!t.uploadFiles && !t.uploadFile || !R.length)) {
      P(!0);
      try {
        let S = [];
        t.uploadFiles ? S = (await t.uploadFiles(R)).file_urls || [] : S = (await Promise.all(R.map((G) => t.uploadFile(G)))).map((G) => G.file_url).filter(Boolean);
        const Y = R.map((M, G) => ({
          file: M,
          fileUrl: S[G] || "",
          contentType: Es(M),
          preview: M.type.startsWith("image/") ? URL.createObjectURL(M) : void 0
        })).filter((M) => !!M.fileUrl);
        U((M) => [...M, ...Y]);
      } catch (S) {
        console.error(S), (b = t.showError) == null || b.call(t, "WhatsApp", "Failed to upload file");
      } finally {
        P(!1);
      }
    }
  }, [t]);
  return ce(() => {
    const R = (b) => {
      var G;
      if (!b || !b.name) return;
      const S = r.getState().messages, Y = b.status !== null && b.status !== void 0;
      let M = -1;
      if (b.is_outbound === 0 && Y) {
        S.some((L) => L.name === b.name) && typeof b.status == "number" && u(b.name, b.status);
        return;
      }
      if (e.isChatOpen && b.is_outbound === 0 && b.name && e.phone === b.from && !(b.status === 4) && !k.current.has(b.name) && ((G = t.sendReadReceipt) == null || G.call(t, b.name), k.current.add(b.name)), b.is_outbound === 1)
        if (b.message_type === "Template") {
          const q = oe.current;
          if (q && (M = S.findIndex((L) => L.name === q)), M === -1)
            for (let L = S.length - 1; L >= 0; L--) {
              const ae = S[L];
              if (ae.name.startsWith("temp-") && ae.message_type === "Template") {
                M = L;
                break;
              }
            }
        } else {
          const q = F.current;
          if (q && (M = S.findIndex((L) => L.name === q)), M === -1 && (b.message && (M = S.findIndex((L) => L.name.startsWith("temp-") && L.is_outbound === 1 && L.message === b.message)), M === -1))
            for (let L = S.length - 1; L >= 0; L--) {
              const ae = S[L];
              if (ae.name.startsWith("temp-") && ae.is_outbound === 1 && ae.message_type !== "Template") {
                M = L;
                break;
              }
            }
        }
      if (M !== -1) {
        const q = S[M];
        l(q.name, b), q.name === F.current && (F.current = null), q.name === oe.current && (oe.current = null);
      } else
        S.some((L) => L.name === b.name) ? typeof b.status == "number" && u(b.name, b.status) : p(b);
    };
    if (n != null && n.onMessage) {
      const b = (S) => R(S);
      return n.onMessage(b), () => {
        var S;
        return (S = n.offMessage) == null ? void 0 : S.call(n, b);
      };
    }
    if (s && s.event === "whatsapp_message") {
      const b = s.message, S = yt(b);
      R(S);
    }
  }, [n, s, e.phone, e.isChatOpen, t, r, l, p, u]), {
    displayMessages: o,
    isLoading: a,
    messagesError: i,
    isConnected: y,
    isSending: d,
    isTemplateModalOpen: _,
    setIsTemplateModalOpen: j,
    selectedTemplateText: T,
    selectedTemplateName: O,
    selectedTemplate: C,
    setSelectedTemplateText: N,
    setSelectedTemplateName: D,
    setSelectedTemplate: W,
    attachedFiles: K,
    templates: I,
    isLoadingTemplates: A,
    sendMessage: he,
    handleTemplateSelect: Ne,
    handleFileSelect: rt,
    handleFileRemove: ve,
    uploadFileMutation: { isPending: re },
    composerMountKey: Q
  };
}
function wn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: vs } = Object.prototype, { getPrototypeOf: wt } = Object, { iterator: Ze, toStringTag: bn } = Symbol, Qe = /* @__PURE__ */ ((e) => (t) => {
  const n = vs.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), de = (e) => (e = e.toLowerCase(), (t) => Qe(t) === e), et = (e) => (t) => typeof t === e, { isArray: je } = Array, Te = et("undefined");
function Le(e) {
  return e !== null && !Te(e) && e.constructor !== null && !Te(e.constructor) && te(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const xn = de("ArrayBuffer");
function Ns(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && xn(e.buffer), t;
}
const Os = et("string"), te = et("function"), _n = et("number"), De = (e) => e !== null && typeof e == "object", Cs = (e) => e === !0 || e === !1, Ke = (e) => {
  if (Qe(e) !== "object")
    return !1;
  const t = wt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(bn in e) && !(Ze in e);
}, As = (e) => {
  if (!De(e) || Le(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, ks = de("Date"), Ps = de("File"), Fs = (e) => !!(e && typeof e.uri < "u"), Ms = (e) => e && typeof e.getParts < "u", Ls = de("Blob"), Ds = de("FileList"), Us = (e) => De(e) && te(e.pipe);
function Is() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Lt = Is(), Dt = typeof Lt.FormData < "u" ? Lt.FormData : void 0, $s = (e) => {
  let t;
  return e && (Dt && e instanceof Dt || te(e.append) && ((t = Qe(e)) === "formdata" || // detect form-data instance
  t === "object" && te(e.toString) && e.toString() === "[object FormData]"));
}, Bs = de("URLSearchParams"), [Ws, qs, zs, Hs] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(de), Js = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ue(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, r;
  if (typeof e != "object" && (e = [e]), je(e))
    for (s = 0, r = e.length; s < r; s++)
      t.call(null, e[s], s, e);
  else {
    if (Le(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let i;
    for (s = 0; s < a; s++)
      i = o[s], t.call(null, e[i], i, e);
  }
}
function Rn(e, t) {
  if (Le(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, r;
  for (; s-- > 0; )
    if (r = n[s], t === r.toLowerCase())
      return r;
  return null;
}
const _e = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Sn = (e) => !Te(e) && e !== _e;
function ft() {
  const { caseless: e, skipUndefined: t } = Sn(this) && this || {}, n = {}, s = (r, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const a = e && Rn(n, o) || o;
    Ke(n[a]) && Ke(r) ? n[a] = ft(n[a], r) : Ke(r) ? n[a] = ft({}, r) : je(r) ? n[a] = r.slice() : (!t || !Te(r)) && (n[a] = r);
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ue(arguments[r], s);
  return n;
}
const Vs = (e, t, n, { allOwnKeys: s } = {}) => (Ue(
  t,
  (r, o) => {
    n && te(r) ? Object.defineProperty(e, o, {
      value: wn(r, n),
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
), e), Ks = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ys = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Xs = (e, t, n, s) => {
  let r, o, a;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      a = r[o], (!s || s(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = n !== !1 && wt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Gs = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, Zs = (e) => {
  if (!e) return null;
  if (je(e)) return e;
  let t = e.length;
  if (!_n(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Qs = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && wt(Uint8Array)), er = (e, t) => {
  const s = (e && e[Ze]).call(e);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, tr = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, nr = de("HTMLFormElement"), sr = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, s, r) {
  return s.toUpperCase() + r;
}), Ut = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), rr = de("RegExp"), En = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  Ue(n, (r, o) => {
    let a;
    (a = t(r, o, e)) !== !1 && (s[o] = a || r);
  }), Object.defineProperties(e, s);
}, or = (e) => {
  En(e, (t, n) => {
    if (te(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if (te(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ar = (e, t) => {
  const n = {}, s = (r) => {
    r.forEach((o) => {
      n[o] = !0;
    });
  };
  return je(e) ? s(e) : s(String(e).split(t)), n;
}, ir = () => {
}, cr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function lr(e) {
  return !!(e && te(e.append) && e[bn] === "FormData" && e[Ze]);
}
const ur = (e) => {
  const t = new Array(10), n = (s, r) => {
    if (De(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (Le(s))
        return s;
      if (!("toJSON" in s)) {
        t[r] = s;
        const o = je(s) ? [] : {};
        return Ue(s, (a, i) => {
          const m = n(a, r + 1);
          !Te(m) && (o[i] = m);
        }), t[r] = void 0, o;
      }
    }
    return s;
  };
  return n(e, 0);
}, dr = de("AsyncFunction"), fr = (e) => e && (De(e) || te(e)) && te(e.then) && te(e.catch), Tn = ((e, t) => e ? setImmediate : t ? ((n, s) => (_e.addEventListener(
  "message",
  ({ source: r, data: o }) => {
    r === _e && o === n && s.length && s.shift()();
  },
  !1
), (r) => {
  s.push(r), _e.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", te(_e.postMessage)), pr = typeof queueMicrotask < "u" ? queueMicrotask.bind(_e) : typeof process < "u" && process.nextTick || Tn, mr = (e) => e != null && te(e[Ze]), f = {
  isArray: je,
  isArrayBuffer: xn,
  isBuffer: Le,
  isFormData: $s,
  isArrayBufferView: Ns,
  isString: Os,
  isNumber: _n,
  isBoolean: Cs,
  isObject: De,
  isPlainObject: Ke,
  isEmptyObject: As,
  isReadableStream: Ws,
  isRequest: qs,
  isResponse: zs,
  isHeaders: Hs,
  isUndefined: Te,
  isDate: ks,
  isFile: Ps,
  isReactNativeBlob: Fs,
  isReactNative: Ms,
  isBlob: Ls,
  isRegExp: rr,
  isFunction: te,
  isStream: Us,
  isURLSearchParams: Bs,
  isTypedArray: Qs,
  isFileList: Ds,
  forEach: Ue,
  merge: ft,
  extend: Vs,
  trim: Js,
  stripBOM: Ks,
  inherits: Ys,
  toFlatObject: Xs,
  kindOf: Qe,
  kindOfTest: de,
  endsWith: Gs,
  toArray: Zs,
  forEachEntry: er,
  matchAll: tr,
  isHTMLForm: nr,
  hasOwnProperty: Ut,
  hasOwnProp: Ut,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: En,
  freezeMethods: or,
  toObjectSet: ar,
  toCamelCase: sr,
  noop: ir,
  toFiniteNumber: cr,
  findKey: Rn,
  global: _e,
  isContextDefined: Sn,
  isSpecCompliantForm: lr,
  toJSONObject: ur,
  isAsyncFn: dr,
  isThenable: fr,
  setImmediate: Tn,
  asap: pr,
  isIterable: mr
};
let v = class jn extends Error {
  static from(t, n, s, r, o, a) {
    const i = new jn(t.message, n || t.code, s, r, o);
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
v.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
v.ERR_BAD_OPTION = "ERR_BAD_OPTION";
v.ECONNABORTED = "ECONNABORTED";
v.ETIMEDOUT = "ETIMEDOUT";
v.ERR_NETWORK = "ERR_NETWORK";
v.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
v.ERR_DEPRECATED = "ERR_DEPRECATED";
v.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
v.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
v.ERR_CANCELED = "ERR_CANCELED";
v.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
v.ERR_INVALID_URL = "ERR_INVALID_URL";
const hr = null;
function pt(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function vn(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ct(e, t, n) {
  return e ? e.concat(t).map(function(r, o) {
    return r = vn(r), !n && o ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function gr(e) {
  return f.isArray(e) && !e.some(pt);
}
const yr = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function tt(e, t, n) {
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
    function(g, y) {
      return !f.isUndefined(y[g]);
    }
  );
  const s = n.metaTokens, r = n.visitor || l, o = n.dots, a = n.indexes, m = (n.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(r))
    throw new TypeError("visitor must be a function");
  function p(d) {
    if (d === null) return "";
    if (f.isDate(d))
      return d.toISOString();
    if (f.isBoolean(d))
      return d.toString();
    if (!m && f.isBlob(d))
      throw new v("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(d) || f.isTypedArray(d) ? m && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, g, y) {
    let _ = d;
    if (f.isReactNative(t) && f.isReactNativeBlob(d))
      return t.append(ct(y, g, o), p(d)), !1;
    if (d && !y && typeof d == "object") {
      if (f.endsWith(g, "{}"))
        g = s ? g : g.slice(0, -2), d = JSON.stringify(d);
      else if (f.isArray(d) && gr(d) || (f.isFileList(d) || f.endsWith(g, "[]")) && (_ = f.toArray(d)))
        return g = vn(g), _.forEach(function(T, N) {
          !(f.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? ct([g], N, o) : a === null ? g : g + "[]",
            p(T)
          );
        }), !1;
    }
    return pt(d) ? !0 : (t.append(ct(y, g, o), p(d)), !1);
  }
  const u = [], w = Object.assign(yr, {
    defaultVisitor: l,
    convertValue: p,
    isVisitable: pt
  });
  function x(d, g) {
    if (!f.isUndefined(d)) {
      if (u.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      u.push(d), f.forEach(d, function(_, j) {
        (!(f.isUndefined(_) || _ === null) && r.call(t, _, f.isString(j) ? j.trim() : j, g, w)) === !0 && x(_, g ? g.concat(j) : [j]);
      }), u.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return x(e), t;
}
function It(e) {
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
function bt(e, t) {
  this._pairs = [], e && tt(e, this, t);
}
const Nn = bt.prototype;
Nn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Nn.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, It);
  } : It;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function wr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function On(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || wr, r = f.isFunction(n) ? {
    serialize: n
  } : n, o = r && r.serialize;
  let a;
  if (o ? a = o(t, r) : a = f.isURLSearchParams(t) ? t.toString() : new bt(t, r).toString(s), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class $t {
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
const xt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, br = typeof URLSearchParams < "u" ? URLSearchParams : bt, xr = typeof FormData < "u" ? FormData : null, _r = typeof Blob < "u" ? Blob : null, Rr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: br,
    FormData: xr,
    Blob: _r
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, _t = typeof window < "u" && typeof document < "u", mt = typeof navigator == "object" && navigator || void 0, Sr = _t && (!mt || ["ReactNative", "NativeScript", "NS"].indexOf(mt.product) < 0), Er = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Tr = _t && window.location.href || "http://localhost", jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: _t,
  hasStandardBrowserEnv: Sr,
  hasStandardBrowserWebWorkerEnv: Er,
  navigator: mt,
  origin: Tr
}, Symbol.toStringTag, { value: "Module" })), X = {
  ...jr,
  ...Rr
};
function vr(e, t) {
  return tt(e, new X.classes.URLSearchParams(), {
    visitor: function(n, s, r, o) {
      return X.isNode && f.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Nr(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Or(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const r = n.length;
  let o;
  for (s = 0; s < r; s++)
    o = n[s], t[o] = e[o];
  return t;
}
function Cn(e) {
  function t(n, s, r, o) {
    let a = n[o++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), m = o >= n.length;
    return a = !a && f.isArray(r) ? r.length : a, m ? (f.hasOwnProp(r, a) ? r[a] = [r[a], s] : r[a] = s, !i) : ((!r[a] || !f.isObject(r[a])) && (r[a] = []), t(n, s, r[a], o) && f.isArray(r[a]) && (r[a] = Or(r[a])), !i);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (s, r) => {
      t(Nr(s), r, n, 0);
    }), n;
  }
  return null;
}
function Cr(e, t, n) {
  if (f.isString(e))
    try {
      return (t || JSON.parse)(e), f.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const Ie = {
  transitional: xt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const s = n.getContentType() || "", r = s.indexOf("application/json") > -1, o = f.isObject(t);
      if (o && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
        return r ? JSON.stringify(Cn(t)) : t;
      if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t) || f.isReadableStream(t))
        return t;
      if (f.isArrayBufferView(t))
        return t.buffer;
      if (f.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (o) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return vr(t, this.formSerializer).toString();
        if ((i = f.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
          const m = this.env && this.env.FormData;
          return tt(
            i ? { "files[]": t } : t,
            m && new m(),
            this.formSerializer
          );
        }
      }
      return o || r ? (n.setContentType("application/json", !1), Cr(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || Ie.transitional, s = n && n.forcedJSONParsing, r = this.responseType === "json";
      if (f.isResponse(t) || f.isReadableStream(t))
        return t;
      if (t && f.isString(t) && (s && !this.responseType || r)) {
        const a = !(n && n.silentJSONParsing) && r;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (i) {
          if (a)
            throw i.name === "SyntaxError" ? v.from(i, v.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: X.classes.FormData,
    Blob: X.classes.Blob
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
  Ie.headers[e] = {};
});
const Ar = f.toObjectSet([
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
]), kr = (e) => {
  const t = {};
  let n, s, r;
  return e && e.split(`
`).forEach(function(a) {
    r = a.indexOf(":"), n = a.substring(0, r).trim().toLowerCase(), s = a.substring(r + 1).trim(), !(!n || t[n] && Ar[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Bt = Symbol("internals");
function Ae(e) {
  return e && String(e).trim().toLowerCase();
}
function Ye(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Ye) : String(e);
}
function Pr(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const Fr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function lt(e, t, n, s, r) {
  if (f.isFunction(s))
    return s.call(this, t, n);
  if (r && (t = n), !!f.isString(t)) {
    if (f.isString(s))
      return t.indexOf(s) !== -1;
    if (f.isRegExp(s))
      return s.test(t);
  }
}
function Mr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function Lr(e, t) {
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
let ne = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function o(i, m, p) {
      const l = Ae(m);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const u = f.findKey(r, l);
      (!u || r[u] === void 0 || p === !0 || p === void 0 && r[u] !== !1) && (r[u || m] = Ye(i));
    }
    const a = (i, m) => f.forEach(i, (p, l) => o(p, l, m));
    if (f.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (f.isString(t) && (t = t.trim()) && !Fr(t))
      a(kr(t), n);
    else if (f.isObject(t) && f.isIterable(t)) {
      let i = {}, m, p;
      for (const l of t) {
        if (!f.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        i[p = l[0]] = (m = i[p]) ? f.isArray(m) ? [...m, l[1]] : [m, l[1]] : l[1];
      }
      a(i, n);
    } else
      t != null && o(n, t, s);
    return this;
  }
  get(t, n) {
    if (t = Ae(t), t) {
      const s = f.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n)
          return r;
        if (n === !0)
          return Pr(r);
        if (f.isFunction(n))
          return n.call(this, r, s);
        if (f.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ae(t), t) {
      const s = f.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || lt(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function o(a) {
      if (a = Ae(a), a) {
        const i = f.findKey(s, a);
        i && (!n || lt(s, s[i], i, n)) && (delete s[i], r = !0);
      }
    }
    return f.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, r = !1;
    for (; s--; ) {
      const o = n[s];
      (!t || lt(this, this[o], o, t, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, s = {};
    return f.forEach(this, (r, o) => {
      const a = f.findKey(s, o);
      if (a) {
        n[a] = Ye(r), delete n[o];
        return;
      }
      const i = t ? Mr(o) : String(o).trim();
      i !== o && delete n[o], n[i] = Ye(r), s[i] = !0;
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
    const s = (this[Bt] = this[Bt] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(a) {
      const i = Ae(a);
      s[i] || (Lr(r, a), s[i] = !0);
    }
    return f.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
ne.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
f.reduceDescriptors(ne.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
f.freezeMethods(ne);
function ut(e, t) {
  const n = this || Ie, s = t || n, r = ne.from(s.headers);
  let o = s.data;
  return f.forEach(e, function(i) {
    o = i.call(n, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function An(e) {
  return !!(e && e.__CANCEL__);
}
let $e = class extends v {
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
    super(t ?? "canceled", v.ERR_CANCELED, n, s), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function kn(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(
    new v(
      "Request failed with status code " + n.status,
      [v.ERR_BAD_REQUEST, v.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    )
  );
}
function Dr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ur(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let r = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(m) {
    const p = Date.now(), l = s[o];
    a || (a = p), n[r] = m, s[r] = p;
    let u = o, w = 0;
    for (; u !== r; )
      w += n[u++], u = u % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), p - a < t)
      return;
    const x = l && p - l;
    return x ? Math.round(w * 1e3 / x) : void 0;
  };
}
function Ir(e, t) {
  let n = 0, s = 1e3 / t, r, o;
  const a = (p, l = Date.now()) => {
    n = l, r = null, o && (clearTimeout(o), o = null), e(...p);
  };
  return [(...p) => {
    const l = Date.now(), u = l - n;
    u >= s ? a(p, l) : (r = p, o || (o = setTimeout(() => {
      o = null, a(r);
    }, s - u)));
  }, () => r && a(r)];
}
const Ge = (e, t, n = 3) => {
  let s = 0;
  const r = Ur(50, 250);
  return Ir((o) => {
    const a = o.loaded, i = o.lengthComputable ? o.total : void 0, m = a - s, p = r(m), l = a <= i;
    s = a;
    const u = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: m,
      rate: p || void 0,
      estimated: p && i && l ? (i - a) / p : void 0,
      event: o,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(u);
  }, n);
}, Wt = (e, t) => {
  const n = e != null;
  return [
    (s) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: s
    }),
    t[1]
  ];
}, qt = (e) => (...t) => f.asap(() => e(...t)), $r = X.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, X.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(X.origin),
  X.navigator && /(msie|trident)/i.test(X.navigator.userAgent)
) : () => !0, Br = X.hasStandardBrowserEnv ? (
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
function Wr(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function qr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Pn(e, t, n) {
  let s = !Wr(t);
  return e && (s || n == !1) ? qr(e, t) : t;
}
const zt = (e) => e instanceof ne ? { ...e } : e;
function Se(e, t) {
  t = t || {};
  const n = {};
  function s(p, l, u, w) {
    return f.isPlainObject(p) && f.isPlainObject(l) ? f.merge.call({ caseless: w }, p, l) : f.isPlainObject(l) ? f.merge({}, l) : f.isArray(l) ? l.slice() : l;
  }
  function r(p, l, u, w) {
    if (f.isUndefined(l)) {
      if (!f.isUndefined(p))
        return s(void 0, p, u, w);
    } else return s(p, l, u, w);
  }
  function o(p, l) {
    if (!f.isUndefined(l))
      return s(void 0, l);
  }
  function a(p, l) {
    if (f.isUndefined(l)) {
      if (!f.isUndefined(p))
        return s(void 0, p);
    } else return s(void 0, l);
  }
  function i(p, l, u) {
    if (u in t)
      return s(p, l);
    if (u in e)
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
    headers: (p, l, u) => r(zt(p), zt(l), u, !0)
  };
  return f.forEach(Object.keys({ ...e, ...t }), function(l) {
    if (l === "__proto__" || l === "constructor" || l === "prototype") return;
    const u = f.hasOwnProp(m, l) ? m[l] : r, w = u(e[l], t[l], l);
    f.isUndefined(w) && u !== i || (n[l] = w);
  }), n;
}
const Fn = (e) => {
  const t = Se({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: o, headers: a, auth: i } = t;
  if (t.headers = a = ne.from(a), t.url = On(
    Pn(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), i && a.set(
    "Authorization",
    "Basic " + btoa(
      (i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : "")
    )
  ), f.isFormData(n)) {
    if (X.hasStandardBrowserEnv || X.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (f.isFunction(n.getHeaders)) {
      const m = n.getHeaders(), p = ["content-type", "content-length"];
      Object.entries(m).forEach(([l, u]) => {
        p.includes(l.toLowerCase()) && a.set(l, u);
      });
    }
  }
  if (X.hasStandardBrowserEnv && (s && f.isFunction(s) && (s = s(t)), s || s !== !1 && $r(t.url))) {
    const m = r && o && Br.read(o);
    m && a.set(r, m);
  }
  return t;
}, zr = typeof XMLHttpRequest < "u", Hr = zr && function(e) {
  return new Promise(function(n, s) {
    const r = Fn(e);
    let o = r.data;
    const a = ne.from(r.headers).normalize();
    let { responseType: i, onUploadProgress: m, onDownloadProgress: p } = r, l, u, w, x, d;
    function g() {
      x && x(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
    }
    let y = new XMLHttpRequest();
    y.open(r.method.toUpperCase(), r.url, !0), y.timeout = r.timeout;
    function _() {
      if (!y)
        return;
      const T = ne.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), O = {
        data: !i || i === "text" || i === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: T,
        config: e,
        request: y
      };
      kn(
        function(C) {
          n(C), g();
        },
        function(C) {
          s(C), g();
        },
        O
      ), y = null;
    }
    "onloadend" in y ? y.onloadend = _ : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, y.onabort = function() {
      y && (s(new v("Request aborted", v.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function(N) {
      const O = N && N.message ? N.message : "Network Error", D = new v(O, v.ERR_NETWORK, e, y);
      D.event = N || null, s(D), y = null;
    }, y.ontimeout = function() {
      let N = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const O = r.transitional || xt;
      r.timeoutErrorMessage && (N = r.timeoutErrorMessage), s(
        new v(
          N,
          O.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
          e,
          y
        )
      ), y = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in y && f.forEach(a.toJSON(), function(N, O) {
      y.setRequestHeader(O, N);
    }), f.isUndefined(r.withCredentials) || (y.withCredentials = !!r.withCredentials), i && i !== "json" && (y.responseType = r.responseType), p && ([w, d] = Ge(p, !0), y.addEventListener("progress", w)), m && y.upload && ([u, x] = Ge(m), y.upload.addEventListener("progress", u), y.upload.addEventListener("loadend", x)), (r.cancelToken || r.signal) && (l = (T) => {
      y && (s(!T || T.type ? new $e(null, e, y) : T), y.abort(), y = null);
    }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
    const j = Dr(r.url);
    if (j && X.protocols.indexOf(j) === -1) {
      s(
        new v(
          "Unsupported protocol " + j + ":",
          v.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    y.send(o || null);
  });
}, Jr = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let s = new AbortController(), r;
    const o = function(p) {
      if (!r) {
        r = !0, i();
        const l = p instanceof Error ? p : this.reason;
        s.abort(
          l instanceof v ? l : new $e(l instanceof Error ? l.message : l)
        );
      }
    };
    let a = t && setTimeout(() => {
      a = null, o(new v(`timeout of ${t}ms exceeded`, v.ETIMEDOUT));
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
}, Vr = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, r;
  for (; s < n; )
    r = s + t, yield e.slice(s, r), s = r;
}, Kr = async function* (e, t) {
  for await (const n of Yr(e))
    yield* Vr(n, t);
}, Yr = async function* (e) {
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
}, Ht = (e, t, n, s) => {
  const r = Kr(e, t);
  let o = 0, a, i = (m) => {
    a || (a = !0, s && s(m));
  };
  return new ReadableStream(
    {
      async pull(m) {
        try {
          const { done: p, value: l } = await r.next();
          if (p) {
            i(), m.close();
            return;
          }
          let u = l.byteLength;
          if (n) {
            let w = o += u;
            n(w);
          }
          m.enqueue(new Uint8Array(l));
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
}, Jt = 64 * 1024, { isFunction: Je } = f, Xr = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(f.global), { ReadableStream: Vt, TextEncoder: Kt } = f.global, Yt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Gr = (e) => {
  e = f.merge.call(
    {
      skipUndefined: !0
    },
    Xr,
    e
  );
  const { fetch: t, Request: n, Response: s } = e, r = t ? Je(t) : typeof fetch == "function", o = Je(n), a = Je(s);
  if (!r)
    return !1;
  const i = r && Je(Vt), m = r && (typeof Kt == "function" ? /* @__PURE__ */ ((d) => (g) => d.encode(g))(new Kt()) : async (d) => new Uint8Array(await new n(d).arrayBuffer())), p = o && i && Yt(() => {
    let d = !1;
    const g = new n(X.origin, {
      body: new Vt(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !g;
  }), l = a && i && Yt(() => f.isReadableStream(new s("").body)), u = {
    stream: l && ((d) => d.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !u[d] && (u[d] = (g, y) => {
      let _ = g && g[d];
      if (_)
        return _.call(g);
      throw new v(
        `Response type '${d}' is not supported`,
        v.ERR_NOT_SUPPORT,
        y
      );
    });
  });
  const w = async (d) => {
    if (d == null)
      return 0;
    if (f.isBlob(d))
      return d.size;
    if (f.isSpecCompliantForm(d))
      return (await new n(X.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (f.isArrayBufferView(d) || f.isArrayBuffer(d))
      return d.byteLength;
    if (f.isURLSearchParams(d) && (d = d + ""), f.isString(d))
      return (await m(d)).byteLength;
  }, x = async (d, g) => {
    const y = f.toFiniteNumber(d.getContentLength());
    return y ?? w(g);
  };
  return async (d) => {
    let {
      url: g,
      method: y,
      data: _,
      signal: j,
      cancelToken: T,
      timeout: N,
      onDownloadProgress: O,
      onUploadProgress: D,
      responseType: C,
      headers: W,
      withCredentials: I = "same-origin",
      fetchOptions: J
    } = Fn(d), A = t || fetch;
    C = C ? (C + "").toLowerCase() : "text";
    let $ = Jr(
      [j, T && T.toAbortSignal()],
      N
    ), K = null;
    const U = $ && $.unsubscribe && (() => {
      $.unsubscribe();
    });
    let re;
    try {
      if (D && p && y !== "get" && y !== "head" && (re = await x(W, _)) !== 0) {
        let h = new n(g, {
          method: "POST",
          body: _,
          duplex: "half"
        }), E;
        if (f.isFormData(_) && (E = h.headers.get("content-type")) && W.setContentType(E), h.body) {
          const [k, F] = Wt(
            re,
            Ge(qt(D))
          );
          _ = Ht(h.body, Jt, k, F);
        }
      }
      f.isString(I) || (I = I ? "include" : "omit");
      const P = o && "credentials" in n.prototype, Q = {
        ...J,
        signal: $,
        method: y.toUpperCase(),
        headers: W.normalize().toJSON(),
        body: _,
        duplex: "half",
        credentials: P ? I : void 0
      };
      K = o && new n(g, Q);
      let H = await (o ? A(K, J) : A(g, Q));
      const se = l && (C === "stream" || C === "response");
      if (l && (O || se && U)) {
        const h = {};
        ["status", "statusText", "headers"].forEach((oe) => {
          h[oe] = H[oe];
        });
        const E = f.toFiniteNumber(H.headers.get("content-length")), [k, F] = O && Wt(
          E,
          Ge(qt(O), !0)
        ) || [];
        H = new s(
          Ht(H.body, Jt, k, () => {
            F && F(), U && U();
          }),
          h
        );
      }
      C = C || "text";
      let V = await u[f.findKey(u, C) || "text"](
        H,
        d
      );
      return !se && U && U(), await new Promise((h, E) => {
        kn(h, E, {
          data: V,
          headers: ne.from(H.headers),
          status: H.status,
          statusText: H.statusText,
          config: d,
          request: K
        });
      });
    } catch (P) {
      throw U && U(), P && P.name === "TypeError" && /Load failed|fetch/i.test(P.message) ? Object.assign(
        new v(
          "Network Error",
          v.ERR_NETWORK,
          d,
          K,
          P && P.response
        ),
        {
          cause: P.cause || P
        }
      ) : v.from(P, P && P.code, d, K, P && P.response);
    }
  };
}, Zr = /* @__PURE__ */ new Map(), Mn = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: s, Response: r } = t, o = [s, r, n];
  let a = o.length, i = a, m, p, l = Zr;
  for (; i--; )
    m = o[i], p = l.get(m), p === void 0 && l.set(m, p = i ? /* @__PURE__ */ new Map() : Gr(t)), l = p;
  return p;
};
Mn();
const Rt = {
  http: hr,
  xhr: Hr,
  fetch: {
    get: Mn
  }
};
f.forEach(Rt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Xt = (e) => `- ${e}`, Qr = (e) => f.isFunction(e) || e === null || e === !1;
function eo(e, t) {
  e = f.isArray(e) ? e : [e];
  const { length: n } = e;
  let s, r;
  const o = {};
  for (let a = 0; a < n; a++) {
    s = e[a];
    let i;
    if (r = s, !Qr(s) && (r = Rt[(i = String(s)).toLowerCase()], r === void 0))
      throw new v(`Unknown adapter '${i}'`);
    if (r && (f.isFunction(r) || (r = r.get(t))))
      break;
    o[i || "#" + a] = r;
  }
  if (!r) {
    const a = Object.entries(o).map(
      ([m, p]) => `adapter ${m} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = n ? a.length > 1 ? `since :
` + a.map(Xt).join(`
`) : " " + Xt(a[0]) : "as no adapter specified";
    throw new v(
      "There is no suitable adapter to dispatch the request " + i,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
const Ln = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: eo,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Rt
};
function dt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new $e(null, e);
}
function Gt(e) {
  return dt(e), e.headers = ne.from(e.headers), e.data = ut.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ln.getAdapter(e.adapter || Ie.adapter, e)(e).then(
    function(s) {
      return dt(e), s.data = ut.call(e, e.transformResponse, s), s.headers = ne.from(s.headers), s;
    },
    function(s) {
      return An(s) || (dt(e), s && s.response && (s.response.data = ut.call(
        e,
        e.transformResponse,
        s.response
      ), s.response.headers = ne.from(s.response.headers))), Promise.reject(s);
    }
  );
}
const Dn = "1.13.6", nt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  nt[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Zt = {};
nt.transitional = function(t, n, s) {
  function r(o, a) {
    return "[Axios v" + Dn + "] Transitional option '" + o + "'" + a + (s ? ". " + s : "");
  }
  return (o, a, i) => {
    if (t === !1)
      throw new v(
        r(a, " has been removed" + (n ? " in " + n : "")),
        v.ERR_DEPRECATED
      );
    return n && !Zt[a] && (Zt[a] = !0, console.warn(
      r(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, i) : !0;
  };
};
nt.spelling = function(t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function to(e, t, n) {
  if (typeof e != "object")
    throw new v("options must be an object", v.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const o = s[r], a = t[o];
    if (a) {
      const i = e[o], m = i === void 0 || a(i, o, e);
      if (m !== !0)
        throw new v(
          "option " + o + " must be " + m,
          v.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new v("Unknown option " + o, v.ERR_BAD_OPTION);
  }
}
const Xe = {
  assertOptions: to,
  validators: nt
}, ie = Xe.validators;
let Re = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new $t(),
      response: new $t()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Se(this.defaults, n);
    const { transitional: s, paramsSerializer: r, headers: o } = n;
    s !== void 0 && Xe.assertOptions(
      s,
      {
        silentJSONParsing: ie.transitional(ie.boolean),
        forcedJSONParsing: ie.transitional(ie.boolean),
        clarifyTimeoutError: ie.transitional(ie.boolean),
        legacyInterceptorReqResOrdering: ie.transitional(ie.boolean)
      },
      !1
    ), r != null && (f.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : Xe.assertOptions(
      r,
      {
        encode: ie.function,
        serialize: ie.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Xe.assertOptions(
      n,
      {
        baseUrl: ie.spelling("baseURL"),
        withXsrfToken: ie.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && f.merge(o.common, o[n.method]);
    o && f.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (d) => {
      delete o[d];
    }), n.headers = ne.concat(a, o);
    const i = [];
    let m = !0;
    this.interceptors.request.forEach(function(g) {
      if (typeof g.runWhen == "function" && g.runWhen(n) === !1)
        return;
      m = m && g.synchronous;
      const y = n.transitional || xt;
      y && y.legacyInterceptorReqResOrdering ? i.unshift(g.fulfilled, g.rejected) : i.push(g.fulfilled, g.rejected);
    });
    const p = [];
    this.interceptors.response.forEach(function(g) {
      p.push(g.fulfilled, g.rejected);
    });
    let l, u = 0, w;
    if (!m) {
      const d = [Gt.bind(this), void 0];
      for (d.unshift(...i), d.push(...p), w = d.length, l = Promise.resolve(n); u < w; )
        l = l.then(d[u++], d[u++]);
      return l;
    }
    w = i.length;
    let x = n;
    for (; u < w; ) {
      const d = i[u++], g = i[u++];
      try {
        x = d(x);
      } catch (y) {
        g.call(this, y);
        break;
      }
    }
    try {
      l = Gt.call(this, x);
    } catch (d) {
      return Promise.reject(d);
    }
    for (u = 0, w = p.length; u < w; )
      l = l.then(p[u++], p[u++]);
    return l;
  }
  getUri(t) {
    t = Se(this.defaults, t);
    const n = Pn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return On(n, t.params, t.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(t) {
  Re.prototype[t] = function(n, s) {
    return this.request(
      Se(s || {}, {
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
        Se(i || {}, {
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
  Re.prototype[t] = n(), Re.prototype[t + "Form"] = n(!0);
});
let no = class Un {
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
      s.reason || (s.reason = new $e(o, a, i), n(s.reason));
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
      token: new Un(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function so(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ro(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const ht = {
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
Object.entries(ht).forEach(([e, t]) => {
  ht[t] = e;
});
function In(e) {
  const t = new Re(e), n = wn(Re.prototype.request, t);
  return f.extend(n, Re.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return In(Se(e, r));
  }, n;
}
const z = In(Ie);
z.Axios = Re;
z.CanceledError = $e;
z.CancelToken = no;
z.isCancel = An;
z.VERSION = Dn;
z.toFormData = tt;
z.AxiosError = v;
z.Cancel = z.CanceledError;
z.all = function(t) {
  return Promise.all(t);
};
z.spread = so;
z.isAxiosError = ro;
z.mergeConfig = Se;
z.AxiosHeaders = ne;
z.formToJSON = (e) => Cn(f.isHTMLForm(e) ? new FormData(e) : e);
z.getAdapter = Ln.getAdapter;
z.HttpStatusCode = ht;
z.default = z;
const {
  Axios: So,
  AxiosError: Eo,
  CanceledError: To,
  isCancel: jo,
  CancelToken: vo,
  VERSION: No,
  all: Oo,
  Cancel: Co,
  isAxiosError: Ao,
  spread: ko,
  toFormData: Po,
  AxiosHeaders: Fo,
  HttpStatusCode: Mo,
  formToJSON: Lo,
  getAdapter: Do,
  mergeConfig: Uo
} = z, oo = (e, t) => {
  const n = z.create({
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
}, ao = (e, t, n) => {
  const s = ge(() => e ? oo(e, t) : null, [e, t]);
  return ge(() => s ? {
    getMessages: async (r, o) => ((await s.getMessages({ reference_doctype: r, reference_name: o })).message || []).map((m) => yt(m)).filter((m) => !!m),
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
        return !r && !o ? p.filter((u) => u.type === "whatsapp").reduce((u, w) => u + (w.counts || 0), 0) : ((i = p.find(
          (u) => u.type === "whatsapp" && (r && u.from === r || o && u.customer === o)
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
}, io = (e, t) => {
  if (!e) return null;
  const { showNotification: n, showWarning: s, showError: r } = t;
  return !n && !s && !r ? e : {
    ...e,
    showNotification: n || e.showNotification,
    showWarning: s || e.showWarning,
    showError: r || e.showError
  };
}, st = (e) => {
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
    refDoctype: l = "Contact",
    refName: u = "",
    links: w = [],
    activeLeadName: x,
    activeLeadDoctype: d,
    activeTaskName: g,
    activeTaskDoctype: y,
    isChatOpen: _,
    attach: j,
    preAddedMessages: T,
    showNotification: N,
    showWarning: O,
    showError: D
  } = e, C = ao(r, o, i), W = t || C, I = ge(
    () => io(W, { showNotification: N, showWarning: O, showError: D }),
    [W, N, O, D]
  ), J = ge(() => n ? {
    ...n,
    ...j !== void 0 ? { attach: j } : {},
    ...T !== void 0 ? { preAddedMessages: T } : {}
  } : {
    currentUser: i || "",
    currentUserFullName: m,
    doctype: l,
    refName: u || "",
    phone: p || "",
    links: w,
    activeLeadName: x,
    activeLeadDoctype: d,
    activeTaskName: g,
    activeTaskDoctype: y,
    isChatOpen: _,
    apiBaseUrl: r,
    ...j !== void 0 ? { attach: j } : {},
    ...T !== void 0 ? { preAddedMessages: T } : {}
  }, [
    n,
    i,
    m,
    l,
    u,
    p,
    w,
    _,
    r,
    j,
    T,
    x,
    d,
    g,
    y
  ]), A = ge(() => {
    if (a !== void 0)
      return { isConnected: a };
  }, [a]);
  return {
    apiAdapter: I,
    config: J,
    finalSocketAdapter: s || A
  };
}, co = () => {
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
    setSelectedTemplateText: l,
    setSelectedTemplateName: u,
    setSelectedTemplate: w,
    attachedFiles: x,
    templates: d,
    isLoadingTemplates: g,
    sendMessage: y,
    handleTemplateSelect: _,
    handleFileSelect: j,
    handleFileRemove: T,
    uploadFileMutation: N,
    composerMountKey: O
  } = yn(), { config: D } = Fe();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-chat-container", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header", children: [
        /* @__PURE__ */ c.jsx("div", { className: "whatsapp-header-avatar", children: /* @__PURE__ */ c.jsx(nn, { size: 20, color: "#008069" }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header-info", children: [
          /* @__PURE__ */ c.jsx("h4", { children: D.currentUserFullName || "WhatsApp Chat" }),
          /* @__PURE__ */ c.jsx("span", { className: s ? "connection-status connected" : "connection-status reconnecting", children: s ? "● Connected" : "○ Reconnecting..." })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(bs, { messages: e, isLoading: t, error: n }),
      /* @__PURE__ */ c.jsx(
        mn,
        {
          initialInputText: D.preAddedMessages ?? "",
          onSend: y,
          isLoading: t || r || N.isPending,
          isUploading: N.isPending,
          isSending: r,
          onTemplateClick: () => a(!0),
          templateText: i,
          selectedTemplateName: m,
          selectedTemplate: p,
          onClearTemplate: () => {
            u(void 0), l(void 0), w(void 0);
          },
          attachedFiles: x,
          onFileSelect: j,
          onFileRemove: T
        },
        O
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      Me,
      {
        open: o,
        onClose: () => a(!1),
        width: "700px",
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Select WhatsApp Template" }),
        children: /* @__PURE__ */ c.jsx(hn, { templates: d, onSelect: _, isLoading: g })
      }
    )
  ] });
}, lo = ({
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
  refDoctype: l = "Contact",
  refName: u = "",
  links: w = [],
  attach: x,
  preAddedMessages: d,
  showNotification: g,
  showWarning: y,
  showError: _
}) => {
  const { apiAdapter: j, config: T, finalSocketAdapter: N } = st({
    apiAdapter: e,
    config: t,
    socketAdapter: n,
    baseURL: o,
    token: a,
    socketConnected: r,
    currentUserEmail: i,
    currentUserFullName: m,
    phone: p,
    refDoctype: l,
    refName: u,
    links: w,
    isChatOpen: !0,
    // Standalone component assumes it is active/open if rendered
    attach: x,
    preAddedMessages: d,
    showNotification: g,
    showWarning: y,
    showError: _
  });
  return !j || !T ? null : /* @__PURE__ */ c.jsx(un, { apiAdapter: j, config: T, socketAdapter: N, socketPayload: s, children: /* @__PURE__ */ c.jsx(co, {}) });
}, uo = () => {
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
    setSelectedTemplate: l,
    attachedFiles: u,
    templates: w,
    isLoadingTemplates: x,
    sendMessage: d,
    handleTemplateSelect: g,
    handleFileSelect: y,
    handleFileRemove: _,
    uploadFileMutation: j,
    composerMountKey: T
  } = yn(), { config: N } = Fe();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-chat-container whatsapp-send-msg-only", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header", style: { borderRadius: "6px 6px 0 0", boxShadow: "none", borderBottom: "1px solid #DCE2E5" }, children: [
        /* @__PURE__ */ c.jsx("div", { className: "whatsapp-header-avatar", children: /* @__PURE__ */ c.jsx(nn, { size: 20, color: "#008069" }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header-info", children: [
          /* @__PURE__ */ c.jsx("h4", { children: N.currentUserFullName || "Send WhatsApp Message" }),
          /* @__PURE__ */ c.jsx("span", { className: t ? "connection-status connected" : "connection-status reconnecting", children: t ? "● Connected" : "○ Reconnecting..." })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(
        mn,
        {
          initialInputText: N.preAddedMessages ?? "",
          onSend: d,
          isLoading: e || n || j.isPending,
          isUploading: j.isPending,
          isSending: n,
          onTemplateClick: () => r(!0),
          templateText: o,
          selectedTemplateName: a,
          selectedTemplate: i,
          onClearTemplate: () => {
            p(void 0), m(void 0), l(void 0);
          },
          attachedFiles: u,
          onFileSelect: y,
          onFileRemove: _,
          style: { borderRadius: "0 0 6px 6px" }
        },
        T
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      Me,
      {
        open: s,
        onClose: () => r(!1),
        width: "700px",
        header: /* @__PURE__ */ c.jsx("h4", { className: "whatsapp-modal-header-title", children: "Select WhatsApp Template" }),
        children: /* @__PURE__ */ c.jsx(hn, { templates: w, onSelect: g, isLoading: x })
      }
    )
  ] });
}, fo = ({
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
  refDoctype: l = "Contact",
  refName: u = "",
  links: w = [],
  attach: x,
  preAddedMessages: d,
  showNotification: g,
  showWarning: y,
  showError: _
}) => {
  const { apiAdapter: j, config: T, finalSocketAdapter: N } = st({
    apiAdapter: e,
    config: t,
    socketAdapter: n,
    baseURL: o,
    token: a,
    socketConnected: r,
    currentUserEmail: i,
    currentUserFullName: m,
    phone: p,
    refDoctype: l,
    refName: u,
    links: w,
    isChatOpen: !0,
    attach: x,
    preAddedMessages: d,
    showNotification: g,
    showWarning: y,
    showError: _
  });
  return !j || !T ? null : /* @__PURE__ */ c.jsx(
    un,
    {
      apiAdapter: j,
      config: { ...T, isChatOpen: !0, preventHistoryFetch: !0 },
      socketAdapter: N,
      socketPayload: s,
      children: /* @__PURE__ */ c.jsx(uo, {})
    }
  );
}, Qt = /* @__PURE__ */ new Set(), Ve = /* @__PURE__ */ new Map(), po = 6e4;
function mo(e) {
  const t = e, n = t.message_id ? String(t.message_id) : "";
  return n ? `mid:${n}` : e.name ? `name:${String(e.name)}` : `fallback:${String(e.from ?? "")}|${String(e.creation ?? "")}|${String(e.message ?? "")}`;
}
function ho(e) {
  const t = Date.now();
  for (const [s, r] of Ve.entries())
    t - r > po && Ve.delete(s);
  const n = mo(e);
  return n ? Ve.has(n) ? !1 : (Ve.set(n, t), !0) : !0;
}
function go(e, t, n, s, r, o, a) {
  const i = He((d) => d.incomingData), m = He((d) => d.setIncomingData), p = He((d) => d.handleIncomingMessage), l = He((d) => d.clearContact), u = ue(null), w = ge(() => {
    if (!s && !r)
      return i.filter((g) => g.type === "whatsapp").reduce((g, y) => g + (y.counts || 0), 0);
    const d = i.find(
      (g) => g.type === "whatsapp" && (s && g.from === s || r && g.customer === r)
    );
    return (d == null ? void 0 : d.counts) ?? 0;
  }, [i, s, r]), x = ke(async () => {
    if (e.getIncomingCommunications)
      try {
        const d = await e.getIncomingCommunications(a || "");
        m(d);
      } catch (d) {
        console.error("Failed to fetch incoming communications:", d);
      }
    else
      try {
        await e.getUnreadCount(s || "", r || "");
      } catch (d) {
        console.error("Failed to fetch unread count:", d);
      }
  }, [e, s, r, m]);
  return ce(() => {
    x();
  }, [x]), ce(() => {
    o && l(s, r);
  }, [o, s, r, l]), ce(() => {
    if (!e) return;
    const d = e.onMessageSent;
    return e.onMessageSent = () => {
      x(), d && d();
    }, () => {
      e.onMessageSent && (e.onMessageSent = d);
    };
  }, [e, x]), ce(() => {
    const d = (g) => {
      if (!g || g.name === void 0) return;
      const y = g.status !== null && g.status !== void 0;
      if (g.is_outbound === 0 && !y && (p(g), !o && !Qt.has(g.name) && ho(g) && (Qt.add(g.name), e.showNotification))) {
        const _ = g.sender || g.from_name || "Customer";
        e.showNotification("WhatsApp", `New message received from ${_}`);
      }
    };
    if (t != null && t.onMessage) {
      const g = (y) => d(y);
      return t.onMessage(g), () => {
        var y;
        return (y = t.offMessage) == null ? void 0 : y.call(t, g);
      };
    }
    if (n && n.event === "whatsapp_message") {
      const g = n.message, y = String((g == null ? void 0 : g.name) ?? (g == null ? void 0 : g.message_id) ?? "");
      if (y && u.current === y)
        return;
      y && (u.current = y);
      const _ = yt(g);
      d(_);
    }
  }, [t, n, e, p, o]), w;
}
const Io = ({
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
  refDoctype: l = "Contact",
  refName: u = "",
  links: w = [],
  activeLeadName: x,
  activeLeadDoctype: d,
  activeTaskName: g,
  activeTaskDoctype: y,
  attach: _,
  preAddedMessages: j,
  buttonLabel: T,
  icon: N,
  btnClassName: O = "",
  modalSize: D = "1024px",
  variant: C = "default",
  isOpen: W,
  onOpen: I,
  onClose: J,
  showNotification: A,
  showWarning: $,
  showError: K
}) => {
  const [U, re] = Z(!1), P = W !== void 0 ? W : U, { apiAdapter: Q, config: H, finalSocketAdapter: se } = st({
    apiAdapter: e,
    config: t,
    socketAdapter: n,
    baseURL: s,
    token: r,
    socketConnected: a,
    currentUserEmail: i,
    currentUserFullName: m,
    phone: p,
    refDoctype: l,
    refName: u,
    links: w,
    activeLeadName: x,
    activeLeadDoctype: d,
    activeTaskName: g,
    activeTaskDoctype: y,
    isChatOpen: P,
    attach: _,
    preAddedMessages: j,
    showNotification: A,
    showWarning: $,
    showError: K
  }), V = go(
    Q,
    se,
    o,
    p,
    u || void 0,
    P,
    H == null ? void 0 : H.currentUser
  ), h = () => {
    W !== void 0 ? P ? J == null || J() : I == null || I() : re(!U);
  };
  return Q ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    C === "plain" ? /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: O,
        onClick: h,
        style: {
          position: "relative",
          ...typeof O == "string" && O.includes("button") ? {} : { border: "none", background: "none", cursor: "pointer", padding: 0 }
        },
        children: [
          N || T,
          V > 0 && /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-badge", style: { top: "-10px", right: "-10px" }, children: V })
        ]
      }
    ) : /* @__PURE__ */ c.jsxs("div", { className: `whatsapp-trigger-wrapper ${O}`, onClick: h, children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-trigger-icon-container", children: [
        N || /* @__PURE__ */ c.jsx(rn, { size: 20, color: "#175353" }),
        V > 0 && /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-badge", children: V })
      ] }),
      /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-label", children: T })
    ] }),
    /* @__PURE__ */ c.jsx(Me, { open: P, onClose: h, width: D, header: /* @__PURE__ */ c.jsx("h3", { className: "whatsapp-modal-header-title", children: "WhatsApp Chat" }), children: /* @__PURE__ */ c.jsx(
      lo,
      {
        apiAdapter: Q,
        config: H,
        socketAdapter: se,
        socketPayload: o,
        currentUserFullName: m,
        attach: _,
        preAddedMessages: j
      }
    ) })
  ] }) : null;
}, $o = ({
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
  refDoctype: l = "Contact",
  refName: u = "",
  links: w = [],
  activeLeadName: x,
  activeLeadDoctype: d,
  activeTaskName: g,
  activeTaskDoctype: y,
  attach: _,
  preAddedMessages: j,
  buttonLabel: T = "Send WhatsApp",
  icon: N,
  btnClassName: O = "",
  modalSize: D = "600px",
  variant: C = "default",
  isOpen: W,
  onOpen: I,
  onClose: J,
  showNotification: A,
  showWarning: $,
  showError: K
}) => {
  const [U, re] = Z(!1), P = W !== void 0 ? W : U, { apiAdapter: Q, config: H, finalSocketAdapter: se } = st({
    apiAdapter: e,
    config: t,
    socketAdapter: n,
    baseURL: s,
    token: r,
    socketConnected: a,
    currentUserEmail: i,
    currentUserFullName: m,
    phone: p,
    refDoctype: l,
    refName: u,
    links: w,
    activeLeadName: x,
    activeLeadDoctype: d,
    activeTaskName: g,
    activeTaskDoctype: y,
    isChatOpen: P,
    attach: _,
    preAddedMessages: j,
    showNotification: A,
    showWarning: $,
    showError: K
  }), V = () => {
    W !== void 0 ? P ? J == null || J() : I == null || I() : re(!U);
  };
  return Q ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    C === "plain" ? /* @__PURE__ */ c.jsx(
      "button",
      {
        className: O,
        onClick: V,
        style: {
          position: "relative",
          ...typeof O == "string" && O.includes("button") ? {} : { border: "none", background: "none", cursor: "pointer", padding: 0 }
        },
        children: N || T
      }
    ) : /* @__PURE__ */ c.jsxs("div", { className: `whatsapp-trigger-wrapper ${O}`, onClick: V, children: [
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-trigger-icon-container", children: N || /* @__PURE__ */ c.jsx(rn, { size: 20, color: "#175353" }) }),
      /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-label", children: T })
    ] }),
    /* @__PURE__ */ c.jsx(Me, { open: P, onClose: V, width: "780px", header: /* @__PURE__ */ c.jsx("h3", { className: "whatsapp-modal-header-title", children: "WhatsApp Chat" }), children: /* @__PURE__ */ c.jsx(
      fo,
      {
        apiAdapter: Q,
        config: H,
        socketAdapter: se,
        socketPayload: o,
        currentUserFullName: m,
        attach: _,
        preAddedMessages: j
      }
    ) })
  ] }) : null;
};
export {
  ys as WhatsAppMessageSkeleton,
  Rs as WhatsAppTemplateSkeleton,
  lo as WhatsappChat,
  un as WhatsappChatProvider,
  Io as WhatsappChatTrigger,
  co as WhatsappChatWidget,
  fo as WhatsappSendMessage,
  $o as WhatsappSendMessageTrigger,
  uo as WhatsappSendMessageWidget,
  go as useWhatsappBadgeCount,
  Fe as useWhatsappChatConfig,
  yn as useWhatsappWidgetLogic,
  me as useWhatsappWidgetZustand
};
