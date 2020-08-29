import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function () {
  const [a, setA] = React.useState(1);
  const [b, setB] = React.useState(1);
  const [c, setC] = React.useState(1);

  function handleChange(event, callback) {
    let result = 0;
    const value = event.target.value;
    if (value) {
      result = Number(parseInt(value));
    }
    callback(result);
  }

  function d() {
    return b * b - 4 * a * c;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <img src={process.env.PUBLIC_URL + '/img/quadratic-equation.png'} style={{width: '100%'}} />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography gutterBottom>
              a =
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              id="a"
              value={a}
              onChange={(e) => handleChange(e, setA)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography gutterBottom>
              b =
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              id="b"
              value={b}
              onChange={(e) => handleChange(e, setB)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography gutterBottom>
              c =
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              id="c"
              value={c}
              onChange={(e) => handleChange(e, setC)}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography gutterBottom>
          D = {d()}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography gutterBottom>
          x1 = {(-b + d()) / (2 * a)}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography gutterBottom>
          x2 = {(-b - d()) / (2 * a)}
        </Typography>
      </Grid>
    </Grid>
  );
}
