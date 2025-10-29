import { useState, useRef, useEffect } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(current);
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("play", () => setIsPlaying(true));
      video.addEventListener("pause", () => setIsPlaying(false));

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("play", () => setIsPlaying(true));
        video.removeEventListener("pause", () => setIsPlaying(false));
      };
    }
  }, []);

  return (
    <div className="bg-white rounded-r-1 overflow-hidden">
      <div className="relative aspect-video bg-secondary-500">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="/video-cover.png"
          preload="metadata"
        >
          <source src="/video-smaple.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <button
            onClick={handlePlayPause}
            className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
          >
            <i
              className={`fa ${
                isPlaying ? "fa-pause" : "fa-play"
              } text-secondary-500 text-xl`}
            ></i>
          </button>
        </div> */}
      </div>

      {/* Video Controls */}
      <div className="p-4 bg-white border-t border-n-1">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={handlePlayPause}
            className="flex items-center space-x-2 text-secondary-500 hover:text-primary-500 transition-colors"
          >
            <i
              className={`fa ${isPlaying ? "fa-pause" : "fa-play"} text-lg`}
            ></i>
          </button>

          <div className="flex-1 mx-4">
            <div
              className="w-full bg-n-1 rounded-full h-2 cursor-pointer"
              onClick={handleSeek}
            >
              <div
                className="bg-primary-500 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center space-x-1 text-sm text-secondary-400">
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleMuteToggle}
              className="text-secondary-500 hover:text-primary-500 transition-colors"
            >
              <i
                className={`w-5 fa fa-lg ${
                  isMuted ? "fa-volume-off" : "fa-volume-up"
                } text-lg`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
