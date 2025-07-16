import projectConfig from "../config/projectConfig.jsx";

function HomePage() {
    return (
        <>
            {/* Welcome */}
            <div className="hero bg-base-200 min-h-screen relative overflow-hidden">
                <div
                    className="hero-content text-center text-white relative flex flex-col items-center justify-center p-6 sm:p-8 md:p-12">
                    <h1 className="text-5xl md:text-6xl max-w-5xl font-extrabold tracking-tight text-primary py-3 leading-tight">
                        Hi there, I'm Zoltan 'Tavstal' Solymosi!
                    </h1>
                    <p className="text-base-content font-semibold text-xl md:text-2xl mb-4 max-w-2xl">
                        Passionate self-taught programmer from Hungary, specializing in C# and .NET backend development.
                        Eager to learn, build, and innovate across the full stack.
                    </p>
                    <a
                        href="#contact"
                        className="btn btn-lg btn-accent hover:bg-accent hover:text-base-content transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
                    >
                        <span className="font-bold">Get in Touch</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"
                             className="h-5 w-5 ml-2">
                            <path
                                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                    </a>
                </div>
            </div>


            {/* Vertical Gradient Divider */}
            <div id="aboutme" className="h-32 flex items-center justify-center bg-gradient-to-b from-base-200 to-base-100">
                <h2 className="text-4xl font-extrabold text-primary text-center mb-12">
                    About Me
                </h2>
            </div>

            {/* About Me */}
            <div className="bg-base-100 py-16 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 items-center gap-12 px-8 xs:px-12 sm:px-16 md:px-20 lg:px-24">
                    <div className="space-y-6 text-lg">
                        <p className="text-base-content/75 leading-relaxed mb-6">
                            I'm a dedicated self-taught <span className="font-semibold text-primary">C# and .NET backend developer</span> from
                            Hungary,
                            specializing in robust APIs, scalable services, and logic-heavy applications.
                        </p>
                        <p className="text-base-content/75 leading-relaxed">
                            While full-stack capable with <span className="font-semibold text-primary">React.js</span>,
                            my expertise is in engineering and systems, not visual design.
                            I'm committed to writing clean, maintainable code and am always eager to learn and improve.
                        </p>
                    </div>
                    <div className="space-y-4 bg-base-200 rounded-xl text-lg p-8">
                        <p>
                            <i className="fa-solid fa-code text-primary text-xl mr-4"></i>
                            Backend developer with expertise in <span className="text-primary font-bold">C#</span>
                            , <span className="text-primary font-bold">.NET / .NET Framework</span>,
                            and <span className="text-primary font-bold">ASP.NET</span>
                        </p>
                        <p>
                            <i className="fa-solid fa-globe text-primary text-xl mr-4"></i>
                            Full-stack capable with experience in <span
                            className="text-primary font-bold">React.js</span> and modern web technologies
                        </p>
                        <p>
                            <i className="fa-solid fa-screwdriver-wrench text-primary text-xl mr-4"></i>
                            I develop libraries, console tools, desktop apps, and web applications
                        </p>
                        <p>
                            <i className="fa-solid fa-gamepad text-primary text-xl mr-4"></i>
                            Game plugin/modding enthusiast (Minecraft, Unturned, Unity)
                        </p>
                        <p>
                            <i className="fa-solid fa-rocket text-primary text-xl mr-4"></i>
                            Always learning and open to exploring new technologies
                        </p>
                    </div>
                </div>
            </div>

            {/* Vertical Gradient Divider */}
            <div id="techstack" className="h-32 flex items-center justify-center bg-gradient-to-b from-base-100 to-base-200">
                <h2 className="text-4xl font-extrabold text-primary text-center my-12">
                    Tech Stack
                </h2>
            </div>

            {/* Tech Stack */}
            <div className="bg-base-200 py-16">
                <div className="max-w-5xl items-center mx-auto px-8 xs:px-12 sm:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Languages */}
                        <div className="stack stack-top z-0">
                            <div className="bg-base-100 text-base-content rounded-box p-8">
                                <h1 className="text-2xl font-bold mb-4">
                                    <i className="fa-solid fa-code text-primary mr-4"></i>
                                    Languages
                                </h1>
                                <ul className="list list-disc text-base px-4 gap-2">
                                    <li>C#</li>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>Basic Python</li>
                                    <li>Basic Bash</li>
                                    <li>Basic TypeScript</li>
                                </ul>
                            </div>
                            <div className="bg-primary grid place-content-center rounded-box"></div>
                        </div>
                        {/* Backend */}
                        <div className="stack stack-top z-0">
                            <div className="bg-base-100 text-base-content rounded-box p-8">
                                <h1 className="text-2xl font-bold mb-4">
                                    <i className="fa-solid fa-server text-success mr-4"></i>
                                    Backend
                                </h1>
                                <ul className="list list-disc text-base px-4 gap-2">
                                    <li>.NET 6</li>
                                    <li>.NET 9</li>
                                    <li>.NET Framework</li>
                                    <li>ASP.NET</li>
                                    <li>Basic Node.js</li>
                                </ul>
                            </div>
                            <div className="bg-success grid place-content-center rounded-box"></div>
                        </div>
                        {/* Databases */}
                        <div className="stack stack-top z-0">
                            <div className="bg-base-100 text-base-content rounded-box p-8">
                                <h1 className="text-2xl font-bold mb-4">
                                    <i className="fa-solid fa-database text-warning mr-4"></i>
                                    Databases
                                </h1>
                                <ul className="list list-disc text-base px-4 gap-2">
                                    <li>MySQL</li>
                                    <li>MariaDB</li>
                                    <li>Some PostgreSQL</li>
                                </ul>
                            </div>
                            <div className="bg-warning grid place-content-center rounded-box"></div>
                        </div>

                        {/* Frontend */}
                        <div className="stack stack-top z-0">
                            <div className="bg-base-100 text-base-content rounded-box p-8">
                                <h1 className="text-2xl font-bold mb-4">
                                    <i className="fa-solid fa-laptop-code text-accent mr-4"></i>
                                    Frontend
                                </h1>
                                <ul className="list list-disc text-base px-4 gap-2">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>TailwindCSS</li>
                                    <li>DaisyUI</li>
                                    <li>React.js</li>
                                </ul>
                            </div>
                            <div className="bg-accent grid place-content-center rounded-box"></div>
                        </div>
                        {/* Game Dev */}
                        <div className="stack stack-top z-0">
                            <div className="bg-base-100 text-base-content rounded-box p-8">
                                <h1 className="text-2xl font-bold mb-4">
                                    <i className="fa-solid fa-gamepad text-error mr-4"></i>
                                    Game Development
                                </h1>
                                <ul className="list list-disc text-base px-4 gap-2">
                                    <li>Unity (modding)</li>
                                    <li>Unreal Engine 4 (Blueprint)</li>
                                </ul>
                            </div>
                            <div className="bg-error grid place-content-center rounded-box"></div>
                        </div>
                        {/* Modding  */}
                        <div className="stack stack-top z-0">
                            <div className="bg-base-100 text-base-content rounded-box p-8">
                                <h1 className="text-2xl font-bold mb-4">
                                    <i className="fa-solid fa-puzzle-piece text-info mr-4"></i>
                                    Modding
                                </h1>
                                <ul className="list list-disc text-base px-4 gap-2">
                                    <li>Unturned RocketMod</li>
                                    <li>Minecraft Forge & Fabric</li>
                                    <li>Minecraft Spigot & PaperMC</li>
                                </ul>
                            </div>
                            <div className="bg-info grid place-content-center rounded-box"></div>
                        </div>

                        {/* DevOps */}
                        <div className="stack stack-top z-0">
                            <div className="bg-base-100 text-base-content rounded-box p-8">
                                <h1 className="text-2xl font-bold mb-4">
                                    <i className="fa-solid fa-code text-warning/75 mr-4"></i>
                                    DevOps
                                </h1>
                                <ul className="list list-disc text-base px-4 gap-2">
                                    <li>Git</li>
                                    <li>Docker</li>
                                    <li>Nginx</li>
                                    <li>Postman</li>
                                    <li>Portainer</li>
                                    <li>Jenkins</li>
                                </ul>
                            </div>
                            <div className="bg-warning/75 grid place-content-center rounded-box"></div>
                        </div>
                        {/* Tools */}
                        <div className="stack stack-top z-0">
                            <div className="bg-base-100 text-base-content rounded-box p-8">
                                <h1 className="text-2xl font-bold mb-4">
                                    <i className="fa-solid fa-code text-secondary mr-4"></i>
                                    Tools
                                </h1>
                                <ul className="list list-disc text-base px-4 gap-2">
                                    <li>JetBrains Rider</li>
                                    <li>VSCodium</li>
                                    <li>IntelliJ</li>
                                    <li>HeidiSQL / DBeaver</li>
                                    <li>Virtualbox</li>
                                    <li>Cisco Packet Tracer</li>
                                </ul>
                            </div>
                            <div className="bg-secondary grid place-content-center rounded-box"></div>
                        </div>
                        {/* Operating Systems */}
                        <div className="stack stack-top z-0">
                            <div className="bg-base-100 text-base-content rounded-box p-8">
                                <h1 className="text-2xl font-bold mb-4">
                                    <i className="fa-solid fa-database text-success/75 mr-4"></i>
                                    Operating Systems
                                </h1>
                                <ul className="list list-disc text-base px-4 gap-2">
                                    <li>Windows SysAdmin</li>
                                    <li>Linux SysAdmin</li>
                                </ul>
                            </div>
                            <div className="bg-success/75 grid place-content-center rounded-box"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vertical Gradient Divider */}
            <div id="projects" className="h-32 flex items-center justify-center bg-gradient-to-b from-base-200 to-base-100">
                <h2 id="play" className="text-4xl font-extrabold text-center text-primary my-12">
                    My Projects
                </h2>
            </div>

            {/* My Projects */}
            {/* TODO */}
            <div className="bg-base-100 py-16">
                <div className="max-w-5xl mx-auto px-8 xs:px-12 sm:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project Base */}
                        <div className="stack stack-top z-0">
                            <div className="bg-base-200 text-base-content rounded-box p-8">
                                <h3 className="text-2xl font-semibold mb-3">Project Title One</h3>
                                <p className="text-base-content/75 mb-4 text-sm">A brief description of Project One,
                                    highlighting its purpose and key features. This project showcases my skills in C#
                                    and .NET for backend development. Keep this concise and impactful.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="badge badge- badge-info font-semibold py-0.5">C#</span>
                                    <span className="badge badge- badge-info font-semibold py-0.5">C#</span>
                                    <span className="badge badge- badge-info font-semibold py-0.5">C#</span>
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <a href="#" target="_blank" rel="noopener noreferrer"
                                       className="text-info font-medium text-sm">
                                        <i className="fab fa-github mr-1"></i> GitHub Repo
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"
                                       className="text-purple-400 font-medium text-sm">
                                        <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                                    </a>
                                </div>
                            </div>
                            <div className="bg-primary grid place-content-center rounded-box"></div>
                        </div>

                        {/* Project Base */}
                        <div className="stack stack-top z-0">
                            <div className="bg-base-200 text-base-content rounded-box p-8">
                                <h3 className="text-2xl font-semibold mb-3">Project Title One</h3>
                                <p className="text-base-content/75 mb-4 text-sm">A brief description of Project One,
                                    highlighting its purpose and key features. This project showcases my skills in C#
                                    and .NET for backend development. Keep this concise and impactful.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="badge badge- badge-info font-semibold py-0.5">C#</span>
                                    <span className="badge badge- badge-info font-semibold py-0.5">C#</span>
                                    <span className="badge badge- badge-info font-semibold py-0.5">C#</span>
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <a href="#" target="_blank" rel="noopener noreferrer"
                                       className="text-info font-medium text-sm">
                                        <i className="fab fa-github mr-1"></i> GitHub Repo
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"
                                       className="text-purple-400 font-medium text-sm">
                                        <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                                    </a>
                                </div>
                            </div>
                            <div className="bg-primary grid place-content-center rounded-box"></div>
                        </div>

                        {/* Project Base */}
                        <div className="stack stack-top z-0">
                            <div className="bg-base-200 text-base-content rounded-box p-8">
                                <h3 className="text-2xl font-semibold mb-3">Project Title One</h3>
                                <p className="text-base-content/75 mb-4 text-sm">A brief description of Project One,
                                    highlighting its purpose and key features. This project showcases my skills in C#
                                    and .NET for backend development. Keep this concise and impactful.</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="badge badge- badge-info font-semibold py-0.5">C#</span>
                                    <span className="badge badge- badge-info font-semibold py-0.5">C#</span>
                                    <span className="badge badge- badge-info font-semibold py-0.5">C#</span>
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <a href="#" target="_blank" rel="noopener noreferrer"
                                       className="text-info font-medium text-sm">
                                        <i className="fab fa-github mr-1"></i> GitHub Repo
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer"
                                       className="text-purple-400 font-medium text-sm">
                                        <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                                    </a>
                                </div>
                            </div>
                            <div className="bg-primary grid place-content-center rounded-box"></div>
                        </div>
                    </div>

                    <p className="text-base-content/50 text-center mt-10">
                        This is just a selection. You can find more of my work on my <a href={projectConfig.githubUrl} className="text-accent">GitHub profile</a>.
                    </p>
                </div>
            </div>

            {/* Vertical Gradient Divider */}
            <div id="education" className="h-32 flex items-center justify-center bg-gradient-to-b from-base-100 to-base-200">
                <h2 className="text-4xl font-extrabold text-primary text-center my-12">
                    Education
                </h2>
            </div>

            {/* Education */}
            <div className="bg-base-200 py-16 px-4 md:px-8">
                <div className="max-w-5xl mx-auto ">
                    <div className="grid grid-cols-1 gap-8">
                        {/* Self-Taught */}
                        <div className="stack stack-start z-0">
                            <div className="bg-base-100 grid rounded-box p-8">
                                <h3 className="text-2xl text-base-content font-bold mb-2">Self-Taught Programmer & Developer</h3>
                                <p className="text-base-content/75 mb-4">
                                    <i className="fa fa-chalkboard-teacher text-primary mr-2"></i>
                                    <span className="text-primary font-medium">Continuous Learning & Practical Application</span> |
                                    2018 - Present
                                </p>
                                <ul className="list-disc list-inside text-base-content/50 space-y-1 ml-4">
                                    <li><i className="fas fa-laptop-code text-primary mr-2"></i>Extensive self-study in
                                        C#, .NET, ASP.NET, React.js, and modern web technologies.
                                    </li>
                                    <li><i className="fas fa-database text-primary mr-2"></i>Hands-on experience with
                                        MySQL, MariaDB, and PostgreSQL.
                                    </li>
                                    <li><i className="fas fa-tools text-primary mr-2"></i>Proficient in Git, Docker,
                                        Nginx, and CI/CD concepts.
                                    </li>
                                    <li><i className="fas fa-gamepad text-primary mr-2"></i>Applied knowledge in game
                                        plugin/modding for platforms like Minecraft and Unity.
                                    </li>
                                    <li><i className="fas fa-check-circle text-primary mr-2"></i>Focused on building
                                        robust, maintainable, and scalable backend solutions.
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-primary rounded-box"></div>
                        </div>

                        {/* School */}
                        <div className="stack stack-start z-0">
                            <div className="bg-base-100 grid rounded-box p-8">
                                <h3 className="text-2xl text-base-content font-bold mb-2">Network Administrator and Operator Technician</h3>
                                <p className="text-base-content/75 mb-4">
                                    <i className="fa fa-university text-success mr-2"></i>
                                    <span className="text-success font-medium">SZC Eötvös Loránd Technical College and Technical Technical School, Kaposvár, Hungary</span> |
                                    2019 - 2025
                                </p>
                                <ul className="list-disc list-inside text-base-content/50 space-y-1 ml-4">
                                    <li>
                                        <i className="fas fa-graduation-cap text-success mr-2"></i> 
                                        <strong>Dual Education Program:</strong> Completed a comprehensive program combining theoretical studies with extensive practical experience.
                                    </li>
                                    <li>
                                        <i className="fas fa-network-wired text-success mr-2"></i>
                                        <strong>Core Competencies:</strong> Acquired in-depth knowledge and hands-on skills in network administration, maintenance, and operation.
                                    </li>
                                    <li>
                                        <i className="fas fa-desktop text-success mr-2"></i>
                                        <strong>System Administration:</strong> Proficient in Windows and Linux server administration and troubleshooting.
                                    </li>
                                    <li>
                                        <i className="fas fa-certificate text-success mr-2"></i>
                                        <strong>Qualifications:</strong> Obtained a High School Diploma and a professional qualification as a Network Administrator and Operator Technician.
                                    </li>
                                    <li>
                                        <i className="fas fa-level-up-alt text-success mr-2"></i>
                                        <strong>European Qualification Framework (<a href="https://europass.europa.eu/en/description-eight-eqf-levels" className="text-accent">EQF</a>) Level:</strong> <span className="text-success">8</span>.
                                    </li>
                                    <li>
                                        <i className="fas fa-tools text-success mr-2"></i>
                                        <strong>Practical Skills:</strong> Gained experience with network infrastructure setup, troubleshooting, security protocols, and system management.
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-success rounded-box"></div>
                        </div>

                        {/* Certificate */}
                        <div className="stack stack-start z-0">
                            <div className="bg-base-100 grid rounded-box p-8">
                                <h3 className="text-2xl text-base-content font-bold mb-2">Cisco Certified Network Associate (CCNA) - Foundation</h3>
                                <p className="text-base-content/75 mb-4">
                                    <i className="fa fa-certificate text-info mr-2"></i>
                                    <span className="text-info font-medium">Cisco Networking Academy</span> |
                                    Completed: 2024 December
                                </p>
                                <ul className="list-disc list-inside text-base-content/50 space-y-1 ml-4">
                                    <li>
                                        <i className="fas fa-network-wired text-info mr-2"></i>
                                        <strong>Network Fundamentals:</strong> Solid grasp of network models (OSI/TCP-IP), protocols, and IP addressing (IPv4/IPv6).
                                    </li>
                                    <li>
                                        <i className="fas fa-cogs text-info mr-2"></i>
                                        <strong>Cisco Device Management:</strong> Practical skills in configuring, operating, and troubleshooting Cisco routers and switches.
                                    </li>

                                    <li>
                                        <i className="fas fa-link text-info mr-2"></i>
                                        <strong>Network Basics: </strong>
                                        <a href="/certificates/Networking_Basics_certificate_zoltansolymosi.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View Certificate</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-link text-info mr-2"></i>
                                        <strong>Networking Devices and Initial Configuration: </strong>
                                        <a href="/certificates/Networking_Devices_and_Initial_Configuration_certificate_zoltansolymosi.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">View Certificate</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-info rounded-box"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vertical Gradient Divider */}
            <div id="connect"
                 className="h-32 flex items-center justify-center bg-gradient-to-b from-base-200 to-base-100">
                <h2 id="play" className="text-4xl font-extrabold text-center text-primary my-12">
                    Connect with Me
                </h2>
            </div>

            {/* Connect */}
            <div className="hero bg-base-100">
                <div className="hero-content flex-col lg:flex-row py-10 max-w-5xl">
                    <div className="items-center text-center">
                        <p className="text-base-content text-xl mb-10">
                            Ready to collaborate or have a chat? I'm always open to new opportunities and challenging
                            projects.
                            Feel free to reach out through any of these platforms:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mb-16">
                            {/* LinkedIn */}
                            <a href={projectConfig.linkedinUrl} target="_blank"
                               rel="noopener noreferrer"
                               className="btn btn-soft btn-primary rounded-box shadow p-10 transform hover:-translate-y-2 transition duration-300 ease-in-out">
                                <i className="fab fa-linkedin text-4xl mr-4"></i>
                                <span className="text-xl font-semibold">LinkedIn</span>
                            </a>
                            {/* Discord */}
                            <a href={projectConfig.discordUrl} target="_blank"
                               rel="noopener noreferrer"
                               className="btn btn-soft btn-primary rounded-box shadow p-10 transform hover:-translate-y-2 transition duration-300 ease-in-out">
                                <i className="fab fa-discord text-4xl mr-4"></i>
                                <span className="text-xl font-semibold">Discord</span>
                            </a>

                            {/* Twitter / X */}
                            <a href={projectConfig.twitterUrl} target="_blank"
                               rel="noopener noreferrer"
                               className="btn btn-soft btn-primary rounded-box shadow p-10 transform hover:-translate-y-2 transition duration-300 ease-in-out">
                                <i className="fab fa-twitter text-4xl mr-4"></i>
                                <span className="text-xl font-semibold">Twitter / X</span>
                            </a>

                            {/* GitHub Profile */}
                            <a href={projectConfig.githubUrl} target="_blank"
                               rel="noopener noreferrer"
                               className="btn btn-soft btn-primary rounded-box shadow p-10 transform hover:-translate-y-2 transition duration-300 ease-in-out">
                                <i className="fab fa-github text-4xl mr-4"></i>
                                <span className="text-xl font-semibold">GitHub</span>
                            </a>
                        </div>

                        <h3 className="text-3xl font-bold text-primary mb-6">
                            Support My Work
                        </h3>
                        <p className="text-base-content mb-8 text-lg">If you like what I do, consider buying me a
                            coffee:</p>
                        <a href={projectConfig.kofiUrl} target="_blank" rel="noopener noreferrer"
                           className="btn btn-info rounded-box shadow p-8 transform hover:-translate-y-2 transition duration-300 ease-in-out">
                            <i className="fa fa-mug-hot text-2xl mr-2"></i>
                            Buy me a coffee!
                        </a>
                    </div>
                </div>
            </div>

            {/* Vertical Gradient Divider */}
            <div className="h-32 flex items-center justify-center bg-gradient-to-b from-base-100 to-base-300"/>
        </>
    )
}

export default HomePage