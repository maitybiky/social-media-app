import WidgetWrapper from "../../components/WidgetWrapper";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";

import Friend from "../../components/Friend";
import SideBarList from "../../components/SideBarList";


const SideBar = () => {
  return (
    <WidgetWrapper>
      <Box sx={{ m: 2 }}>
        <Friend
        withMenu={false}
          friendId="xdfj"
          name="Surajit Maity"
          subtitle=""
          userPicturePath="https://m.media-amazon.com/images/M/MV5BYjI4MGExNTAtNzU0Mi00NzBkLTk2NDctYjk2NzA2MzVjYTI1XkEyXkFqcGdeQXVyMTUzOTczNzYx._V1_FMjpg_UX1000_.jpg"
        />
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <SideBarList />
      </Box>
    </WidgetWrapper>
  );
};

export default SideBar;
