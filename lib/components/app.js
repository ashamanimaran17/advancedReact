import React from "react";
/* export const App = () => {
  return <div>Hello world</div>;
};
 */
import { Component } from "react";
import axios from "axios";
import DataApi from "../DataApi.js";
//import data from "../testData.json";
import { ArticleList } from "./articleList.js";
import PropTypes from "prop-types";
//const dataApi = new DataApi(data);
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
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.initialData.articles,
      authors: this.props.initialData.authors,
    };
  }

  async componentDidMount() {
    const rawdata = await axios.get("testData.json");
    const data = new DataApi(rawdata.data);
    this.setState({ articles: data.getArticles(), authors: data.getAuthors() });
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
App.propTypes = {
  initialData: PropTypes.any,
};
export { App };
