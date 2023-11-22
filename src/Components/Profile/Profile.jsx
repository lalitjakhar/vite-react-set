import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Button,
  Menu,
  MenuItem,
  Divider,
  Typography,
  Avatar,
  styled,
  TextField,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function Profile() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [statusAnchor, setStatusAnchor] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [customStatus, setCustomStatus] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfilePic(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const UserBox = styled(Box)({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "20px",
  });

  const StyledBox = styled((props) => <Box {...props} />)({
    height: "6px",
    width: "6px",
  });

  const statusOptions = [
    { label: "Online", color: "#FF5733" },
    { label: "Away", color: "#33FF57" },
    { label: "In meeting", color: "#5733FF" },
    { label: "Out of office", color: "#FF5733" },
    { label: "Do Not Disturb", color: "#FF5733" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleStatusChange = (option) => {
    if (option === "Custom") {
      setSelectedStatus(customStatus);
    } else {
      setSelectedStatus(option.label);
      setSelectedColor(option.color);
    }
    setStatusAnchor(null);
  };

  return (
    <>
      <Box sx={{ width: "23rem", padding: "22px" }}>
        <Grid container width={400} bgcolor="white">
          <Grid item xs={12} sx={{ display: "flex" }}>
            <Grid item xs={4}>
              <label htmlFor="profile-pic-input">
                <Avatar
                  sx={{
                    bgcolor: blue[100],
                    width: 110,
                    height: 110,
                    cursor: "pointer",
                  }}
                  alt="Profile Picture"
                  src={profilePic}
                >
                  {profilePic ? null : "J"}
                </Avatar>
              </label>
              <input
                id="profile-pic-input"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <Typography variant="h5">John Doe</Typography>
              <Typography variant="subtitle1">johnkroolo@gmail.com</Typography>
              <Typography variant="h6">Org Owner</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between" }}
          mt={2}
        >
          <Grid item display="flex" alignItems="center" gap="6px">
            Status: <StyledBox backgroundColor={selectedColor} />{" "}
            {selectedStatus}
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              onClick={(e) => setStatusAnchor(e.currentTarget)}
              sx={{ textTransform: "none", color: "black !important" }}
            >
              Set status
            </Button>
            <Menu
              anchorEl={statusAnchor}
              open={Boolean(statusAnchor)}
              onClose={() => setStatusAnchor(null)}
            >
              {statusOptions.map((option) => (
                <MenuItem
                  key={option.label}
                  onClick={() => handleStatusChange(option)}
                >
                  <div
                    style={{
                      backgroundColor: option.color,
                      width: "10px",
                      height: "10px",
                      marginRight: "8px",
                      display: "inline-block",
                    }}
                  ></div>
                  {option.label}
                </MenuItem>
              ))}
              <MenuItem>
                <TextField
                  value={customStatus}
                  onChange={(e) => setCustomStatus(e.target.value)}
                  label="Custom Status"
                  variant="standard"
                  size="small"
                />
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between" }}
          mt={2}
        >
          <Grid item sx={{ display: "flex", gap: "8px" }}>
            <AccessTimeIcon />
            <Typography>{currentTime.toLocaleTimeString()}</Typography>
            <Typography>local time</Typography>
          </Grid>
          <Grid item>
            <Typography>India</Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#F9FAFB",
          }}
          mt={2}
        >
          <Grid item sx={{ display: "flex", gap: "8px" }}>
            <Typography>
              Current plan:
              <span style={{ fontWeight: "600" }}>Starter(free)</span>
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                background: "#9E77ED !important",
                color: "white",
                textTransform: "none",
                borderRadius: " var(--radius-md, 8px)",
              }}
            >
              Upgrade
            </Button>
          </Grid>
        </Grid>

        <Grid sx={{ display: "flex", flexDirection: "column" }}>
          <Grid item sx={{ display: "flex", gap: "8px" }} mt={2}>
            <PersonOutlinedIcon />
            <Typography>My Profile</Typography>
          </Grid>
          <Grid item sx={{ display: "flex", gap: "8px" }} mt={2}>
            <LockOutlinedIcon />
            <Typography>Change Password</Typography>
          </Grid>
          <Grid item sx={{ display: "flex", gap: "8px" }} mt={2}>
            <SettingsOutlinedIcon />
            <Typography>Settings</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ width: "100%", marginTop: "16px" }} />
        <Grid item sx={{ display: "flex", gap: "8px" }} mt={2}>
          <LogoutOutlinedIcon />
          <Typography>Sign Out</Typography>
        </Grid>
      </Box>
    </>
  );
}
