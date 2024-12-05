import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  
  const funcCallback = (text, callback) => {
    setTimeout(() => {
      console.log(text);
      callback && callback();
    }, 500);
  };

  const funcPromise = (text) =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(text);
        resolve(funcPromise);
      }, 500);
    });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Callback vs Promise</h1>
      <div className="card">
        <button
          onClick={() => {
            funcCallback("Hello", () => {
              funcCallback("World", () => {
                funcCallback("CallBack",()=>{
                  funcCallback("Hell");
                });
              });
            });
          }}
        >
          CallBack Hell
        </button>
        <button
          onClick={() =>
            funcPromise("Hello")
              .then(fun => fun("World"))//resolvida
              .then(fun => fun("Promise"))
              .then(fun => fun("Chaning"))
              .then(fun => fun("DFE2"))
          }
        >
          Promise Chaning
        </button>
      </div>
    </>
  );
}

export default App;
