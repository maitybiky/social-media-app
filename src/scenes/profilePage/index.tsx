import { Box, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar"
import FriendListWidget from "../../scenes/widgets/FriendListWidget";
import MyPostWidget from "../../scenes/widgets/MyPostWidget";
import PostsWidget from "../../scenes/widgets/PostsWidget";
import UserWidget from "../../scenes/widgets/UserWidget";

const ProfilePage = () => {
 
  const  userId  = "dkjf";

  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");



  useEffect(() => {
    // getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps



  return (
    <Box>
      <Navbar />
      {/**Main box */}
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        {/**Left side
         *  User Widget and Friend List
         */}
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={"https://cdn.statusqueen.com/dpimages/thumbnail/Attitude_boy_dp_-3106.jpg"} />
          <Box m="2rem 0" />
          <FriendListWidget  />
        </Box>
        {/**Center
         *  Create Post
         *  Post List
         */}
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={"https://cdn.statusqueen.com/dpimages/thumbnail/Attitude_boy_dp_-3106.jpg"} />
          <Box m="2rem 0" />
          {/**Pass in isProfile, because we are indicating that we only 
           *  want posts from a certain user 
          */}
          <PostsWidget  />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;