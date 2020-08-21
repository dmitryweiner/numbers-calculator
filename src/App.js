import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    marginLeft: theme.spacing(2),
  },
  formControl: {
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
    minWidth: 120,
  },
}));

function parseByBase(value, base) {
  let result = 0;
  if (value) {
    result = Number(parseInt(value, base));
  }
  return result;
}

function toStringByBase(value, base) {
  let result = '';
  if (value) {
    result = value.toString(base);
  }
  return result;
}

function App() {
  const [number, setNumber] = useState(0);
  const [customBase, setCustomBase] = useState(5);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography variant="h6" color="inherit" className={classes.menu}>
          Number base calculator
        </Typography>
      </AppBar>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <TextField
              id="base10"
              label="Base 10"
              value={toStringByBase(number, 10)}
              onChange={(e) => setNumber(parseByBase(e.target.value, 10))}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="base16"
              label="Base 16"
              value={toStringByBase(number, 16)}
              onChange={(e) => setNumber(parseByBase(e.target.value, 16))}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="base8"
              label="Base 8"
              value={toStringByBase(number, 8)}
              onChange={(e) => setNumber(parseByBase(e.target.value, 8))}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              id="base2"
              label="Base 2"
              value={toStringByBase(number, 2)}
              onChange={(e) => setNumber(parseByBase(e.target.value, 2))}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl className={classes.formControl}>
              <InputLabel shrink>
                Custom base
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={customBase}
                onChange={(e) => setCustomBase(e.target.value)}
              >
                {[...Array(19).keys()].map(i => (
                  <MenuItem value={i+2}>{i+2}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="baseN"
              label="Base N"
              value={toStringByBase(number, customBase)}
              onChange={(e) => setNumber(parseByBase(e.target.value, customBase))}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
