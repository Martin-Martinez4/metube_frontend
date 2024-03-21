
import { gql } from "../../__generated__/gql";
import { useQuery } from "@apollo/client";
import ThumbnailPreviewSmall from "../video/thumbnailpreview/ThumbnailPreviewSmall";

export const VIDEOS_QUERY2 = gql(/* GraphQL */`
query Videos2{
  videos(amount: 5){
    id
    url
    duration
    contentinformation{
      title
      published
    }
    thumbnail{
      url
    }
    statistic{
      views
    }
    profile{
      username
    }
  
  }
}
`);

function SmallPreviews(){
    const { data, loading, error } = useQuery(VIDEOS_QUERY2);
  
    if (loading) {
  
      return (
         <div className="videopage__suggestions">

            <img src="/LoadingRings.svg" style={{ width: "10%", margin: "auto" }}></img>

            <div className="whitespace"></div>
        </div>
      )
  
  
    }

    return(
        <div className="videopage__suggestions">

            {data?.videos?.map((video) => {
                return (<ThumbnailPreviewSmall video={video}></ThumbnailPreviewSmall>)
            })}

            <div className="whitespace"></div>


        </div>
    )
}

export default SmallPreviews;
