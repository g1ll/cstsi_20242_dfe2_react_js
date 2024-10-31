import "./header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <h1 className="w-full mt-12 mb-6 text-6xl font-bold text-center text-blue-800 shadow-white">
          Black Friday BuyTech
        </h1>
        <h4 className="w-10/12 text-center text-white bg-blue-400 rounded-lg lg:w-6/12">
          Tudo pela METADE
          <span className="text-[10px]">...do triplo</span>
          !!!
        </h4>
      </div>
    </header>
  );
};

export default Header;
