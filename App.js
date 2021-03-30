import React from 'react';
import FlashMessage from 'react-native-flash-message';
import MainRoutes from './src/routes/';

function App() {
  return (
    <>
      <MainRoutes />
      <FlashMessage position="top" />
    </>
  );
}

export default App;