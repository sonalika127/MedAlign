import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Typography,
  Box,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./styling/Messages.css";
const Messages = () => {
  return (
    <Box display="flex" height="100vh" bgcolor="#f4f5f7">
      {/* Left Pane - Message List */}
      <Paper
        elevation={3}
        style={{ width: "25%", background: "#fff", padding: "20px" }}
      >
        <Typography variant="h6" gutterBottom>
          Messages
        </Typography>
        <List>
          {/* Sample Message */}
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="Aaron Lopez" src="path/to/avatar.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Aaron Lopez"
              secondary="Appointment (General) - Where can I find them?"
            />
          </ListItem>
          <Divider />
          {/* More messages can go here */}
        </List>
      </Paper>

      {/* Right Pane - Chat Area */}
      <Box flex={1} display="flex" flexDirection="column" bgcolor="#fff">
        {/* Header */}
        <Box
          padding="20px"
          bgcolor="#f8f9fa"
          display="flex"
          alignItems="center"
        >
          <Avatar alt="Aaron Lopez" src="path/to/avatar.jpg" />
          <Box marginLeft="15px">
            <Typography variant="h6">Aaron Lopez</Typography>
            <Typography variant="body2" color="textSecondary">
              Appointment (General)
            </Typography>
          </Box>
        </Box>

        {/* Chat Thread */}
        <Box flex={1} padding="20px" overflow="auto">
          <Typography variant="body1" gutterBottom>
            Hi Aaron! We need you to update some information. Could you please
            bring your docs next visit?
          </Typography>
          <Typography variant="body1" align="right" gutterBottom>
            Sure, no problem.
          </Typography>
          {/* More messages */}
        </Box>

        {/* Message Input */}
        <Paper
          component="form"
          style={{ display: "flex", alignItems: "center", padding: "10px" }}
        >
          <InputBase
            placeholder="Type a message..."
            fullWidth
            style={{ padding: "10px", flex: 1 }}
          />
          <IconButton color="primary">
            <SendIcon />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  );
};

export default Messages;
