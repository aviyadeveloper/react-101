import React from "react";

import { Header } from "./Header";
import { Action } from "./Action";
import { Options } from "./Options";
import { AddOption } from "./AddOption";

interface IRandomizerAppProps {}
interface IRandomizerAppState {
  options: string[];
}

export class RandomizerApp extends React.Component<
  IRandomizerAppProps,
  IRandomizerAppState
> {
  state: IRandomizerAppState = {
    options: []
  };

  removeAllOptions = (): void => {
    this.setState(() => ({ options: [] }));
  };

  removeOption = (option: string): void => {
    this.setState(prevState => ({
      options: prevState.options.filter(o => o !== option)
    }));
  };

  handleAddOption = (option: string): string | undefined => {
    if (!option) {
      return "Option can't be empty";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Option must be unique";
    }

    this.setState(prevState => ({ options: [...prevState.options, option] }));
  };

  pickRandomOption = (event: React.MouseEvent): void => {
    let randNum: number = Math.floor(Math.random() * this.state.options.length);
    alert(`Randomized picks: ${this.state.options[randNum]}`);
  };

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