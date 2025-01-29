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

  return (
    <div className={`${className}`}>
      <iframe
        width="100%"
        src={getEmbeedURL(videoSrc)}
        frameBorder={0}
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="rounded-3xl h-[250px] md:h-[350px]"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
