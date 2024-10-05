import { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { LINKS } from "../constants/index";

const Navabar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
<nav className="fixed top-0 left-0 w-full border-b-2 z-50 bg-gradient-to-r from-white to-purple-300 hover:from-blue-500 hover:to-purple-300 transition duration-300 ease-in-out">
<div className="max-w-7xl mx-auto flex justify-between items-center py-8 ">
                <div className="pl-2">
                    <a href="#">
                        <img
                            src={logo}
                            width={150}
                            height={15}
                            alt="hertzPage"
                        />
                    </a>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl pr-2 focus:outline-none"
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                    </button>
                </div>
                <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
                    {LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.link}
                            className="uppercase text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } md:hidden absolute bg-neutral-50 w-full py-5 px-4 border-b-4`}
            >
                {LINKS.map((link, index) => (
                    <a
                        key={index}
                        href={link.link}
                        className="uppercase text-lg font-medium block py-2 tracking-wide"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navabar;
