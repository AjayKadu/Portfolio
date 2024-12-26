function Navbar() {
  return ( 
      <>
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent text-white">
              <div className="container-fluid">
                  <a className="navbar-brand text-white" href="#">Ajay</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item">
                              <a className="nav-link active text-white" aria-current="page" href="#about">About</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link text-white" href="#services">Services</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link text-white" href="#resume">Resume</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link text-white" href="#contact">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </>
  );
}

export default Navbar;
