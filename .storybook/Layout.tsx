import React, { ReactNode } from "react";
import "../src/css/index.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="px-20 py-10">{children}</div>;
};

export default Layout;
