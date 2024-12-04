import "./styles/main.css";
import { RouterProvider } from "react-router-dom";
import ProdutosProvider from "./contexts/ProdutosProvider.jsx";
import router from "./config/routes";

function App() {
  return (
    <ProdutosProvider>
      <RouterProvider router={router} />
    </ProdutosProvider>
  );
}

export default App;
