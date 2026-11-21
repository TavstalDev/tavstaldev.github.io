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
            hasPage: true,
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
           ],
            install: {
                command: "dotnet add package PayPalSDK"
            },
            features: [
                {
                    name: "Orders API",
                    icon: "bag-check",
                    desc: "Create, update, confirm, capture, authorize, and track orders."
                },
                {
                    name: "Payments API",
                    icon: "credit-card",
                    desc: "Manage authorizations, captures, and refunds."
                },
                {
                    name: "Subscriptions API",
                    icon: "arrow-repeat",
                    desc: "Handle billing plans, subscriptions, and transaction history."
                },
                {
                    name: "Invoicing API",
                    icon: "receipt",
                    desc: "Create, send, cancel, and track payments for invoices."
                },
                {
                    name: "Webhooks",
                    icon: "broadcast",
                    desc: "Easily register webhooks and check webhook signatures."
                },
                {
                    name: "Payment Method Tokens",
                    icon: "safe",
                    desc: "Save payment methods securely using the vault."
                },
                {
                    name: "Shipment Tracking",
                    icon: "truck",
                    desc: "Add, update, and find tracking information."
                },
                {
                    name: "Catalog Products",
                    icon: "box-seam",
                    desc: "Create and manage your product listings."
                },
                {
                    name: "Currency Exchange",
                    icon: "currency-exchange",
                    desc: "Request live exchange rates."
                },
                {
                    name: "Strongly-Typed Models",
                    icon: "braces",
                    desc: "Strongly-typed models for all API requests and responses to reduce code errors."
                },
                {
                    name: "Async/Await Support",
                    icon: "lightning-charge",
                    desc: "Async/await support across all methods."
                },
                {
                    name: "Sandbox & Live Environments",
                    icon: "globe",
                    desc: "Full support for both Sandbox and Live environments."
                }
            ],
            usage: [
                {
                    file: "Program.cs",
                    lang: "C# (.NET)",
                    code: [
                        "using Tavstal.PayPalSDK.Http;",
                        "using Tavstal.PayPalSDK.Http.Clients;",
                        "using Tavstal.PayPalSDK.Models.Orders;",
                        "using Tavstal.PayPalSDK.Models.Orders.Bodies;",
                        "using Tavstal.PayPalSDK.Models.Common.Orders;",
                        "using Tavstal.PayPalSDK.Models.Common.Payments;",
                        "using Tavstal.PayPalSDK.Models.Common.Addressing;",
                        "using Tavstal.PayPalSDK.Models.Enums.Orders;",
                        "using Tavstal.PayPalSDK.Models.Common;",
                        "",
                        "// 1. Set up the client (use SandboxEnvironment for testing, LiveEnvironment for production)",
                        "var client = new PayPalHttpClient(",
                        "    new SandboxEnvironment(\"your-client-id-here\", \"your-client-secret-here\")",
                        ");",
                        "",
                        "// 2. Create the order request body",
                        "var orderRequestBody = new OrderCreateRequestBody",
                        "{",
                        "    Intent = EIntent.CAPTURE,",
                        "    PurchaseUnits =",
                        "    [",
                        "        new PurchaseUnit",
                        "        {",
                        "            Amount = new MoneyBreakdown",
                        "            {",
                        "                CurrencyCode = \"EUR\",",
                        "                Value = \"10.00\",",
                        "                Breakdown = new Breakdown",
                        "                {",
                        "                    ItemTotal = new Money",
                        "                    {",
                        "                        CurrencyCode = \"EUR\",",
                        "                        Value = \"10.00\"",
                        "                    }",
                        "                }",
                        "            },",
                        "            Description = \"Test Order\",",
                        "            CustomId = \"CustomId123\",",
                        "            Items =",
                        "            [",
                        "                new Item",
                        "                {",
                        "                    Category = EOrderItemCategory.DIGITAL_GOODS,",
                        "                    Name = \"Test Item\",",
                        "                    Description = \"This is a test item\",",
                        "                    Sku = \"ITEM123\",",
                        "                    UnitAmount = new Money",
                        "                    {",
                        "                        CurrencyCode = \"EUR\",",
                        "                        Value = \"10.00\"",
                        "                    },",
                        "                    Quantity = \"1\",",
                        "                    Tax = new Money",
                        "                    {",
                        "                        CurrencyCode = \"EUR\",",
                        "                        Value = \"0.00\"",
                        "                    }",
                        "                }",
                        "            ],",
                        "            Shipping = new Shipping",
                        "            {",
                        "                EmailAddress = \"sdk-customer@personal.example.com\",",
                        "                Name = new Person",
                        "                {",
                        "                    FullName = \"John Doe\"",
                        "                },",
                        "                Address = new Address",
                        "                {",
                        "                    AddressLineOne = \"123 Test St\",",
                        "                    AddressLineTwo = \"Apt 4B\",",
                        "                    AdminAreaOne = \"CA\",",
                        "                    AdminAreaTwo = \"Los Angeles\",",
                        "                    PostalCode = \"90001\",",
                        "                    CountryCode = \"US\"",
                        "                }",
                        "            },",
                        "            Payee = new Payee",
                        "            {",
                        "                EmailAddress = \"sdk-merchant@business.example.com\"",
                        "            }",
                        "        }",
                        "    ]",
                        "};",
                        "",
                        "// 3. Send the request using the high-level Orders client",
                        "var result = await client.Orders.CreateAsync(orderRequestBody);",
                        "",
                        "if (result.IsSuccess)",
                        "{",
                        "    Console.WriteLine($\"Order ID: {result.Value.Id}\");",
                        "    Console.WriteLine($\"Order Status: {result.Value.Status}\");",
                        "}",
                        "else",
                        "{",
                        "    Console.WriteLine($\"Error: {result.Error?.Message}\");",
                        "}"
                    ]
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
            hasPage: true,
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
            ],
            install: {
                command: "dotnet add package BeaconSDK"
            },
            features: [
                {
                    name: "Microsoft Authentication",
                    icon: "shield-check",
                    desc: "Supports OAuth2 device code and browser redirect flows, Xbox Live/XSTS token exchange, Minecraft access tokens, ownership checks, and profile retrieval."
                },
                {
                    name: "Account & Skin Management",
                    icon: "person-badge",
                    desc: "Manages accounts with encrypted tokens at rest, login refreshes, and Mojang skin uploads, resets, and cape visibility."
                },
                {
                    name: "Version & Mod Loader Manifests",
                    icon: "list-check",
                    desc: "Fetches cached Mojang version manifests alongside Fabric, Quilt, Forge, and NeoForge loader manifests."
                },
                {
                    name: "Instance Installation",
                    icon: "download",
                    desc: "Downloads and SHA-1 verifies client jars, libraries, assets, natives, and logging configs across vanilla and modded instances."
                },
                {
                    name: "Java Runtime Management",
                    icon: "cpu",
                    desc: "Discovers installed JVMs, checks version and architecture compatibility, and automatically downloads required JDKs."
                },
                {
                    name: "Game Launching & Lifecycle",
                    icon: "play-circle",
                    desc: "Builds JVM and game arguments, starts and stops game processes, and tracks running instances."
                },
                {
                    name: "Progress & Logging",
                    icon: "terminal",
                    desc: "Reports stage progress via IProgressReporter and routes structured logs to console, ILogger<T>, or a background log file writer."
                },
                {
                    name: "Resilient Downloads & DI",
                    icon: "arrow-repeat",
                    desc: "Handles compression, TLS, throttling retries, and parallel integrity-checked downloads via IHttpClientFactory, built for .NET 10, trim/AOT, and DI."
                }
            ],
            usage: [
                {
                    file: "Program.cs",
                    lang: "C# (.NET)",
                    code: [
                        "using Microsoft.Extensions.DependencyInjection;",
                        "using Microsoft.Extensions.Hosting;",
                        "using Tavstal.BeaconSDK.Models.Config;",
                        "",
                        "namespace Tavstal.BeaconSDK.Example;",
                        "",
                        "public static class Program",
                        "{",
                        "    public static async Task Main(string[] args)",
                        "    {",
                        "        var hostBuilder = Host.CreateDefaultBuilder(args);",
                        "        var config = new BeaconConfiguration",
                        "        {",
                        "            Auth = new AuthConfiguration",
                        "            {",
                        "                MicrosoftClientId = \"your-azure-client-id\",",
                        "            },",
                        "            Logging = new LoggingConfig",
                        "            {",
                        "                LogLevel = LogLevel.Information,",
                        "                DefaultLogFilePath = Path.Combine(\"logs\", \"latest.log\")",
                        "            }",
                        "        };",
                        "",
                        "        hostBuilder.ConfigureServices(services =>",
                        "        {",
                        "            services.AddBeaconServices(config);",
                        "            services.AddSingleton<ExampleLoginWorker>();",
                        "            services.AddHostedService(x => x.GetRequiredService<ExampleLoginWorker>());",
                        "            services.AddHostedService<ExampleVanillaWorker>();",
                        "        });",
                        "",
                        "        var host = hostBuilder.Build();",
                        "        await host.RunAsync();",
                        "    }",
                        "}"
                    ]
                },
                {
                    file: "ExampleLoginWorker.cs",
                    lang: "C# (.NET)",
                    code: [
                        "using System.Text;",
                        "using Microsoft.Extensions.Hosting;",
                        "using Tavstal.BeaconSDK.Enums;",
                        "using Tavstal.BeaconSDK.Helpers.Domain;",
                        "using Tavstal.BeaconSDK.Models.Config;",
                        "using Tavstal.BeaconSDK.Models.Logging;",
                        "using Tavstal.BeaconSDK.Services.Abstractions;",
                        "using Tavstal.BeaconSDK.Services.Abstractions.Auth;",
                        "using Tavstal.BeaconSDK.Services.Implementations.Auth;",
                        "",
                        "namespace Tavstal.BeaconSDK.Example;",
                        "",
                        "public class ExampleLoginWorker : IHostedService, IProgressReporter",
                        "{",
                        "    private readonly IBeaconLogger<ExampleLoginWorker> _logger;",
                        "    private readonly IMicrosoftAuthService _microsoftAuthService;",
                        "    private readonly IMicrosoftDeviceAuthService _microsoftDeviceAuthService;",
                        "    private readonly IMicrosoftHttpAuthService _microsoftHttpAuthService;",
                        "    private readonly IEncryptionService _encryptionService;",
                        "    private readonly BeaconConfiguration _configuration;",
                        "",
                        "    public string Uuid { get; private set; } = string.Empty;",
                        "    public string Username { get; private set; } = string.Empty;",
                        "    public string? Token { get; private set; }",
                        "",
                        "    public ExampleLoginWorker(IBeaconLogger<ExampleLoginWorker> logger, IMicrosoftAuthService microsoftAuthService, IMicrosoftDeviceAuthService microsoftDeviceAuthService,",
                        "        IMicrosoftHttpAuthService microsoftHttpAuthService, IEncryptionService encryptionService, BeaconConfiguration configuration)",
                        "    {",
                        "        _logger = logger;",
                        "        _microsoftAuthService = microsoftAuthService;",
                        "        _microsoftDeviceAuthService = microsoftDeviceAuthService;",
                        "        _microsoftHttpAuthService = microsoftHttpAuthService;",
                        "        _encryptionService = encryptionService;",
                        "        _configuration = configuration;",
                        "    }",
                        "",
                        "    public async Task StartAsync(CancellationToken cancellationToken)",
                        "    {",
                        "        Console.Write(\"Login with Microsoft account? (y/n): \");",
                        "        bool useMicrosoft = Console.ReadKey().KeyChar == 'y';",
                        "        Console.WriteLine();",
                        "",
                        "        if (!useMicrosoft)",
                        "        {",
                        "            Console.Write(\"Minecraft username: \");",
                        "            string username = Console.ReadLine() ?? \"Player\";",
                        "            Uuid = GameHelper.GetOfflinePlayerUUID(username);",
                        "            Username = username;",
                        "            Token = null;",
                        "            return;",
                        "        }",
                        "",
                        "        var deviceCode = await _microsoftAuthService.CreateDeviceCodeAsync(cancellationToken);",
                        "        if (deviceCode == null)",
                        "        {",
                        "            _logger.LogError(\"Failed to create device code.\");",
                        "            return;",
                        "        }",
                        "",
                        "        _microsoftAuthService.OnAuthStatusChanged += OnAuthStatusChanged;",
                        "        _logger.LogInformation($\"Login at https://microsoft.com/link with '{deviceCode.UserCode}' code.\");",
                        "        _logger.LogInformation($\"Or open: {_configuration.Endpoints.Microsoft.MakeMicrosoftAuthUrl(_configuration.Auth.MicrosoftClientId!, MicrosoftHttpAuthService.ListeningUrl)}\");",
                        "        await Task.WhenAny(",
                        "            _microsoftDeviceAuthService.StartListeningAsync(deviceCode.DeviceCode, _configuration.Auth.DeviceCodePollInterval, cancellationToken),",
                        "            _microsoftHttpAuthService.StartListeningAsync(this, cancellationToken)",
                        "        );",
                        "    }",
                        "",
                        "    private void OnAuthStatusChanged(EAuthStatus status)",
                        "    {",
                        "        if (status != EAuthStatus.SUCCESS || _microsoftAuthService.Account == null)",
                        "            return;",
                        "",
                        "        Uuid = _microsoftAuthService.Account.Uuid;",
                        "        Username = _microsoftAuthService.Account.DisplayName;",
                        "        Token = Encoding.UTF8.GetString(_microsoftAuthService.Account.GetAccessToken(_encryptionService));",
                        "        _microsoftAuthService.Reset();",
                        "    }",
                        "",
                        "    public Task StopAsync(CancellationToken cts) => Task.CompletedTask;",
                        "",
                        "    public void Report(double progress) { }",
                        "    public void Report(double progress, string fileName, bool downloading = true) { }",
                        "    public void Report(EProgressKind kind, double progress) { }",
                        "    public void ReportExpectedTask(int? count) { }",
                        "    public void ReportTaskCompleted() { }",
                        "}"
                    ]
                },
                {
                    file: "ExampleVanillaWorker.cs",
                    lang: "C# (.NET)",
                    code: [
                        "using Microsoft.Extensions.DependencyInjection;",
                        "using Microsoft.Extensions.Hosting;",
                        "using Tavstal.BeaconSDK.Enums;",
                        "using Tavstal.BeaconSDK.Instances;",
                        "using Tavstal.BeaconSDK.Models.Config;",
                        "using Tavstal.BeaconSDK.Models.Instance;",
                        "using Tavstal.BeaconSDK.Models.Instance.Config;",
                        "using Tavstal.BeaconSDK.Models.Logging;",
                        "using Tavstal.BeaconSDK.Services.Abstractions;",
                        "",
                        "namespace Tavstal.BeaconSDK.Example;",
                        "",
                        "public class ExampleVanillaWorker : IHostedService, IProgressReporter",
                        "{",
                        "    private readonly IBeaconLogger<ExampleVanillaWorker> _logger;",
                        "    private readonly IServiceProvider _serviceProvider;",
                        "    private readonly ExampleLoginWorker _loginWorker;",
                        "    private readonly IJavaService _javaService;",
                        "    private readonly IInstanceLaunchService _instanceLaunchService;",
                        "    private readonly IInstanceInstallService _instanceInstallService;",
                        "    private readonly IManifestService _manifestService;",
                        "    private readonly BeaconConfiguration _appConfiguration;",
                        "",
                        "    public ExampleVanillaWorker(IBeaconLogger<ExampleVanillaWorker> logger, IServiceProvider serviceProvider, ExampleLoginWorker loginWorker,",
                        "        IJavaService javaService, IInstanceLaunchService instanceLaunchService, IInstanceInstallService instanceInstallService,",
                        "        IManifestService manifestService, BeaconConfiguration appConfiguration)",
                        "    {",
                        "        _logger = logger;",
                        "        _serviceProvider = serviceProvider;",
                        "        _loginWorker = loginWorker;",
                        "        _javaService = javaService;",
                        "        _instanceLaunchService = instanceLaunchService;",
                        "        _instanceInstallService = instanceInstallService;",
                        "        _manifestService = manifestService;",
                        "        _appConfiguration = appConfiguration;",
                        "    }",
                        "",
                        "    public async Task StartAsync(CancellationToken cts)",
                        "    {",
                        "        if (string.IsNullOrEmpty(_loginWorker.Username) || string.IsNullOrEmpty(_loginWorker.Uuid))",
                        "        {",
                        "            _logger.LogError(\"Cannot launch due to missing login.\");",
                        "            return;",
                        "        }",
                        "",
                        "        string mcVersion = \"1.21.4\";",
                        "        var manifestPath = Path.Combine(Directory.GetCurrentDirectory(), \"manifest.json\");",
                        "        if (!File.Exists(manifestPath))",
                        "            await _manifestService.DownloadMinecraftManifestAsync(manifestPath, null, cts);",
                        "",
                        "        var manifest = await _manifestService.GetMinecraftManifestAsync(manifestPath, cts);",
                        "        var targetVersion = manifest?.Versions.FirstOrDefault(x => x.Id == mcVersion);",
                        "        if (targetVersion == null)",
                        "        {",
                        "            _logger.LogError($\"Version {mcVersion} not found in manifest.\");",
                        "            return;",
                        "        }",
                        "",
                        "        var gameDir = Path.Combine(Directory.GetCurrentDirectory(), \"game\");",
                        "        var gameDetails = new GameDetails(string.Empty, 1024, 4096, string.Empty, targetVersion.Id,",
                        "            EMinecraftKind.VANILLA, null, Path.Combine(gameDir, \"instances\", mcVersion),",
                        "            string.Empty, [], string.Empty, [], null);",
                        "        var pathDetails = new PathDetails(Path.Combine(gameDir, \"assets\"), Path.Combine(gameDir, \"cache\"),",
                        "            Path.Combine(gameDir, \"libs\"), Path.Combine(gameDir, \"versions\"), []);",
                        "        var launcherDetails = new LauncherDetails(\"exampleApp\", \"1.0.0\");",
                        "        var clientDetails = new ClientDetails(_loginWorker.Token, _loginWorker.Username, _loginWorker.Uuid, string.IsNullOrEmpty(_loginWorker.Token));",
                        "",
                        "        var instanceConfig = new InstanceConfiguration",
                        "        {",
                        "            Version = targetVersion,",
                        "            Game = gameDetails,",
                        "            Path = pathDetails,",
                        "            Launcher = launcherDetails,",
                        "            Client = clientDetails",
                        "        };",
                        "",
                        "        var logger = _serviceProvider.GetRequiredService<IBeaconLogger<MinecraftInstance>>();",
                        "        var instance = new MinecraftInstance(mcVersion, _appConfiguration, instanceConfig, logger, this);",
                        "        if (!await _instanceInstallService.InstallAsync(instance, this, null, cts))",
                        "            return;",
                        "",
                        "        var javaDir = Path.Combine(gameDir, \"java\");",
                        "        var requiredJava = instance.MinecraftVersionMeta.JavaVersionMeta?.MajorVersion ?? 8;",
                        "        await _javaService.LocateJavaInstallationsAsync(javaDir, cancellationToken: cts);",
                        "        var javaPath = await _javaService.GetJavaVersionAsync(requiredJava, cts)",
                        "            ?? await _javaService.DownloadJavaVersionAsync(requiredJava, javaDir, \"java-mirrors.json\", null, cts);",
                        "        instance.Config.Game.JavaPath = javaPath;",
                        "",
                        "        await _instanceLaunchService.LaunchAsync(instance, this, cts);",
                        "    }",
                        "",
                        "    public Task StopAsync(CancellationToken cts) => Task.CompletedTask;",
                        "",
                        "    public void Report(double progress) { }",
                        "    public void Report(double progress, string fileName, bool downloading = true) { }",
                        "    public void Report(EProgressKind kind, double progress) { }",
                        "    public void ReportExpectedTask(int? count) { }",
                        "    public void ReportTaskCompleted() { }",
                        "}"
                    ]
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
            hasPage: true,
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
            ],
            install: {
                command: "dotnet add package WynnNetSDK"
            },
            features: [
                {
                    name: "Full Wynncraft API Coverage",
                    icon: "layers",
                    desc: "Covers players, guilds, items, classes, maps, news, leaderboards, recipes, abilities, and search across .NET 8, .NET 9, and .NET 10."
                },
                {
                    name: "Result Pattern Error Handling",
                    icon: "check-circle",
                    desc: "Returns Result<T, ErrorResponse> with IsSuccess, Value, Error, Switch, and Match helpers instead of throwing for standard errors."
                },
                {
                    name: "Retries & Rate Limit Tracking",
                    icon: "arrow-repeat",
                    desc: "Automatically retries failed or rate-limited requests, tracks requests per minute with API token support, and throws RateLimitException when exhausted."
                },
                {
                    name: "Optional Caching",
                    icon: "database",
                    desc: "Supports pluggable ICacheManager implementations with endpoint-specific default cache durations."
                },
                {
                    name: "Trim-Safe Source-Generated JSON",
                    icon: "lightning-charge",
                    desc: "Uses System.Text.Json source generation for fast, trim-friendly serialization and deserialization."
                },
                {
                    name: "Configurable HTTP Client",
                    icon: "sliders",
                    desc: "Customize timeouts, retries, compression, connection limits, buffer size, User-Agent, and proxies via WynnClientOptions."
                }
            ],
            usage: [
                {
                    file: "Program.cs",
                    lang: "C# (.NET)",
                    code: [
                        "using Tavstal.WynnNetSDK.Http;",
                        "",
                        "// 1. Create the Wynncraft environment with your API token.",
                        "var environment = new WynnEnvironment(token: \"YOUR_API_TOKEN\");",
                        "",
                        "// 2. Create the HTTP client.",
                        "using var client = new WynnHttpClient(environment);",
                        "",
                        "// 3. Call the API and check the result.",
                        "var result = await client.Player.GetProfileAsync(\"Tavstal\");",
                        "if (result.IsSuccess)",
                        "{",
                        "    Console.WriteLine($\"Username: {result.Value.Username}\");",
                        "}",
                        "else",
                        "{",
                        "    Console.WriteLine($\"Error: {result.Error.Message}\");",
                        "}"
                    ]
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
            hasPage: true,
            links: [
                {
                    label: "Code",
                    url: "https://github.com/TavstalDev/KonkordLauncher", 
                    icon: "github"
                }
            ],
            features: [
                {
                    name: "Cross-Platform & Lightweight",
                    icon: "laptop",
                    desc: "Built with .NET 9 and Avalonia UI for Windows, Linux, and macOS with minimal resource overhead."
                },
                {
                    name: "Instance & Mod Loader Management",
                    icon: "boxes",
                    desc: "Create, edit, delete, import, and export Minecraft instances with Forge, Fabric, NeoForge, and Quilt support."
                },
                {
                    name: "Modrinth Content & Modpacks",
                    icon: "cloud-download",
                    desc: "Create instances from modpacks and download or install mods, resource packs, and shader packs via Modrinth."
                },
                {
                    name: "Custom Java Runtimes",
                    icon: "cpu",
                    desc: "Configure different Java versions per instance and handle legacy Forge library installation."
                },
                {
                    name: "Secure Token Storage & Skins",
                    icon: "shield-lock",
                    desc: "Stores user tokens securely across platforms with built-in skin selection support."
                },
                {
                    name: "Automatic Updates & Patch Notes",
                    icon: "arrow-repeat",
                    desc: "Keeps the launcher updated automatically and displays patch notes in an open-source GPLv3 codebase."
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
            hasPage: true,
            links: [
                {
                    label: "Code",
                    url: "https://github.com/TavstalDev/YggdrasilSharp",
                    icon: "github"
                }
            ],
            features: [
                {
                    name: "Yggdrasil API Compatibility",
                    icon: "arrow-repeat",
                    desc: "Self-hostable ASP.NET Core implementation of Yggdrasil authentication, sessions, profiles, textures, and server join endpoints for testing, launchers, and custom skins."
                },
                {
                    name: "Account System & TOTP 2FA",
                    icon: "shield-lock",
                    desc: "Includes registration with email confirmation, login, logout, password recovery, TOTP two-factor authentication with backup codes, and session management."
                },
                {
                    name: "Skins, Capes & File Hosting",
                    icon: "image",
                    desc: "Supports validated skin (up to 512x512), avatar, and cape uploads, launcher version/file hosting, generic file hosting, and a news feed."
                },
                {
                    name: "Antivirus Upload Scanning",
                    icon: "shield-check",
                    desc: "Scans uploaded files through Windows Defender or ClamAV before persisting them."
                },
                {
                    name: "EF Core Databases & Auth Schemes",
                    icon: "database",
                    desc: "Supports MySQL, PostgreSQL, and SQLite via EF Core with configurable JWT Bearer and Basic authentication schemes."
                },
                {
                    name: "Security Defaults & Swagger Docs",
                    icon: "lock",
                    desc: "Provides per-endpoint rate limiting, CORS, HTTPS/HSTS, strict CSP headers, and Swagger/OpenAPI UI at /docs in Development."
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
            hasPage: false,
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
            hasPage: false,
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