import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Toolbar, Grid, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "black",
    height: 80,
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="transparent" className={classes.appBar}>
        <Toolbar>
          <Container>
            <Grid container>
              <Grid item lg={8}>
                <p className='footerText' style={{ color: "white" }}>
                  Copyright &copy;2020 thebomway.com{" "}
                </p>
              </Grid>
              <Grid item lg={4}>
                <p className='footerText' style={{ color: "white" }}> Powered by thebomway.com</p>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
