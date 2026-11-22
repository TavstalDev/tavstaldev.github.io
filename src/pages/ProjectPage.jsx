import projectConfig from "../config/ProjectConfig.jsx";
import ErrorPage from "./ErrorPage.jsx";
import {useParams} from "react-router-dom";
import CodeBlock from "../components/CodeBlock.jsx";

function ProjectPage() {
    const { name } = useParams();
    
    const project = projectConfig.projects.find(x => x.name === name);
    if (!project || !project.hasPage) {
        return (
            <ErrorPage errorCode={404} />
        );
    }
    
    const hasCarousel = !!project.carousel;
    const hasInstall = !!project.install;
    const hasFeatures = !!project.features;
    const hasUsage = !!project.usage;
    
    return (
        <>
            {/* HEADER */}
            <header id="top" className="py-5">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <p className="prompt muted mb-0">systemctl status {project.name.toLocaleLowerCase()}.service</p>
                        <span className="status">● <b>{project.status}</b></span>
                    </div>
                    <h1 className="display-5 fw-bold mb-2">{project.name}<span className="cursor">&nbsp;</span></h1>
                    <p className="lead muted col-lg-9">{project.desc}</p>
                    <div className="d-flex flex-wrap gap-1 mb-4">
                        {project.tags.map((x) => (
                            <span key={x} className="tag">{x}</span>
                        ))}
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                        {project.links.map((x) => (
                            <a key={x.label} href={x.url} className="btn btn-sm btn-outline-sd" target="_blank" rel="noopener">
                                <i className={`bi bi-${x.icon} me-1`}></i>
                                {x.label}
                            </a>
                        ))}
                        <a href="/#projects" className="btn btn-sm btn-outline-sd">
                            <i className="bi bi-arrow-left me-1"></i>
                            Back to Hub
                        </a>
                    </div>
                </div>
            </header>

            {/* CAROUSEL */}
            { hasCarousel? (
                <section id="carousel">
                    <div className="container">
                        <p className="prompt muted">cd /etc/{project.name.toLocaleLowerCase()}/images</p>
                        <h2 className="h5 mb-3">
                            <i className="bi bi-image ok me-2"></i>
                            Images
                        </h2>

                        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">

                            <div className="carousel-indicators">
                                {project.carousel.map((x, i) => (
                                    i === 0 ? (
                                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to={i} className="active" aria-current="true" aria-label={x.label} />
                                    ) : (

                                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to={i} aria-label={x.label} />
                                    )
                                ))}
                            </div>
                            
                            <div className="carousel-inner">
                                {project.carousel.map((x, i) => (
                                    i === 0 ? (
                                        <div className="carousel-item active">
                                            <img src={x.image} className="d-block w-100" alt={x.label} />
                                        </div>
                                    ) : (

                                        <div className="carousel-item">
                                            <img src={x.image} className="d-block w-100" alt={x.label} />
                                        </div>
                                    )
                                ))}
                            </div>

                            {project.carousel.length > 1 ? (
                                <>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </>
                            ) : (<></>)}
                        </div>
                    </div>
                </section>
            ) : (<></>)}
            
            {/* INSTALL */}
            { hasInstall ? (
                <section id="install">
                    <div className="container">
                        <p className="prompt muted">{project.install.command}</p>
                        <h2 className="h5 mb-3">
                            <i className="bi bi-download ok me-2"></i>
                            Installation
                        </h2>
                        <div className="box p-3">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="small muted">CLI</span>
                                <button className="btn btn-sm btn-outline-sd copy-btn" data-copy="{project.install.command}">
                                    <i className="bi bi-clipboard me-1"></i>
                                    Copy
                                </button>
                            </div>
                            <pre>
                                <code>{project.install.command}</code>
                            </pre>
                        </div>
                    </div>
                </section>
            ) : (<></>)}

            {/* FEATURES */}
            {hasFeatures ? (
                <section id="features">
                    <div className="container">
                        <p className="prompt muted">cat /etc/{project.name.toLocaleLowerCase()}/capabilities.conf</p>
                        <h2 className="h5 mb-4">
                            <i className="bi bi-cpu-fill ok me-2"></i>
                            What It Handles
                        </h2>
                        <div className="row g-3">
                            {project.features.map((x) => (
                                <div className="col-md-6 col-lg-4" key={x.name}>
                                    <div className="box p-3 h-100">
                                        <div className="fw-semibold mb-2">
                                            <i className={`bi bi-${x.icon} info me-2`}></i>
                                            {x.name}
                                        </div>
                                        <p className="small muted mb-0">{x.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ) : (<></>)}

            {/* USAGE */}
            {hasUsage ? (
                <section id="usage">
                    <div className="container">
                        <p className="prompt muted">cat EXAMPLE.txt</p>
                        <h2 className="h5 mb-3">
                            <i className="bi bi-terminal ok me-2"></i>
                            Quick Example
                        </h2>
                        {project.usage.map((x) => (
                            <div className="box p-3 mb-4" key={x.file}>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="small muted">{x.file}</span>
                                    <button className="btn btn-sm btn-outline-sd copy-btn" onClick={async () => {
                                        try {
                                            await navigator.clipboard.writeText(x.code.join("\n"));
                                        } catch (err) {
                                            console.error("Failed to copy:", err);
                                        }
                                    }}>
                                        <i className="bi bi-clipboard me-1"></i>
                                        Copy
                                    </button>
                                </div>
                                <CodeBlock code={x.code.map((x) => (`${x}`)).join('\n')} />
                            </div>
                        ))}
                    </div>
                </section>   
            ) : (<></>)}
        </>
    );
}

export default ProjectPage;