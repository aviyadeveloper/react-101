import React from "react";

interface IHeaderProps {
  title: string;
  subtitle: string;
}

export const Header = (props: IHeaderProps) => (
  <div className="header">
    <h1 className="header__title">
      RANDOM<span className="header__bright-primary">CRACY</span>
    </h1>
    <h2 className="header__subtitle">{props.subtitle}</h2>
  </div>
);
