import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home" className="flex items-center text-2xl font-serif">
                    <img src={logo} alt="Logo" className="me-4" width={50} height={30} /> mmsalmanfaris</a>
            </div>
            <div>
                <a href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="bg-white rounded-full p-4 text-sm text-stone-800">
                    Download Resume
                </a>
            </div>
        </nav>
    )
}

export default Navbar