import DataApi from "../DataApi";
import data from "../testData";
const api = new DataApi(data);
describe("DataApi", () => {
  it("exposes articles as an Object", () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;
    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toEqual(articleTitle);
  });
  it("exposes authors as an Object", () => {
    const authors = api.getAuthors();
    const authorId = data.authors[0].id;
    const authorTitle = data.authors[0].title;
    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].title).toEqual(authorTitle);
  });
});
