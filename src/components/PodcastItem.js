const PodcastItem = ({ image, length, title, date }) => {
  if (!image || !title) {
    return;
  }
  return (
    <div className="podcast-item">
      <div className="podcast-controls">
        {image && <img src={image} alt="Podcast cover" className="podcast-image" />}
        {length && <span className="podcast-length">Trukmė : {length}</span>}
        <button className="podcast-play-button">Play</button>
      </div>
      <div className="podcast-content">
        <h3 className="podcast-content">{title}</h3>
        {date && <span className="podcast-date">{date}</span>}
      </div>
    </div>
  );
};

export default PodcastItem;
