const PodcastItem = ({ image, length, title, date }) => {
  return (
    <div className="podcast-item">
      <div className="podcast-controls">
        <img src={image} alt="Podcast cover" className="podcast-image" />
        <span className="podcast-length">Trukmė : {length}</span>
        <button className="podcast-play-button">Play</button>
      </div>
      <div className="podcast-content">
        <h3 className="podcast-content">{title}</h3>
        <span className="podcast-date">{date}</span>
      </div>
    </div>
  );
};

export default PodcastItem;
