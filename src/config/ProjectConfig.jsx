const projectConfig = {
    urls: [
        {
            name: 'zoltansolymosi@proton.me',
            icon: 'envelope-fill',
            url: 'mailto:zoltansolymosi@proton.me',
            showOnNavBar: true,
        },
        {
            name: 'GitHub',
            icon: 'github',
            url: 'https://github.com/TavstalDev',
            showOnNavBar: true,
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://www.linkedin.com/in/zoltan-solymosi/',
            showOnNavBar: true,
        },
        {
            name: 'KoFi',
            icon: 'cup-hot-fill',
            url: 'https://ko-fi.com/tavstal',
            showOnNavBar: false,
        },
        {
            name: 'PayPal',
            icon: 'paypal',
            url: 'https://paypal.me/tplugins',
            showOnNavBar: false,
        }
    ],
    experience: [
        {
            name: "ICT Systems Technician (dual training)",
            interval: "Mar 2024 – May 2025",
            location: "Kaposvári Informatika Ágazati Képzőközpont · Kaposvár",
            description: [
                "Configured and operated Linux/Windows servers and Cisco network devices.",
                "Prepared exam computers by manually installing and configuring software (no Active Directory).",
                "Hardware upgrades: RAM and SSD installs."
            ],
        },
        {
            name: "Community user support",
            interval: "2019 - Present",
            location: "Discord ticket system",
            description: [
                "Support for users of my own projects and other projects: dozens of requests, troubleshooting and bug-report handling."
            ],
        }
    ],
    education: [
        {
            name: "Technician diploma: databases &amp; network administration",
            interval: "2019 – 2025",
            location: "Kaposvári SZC Eötvös Loránd Technikum · Kaposvár"
        },
        {
            name: "ICT Systems Technician (EQF 5)",
            interval: "2024 – 2025",
            location: "Kaposvári Informatika Ágazati Képzőközpont · Kaposvár"
        },
        {
            name: "Computer Science BSc",
            interval: "2026 – present",
            location: "Pannon University · Veszprém"
        }
    ],
    skills: [
        { 
            icon: "braces", 
            title: "Languages",
            items: ["C#", "Java", "JavaScript", "SQL (MySQL/MariaDB)", "Basic HTML/CSS"] 
        },
        { 
            icon: "cpu-fill", 
            title: "Frameworks & Tools", 
            items: [".NET", "ASP.NET", "AvaloniaUI", "Dependency Injection", "NuGet", "Unit testing", "React", "Git", "Docker", "Nginx", "Jenkins"] 
        },
        { 
            icon: "hdd-rack-fill", 
            title: "Servers & Networking", 
            items: ["Linux servers", "Windows servers", "Cisco routers & switches", "VLAN", "IP addressing"] 
        }
    ],
    categories: [
        { 
            key: "all",
            label: "All",
            icon: "grid-fill" 
        },
        { 
            key: "sdk",
            label: "SDKs & Libraries",
            icon: "box-seam-fill" 
        },
        {
            key: "backend",
            label: "Backend & APIs",
            icon: "hdd-network-fill" 
        },
        { 
            key: "app",
            label: "Desktop Apps",
            icon: "window-desktop" 
        },
        { 
            key: "plugins",
            label: "Game Plugins",
            icon: "plug-fill" 
        }
    ],
    projects: [
        { 
            name: "PayPalSDK", 
            category: "sdk", 
            status: "active", 
            icon: "paypal",
            desc: "Open-source C# SDK for PayPal integration, published on NuGet and covered by unit tests.",
            tags: ["C#", ".NET", "NuGet", "Unit tests", "Open source"],
            links: [
                {
                    label: "Code", 
                    url: "https://github.com/TavstalDev/PayPalSDK", 
                    icon: "github"
                }, 
                {
                    label: "NuGet",
                    url: "https://www.nuget.org/packages/PayPalSDK/", 
                    icon: "box-seam"
                }
           ] 
        },
        {
            name: "BeaconSDK", 
            category: "sdk", 
            status: "active",
            icon: "broadcast",
            desc: "Minecraft launcher SDK in C#, built around dependency injection and published on NuGet.",
            tags: ["C#", ".NET", "NuGet", "DI", "Minecraft"],
            links: [
                {
                   label: "Code",
                   url: "https://github.com/TavstalDev/BeaconSDK",
                   icon: "github" 
                },
                {
                    label: "NuGet",
                    url: "https://www.nuget.org/packages/BeaconSDK/",
                    icon: "box-seam"
                }
            ] 
        },
        {
            name: "WynnNetSDK",
            category: "sdk",
            status: "active",
            icon: "feather",
            desc: "Wynncraft API SDK in C# for .NET, handling HTTP, JSON, retries, rate limiting, and caching.",
            tags: ["C#", ".NET", "NuGet", "DI", "Minecraft", "WynnCraft"],
            links: [
                {
                    label: "Code",
                    url: "https://github.com/TavstalDev/WynnNetSDK",
                    icon: "github"
                },
                {
                    label: "NuGet",
                    url: "https://www.nuget.org/packages/WynnNetSDK/",
                    icon: "box-seam"
                }
            ]
        },
        { 
            name: "KonkordLauncher", 
            category: "app",
            status: "active",
            icon: "rocket-takeoff-fill",
            desc: "Cross-platform (Windows, Linux, macOS) desktop launcher with Microsoft authentication and Minecraft instance management.",
            tags: ["C#", ".NET 10", "AvaloniaUI 12", "Cross-platform"],
            links: [
                {
                    label: "Code",
                    url: "https://github.com/TavstalDev/KonkordLauncher", 
                    icon: "github"
                }
            ] 
        },
        { 
            name: "YggdrasilSharp",
            category: "backend",
            status: "active",
            icon: "shield-lock-fill",
            desc: "ASP.NET implementation of Mojang's Yggdrasil authentication. The server-side protocol follows the original 1:1, with login and registration on a custom system.",
            tags: ["ASP.NET", "Auth", "Minecraft"],
            links: [
                {
                    label: "Code",
                    url: "https://github.com/TavstalDev/YggdrasilSharp",
                    icon: "github"
                }
            ] 
        },
        { 
            name: "RedstonePlugins backend", 
            category: "backend", 
            status: "active", 
            icon: "cart-check-fill",
            desc: "E-commerce backend built in a two-person team: authentication, PayPal and Bitcoin payments, product management, admin dashboard, REST API and permissions.",
            tags: ["ASP.NET", "REST API", "PayPal", "Bitcoin", "Team of 2"],
            links: [
                {
                    label: "Live site",
                    url: "https://redstoneplugins.com",
                    icon: "box-arrow-up-right"
                }
            ] 
        },
        { 
            name: "Game server plugins", 
            category: "plugins", 
            status: "wip",
            icon: "controller",
            desc: "Ongoing hobby work: plugins for game servers, written in C# and Java.",
            tags: ["C#", "Java", "Hobby"],
            links: [
                {
                    label: "Code", 
                    url: "https://github.com/TavstalDev",
                    icon: "github"
                }
           ]
        }
    ],
    status: {
        active: { 
            label: "active",
            cls: "s-active" 
        },
        wip: {
            label: "activating",
            cls: "s-wip"
        },
        paused: {
            label: "inactive",
            cls: "s-paused"
        },
        archived: {
            label: "archived",
            cls: "s-archived"
        }
    }
}

export default projectConfig;