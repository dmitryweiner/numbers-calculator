import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider/Slider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


export default function TrigonometryView() {
  const [alpha, setAlpha] = React.useState(0);

  function handleChange(event, newValue) {
    let result = 0;
    const value = newValue || event.target.value;
    if (value) {
      result = Number(parseInt(value));
    }
    setAlpha(result);
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography gutterBottom>
              &alpha; =
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="alpha"
              value={alpha}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={alpha}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
              max={360}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12}>
        Sin {alpha} = {Math.sin(alpha / 360 * 2 * Math.PI).toFixed(10)}
      </Grid>
      <Grid item xs={12} sm={12}>
        Cos {alpha} = {Math.cos(alpha / 360 *2 * Math.PI).toFixed(10)}
      </Grid>
      <Grid item xs={12} sm={12}>
        Tan {alpha} = {Math.tan(alpha / 360 *2 * Math.PI).toFixed(10)}
      </Grid>
      <Grid item xs={12} sm={12}>
        Ctg {alpha} = {Number(1 / Math.tan(alpha / 360 * 2 * Math.PI)).toFixed(10)}
      </Grid>
    </Grid>
  );
}
