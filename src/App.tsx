import React from 'react';
import GamePage from 'pages/game-page';
import ThemeProvider from './theme/theme-context';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <GamePage />
    </ThemeProvider>
  );
}

export default App;
