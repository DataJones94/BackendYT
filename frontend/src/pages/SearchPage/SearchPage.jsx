

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
      <div className="background">
        <div className="container text-center">
          <SearchBar getSearchedVideos={getSearchedVideos} />
        
        <Link to="/relatedvideospage">Bruno Mars Related Videos</Link>
        <div className="container text-center">
      </div>
          <div className="text-bg-info p-3"></div>
          {videos.map((video) => (
            <ul key={video.videoId}>
              <li>
              <li>"{video.snippet.title}"</li>
              <li>"{video.snippet.description}"</li>
              src= {`https://www.youtube.com/embed/?${video.id.videoId}autoplay=1&origin=http://example.com`}
              <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">  
              <img src={video.snippet.thumbnails.medium.url} alt="Thumbnail" />
              </a>
              </li>
              
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchPage;

//found out the target="_blank" rel="noopener noreferrer" will take make the video play on a different tab. 