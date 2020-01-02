import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BannerImage from './dragon.png';
import CurveImage from './curve.svg';

const useStyles = makeStyles(theme => ({
  bannerRoot: {
    position: "relative",
  },
  banner: {
    background: 'linear-gradient(125deg, #354AA4 5%, #52319F 50%, #8E24AA 100%)',
  },
  bannerTitle: {
    color: theme.palette.common.white,
    fontSize: "2em",
  },
  bannerSubtitle: {
    color: theme.palette.grey[400],
    fontSize: "1em",
  },
  bannerImage: {
    maxWidth: "100%",
    height: "auto",
  },
  bannerCurve: {
    height: "120px",
    position: "absolute",
    bottom: "-1px",
    right: "0",
    left: "0",
    background: `url('${CurveImage}') bottom center no-repeat`,
    zIndex: "0",
  }
}));

export default function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.bannerRoot}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        className={classes.banner}
      >
        <Grid item xs={12} style={{height: "100px"}}/>
        <Grid item xs={12} style={{textAlign: "center"}}>
          <Typography variant="h1" component="h1" className={classes.bannerTitle} gutterBottom>
            Short statement about your website
          </Typography>
        </Grid>

        <Grid item xs={1}/>
        <Grid item xs={10} style={{textAlign: "center"}}>
          <Typography variant="body1" component="p" className={classes.bannerSubtitle} gutterBottom>
            Small description about what you do. Maybe one or two lines max.
          </Typography>
        </Grid>
        <Grid item xs={1}/>

        <Grid item xs={1}/>
        <Grid item xs={10} style={{textAlign: "center"}}>
          <img src={BannerImage} className={classes.bannerImage}></img>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
      <div className={classes.bannerCurve}></div>
    </div>
  )
}