import axios from "axios";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import React, { useState, useEffect } from 'react';

const MAX_DESCRIPTION_LENGTH = 300; // maximum length for the description

const RelatedVideos = () => {
  const [user, token] = useAuth(); // grabs user info and token
  const [videos, setVideos] = useState([]);

  async function Relatedvideos() {
    try {
      // TODO: Insert searchTerm into the URL of the GET request to make the request dynamic
      let response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search?relatedToVideoId=fLexgOxsZu0&type=video&key=AIzaSyBOjIIl_BTpBgRMqKV1Ot2eGinVk6lekbo&part=snippet'
      );
      setVideos(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Relatedvideos();
  }, []);

  const shortenDescription = (description) => {
    if (description.length > MAX_DESCRIPTION_LENGTH){
        return `${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`;
    }
    return description;
  }

  return (
    <>
      <div className="border-box">
        {/* TODO: Map through videos variable to display a thumbnail for each video from your search results */}
        <Link to="/relatedvideospage">Related Videos</Link>
      </div>
      <div className="border-box">
        {videos.map((video) => (
          <ul key={video.videoId}>
            <li>
              <img src={video.snippet.thumbnails.default.url} alt="Thumbnail" />
            </li>
            <li>{video.snippet.title}</li>
            <li>{shortenDescription(video.snippet.description)}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default RelatedVideos;