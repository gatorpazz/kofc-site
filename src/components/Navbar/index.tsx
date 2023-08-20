import { Link } from "react-router-dom";
import './Navbar.css'
import kofcBigLogo from '../../assets/kofc-big-logo.png'

const Navbar = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={kofcBigLogo} alt="Knights of Columbus Logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/officers">Officers</Link>
          </li>
          <li>
            <Link to="/notables">Notables</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;