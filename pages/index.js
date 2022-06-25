import { GraphQLClient, gql } from "graphql-request";
import { videosQuerry ,accountQuery} from "./utils/utils";
import Section from "../components/Section";
import Navbar from "../components/Navbar";
import Link from "next/link";
import disneyLogo from '../public/disney-button.png'
import marvelLogo from '../public/marvel-button.png'
import starwarsLogo from '../public/star-wars-button.png'
import pixarLogo from '../public/pixar.png'
import Image from "next/image";

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

  const accountsQuery = gql`
    ${accountQuery}
  `;


  const data = await graphQLClient.request(videosQuery);
  const { videos } = data;
  const accountData = await graphQLClient.request(accountsQuery);
  const { account } = accountData;

  return {
    props: {
      videos,
        account,
    },
  };
};

const Home = ({ videos, account }) => {
    console.log('account',account)

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
          <div>
              {genre.map(el=>{
                 return  <Section id={`#${el.toLowerCase()}`} genre={el} video={filteredVideo(videos,el)} key={el}/>
              })}
          </div>
      )
  }

  const unSeenVideo = (video) => {
      return video.filter(video => video.seen == false || video.seen == null)
  }

  return (
      <>
          <Navbar account={account}/>
        <div className='app'>
          {randomVideo(videos)}
            <div className="video-feed">
                <Link href="#disney">
                    <div className="franchise" id="disney">
                        <Image src={disneyLogo}/>
                    </div>
                </Link>
                <Link href="#pixar">
                    <div className="franchise" id="pixar">
                        <Image src={pixarLogo}/>
                    </div>
                </Link>
                <Link href="#star-wars">
                    <div className="franchise" id="star-wars">
                        <Image src={starwarsLogo}/>
                    </div>
                </Link>
                <Link href="#marvel">
                    <div className="franchise" id="marvel">
                        <Image src={marvelLogo}/>
                    </div>
                </Link>
            </div>
            <Section genre="Recently view" video={unSeenVideo(videos)}/>
            {renderSection(videos)}
        </div>
      </>
  );
};

export default Home;
