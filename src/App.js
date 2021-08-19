import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import VideoDetail from './components/VideoDetail';
import Loader from './components/Loader';
import Error from './components/Error';


function App() {

  const [featuredVideo, setFeaturedVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const setError = ( msg ) => {
    setErrorMsg(msg);
  }

  const setLog = async (data) => {

    // Make sure /backend/app.js is running on port 5000
    const backend_response = await axios.post('http://localhost:5000/log', {
      v_id: data.v_id,
      title: data.title
    })
    const { backend_data } = backend_response;

    // TO DO
    // Parse response ...
  }

  const handleFormSubmit = async (vidId) => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet',
          id: vidId,
          key: process.env.REACT_APP_YOUTUBE_API_KEY
        }
      })
      const { data } = response;
      
      if(data.items[0]) {
        
        // Video with vidId is found
        const video = {
          v_id: vidId,
          title : data.items[0].snippet.title,
          description: data.items[0].snippet.description,
          src: "https://www.youtube.com/embed/" + vidId
        }

        setFeaturedVideo(video);
        setLog(video);
        setLoading(false);

      } else {
        
        // Video not found case handled here
        setLoading(false);
        setError(`Video with Id: '${vidId}' doesn't exist. Please try again with correct video Id.`);
      }
      
    } catch (error) {
      console.log(error.response);

      setLoading(false);
      setError('There was an error loading the video. Please try again.');
      return error.response;
    }
  
  }

  let content;
  if (loading) content = <Loader />;
  else if(errorMsg) content = <Error message={errorMsg} />;
  else content = featuredVideo ? <VideoDetail featuredVideo={featuredVideo}/> : 'example: dQw4w9WgXcQ'

  return (
    <div className="container">
      <SearchBar setError={setError} handleFormSubmit={handleFormSubmit}/>
      {content}
    </div>
  );
}

export default App;
