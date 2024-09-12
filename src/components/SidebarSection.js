import EventsSection from "./EventsSection";
import PodcastSection from "./PodcastSection";
const SidebarSection = ({ podcastSectionData, eventsData }) => {
  return (
    <aside>
      <PodcastSection data={podcastSectionData} />
      <EventsSection data={eventsData} />
    </aside>
  );
};

export default SidebarSection;
