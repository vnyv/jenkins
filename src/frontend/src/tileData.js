import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import MailIcon from "@material-ui/icons/Mail";
import Gamepad from "@material-ui/icons/Gamepad";
import HeadsetMic from "@material-ui/icons/HeadsetMic";

export const mailFolderListItems = (
  <div>
    <ListItem active={true}>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <HeadsetMic />
      </ListItemIcon>
      <ListItemText primary="Bots" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Gamepad />
      </ListItemIcon>
      <ListItemText primary="Machine Learning" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Manage" />
    </ListItem>
  </div>
);
