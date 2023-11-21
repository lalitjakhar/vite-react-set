import { Container, Box, Grid, Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { blue } from "@mui/material/colors";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function Pricing() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (status) => {
    console.log(`Selected status: ${status}`);
    handleClose();
  };

  const statusOptions = [
    { text: "Online", value: "yourStatus" },
    { text: "Away", value: "Away" },
    { text: "In Meeting", value: "In Meeting" },
    { text: "Out of the Office", value: "Out of the Office" },
    { text: "Do Not Disturb", value: "Do Not Disturb" },
    { text: "Custom Status", value: "Custom Status" },
  ];

  const getCurrentLocalTime = () => {
    const currentTime = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Intl.DateTimeFormat(navigator.language, options).format(
      currentTime
    );
  };

  return (
    <>
      <Container>
        <Box
          sx={{ margin: "5rem", height: "600px", border: "1px solid black" }}
        >
          <Box sx={{ padding: "2rem 5rem" }}>
            <Card sx={{ display: "flex", boxShadow: "none" }}>
              <Avatar sx={{ bgcolor: blue[100], width: 110, height: 110 }}>
                J
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    John Doe
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    john@kroolo.com
                  </Typography>
                  <Typography component="div" variant="h6">
                    Org Owner
                  </Typography>
                </CardContent>
              </Box>
            </Card>
            <Grid
              container
              spacing={3}
              sx={{
                padding: "0",
                margin: "0",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "18px" }}>
                  Status:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClick}
                  sx={{ textTransform: "none", fontSize: "18px" }}
                >
                  Set a status
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "18px",
                        "&:hover": {
                          backgroundColor: "transparent !important",
                        },
                      }}
                    >
                      Your Status
                    </Typography>
                  </MenuItem>
                  {statusOptions.map((option) => (
                    <MenuItem
                      key={option.value}
                      onClick={() => handleMenuItemClick(option.value)}
                    >
                      {option.text}
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={3}
              sx={{
                padding: "0",
                margin: "0",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <AccessTimeIcon fontSize="small" /> {getCurrentLocalTime()}{" "}
                  <Typography variant="h6" sx={{ fontSize: "18px" }}>
                    local time
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ fontSize: "18px" }}>
                  India
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={3}
              sx={{
                padding: "0",
                margin: "0",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Typography variant="h6" sx={{ fontSize: "18px" }}>
                  Current Plan:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none", fontSize: "18px" }}
                >
                  Upgrade
                </Button>
              </Grid>
            </Grid>
            <MenuItem sx={{ marginTop: "8px" }}>
              <ListItemIcon>
                <PersonOutlinedIcon />
              </ListItemIcon>
              My Profile
            </MenuItem>
            <MenuItem sx={{ marginTop: "8px" }}>
              <ListItemIcon>
                <LockOutlinedIcon />
              </ListItemIcon>
              Change Password
            </MenuItem>
            <MenuItem sx={{ marginTop: "8px" }}>
              <ListItemIcon>
                <SettingsOutlinedIcon />
              </ListItemIcon>
              Settings
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <LogoutOutlinedIcon />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Box>
        </Box>
      </Container>
    </>
  );
}