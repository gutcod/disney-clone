export const videosQuerry = `query{
    videos{
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
  }`;

