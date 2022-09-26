import React from "react";
import ReactDomServer from "react-dom/server";
import { App } from "./components/app";
export const serverRender = () => {
  return ReactDomServer.renderToString(<App />);
};
