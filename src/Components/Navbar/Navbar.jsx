import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import BroadcastIcon from "@mui/icons-material/BroadcastOnPersonalRounded";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";

const pages = ["Products", "Pricing", "Contact", "Location"];

function Navbar() {
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#081c00", margin: "0px", padding: "0px" }}
    >
      <Box sx={{ paddingInline: "1rem" }}>
        <Toolbar disableGutters>
          <BroadcastIcon sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "cursive",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => navigate("/")}
          >
            GRIT COFFEE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(`/${page.toLowerCase()}`)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="userrrrrrr"
                  src="https://images.unsplash.com/photo-1699689638343-b2cb7b1e7139?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "50px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Profile />
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default Navbar;
