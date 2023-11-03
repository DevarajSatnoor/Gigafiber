import React from "react";
import gridicon from "./images/gridicons_add.png";
import { Box, Typography, Avatar, Button } from "@mui/material";
import banner from './images/banner.png'
import "./Style.css"

const Rightbar = () => {
  return (
    <Box bgcolor={"white"} flex={1.5} p={2} width="100%" borderRadius={5}>
      <Box width="100%" p={2}>
        <Typography fontSize="2vw" color={'brown'}>Add'zz</Typography>
        <a href="https://www.mindstaytechnology.in/"><img className="animation" ></img></a>
      </Box>

      <Box className="box" p={1} margin={0}>
        <p style={{ fontSize: "2.3vw", color: "brown" }}>Popular Packages</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Avatar src="" />

            <Typography fontSize="1.3vw">
              Unlimited GB 100MBPS+8000 Grocery Points
            </Typography>
          </div>
          <Button>
            <img src={gridicon} alt="" width={45} height={50} />
          </Button>
        </div>{" "}
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Avatar src="" />

            <Typography fontSize="1.3vw">
              Unlimited GB 100MBPS+8000 Grocery Points
            </Typography>
          </div>
          <Button>
            <img src={gridicon} alt="" width={45} height={50} />
          </Button>
        </div>{" "}
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Avatar src="" />

            <Typography fontSize="1.3vw">
              Unlimited GB 100MBPS+8000 Grocery Points
            </Typography>
          </div>
          <Button>
            <img src={gridicon} alt="" width={45} height={50} />
          </Button>
        </div>{" "}
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Avatar src="" />

            <Typography fontSize="1.3vw">
              Unlimited GB 100MBPS+8000 Grocery Points
            </Typography>
          </div>
          <Button>
            <img src={gridicon} alt="" width={45} height={50} />
          </Button>
        </div>{" "}
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Avatar src="" />

            <Typography fontSize="1.3vw">
              Unlimited GB 100MBPS+8000 Grocery Points
            </Typography>
          </div>
          <Button>
            <img src={gridicon} alt="" width='45vw' height='45vw' />
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Rightbar;
