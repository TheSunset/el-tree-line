<template>
  <div class="el-tree-line">
    <slot name="node-label"></slot>
    <span
      v-for="item in lineVerticalList"
      class="verticle-line"
      :class="{ 'is-leaf': item.isHalf }"
      :style="{ left: indent * (item.level - 1) - 6 + 'px' }"
    >
    </span>
    <span
      class="horizontal-line"
      :style="{
        width: (node.isLeaf ? 24 : 8) + 'px',
        left: (node.level - 1) * indent - 6 + 'px',
      }"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IProps {
  node: Record<string, any>;
  indent?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  indent: 18,
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
$--element-tree-line-color: #dcdfe6;
$--element-tree-line-style: dashed;
$--element-tree-line-width: 1px;

$--element-tree-line-color: #ff0000;
$--element-tree-line-style: solid;
$--element-tree-line-width: 1px;
.el-tree-line {
  .verticle-line {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-left: $--element-tree-line-width $--element-tree-line-style $--element-tree-line-color;

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
    border-bottom: $--element-tree-line-width $--element-tree-line-style $--element-tree-line-color;
  }
}

:global(.el-tree.el-tree-line-root .el-tree-node__content) {
  position: relative;
}

:global(.el-tree.el-tree-line-root .el-tree-node > .el-tree-node__children) {
  overflow: visible;
}
</style>
