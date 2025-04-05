import React from "react";

function VideoPlayer() {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <h2>Point Cloud Data Processing of Soybean Canopies</h2>
      <video width="600" controls>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
