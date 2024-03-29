import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { Telegram } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 350,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SubscribeInputC() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <InputBase className={classes.input} placeholder="Email ..." />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton className={classes.iconButton}>
        <Telegram color="primary" />
      </IconButton>
    </Paper>
  );
}
