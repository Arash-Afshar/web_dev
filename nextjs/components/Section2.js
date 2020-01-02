import React from 'react';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import { Button, Grid, FormControl, InputLabel, Input, FormHelperText, OutlinedInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Section2Name() {
  return(
    <form action="mailto:CHANGE_ME@CHANGE_ME.com">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{marginTop: 70}}
        id="section2"
      >
        <Grid item xs={12}>
          <Typography variant="h2" component="h2" gutterBottom align="center" color="primary">
            Contact Us
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="p" gutterBottom align="center">
            Description...
          </Typography>
        </Grid>

        <Grid item xs={false} md={2}/>
        <Grid item xs={12} md={8}>
          <FormControl fullWidth={true} color="secondary">
            <InputLabel htmlFor="email">Your Email Address</InputLabel>
            <Input id="email" type="email" name="email" aria-describedby="email-helper-text" />
            <FormHelperText id="email-helper-text"></FormHelperText>
          </FormControl>
          <FormControl fullWidth={true} color="secondary">
            <InputLabel htmlFor="subject">Subject</InputLabel>
            <Input id="subject" type="text" name="subject" aria-describedby="subject-helper-text" />
            <FormHelperText id="subject-helper-text"></FormHelperText>
          </FormControl>
          <FormControl fullWidth={true} color="secondary">
            <InputLabel htmlFor="description">Description</InputLabel>
            <OutlinedInput multiline rows="5" id="description" type="text" name="body" aria-describedby="description-helper-text" />
            <FormHelperText id="description-helper-text"></FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={false} md={2}/>

        <Grid item xs={6}></Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            endIcon={<SendIcon/>}
            type="submit"
            color="secondary"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}