import React from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import { useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = (props) => {
  const location = useLocation();
  const isRootRoute = location.pathname === "/";
  const isSignupRoute = location.pathname === "/signup";
  return (
    <Box
      position="sticky"
      width={"100%"}
      p={2}
      sx={{ borderBottom: "2px solid #646a82" }}
    >
      {!props.isLoggedIn ? (
        <Box>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: "Madimi One, sans-serif",
              filter: "drop-shadow(3px 3px #b7bbc8)",
              fontWeight: "bold",
            }}
          >
            TaskTrack
          </Typography>
        </Box>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Madimi One, sans-serif",
                filter: "drop-shadow(3px 3px #b7bbc8)",
                fontWeight: "bold",
              }}
            >
              TaskTrack
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Tooltip title="LogOut" arrow>
              <LogoutIcon />
            </Tooltip>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
