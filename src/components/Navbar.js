import "./navbar.css";

function Navbar({ searchSubmit, handleQuery }) {
  return (
    <nav>
      <div className="navbar">
        <h1 className="navbar-title">The Shoppies</h1>
        <form
          className="search-bar"
          action=""
          onSubmit={searchSubmit.bind(this)}
        >
          <input
            type="text"
            id="search"
            className="search-box"
            placeholder="Search Movies by Titles"
            autoComplete="off"
            onChange={handleQuery}
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
