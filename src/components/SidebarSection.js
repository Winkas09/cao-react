import EventsSection from "./EventsSection";
import PodcastSection from "./PodcastSection";
const SidebarSection = ({ podcastSectionData }) => {
  return (
    <aside>
      <PodcastSection data={podcastSectionData} />
      <EventsSection />
    </aside>
  );
};

export default SidebarSection;
