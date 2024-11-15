import { Link, useParams } from 'react-router-dom';

export default function Ola() {
  let { name } = useParams();

  return (
    <>
      <div>Ola {name || 'Mundo'} !!!</div>
      <dir>
        <Link to="/">{'< voltar'}</Link>
      </dir>
    </>
  );
}
