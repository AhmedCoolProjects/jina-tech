import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import logo from "../assets/logo.svg";
import { Link } from "@material-ui/core";
import searchIconS from "../assets/search.svg";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    background: "transparent",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    flex: 1,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    flex: 1,
    width: "100%",
  },
  inputInput: {
    width: "100%",
    flex: 1,
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

export default function AppBarC() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar
        style={{ background: "transparent" }}
        elevation={0}
        position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}>
            <img
              alt="image_avatar"
              src={logo}
              style={{ width: "1.5em", height: "1.5em" }}
            />
          </IconButton>
          {/* search input */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <img
                alt="search"
                style={{ width: "1.5em", height: "1.5em" }}
                src={searchIconS}
              />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          {/* end search input */}
          <div className={classes.sectionDesktop}>
            {["Home", "Product", "Contact"].map((item) => (
              <Link
                className={classes.menuButton}
                key={item}
                style={{ color: "#fff" }}
                href="#">
                {item}
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
