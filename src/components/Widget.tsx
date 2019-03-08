import React from "react";
import { Options } from "./Options";
import { AddOption } from "./AddOption";

interface WidgetProps {
  options: string[];
  removeAllOptions(): void;
  removeOption(option: string): void;
  handleAddOption(option: string): string | undefined;
}

export const Widget = (props: WidgetProps) => (
  <div className="widget">
    <div className="widget__header">
      <h3 className="widget__header__title">Canditates:</h3>
      <button className="button button--link" onClick={props.removeAllOptions}>
        Reset Canditates
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
