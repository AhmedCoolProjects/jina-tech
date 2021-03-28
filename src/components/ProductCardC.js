import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
  },
  media: {
    height: 0,
    paddingTop: "70%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ProductCardC({ product }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [clickedProduct, setClickedProduct] = useState({});

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickOpen = (product) => {
    setClickedProduct(product);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root}>
          <CardHeader
            subheaderTypographyProps={{
              color: "#fff",
            }}
            title={product.name}
            subheader={product.company}
          />
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.name}
          />
          <CardContent>
            <Typography
              style={{ textAlign: "right" }}
              variant="h5"
              color="#fff"
              component="p">
              {product.price}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton onClick={() => handleClickOpen(product)}>
              <AddShoppingCartIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}>
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography color="textSecondary" paragraph>
                Features:
              </Typography>
              <Typography color="textSecondary" paragraph>
                <strong> Display Type:</strong> Dynamic AMOLED 2X, 120Hz,
                HDR10+, 1300 nits (peak)
                <br />
                <strong>Display Size:</strong> 6.2 inches
                <br />
                <strong>Display Resolution:</strong> 1080 x 2400 pixels
                <br />
                <strong>Display Protection:</strong> Corning Gorilla Glass
                Victus
                <br />
                <strong>Platform OS:</strong> Android 11, One UI 3.1
                <br />
                <strong>Chipset:</strong> Exynos 2100 (5 nm) - International
                <br />
                Qualcomm SM8350 Snapdragon 888 (5 nm) - USA/China
                <br />
                <strong>Memory Card slot:</strong> No
                <br />
                <strong>Memory Internal:</strong> 128GB 8GB RAM, 256GB 8GB RAM
                <br />
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
      {/* dialog */}
      <div>
        <Dialog
          PaperProps={{
            style: {
              background:
                "linear-gradient(68.7deg,#dfc4e4 5.42%,#cf8afa 35.71%,#5950b9 87.17%)",
            },
          }}
          onClose={handleClose}
          open={open}>
          <DialogTitle
            style={{ color: "#fff" }}
            id="customized-dialog-title"
            onClose={handleClose}>
            {clickedProduct.name} <sub>{clickedProduct.company}</sub>
          </DialogTitle>
          <DialogContent dividers>
            <img
              alt="clicked_product"
              src={clickedProduct.image}
              style={{
                objectFit: "contain",
                width: "90%",
                borderRadius: 8,
                marginLeft: "5%",
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} style={{ color: "#fff" }}>
              Keep shopping
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
