import React, { useEffect, useRef, useState } from 'react';
import './Skills.css'; // Import CSS file for styling
import WOW from 'wowjs';

function SkillsBar() {
    const [skills] = useState([
        { value: 80 },
        { value: 75 },
        { value: 65 },
        { value: 65 },
        { value: 90 },
        { value: 85 },
        { value: 80 },
        { value: 75 },
        { value: 80 },
        { value: 75 }
    ]);

    const skillsRef = useRef(null);

    useEffect(() => {
        // Initialize WOW.js
        const wow = new WOW.WOW({
            live: false // Disable WOW.js automatic synchronization with the live page
        });
        wow.init();
    }, []);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const animateProgressBars = () => {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = `${skills[index].value}%`;
                bar.querySelector('.percent-label').textContent = `${skills[index].value}%`;
            }, index * 200);
        });
    };

    return (


        <main className="main-page-wrapper">
            <div className="rn-resume-area rn-section-gap section-separator" id="skills" ref={skillsRef}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <h2 className="title">S K I L L S</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--45">
                        <div className="col-lg-12">
                            <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="professional-tab" data-toggle="tab" href="#professional"
                                        role="tab" aria-controls="professional" aria-selected="true"> Skills</a>
                                </li>
                            </ul>
                            <div className="tab-pane show active single-tab-area" id="professional" role="tabpanel"
                                aria-labelledby="professional-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row row--40">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="progress-wrapper">
                                                <div className="content">
                                                    <span className="subtitle">Features</span>
                                                    <h4 className="maintitle">Cloud/Databases</h4>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">MySQL</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft"
                                                                data-wow-duration="0.5s" data-wow-delay=".3s"
                                                                role="progressbar"
                                                                style={{ width: '0%' }}
                                                                // style={{ width: isAnimated ? '80%' : '0%' }}
                                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="percent-label"></span>
                                                            </div>
                                                        </div>
                                                        {/* Add more progress bars here */}
                                                    </div>

                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">MongoDb</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft"
                                                                data-wow-duration="0.6s" data-wow-delay=".4s" // Set animation duration
                                                                role="progressbar"
                                                                style={{ width: '0%' }} // Initially set width to 0
                                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="percent-label"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">PlanetScale</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft"
                                                                data-wow-duration="0.7s" data-wow-delay=".5s" // Set animation duration
                                                                role="progressbar"
                                                                style={{ width: '0%' }} // Initially set width to 0
                                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="percent-label"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">MongoDB Atlas</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft"
                                                                data-wow-duration="0.8s" data-wow-delay=".6s"// Set animation duration
                                                                role="progressbar"
                                                                style={{ width: '0%' }} // Initially set width to 0
                                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="percent-label"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">Photo Editing</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft"
                                                                data-wow-duration="0.9s" data-wow-delay=".7s" // Set animation duration
                                                                role="progressbar"
                                                                style={{ width: '0%' }} // Initially set width to 0
                                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="percent-label"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                                            <div className="progress-wrapper">
                                                <div className="content">
                                                    <span className="subtitle">Features</span>
                                                    <h4 className="maintitle">Technologies</h4>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">Html</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft"
                                                                data-wow-duration="0.5s" data-wow-delay=".3s" // Set animation duration
                                                                role="progressbar"
                                                                style={{ width: '0%' }} // Initially set width to 0
                                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="percent-label"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">CSS</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft"
                                                                data-wow-duration="0.6s" data-wow-delay=".4s" // Set animation duration
                                                                role="progressbar"
                                                                style={{ width: '0%' }} // Initially set width to 0
                                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="percent-label"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">JavaScript</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft"
                                                                data-wow-duration="0.7s" data-wow-delay=".5s" // Set animation duration
                                                                role="progressbar"
                                                                style={{ width: '0%' }} // Initially set width to 0
                                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="percent-label"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">ReactJS</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft"
                                                                data-wow-duration="0.8s" data-wow-delay=".6s" // Set animation duration
                                                                role="progressbar"
                                                                style={{ width: '0%' }} // Initially set width to 0
                                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="percent-label"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">Nodejs</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft"
                                                                data-wow-duration="0.9s" data-wow-delay=".7s" // Set animation duration
                                                                role="progressbar"
                                                                style={{ width: '0%' }} // Initially set width to 0
                                                                aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                                <span className="percent-label"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Repeat the above structure for each skill */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SkillsBar;