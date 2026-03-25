import Re, { useContext as It, createContext as $t, useRef as Ee, useMemo as ae, useEffect as J, forwardRef as _n, useImperativeHandle as Rn, useState as H, useCallback as Me } from "react";
import { WhatsappLogo as En, User as Sn, X as Tn, Paperclip as jn, FileText as On, PaperPlaneTilt as Nn, ArrowSquareOut as Cn, Check as vn, Checks as An, Warning as kn, Clock as Pn, Eye as Ln } from "@phosphor-icons/react";
import { useStore as Dn, createStore as Un, create as Mn } from "zustand";
import './index.css';var Pe = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function Fn() {
  if (gt) return be;
  gt = 1;
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
  return be.Fragment = t, be.jsx = n, be.jsxs = n, be;
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
var yt;
function In() {
  return yt || (yt = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === de ? null : h.displayName || h.name || null;
      if (typeof h == "string") return h;
      switch (h) {
        case y:
          return "Fragment";
        case A:
          return "Profiler";
        case S:
          return "StrictMode";
        case v:
          return "Suspense";
        case O:
          return "SuspenseList";
        case G:
          return "Activity";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case w:
            return "Portal";
          case C:
            return h.displayName || "Context";
          case N:
            return (h._context.displayName || "Context") + ".Consumer";
          case P:
            var E = h.render;
            return h = h.displayName, h || (h = E.displayName || E.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case V:
            return E = h.displayName || null, E !== null ? E : e(h.type) || "Memo";
          case F:
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
        var _ = E.error, x = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return _.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), t(h);
      }
    }
    function s(h) {
      if (h === y) return "<>";
      if (typeof h == "object" && h !== null && h.$$typeof === F)
        return "<...>";
      try {
        var E = e(h);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var h = K.A;
      return h === null ? null : h.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(h) {
      if (Z.call(h, "key")) {
        var E = Object.getOwnPropertyDescriptor(h, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return h.key !== void 0;
    }
    function i(h, E) {
      function _() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: _,
        configurable: !0
      });
    }
    function m() {
      var h = e(this.type);
      return Q[h] || (Q[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function d(h, E, _, x, j, L) {
      var T = _.ref;
      return h = {
        $$typeof: f,
        type: h,
        key: E,
        props: _,
        _owner: x
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(h, "ref", {
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
        value: j
      }), Object.defineProperty(h, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function u(h, E, _, x, j, L) {
      var T = E.children;
      if (T !== void 0)
        if (x)
          if (q(T)) {
            for (x = 0; x < T.length; x++)
              p(T[x]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(T);
      if (Z.call(E, "key")) {
        T = e(h);
        var k = Object.keys(E).filter(function(pe) {
          return pe !== "key";
        });
        x = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", fe[T + x] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          T,
          k,
          T
        ), fe[T + x] = !0);
      }
      if (T = null, _ !== void 0 && (n(_), T = "" + _), a(E) && (n(E.key), T = "" + E.key), "key" in E) {
        _ = {};
        for (var z in E)
          z !== "key" && (_[z] = E[z]);
      } else _ = E;
      return T && i(
        _,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), d(
        h,
        T,
        _,
        r(),
        j,
        L
      );
    }
    function p(h) {
      g(h) ? h._store && (h._store.validated = 1) : typeof h == "object" && h !== null && h.$$typeof === F && (h._payload.status === "fulfilled" ? g(h._payload.value) && h._payload.value._store && (h._payload.value._store.validated = 1) : h._store && (h._store.validated = 1));
    }
    function g(h) {
      return typeof h == "object" && h !== null && h.$$typeof === f;
    }
    var b = Re, f = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), C = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), de = Symbol.for("react.client.reference"), K = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, q = Array.isArray, re = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(h) {
        return h();
      }
    };
    var M, Q = {}, D = b.react_stack_bottom_frame.bind(
      b,
      o
    )(), ee = re(s(o)), fe = {};
    xe.Fragment = y, xe.jsx = function(h, E, _) {
      var x = 1e4 > K.recentlyCreatedOwnerStacks++;
      return u(
        h,
        E,
        _,
        !1,
        x ? Error("react-stack-top-frame") : D,
        x ? re(s(h)) : ee
      );
    }, xe.jsxs = function(h, E, _) {
      var x = 1e4 > K.recentlyCreatedOwnerStacks++;
      return u(
        h,
        E,
        _,
        !0,
        x ? Error("react-stack-top-frame") : D,
        x ? re(s(h)) : ee
      );
    };
  })()), xe;
}
var wt;
function $n() {
  return wt || (wt = 1, process.env.NODE_ENV === "production" ? Pe.exports = Fn() : Pe.exports = In()), Pe.exports;
}
var c = $n();
const Bn = (e) => /* @__PURE__ */ c.jsx(Sn, { ...e }), Wn = (e) => /* @__PURE__ */ c.jsx(jn, { ...e }), qn = (e) => /* @__PURE__ */ c.jsx(Nn, { ...e }), nt = (e) => /* @__PURE__ */ c.jsx(Tn, { ...e }), zn = (e) => /* @__PURE__ */ c.jsx(Ln, { ...e }), bt = (e) => /* @__PURE__ */ c.jsx(An, { ...e }), xt = (e) => /* @__PURE__ */ c.jsx(vn, { ...e }), Hn = (e) => /* @__PURE__ */ c.jsx(Cn, { ...e }), Bt = (e) => /* @__PURE__ */ c.jsx(On, { ...e }), Jn = (e) => /* @__PURE__ */ c.jsx(Pn, { ...e }), Vn = (e) => /* @__PURE__ */ c.jsx(kn, { ...e }), Yn = (e) => /* @__PURE__ */ c.jsx(En, { ...e }), Wt = (e) => {
  if (!e) return "";
  try {
    return new Date(e).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}, qt = (e, t) => {
  if (t !== 1) return null;
  const n = (s) => ({
    size: 14,
    style: { color: s, marginLeft: "4px" }
  });
  switch (e) {
    case 5:
      return /* @__PURE__ */ c.jsx(Jn, { ...n("#999") });
    case 2:
      return /* @__PURE__ */ c.jsx(Vn, { ...n("#ff4444") });
    case 1:
      return /* @__PURE__ */ c.jsx(xt, { ...n("#999") });
    case 3:
      return /* @__PURE__ */ c.jsx(bt, { ...n("#999"), weight: "bold" });
    case 4:
      return /* @__PURE__ */ c.jsx(bt, { ...n("#53bdeb"), weight: "bold" });
    default:
      return /* @__PURE__ */ c.jsx(xt, { ...n("#999") });
  }
}, Kn = (e) => {
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
  return s < e.length && n.push(e.substring(s)), n.length > 0 ? /* @__PURE__ */ c.jsx(Re.Fragment, { children: n }) : e;
};
function Xn(e) {
  if (!e) return;
  const t = e.toLowerCase();
  if (t === "success" || t === "sent") return 1;
  if (t === "failed") return 2;
  if (t === "delivered") return 3;
  if (t === "read") return 4;
  const n = parseInt(e, 10);
  if (!isNaN(n) && n >= 1 && n <= 5) return n;
}
function zt(e) {
  var d;
  if (!(e != null && e.name)) return null;
  const t = e.type === "Outgoing";
  let n = Xn(e.status ?? void 0);
  n === void 0 && t && (n = 5);
  const s = e.message_type === "Template", r = e.message != null ? String(e.message) : void 0, o = r != null && r.trim() !== "" && r !== "Template message", a = s && !o && e.template ? e.template : r ?? e.template ?? "", i = (d = e.links) != null && d.length ? e.links.filter((u) => !!(u != null && u.button_label && (u != null && u.link))).map((u) => ({ button_label: u.button_label, link: u.link })) : void 0, m = e.from_name || e.profile_name;
  return {
    name: e.name,
    message: a,
    sender: m || (t ? "You" : "Customer"),
    creation: e.creation ?? (/* @__PURE__ */ new Date()).toISOString(),
    is_outbound: t ? 1 : 0,
    attach: e.attach ?? void 0,
    content_type: e.content_type ?? void 0,
    status: n,
    header: s ? e.header ?? void 0 : void 0,
    footer: s ? e.footer ?? void 0 : void 0,
    template_links: i != null && i.length ? i : void 0,
    message_type: e.message_type,
    header_type: s ? e.header_type ?? void 0 : void 0,
    sample: s ? e.sample ?? void 0 : void 0
  };
}
const Le = Mn((e) => ({
  incomingData: [],
  setIncomingData: (t) => e({ incomingData: t }),
  handleIncomingMessage: (t) => e((n) => {
    if (t.is_outbound === 1) return n;
    const s = [...n.incomingData], r = t.name, o = t.from || t.sender || "", a = t.reference_name || "";
    if (s.some((d) => {
      var u;
      return (u = d.names) == null ? void 0 : u.includes(r);
    })) return n;
    const m = s.findIndex(
      (d) => d.type === "whatsapp" && (o && d.from === o || a && d.customer === a)
    );
    return m !== -1 ? (s[m] = {
      ...s[m],
      counts: (s[m].counts || 0) + 1,
      names: [...s[m].names || [], r]
    }, { incomingData: s }) : n;
  }),
  clearContact: (t, n) => e((s) => ({ incomingData: s.incomingData.filter((o) => o.type !== "whatsapp" ? !0 : !(t && o.from === t || n && o.customer === n)) }))
})), Gn = () => Un((e) => ({
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
})), Ht = $t(void 0), Jt = $t(void 0), Zn = ({
  apiAdapter: e,
  config: t,
  socketAdapter: n,
  socketPayload: s,
  children: r
}) => {
  const [o] = Re.useState(() => Gn());
  return /* @__PURE__ */ c.jsx(Ht.Provider, { value: { apiAdapter: e, config: t, socketAdapter: n, socketPayload: s }, children: /* @__PURE__ */ c.jsx(Jt.Provider, { value: o, children: r }) });
}, st = () => {
  const e = It(Ht);
  if (!e) throw new Error("Missing WhatsappChatProvider");
  return e;
}, Vt = () => {
  const e = It(Jt);
  if (!e) throw new Error("Missing WhatsappChatProvider");
  return e;
}, se = (e) => {
  const t = Vt();
  return Dn(t, e);
};
function Qn(e) {
  return e.startsWith("/") ? e.slice(1) : e;
}
const Yt = ({
  header: e,
  message: t,
  footer: n,
  template_links: s,
  creation: r,
  is_outbound: o,
  status: a,
  header_type: i,
  sample: m,
  isPreview: d = !1
}) => {
  const { config: u } = st(), p = u.apiBaseUrl || "", g = m ? `${p}/${Qn(m)}` : void 0, b = i === "IMAGE" && g, f = i === "DOCUMENT" && g, w = !i || i === "TEXT";
  return /* @__PURE__ */ c.jsx("div", { className: "whatsapp-template-message-card", children: /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-template-card-inner", children: [
    b && /* @__PURE__ */ c.jsx(
      "a",
      {
        href: g,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "whatsapp-template-card-header-media whatsapp-template-card-header-image",
        title: "Open image in new tab",
        children: /* @__PURE__ */ c.jsx(
          "img",
          {
            src: g,
            alt: "Template header",
            className: "whatsapp-template-card-image"
          }
        )
      }
    ),
    f && /* @__PURE__ */ c.jsxs(
      "a",
      {
        href: g,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "whatsapp-template-card-header-media whatsapp-template-card-header-document",
        title: "Open document in new tab",
        children: [
          /* @__PURE__ */ c.jsx(Bt, { size: 24, color: "#e74c3c" }),
          /* @__PURE__ */ c.jsx("span", { children: (m == null ? void 0 : m.split("/").pop()) || "Untitled" })
        ]
      }
    ),
    w && e && /* @__PURE__ */ c.jsx("h4", { className: "whatsapp-template-card-header", children: e }),
    /* @__PURE__ */ c.jsx("p", { className: "whatsapp-template-card-body", children: t }),
    n && /* @__PURE__ */ c.jsx("p", { className: "whatsapp-template-card-footer", children: n }),
    s && s.length > 0 && /* @__PURE__ */ c.jsx("div", { className: "whatsapp-template-card-buttons", children: s.map((y, S) => /* @__PURE__ */ c.jsxs("a", { href: y.link, target: "_blank", rel: "noopener noreferrer", className: "whatsapp-template-card-button", children: [
      /* @__PURE__ */ c.jsx(Hn, { size: 16, color: "currentColor" }),
      /* @__PURE__ */ c.jsx("span", { children: y.button_label })
    ] }, S)) }),
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-template-card-meta", children: [
      /* @__PURE__ */ c.jsx("span", { children: Wt(r) }),
      !d && o === 1 && qt(a, o)
    ] })
  ] }) });
}, $ = ({ width: e, height: t, className: n, style: s }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: `whatsapp-skeleton ${n || ""}`,
    style: {
      width: e,
      height: t,
      ...s
    }
  }
), es = () => {
  const e = { marginBottom: 8 };
  return /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-message-list", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx($, { width: "140px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx($, { width: "60px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble sent", style: e, children: [
      /* @__PURE__ */ c.jsx($, { width: "100px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx($, { width: "55px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx($, { width: "180px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx($, { width: "60px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble sent", style: e, children: [
      /* @__PURE__ */ c.jsx($, { width: "120px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx($, { width: "55px", height: "0.75rem" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "message-bubble received", style: e, children: [
      /* @__PURE__ */ c.jsx($, { width: "90px", height: "1rem", style: { marginBottom: 8 } }),
      /* @__PURE__ */ c.jsx($, { width: "60px", height: "0.75rem" })
    ] })
  ] });
};
function ts(e, t) {
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
const ns = ({
  messages: e,
  isLoading: t = !1,
  error: n = null,
  activity: s,
  icon: r,
  showIcon: o = !1,
  enableScroll: a = !0
}) => {
  const { config: i } = st(), m = i.apiBaseUrl || "", d = Ee(null), u = ae(() => {
    var p;
    if (s) {
      const g = s.creation || (s.date && s.time ? `${s.date} ${s.time}` : (/* @__PURE__ */ new Date()).toISOString()), b = s.type === "Outgoing" || s.is_outbound === 1, f = ((p = s.links) == null ? void 0 : p.map((w) => ({
        button_label: w.button_label ?? "",
        link: w.link ?? w.website_url ?? ""
      }))) ?? void 0;
      return [
        {
          name: s.name || `activity-${g}`,
          message: s.message || "",
          sender: s.type === "Outgoing" ? "You" : "Customer",
          creation: g,
          is_outbound: b ? 1 : 0,
          attach: s.attach,
          content_type: s.content_type,
          status: ts(s.status, b),
          message_type: s.message_type,
          header: s.header,
          footer: s.footer,
          template_links: f != null && f.filter((w) => w.link || w.button_label).length ? f : void 0,
          header_type: s.header_type,
          sample: s.sample
        }
      ];
    }
    return e || [];
  }, [s, e]);
  return J(() => {
    var p;
    a && ((p = d.current) == null || p.scrollIntoView({ behavior: "smooth" }));
  }, [u, a]), t ? /* @__PURE__ */ c.jsx(es, {}) : n ? /* @__PURE__ */ c.jsx("div", { className: "whatsapp-message-list", style: { textAlign: "center", color: "#c53030", padding: "20px" }, children: n }) : /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-message-list", children: [
    u.length === 0 && /* @__PURE__ */ c.jsx("div", { style: { textAlign: "center", color: "#888", padding: "20px" }, children: "No messages yet. Start the conversation!" }),
    u.map((p, g) => {
      const b = p, f = b.attach, w = b.content_type;
      return b.message_type === "Template" ? /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: `message-bubble ${p.is_outbound ? "sent" : "received"} message-bubble--template`,
          children: [
            o && r && /* @__PURE__ */ c.jsx("div", { className: "message-icon-wrapper", children: r }),
            /* @__PURE__ */ c.jsx(
              Yt,
              {
                header: b.header,
                message: p.message,
                footer: b.footer,
                template_links: b.template_links,
                creation: p.creation,
                is_outbound: p.is_outbound,
                status: p.status,
                header_type: b.header_type,
                sample: b.sample
              }
            )
          ]
        },
        `${p.name}-${g}`
      ) : /* @__PURE__ */ c.jsxs("div", { className: `message-bubble ${p.is_outbound ? "sent" : "received"}`, children: [
        o && r && /* @__PURE__ */ c.jsx("div", { className: "message-icon-wrapper", children: r }),
        /* @__PURE__ */ c.jsxs("div", { className: "message-content", children: [
          Kn(p.message) || p.message,
          f && /* @__PURE__ */ c.jsx("div", { className: "message-attachment", children: w === "image" ? /* @__PURE__ */ c.jsx(
            "img",
            {
              src: `${m}/${f}`,
              alt: "attachment",
              className: "message-attachment-image",
              style: { maxWidth: "200px", borderRadius: "4px" }
            }
          ) : /* @__PURE__ */ c.jsx(
            "a",
            {
              href: `${m}/${f}`,
              target: "_blank",
              rel: "noreferrer",
              className: "message-attachment-link",
              title: "View attachment",
              children: f.split("/").pop() || "Attachment"
            }
          ) }),
          /* @__PURE__ */ c.jsxs("div", { className: "message-time", children: [
            Wt(p.creation),
            qt(p.status, p.is_outbound)
          ] })
        ] })
      ] }, `${p.name}-${g}`);
    }),
    /* @__PURE__ */ c.jsx("div", { ref: d })
  ] });
}, Kt = _n(({ onSelect: e, multiple: t = !0, accept: n, maxFileSize: s, className: r = "" }, o) => {
  const a = Ee(null);
  Rn(o, () => ({
    click: () => {
      var m;
      (m = a.current) == null || m.click();
    }
  }));
  const i = (m) => {
    const d = m.target.files;
    if (d && e) {
      const u = Array.from(d);
      if (s) {
        const p = u.filter((g) => g.size <= s);
        e(p);
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
Kt.displayName = "FileUpload";
const rt = ({
  open: e,
  onClose: t,
  header: n,
  children: s,
  width: r = "600px",
  className: o = ""
}) => (J(() => (e ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
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
        /* @__PURE__ */ c.jsx("button", { className: "raw-modal-close", onClick: t, children: /* @__PURE__ */ c.jsx(nt, { size: 20 }) })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "raw-modal-body", children: s })
    ]
  }
) }) : null), ss = ({
  selectedTemplateName: e,
  templateText: t,
  template: n,
  onClearTemplate: s
}) => {
  var b;
  const [r, o] = H(!1), a = () => {
    s(), o(!1);
  }, i = e.split("-")[0], m = (n == null ? void 0 : n.template) ?? t ?? "", d = (n == null ? void 0 : n.header) ?? null, u = (n == null ? void 0 : n.footer) ?? null, p = ((b = n == null ? void 0 : n.links) == null ? void 0 : b.map((f) => ({
    button_label: f.button_label ?? "",
    link: f.link ?? ""
  }))) || [], g = (n == null ? void 0 : n.modified) || (n == null ? void 0 : n.creation) || (/* @__PURE__ */ new Date()).toISOString();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-template-chip", children: [
      /* @__PURE__ */ c.jsxs("span", { children: [
        "Template: ",
        i
      ] }),
      /* @__PURE__ */ c.jsx("button", { type: "button", onClick: () => o(!0), className: "whatsapp-template-chip-preview", title: "Preview template", children: /* @__PURE__ */ c.jsx(zn, { size: 20, color: "currentColor" }) }),
      /* @__PURE__ */ c.jsx("button", { type: "button", onClick: a, className: "whatsapp-template-chip-clear", title: "Send as normal message instead", children: /* @__PURE__ */ c.jsx(nt, { size: 20, color: "currentColor" }) })
    ] }),
    /* @__PURE__ */ c.jsx(
      rt,
      {
        open: r,
        onClose: () => o(!1),
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Template Preview" }),
        children: /* @__PURE__ */ c.jsx("div", { style: { padding: "20px 0" }, children: n ? /* @__PURE__ */ c.jsx(
          Yt,
          {
            header: d,
            message: m,
            footer: u,
            template_links: p,
            creation: g,
            is_outbound: 1,
            status: void 0,
            isPreview: !0
          }
        ) : /* @__PURE__ */ c.jsx("pre", { className: "whatsapp-template-preview-content", children: t ?? "" }) })
      }
    )
  ] });
}, rs = ({ attachedFile: e, onFileRemove: t }) => /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-attachment-preview", children: [
  e.preview && /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsx("img", { src: e.preview, alt: "Preview", className: "whatsapp-attachment-image-thumb" }) }),
  /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-attachment-info", children: [
    /* @__PURE__ */ c.jsx("span", { className: "whatsapp-attachment-name", children: e.file.name }),
    t && /* @__PURE__ */ c.jsx("button", { onClick: t, type: "button", className: "whatsapp-attachment-remove", title: "Remove attachment", children: /* @__PURE__ */ c.jsx(nt, { size: 14, color: "#666" }) })
  ] })
] }), _t = () => /* @__PURE__ */ c.jsx("div", { className: "whatsapp-spinner" }), os = ({
  onSend: e,
  isLoading: t,
  isUploading: n = !1,
  isSending: s = !1,
  onTemplateClick: r,
  templateText: o,
  selectedTemplateName: a,
  selectedTemplate: i,
  onClearTemplate: m,
  attachedFile: d,
  onFileRemove: u,
  onFileSelect: p
}) => {
  const [g, b] = H(""), f = Ee(null), w = Ee(null), y = !!a;
  Re.useEffect(() => {
    var v;
    y && ((v = f.current) == null || v.focus());
  }, [y]), Re.useEffect(() => {
    o !== void 0 && o !== "" ? b(o) : (o === void 0 || o === "") && b("");
  }, [o]);
  const S = () => {
    (g.trim() || d || y) && (e(g, d == null ? void 0 : d.fileUrl, d == null ? void 0 : d.contentType), y || (b(""), u && u()));
  }, A = () => {
    var v;
    (v = w.current) == null || v.click();
  }, N = (v) => {
    const O = v == null ? void 0 : v[0];
    O && p && p(O);
  }, C = (v) => {
    v.key === "Enter" && !t && S();
  }, P = (v) => {
    const O = v.target.value;
    b(O), !O.trim() && a && m && m();
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: f,
      className: "whatsapp-input-container",
      onKeyDown: C,
      tabIndex: y ? 0 : void 0,
      style: { outline: "none" },
      children: [
        /* @__PURE__ */ c.jsx(Kt, { ref: w, onSelect: N, multiple: !1, accept: "image/*,video/*,audio/*,.pdf,.doc,.docx" }),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: A,
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
            children: n ? /* @__PURE__ */ c.jsx(_t, {}) : /* @__PURE__ */ c.jsx(Wn, { size: 20, color: "#175353" })
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
            children: /* @__PURE__ */ c.jsx(Bt, { size: 20, color: "#175353" })
          }
        ),
        a && m && /* @__PURE__ */ c.jsx(
          ss,
          {
            selectedTemplateName: a,
            templateText: o,
            template: i,
            onClearTemplate: () => {
              m(), b("");
            }
          }
        ),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            value: g,
            onChange: P,
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
            disabled: t || !y && !g.trim() && !d,
            title: s ? "Sending..." : "Send",
            children: s ? /* @__PURE__ */ c.jsx(_t, {}) : /* @__PURE__ */ c.jsx(qn, { size: 20, color: "white" })
          }
        ),
        d && /* @__PURE__ */ c.jsx(rs, { attachedFile: d, onFileRemove: u })
      ]
    }
  );
}, as = () => /* @__PURE__ */ c.jsx("div", { className: "whatsapp-templates-grid", children: Array.from({ length: 4 }).map((e, t) => /* @__PURE__ */ c.jsxs(
  "div",
  {
    className: "whatsapp-template-skeleton-item",
    children: [
      /* @__PURE__ */ c.jsx($, { width: "40%", height: "12px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx("div", { className: "whatsapp-item-divider" }),
      /* @__PURE__ */ c.jsx($, { width: "100%", height: "14px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx($, { width: "90%", height: "14px", style: { marginBottom: "8px" } }),
      /* @__PURE__ */ c.jsx($, { width: "60%", height: "14px" })
    ]
  },
  t
)) });
function is(e) {
  let t = "";
  return e.header && (t += `*${e.header}*

`), t += e.template || "", e.footer && (t += `

${e.footer}`), t;
}
const cs = ({ templates: e, onSelect: t, isLoading: n = !1 }) => {
  const [s, r] = H(null);
  return n ? /* @__PURE__ */ c.jsx(as, {}) : e.length === 0 ? /* @__PURE__ */ c.jsx("section", { style: { padding: "1rem", textAlign: "center" }, children: /* @__PURE__ */ c.jsx("p", { style: { color: "#666", fontSize: "0.875rem" }, children: "No templates available" }) }) : /* @__PURE__ */ c.jsx("section", { style: { padding: "1rem" }, children: /* @__PURE__ */ c.jsx("div", { className: "template-scroll-container", children: /* @__PURE__ */ c.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }, children: e.map((o) => {
    const a = is(o), i = s === o.name;
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
function ls(e) {
  return e.type.startsWith("image/") ? "image" : e.type.startsWith("video/") ? "video" : e.type.startsWith("audio/") ? "audio" : "document";
}
function us() {
  const { config: e, apiAdapter: t, socketAdapter: n, socketPayload: s } = st(), r = Vt(), o = se((_) => _.messages), a = se((_) => _.isLoading), i = se((_) => _.error), m = se((_) => _.setMessages), d = se((_) => _.appendMessage), u = se((_) => _.replaceMessage), p = se((_) => _.updateMessageStatus), g = se((_) => _.setLoading), b = se((_) => _.setError), [f, w] = H(!1), y = (n == null ? void 0 : n.isConnected) ?? !0, [S, A] = H(!1), [N, C] = H(), [P, v] = H(), [O, V] = H(), [F, G] = H([]), [de, K] = H(!1), [Z, q] = H(null), [re, M] = H(!1), Q = ae(() => {
    var Ce;
    const _ = e.doctype || "", x = e.refName || "", j = e.activeLeadDoctype || "", L = e.activeLeadName || "";
    let T = _, k = x, z = e.links || [];
    if (L)
      T = j, k = L, z = _ ? [{ link_doctype: _, link_name: x }] : [];
    else {
      const oe = (Ce = e.links) == null ? void 0 : Ce.find((ve) => {
        var me;
        return (me = ve.link_doctype) == null ? void 0 : me.includes("Lead");
      });
      oe && (T = oe.link_doctype, k = oe.link_name, z = _ ? [{ link_doctype: _, link_name: x }] : []);
    }
    const pe = L ? [{ reference_doctype: j, reference_name: L }] : [{ reference_doctype: _, reference_name: x }, ...(e.links || []).map((oe) => ({ reference_doctype: oe.link_doctype, reference_name: oe.link_name }))];
    return {
      primaryDoctype: T,
      primaryName: k,
      secondaryLinks: z,
      templateRefs: pe,
      baseDoctype: _,
      baseName: x,
      activeLeadDoctype: j,
      activeLeadName: L
    };
  }, [e]), D = Ee(t.getMessages);
  J(() => {
    D.current = t.getMessages;
  }, [t.getMessages]), J(() => {
    (async () => {
      var x;
      g(!0), b(null);
      try {
        const j = await ((x = D.current) == null ? void 0 : x.call(D, e.doctype || "", e.refName || ""));
        j && m([...j].reverse());
      } catch (j) {
        b(j instanceof Error ? j.message : "Failed to fetch");
      } finally {
        g(!1);
      }
    })();
  }, [e.doctype, e.refName, g, b, m]), J(() => {
    if (!S || F.length > 0) return;
    (async () => {
      var x;
      K(!0);
      try {
        const j = await ((x = t.getTemplates) == null ? void 0 : x.call(t, Q.templateRefs));
        j && G(j);
      } catch (j) {
        console.error("Template fetch failed", j);
      } finally {
        K(!1);
      }
    })();
  }, [S, t, Q.templateRefs, F.length]), J(() => {
    if (!e.isChatOpen || !o.length || !t.sendReadReceipt) return;
    const _ = o.filter(
      (x) => x.is_outbound === 0 && (x.status === null || x.status === void 0)
    );
    if (_.length > 0) {
      const x = _[_.length - 1];
      x.name && t.sendReadReceipt(x.name);
    }
  }, [e.isChatOpen, o, t]);
  const ee = Me(() => {
    q((_) => (_ != null && _.preview && URL.revokeObjectURL(_.preview), null));
  }, []), fe = Me(
    async (_, x, j) => {
      var ut, dt, ft, pt;
      const {
        primaryDoctype: L,
        primaryName: T,
        secondaryLinks: k,
        baseDoctype: z,
        baseName: pe,
        activeLeadDoctype: Ce,
        activeLeadName: oe
      } = Q, ve = {
        to: e.phone
      };
      if (P) {
        const te = ((O == null ? void 0 : O.for_doctype) ?? "").trim();
        let ne = L, ie = T, Ve = k;
        te.includes("Lead") ? (ne = Ce || te, ie = oe || T, Ve = z ? [{ link_doctype: z, link_name: pe }] : []) : (ne = z || L, ie = pe || T, Ve = e.links || []);
        const we = `temp-${Date.now()}`, xn = {
          name: we,
          message: N ?? (O == null ? void 0 : O.template) ?? "",
          sender: "You",
          creation: (/* @__PURE__ */ new Date()).toISOString(),
          is_outbound: 1,
          status: 5,
          message_type: "Template",
          header: O == null ? void 0 : O.header,
          footer: O == null ? void 0 : O.footer
        };
        d(xn), w(!0);
        try {
          const Ae = await t.sendTemplate({
            ...ve,
            reference_doctype: ne,
            reference_name: ie,
            template: P,
            links: Ve
          });
          Ae != null && Ae.name ? u(we, {
            ...r.getState().messages.find((ke) => ke.name === we),
            name: Ae.name,
            status: 1
          }) : p(we, 1), v(void 0), C(void 0), V(void 0), ee(), t.onMessageSent && t.onMessageSent(), (ut = t.showNotification) == null || ut.call(t, "WhatsApp", "Template message sent successfully"), setTimeout(async () => {
            var ht;
            const ke = await ((ht = D.current) == null ? void 0 : ht.call(D, ne, ie));
            ke && m([...ke].reverse());
          }, 1500);
        } catch (mt) {
          console.error(mt), p(we, 2), (dt = t.showError) == null || dt.call(t, "WhatsApp", "Failed to send template message");
        } finally {
          w(!1);
        }
        return;
      }
      const me = (_ || "").trim();
      if (!me && !x) return;
      const ye = `temp-${Date.now()}`;
      d({
        name: ye,
        message: me,
        sender: "You",
        creation: (/* @__PURE__ */ new Date()).toISOString(),
        is_outbound: 1,
        attach: x,
        content_type: j,
        status: 5
      }), w(!0);
      try {
        const te = await t.sendMessage({
          ...ve,
          reference_doctype: L,
          reference_name: T,
          message: me,
          attach: x || "",
          content_type: j,
          links: k
        });
        te != null && te.name ? u(ye, {
          ...r.getState().messages.find((ne) => ne.name === ye),
          name: te.name,
          status: 1
        }) : p(ye, 1), ee(), t.onMessageSent && t.onMessageSent(), (ft = t.showNotification) == null || ft.call(t, "WhatsApp", "Message sent successfully"), setTimeout(async () => {
          var ie;
          const ne = await ((ie = D.current) == null ? void 0 : ie.call(D, L, T));
          ne && m([...ne].reverse());
        }, 1500);
      } catch (te) {
        console.error(te), p(ye, 2), (pt = t.showError) == null || pt.call(t, "WhatsApp", "Failed to send message");
      } finally {
        w(!1);
      }
    },
    [P, t, e.phone, e.links, O, N, d, p, Q, ee]
  ), h = (_, x, j) => {
    C(_), v(x), V(j), A(!1);
  }, E = Me(async (_) => {
    var L;
    if (!t.uploadFile) return;
    M(!0);
    const x = ls(_);
    let j;
    _.type.startsWith("image/") && (j = URL.createObjectURL(_));
    try {
      const { file_url: T } = await t.uploadFile(_);
      q({ file: _, fileUrl: T, contentType: x, preview: j });
    } catch (T) {
      console.error(T), (L = t.showError) == null || L.call(t, "WhatsApp", "Failed to upload file"), j && URL.revokeObjectURL(j), q(null);
    } finally {
      M(!1);
    }
  }, [t]);
  return J(() => {
    if (!(n != null && n.onMessage) || !(n != null && n.offMessage)) return;
    const _ = (x) => {
      var T;
      const j = r.getState().messages;
      let L = -1;
      if (x.is_outbound === 0 && x.name && e.phone === x.sender && (x.status === null || x.status === void 0) && ((T = t.sendReadReceipt) == null || T.call(t, x.name)), x.is_outbound === 1 && (x.message_type === "Template" ? L = j.findIndex((k) => k.name.startsWith("temp-") && k.message_type === "Template") : L = j.findIndex((k) => k.name.startsWith("temp-") && k.message === x.message)), L !== -1) {
        const k = j[L];
        u(k.name, x);
      } else
        j.some((z) => z.name === x.name) ? x.status !== void 0 && x.is_outbound === 1 && p(x.name, x.status) : d(x);
    };
    return n.onMessage(_), () => {
      var x;
      return (x = n.offMessage) == null ? void 0 : x.call(n, _);
    };
  }, [n, e.phone, t, r, u, d, p]), J(() => {
    var T;
    if (!s || s.event !== "whatsapp_message") return;
    const _ = s.message, x = zt(_);
    if (!x) return;
    r.getState().messages.some((k) => k.name === x.name) || (d(x), x.is_outbound === 0 && x.name && e.phone === x.sender && ((T = t.sendReadReceipt) == null || T.call(t, x.name)));
  }, [s, e.phone, d, t, r]), {
    displayMessages: o,
    isLoading: a,
    messagesError: i,
    isConnected: y,
    isSending: f,
    isTemplateModalOpen: S,
    setIsTemplateModalOpen: A,
    selectedTemplateText: N,
    selectedTemplateName: P,
    selectedTemplate: O,
    setSelectedTemplateText: C,
    setSelectedTemplateName: v,
    setSelectedTemplate: V,
    attachedFile: Z,
    templates: F,
    isLoadingTemplates: de,
    sendMessage: fe,
    handleTemplateSelect: h,
    handleFileSelect: E,
    handleFileRemove: ee,
    uploadFileMutation: { isPending: re }
  };
}
function Xt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ds } = Object.prototype, { getPrototypeOf: ot } = Object, { iterator: We, toStringTag: Gt } = Symbol, qe = /* @__PURE__ */ ((e) => (t) => {
  const n = ds.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), X = (e) => (e = e.toLowerCase(), (t) => qe(t) === e), ze = (e) => (t) => typeof t === e, { isArray: ge } = Array, he = ze("undefined");
function Se(e) {
  return e !== null && !he(e) && e.constructor !== null && !he(e.constructor) && B(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Zt = X("ArrayBuffer");
function fs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Zt(e.buffer), t;
}
const ps = ze("string"), B = ze("function"), Qt = ze("number"), Te = (e) => e !== null && typeof e == "object", ms = (e) => e === !0 || e === !1, Fe = (e) => {
  if (qe(e) !== "object")
    return !1;
  const t = ot(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Gt in e) && !(We in e);
}, hs = (e) => {
  if (!Te(e) || Se(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, gs = X("Date"), ys = X("File"), ws = (e) => !!(e && typeof e.uri < "u"), bs = (e) => e && typeof e.getParts < "u", xs = X("Blob"), _s = X("FileList"), Rs = (e) => Te(e) && B(e.pipe);
function Es() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Rt = Es(), Et = typeof Rt.FormData < "u" ? Rt.FormData : void 0, Ss = (e) => {
  let t;
  return e && (Et && e instanceof Et || B(e.append) && ((t = qe(e)) === "formdata" || // detect form-data instance
  t === "object" && B(e.toString) && e.toString() === "[object FormData]"));
}, Ts = X("URLSearchParams"), [js, Os, Ns, Cs] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(X), vs = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function je(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, r;
  if (typeof e != "object" && (e = [e]), ge(e))
    for (s = 0, r = e.length; s < r; s++)
      t.call(null, e[s], s, e);
  else {
    if (Se(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let i;
    for (s = 0; s < a; s++)
      i = o[s], t.call(null, e[i], i, e);
  }
}
function en(e, t) {
  if (Se(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let s = n.length, r;
  for (; s-- > 0; )
    if (r = n[s], t === r.toLowerCase())
      return r;
  return null;
}
const ce = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, tn = (e) => !he(e) && e !== ce;
function Ze() {
  const { caseless: e, skipUndefined: t } = tn(this) && this || {}, n = {}, s = (r, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const a = e && en(n, o) || o;
    Fe(n[a]) && Fe(r) ? n[a] = Ze(n[a], r) : Fe(r) ? n[a] = Ze({}, r) : ge(r) ? n[a] = r.slice() : (!t || !he(r)) && (n[a] = r);
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && je(arguments[r], s);
  return n;
}
const As = (e, t, n, { allOwnKeys: s } = {}) => (je(
  t,
  (r, o) => {
    n && B(r) ? Object.defineProperty(e, o, {
      value: Xt(r, n),
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
), e), ks = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ps = (e, t, n, s) => {
  e.prototype = Object.create(t.prototype, s), Object.defineProperty(e.prototype, "constructor", {
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ls = (e, t, n, s) => {
  let r, o, a;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
      a = r[o], (!s || s(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = n !== !1 && ot(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ds = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const s = e.indexOf(t, n);
  return s !== -1 && s === n;
}, Us = (e) => {
  if (!e) return null;
  if (ge(e)) return e;
  let t = e.length;
  if (!Qt(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ms = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ot(Uint8Array)), Fs = (e, t) => {
  const s = (e && e[We]).call(e);
  let r;
  for (; (r = s.next()) && !r.done; ) {
    const o = r.value;
    t.call(e, o[0], o[1]);
  }
}, Is = (e, t) => {
  let n;
  const s = [];
  for (; (n = e.exec(t)) !== null; )
    s.push(n);
  return s;
}, $s = X("HTMLFormElement"), Bs = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, s, r) {
  return s.toUpperCase() + r;
}), St = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ws = X("RegExp"), nn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), s = {};
  je(n, (r, o) => {
    let a;
    (a = t(r, o, e)) !== !1 && (s[o] = a || r);
  }), Object.defineProperties(e, s);
}, qs = (e) => {
  nn(e, (t, n) => {
    if (B(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const s = e[n];
    if (B(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, zs = (e, t) => {
  const n = {}, s = (r) => {
    r.forEach((o) => {
      n[o] = !0;
    });
  };
  return ge(e) ? s(e) : s(String(e).split(t)), n;
}, Hs = () => {
}, Js = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Vs(e) {
  return !!(e && B(e.append) && e[Gt] === "FormData" && e[We]);
}
const Ys = (e) => {
  const t = new Array(10), n = (s, r) => {
    if (Te(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (Se(s))
        return s;
      if (!("toJSON" in s)) {
        t[r] = s;
        const o = ge(s) ? [] : {};
        return je(s, (a, i) => {
          const m = n(a, r + 1);
          !he(m) && (o[i] = m);
        }), t[r] = void 0, o;
      }
    }
    return s;
  };
  return n(e, 0);
}, Ks = X("AsyncFunction"), Xs = (e) => e && (Te(e) || B(e)) && B(e.then) && B(e.catch), sn = ((e, t) => e ? setImmediate : t ? ((n, s) => (ce.addEventListener(
  "message",
  ({ source: r, data: o }) => {
    r === ce && o === n && s.length && s.shift()();
  },
  !1
), (r) => {
  s.push(r), ce.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", B(ce.postMessage)), Gs = typeof queueMicrotask < "u" ? queueMicrotask.bind(ce) : typeof process < "u" && process.nextTick || sn, Zs = (e) => e != null && B(e[We]), l = {
  isArray: ge,
  isArrayBuffer: Zt,
  isBuffer: Se,
  isFormData: Ss,
  isArrayBufferView: fs,
  isString: ps,
  isNumber: Qt,
  isBoolean: ms,
  isObject: Te,
  isPlainObject: Fe,
  isEmptyObject: hs,
  isReadableStream: js,
  isRequest: Os,
  isResponse: Ns,
  isHeaders: Cs,
  isUndefined: he,
  isDate: gs,
  isFile: ys,
  isReactNativeBlob: ws,
  isReactNative: bs,
  isBlob: xs,
  isRegExp: Ws,
  isFunction: B,
  isStream: Rs,
  isURLSearchParams: Ts,
  isTypedArray: Ms,
  isFileList: _s,
  forEach: je,
  merge: Ze,
  extend: As,
  trim: vs,
  stripBOM: ks,
  inherits: Ps,
  toFlatObject: Ls,
  kindOf: qe,
  kindOfTest: X,
  endsWith: Ds,
  toArray: Us,
  forEachEntry: Fs,
  matchAll: Is,
  isHTMLForm: $s,
  hasOwnProperty: St,
  hasOwnProp: St,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: nn,
  freezeMethods: qs,
  toObjectSet: zs,
  toCamelCase: Bs,
  noop: Hs,
  toFiniteNumber: Js,
  findKey: en,
  global: ce,
  isContextDefined: tn,
  isSpecCompliantForm: Vs,
  toJSONObject: Ys,
  isAsyncFn: Ks,
  isThenable: Xs,
  setImmediate: sn,
  asap: Gs,
  isIterable: Zs
};
let R = class rn extends Error {
  static from(t, n, s, r, o, a) {
    const i = new rn(t.message, n || t.code, s, r, o);
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
      config: l.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
R.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
R.ERR_BAD_OPTION = "ERR_BAD_OPTION";
R.ECONNABORTED = "ECONNABORTED";
R.ETIMEDOUT = "ETIMEDOUT";
R.ERR_NETWORK = "ERR_NETWORK";
R.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
R.ERR_DEPRECATED = "ERR_DEPRECATED";
R.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
R.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
R.ERR_CANCELED = "ERR_CANCELED";
R.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
R.ERR_INVALID_URL = "ERR_INVALID_URL";
const Qs = null;
function Qe(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function on(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ye(e, t, n) {
  return e ? e.concat(t).map(function(r, o) {
    return r = on(r), !n && o ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function er(e) {
  return l.isArray(e) && !e.some(Qe);
}
const tr = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function He(e, t, n) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = l.toFlatObject(
    n,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(w, y) {
      return !l.isUndefined(y[w]);
    }
  );
  const s = n.metaTokens, r = n.visitor || u, o = n.dots, a = n.indexes, m = (n.Blob || typeof Blob < "u" && Blob) && l.isSpecCompliantForm(t);
  if (!l.isFunction(r))
    throw new TypeError("visitor must be a function");
  function d(f) {
    if (f === null) return "";
    if (l.isDate(f))
      return f.toISOString();
    if (l.isBoolean(f))
      return f.toString();
    if (!m && l.isBlob(f))
      throw new R("Blob is not supported. Use a Buffer instead.");
    return l.isArrayBuffer(f) || l.isTypedArray(f) ? m && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function u(f, w, y) {
    let S = f;
    if (l.isReactNative(t) && l.isReactNativeBlob(f))
      return t.append(Ye(y, w, o), d(f)), !1;
    if (f && !y && typeof f == "object") {
      if (l.endsWith(w, "{}"))
        w = s ? w : w.slice(0, -2), f = JSON.stringify(f);
      else if (l.isArray(f) && er(f) || (l.isFileList(f) || l.endsWith(w, "[]")) && (S = l.toArray(f)))
        return w = on(w), S.forEach(function(N, C) {
          !(l.isUndefined(N) || N === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ye([w], C, o) : a === null ? w : w + "[]",
            d(N)
          );
        }), !1;
    }
    return Qe(f) ? !0 : (t.append(Ye(y, w, o), d(f)), !1);
  }
  const p = [], g = Object.assign(tr, {
    defaultVisitor: u,
    convertValue: d,
    isVisitable: Qe
  });
  function b(f, w) {
    if (!l.isUndefined(f)) {
      if (p.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      p.push(f), l.forEach(f, function(S, A) {
        (!(l.isUndefined(S) || S === null) && r.call(t, S, l.isString(A) ? A.trim() : A, w, g)) === !0 && b(S, w ? w.concat(A) : [A]);
      }), p.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function Tt(e) {
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
function at(e, t) {
  this._pairs = [], e && He(e, this, t);
}
const an = at.prototype;
an.append = function(t, n) {
  this._pairs.push([t, n]);
};
an.toString = function(t) {
  const n = t ? function(s) {
    return t.call(this, s, Tt);
  } : Tt;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function nr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function cn(e, t, n) {
  if (!t)
    return e;
  const s = n && n.encode || nr, r = l.isFunction(n) ? {
    serialize: n
  } : n, o = r && r.serialize;
  let a;
  if (o ? a = o(t, r) : a = l.isURLSearchParams(t) ? t.toString() : new at(t, r).toString(s), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class jt {
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
    l.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const it = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, sr = typeof URLSearchParams < "u" ? URLSearchParams : at, rr = typeof FormData < "u" ? FormData : null, or = typeof Blob < "u" ? Blob : null, ar = {
  isBrowser: !0,
  classes: {
    URLSearchParams: sr,
    FormData: rr,
    Blob: or
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ct = typeof window < "u" && typeof document < "u", et = typeof navigator == "object" && navigator || void 0, ir = ct && (!et || ["ReactNative", "NativeScript", "NS"].indexOf(et.product) < 0), cr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", lr = ct && window.location.href || "http://localhost", ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ct,
  hasStandardBrowserEnv: ir,
  hasStandardBrowserWebWorkerEnv: cr,
  navigator: et,
  origin: lr
}, Symbol.toStringTag, { value: "Module" })), I = {
  ...ur,
  ...ar
};
function dr(e, t) {
  return He(e, new I.classes.URLSearchParams(), {
    visitor: function(n, s, r, o) {
      return I.isNode && l.isBuffer(n) ? (this.append(s, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function fr(e) {
  return l.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function pr(e) {
  const t = {}, n = Object.keys(e);
  let s;
  const r = n.length;
  let o;
  for (s = 0; s < r; s++)
    o = n[s], t[o] = e[o];
  return t;
}
function ln(e) {
  function t(n, s, r, o) {
    let a = n[o++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), m = o >= n.length;
    return a = !a && l.isArray(r) ? r.length : a, m ? (l.hasOwnProp(r, a) ? r[a] = [r[a], s] : r[a] = s, !i) : ((!r[a] || !l.isObject(r[a])) && (r[a] = []), t(n, s, r[a], o) && l.isArray(r[a]) && (r[a] = pr(r[a])), !i);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const n = {};
    return l.forEachEntry(e, (s, r) => {
      t(fr(s), r, n, 0);
    }), n;
  }
  return null;
}
function mr(e, t, n) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (n || JSON.stringify)(e);
}
const Oe = {
  transitional: it,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const s = n.getContentType() || "", r = s.indexOf("application/json") > -1, o = l.isObject(t);
      if (o && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
        return r ? JSON.stringify(ln(t)) : t;
      if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t) || l.isReadableStream(t))
        return t;
      if (l.isArrayBufferView(t))
        return t.buffer;
      if (l.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (o) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return dr(t, this.formSerializer).toString();
        if ((i = l.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
          const m = this.env && this.env.FormData;
          return He(
            i ? { "files[]": t } : t,
            m && new m(),
            this.formSerializer
          );
        }
      }
      return o || r ? (n.setContentType("application/json", !1), mr(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = this.transitional || Oe.transitional, s = n && n.forcedJSONParsing, r = this.responseType === "json";
      if (l.isResponse(t) || l.isReadableStream(t))
        return t;
      if (t && l.isString(t) && (s && !this.responseType || r)) {
        const a = !(n && n.silentJSONParsing) && r;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (i) {
          if (a)
            throw i.name === "SyntaxError" ? R.from(i, R.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: I.classes.FormData,
    Blob: I.classes.Blob
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
l.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Oe.headers[e] = {};
});
const hr = l.toObjectSet([
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
]), gr = (e) => {
  const t = {};
  let n, s, r;
  return e && e.split(`
`).forEach(function(a) {
    r = a.indexOf(":"), n = a.substring(0, r).trim().toLowerCase(), s = a.substring(r + 1).trim(), !(!n || t[n] && hr[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
  }), t;
}, Ot = Symbol("internals");
function _e(e) {
  return e && String(e).trim().toLowerCase();
}
function Ie(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(Ie) : String(e);
}
function yr(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const wr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ke(e, t, n, s, r) {
  if (l.isFunction(s))
    return s.call(this, t, n);
  if (r && (t = n), !!l.isString(t)) {
    if (l.isString(s))
      return t.indexOf(s) !== -1;
    if (l.isRegExp(s))
      return s.test(t);
  }
}
function br(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function xr(e, t) {
  const n = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + n, {
      value: function(r, o, a) {
        return this[s].call(this, t, r, o, a);
      },
      configurable: !0
    });
  });
}
let W = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const r = this;
    function o(i, m, d) {
      const u = _e(m);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = l.findKey(r, u);
      (!p || r[p] === void 0 || d === !0 || d === void 0 && r[p] !== !1) && (r[p || m] = Ie(i));
    }
    const a = (i, m) => l.forEach(i, (d, u) => o(d, u, m));
    if (l.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (l.isString(t) && (t = t.trim()) && !wr(t))
      a(gr(t), n);
    else if (l.isObject(t) && l.isIterable(t)) {
      let i = {}, m, d;
      for (const u of t) {
        if (!l.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        i[d = u[0]] = (m = i[d]) ? l.isArray(m) ? [...m, u[1]] : [m, u[1]] : u[1];
      }
      a(i, n);
    } else
      t != null && o(n, t, s);
    return this;
  }
  get(t, n) {
    if (t = _e(t), t) {
      const s = l.findKey(this, t);
      if (s) {
        const r = this[s];
        if (!n)
          return r;
        if (n === !0)
          return yr(r);
        if (l.isFunction(n))
          return n.call(this, r, s);
        if (l.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = _e(t), t) {
      const s = l.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || Ke(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let r = !1;
    function o(a) {
      if (a = _e(a), a) {
        const i = l.findKey(s, a);
        i && (!n || Ke(s, s[i], i, n)) && (delete s[i], r = !0);
      }
    }
    return l.isArray(t) ? t.forEach(o) : o(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, r = !1;
    for (; s--; ) {
      const o = n[s];
      (!t || Ke(this, this[o], o, t, !0)) && (delete this[o], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, s = {};
    return l.forEach(this, (r, o) => {
      const a = l.findKey(s, o);
      if (a) {
        n[a] = Ie(r), delete n[o];
        return;
      }
      const i = t ? br(o) : String(o).trim();
      i !== o && delete n[o], n[i] = Ie(r), s[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (s, r) => {
      s != null && s !== !1 && (n[r] = t && l.isArray(s) ? s.join(", ") : s);
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
    const s = (this[Ot] = this[Ot] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function o(a) {
      const i = _e(a);
      s[i] || (xr(r, a), s[i] = !0);
    }
    return l.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
W.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
l.reduceDescriptors(W.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[n] = s;
    }
  };
});
l.freezeMethods(W);
function Xe(e, t) {
  const n = this || Oe, s = t || n, r = W.from(s.headers);
  let o = s.data;
  return l.forEach(e, function(i) {
    o = i.call(n, o, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), o;
}
function un(e) {
  return !!(e && e.__CANCEL__);
}
let Ne = class extends R {
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
    super(t ?? "canceled", R.ERR_CANCELED, n, s), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function dn(e, t, n) {
  const s = n.config.validateStatus;
  !n.status || !s || s(n.status) ? e(n) : t(
    new R(
      "Request failed with status code " + n.status,
      [R.ERR_BAD_REQUEST, R.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
      n.config,
      n.request,
      n
    )
  );
}
function _r(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Rr(e, t) {
  e = e || 10;
  const n = new Array(e), s = new Array(e);
  let r = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(m) {
    const d = Date.now(), u = s[o];
    a || (a = d), n[r] = m, s[r] = d;
    let p = o, g = 0;
    for (; p !== r; )
      g += n[p++], p = p % e;
    if (r = (r + 1) % e, r === o && (o = (o + 1) % e), d - a < t)
      return;
    const b = u && d - u;
    return b ? Math.round(g * 1e3 / b) : void 0;
  };
}
function Er(e, t) {
  let n = 0, s = 1e3 / t, r, o;
  const a = (d, u = Date.now()) => {
    n = u, r = null, o && (clearTimeout(o), o = null), e(...d);
  };
  return [(...d) => {
    const u = Date.now(), p = u - n;
    p >= s ? a(d, u) : (r = d, o || (o = setTimeout(() => {
      o = null, a(r);
    }, s - p)));
  }, () => r && a(r)];
}
const Be = (e, t, n = 3) => {
  let s = 0;
  const r = Rr(50, 250);
  return Er((o) => {
    const a = o.loaded, i = o.lengthComputable ? o.total : void 0, m = a - s, d = r(m), u = a <= i;
    s = a;
    const p = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: m,
      rate: d || void 0,
      estimated: d && i && u ? (i - a) / d : void 0,
      event: o,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, Nt = (e, t) => {
  const n = e != null;
  return [
    (s) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: s
    }),
    t[1]
  ];
}, Ct = (e) => (...t) => l.asap(() => e(...t)), Sr = I.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, I.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(I.origin),
  I.navigator && /(msie|trident)/i.test(I.navigator.userAgent)
) : () => !0, Tr = I.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, s, r, o, a) {
      if (typeof document > "u") return;
      const i = [`${e}=${encodeURIComponent(t)}`];
      l.isNumber(n) && i.push(`expires=${new Date(n).toUTCString()}`), l.isString(s) && i.push(`path=${s}`), l.isString(r) && i.push(`domain=${r}`), o === !0 && i.push("secure"), l.isString(a) && i.push(`SameSite=${a}`), document.cookie = i.join("; ");
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
function jr(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Or(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function fn(e, t, n) {
  let s = !jr(t);
  return e && (s || n == !1) ? Or(e, t) : t;
}
const vt = (e) => e instanceof W ? { ...e } : e;
function ue(e, t) {
  t = t || {};
  const n = {};
  function s(d, u, p, g) {
    return l.isPlainObject(d) && l.isPlainObject(u) ? l.merge.call({ caseless: g }, d, u) : l.isPlainObject(u) ? l.merge({}, u) : l.isArray(u) ? u.slice() : u;
  }
  function r(d, u, p, g) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(d))
        return s(void 0, d, p, g);
    } else return s(d, u, p, g);
  }
  function o(d, u) {
    if (!l.isUndefined(u))
      return s(void 0, u);
  }
  function a(d, u) {
    if (l.isUndefined(u)) {
      if (!l.isUndefined(d))
        return s(void 0, d);
    } else return s(void 0, u);
  }
  function i(d, u, p) {
    if (p in t)
      return s(d, u);
    if (p in e)
      return s(void 0, d);
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
    headers: (d, u, p) => r(vt(d), vt(u), p, !0)
  };
  return l.forEach(Object.keys({ ...e, ...t }), function(u) {
    if (u === "__proto__" || u === "constructor" || u === "prototype") return;
    const p = l.hasOwnProp(m, u) ? m[u] : r, g = p(e[u], t[u], u);
    l.isUndefined(g) && p !== i || (n[u] = g);
  }), n;
}
const pn = (e) => {
  const t = ue({}, e);
  let { data: n, withXSRFToken: s, xsrfHeaderName: r, xsrfCookieName: o, headers: a, auth: i } = t;
  if (t.headers = a = W.from(a), t.url = cn(
    fn(t.baseURL, t.url, t.allowAbsoluteUrls),
    e.params,
    e.paramsSerializer
  ), i && a.set(
    "Authorization",
    "Basic " + btoa(
      (i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : "")
    )
  ), l.isFormData(n)) {
    if (I.hasStandardBrowserEnv || I.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (l.isFunction(n.getHeaders)) {
      const m = n.getHeaders(), d = ["content-type", "content-length"];
      Object.entries(m).forEach(([u, p]) => {
        d.includes(u.toLowerCase()) && a.set(u, p);
      });
    }
  }
  if (I.hasStandardBrowserEnv && (s && l.isFunction(s) && (s = s(t)), s || s !== !1 && Sr(t.url))) {
    const m = r && o && Tr.read(o);
    m && a.set(r, m);
  }
  return t;
}, Nr = typeof XMLHttpRequest < "u", Cr = Nr && function(e) {
  return new Promise(function(n, s) {
    const r = pn(e);
    let o = r.data;
    const a = W.from(r.headers).normalize();
    let { responseType: i, onUploadProgress: m, onDownloadProgress: d } = r, u, p, g, b, f;
    function w() {
      b && b(), f && f(), r.cancelToken && r.cancelToken.unsubscribe(u), r.signal && r.signal.removeEventListener("abort", u);
    }
    let y = new XMLHttpRequest();
    y.open(r.method.toUpperCase(), r.url, !0), y.timeout = r.timeout;
    function S() {
      if (!y)
        return;
      const N = W.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), P = {
        data: !i || i === "text" || i === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: N,
        config: e,
        request: y
      };
      dn(
        function(O) {
          n(O), w();
        },
        function(O) {
          s(O), w();
        },
        P
      ), y = null;
    }
    "onloadend" in y ? y.onloadend = S : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, y.onabort = function() {
      y && (s(new R("Request aborted", R.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function(C) {
      const P = C && C.message ? C.message : "Network Error", v = new R(P, R.ERR_NETWORK, e, y);
      v.event = C || null, s(v), y = null;
    }, y.ontimeout = function() {
      let C = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const P = r.transitional || it;
      r.timeoutErrorMessage && (C = r.timeoutErrorMessage), s(
        new R(
          C,
          P.clarifyTimeoutError ? R.ETIMEDOUT : R.ECONNABORTED,
          e,
          y
        )
      ), y = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in y && l.forEach(a.toJSON(), function(C, P) {
      y.setRequestHeader(P, C);
    }), l.isUndefined(r.withCredentials) || (y.withCredentials = !!r.withCredentials), i && i !== "json" && (y.responseType = r.responseType), d && ([g, f] = Be(d, !0), y.addEventListener("progress", g)), m && y.upload && ([p, b] = Be(m), y.upload.addEventListener("progress", p), y.upload.addEventListener("loadend", b)), (r.cancelToken || r.signal) && (u = (N) => {
      y && (s(!N || N.type ? new Ne(null, e, y) : N), y.abort(), y = null);
    }, r.cancelToken && r.cancelToken.subscribe(u), r.signal && (r.signal.aborted ? u() : r.signal.addEventListener("abort", u)));
    const A = _r(r.url);
    if (A && I.protocols.indexOf(A) === -1) {
      s(
        new R(
          "Unsupported protocol " + A + ":",
          R.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    y.send(o || null);
  });
}, vr = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let s = new AbortController(), r;
    const o = function(d) {
      if (!r) {
        r = !0, i();
        const u = d instanceof Error ? d : this.reason;
        s.abort(
          u instanceof R ? u : new Ne(u instanceof Error ? u.message : u)
        );
      }
    };
    let a = t && setTimeout(() => {
      a = null, o(new R(`timeout of ${t}ms exceeded`, R.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (a && clearTimeout(a), a = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(o) : d.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", o));
    const { signal: m } = s;
    return m.unsubscribe = () => l.asap(i), m;
  }
}, Ar = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let s = 0, r;
  for (; s < n; )
    r = s + t, yield e.slice(s, r), s = r;
}, kr = async function* (e, t) {
  for await (const n of Pr(e))
    yield* Ar(n, t);
}, Pr = async function* (e) {
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
}, At = (e, t, n, s) => {
  const r = kr(e, t);
  let o = 0, a, i = (m) => {
    a || (a = !0, s && s(m));
  };
  return new ReadableStream(
    {
      async pull(m) {
        try {
          const { done: d, value: u } = await r.next();
          if (d) {
            i(), m.close();
            return;
          }
          let p = u.byteLength;
          if (n) {
            let g = o += p;
            n(g);
          }
          m.enqueue(new Uint8Array(u));
        } catch (d) {
          throw i(d), d;
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
}, kt = 64 * 1024, { isFunction: De } = l, Lr = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(l.global), { ReadableStream: Pt, TextEncoder: Lt } = l.global, Dt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Dr = (e) => {
  e = l.merge.call(
    {
      skipUndefined: !0
    },
    Lr,
    e
  );
  const { fetch: t, Request: n, Response: s } = e, r = t ? De(t) : typeof fetch == "function", o = De(n), a = De(s);
  if (!r)
    return !1;
  const i = r && De(Pt), m = r && (typeof Lt == "function" ? /* @__PURE__ */ ((f) => (w) => f.encode(w))(new Lt()) : async (f) => new Uint8Array(await new n(f).arrayBuffer())), d = o && i && Dt(() => {
    let f = !1;
    const w = new n(I.origin, {
      body: new Pt(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !w;
  }), u = a && i && Dt(() => l.isReadableStream(new s("").body)), p = {
    stream: u && ((f) => f.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !p[f] && (p[f] = (w, y) => {
      let S = w && w[f];
      if (S)
        return S.call(w);
      throw new R(
        `Response type '${f}' is not supported`,
        R.ERR_NOT_SUPPORT,
        y
      );
    });
  });
  const g = async (f) => {
    if (f == null)
      return 0;
    if (l.isBlob(f))
      return f.size;
    if (l.isSpecCompliantForm(f))
      return (await new n(I.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (l.isArrayBufferView(f) || l.isArrayBuffer(f))
      return f.byteLength;
    if (l.isURLSearchParams(f) && (f = f + ""), l.isString(f))
      return (await m(f)).byteLength;
  }, b = async (f, w) => {
    const y = l.toFiniteNumber(f.getContentLength());
    return y ?? g(w);
  };
  return async (f) => {
    let {
      url: w,
      method: y,
      data: S,
      signal: A,
      cancelToken: N,
      timeout: C,
      onDownloadProgress: P,
      onUploadProgress: v,
      responseType: O,
      headers: V,
      withCredentials: F = "same-origin",
      fetchOptions: G
    } = pn(f), de = t || fetch;
    O = O ? (O + "").toLowerCase() : "text";
    let K = vr(
      [A, N && N.toAbortSignal()],
      C
    ), Z = null;
    const q = K && K.unsubscribe && (() => {
      K.unsubscribe();
    });
    let re;
    try {
      if (v && d && y !== "get" && y !== "head" && (re = await b(V, S)) !== 0) {
        let h = new n(w, {
          method: "POST",
          body: S,
          duplex: "half"
        }), E;
        if (l.isFormData(S) && (E = h.headers.get("content-type")) && V.setContentType(E), h.body) {
          const [_, x] = Nt(
            re,
            Be(Ct(v))
          );
          S = At(h.body, kt, _, x);
        }
      }
      l.isString(F) || (F = F ? "include" : "omit");
      const M = o && "credentials" in n.prototype, Q = {
        ...G,
        signal: K,
        method: y.toUpperCase(),
        headers: V.normalize().toJSON(),
        body: S,
        duplex: "half",
        credentials: M ? F : void 0
      };
      Z = o && new n(w, Q);
      let D = await (o ? de(Z, G) : de(w, Q));
      const ee = u && (O === "stream" || O === "response");
      if (u && (P || ee && q)) {
        const h = {};
        ["status", "statusText", "headers"].forEach((j) => {
          h[j] = D[j];
        });
        const E = l.toFiniteNumber(D.headers.get("content-length")), [_, x] = P && Nt(
          E,
          Be(Ct(P), !0)
        ) || [];
        D = new s(
          At(D.body, kt, _, () => {
            x && x(), q && q();
          }),
          h
        );
      }
      O = O || "text";
      let fe = await p[l.findKey(p, O) || "text"](
        D,
        f
      );
      return !ee && q && q(), await new Promise((h, E) => {
        dn(h, E, {
          data: fe,
          headers: W.from(D.headers),
          status: D.status,
          statusText: D.statusText,
          config: f,
          request: Z
        });
      });
    } catch (M) {
      throw q && q(), M && M.name === "TypeError" && /Load failed|fetch/i.test(M.message) ? Object.assign(
        new R(
          "Network Error",
          R.ERR_NETWORK,
          f,
          Z,
          M && M.response
        ),
        {
          cause: M.cause || M
        }
      ) : R.from(M, M && M.code, f, Z, M && M.response);
    }
  };
}, Ur = /* @__PURE__ */ new Map(), mn = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: s, Response: r } = t, o = [s, r, n];
  let a = o.length, i = a, m, d, u = Ur;
  for (; i--; )
    m = o[i], d = u.get(m), d === void 0 && u.set(m, d = i ? /* @__PURE__ */ new Map() : Dr(t)), u = d;
  return d;
};
mn();
const lt = {
  http: Qs,
  xhr: Cr,
  fetch: {
    get: mn
  }
};
l.forEach(lt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ut = (e) => `- ${e}`, Mr = (e) => l.isFunction(e) || e === null || e === !1;
function Fr(e, t) {
  e = l.isArray(e) ? e : [e];
  const { length: n } = e;
  let s, r;
  const o = {};
  for (let a = 0; a < n; a++) {
    s = e[a];
    let i;
    if (r = s, !Mr(s) && (r = lt[(i = String(s)).toLowerCase()], r === void 0))
      throw new R(`Unknown adapter '${i}'`);
    if (r && (l.isFunction(r) || (r = r.get(t))))
      break;
    o[i || "#" + a] = r;
  }
  if (!r) {
    const a = Object.entries(o).map(
      ([m, d]) => `adapter ${m} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = n ? a.length > 1 ? `since :
` + a.map(Ut).join(`
`) : " " + Ut(a[0]) : "as no adapter specified";
    throw new R(
      "There is no suitable adapter to dispatch the request " + i,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
const hn = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Fr,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: lt
};
function Ge(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ne(null, e);
}
function Mt(e) {
  return Ge(e), e.headers = W.from(e.headers), e.data = Xe.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), hn.getAdapter(e.adapter || Oe.adapter, e)(e).then(
    function(s) {
      return Ge(e), s.data = Xe.call(e, e.transformResponse, s), s.headers = W.from(s.headers), s;
    },
    function(s) {
      return un(s) || (Ge(e), s && s.response && (s.response.data = Xe.call(
        e,
        e.transformResponse,
        s.response
      ), s.response.headers = W.from(s.response.headers))), Promise.reject(s);
    }
  );
}
const gn = "1.13.6", Je = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Je[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ft = {};
Je.transitional = function(t, n, s) {
  function r(o, a) {
    return "[Axios v" + gn + "] Transitional option '" + o + "'" + a + (s ? ". " + s : "");
  }
  return (o, a, i) => {
    if (t === !1)
      throw new R(
        r(a, " has been removed" + (n ? " in " + n : "")),
        R.ERR_DEPRECATED
      );
    return n && !Ft[a] && (Ft[a] = !0, console.warn(
      r(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, i) : !0;
  };
};
Je.spelling = function(t) {
  return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function Ir(e, t, n) {
  if (typeof e != "object")
    throw new R("options must be an object", R.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let r = s.length;
  for (; r-- > 0; ) {
    const o = s[r], a = t[o];
    if (a) {
      const i = e[o], m = i === void 0 || a(i, o, e);
      if (m !== !0)
        throw new R(
          "option " + o + " must be " + m,
          R.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new R("Unknown option " + o, R.ERR_BAD_OPTION);
  }
}
const $e = {
  assertOptions: Ir,
  validators: Je
}, Y = $e.validators;
let le = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new jt(),
      response: new jt()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ue(this.defaults, n);
    const { transitional: s, paramsSerializer: r, headers: o } = n;
    s !== void 0 && $e.assertOptions(
      s,
      {
        silentJSONParsing: Y.transitional(Y.boolean),
        forcedJSONParsing: Y.transitional(Y.boolean),
        clarifyTimeoutError: Y.transitional(Y.boolean),
        legacyInterceptorReqResOrdering: Y.transitional(Y.boolean)
      },
      !1
    ), r != null && (l.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : $e.assertOptions(
      r,
      {
        encode: Y.function,
        serialize: Y.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), $e.assertOptions(
      n,
      {
        baseUrl: Y.spelling("baseURL"),
        withXsrfToken: Y.spelling("withXSRFToken")
      },
      !0
    ), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && l.merge(o.common, o[n.method]);
    o && l.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (f) => {
      delete o[f];
    }), n.headers = W.concat(a, o);
    const i = [];
    let m = !0;
    this.interceptors.request.forEach(function(w) {
      if (typeof w.runWhen == "function" && w.runWhen(n) === !1)
        return;
      m = m && w.synchronous;
      const y = n.transitional || it;
      y && y.legacyInterceptorReqResOrdering ? i.unshift(w.fulfilled, w.rejected) : i.push(w.fulfilled, w.rejected);
    });
    const d = [];
    this.interceptors.response.forEach(function(w) {
      d.push(w.fulfilled, w.rejected);
    });
    let u, p = 0, g;
    if (!m) {
      const f = [Mt.bind(this), void 0];
      for (f.unshift(...i), f.push(...d), g = f.length, u = Promise.resolve(n); p < g; )
        u = u.then(f[p++], f[p++]);
      return u;
    }
    g = i.length;
    let b = n;
    for (; p < g; ) {
      const f = i[p++], w = i[p++];
      try {
        b = f(b);
      } catch (y) {
        w.call(this, y);
        break;
      }
    }
    try {
      u = Mt.call(this, b);
    } catch (f) {
      return Promise.reject(f);
    }
    for (p = 0, g = d.length; p < g; )
      u = u.then(d[p++], d[p++]);
    return u;
  }
  getUri(t) {
    t = ue(this.defaults, t);
    const n = fn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return cn(n, t.params, t.paramsSerializer);
  }
};
l.forEach(["delete", "get", "head", "options"], function(t) {
  le.prototype[t] = function(n, s) {
    return this.request(
      ue(s || {}, {
        method: t,
        url: n,
        data: (s || {}).data
      })
    );
  };
});
l.forEach(["post", "put", "patch"], function(t) {
  function n(s) {
    return function(o, a, i) {
      return this.request(
        ue(i || {}, {
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
  le.prototype[t] = n(), le.prototype[t + "Form"] = n(!0);
});
let $r = class yn {
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
      s.reason || (s.reason = new Ne(o, a, i), n(s.reason));
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
      token: new yn(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function Br(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Wr(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const tt = {
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
Object.entries(tt).forEach(([e, t]) => {
  tt[t] = e;
});
function wn(e) {
  const t = new le(e), n = Xt(le.prototype.request, t);
  return l.extend(n, le.prototype, t, { allOwnKeys: !0 }), l.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return wn(ue(e, r));
  }, n;
}
const U = wn(Oe);
U.Axios = le;
U.CanceledError = Ne;
U.CancelToken = $r;
U.isCancel = un;
U.VERSION = gn;
U.toFormData = He;
U.AxiosError = R;
U.Cancel = U.CanceledError;
U.all = function(t) {
  return Promise.all(t);
};
U.spread = Br;
U.isAxiosError = Wr;
U.mergeConfig = ue;
U.AxiosHeaders = W;
U.formToJSON = (e) => ln(l.isHTMLForm(e) ? new FormData(e) : e);
U.getAdapter = hn.getAdapter;
U.HttpStatusCode = tt;
U.default = U;
const {
  Axios: to,
  AxiosError: no,
  CanceledError: so,
  isCancel: ro,
  CancelToken: oo,
  VERSION: ao,
  all: io,
  Cancel: co,
  isAxiosError: lo,
  spread: uo,
  toFormData: fo,
  AxiosHeaders: po,
  HttpStatusCode: mo,
  formToJSON: ho,
  getAdapter: go,
  mergeConfig: yo
} = U, qr = (e, t) => {
  const n = U.create({
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
      s.reference_doctype && r.append("reference_doctype", s.reference_doctype), s.reference_name && r.append("reference_name", s.reference_name), r.append("message", s.message), r.append("to", s.to), s.attach && r.append("attach", s.attach), s.content_type && r.append("content_type", s.content_type), s.reply_to !== void 0 && r.append("reply_to", s.reply_to || ""), (i = s.links) != null && i.length && r.append("links", JSON.stringify(s.links));
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
      const r = "/api/method/upload_file", o = new FormData();
      return o.append("file", s), (await n.post(r, o)).data;
    },
    getIncomingCommunications: async (s) => {
      const r = new URLSearchParams();
      r.set("user", s);
      const o = `/api/method/crm_integration.crm_integration.api.dashboard.get_incoming_communications?${r.toString()}`;
      return (await n.get(o)).data;
    }
  };
}, zr = (e, t, n) => {
  const s = ae(() => e ? qr(e, t) : null, [e, t]);
  return ae(() => s ? {
    getMessages: async (r, o) => ((await s.getMessages({ reference_doctype: r, reference_name: o })).message || []).map((m) => zt(m)).filter((m) => !!m),
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
      var i;
      const o = await s.uploadFile(r);
      return { file_url: ((i = o.message) == null ? void 0 : i.file_url) || o.file_url || "" };
    },
    sendReadReceipt: async (r) => {
      await s.sendReadReceipt({ name: r });
    },
    getUnreadCount: async (r, o) => {
      var a, i;
      if (!t || !n) return 0;
      try {
        const d = ((a = (await s.getIncomingCommunications(n)).message) == null ? void 0 : a.data) || [];
        return !r && !o ? d.filter((p) => p.type === "whatsapp").reduce((p, g) => p + (g.counts || 0), 0) : ((i = d.find(
          (p) => p.type === "whatsapp" && (r && p.from === r || o && p.customer === o)
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
}, Hr = (e, t) => {
  if (!e) return null;
  const { showNotification: n, showWarning: s, showError: r } = t;
  return !n && !s && !r ? e : {
    ...e,
    showNotification: n || e.showNotification,
    showWarning: s || e.showWarning,
    showError: r || e.showError
  };
}, bn = (e) => {
  const {
    apiAdapter: t,
    config: n,
    socketAdapter: s,
    baseURL: r,
    token: o,
    socketConnected: a,
    currentUserEmail: i,
    phone: m,
    refDoctype: d = "Contact",
    refName: u = "",
    links: p = [],
    isChatOpen: g,
    showNotification: b,
    showWarning: f,
    showError: w
  } = e, y = zr(r, o, i), S = t || y, A = ae(
    () => Hr(S, { showNotification: b, showWarning: f, showError: w }),
    [S, b, f, w]
  ), N = ae(() => n || {
    currentUser: i || "",
    doctype: d,
    refName: u || "",
    phone: m || "",
    links: p,
    isChatOpen: g,
    apiBaseUrl: r
  }, [n, i, d, u, m, p, g, r]), C = ae(() => {
    if (a !== void 0)
      return { isConnected: a };
  }, [a]);
  return {
    apiAdapter: A,
    config: N,
    finalSocketAdapter: s || C
  };
}, Jr = () => {
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
    selectedTemplate: d,
    setSelectedTemplateText: u,
    setSelectedTemplateName: p,
    setSelectedTemplate: g,
    attachedFile: b,
    templates: f,
    isLoadingTemplates: w,
    sendMessage: y,
    handleTemplateSelect: S,
    handleFileSelect: A,
    handleFileRemove: N,
    uploadFileMutation: C
  } = us();
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-chat-container", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header", children: [
        /* @__PURE__ */ c.jsx("div", { className: "whatsapp-header-avatar", children: /* @__PURE__ */ c.jsx(Bn, { size: 20, color: "#008069" }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-header-info", children: [
          /* @__PURE__ */ c.jsx("h4", { children: "WhatsApp Chat" }),
          /* @__PURE__ */ c.jsx("span", { className: s ? "connection-status connected" : "connection-status reconnecting", children: s ? "● Connected" : "○ Reconnecting..." })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(ns, { messages: e, isLoading: t, error: n }),
      /* @__PURE__ */ c.jsx(
        os,
        {
          onSend: y,
          isLoading: t || r || C.isPending,
          isUploading: C.isPending,
          isSending: r,
          onTemplateClick: () => a(!0),
          templateText: i,
          selectedTemplateName: m,
          selectedTemplate: d,
          onClearTemplate: () => {
            p(void 0), u(void 0), g(void 0);
          },
          attachedFile: b,
          onFileSelect: A,
          onFileRemove: N
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      rt,
      {
        open: o,
        onClose: () => a(!1),
        width: "700px",
        header: /* @__PURE__ */ c.jsx("h4", { className: "text-base font-semibold", children: "Select WhatsApp Template" }),
        children: /* @__PURE__ */ c.jsx(cs, { templates: f, onSelect: S, isLoading: w })
      }
    )
  ] });
}, Vr = ({
  apiAdapter: e,
  config: t,
  socketAdapter: n,
  socketPayload: s,
  socketConnected: r,
  baseURL: o,
  token: a,
  currentUserEmail: i,
  phone: m,
  refDoctype: d = "Contact",
  refName: u = "",
  links: p = [],
  showNotification: g,
  showWarning: b,
  showError: f
}) => {
  const { apiAdapter: w, config: y, finalSocketAdapter: S } = bn({
    apiAdapter: e,
    config: t,
    socketAdapter: n,
    baseURL: o,
    token: a,
    socketConnected: r,
    currentUserEmail: i,
    phone: m,
    refDoctype: d,
    refName: u,
    links: p,
    isChatOpen: !0,
    // Standalone component assumes it is active/open if rendered
    showNotification: g,
    showWarning: b,
    showError: f
  });
  return !w || !y ? null : /* @__PURE__ */ c.jsx(Zn, { apiAdapter: w, config: y, socketAdapter: S, socketPayload: s, children: /* @__PURE__ */ c.jsx(Jr, {}) });
}, Ue = /* @__PURE__ */ new Set();
function Yr(e, t, n, s, r, o) {
  const a = Le((g) => g.incomingData), i = Le((g) => g.setIncomingData), m = Le((g) => g.handleIncomingMessage), d = Le((g) => g.clearContact), u = ae(() => {
    if (!s && !r)
      return a.filter((b) => b.type === "whatsapp").reduce((b, f) => b + (f.counts || 0), 0);
    const g = a.find(
      (b) => b.type === "whatsapp" && (s && b.from === s || r && b.customer === r)
    );
    return (g == null ? void 0 : g.counts) ?? 0;
  }, [a, s, r]), p = Me(async () => {
    if (e.getIncomingCommunications)
      try {
        const g = await e.getIncomingCommunications("");
        i(g);
      } catch (g) {
        console.error("Failed to fetch incoming communications:", g);
      }
    else
      try {
        await e.getUnreadCount(s || "", r || "");
      } catch (g) {
        console.error("Failed to fetch unread count:", g);
      }
  }, [e, s, r, i]);
  return J(() => {
    p();
  }, [p]), J(() => {
    o ? d(s, r) : p();
  }, [o, s, r, d, p]), J(() => {
    if (!e) return;
    const g = e.onMessageSent;
    return e.onMessageSent = () => {
      p(), g && g();
    }, () => {
      e.onMessageSent && (e.onMessageSent = g);
    };
  }, [e, p]), J(() => {
    if (!(t != null && t.onMessage)) return;
    const g = async (b) => {
      if (b.is_outbound === 0) {
        if (m(b), !o && b.name && !Ue.has(b.name) && (Ue.add(b.name), e.showNotification)) {
          const f = b.sender || b.from_name || "Customer";
          let w = "";
          (b.message || "").trim() ? w = `: ${b.message}` : b.content_type ? w = `: Sent a ${b.content_type}` : b.attach ? w = ": Sent an attachment" : w = " (New message)", e.showNotification("WhatsApp", `${f}${w}`);
        }
      } else
        p();
    };
    return t.onMessage(g), () => {
      var b;
      return (b = t.offMessage) == null ? void 0 : b.call(t, g);
    };
  }, [t, e, p, m]), J(() => {
    if (!n || n.event !== "whatsapp_message") return;
    const g = n.message;
    if (g) {
      if (m(g), !o && g.name && !Ue.has(g.name) && (Ue.add(g.name), e.showNotification)) {
        const b = (g.from_name || g.profile_name || s || "Customer").trim();
        let f = "";
        (g.message || "").trim() ? f = `: ${g.message}` : g.content_type || g.type ? f = `: Sent a ${g.content_type || g.type || "file"}` : g.attach ? f = ": Sent an attachment" : f = " (New message)", e.showNotification("WhatsApp", `${b}${f}`);
      }
    } else
      p();
  }, [n, p, m, o, e, s]), u;
}
const wo = ({
  apiAdapter: e,
  config: t,
  socketAdapter: n,
  baseURL: s,
  token: r,
  socketPayload: o,
  socketConnected: a,
  currentUserEmail: i,
  phone: m,
  refDoctype: d = "Contact",
  refName: u = "",
  links: p = [],
  buttonLabel: g,
  icon: b,
  btnClassName: f = "",
  modalSize: w = "1024px",
  variant: y = "default",
  showNotification: S,
  showWarning: A,
  showError: N
}) => {
  const [C, P] = H(!1), { apiAdapter: v, config: O, finalSocketAdapter: V } = bn({
    apiAdapter: e,
    config: t,
    socketAdapter: n,
    baseURL: s,
    token: r,
    socketConnected: a,
    currentUserEmail: i,
    phone: m,
    refDoctype: d,
    refName: u,
    links: p,
    isChatOpen: C,
    showNotification: S,
    showWarning: A,
    showError: N
  }), F = Yr(v, V, o, m, u || void 0, C), G = () => P(!C);
  return v ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    y === "plain" ? /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: f,
        onClick: G,
        style: {
          position: "relative",
          ...typeof f == "string" && f.includes("button") ? {} : { border: "none", background: "none", cursor: "pointer", padding: 0 }
        },
        children: [
          b || g,
          F > 0 && /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-badge", style: { top: "-10px", right: "-10px" }, children: F })
        ]
      }
    ) : /* @__PURE__ */ c.jsxs("div", { className: `whatsapp-trigger-wrapper ${f}`, onClick: G, children: [
      /* @__PURE__ */ c.jsxs("div", { className: "whatsapp-trigger-icon-container", children: [
        b || /* @__PURE__ */ c.jsx(Yn, { size: 20, color: "#175353" }),
        F > 0 && /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-badge", children: F })
      ] }),
      /* @__PURE__ */ c.jsx("span", { className: "whatsapp-trigger-label", children: g })
    ] }),
    /* @__PURE__ */ c.jsx(
      rt,
      {
        open: C,
        onClose: G,
        width: w,
        header: /* @__PURE__ */ c.jsx("h3", { style: { margin: 0, fontSize: "1.1rem" }, children: "WhatsApp Chat" }),
        children: /* @__PURE__ */ c.jsx(Vr, { apiAdapter: v, config: O, socketAdapter: V, socketPayload: o })
      }
    )
  ] }) : null;
};
export {
  es as WhatsAppMessageSkeleton,
  as as WhatsAppTemplateSkeleton,
  Vr as WhatsappChat,
  Zn as WhatsappChatProvider,
  wo as WhatsappChatTrigger,
  Jr as WhatsappChatWidget,
  Yr as useWhatsappBadgeCount,
  st as useWhatsappChatConfig,
  us as useWhatsappWidgetLogic,
  se as useWhatsappWidgetZustand
};
