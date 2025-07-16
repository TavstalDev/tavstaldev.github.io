import {useEffect, useState} from 'react';
import {Link, Outlet} from 'react-router-dom';

const DefaultLayout = () => {
    const [switcherTheme, setSwitcherTheme] = useState("light");

    useEffect(() => {
        // Initialize theme based on system or previously saved preference
        const saved = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const currentTheme = saved ?? (systemPrefersDark ? "dark" : "light");
        document.documentElement.setAttribute("data-theme", currentTheme);

        // Invert theme because of theme switcher works
        if (currentTheme === "dark")
            setSwitcherTheme("light");
        else
            setSwitcherTheme("dark");
    }, []);
    
    const handleDrawerButton = () => {
        const drawer = document.getElementById("nav-drawer");
        if (!drawer)
            return;
        
        drawer.checked = false;
    }
    

    return (
        <>
            {/* Drawer for mobile */}
            <input id="nav-drawer" type="checkbox" className="drawer-toggle"/>

            {/* Header navbar */}
            <header className="navbar bg-base-100 border border-base-300 lg:rounded-box shadow-lg fixed z-10 inset-x-0 lg:mt-5 mx-auto lg:max-w-screen-lg xl:max-w-screen-xl">
                {/* Logo */}
                <div className="navbar-start">
                    <Link to="/">
                        <img src="/images/logo.png" alt="TavstalDev" className="max-w-55 px-2 text-xl text-base-content font-bold" />
                    </Link>
                </div>

                {/* Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* About Me */}
                        <li>
                            <a href="#aboutme">
                                <i className="fa fa-address-card text-base"></i>
                                About Me
                            </a>
                        </li>
                        {/* Tech Stack */}
                        <li>
                            <a href="#techstack">
                                <i className="fa fa-tools text-base"></i>
                                Tech Stack
                            </a>
                        </li>
                        {/* Projects */}
                        <li>
                            <a href="#projects">
                                <i className="fa fa-rocket text-base"></i>
                                Projects
                            </a>
                        </li>
                        {/* Education */}
                        <li>
                            <a href="#education">
                                <i className="fa fa-user-graduate text-base"></i>
                                Education
                            </a>
                        </li>
                        {/* Connect */}
                        <li>
                            <a href="#connect">
                                <i className="fa fa-envelope text-base"></i>
                                Connect
                            </a>
                        </li>
                    </ul>
                </div>

                {/* End */}
                <div className="navbar-end">
                    {/* Desktop */}
                    <div className="hidden lg:flex">
                        {/* Theme switcher */}
                        <button id="btn-theme-switcher" className="btn btn-ghost pl-2 pr-2">
                            <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" name="app-theme" className="theme-controller" value={switcherTheme}/>

                                {/* sun icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="currentColor" className="swap-off icon">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"/>
                                    <path
                                        d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"/>
                                    <path
                                        d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"/>
                                    <path
                                        d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"/>
                                    <path
                                        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"/>
                                    <path
                                        d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"/>
                                    <path
                                        d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"/>
                                    <path
                                        d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"/>
                                    <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"/>
                                </svg>

                                {/* moon icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="currentColor" className="swap-on icon">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"/>
                                </svg>
                            </label>
                        </button>
                    </div>

                    {/* Mobile */}
                    <div className="lg:hidden">
                        {/* Theme switcher */}
                        <button id="btn-theme-switcher" className="btn btn-ghost pl-2 pr-2">
                            <label className="swap swap-rotate">
                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" name="app-theme" className="theme-controller" value={switcherTheme}/>

                                {/* sun icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="currentColor" className="swap-off icon">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"/>
                                    <path
                                        d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"/>
                                    <path
                                        d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"/>
                                    <path
                                        d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"/>
                                    <path
                                        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"/>
                                    <path
                                        d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"/>
                                    <path
                                        d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"/>
                                    <path
                                        d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"/>
                                    <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"/>
                                </svg>

                                {/* moon icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="currentColor" className="swap-on icon">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"/>
                                </svg>
                            </label>
                        </button>

                        {/* Sidebar toggle */}
                        <label htmlFor="nav-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost px-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </header>

            {/* Navigation Sidebar */}
            <div className="drawer-side lg:hidden">
                <label htmlFor="nav-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 pt-18">
                    {/* About Me */}
                    <li>
                        <h2 className="menu-title">Navigation</h2>
                        <a href="#aboutme" onClick={handleDrawerButton}>
                            <i className="fa fa-address-card text-base"></i>
                            About Me
                        </a>
                    </li>
                    {/* Tech Stack */}
                    <li>
                        <a href="#techstack" onClick={handleDrawerButton}>
                            <i className="fa fa-tools text-base"></i>
                            Tech Stack
                        </a>
                    </li>
                    {/* Projects */}
                    <li>
                        <a href="#projects" onClick={handleDrawerButton}>
                            <i className="fa fa-rocket text-base"></i>
                            Projects
                        </a>
                    </li>
                    {/* Education */}
                    <li>
                        <a href="#education" onClick={handleDrawerButton}>
                            <i className="fa fa-user-graduate text-base"></i>
                            Education
                        </a>
                    </li>
                    {/* Connect */}
                    <li>
                        <a href="#connect" onClick={handleDrawerButton}>
                            <i className="fa fa-envelope text-base"></i>
                            Connect
                        </a>
                    </li>
                </ul>
            </div>

            {/* Main layout */}
            <div className="flex flex-col min-h-screen">
                {/* Main content */}
                <main>
                    <Outlet/>
                </main>
                {/* Footer */}
                <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-8">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - Zoltan 'Tavstal' Solymosi. All rights reserved.</p>
                        <p>Built with <i className="fa-solid fa-heart text-error"></i> and Tailwind CSS.</p>
                    </aside>
                </footer>
            </div>
        </>
    );
};

export default DefaultLayout;
