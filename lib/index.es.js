import { defineComponent as p, computed as u, createElementBlock as r, openBlock as a, renderSlot as v, createElementVNode as m, Fragment as h, renderList as _, normalizeStyle as d, normalizeClass as L } from "vue";
const E = { class: "el-tree-line" }, N = /* @__PURE__ */ p({
  __name: "ElTreeLine",
  props: {
    node: {},
    indent: { default: 18 }
  },
  setup(n) {
    const o = n, i = u(() => {
      const { node: e } = o, t = [];
      let l = e;
      for (; l; ) {
        let s = l.parent;
        s && (s.childNodes.findIndex((f) => f.id === l.id) !== s.childNodes.length - 1 ? t.unshift({
          level: l.level,
          isHalf: !1
        }) : l.id === e.id && t.unshift({
          level: l.level,
          isHalf: !0
        })), l = s;
      }
      return t;
    });
    return (e, t) => (a(), r("div", E, [
      v(e.$slots, "node-label", {}, void 0, !0),
      (a(!0), r(h, null, _(i.value, (l) => (a(), r("span", {
        class: L(["verticle-line", { "is-leaf": l.isHalf }]),
        style: d({ left: e.indent * (l.level - 1) - 6 + "px" })
      }, null, 6))), 256)),
      m("span", {
        class: "horizontal-line",
        style: d({
          width: (e.node.isLeaf ? 24 : 8) + "px",
          left: (e.node.level - 1) * e.indent - 6 + "px"
        })
      }, null, 4)
    ]));
  }
}), x = (n, o) => {
  const i = n.__vccOpts || n;
  for (const [e, t] of o)
    i[e] = t;
  return i;
}, c = /* @__PURE__ */ x(N, [["__scopeId", "data-v-5a6985ce"]]);
c.install = function(n) {
  n.component("ElTreeLine", c);
};
export {
  c as default
};
