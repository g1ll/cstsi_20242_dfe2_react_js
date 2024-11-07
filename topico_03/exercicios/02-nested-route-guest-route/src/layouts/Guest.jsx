import { Outlet } from "react-router-dom"

const Guest = () => {
  return (
    <div>
        Exemplo de rotas aninhadas!
        <hr />
        <Outlet />
      </div>
  )
}

export {Guest}
