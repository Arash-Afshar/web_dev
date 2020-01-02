import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, CardActions, CardHeader, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
      backgroundColor: theme.palette.background.secondary,
      color: theme.palette.common.white,
  },
  cardAction: {
      color: theme.palette.custom.accent,
  }
}));

function CustomCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title={props.title}/>
      <CardContent>
        <Typography color="inherit" gutterBottom>
          {props.description}
          <br/>
          ...
          <br/>
          ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.cardAction}>Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default function Section1Name() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{marginTop: 70}}
      spacing={2}
      id="section1"
    >
      <Grid item xs={12}>
        <Typography variant="h2" component="h2" align="center" color="primary" gutterBottom>
          Section 1
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomCard title="Focus area 1" description="Some description..."/>
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomCard title="Focus area 2" description="Some description..."/>
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomCard title="Focus area 3" description="Some description..."/>
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomCard title="Focus area 4" description="Some description..."/>
      </Grid>
    </Grid>
  )
}
