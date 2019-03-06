interface IRandomizerAppProps {}
interface IRandomizerAppState {
  options: string[];
}

class RandomizerApp extends React.Component<
  IRandomizerAppProps,
  IRandomizerAppState
> {
  constructor(props: IRandomizerAppProps) {
    super(props);
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.pickRandomOption = this.pickRandomOption.bind(this);
    this.state = {
      options: [
        "Apples",
        "Bananas",
        "Oranges",
        "Kiwis",
        "Strawberries",
        "Peaches"
      ]
    };
  }

  removeAllOptions(): void {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  removeOption(event: any): void {
    let option: string = event.target.value;
    this.setState(prevState => {
      return {
        options: prevState.options.filter(o => o !== option)
      };
    });
  }

  handleAddOption(option: string): string | undefined {
    if (!option) {
      return "Option can't be empty";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option must be unique";
    }

    this.setState(prevState => {
      return {
        options: [...prevState.options, option]
      };
    });
  }

  pickRandomOption(event: React.MouseEvent): void {
    let randNum: number = Math.floor(Math.random() * this.state.options.length);
    alert(`Randomized picks: ${this.state.options[randNum]}`);
  }

  render() {
    let headerTitle: string = "Randomizer!";
    let headerSubTitle: string = "A bit of random is fun";

    return (
      <div>
        <Header title={headerTitle} subtitle={headerSubTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          pickRandomOption={this.pickRandomOption}
        />
        <Options
          options={this.state.options}
          removeAllOptions={this.removeAllOptions}
          removeOption={this.removeOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
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

type ActionProps = {
  hasOptions: boolean;
  pickRandomOption(event: React.MouseEvent): void;
};

class Action extends React.Component<ActionProps> {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.pickRandomOption}
        >
          Randomize Now
        </button>
      </div>
    );
  }
}

type OptionsProps = {
  options: string[];
  removeAllOptions(): void;
  removeOption(event: React.MouseEvent): void;
};

class Options extends React.Component<OptionsProps> {
  render() {
    let options: string[] = this.props.options;
    return (
      <div>
        <button onClick={this.props.removeAllOptions}>
          Remove all options
        </button>
        <ul>
          <h3>Options:</h3>
          {options.map(o => (
            <RandomizerOption
              key={o}
              option={o}
              removeOption={this.props.removeOption}
            />
          ))}
        </ul>
      </div>
    );
  }
}

type RandomizerOptionProps = {
  option: string;
  removeOption(event: React.MouseEvent): void;
};

class RandomizerOption extends React.Component<RandomizerOptionProps> {
  render() {
    return (
      <div>
        <li>
          {this.props.option}
          <button onClick={this.props.removeOption} value={this.props.option}>
            remove
          </button>
        </li>
      </div>
    );
  }
}

type AddOptionProps = {
  handleAddOption(option: string): string | undefined;
};
type AddOptionState = {
  error: string | undefined;
};

class AddOption extends React.Component<AddOptionProps, AddOptionState> {
  constructor(props: AddOptionProps) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  addOption(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let inputElement: HTMLInputElement | null = event.currentTarget.querySelector(
      "input[name='newOption']"
    );
    if (inputElement) {
      let option: string = inputElement.value.trim();
      let error = this.props.handleAddOption(option);
      if (!error) {
        inputElement.value = "";
      } else {
        this.setState(() => {
          return { error: error };
        });
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input name="newOption" placeholder="add a new option..." />
          <button type="submit">done</button>
        </form>
      </div>
    );
  }
}

// interface IVisibilityAppState {
//   visibility: boolean;
// }

// interface IVisibilityAppProps {}

// class VisibilityApp extends React.Component<
//   IVisibilityAppProps,
//   IVisibilityAppState
// > {
//   constructor(props: IVisibilityAppProps) {
//     super(props);
//     this.toggleVisibility = this.toggleVisibility.bind(this);
//     this.state = {
//       visibility: false
//     };
//   }

//   toggleVisibility(): any {
//     this.setState((prevState: IVisibilityAppState) => {
//       return {
//         visibility: !prevState.visibility
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.toggleVisibility}>
//           {this.state.visibility ? "hide" : "show"}
//         </button>
//         {this.state.visibility && <p>foobar</p>}
//       </div>
//     );
//   }
// }
ReactDOM.render(<RandomizerApp />, document.getElementById("myApp"));
