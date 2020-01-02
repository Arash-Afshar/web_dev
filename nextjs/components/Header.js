import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as ScrollTo } from "react-scroll";
import LogoImage from './logo_transparent.png';
import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.background.default,
    boxShadow: "none",
  },
  logo: {
    flexGrow: 1,
  },
  sections: {
    margin: 10,
  }
}));

export default function Header() {
  const classes = useStyles();
  const [headerStyle, setHeaderStyle] = useState({
    backgroundColor: "rgba(0,0,0,0)",
    boxShadow: "none",
  })
  
  useScrollPosition(
    ({ prevPos, currPos }) => {
      let shouldBeStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        boxShadow: "1px",
      }

      if (currPos.y > -64) {
        shouldBeStyle = {
          backgroundColor: "rgba(0,0,0,0)",
          boxShadow: "none",
        }
      }
  
      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return
  
      setHeaderStyle(shouldBeStyle)
    },
    [headerStyle]
  )

  return(
    <AppBar position="fixed" style={headerStyle}>
      <Toolbar>
        <img src={LogoImage} style={{height: 60}}></img>
        <div style={{flexGrow: 1}}></div>
        <Button variant="contained" className={classes.sections} color="secondary">
          <ScrollTo activeClass="active" to="section1" spy={true} smooth={true} duration={500}>
            Section 1
          </ScrollTo>
        </Button>
        <Button variant="contained" className={classes.sections} color="secondary">
          <ScrollTo activeClass="active" to="section2" spy={true} smooth={true} duration={500}>
            Section 2
          </ScrollTo>
        </Button>
      </Toolbar>
    </AppBar>
  )
}