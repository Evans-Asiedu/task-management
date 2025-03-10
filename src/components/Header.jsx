const Header = ({ name, icon }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-lg font-semibold">{name}</h2>
      <button className="text-gray-500 text-lg">{icon}</button>
    </div>
  );
};

export default Header;
