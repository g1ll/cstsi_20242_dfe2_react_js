import { ButtonDelete, ButtonEdit } from "../../Button/button.styled"

const ProdutoTable = ({ produtos, edit, remove }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Qtd</th>
                    <th>Importado</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map((produto, key) => (
                    <tr key={`produto${key}`}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                        <td>{produto.qtd_estoque}</td>
                        <td>{produto.importado ? 'Sim' : 'Não'}</td>
                        <td>
                            <ButtonEdit onClick={() => edit(produto.id)}>Editar</ButtonEdit>
                            <ButtonDelete onClick={() => remove(produto.id)}>Excluir</ButtonDelete>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProdutoTable
