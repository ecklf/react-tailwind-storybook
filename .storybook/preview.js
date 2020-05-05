import { withInfo } from "@storybook/addon-info";
import { addDecorator, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import React from "react";
import logoDark from "../assets/logo-dark.svg";
import logo from "../assets/logo.svg";
import Layout from "./Layout";

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);
addDecorator(
  withInfo({
    styles: (base) => ({
      ...base,
      infoBody: {
        ...base.infoBody,
        backgroundColor: "#303030",
        color: "white",
      },
      source: {
        h1: {
          margin: "20px 0",
          padding: "0 0 5px 0",
          fontSize: "25px",
          borderBottom: "1px solid #EEE",
        },
      },
    }),
    inline: true,
    source: true,
    propTablesExclude: [Layout],
  })
);

addParameters({
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      brandImage: logoDark,
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      appBg: "#F7FAFC",
      brandImage: logo,
    },
  },
});
