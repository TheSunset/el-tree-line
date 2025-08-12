# el-tree-line

![npm](https://img.shields.io/npm/v/el-tree-line)
![npm bundle size](https://img.shields.io/bundlephobia/min/el-tree-line?color=red)
![npm](https://img.shields.io/npm/dt/el-tree-line)

> 给`element-plus`的`el-tree`组件增加结构层级连线，无入侵不影响`el-tree`原始功能。
>
> 思路参考了 https://github.com/GitOfZGT/element-tree-line 的实现。由于 `element-tree-line` 本人使用时结构连线对不齐。故写了此组件。后续会提供一些额外配置控制线条的偏移等。

## Installation

```bash
npm install el-tree-line --save
```

```bash
yarn add el-tree-line
```

## Usage

```vue
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
        <ElTreeLine :node="node">
          <template v-slot:node-label>
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
import ElTreeLine from "el-tree-line";

import "/lib/index.css";

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
```

## Props

| props         | type   | tip                                      |
| ------------- | ------ | ---------------------------------------- |
| options       | array  | 数据，一个数组                           |
| options.label | string | 每个分段的展示名称                       |
| options.value | any    | 每个分段的值，change 事件的回调结果      |
| @change       | 事件   | 分段改变触发的事件，参数为 options.value |

