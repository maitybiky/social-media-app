import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useEffect } from "react";



const FriendListWidget = () => {
  const { palette } = useTheme();
  useEffect(() => {
    // getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const frnd = [
    {
      _id: "1",
      friendId: "fdfdf",
      name: "surajit maity",
      subtitle: "developer",
      userPicturePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS3yQpjoZCMQnfCL7Lsu5fEg_5vdpM_12WuWwTUOuMVSSgTsQ8OQB3suRhaA8xPXEvAu0&usqp=CAU",
    },
  ];
  return (
    <WidgetWrapper>
      <Typography
        color={palette.primary.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {frnd?.map((friend) => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.name}`}
            subtitle={friend.subtitle}
            userPicturePath={friend.userPicturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
