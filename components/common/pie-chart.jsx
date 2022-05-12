import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie, G2 } from "@ant-design/plots";

const PieChart = () => {
  const G = G2.getEngine("canvas");
  const data = [
    {
      type: "分类一",
      value: 20,
    },
    {
      type: "Ali",
      value: 40,
    },
    {
      type: "分类三",
      value: 20,
    },
    {
      type: "popopo",
      value: 20,
    },
  ];
  const cfg = {
    appendPadding: 10,
    data,
    rendered: "canavs",
    angleField: "value",
    colorField: "type", // or seriesField in some cases
    color: ["#FFC100", "#B40F0F", "#1CC25E", "#F383A2"],
    radius: 0.75,
    legend: false,
    pieStyle: {
      cursor: "pointer",
      lineWidth: 3,
    },
    label: {
      type: "spider",
      labelHeight: 40,
      formatter: (data, mappingData) => {
        const group = new G.Group({});
        group.addShape({
          type: "circle",
          attrs: {
            x: 0,
            y: 0,
            width: 40,
            height: 50,
            r: 5,
            fill: mappingData.color,
          },
        });
        group.addShape({
          type: "text",
          attrs: {
            x: 10,
            y: 8,
            text: `${data.type}`,
            fill: mappingData.color,
          },
        });

        return group;
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };
  const config = cfg;
  return <Pie {...config} />;
};

export default PieChart;
