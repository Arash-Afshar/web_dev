import { Typography, Grid } from '@material-ui/core';
import MuiLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    background: 'linear-gradient(125deg, #354AA4 5%, #52319F 50%, #8E24AA 100%)',
    height: "70px",
    marginTop: 70,
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" style={{color: "white"}} align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="CHANGE_ME">
        CHANGE_ME
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {' All Rights Reserved.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();
  return(
    <footer>
      <Grid
        container
        direction="row"
        justify="center"
        alignContent="center"
        alignItems="center"
        className={classes.footer}
      >
        <Grid item xs={false} md={2}/>
        <Grid item xs={12} md={3}>
          <Copyright/>
        </Grid>
        <Grid item xs={false} md={2}/>
        <Grid item xs={12} md={3}>
          <Typography variant="body2" component="p" align="center" style={{color: "white"}}>
            Contact us at CHANGE_ME
          </Typography>
        </Grid>
        <Grid item xs={false} md={2}/>
      </Grid>
    </footer>
  )
}