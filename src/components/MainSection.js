import NewsSection from "./NewsSection";
import VideoSection from "./VideoSection";

const MainSection = ({ newsData, videoSectionData }) => {
  return (
    <main>
      <h1 className="page-title">Naujienos</h1>
      <NewsSection newsData={newsData} />
      <VideoSection data={videoSectionData} />
    </main>
  );
};

export default MainSection;
