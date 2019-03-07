import React from "react";

type OptionProps = {
  option: string;
  removeOption(option: string): void;
};

export const Option = (props: OptionProps) => {
  return (
    <div>
      <li>
        {props.option}
        <button
          onClick={e => {
            props.removeOption(props.option);
          }}
        >
          remove
        </button>
      </li>
    </div>
  );
};