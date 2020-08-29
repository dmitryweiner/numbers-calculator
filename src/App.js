import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import NumberBaseView from './views/NumberBaseView';
import TabPanel from './components/TabPanel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TrigonometryView from './views/TrigonometryView';
import SquareView from './views/SquareView';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    margin: theme.spacing(1),
  },
}));

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography variant="h6" color="inherit" className={classes.menu}>
          Шпаргалка
        </Typography>
        <Tabs value={value} onChange={handleChange} aria-label="Main tabs">
          <Tab label="Сист. счисления" wrapped {...a11yProps(0)} />
          <Tab label="Тригонометрия"  wrapped {...a11yProps(1)} />
          <Tab label="Кв. уравнения"  wrapped {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Container maxWidth="md">
        <TabPanel value={value} index={0}>
          <NumberBaseView/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TrigonometryView/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SquareView/>
        </TabPanel>
      </Container>
    </div>
  );
}

export default App;
