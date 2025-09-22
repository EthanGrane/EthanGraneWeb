export default function Header() {
    return (
        <header className="fixed top-0 w-full h-16 bg-black text-white shadow-md z-50">
            <nav className="container mx-auto flex items-center h-full justify-between px-6">
                {/* Logo o título */}
                <div className="text-2xl font-bold">
                    Ethan Grané
                </div>

                {/* Links a secciones */}
                <ul className="flex space-x-6">
                    <li>
                        <a href="#about" className="hover:text-yellow-400 transition-colors">
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#assets" className="hover:text-yellow-400 transition-colors">
                            Assets
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-yellow-400 transition-colors">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-yellow-400 transition-colors">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
