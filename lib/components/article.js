import React, { Component } from "react";
import PropTypes from "prop-types";

export class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: this.props.getAuthorInfo(this.props.article.authorId),
    };
  }
  render() {
    return (
      <div>
        title: {this.props.article.title}
        <br />
        date: {this.props.article.date}
        <br />
        <a href={this.state.author.website}>
          author: `{this.state.author.firstName} {this.state.author.lastName}`{" "}
          <br />
        </a>
        body: {this.props.article.id}
        <br />
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.object,
  getAuthorInfo: PropTypes.func,
};
