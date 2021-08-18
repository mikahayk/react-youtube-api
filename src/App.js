import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import VideoDetail from './components/VideoDetail';

function App() {

  const [featuredVideo, setFeaturedVideo] = useState(null);
  const [status, setStatus] = useState('');

  const handleFormSubmit = async (vidId) => {
    
    setStatus('Loading ...');

    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet',
          id: vidId,
          key: process.env.REACT_APP_YOUTUBE_API_KEY
        }
      })
      const { data } = await response;
  
      if(data.items[0]) {
        // Video with vidId is found
        setFeaturedVideo({
          title: data.items[0].snippet.title, 
          description: data.items[0].snippet.description,
          src: "https://www.youtube.com/embed/" + vidId
        });
      } else {
        // Video not found case handled here
        alert(`Video with Id: '${vidId}' doesn't exist. Please try again with correct video Id.`);
      }
      
    } catch (error) {
      console.log(error.response);
      setStatus('There was an error loading the video. Please try again.');
      return error.response;
    }
  
  }

  return (
    <div className="container">
      <SearchBar handleFormSubmit={handleFormSubmit}/>
      {featuredVideo ? <VideoDetail featuredVideo={featuredVideo}/>  : status }
    </div>
  );
}

export default App;
