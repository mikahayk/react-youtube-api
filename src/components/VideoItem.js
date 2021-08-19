import React from 'react'

export default function VideoItem( {src} ) {
    return (
        <div className="player">
            <iframe className="video" src={src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
        </div>
    )
}
