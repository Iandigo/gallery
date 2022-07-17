import React from "react";
import images from "../data/image";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  container: {
    columnCount: 3,
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      columnCount: 2,
    },
    [theme.breakpoints.down("xs")]: {
      columnCount: 1,
    },
  },

  pics: {
    transition: "all 350ms ease",
    cursor: "pointer",
    marginBottom: "12px",
  },

  model: {
    position: "fixed",
    height: "100vh",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    transition:
      "opacity .4s ease, visibility .4s ease, transform .5s ease-in-out",
    visibility: "visible",
    opacity: 1,
    transform: "scale(1)",
    overflow: "hidden",
    zIndex: 999,

    "& img": {
      width: "auto",
      maxWidth: "100%",
      height: "auto",
      maxHeight: "100%",
      display: "block",
      lineHeight: 0,
      boxSizing: "border-box",
      padding: "80px 0 20px",
      margin: "0 auto",
    },

    "& svg": {
      position: "fixed",
      top: "70px",
      right: "10px",
      width: "2rem",
      height: "2rem",
      padding: "5px",
      backgroundColor: "rgba(0,0,0,0.4)",
      color: "#ffffff",
      cursor: "pointer",
    },
  },
}));

const Camera = () => {
  const classes = useStyles();

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempIngSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempIngSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      {model ? (
        <div className={classes.model} style={{ width: "100%" }}>
          <img src={tempimgSrc} alt="tempImg" />
          <CloseIcon onClick={() => setModel(false)} />
        </div>
      ) : null}

      <div className={classes.container}>
        {images.map((img, id) => {
          return (
            <div
              className={classes.pics}
              key={id}
              onClick={() => getImg(img.imgSrc)}
            >
              <img src={img.imgSrc} alt="img" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Camera;
