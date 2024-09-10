const NewsItem = (props) => {
  const { title, date, category, url, imageSrc } = props;
  return (
    <div className="news-item">
      <a href={url}>
        <div className="news-item-image-wrapper">
          <img src={imageSrc} alt="image" className="news-item-image" />
        </div>
        <div className="news-item-content">
          <span className="news-item-category">{category}</span>
          <h2 className="news-item-title">{title}</h2>
          <span className="news-item-date">{date}</span>
        </div>
      </a>
    </div>
  );
};

export default NewsItem;
