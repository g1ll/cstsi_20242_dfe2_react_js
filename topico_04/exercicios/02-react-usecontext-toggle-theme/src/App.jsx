import { useState } from 'react';
import './App.css';
import { Home } from './pages/home/Home';

import { createContext } from 'react';

export const ThemeState = createContext({
  theme: '',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((_theme) => (_theme == 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeState.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeState.Provider>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ThemeProvider>
        <Home setCount={setCount} count={count} />
      </ThemeProvider>
    </>
  );
}

export default App;
