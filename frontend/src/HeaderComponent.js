import React from "react";
import { clearLocalStorage } from "./Utilities/Helper/function";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#295abc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
          }}
        >
          <Typography sx={{ marginLeft: 5 }} variant="h4" align="center">
            LOGO
          </Typography>

          <Button
            sx={{
              position: "absolute",
              right: 20,
            }}
            variant="primary"
            onClick={() => {
              clearLocalStorage();
              navigate("/Login");
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
