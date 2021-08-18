export default function VideoDetail( { featuredVideo } ) {


    return (
        <div className="video_details">
            <div className="player">
                <iframe className="video" src={featuredVideo.src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="title">
                <h1>{featuredVideo.title}</h1>
            </div>
            <div className="description">{featuredVideo.description}</div>
        </div>
    )
}


