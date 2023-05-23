import React from 'react';
// import { Button } from 'antd' //使用antd时引入
import { Chart, Interval, Tooltip, getTheme } from 'bizcharts';

/**
 * @param props
 * data 组件数据
 * width height 组件宽高
 * configValues 动态配置json
 */
export default function App() {
  var data = [{
    year: '1951 年',
    sales: 38
  }, {
    year: '1952 年',
    sales: 52
  }, {
    year: '1956 年',
    sales: 61
  }, {
    year: '1957 年',
    sales: 45
  }, {
    year: '1958 年',
    sales: 48
  }, {
    year: '1959 年',
    sales: 38
  }, {
    year: '1960 年',
    sales: 38
  }, {
    year: '1962 年',
    sales: 38
  }];
  return /*#__PURE__*/React.createElement(Chart, {
    height: 300,
    autoFit: true,
    data: data
  }, /*#__PURE__*/React.createElement(Interval, {
    position: "year*sales",
    style: {
      lineWidth: 4,
      stroke: getTheme().colors10[0]
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    shared: true
  }));
}