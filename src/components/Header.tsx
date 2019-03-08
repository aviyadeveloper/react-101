import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = (props: HeaderProps) => (
  <div className="header">
    <h1 className="header__title">{props.title}</h1>
    <h2 className="header__subtitle">{props.subtitle}</h2>
  </div>
);
