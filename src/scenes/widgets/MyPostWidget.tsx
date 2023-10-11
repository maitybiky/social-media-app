import {
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import UserImage from "../../components/UserImage";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState } from "react";

type MyPostWidgetProp = {
  picturePath: string;
};

const MyPostWidget = ({ picturePath }: MyPostWidgetProp) => {
  //used to determine if the user clicks the image button to drop an image or not
  const [isImage, setIsImage] = useState(false);
  //actual image

  //post content
  const [post, setPost] = useState("");
  const { palette } = useTheme();

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const medium = palette.primary.main;

  //handles post api call

  return (
    <WidgetWrapper>
      <FlexBetween gap="1.5rem">
        <UserImage image={picturePath} />
        <InputBase
          placeholder="What's on your mind?"
          // ***setPost()*** changes local state
          // dont get confused with setPosts - changes global state
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: "100%",
            backgroundColor: "background.default",
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box
          borderRadius="5px"
          border={`1px solid ${medium}`}
          mt="1rem"
          p="1rem"
        >

          //todo dropzone
        </Box>
      )}

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>
        <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: "text.primary" }} />
          <Typography
            color={"text.primary"}
            sx={{
              "&:hover": {
                cursor: "pointer",
                color: medium,
              },
            }}
          >
            Image
          </Typography>
        </FlexBetween>

        {isNonMobileScreens ? (
          <>
            <FlexBetween gap="0.25rem">
              <GifBoxOutlined sx={{ color: "text.primary" }} />
              <Typography color={"text.primary"}>Clip</Typography>
            </FlexBetween>
            <FlexBetween gap="0.25rem">
              <AttachFileOutlined sx={{ color: "text.primary" }} />
              <Typography color={"text.primary"}>Attachment</Typography>
            </FlexBetween>
            <FlexBetween gap="0.25rem">
              <MicOutlined sx={{ color: "text.primary" }} />
              <Typography color={"text.primary"}>Audio</Typography>
            </FlexBetween>
          </>
        ) : (
          <FlexBetween gap="0.25rem">
            <MoreHorizOutlined sx={{ color: "text.primary" }} />
          </FlexBetween>
        )}
        <Button
          disabled={!post}
          onClick={() => alert("handle post")}
          variant="contained"
        >
          {" "}
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default MyPostWidget;
