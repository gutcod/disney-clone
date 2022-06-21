import { GraphQLClient, gql } from "graphql-request";
import { videosQuerry } from "./utils/utils";

export const getStaticProps = async () => {
  const url = 'https://api-eu-central-1.graphcms.com/v2/cl4obpxab1nfq01z74rg72kns/master';
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTU4MzE2ODAsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsNG9icHhhYjFuZnEwMXo3NHJnNzJrbnMvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMTdlZjBmYzItZjJkNC00MDhjLThiYmYtNGFlZDAzZTNlYzIwIiwianRpIjoiY2w0b2ZmaHYzMDBsbTAxeHNodXUyZ2o0aCJ9.VkH5UGMbgjidlxHb_j_59dchRrzUpZBtupIx9g1DTUO_b5cdQAc2LrisBha64uSOZNjAwM9FDU-G6WjK0QrMH9AEOh8ILNk6BG83fW5Kob09YhAXhfrpTR0wyLuQvnjNeqj3fBv2mJ4PWQyZFM6WPg7AeaV5yIUpRhwQKvx1OAp7p2e0EVBMYiRhSgCPg4LBJzW8xuqCP0kdvI7caPyknAWdgAw03PFL4TcXjHMaiq3iwRfQX0HNP48NijKBvoxqtdBlh5kmJFNA-ldN23r1kez0XucXIEnBdPgyD0B_zxlggcEMB6yVFkmllEhU32xbx69KqoGTmHuCEPW9HSOmLMbe8F28sqb_IR0_x0wGJYiFmkq1S4Kv0Savld7tGhmm263u3i0hD0jdMrhfh9AUW5E_XW4y0SqGhYFYoCUGvuS8uY-4SuKikIdIyW33EauyRmZ5FfCGlptqEzaLWC4ys2RZxDIW3XlPK_ea9dKi23-uy4p0mm_ZXlpt6cDVBJgZxnHtVqArXf2Ct-m-Nn6scYltkTLA-Jrx24qAlqlhOl_DEAmi4KkIkSBwoQr8vYGnqRXi5n_xvoEXirA5OwfnKnl8zcoYNWnfLXP_X21DGKvXYKPeG2of1u1Kl3ebZscVWUqn_kmZCLayaR5hkPuTomRQETwzzGGeUfPPMbLeHds`,
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
  return <div>Helooo</div>;
};

export default Home;
