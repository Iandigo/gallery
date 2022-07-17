import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Add from "./Add";
import { Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const Layout = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />

      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Outlet />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>

      <Add />
    </div>
  );
};

export default Layout;
