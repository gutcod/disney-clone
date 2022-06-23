import Card from "./Card";

const Section = ({genre,video}) => {
    console.log('video', video);
    return(
        <div className='section'>
            <h1>{genre}</h1>
            <div className="video-feed">
                {video.map(video =>(
                    <a key={video.id} src={`/video/${video.slug}`}>
                        <Card thumbnail={video.thumbnail} title={video.title}/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Section