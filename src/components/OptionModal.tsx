import React from "react";
import Modal from "react-modal";

type OptionModalProps = {
  selectedOption: string;
  resetSelectedOption(): void;
};
export const OptionModal = (props: OptionModalProps) => (
  <Modal
    isOpen={!!props.selectedOption}
    // onAfterOpen={props.afterOpenModal}
    onRequestClose={props.resetSelectedOption}
    // style={customStyles}
    contentLabel="Selected Option"
  >
    <h4>Randomizer! picked:</h4>
    {!!props.selectedOption && <h6>{props.selectedOption}</h6>}
    <button onClick={props.resetSelectedOption}>Great!</button>
  </Modal>
);
