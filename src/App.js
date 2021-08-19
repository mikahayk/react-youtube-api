import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import VideoDetail from './components/VideoDetail';
import Loader from './components/Loader';
import Error from './components/Error';


function App() {

  const [featuredVideo, setFeaturedVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');


  const handleFormSubmit = async (vidId) => {
    setLoading(true);
    setError(false);

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

        setLoading(false);
      } else {
        // Video not found case handled here
        setLoading(false);
        setError(true);
        setErrorMsg(`Video with Id: '${vidId}' doesn't exist. Please try again with correct video Id.`);
      }
      
    } catch (error) {
      console.log(error.response);

      setLoading(false);
      setError(true);
      setErrorMsg('There was an error loading the video. Please try again.');
      return error.response;
    }
  
  }

  return (
    <div className="container">
      <SearchBar handleFormSubmit={handleFormSubmit}/>

      {loading ? <Loader /> : error ? <Error message={errorMsg} /> : featuredVideo ? <VideoDetail featuredVideo={featuredVideo}/> : 'example: dQw4w9WgXcQ' }


    </div>
  );
}

export default App;
