import {Outlet} from "react-router-dom";
import projectConfig from "../config/ProjectConfig.jsx";

function DefaultLayout() {
    
    return (
      <>
          {/* NAVIGATION */}
          <nav className="navbar navbar-expand-md sticky-top">
              <div className="container">
                  <a className="navbar-brand fw-bold" href="/#top">
                      <i className="bi bi-terminal-fill ok me-2"></i>tavstal<span className="ok">.</span>eu
                  </a>
                  <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="nav">
                      <ul className="navbar-nav me-auto">
                          <li className="nav-item"><a className="nav-link" href="/#about">about</a></li>
                          <li className="nav-item"><a className="nav-link" href="/#projects">projects</a></li>
                          <li className="nav-item"><a className="nav-link" href="/#experience">experience</a></li>
                          <li className="nav-item"><a className="nav-link" href="/#skills">skills</a></li>
                          <li className="nav-item"><a className="nav-link" href="/#contact">contact</a></li>
                      </ul>
                      <div className="d-flex gap-3 fs-5">
                          {projectConfig.urls.filter(x => x.showOnNavBar).map((x) => (
                              <a className="link-secondary" aria-label={x.name} href={x.url} key={x.name}>
                                  <i className={`bi bi-${x.icon}`}></i>
                              </a>
                          ))}
                      </div>
                  </div>
              </div>
          </nav>
          
          {/* MAIN CONTENT */}
          <main>
              <Outlet/>
          </main>

          {/* FOOTER */}
          <footer className="py-4">
              <div className="container d-flex flex-wrap justify-content-between gap-2 small">
                  <span><i className="bi bi-c-circle"></i> <span id="year">2026</span> Tavstal (Zoltán István Solymosi)</span>
                  <span>Built with Bootstrap &amp; Bootstrap Icons</span>
              </div>
          </footer>
      </>  
    );
}

export default DefaultLayout;