import { GraphQLClient, gql } from "graphql-request";
import {videoQuery, videosQuerry} from "../utils/utils";

const getServerSideProps = async ({pageContext}) =>{
    const url = process.env.ENDPOINT;
    const pageSlug = pageContext.query.slug;
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authorization": `Bearer ${process.env.GRAPH_CMS_TOKEN}`
        },
    });
    const query = gql`
    query(pageSlug:String!){
  video(where:{
    slug:$pageSlug
  }){
        createdAt,
    id,
    title,
    description,
    tags,
    slug,
    thumbnail{
      url
    }
    mp4{
      url
    }
  }
}
  `;
    const variables = {
        pageSlug
    }
    const data = await graphQLClient.request(query,variables);
    const { video } = data;

    return{
        props:{
            video,
        }
    }
}

const Video = ({video}) => {
    return(
        <div>lol</div>
    )
}

export default Video;