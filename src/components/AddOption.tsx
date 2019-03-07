import React from "react";

type AddOptionProps = {
  handleAddOption(option: string): string | undefined;
};
type AddOptionState = {
  error: string | undefined;
};

export class AddOption extends React.Component<AddOptionProps, AddOptionState> {
  constructor(props: AddOptionProps) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  newOptionRef = React.createRef<HTMLInputElement>();

  addOption(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (this.newOptionRef.current) {
      this.newOptionRef;
      let option: string = this.newOptionRef.current.value.trim();
      let error = this.props.handleAddOption(option);
      if (!error) {
        this.newOptionRef.current.value = "";
      } else {
        this.setState(() => ({ error: error }));
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input
            name="newOption"
            placeholder="add a new option..."
            ref={this.newOptionRef}
          />
          <button type="submit">done</button>
        </form>
      </div>
    );
  }
}
