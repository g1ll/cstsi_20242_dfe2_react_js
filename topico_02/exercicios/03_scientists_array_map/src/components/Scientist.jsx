import { useEffect, useState } from 'react';

export default function Scientist({ data }) {
  const [user, setUser] = useState(data);
  const [countRender, setCountRender] = useState(1);

  useEffect(() => {
    console.log(countRender, 'render ' + user.name);
    return () => {
      console.log(`${user.name} será removida!!`);
    };
  }, [user]);

  const changeData = () => {
    user.name = `${user.name} ${user.surname}`;
    user.imageSize = 200;
    setUser({ ...user });
    setCountRender(countRender + 1);
  };

  return (
    <>
      <a href={user.wiki} target="_blank">
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
          }}
          onClick={changeData}
        />
      </a>
      <h1>{user.name}</h1>
    </>
  );
}
