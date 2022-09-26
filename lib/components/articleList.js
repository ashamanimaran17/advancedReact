import React, { Component } from "react";
import { Article } from "./article.js";
import PropTypes from "prop-types";
export class ArticleList extends Component {
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map((article) => {
          return (
            <Article
              key={article.id}
              article={article}
              getAuthorInfo={this.props.getAuthorInfo}
            />
          );
        })}
      </div>
    );
  }
}
ArticleList.propTypes = {
  articles: PropTypes.object,
  getAuthorInfo: PropTypes.func,
};
