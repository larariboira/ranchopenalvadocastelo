import { Link } from "react-router-dom";
import "../../style/gallery.scss";
import ranchoLogo from "../../images/image_homepage.png";
import ranchoGaleria from "../../images/image_galeria.png";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery-header">
        <h1>A nossa galeria de fotos</h1>

      </div>
      <div className="gallery-photos">
        <div className="image">
          <Link>
            <img src={ranchoLogo} alt="Logo do Rancho de Penalva de Castelo" />
          </Link>
        </div>
        <div className="image">
          <Link>
            <img src={ranchoLogo} alt="Logo do Rancho de Penalva de Castelo" />
          </Link>
        </div>
        <div className="image">
          <Link>
            <img src={ranchoLogo} alt="Logo do Rancho de Penalva de Castelo" />
          </Link>
        </div>
        <div className="image">
          <Link>
            <img src={ranchoLogo} alt="Logo do Rancho de Penalva de Castelo" />
          </Link>
        </div>
        <div className="image">
          <Link>
            <img src={ranchoLogo} alt="Logo do Rancho de Penalva de Castelo" />
          </Link>
        </div>
        <div className="image">
          <Link>
            <img src={ranchoLogo} alt="Logo do Rancho de Penalva de Castelo" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
