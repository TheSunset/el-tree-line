import { defineComponent as p, useCssVars as c, computed as h, createElementBlock as a, openBlock as d, renderSlot as m, createElementVNode as v, Fragment as L, renderList as g, normalizeStyle as r } from "vue";
const X = { class: "el-tree-line" }, b = /* @__PURE__ */ p({
  __name: "ElTreeLine",
  props: {
    node: {},
    indent: { default: 18 },
    offsetX: { default: 12 },
    lineXDelta: { default: -8 },
    leafLineXDelta: { default: 4 },
    lineConfig: { default() {
      return {
        color: "#a9abb2",
        style: "solid",
        width: "1px"
      };
    } },
    radius: { default: 4 }
  },
  setup(l) {
    c((e) => ({
      "4598e8bb": e.lineConfig.width,
      "4565d8a6": e.lineConfig.style,
      "4481ea58": e.lineConfig.color,
      "8f355142": e.radius
    }));
    const s = l, i = h(() => {
      const { node: e } = s, t = [];
      let n = e;
      for (; n; ) {
        let o = n.parent;
        o && o.childNodes.findIndex((u) => u.id === n.id) !== o.childNodes.length - 1 && t.unshift({
          level: n.level
        }), n = o;
      }
      return t;
    });
    return (e, t) => (d(), a("div", X, [
      m(e.$slots, "node-label", {}, void 0, !0),
      (d(!0), a(L, null, g(i.value, (n) => (d(), a("span", {
        class: "verticle-line",
        style: r({ left: e.indent * (n.level - 2) + e.offsetX + "px" })
      }, null, 4))), 256)),
      v("span", {
        class: "horizontal-line",
        style: r({
          width: (e.node.isLeaf ? e.indent + e.leafLineXDelta : e.indent + e.lineXDelta) + "px",
          left: (e.node.level - 2) * e.indent + e.offsetX + "px"
        })
      }, null, 4)
    ]));
  }
}), y = (l, s) => {
  const i = l.__vccOpts || l;
  for (const [e, t] of s)
    i[e] = t;
  return i;
}, f = /* @__PURE__ */ y(b, [["__scopeId", "data-v-c7b39af0"]]);
f.install = function(l) {
  l.component("ElTreeLine", f);
};
export {
  f as default
};
