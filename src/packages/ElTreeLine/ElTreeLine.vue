<template>
  <div class="el-tree-line">
    <slot name="node-label"></slot>
    <span
      v-for="item in lineVerticalList"
      class="verticle-line"
      :class="{ 'is-leaf': item.isHalf }"
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

type borderStyle = "solid" | "dashed" | "double" | "dotted";

interface IBorderConfig {
  color?: string;
  style?: borderStyle;
  width?: string;
}

interface IProps {
  node: Record<string, any>;
  indent?: number;
  offsetX?: number;
  lineXDelta?: number;
  leafLineXDelta?: number;
  lineConfig?: IBorderConfig;
}

const props = withDefaults(defineProps<IProps>(), {
  indent: 18,
  offsetX: 12,
  lineXDelta: -8,
  leafLineXDelta: 4,
  lineConfig() {
    return {
      color: "#f00",
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
          isHalf: false,
        });
      } else {
        if (currentNode.id === node.id) {
          lineList.unshift({
            level: currentNode.level,
            isHalf: true,
          });
        }
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
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-left: v-bind("lineConfig.width") v-bind("lineConfig.style") v-bind("lineConfig.color");

    &.is-leaf {
      height: 50%;
    }
  }

  .horizontal-line {
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    height: 0;
    border-bottom: v-bind("lineConfig.width") v-bind("lineConfig.style") v-bind("lineConfig.color");
  }
}

:global(.el-tree.el-tree-line-root .el-tree-node__content) {
  position: relative;
}

:global(.el-tree.el-tree-line-root .el-tree-node > .el-tree-node__children) {
  overflow: visible;
}
</style>
