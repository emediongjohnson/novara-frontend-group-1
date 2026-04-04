import "./VideoPlayer.css";

function VideoPlayer() {
  return (
    <section className="video-section">
      <div className="video-container">

        <div className="video-wrapper">
          
          <video
            className="video-element"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://videos.pexels.com/video-files/857195/857195-hd_1280_720_25fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* OVERLAY */}
          <div className="play-overlay">
            <div className="play-btn-circle">
              <svg
                className="play-icon"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default VideoPlayer;