import { setVideo } from '../features/videos/video-slice';
import { useAppDispatch } from '../app/hooks';

const ListWord = ({videos}) => {
  const dispatch = useAppDispatch();


  const renderVideos = videos.map((video) => {
    return(
      <div className="selectable" >
        <img key={video.id.videoId} onClick={() => dispatch(setVideo(video.id.videoId))} src={`https://img.youtube.com/vi/${video.id.videoId}/0.jpg`} alt={video.id.videoId} />
        <div class="text">
          <div className="title">
            {video.snippet.title}
          </div>
        </div>
      </div>
    )
  })
  return (
    <div>
      {renderVideos}
    </div>
  )
}

export default ListWord;
