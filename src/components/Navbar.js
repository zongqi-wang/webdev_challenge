import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <h1 className="navbar-title">The Shoppies</h1>
        <form className="search-bar" action="">
          <input
            type="text"
            id="search"
            className="search-box"
            placeholder="Search Movies by Titles"
            autoComplete="off"
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
