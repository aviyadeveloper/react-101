import React from "react";
import { Option } from "./Option";

type OptionsProps = {
  options: string[];
  removeAllOptions(): void;
  removeOption(option: string): void;
};

export const Options = (props: OptionsProps) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-title">Canditates:</h3>
      <button className="button button--link" onClick={props.removeAllOptions}>
        Remove all options
      </button>
    </div>
    <ul className="widget-options">
      {props.options.map(o => (
        <Option key={o} option={o} removeOption={props.removeOption} />
      ))}
    </ul>
  </div>
);
