import LargeLink from "./LargeLink";
import NewsItem from "./NewsItem";
import "./NewsSection.css";

const NewsSection = ({ newsData }) => {
  if (newsData.length === 0) {
    return;
  }

  const mainNews = newsData.slice(0, 2);
  const secondaryNews = newsData.slice(2);

  const mainNewsList = mainNews.map((news, index) => (
    <NewsItem
      key={index}
      title={news.title}
      date={news.date}
      category={news.category}
      url={news.url}
      imageSrc={news.imageSrc}
    />
  ));

  return (
    <section className="news-section">
      <div className="main-news">
        {mainNewsList.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            date={news.date}
            category={news.category}
            url={news.url}
            imageSrc={news.imageSrc}
          />
        ))}
      </div>
      <div className="secondary-news">
        {secondaryNews.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            date={news.date}
            category={news.category}
            url={news.url}
            imageSrc={news.imageSrc}
          />
        ))}
      </div>

      <LargeLink url="/#" classes="news-klase antra-news-klase">
        <span>Visos</span> naujienos
      </LargeLink>
    </section>
  );
};

export default NewsSection;
