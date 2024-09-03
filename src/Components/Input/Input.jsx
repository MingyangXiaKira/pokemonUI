import React from "react";
import "./input.scss";

// output
const Input = ({ content }) => {
  const width = `${content.length}ch`; // 动态计算宽度
  const animationDuration = `${content.length / 20}s`; // 根据字符长度设置动画持续时间
  const steps = content.length; // 根据字符长度设置steps
  console.log([width, animationDuration, steps]);
  return (
    <div
      className="typing-animation"
      style={{
        width,
        maxWidth: width,
        animation: `typing ${animationDuration} steps(${steps}), blink 1s infinite`,
      }}
    >
      {content}
    </div>
  );
};

export default Input;
