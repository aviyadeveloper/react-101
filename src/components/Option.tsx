import React from "react";

type OptionProps = {
  option: string;
  removeOption(option: string): void;
};

export const Option = (props: OptionProps) => (
  <div>
    <li>
      {props.option}
      <button
        className="button button--link"
        onClick={e => {
          props.removeOption(props.option);
        }}
      >
        remove
      </button>
    </li>
  </div>
);
