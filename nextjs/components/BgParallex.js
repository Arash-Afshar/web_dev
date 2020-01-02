import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Plx from 'react-plx';
import BgImg from './background.png';

const useStyles = makeStyles(theme => ({
  plxStyles: {
    width: "100%",
    height: 800,
    position: "absolute",
    top: 0,
  },
  wrapperStyles: {
    position: "relative",
    marginTop: 200,
    height: 400,
    overflow: "hidden",
    width: "100%",
  }
}));

const parallaxData = [
  {
    start: '#plex-wrapper',
    end: 'footer',
    properties: [
      {
        startValue: -400,
        endValue: 0,
        property: 'translateY',
      },
    ],
  },
];

export default function BgParallex() {
  const classes = useStyles();
  return (
      <div id="plex-wrapper" className={classes.wrapperStyles}>
        <Plx
          className={classes.plxStyles}
          parallaxData={ parallaxData }
        >
          <img src={BgImg} style={{width: "100%", maxWidth: "100%", height: "auto"}}></img>
        </Plx>
      </div>
  );
}
