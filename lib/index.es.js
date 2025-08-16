import { defineComponent as c, useCssVars as p, computed as h, createElementBlock as d, openBlock as r, renderSlot as m, createElementVNode as v, Fragment as L, renderList as g, normalizeStyle as a } from "vue";
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
        color: "#a9abb2",
        style: "solid",
        width: "1px"
      };
    } },
    radius: { default: 4 }
  },
  setup(l) {
    p((e) => ({
      ce22c8ec: e.lineConfig.width,
      ce88e916: e.lineConfig.style,
      d050c5b2: e.lineConfig.color,
      e0731e24: e.radius
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
    return (e, t) => (r(), d("div", X, [
      m(e.$slots, "node-label", {}, void 0, !0),
      (r(!0), d(L, null, g(i.value, (n) => (r(), d("span", {
        class: "verticle-line",
        style: a({ left: e.indent * (n.level - 2) + e.offsetX + "px" })
      }, null, 4))), 256)),
      v("span", {
        class: "horizontal-line",
        style: a({
          width: (e.node.isLeaf ? e.indent + e.leafLineXDelta : e.indent + e.lineXDelta) + "px",
          left: (e.node.level - 2) * e.indent + e.offsetX + "px"
        })
      }, null, 4)
    ]));
  }
}), C = (l, s) => {
  const i = l.__vccOpts || l;
  for (const [e, t] of s)
    i[e] = t;
  return i;
}, f = /* @__PURE__ */ C(y, [["__scopeId", "data-v-65be0da1"]]);
f.install = function(l) {
  l.component("ElTreeLine", f);
};
export {
  f as default
};
