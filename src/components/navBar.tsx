// components/navBar.tsx
import 'css/navbar.css';
import { Link } from 'react-router-dom';


export default function NavBar() {
  const toggleDarkMode = () => {
    const button = document.getElementById("modo-claro");
    if (button) {
      button.textContent = button.textContent === '🌙' ? '☀️' : '🌙';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Peponas Cakes</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cursos">Cursos</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Más 🍰
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">¿Quiénes Somos?</a></li>
                <li><a className="dropdown-item" href="#">¿Cómo comprar?</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Contacto</a></li>
              </ul>
            </li>
          </ul>

          <button
            id="modo-claro"
            className="btn btn-outline-dark"
            onClick={toggleDarkMode}
          >
            🌙
          </button>
        </div>
      </div>
    </nav>
  );
}
