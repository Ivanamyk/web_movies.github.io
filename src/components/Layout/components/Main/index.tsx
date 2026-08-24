import React, { FC, PropsWithChildren } from "react";
import "./main.css";

const Main: FC<PropsWithChildren> = ({ children }) => {
  return <div className="main-pg">{children}</div>;
};

export { Main };
