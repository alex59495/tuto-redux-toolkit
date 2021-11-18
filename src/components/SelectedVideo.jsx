import React from 'react'

const SelectedVideo = ({video}) => {
  return (
    <iframe id="player" type="text/html" width="640" height="360"
      title={video}
      src={`http://www.youtube.com/embed/${video}?enablejsapi=1&origin=http://example.com`}
      frameBorder="0">
    </iframe>
  )
}

export default SelectedVideo
