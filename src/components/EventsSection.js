import EventItem from "./EventItem";
import LargeLink from "./LargeLink";

const EventsSection = () => {
  return (
    <section className="events-section">
      <h2 className="section-title">Renginiai</h2>

      <div className="events-list">
        <EventItem title="CodeAcademy galimybės verslui" day="5" month="Spalio" location="Upės g. 21, Greenhall 1, 10 aukštas ir Online" imageSrc="https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-768x432.png" />
        <EventItem title="CodeAcademy galimybės verslui" day="5" month="Spalio" location="Upės g. 21, Greenhall 1, 10 aukštas ir Online" />
        <EventItem day="5" month="Spalio" />
      </div>
      <LargeLink url="/#">Daugiau</LargeLink>
    </section>
  );
};

export default EventsSection;
