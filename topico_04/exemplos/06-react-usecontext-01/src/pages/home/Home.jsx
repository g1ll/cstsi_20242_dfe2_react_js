import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { Card } from '../../components/Card';

export function Home({ count, setCount }) {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <main className={theme}>
        <section className={theme}>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Exemplo da API de Contexto</h1>
          <Card count={count} setCount={setCount} />
          <p className={`read-the-docs ${theme}`}>
            Click on the Vite and React logos to learn more
          </p>
        </section>
      </main>
    </>
  );
}
