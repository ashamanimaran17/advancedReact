import React from "react";
import { ArticleList } from "../articleList.js";
import renderer from "react-test-renderer";
describe("ArticleList", () => {
  it("should render correctly", () => {
    const authors = { a: {}, b: {} };
    const testProps = {
      articles: {
        123: { id: "123", authorId: "a" },
        456: { id: "456", authorId: "b" },
      },
      getAuthorInfo: function (id) {
        return authors[id];
      },
    };
    const tree = renderer
      .create(
        <ArticleList
          articles={testProps.articles}
          getAuthorInfo={testProps.getAuthorInfo}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
