import React from "react";
import { makeStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import samsung from "../assets/samsung.svg";
import hp from "../assets/hp.svg";
import ibm from "../assets/ibm.svg";
import apple from "../assets/apple.svg";
import intel from "../assets/intel.svg";
import windows from "../assets/windows.svg";

const stickers = [
  {
    image: ibm,
    title: "ibm",
  },
  {
    image: windows,
    title: "windows",
  },
  {
    image: samsung,
    title: "samsung",
  },
  {
    image: apple,
    title: "apple",
  },
  {
    image: intel,
    title: "intel",
  },
  {
    image: hp,
    title: "hp",
  },
];
const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
}));
function StickersBarC() {
  const classes = useStyles();
  return (
    <Toolbar
      component="nav"
      variant="dense"
      className={classes.toolbarSecondary}>
      {stickers.map((item, index) => (
        <img
          key={index}
          src={item.image}
          alt={item.title}
          style={{
            height: "3em",
            objectFit: "contein",
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      ))}
    </Toolbar>
  );
}

export default StickersBarC;
