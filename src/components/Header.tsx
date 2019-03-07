import React from "react";

type HeaderProps = {
  title: string;
  subtitle: string;
};

export const Header = (props: HeaderProps) => (
  <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
);
