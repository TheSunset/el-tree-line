import { defineComponent as c, useCssVars as p, computed as v, createElementBlock as a, openBlock as r, renderSlot as h, createElementVNode as m, Fragment as L, renderList as g, normalizeStyle as d, normalizeClass as C } from "vue";
const X = { class: "el-tree-line" }, y = /* @__PURE__ */ c({
  __name: "ElTreeLine",
  props: {
    node: {},
    indent: { default: 18 },
    offsetX: { default: 12 },
    lineXDelta: { default: -8 },
    leafLineXDelta: { default: 4 },
    lineConfig: { default() {
      return {
        color: "#f00",
        style: "solid",
        width: "1px"
      };
    } }
  },
  setup(n) {
    p((e) => ({
      "2aca79e0": e.lineConfig.width,
      "2b309a0a": e.lineConfig.style,
      "2cf876a6": e.lineConfig.color
    }));
    const s = n, i = v(() => {
      const { node: e } = s, t = [];
      let l = e;
      for (; l; ) {
        let o = l.parent;
        o && (o.childNodes.findIndex((u) => u.id === l.id) !== o.childNodes.length - 1 ? t.unshift({
          level: l.level,
          isHalf: !1
        }) : l.id === e.id && t.unshift({
          level: l.level,
          isHalf: !0
        })), l = o;
      }
      return t;
    });
    return (e, t) => (r(), a("div", X, [
      h(e.$slots, "node-label", {}, void 0, !0),
      (r(!0), a(L, null, g(i.value, (l) => (r(), a("span", {
        class: C(["verticle-line", { "is-leaf": l.isHalf }]),
        style: d({ left: e.indent * (l.level - 2) + e.offsetX + "px" })
      }, null, 6))), 256)),
      m("span", {
        class: "horizontal-line",
        style: d({
          width: (e.node.isLeaf ? e.indent + e.leafLineXDelta : e.indent + e.lineXDelta) + "px",
          left: (e.node.level - 2) * e.indent + e.offsetX + "px"
        })
      }, null, 4)
    ]));
  }
}), E = (n, s) => {
  const i = n.__vccOpts || n;
  for (const [e, t] of s)
    i[e] = t;
  return i;
}, f = /* @__PURE__ */ E(y, [["__scopeId", "data-v-1f519279"]]);
f.install = function(n) {
  n.component("ElTreeLine", f);
};
export {
  f as default
};
