import React from "react";
import { Option } from "./Option";

type OptionsProps = {
  options: string[];
  removeAllOptions(): void;
  removeOption(option: string): void;
};

export const Options = (props: OptionsProps) => {
  return (
    <div>
      <button onClick={props.removeAllOptions}>Remove all options</button>
      <ul>
        <h3>Options go here:</h3>
        {props.options.map(o => (
          <Option key={o} option={o} removeOption={props.removeOption} />
        ))}
      </ul>
    </div>
  );
};
