import PodcastItem from "./PodcastItem";

const PodcastsSection = ({ data }) => {
  const { sectionTitle, podcastsList } = data;

  if (podcastsList.length === 0) {
    return;
  }

  return (
    <section className="podcasts-section">
      {sectionTitle && <h2 className="section-title">{sectionTitle}</h2>}

      <div className="podcasts-list">
        {podcastsList.map((item, index) => (
          <PodcastItem key={index} title={item.title} date={item.date} length={item.length} image={item.image} />
        ))}
      </div>
    </section>
  );
};

export default PodcastsSection;
