import './App.css';
import CardImc from './components/CardImc/CardImcFix.jsx';

function App() {
  return (
    <>
      <CardImc key="p1" pessoa={{ name: 'Fulano', altura: 1.7, peso: 90 }} />
      <CardImc key="p2" pessoa={{ name: 'Beltrano', altura: 1.8, peso: 75 }} />
      <CardImc key="p3" pessoa={{ name: 'Cicrano', altura: 1.9, peso: 90 }} />
    </>
  );
}

export default App;
