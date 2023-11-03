import { Box, Typography, Avatar,Modal,Button } from "@mui/material";
import React from "react";
import cam from "./images/cam.png";


const styleP = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "whitesmoke",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
  borderRadius: 10,
  // boxShadow: "0 14.010417938232422 42.031253814697266 0 #0000000D inset",
};

const Profile = () => {

  const [openP, setOpenP] = React.useState(false);
  const handleOpenP = () => setOpenP(true);
  const handleCloseP = () => setOpenP(false);


  return (
    // <div>
    <Box>
      <Button
        id="basic-button"
        aria-controls={openP ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openP ? "true" : undefined}
        onClick={handleOpenP}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{textTransform:"capitalize",fontSize:'1.3vw',color:'brown'}}
      >
        Profile
      </Button>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={openP}
        onClose={handleCloseP}
      >
        <Box sx={styleP}>
          <div
            className="container"
            style={{ padding: "20px", backgroundAttachment: "initial" }}
          >
            <div className="photocontainer">
              <img
                src="https://cdn.pixabay.com/photo/2023/09/18/13/46/building-8260627_640.jpg"
                alt="img"
                height={190}
                width={190}
                style={{ borderRadius: "50%" }}
              />
              <button id="cam-button">
                <img src={cam} alt="" height={18} width={18} />
              </button>
            </div>
            <div className="text-container" style={{ textAlign: "center" }}>
              <h2
                style={{
                  marginTop: "opx",
                  marginBottom: "0px",
                  color: "#055EB5",
                }}
              >
                Devaraj Satnoor
              </h2>
              <Typography>Software Engineer</Typography>
            </div>
          </div>
          <div className="profile-details">
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <Avatar src="" alt="" />
              <span style={{ fontSize: "1rem" }}>Contact No</span>
            </div>
            <Typography variant="h6">12345678</Typography>
          </div>{" "}
          <br />
          <div className="profile-details">
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <Avatar src="" alt="" />
              <span style={{ fontSize: "1rem" }}>Contact No</span>
            </div>
            <Typography variant="h6">12345678</Typography>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};

export default Profile;
