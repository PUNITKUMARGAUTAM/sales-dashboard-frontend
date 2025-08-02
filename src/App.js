
import React from 'react';
import Upload from './components/Upload';
import Summary from './components/Summary';
import Filters from './components/Filters';
import Charts from './components/Charts';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Sales & Revenue Analytics Dashboard
      </Typography>
      <Upload />
      <Summary />
      <Filters />
      <Charts />
    </Container>
  );
};

export default App;

