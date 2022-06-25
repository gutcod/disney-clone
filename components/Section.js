import Card from "./Card";

const Section = ({genre,video}) => {
    return(
        <div className='section'>
            <h1>{genre}</h1>
            <div>
                {video.map(video =>(
                    <a key={video.id} href={`/video/${video.slug}`}>
                        <Card video={video}/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Section