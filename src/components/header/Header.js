import logo from './logo2.png';
import FeatherIcon from 'feather-icons-react';
import { useState, useEffect } from 'react';
// import './Header.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Function to toggle the mobile menu
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Function to close the mobile menu
    const closeNavbar = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div class="template-color-1 spybody" data-spy="scroll" data-target=".navbar-example2" data-offset="70">
            <header class={`template-color-1 spybody ${isScrolled ? 'sticky' : ''} rn-header haeder-default black-logo-version header--fixed header--sticky`}>
                <div class="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
                    <div class="col-lg-2 col-6">
                        <div class="header-left">
                            <div class="logo">
                                <a href="index.html">
                                    <img src={logo} alt="logo" style={{ borderRadius: "100%" }} width="60px" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-10 col-6">
                        <div class="header-center">
                            <nav id="sideNav" class="mainmenu-nav navbar-example2 d-none d-xl-block">
                                <ul class="primary-menu nav nav-pills">
                                    <li class="nav-item"><a class="nav-link smoth-animation active" href="#home">Home</a></li>
                                    <li class="nav-item"><a class="nav-link smoth-animation" href="#education">EDUCATION</a>
                                    </li>
                                    <li class="nav-item"><a class="nav-link smoth-animation" href="#skills">SKILLS</a></li>
                                    <li class="nav-item"><a class="nav-link smoth-animation" href="#projects">PROJECTS</a></li>
                                    <li class="nav-item"><a class="nav-link smoth-animation" href="#contact">CONTACT</a></li>
                                </ul>
                            </nav>
                            <div class="header-right">
                                <div class="hamberger-menu d-block d-xl-none" onClick={toggleNavbar}>
                                    <i id="menuBtn" class="feather-menu humberger-menu"></i>
                                </div>
                                <div class="close-menu d-block" onClick={closeNavbar}>
                                    <span class="closeTrigger">
                                        <FeatherIcon icon="x" />
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            <div className={`popup-mobile-menu ${isOpen ? 'menu-open' : ''}`}>
                <div class="inner" style={{ backgroundColor: "#212428" }}>
                    <div class="menu-top">
                        <div class="menu-header">
                            <a class="logo" href="index.html">
                                <img src={logo} alt="logo" style={{ borderRadius: "100%" }} width="60px" />
                            </a>
                            <div class="close-button" onClick={closeNavbar}>
                                <button class="close-menu-activation close"><FeatherIcon icon="x" /></button>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <ul class="primary-menu nav nav-pills">
                            <li class="nav-item"><a class="nav-link smoth-animation active" onClick={closeNavbar} href="#home">Home</a></li>
                            <li class="nav-item"><a class="nav-link smoth-animation" onClick={closeNavbar} href="#education">EDUCATION</a>
                            </li>
                            <li class="nav-item"><a class="nav-link smoth-animation" onClick={closeNavbar} href="#skills">SKILLS</a></li>
                            <li class="nav-item"><a class="nav-link smoth-animation" onClick={closeNavbar} href="#projects">PROJECTS</a></li>
                            <li class="nav-item"><a class="nav-link smoth-animation" onClick={closeNavbar} href="#contact">CONTACT</a></li>
                        </ul>
                        <div class="social-share-style-1 mt--40">
                            <span class="title">find with me</span>

                            <ul class="social-share d-flex liststyle">
                                <li class="instagram"><a href="https://www.instagram.com/thisis.ravi34"><FeatherIcon icon="instagram" /></a>
                                </li>
                                <li class="linkedin"><a href="https://www.linkedin.com/in/gajendra-mahavar-893010256"><FeatherIcon icon="linkedin" /></a>
                                </li>
                                <li class="github"><a href="https://github.com/Gajendra34"><FeatherIcon icon="github" /></a>
                                </li>
                            </ul>
                            <ul class="social-share d-flex liststyle">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header