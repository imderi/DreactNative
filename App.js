import React from 'react';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/routes/index';

function App() {
  return (
    <>
      <Routes />
      <FlashMessage position="top" />
    </>
  );
}

export default App;