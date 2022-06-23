import { GraphQLClient, gql } from "graphql-request";
import { videosQuerry } from "./utils/utils";
import Section from "../components/Section";
import section from "../components/Section";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization": `Bearer ${process.env.GRAPH_CMS_TOKEN}`
    },
  });
  const videosQuery = gql`
    ${videosQuerry}
  `;

  const data = await graphQLClient.request(videosQuery);
  const { videos } = data;

  return {
    props: {
      videos,
    },
  };
};

const Home = ({ videos }) => {

  const randomVideo = (video) =>{
   const random =  video[Math.floor(Math.random()*video.length)]
    return (
        <div className='main-video' key={videos.title}>
          <img src={random.thumbnail.url} alt={random.title}/>
        </div>
    )
  }

  const filteredVideo = (video,genre) => {
      return video.filter(video => video.tags.includes(genre))
  }

  const renderSection = (videos) => {
      const genre = ['Family', 'Comedy', 'Horror', 'Marvel','Pixar','Star-wars','Disney'];
      return (
          <div className='video-feed'>
              {genre.map(el=>{
                 return  <Section genre={el} video={filteredVideo(videos,el)} key={el}/>
              })}
          </div>
      )
  }

  const unSeenVideo = (video) => {
      return video.filter(video => video.seen == false || video.seen == null)
  }

  return (
      <>
        <div className='app'>
          {randomVideo(videos)}
            <Section genre="Recently view" video={unSeenVideo(videos)}/>
            {renderSection(videos)}
        </div>
      </>
  );
};

export default Home;
