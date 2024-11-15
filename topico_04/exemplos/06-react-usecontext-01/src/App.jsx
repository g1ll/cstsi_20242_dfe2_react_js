import { useState } from 'react';
import './App.css';
import { Home } from './pages/home/Home';

import { createContext } from 'react';

export const ThemeContext = createContext('');

function App() {
  const [count, setCount] = useState(0);
  const [theme] = useState('light');

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Home setCount={setCount} count={count} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
