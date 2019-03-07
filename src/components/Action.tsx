import React from "react";

type ActionProps = {
  hasOptions: boolean;
  pickRandomOption(event: React.MouseEvent): void;
};

export const Action = (props: ActionProps) => (
  <div>
    <button disabled={!props.hasOptions} onClick={props.pickRandomOption}>
      Randomize Now
    </button>
  </div>
);
