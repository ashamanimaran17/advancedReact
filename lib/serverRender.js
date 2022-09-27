import React from "react";
import ReactDomServer from "react-dom/server";
import { App } from "./components/app";
import axios from "axios";
import DataApi from "./DataApi";
import config from "./config";
export async function serverRender() {
  const rawdata = await axios.get(
    `http://${config.host}:${config.port}/testData.json`
  );
  const data = new DataApi(rawdata.data);
  const initialData = {
    articles: data.getArticles(),
    authors: data.getAuthors(),
  };
  return ReactDomServer.renderToString(<App initialData={initialData} />);
};
