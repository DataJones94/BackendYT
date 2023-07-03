
//     {/*TODO: Map through videos variable to display a thumbnail for each video from your search results */}

import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [videos, setVideos] = useState([]);

  async function getSearchedVideos(searchTerm) {
    try {
      // TODO: Insert searchTerm into the URL of the GET request to make the request dynamic
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyBOjIIl_BTpBgRMqKV1Ot2eGinVk6lekbo&part=snippet&type=video&maxResults=5`
      );
      setVideos(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSearchedVideos("");
  }, []);

  return (
    <>
      <div className="border-box">
        <div className="container text-center">
          <SearchBar getSearchedVideos={getSearchedVideos} />
        </div>
        <Link to="/relatedvideospage">Bruno Mars Related Videos</Link>
      </div>
      <div className="border-box">
        <div className="container text-center">
          {videos.map((video) => (
            <ul key={video.videoId}>
              <li>
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
              <img src={video.snippet.thumbnails.default.url} alt="Thumbnail" />
              </a>
              </li>
                <a>
              <li>{video.snippet.title}</li>
              <li>{video.snippet.description}</li>
                </a>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
