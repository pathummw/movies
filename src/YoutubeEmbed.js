import React, { useEffect } from 'react'
import { useGlobalState } from './state'

export default function YoutubeEmbed({ embedId }) {
    const [openModal] = useGlobalState('openModal');

  return (
    <div className="video-responsive">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />

  </div>
  )
}
