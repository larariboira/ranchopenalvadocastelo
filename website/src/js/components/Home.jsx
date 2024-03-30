import {Link} from 'react-router-dom';
import "../../style/homepage.scss";

function Home() {
  return (    
      <div className="header">
        <h1>Da província da Beira Alta.</h1>
        <p>Preservamos e divulgamos a cultura tradicional portuguesa, mais especificamente da etnografia penalvense.</p>
        <Link to='/historia'><button>Conhece a nossa história</button></Link>
      </div>
 
  );
}

export default Home;