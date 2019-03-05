class RandomizerApp extends React.Component {
  render() {
    let headerTitle: string = "Randomizer!";
    let headerSubTitle: string = "A bit of random is fun";
    let options = ["Apples", "Bananas", "Oranges", "Kiwis"];

    return (
      <div>
        <Header title={headerTitle} subtitle={headerSubTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

type HeaderProps = {
  title: string;
  subtitle: string;
};

class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  randomize(): void {
    alert("randomize!");
  }
  render() {
    return (
      <div>
        <button onClick={this.randomize}>Randomize Now</button>
      </div>
    );
  }
}

type OptionsProps = {
  options: string[];
};

class Options extends React.Component<OptionsProps> {
  removeAllOptions(): void {
    alert("Remove all options");
  }
  render() {
    let options: string[] = this.props.options;
    return (
      <div>
        <button onClick={this.removeAllOptions}>Remove all options</button>
        <ul>
          <h3>Options:</h3>
          {options.map(o => (
            <RandomizerOption key={o} option={o} />
          ))}
        </ul>
      </div>
    );
  }
}

type RandomizerOptionProps = {
  option: string;
};

class RandomizerOption extends React.Component<RandomizerOptionProps> {
  removeOption(): void {
    alert("remove option");
  }
  render() {
    return (
      <div>
        <li>
          {this.props.option}
          <button onClick={this.removeOption}>remove</button>
        </li>
      </div>
    );
  }
}

class AddOption extends React.Component {
  addOption(event: React.FormEvent): void {
    event.preventDefault();
    let inputElement: HTMLInputElement | null = event.currentTarget.querySelector(
      "input[name='newOption']"
    );

    let newOption: string | null =
      inputElement && inputElement.value.trim() && inputElement.value.trim();

    newOption ? alert(newOption) : alert("can't add empty option.");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input
            name="newOption"
            placeholder="add a new option..."
            ref="newOption"
          />
          <button type="submit">done</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<RandomizerApp />, document.getElementById("myApp"));
