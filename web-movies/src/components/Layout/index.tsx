import React, { FC, PropsWithChildren } from "react";
import { Header, Footer, Main } from "./components";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="contenedor">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
};

export { Layout };
