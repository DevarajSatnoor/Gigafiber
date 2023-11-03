import {
  Box,
  Avatar,
  ListItemText,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import React from "react";
import gig from "./images/giglog.png";
import Divider from "@mui/material/Divider";

const Feed = () => {
  return (
    <Box flex={3} width="100%" sx={{backgroundImage: 'linear-gradient(to top, #730684, #97006b, #ad004e, #b7002e, #b50505)'}}>
      <div
        className="box"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "auto",
          background: "white",
          borderRadius: "1rem",
          padding: "2rem",
        }}
      >
        <div className="Avatar_Name">
          <div style={{display:'flex',gap:'0.5rem',alignItems:'center'}}>
            <Avatar src="" alt="" />
            {/* <ListItemText primary="dev" />  */}
            <span style={{ fontSize: "2vw" }}>Dev</span>
          </div>
          <Typography  fontSize="2vw">Current Plans</Typography>
        </div>{" "}
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://cdn.pixabay.com/photo/2023/09/27/03/00/residential-8278516_1280.jpg"
            height={300}
            width={500}
            alt=""
          />
        </div>{" "}
        <br />
        <Box
          display={"flex"}
          flexDirection={"coloumn"}
          gap={20}
          justifyContent={"center"}

          // borderRadius={20}
        >
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "" }}>
            {[1, 2, 3, 4, 5].map((value) => (
              <ListItem
                key={value}
                disableGutters
                sx={{gap:'10px'}}
                // secondaryAction={
                //   <IconButton aria-label="comment">
                //     {/* <CommentIcon /> */}
                //   </IconButton>
                // }
              >
                <Avatar src={gig} />
                <ListItemText primary={`name ${value}`} />
                <Typography>gfhj</Typography>
              </ListItem>
            ))}
            <Divider
              variant="inset"
              style={{ width: "100%", position: "relative", right: "4.4rem" }}
            />
            <ListItem >
            <br />
              <ListItemText>View Plan Info</ListItemText>
              <Typography>Add Extra Gb</Typography>
            </ListItem>
          </List>
        </Box>
      </div>
    </Box>
  );
};

export default Feed;
