import React from "react";

const VideoPlayer = ({
  videoSrc,
  className = "",
}: {
  videoSrc: string;
  className?: string;
}) => {
  function getEmbeedURL(videoSrc: string) {
    const videoId = videoSrc.slice(
      videoSrc.lastIndexOf("v=") + 2,
      videoSrc.lastIndexOf("&")
    );

    return `https://www.youtube.com/embed/${videoId}`;
  }

  console.log(getEmbeedURL(videoSrc));

  return (
    <div className={`${className}`}>
      <iframe
        width="100%"
        height="350px"
        src={getEmbeedURL(videoSrc)}
        frameBorder={0}
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="rounded-3xl"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
