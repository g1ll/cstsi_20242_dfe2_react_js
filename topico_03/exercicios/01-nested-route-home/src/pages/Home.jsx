import { Outlet } from "react-router-dom"

const Home = () => {
  return (
      <div>
        Exemplo de rotas aninhadas!
        <hr />
        <Outlet />
      </div>
  )
}

export {Home}