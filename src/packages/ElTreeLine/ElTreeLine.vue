<template>
  <div class="el-tree-line">
    <slot name="node-label"></slot>
    <span
      v-for="item in lineVerticalList"
      class="verticle-line"
      :style="{ left: indent * (item.level - 2) + offsetX + 'px' }"
    >
    </span>
    <span
      class="horizontal-line"
      :style="{
        width: (node.isLeaf ? indent + leafLineXDelta : indent + lineXDelta) + 'px',
        left: (node.level - 2) * indent + offsetX + 'px',
      }"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type BorderStyle = "solid" | "dashed" | "double" | "dotted";

interface IBorderConfig {
  color?: string;
  style?: BorderStyle;
  width?: string;
}

interface IProps {
  node: Record<string, any>;
  indent?: number;
  offsetX?: number;
  lineXDelta?: number;
  leafLineXDelta?: number;
  lineConfig?: IBorderConfig;
  radius?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  indent: 18,
  offsetX: 12,
  lineXDelta: -8,
  leafLineXDelta: 4,
  radius: 4,
  lineConfig() {
    return {
      color: "#a9abb2",
      style: "solid",
      width: "1px",
    };
  },
});

const lineVerticalList = computed(() => {
  const { node } = props;
  const lineList = [];
  let currentNode = node;
  while (currentNode) {
    let parentNode = currentNode.parent;
    if (parentNode) {
      let index = parentNode.childNodes.findIndex((item: any) => item.id === currentNode.id);
      if (index !== parentNode.childNodes.length - 1) {
        lineList.unshift({
          level: currentNode.level,
        });
      }
    }
    currentNode = parentNode;
  }
  return lineList;
});
</script>

<style scoped lang="scss">
.el-tree-line {
  .verticle-line {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-left: v-bind("lineConfig.width") v-bind("lineConfig.style") v-bind("lineConfig.color");
  }

  .horizontal-line {
    position: absolute;
    bottom: calc(50% - 1px);
    left: 0;
    height: calc(50% + 2px);
    border-bottom: v-bind("lineConfig.width") v-bind("lineConfig.style") v-bind("lineConfig.color");
    border-left: v-bind("lineConfig.width") v-bind("lineConfig.style") v-bind("lineConfig.color");
    border-bottom-left-radius: calc(v-bind("radius") * 1px);
  }
}

:global(.el-tree.el-tree-line-root .el-tree-node__content) {
  position: relative;
}

:global(.el-tree.el-tree-line-root .el-tree-node > .el-tree-node__children) {
  overflow: visible;
}
</style>
