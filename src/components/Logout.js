import { Button, Box, Modal, Typography } from "@mui/material";
import React from "react";
import bglogo from "./images/biglogo.png";

const style = {};

const Logout = () => {
  const [openL, setOpenL] = React.useState(false);
  const handleOpenL = () => setOpenL(true);
  const handleCloseL = () => setOpenL(false);

  return (
    <div>
      <Button
        onClick={handleOpenL}
        sx={{ textTransform: "capitalize", fontSize: "1.2vw", color: "brown" }}
      >
        Logout
      </Button>
      <Modal
        open={openL}
        onClick={handleCloseL}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: "400px",
            height: "auto",
            borderRadius: "40px",
            bgcolor: "white",
            position: "absolute",
            top: "40%",
            left: "50%",
            padding: "30px",
          }}
        >
          <div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={bglogo} alt="" height={50} width={200} />
            </div>
            <div>
              <Typography
                fontSize="2vw"
                textAlign={"center"}
              >
                Are you sure you want to Log out?
              </Typography> <br />
              <div style={{ display: "flex",flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
                <Button
                  style={{
                    background:
                      "linear-gradient(180deg, #730684 0%, #FF3737 100%)",
                      width:'120px',
                      fontSize:'1vw',
                      fontWeight:'600',
                      color:'white'

                  }}
                >
                  Log Out
                </Button> <br />
                <Button
                  style={{
                    border:
                      " 1px solid brown",
                      width:'80px',
                      color:'brown'
                      
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Logout;
