import './Navbar.css';

function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <h1>📈 Stock Market Dashboard</h1>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;