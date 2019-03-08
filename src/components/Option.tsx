import React from "react";

type OptionProps = {
  option: string;
  removeOption(option: string): void;
};

export const Option = (props: OptionProps) => (
  <div>
    <li className="widget-option">
      <span className="widget-option-text">{props.option}</span>
      <button
        className="button button--link button--right"
        onClick={e => {
          props.removeOption(props.option);
        }}
      >
        remove
      </button>
    </li>
  </div>
);
