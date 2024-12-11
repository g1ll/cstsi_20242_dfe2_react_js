import { RouterProvider } from "react-router-dom";
import ProdutosProvider from "./contexts/ProdutosProvider.jsx";
import router from "./config/routes";
import { AuthProvider } from "./contexts/AuthProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <ProdutosProvider>
        <RouterProvider router={router} />
      </ProdutosProvider>
    </AuthProvider>
  );
}

export default App;
