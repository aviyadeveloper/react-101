import React from "react";

interface IActionProps {
  hasOptions: boolean;
  pickRandomOption(event: React.MouseEvent): void;
}

export const Action = (props: IActionProps) => (
  <div>
    <button
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.pickRandomOption}
    >
      Elect President
    </button>
  </div>
);
