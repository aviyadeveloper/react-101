import React from "react";

import { Header } from "./Header";
import { Action } from "./Action";
import { Options } from "./Options";
import { AddOption } from "./AddOption";
import { OptionModal } from "./OptionModal";
import { Widget } from "./Widget";

interface IRandomizerAppProps {
  // removeAllOptions(): void;
  // removeOption(option: string): void;
  // handleAddOption(option: string): void;
  // pickRandomOption(event: React.MouseEvent): void;
  // resetSelectedOption(): void;
}

interface IRandomizerAppState {
  options: string[];
  selectedOption: string;
}

export class RandomizerApp extends React.Component<
  IRandomizerAppProps,
  IRandomizerAppState
> {
  state: IRandomizerAppState = {
    options: [
      "donald trump",
      "kanye west",
      "oprah winfrey",
      "sponge bob square pants"
    ],
    selectedOption: ""
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
      return "Sorry the consitution says the president must have a valid alpha-numeric name";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Are you trying to rig the election with duplicate canditate entries?";
    }

    this.setState(prevState => ({ options: [...prevState.options, option] }));
  };

  pickRandomOption = (event: React.MouseEvent): void => {
    let randNum: number = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({ selectedOption: this.state.options[randNum] }));
  };

  resetSelectedOption = (): void => {
    this.setState(() => ({ selectedOption: "" }));
  };

  componentDidMount() {
    try {
      let optionsJSON = localStorage.getItem("options");
      if (optionsJSON) {
        const options: string[] = JSON.parse(optionsJSON);
        if (options.length) {
          this.setState(() => ({ options }));
        }
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
    let headerTitle: string = "RANDOCRACY";
    let headerSubTitle: string = "Works better than 21st century democracy!";

    return (
      <div>
        <Header title={headerTitle} subtitle={headerSubTitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            pickRandomOption={this.pickRandomOption}
          />
          <Widget
            options={this.state.options}
            removeAllOptions={this.removeAllOptions}
            removeOption={this.removeOption}
            handleAddOption={this.handleAddOption}
          />
          <OptionModal
            selectedOption={this.state.selectedOption}
            resetSelectedOption={this.resetSelectedOption}
          />
        </div>
      </div>
    );
  }
}
