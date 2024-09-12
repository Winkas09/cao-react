import EventItem from "./EventItem";
import LargeLink from "./LargeLink";

const EventsSection = ({ data }) => {
  const { sectionTitle, eventsList } = data;

  if (eventsList.length === 0) {
    return;
  }

  return (
    <section className="events-section">
      {sectionTitle && <h2 className="section-title">{sectionTitle}</h2>}

      <div className="events-list">
        {eventsList.map((item, index) => (
          <EventItem
            key={index}
            title={item.title}
            location={item.location}
            day={item.day}
            month={item.month}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
      <LargeLink url="/#">Daugiau</LargeLink>
    </section>
  );
};

export default EventsSection;
