import VideoItem from "./VideoItem"

export default function VideoDetail( { featuredVideo } ) {

    return (
        <div className="video_details">
            <VideoItem src={featuredVideo.src} />

            <div className="title">
                <h1>{featuredVideo.title}</h1>
            </div>
            <div className="description">{featuredVideo.description}</div>
        </div>
    )
}


