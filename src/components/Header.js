import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Task tracker</h1>
      {location.pathname === "/task" && (
        <button
          onClick={onAdd}
          style={{ backgroundColor: showAdd ? "red" : "green" }}
          className="btn"
        >
          {showAdd ? "Close" : "Add"}
        </button>
      )}
    </header>
  );
};

export default Header;
