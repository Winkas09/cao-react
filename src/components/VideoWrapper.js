const VideoWrapper = (props) => {
  const { title, src } = props;

  if (!title || !src) {
    return;
  }

  return (
    <div className="video-wrapper">
      <h3 className="video-title">#6 Studentės istorija: sekmė slypi disciplinoje</h3>
      <iframe width="560" height="315" src={src} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
};

export default VideoWrapper;
