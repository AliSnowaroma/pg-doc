---
title: 快速上手
order: 2
group:
  path: /formake
  title: formake
  order: 4
---

## 基础使用

```js
yarn add antd -S
yarn add formake -S

import { GenerateForm, GenerateFormItems, useWatchForm } from 'formake'

// ...
```

## GenerateForm

```js
import React from 'react';
import { GenerateForm, useWatchForm } from 'formake';
// ...
const [form] = useWatchForm(); // 也可以使用antd useForm, useWatchForm不支持扩展

return (
  <>
    <GenerateForm
      formData={formData}
      labelCol={{ span: 6 }}
      wrapperCol={{ offset: 1 }}
      form={form}
      onValuesChange={onValuesChange}
      initialValues={initVal}
    />
  </>
);
```

或者：

```js
import React from 'react'
import { GenerateForm, GenerateFormItems, useWatchForm } from 'formake'
import { Form, Input } from 'antd'
// ...

return <>
  <GenerateForm
    formData={formData}
    labelCol={{span:6}}
    wrapperCol={{ offset: 1}}
    form={form}
    onValuesChange={onValuesChange}
    initialValues={initVal}
  >
   <>
      <GenerateFormItems
        formItemConfig={formData}
        isEditor
        onFormItemClick={onFormItemClick}
      />
      <Form.Item name="test">
        <Input />
      </Form.Item>
    </>
  </>
  </>
```

### GenerateForm props

```ts
{
  formData: Array<FormItemData>; // 表单结构配置文件
  form: FormInstance; // 表单实例，扩展使用const [form] = useWatchForm()，支持事件配置等，后续有介绍
  useEvent: boolean; // 是否开启动态事件配置
  isEditor: boolean; // 表单是否可编辑
  onValuesChange: Funciton; // 同antd
  className: string; // class名称
  children: ReactNode; // 可以用GenerateForm包裹子元素，子元素用 Antd FormItem包裹即可
  // ...                       // GenerateForm其他属性同Antd Form属性
}
```

## GenerateFormItems

GenerateForItemms 用来生成 form 片段，如果表单项有特别复杂定制的，可以使用 GenerateFormItems 生成表单片段

```ts
import React from 'react'
import { Form } from 'antd'
import { GenerateForm, GenerateFormItems, useWatchForm } from 'formake'

return (
  <>
    <Form
      form={form}
    >
      <>
        <GenerateFormItems
          formItemConfig={formData}
          isEditor
          onFormItemClick={onFormItemClick}
        />
        <Form.Item name="test">
          <Input />
        </Form.Item>
      </>
    </>
  </>
)
```

### GenerateFormItems props

<font size='3' face="宋体">GenerateFormItems 主要是用来生成局部表单项</font>

```ts
formItemConfig Array<FormItemData>;  // 同GenerateForm
isEditor: boolean;         // 同GenerateForm
onFormItemClick            // 表单项点击事件
```

## formData 表单配置文档

### 1, 基础组件配置

```ts
type FormData = Array<{
  marktype: string;            // 组件类型 必须
  param: string;               // 字段名称 必须,
  label?: string;              // 表单项label,
  type?: string;               // 日期组件type,
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
}>
```

## 已经支持的组件类型

**input, select, textarea, radio, checkbox, rangePicker, datePicker, switch, upload, rate, timePicker, progress, slide, inputNumber, color（色板）**
