import projectConfig from "../config/ProjectConfig.jsx";


function ProjectCard({ title, category, description, icon, status, tags, hasPage, links }) {
    const catLabel = (projectConfig.categories.find(x => x.key === category) || {}).label || category;
    const tagsHtml = (tags || []).map((x) => (
        <span className="tag" key={x}>{x}</span>
    ));
    const linksHtml = (links || []).map((x) => (
        <a key={x.url} className="btn btn-sm btn-outline-sd" href={x.url} target="_blank" rel="noopener">
            <i className={`bi bi-${x.icon || "link-45deg"} me-1`}></i>
            {x.label}
        </a>
    ));
    const statusData = projectConfig.status[status] || projectConfig.status.active
    
    return (
        <>
            <div className="col-md-6 col-xl-4">
                <div className="card unit h-100">
                    <div className="card-body d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                            <i className={`bi bi-${icon || "folder-fill"} unit-icon`}></i>
                            <span className={`status ${statusData.cls}`}>
                                <b>{statusData.label}</b>
                            </span>
                        </div>
                        <div className="unit-name">
                            {title}<small>{catLabel}</small>
                        </div>
                        <p className="small muted mt-2 mb-3">{description}</p>
                        <div className="d-flex flex-wrap gap-1 mb-3">
                            {tagsHtml}
                        </div>
                        <div className="mt-auto d-flex flex-wrap gap-2">
                            {hasPage ? (
                                <a className="btn btn-sm btn-outline-sd" href={`/project/${title}`} rel="noopener">
                                    <i className={`bi bi-link-45deg me-1`}></i>
                                    View
                                </a>
                            ) : (<></>)}
                            {linksHtml}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;