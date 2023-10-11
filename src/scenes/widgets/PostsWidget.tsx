import { useEffect } from "react";
import PostWidget from "./PostWidget";


const PostsWidget = () => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps
  const postss = [
    {
      _id: "dkfjd",
      userId: "dfkdf",
      firstName: "surajit",
      lastName: "maity",
      description: "a post",
      location: "kolkata",
      picturePath:
        "https://s3.india.com/travel/wp-content/uploads/2015/09/howrah.jpg",
      userPicturePath:
        "https://m.media-amazon.com/images/M/MV5BYjI4MGExNTAtNzU0Mi00NzBkLTk2NDctYjk2NzA2MzVjYTI1XkEyXkFqcGdeQXVyMTUzOTczNzYx._V1_FMjpg_UX1000_.jpg",
      likes: null,
      comments: [],
    }, {
      _id: "dkfjd",
      userId: "dfkdf",
      firstName: "surajit",
      lastName: "maity",
      description: "a post",
      location: "kolkata",
      picturePath:
        "https://s3.india.com/travel/wp-content/uploads/2015/09/howrah.jpg",
      userPicturePath:
        "https://m.media-amazon.com/images/M/MV5BYjI4MGExNTAtNzU0Mi00NzBkLTk2NDctYjk2NzA2MzVjYTI1XkEyXkFqcGdeQXVyMTUzOTczNzYx._V1_FMjpg_UX1000_.jpg",
      likes: null,
      comments: [],
    },
  ];
  return (
    <>
      {/**Print posts in reverse order to simulate an actual social media site */}
      {postss
        .slice(0)
        .reverse()
        .map(
          //destructure info
          ({
            _id,
            userId,
            firstName,
            lastName,
            description,
            location,
            picturePath,
            userPicturePath,
            comments,
          }) => (
            <PostWidget
              key={_id}
             
              postUserId={userId}
              name={`${firstName} ${lastName}`}
              description={description}
              location={location}
              picturePath={picturePath}
              userPicturePath={userPicturePath}
              
              comments={comments}
            />
          )
        )}
    </>
  );
};

export default PostsWidget;
