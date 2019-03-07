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
      options: []
    };
  }

  componentDidMount() {
    try {
      let optionsJSON = localStorage.getItem("options");
      if (optionsJSON) {
        const options: string[] = JSON.parse(optionsJSON);
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(
    prevProps: IRandomizerAppProps,
    prevState: IRandomizerAppState
  ) {
    prevState.options.length !== this.state.options.length &&
      localStorage.setItem("options", JSON.stringify(this.state.options));
  }

  removeAllOptions(): void {
    this.setState(() => ({ options: [] }));
  }

  removeOption(option: string): void {
    this.setState(prevState => ({
      options: prevState.options.filter(o => o !== option)
    }));
  }

  handleAddOption(option: string): string | undefined {
    if (!option) {
      return "Option can't be empty";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option must be unique";
    }

    this.setState(prevState => ({ options: [...prevState.options, option] }));
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

const Header = (props: HeaderProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

type ActionProps = {
  hasOptions: boolean;
  pickRandomOption(event: React.MouseEvent): void;
};

const Action = (props: ActionProps) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.pickRandomOption}>
        Randomize Now
      </button>
    </div>
  );
};

type OptionsProps = {
  options: string[];
  removeAllOptions(): void;
  removeOption(option: string): void;
};

const Options = (props: OptionsProps) => {
  return (
    <div>
      <button onClick={props.removeAllOptions}>Remove all options</button>
      <ul>
        <h3>Options:</h3>
        {props.options.map(o => (
          <RandomizerOption
            key={o}
            option={o}
            removeOption={props.removeOption}
          />
        ))}
      </ul>
    </div>
  );
};

type RandomizerOptionProps = {
  option: string;
  removeOption(option: string): void;
};

const RandomizerOption = (props: RandomizerOptionProps) => {
  return (
    <div>
      <li>
        {props.option}
        <button
          onClick={e => {
            props.removeOption(props.option);
          }}
        >
          remove
        </button>
      </li>
    </div>
  );
};

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

ReactDOM.render(<RandomizerApp />, document.getElementById("myApp"));
