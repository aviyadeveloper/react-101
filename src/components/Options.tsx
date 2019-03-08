import React from "react";
import { Option } from "./Option";

interface IOptionsProps {
  options: string[];
  removeAllOptions(): void;
  removeOption(option: string): void;
}

export const Options = (props: IOptionsProps) => (
  <div>
    <ul className="options">
      {props.options.map(o => (
        <Option key={o} option={o} removeOption={props.removeOption} />
      ))}
    </ul>
  </div>
);
