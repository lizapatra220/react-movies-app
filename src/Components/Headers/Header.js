import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="Header">
      🎥Entertainment hub🎬
    </span>
  );
};

export default Header;
