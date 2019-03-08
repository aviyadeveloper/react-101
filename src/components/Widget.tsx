import React from "react";
import { Options } from "./Options";
import { AddOption } from "./AddOption";

interface IWidgetProps {
  options: string[];
  removeAllOptions(): void;
  removeOption(option: string): void;
  handleAddOption(option: string): string | undefined;
}

export const Widget = (props: IWidgetProps) => (
  <div className="widget">
    <div className="widget__header">
      <h3 className="widget__header__title">Canditates:</h3>
      <button className="button button--link" onClick={props.removeAllOptions}>
        Reset Candidates
      </button>
    </div>
    <Options
      options={props.options}
      removeAllOptions={props.removeAllOptions}
      removeOption={props.removeOption}
    />
    <AddOption handleAddOption={props.handleAddOption} />
  </div>
);
