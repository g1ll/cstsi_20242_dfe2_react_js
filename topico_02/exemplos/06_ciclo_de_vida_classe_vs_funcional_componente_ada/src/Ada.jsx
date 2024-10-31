/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const _user = {
  name: 'Ada',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/0/0f/Ada_lovelace.jpg',
  imageSize: 100,
};

export default function Ada() {
  const [user, setUser] = useState(_user);
  const [countRender, setCountRender] = useState(1);

  useEffect(() => {
    console.log(countRender, 'render');
    return () => {
      console.log('Ada será removida!!');
    };
  }, [user]);

  const changeAda = () => {
    user.name = 'Ada Lovalace';
    user.imageSize = 200;
    setUser({ ...user });
    setCountRender(countRender + 1);
  };

  return (
    <>
      <a href="https://pt.wikipedia.org/wiki/Ada_Lovelace" target="_blank">
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
          }}
          onClick={changeAda}
        />
      </a>
      <h1>{user.name}</h1>
    </>
  );
}
