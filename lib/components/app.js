import React from "react";
/* export const App = () => {
  return <div>Hello world</div>;
};
 */
import { Component } from "react";
import DataApi from "../DataApi.js";
import data from "../testData.json";
import { ArticleList } from "./articleList.js";
const dataApi = new DataApi(data);
class App extends Component {
  /* state = {
    answer: 32,
  };
  asyncFunc = () => {
    return Promise.resolve(63);
  };
  async componentDidMount() {
    this.setState({ answer: await this.asyncFunc() });
  } */
  constructor() {
    super();
    this.state = {
      articles: dataApi.getArticles(),
      authors: dataApi.getAuthors(),
    };
  }

  getAuthorInfo = (authorId) => {
    return this.state.authors[authorId];
  };

  render() {
    return (
      <>
        <ArticleList
          articles={this.state.articles}
          getAuthorInfo={this.getAuthorInfo}
        />
      </>
    );
  }
}

export { App };
