import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

export default function Banner() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12} style={{height: "150px"}}/>
      <Grid item xs={12} style={{textAlign: "center"}}>
        <Typography variant="h1" component="h1" gutterBottom>
          Short statement about your website
        </Typography>
      </Grid>

      <Grid item xs={1}/>
      <Grid item xs={10} style={{textAlign: "center"}}>
        <Typography variant="body1" component="p" gutterBottom>
          Small description about what you do. Maybe one or two lines max.
        </Typography>
      </Grid>
      <Grid item xs={1}/>

      <Grid item xs={1}/>
      <Grid item xs={10} style={{textAlign: "center"}}>
        Banner image
      </Grid>
      <Grid item xs={1}/>
    </Grid>
  )
}