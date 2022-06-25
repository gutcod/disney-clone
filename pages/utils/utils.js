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

export const accountQuery = `query{
  account(where:  {id: "cl4od2k7bd38e0cuqjdizammv"}){
    username,
    avatar{
      url
    }
  }
}`
