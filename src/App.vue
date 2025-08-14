<template>
  <div class="app-container">
    <el-tree
      class="el-tree-line-root"
      :data="data"
      :highlight-current="true"
      :default-expand-all="true"
      :expand-on-click-node="false"
    >
      <template #default="{ node, data }">
        <ElTreeLine
          :node="node"
          :lineConfig="{ color: 'orange', style: 'solid', width: '1px' }"
        >
          <template #node-label>
            <div class="custom-tree-node">
              {{ data.label }}
            </div>
          </template>
        </ElTreeLine>
      </template>
    </el-tree>
  </div>
</template>

<script setup lang="ts">
import { ElTree } from "element-plus";
import ElTreeLine from "./packages/ElTreeLine/ElTreeLine.vue";

// @ts-ignore
// import ElTreeLine from "/lib/index.es.js";
// import "/lib/index.css";

const data = [
  {
    id: 1,
    label: "Level one 1",
    children: [
      {
        id: 4,
        label: "Level two 1-1",
        children: [
          {
            id: 9,
            label: "Level three 1-1-1",
          },
          {
            id: 10,
            label: "Level three 1-1-2",
          },
        ],
      },
      {
        id: 41,
        label: "Level two 2-1",
      },
    ],
  },
  {
    id: 2,
    label: "Level one 2",
    children: [
      {
        id: 5,
        label: "Level two 2-1",
      },
      {
        id: 6,
        label: "Level two 2-2",
      },
    ],
  },
  {
    id: 3,
    label: "Level one 3",
    children: [
      {
        id: 7,
        label: "Level two 3-1",
      },
      {
        id: 8,
        label: "Level two 3-2",
      },
      {
        id: 33,
        label: "Level two 3-3",
        children: [
          {
            id: 331,
            label: "Level two 3-3-1",
          },
          {
            id: 332,
            label: "Level two 3-3-2",
          },
          {
            id: 333,
            label: "Level two 3-3-3",
            children: [
              {
                id: 3331,
                label: "Level two 3-3-3-1",
              },
              {
                id: 3332,
                label: "Level two 3-3-3-2",
              },
            ],
          },
        ],
      },
      {
        id: 34,
        label: "Level two 3-4",
      },
    ],
  },
];
</script>

<style scoped lang="scss">
.app-container {
}
</style>
