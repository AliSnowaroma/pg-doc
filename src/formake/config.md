---
title: form DSL
order: 2
group:
  path: /formake
  title: formake
  order: 4
---

## 基础组件

**已经支持的组件类型**

**input, select, textarea, radio, checkbox, rangePicker, datePicker, switch, upload, rate, timePicker, progress, slide, inputNumber, color（色板）**

dsl 定义：

```ts
interface FormItemDsl {
  marktype: string;            // 组件类型 必须
  param: string;               // 字段名称 必须,
  label?: string;              // 表单项label,
  placeholder?: string;        // 描述
  initialValue: strig | Array  // 初始值
  disabled?:boolean;           // 是否禁用
  rules?: Array<Rule>          // 同antd, 支持validator传入字符串函数
  labelCol?: Object;           // 同antd
  wrapperCol?: Object;         // 同antd
  eventConfig?: EventConfig;   // 事件配置信息，容器事件无该属性
  tabTitle?: string;           // 用在tabContainer中时配置
  rowCol?: Object;             // 使用rowContainer时，配置元素在一行中占比，通antd
  ...?                         // 同 Antd Form.Item属性
  ...                          // 其他用于容器组件的属性，不同容器不同
}
```

**说明**

基础组件继承了 antd 的 api，可根据业务需要配置

## 容器组件

### 简介

<font size='3' face="宋体">容器组件共有四个，用于复杂表单的配置</font>

> - rowContainer 行容器
> - colContainer 列容器
> - tabContainer tab 切换容器
> - listContainer 列表容器

### 1，rowContainer

<font size='3' face="宋体">rowContainer 可以嵌套其他组件，也可以被其他组件嵌套，支持多层</font>

```ts
interface FormItemDsl {
  marktype: string;
  // ...
}
interface RowContainerConfig {
  marktype: 'rowContainer';
  param?: string; // 合成字段名称，若填写，容器内部的字段可以被自动收集
  labelCol?: Object; // 同antd
  wrapperCol?: Object; // 同antd
  label?: string; // 表单项label,
  column: number; // 每行显示几列
  items: Array<FormItemDsl>; // 容器内表单配置项，可以配置基本组件，容器组件，支持多层嵌套
}
```

### 2, columnContainer

<font size='3' face="宋体">columnContainer 可以嵌套其他组件，也可以被其他组件嵌套</font>

```ts
interface FormItemDsl {
  marktype: string;
  // ...
}
interface ColumnContainerConfig {
  marktype: 'columnContainer';
  param?: string; // 合成字段名称，若填写，容器内部的字段可以被自动收集
  labelCol?: Object; // 同antd
  wrapperCol?: Object; // 同antd
  label?: string; // 表单项label,
  columnCol?: Object; // 列所占宽度，用法同labelCol
  items: Array<FormItemDsl>; // 容器内表单配置项，可以配置基本组件，容器组件，支持多层嵌套
}
```

### 3, tabContainer

<font size='3' face="宋体">
使用tabContainer组件，items表单项需要添加tabTitle属性，用于显示tab的标题
tabContainer可以嵌套其他组件，也可以被其他组件嵌套，支持多层
</font>

```ts
interface FormDataItem {
  marktype: string;
  // ...
}
interface TabContainerConfig {
  marktype: 'tabContainer';
  param?: string; // 合成字段名称，若填写，容器内部的字段可以被自动收集
  labelCol?: Object; // 同antd
  wrapperCol?: Object; // 同antd
  label?: string; // 表单项label,
  items: Array<FormDataItem>; // 容器内表单配置项，可以配置基本组件，容器组件，支持多层嵌套
}
```

### 4, listContainer 使用和配置

<font size='3' face="宋体">
listContainer可以嵌套其他组件，也可以被其他组件嵌套，支持多层
**listContainer组件不支持嵌套listContainer组件**，如果需要这样的数据结构，可以进行其他方式拆分组合
</font>

```ts
interface FormDataItem {
  marktype: string;
  // ...
}
interface Config {
  marktype: 'rowContainer';
  param: string; // 必填
  labelCol?: string; // 同antd
  wrapperCol?: string; // 同antd
  label?: string; // 表单项label,
  column: number; // 每行显示几列
  items: Array<FormDataItem>; // 容器内表单配置项，可以配置基本组件，容器组件，支持多层嵌套
}
```

**说明：** <font size='3' face="宋体"> 容器组件和内部基础组件的尺寸均可以通过组合调节 labelCol, wrapperCol, columnCol 实现 </font>

## 实例

```js
import React from 'react';
import { GenerateForm, useWatchForm } from 'formake';
// import './index.scss'

export default function App() {
  const [form] = useWatchForm();

  const formData = [
    {
      marktype: 'rowContainer',
      param: 'fontsize',
      column: 3,
      label: '基础信息',
      items: [
        {
          marktype: 'input',
          param: 'name',
          label: '名称',
          initialValue: '军工仪表',
          disabled: false,
        },
        {
          marktype: 'input',
          param: 'width',
          label: '宽度',
          disabled: false,
        },
        {
          marktype: 'input',
          param: 'height',
          label: '长度',
          disabled: false,
        },
      ],
    },
    {
      marktype: 'radio',
      param: 'showLegend',
      label: '显示图例',
      eventConfig: {
        modify: [
          {
            triggerValue: ['0'],
            modifyField: 'teamleaderTel',
            newFormItemConfig: {
              disabled: true,
            },
          },
        ],
      },
      options: [
        {
          value: '1',
          label: '是',
        },
        {
          value: '0',
          label: '否',
        },
      ],
    },
    {
      marktype: 'tabContainer',
      param: 'style',
      label: '图表样式',
      items: [
        {
          marktype: 'columnContainer',
          tabTitle: '字体',
          param: 'font',
          columnCol: { span: 24, offset: 0 },
          items: [
            {
              marktype: 'input',
              param: 'fontsize',
              label: '大小',
              initialValue: 14,
              disabled: false,
            },
            {
              marktype: 'color',
              param: 'color',
              label: '颜色',
              initialValue: 'red',
              disabled: false,
            },
          ],
        },
        {
          marktype: 'columnContainer',
          tabTitle: '标线',
          param: 'line',
          columnCol: { span: 24, offset: 0 },
          type: '',
          items: [
            {
              marktype: 'inputNumber',
              param: 'lineWidth',
              initialValue: 1,
              label: '宽度',
            },
            {
              marktype: 'inputNumber',
              param: 'lineHeight',
              label: '长度',
            },
            {
              marktype: 'color',
              param: 'lineColor',
              initialValue: '#ffffff',
              label: '颜色',
            },
          ],
        },
        {
          marktype: 'columnContainer',
          tabTitle: '动效',
          param: 'animate',
          columnCol: { span: 24, offset: 0 },
          items: [
            {
              marktype: 'switch',
              param: 'showAnimate',
              label: '显示动画',
            },
            {
              marktype: 'switch',
              param: 'showTooltip',
              label: '信息框',
            },
            {
              marktype: 'inputNumber',
              param: 'animateTime',
              label: '动画时长',
            },
          ],
        },
      ],
    },
    {
      marktype: 'rowContainer',
      param: 'animateTypes',
      labelCol: { span: 6 },
      label: '图表动画',
      column: 2,
      items: [
        {
          marktype: 'columnContainer',
          param: 'out',
          label: '外环  ',
          items: [
            {
              marktype: 'columnContainer',
              param: 'basic',
              items: [
                {
                  marktype: 'listContainer',
                  param: 'basicList',
                  items: [
                    {
                      marktype: 'input',
                      param: 'basicTime',
                      placeholder: '时间',
                    },
                    {
                      marktype: 'input',
                      placeholder: '名称',
                      param: 'basicName',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          marktype: 'columnContainer',
          param: 'inside',
          label: '内环',
          items: [
            {
              marktype: 'columnContainer',
              param: 'far',
              items: [
                {
                  marktype: 'listContainer',
                  param: 'farList',
                  items: [
                    {
                      marktype: 'input',
                      placeholder: '名称',
                      param: 'farName',
                    },
                    {
                      marktype: 'input',
                      placeholder: '时间',
                      param: 'farTime',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      marktype: 'tabContainer',
      param: 'upjo;d',
      label: '维护人员',
      items: [
        {
          marktype: 'columnContainer',
          tabTitle: '总部',
          param: 'header',
          columnCol: { span: 24, offset: 0 },
          items: [
            {
              marktype: 'rowContainer',
              param: 'teamleader',
              column: 3,
              label: '组长',
              items: [
                {
                  marktype: 'input',
                  param: 'teamleaderName',
                  label: '姓名',
                  initialValue: 'xxx',
                  disabled: false,
                },
                {
                  marktype: 'input',
                  param: 'teamleaderTel',
                  label: '电话',
                  initialValue: '139695XXXXX',
                  disabled: false,
                },
                {
                  marktype: 'switch',
                  param: 'teamWatch',
                  label: '监控',
                  initialValue: true,
                  disabled: false,
                },
              ],
            },
            {
              marktype: 'listContainer',
              param: 'item',
              label: '组员',
              items: [
                {
                  marktype: 'input',
                  param: 'itemName',
                  label: '姓名',
                  placeholder: '姓名',
                },
                {
                  marktype: 'input',
                  placeholder: '电话',
                  label: '电话',
                  param: 'itemTel',
                },
              ],
            },
          ],
        },
        {
          marktype: 'columnContainer',
          tabTitle: '华东',
          param: 'east',
          columnCol: { span: 24, offset: 0 },
          type: '',
          items: [],
        },
        {
          marktype: 'input',
          tabTitle: '华南',
          param: 'south',
        },
        {
          marktype: 'columnContainer',
          tabTitle: '华西',
          param: 'west',
          columnCol: { span: 24, offset: 0 },
          items: [],
        },
        {
          marktype: 'columnContainer',
          tabTitle: '华北',
          param: 'north',
          columnCol: { span: 24, offset: 0 },
          items: [],
        },
      ],
    },
  ];

  return (
    <div className="container">
      <GenerateForm
        formData={formData}
        labelCol={{ span: 6 }}
        form={form}
        useEvent
        labelAlign="right"
        className="design-result-form"
      />
    </div>
  );
}
```
