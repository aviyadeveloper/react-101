import React from "react";

type AddOptionProps = {
  handleAddOption(option: string): string | undefined;
};

type AddOptionState = {
  error: string | undefined;
};

export class AddOption extends React.Component<AddOptionProps, AddOptionState> {
  state: AddOptionState = {
    error: undefined
  };

  newOptionRef = React.createRef<HTMLInputElement>();

  addOption = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.newOptionRef.current) {
      this.newOptionRef;
      let option: string = this.newOptionRef.current.value.trim();
      let error = this.props.handleAddOption(option);

      this.setState(() => ({ error }));
      if (!error) {
        this.newOptionRef.current.value = "";
      }
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option__error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.addOption}>
          <input
            className="add-option__input"
            autoComplete="off"
            name="newOption"
            placeholder="add a new option..."
            ref={this.newOptionRef}
          />
          <button className="button button__add-option" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
