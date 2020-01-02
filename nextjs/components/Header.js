import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as ScrollTo } from "react-scroll";

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
  return(
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Typography variant="h4" component="p" color="secondary" className={classes.logo}>
          Logo
        </Typography>
        <Button variant="contained" className={classes.sections}>
          <ScrollTo activeClass="active" to="section1" spy={true} smooth={true} duration={500}>
            Section 1
          </ScrollTo>
        </Button>
        <Button variant="contained" className={classes.sections}>
          <ScrollTo activeClass="active" to="section2" spy={true} smooth={true} duration={500}>
            Section 2
          </ScrollTo>
        </Button>
      </Toolbar>
    </AppBar>
  )
}