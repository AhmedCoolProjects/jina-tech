import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="#f1f1f1" align="center">
      {"Copyright © "}
      <Link
        target="blank_"
        color="inherit"
        href="https://www.linkedin.com/in/bargady-ahmed-082b30177">
        Ahmed BARGADY
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
    backgroundColor: "#cf8afa 35.71%",
    color: "#f1f1f1",
  },
}));
function CopyrightC() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography color="#f1f1f1" variant="h6" align="center" gutterBottom>
        Created By:
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="#f1f1f1"
        component="p">
        Ahmed BARGADY
      </Typography>
      <Copyright />
    </footer>
  );
}

export default CopyrightC;
