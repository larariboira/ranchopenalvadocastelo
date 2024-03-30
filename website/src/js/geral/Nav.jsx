import {Link} from 'react-router-dom';
import ranchoLogo from "../../images/logo_white.svg";

function Nav() {
  return (

      <nav className="menu">
        <div className="menu-logo" >
          <Link to='/'><img src={ranchoLogo} alt="Logo do Rancho de Penalva de Castelo" /></Link>
        </div>
        <div className="menu-items">
          <ul>
            <li>
            <Link to='/historia'>História</Link>
            </li>
            <li>
            <Link to='/galeria'>Galeria</Link>
            </li>
            <li>
              <Link>Atuações</Link>
            </li>
          </ul>
        </div>
      </nav>

  );
}

export default Nav;
