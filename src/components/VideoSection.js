// import LargeLink from "./LargeLink";
// import VideoWrapper from "./VideoWrapper";

// const VideoSection = () => {
//   return (
//     <section className="video-section">
//       <h2 className="section-title">Vaizdo įrašai</h2>

//       <div className="video-list">
//         <VideoWrapper title="#6 Studentės istorija: Sėkmė slypi disciplinoje" src="https://www.youtube.com/embed/Rz6bswWbPqw?si=JO7T63DfL1Vp6vgc" />
//         <VideoWrapper title="#4 Ctrl+Alt+Defend: Kibernetinis saugumas šiandien" src="https://www.youtube.com/embed/yovsPjuDElw?si=g-b3fhYCiBu7Ok64" />
//         <VideoWrapper title="Susipažink su mūsų įdarbinimo partneriais - Danske Bank!" src="https://www.youtube.com/embed/7X4iX-D6ymQ?si=PPDI5GmSGyV9ZgmI" />
//       </div>
//       <LargeLink url="/#">Visi vaizdo įrašai</LargeLink>
//     </section>
//   );
// };

// export default VideoSection;

import LargeLink from "./LargeLink";
import VideoWrapper from "./VideoWrapper";

const VideoSection = () => {
  const videos = [
    { title: "#6 Studentės istorija: Sėkmė slypi disciplinoje", src: "https://www.youtube.com/embed/Rz6bswWbPqw?si=JO7T63DfL1Vp6vgc" },
    { title: "#4 Ctrl+Alt+Defend: Kibernetinis saugumas šiandien", src: "https://www.youtube.com/embed/yovsPjuDElw?si=g-b3fhYCiBu7Ok64" },
    { title: "Susipažink su mūsų įdarbinimo partneriais - Danske Bank!", src: "https://www.youtube.com/embed/7X4iX-D6ymQ?si=PPDI5GmSGyV9ZgmI" },
  ];

  const renderedVideos = videos.filter((video) => video.title && video.src);

  return (
    <section className="video-section">
      <h2 className="section-title">Vaizdo įrašai</h2>

      <div className={`video-list ${renderedVideos.length < videos.length ? "adjusted" : ""}`}>
        {renderedVideos.map((video, index) => (
          <VideoWrapper key={index} title={video.title} src={video.src} />
        ))}
      </div>
      <LargeLink url="/#">Visi vaizdo įrašai</LargeLink>
    </section>
  );
};

export default VideoSection;
