import './App.css';
import React, {useState, useEffect} from 'react';

import { setVideo } from './features/videos/video-slice';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {useFetchVideosQuery} from './features/videos/videos-api-slice'
import ListVideo from './components/ListVideo';
import SearchBar from './components/SearchBar';
import SelectedVideo from './components/SelectedVideo';
require('dotenv').config();


function App() {
  const dispatch = useAppDispatch()
  const search = useAppSelector((state) => state.search.value) || "surfing"
  const debouncedSearchTerm = useDebounce(search, 500);
  const {data = [], isFetching } = useFetchVideosQuery(debouncedSearchTerm);
  const videos = data.items;
  const video = useAppSelector((state) => state.selectedVideo.video) || (videos && videos[0].id.videoId)

  useAppSelector((state) => {
    if(!state.selectedVideo.video && (videos && videos[0].id.videoId)) {
      dispatch(setVideo(videos[0].id.videoId))
    }
    return state.selectedVideo.video
  })

  return (
    <div className="App">
      <SearchBar />
      <div className="d-flex">
        <div className="video">
          <SelectedVideo video={video} />
        </div>
        <div className="video-list">
          {isFetching && <div>Loading data...</div>}
          {!isFetching && <ListVideo videos={videos} />}
        </div>
      </div>
    </div>
  );
}

export default App;


// Hook
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

