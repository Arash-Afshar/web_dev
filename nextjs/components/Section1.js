import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, CardActions, CardHeader, Button, Grid } from '@material-ui/core';

function CustomCard(props) {
  return (
    <Card>
      <CardHeader title={props.title}/>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.description}
          <br/>
          ...
          <br/>
          ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
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
        <Typography variant="h2" component="h2" gutterBottom style={{textAlign: "center"}}>
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
