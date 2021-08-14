import React from 'react';
// import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components';
import colors from './src/styles/color';
import Routes from './src/routes';

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
