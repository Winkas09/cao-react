const NewsItem = (props) => {
  const { title, date, category, url, imageSrc } = props;

  if (!title || !url) {
    return;
  }

  const categoryElement = category && <span className="news-item-category">{category}</span>;
  const dateElement = date && <span className="news-item-date">{date}</span>;
  const imageElement = imageSrc && (
    <div className="news-item-image-wrapper">
      <img src={imageSrc} alt="image" className="news-item-image" />
    </div>
  );

  return (
    <div className="news-item">
      <a href={url}>
        {imageElement}
        <div className="news-item-content">
          {categoryElement}
          <h2 className="news-item-title">{title}</h2>
        </div>
      </a>
    </div>
  );
};

export default NewsItem;
