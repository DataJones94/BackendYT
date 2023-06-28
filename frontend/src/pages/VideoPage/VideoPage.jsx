import React, { useEffect, useState } from "react";
import axios from "axios";

const VideoPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideo();
  }, []);

  async function fetchVideo() {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?q=brunomars&key=AIzaSyBOjIIl_BTpBgRMqKV1Ot2eGinVk6lekbo&part=snippet&type=video&maxResults=5"
      );
      const fetchedVideos = response.data.items;
      setVideos(fetchedVideos);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {videos.length > 0 && (                           //this will check if there are any videos available
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${videos[0].id.videoId}?autoplay=1&origin=http://example.com`}
          ></iframe>
          )}
          <h1>{videos[0].snippet.title}</h1>
          <h2>{videos[0].snippet.description}</h2>
    </div>
  );
};

export default VideoPage;


