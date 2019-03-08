import React from "react";
import Modal from "react-modal";

interface IOptionModalProps {
  selectedOption: string;
  resetSelectedOption(): void;
}

export const OptionModal = (props: IOptionModalProps) => (
  <Modal
    isOpen={!!props.selectedOption}
    // onAfterOpen={props.afterOpenModal}
    closeTimeoutMS={200}
    onRequestClose={props.resetSelectedOption}
    className="modal"
    // style={customStyles}
    contentLabel="Selected Option"
  >
    <h4 className="modal__title">The President Elect Is:</h4>
    {!!props.selectedOption && (
      <p className="modal__result">{props.selectedOption}</p>
    )}
    <button
      className="button button--padded"
      onClick={props.resetSelectedOption}
    >
      OK! When's the next flight to Mars?
    </button>
  </Modal>
);
