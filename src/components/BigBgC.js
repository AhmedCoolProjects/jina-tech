import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AppBarC from "./AppBarC";
import clsx from "clsx";
import BarDownC from "./BarDownC";
import laptopImage from "../assets/laptop.png";

const useStyles = makeStyles((theme) => ({
  mainFeaturedCard: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(8),
    height: 600,
    background:
      "linear-gradient(40.35deg, #F9DEFD 8.64%, #CF8AFA 32.6%, #5950B9 68.84%)",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
  mainFeaturedCardContent: {
    position: "relative",
    zIndex: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function BigBgC(props) {
  const classes = useStyles();
  const { infoBg } = props;

  return (
    <>
      <Paper
        elevation={10}
        className={clsx(classes.mainFeaturedCard, "big_paper")}>
        <div className={classes.overlay} />
        <AppBarC />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedCardContent}>
              <Typography
                component="h1"
                variant="h4"
                color="inherit"
                gutterBottom>
                {infoBg.preTitle}
              </Typography>
              <Typography
                component="h1"
                variant="h2"
                color="inherit"
                gutterBottom>
                {infoBg.title}
              </Typography>
              <Typography
                style={{ marginLeft: 15 }}
                variant="h5"
                color="inherit"
                paragraph>
                {infoBg.description}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <img src={laptopImage} alt="bg_image" className="bg_laptop_image" />
        <BarDownC />
      </Paper>
    </>
  );
}

BigBgC.propTypes = {
  infoBg: PropTypes.object,
};
