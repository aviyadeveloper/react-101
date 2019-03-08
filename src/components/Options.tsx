import React from "react";
import { Option } from "./Option";

type OptionsProps = {
  options: string[];
  removeAllOptions(): void;
  removeOption(option: string): void;
};

export const Options = (props: OptionsProps) => (
  <div>
    <ul className="options">
      {props.options.map(o => (
        <Option key={o} option={o} removeOption={props.removeOption} />
      ))}
    </ul>
  </div>
);
