// noinspection HtmlUnknownAnchorTarget

import projectConfig from "../config/ProjectConfig.jsx";
import {useState} from "react";
import SkillCard from "../components/SkillCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

function HomePage() {
    const [filter, setFilter] = useState("all");
    const [query, setQuery] = useState("");

    let projects = projectConfig.projects.filter(p => (filter === "all" || p.category === filter) &&
        (!query || [p.name, p.desc, p.category, ...(p.tags || [])].join(" ").toLowerCase().includes(query)));
    return (
        <>
            {/* INTRODUCTION */}
            <header id="top" className="py-5">
                <div className="container">
                    <p className="prompt muted mb-2">whoami</p>
                    <h1 className="display-5 fw-bold mb-2">Zoltán István Solymosi<span className="cursor">&nbsp;</span></h1>
                    <p className="muted mb-3">a.k.a. Tavstal</p>
                    <p className="lead muted col-lg-8">C# backend developer. I build SDKs, APIs and cross-platform apps, and I like working close to the system.</p>
                    <div className="d-flex flex-wrap gap-2 mt-3">
                        <a href="#projects" className="btn btn-sm btn-outline-sd"><i className="bi bi-collection-fill me-1"></i>See projects</a>
                        <a href="#contact" className="btn btn-sm btn-outline-sd"><i className="bi bi-chat-dots-fill me-1"></i>Get in touch</a>
                    </div>
                </div>
            </header>

            {/* ABOUT */}
            <section id="about">
                <div className="container">
                    {/* COMMAND */}
                    <p className="prompt muted">cat about.txt</p>
                    <div className="row g-4">
                        {/* AVATAR */}
                        <div className="col-md-auto">
                            <img className="avatar" src="/images/avatar.png" alt="photo" />
                        </div>
                        {/* INFO */}
                        <div className="col-md">
                            <p>I'm a Computer Science (BSc) student at Pannon University. I work mostly in C# and .NET: published NuGet SDKs, ASP.NET APIs, authentication systems and desktop apps that run on Windows, Linux and macOS.</p>
                            <p>I also have hands-on infrastructure experience from a dual-education technician program, where I configured Linux/Windows servers and Cisco network gear. Outside of that I write game server plugins in C# and Java, and I support the users of my own projects through a Discord ticket system.</p>
                            <div className="row g-2 small mt-3">
                                <div className="col-sm-6"><i className="bi bi-geo-alt-fill ok me-2"></i>Kaposvár, Hungary</div>
                                <div className="col-sm-6"><i className="bi bi-mortarboard-fill ok me-2"></i>BSc, Pannon University (2026–)</div>
                                <div className="col-sm-6"><i className="bi bi-translate ok me-2"></i>Hungarian (native), English (B2)</div>
                                <div className="col-sm-6"><i className="bi bi-car-front-fill ok me-2"></i>Category B driving licence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects">
                <div className="container">
                    {/* COMMAND */}
                    <p className="prompt muted">systemctl list-units --type=project</p>

                    {/* SEARCH & FILTERS */}
                    <div className="row g-3 align-items-start mb-4">
                        {/* SEARCH */}
                        <div className="col-md-5">
                            <div className="input-group">
                                <span className="input-group-text bg-transparent border-end-0 text-secondary"><i className="bi bi-search"></i></span>
                                <input type="search" className="form-control border-start-0" placeholder="grep projects, tags…"
                                    onChange={(x) => setQuery(x.target.value)}
                                />
                            </div>
                        </div>

                        {/* FILTERS */}
                        <div className="col-md-7 d-flex flex-wrap gap-2 justify-content-md-end">
                            {projectConfig.categories.map((x) => (
                                <button key={x.key}
                                        type="button"
                                        className={`btn btn-sm btn-outline-sd ${x.key === filter ? " active" : ""}`}
                                        data-f={x.key}
                                        onClick={() => setFilter(x.key)}>
                                    <i className={`bi bi-${x.icon} me-1`}></i>{x.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* PROJECT CARDS */}
                    <div className="row g-4">
                        {projects.map((x) => (
                            <ProjectCard 
                                key={x.name}
                                title={x.name}
                                category={x.category}
                                status={x.status}
                                description={x.desc}
                                icon={x.icon}
                                tags={x.tags}
                                links={x.links}
                            />
                        ))}
                    </div>
                    <p className="text-center muted py-5" hidden={projects.length !== 0}>No units matched.</p>
                </div>
            </section>

            {/* EDUCATION & WORK EXPERIENCE */}
            <section id="experience">
                <div className="container">
                    {/* COMMAND */}
                    <p className="prompt muted">journalctl --unit=career</p>
                    <div className="row g-5">
                        {/* EXPERIENCE */}
                        <div className="col-lg-7">
                            <h2 className="h5 mb-4"><i className="bi bi-briefcase-fill ok me-2"></i>Experience</h2>
                            <div className="tl">
                                {projectConfig.experience.map((x) => (
                                    <div className="tl-item" key={x.name}>
                                        <div className="muted small">{x.interval}</div>
                                        <div className="fw-semibold">{x.name})</div>
                                        <div className="muted small mb-2">{x.location}</div>
                                        <ul className="small mb-0">
                                            {x.description.map((x) => (
                                                <li key={x}>{x}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* EDUCATION */}
                        <div className="col-lg-5">
                            <h2 className="h5 mb-4"><i className="bi bi-mortarboard-fill ok me-2"></i>Education</h2>
                            <div className="tl">
                                {projectConfig.education.map((x) => (
                                    <div className="tl-item" key={x.name}>
                                        <div className="muted small">{x.interval}</div>
                                        <div className="fw-semibold">{x.name})</div>
                                        <div className="muted small">{x.location}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section id="skills">
                <div className="container">
                    <p className="prompt muted">systemd-analyze blame --skills</p>
                    <div className="row g-3">
                        {projectConfig.skills.map((x) => (
                            <SkillCard
                                key={x.title}
                                title={x.title}
                                icon={x.icon}
                                items={x.items}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact">
                <div className="container text-center">
                    <p className="prompt muted">mail -s "hello" tavstal</p>
                    <h2 className="h3 mb-3">Let's talk</h2>
                    <p className="muted">Open to internships, collaborations and interesting side projects.</p>
                    {/* LINKS */}
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        {projectConfig.urls.map((x) => (
                            <a className="btn btn-outline-sd" href={x.url} key={x.name}>
                                <i className={`bi bi-${x.icon} me-2`}></i>
                                {x.name}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage