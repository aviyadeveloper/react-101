import React from "react";

interface IOptionProps {
  option: string;
  removeOption(option: string): void;
}

export const Option = (props: IOptionProps) => (
  <div>
    <li className="options__option">
      <span className="options__option__text">{props.option}</span>
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
