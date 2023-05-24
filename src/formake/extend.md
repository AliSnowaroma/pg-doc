---
title: formake扩展
order: 5
group:
  path: /formake
  title: formake
  order: 4
---

## form 实例扩展

<font size='3' face="宋体">
简介：
useWatchForm基于Antd useForm封装，继承了useForm的所有功能，同时加入了设置值为对象的方法，获取值为对象的方法，值变化监测等功能。
</font>

```ts
import { useWatchForm } from 'formake';
const [form] = useWatchForm();
```

### 1，useWatchForm 监测功能

<font>
表单值更新时，formake自动发起值检测，自动更新表单配置文件进而影响视图
可以通过form.store.activeFormData获取最新的表单配置文件
</font>

### 2，setFormatFieldsValue 和 getFormatFieldsValue

<font>
form.getFieldsValue获取到的表单值是扁平化的，对于一些复杂业务场景，扁平化不利于业务理解，\
getFormatFieldsValue扩展自getFieldsValue，在获取值时可以直接获取到和配置文件相同的数据结构

setFormatFieldsValue 扩展自 form.setFieldsValue,支持设置嵌套对象，内部会自动根据配置文件进行扁平化处理。

setFormatFieldsValue 和 getFormatFieldsValue 主要应用于上述嵌套组件互相嵌套的场景。 </font>

## Demo

配置嵌套

```json
{
  "marktype": "columnContainer",
  "title": "columnContainer",
  "param": "style",
  "label": "样式",
  "items": [
    {
      "marktype": "inputNumber",
      "title": "inputNumber",
      "label": "大小",
      "disabled": false,
      "rules": [],
      "eventConfig": {
        "filter": [],
        "modify": []
      },
      "placeholder": "",
      "id": 1684571077997,
      "param": "fontSize"
    },
    {
      "marktype": "color",
      "title": "color",
      "param": "color",
      "label": "颜色",
      "disabled": false,
      "rules": [],
      "eventConfig": {
        "filter": [],
        "modify": []
      },
      "id": 1684571064671
    }
  ]
}
```

上面的配置，使用 formake 中 getFormateFieldsValue 可以得到

```js
style: {
  fontSize: '14px',
  color: '#ffffff'
}
```

同时也支持使用设置对象

```js
form.setFormatFieldsValue({
  style: {
    fontSize: '14px',
    color: '#ffffff',
  },
});
```
