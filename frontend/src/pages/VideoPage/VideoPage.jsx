import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentForm from "../../components/Comments/CommentForm";

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
  const postNewComment = async (comment) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/comments/hello/", {comment});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {videos.length > 0 && (      
        <div>
          <iframe
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${videos[3].id.videoId}?autoplay=1&origin=http://example.com`}
          ></iframe>
        </div>
      )}<div> 
      <CommentForm postNewComment={postNewComment} />
      </div>
      <h2>{videos[3]?.snippet?.description}</h2> 
      <div className="thumbnail-grid">
        {videos.map((video) => (
          <ul key={video.id.videoId} className= "thumbnail-grid">
            <li>
              <img src={video.snippet.thumbnails.default.url} alt="thumbnail" />
            </li>
            <li>{video.snippet.title}</li>
            <li>{video.snippet.description}</li>
          </ul>
        ))}
      </div>
      
    </div>
  );
};

export default VideoPage;






//videos.length > 0 &&:this will check if there are any videos available
// the ? allows me to see that if there is something to display it will display, if not there will be nothing 