import profile from './profile.jpg'
import FeatherIcon from 'feather-icons-react';
import Typed from 'typed.js'
import React from 'react'


const Slider = () => {

    React.useEffect(() => {
        const typed = new Typed(".cd-words", {
            strings: ["Full Stack Developer.", "&lt;LovesToCodeMore/&gt;."],
            typeSpeed: 50,
            backSpeed: 40,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);


    return (
        <>
            <main class="main-page-wrapper">
                <div id="home" class="rn-slider-area">
                    <div class="slide slider-style-1">
                        <div class="container">
                            <div class="row row--30 align-items-center">
                                <div class="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                                    <div class="content">
                                        <div class="inner">
                                            <span class="subtitle">Welcome to my world</span>
                                            <h1 class="title">Hi, I’m <span>Gajendra</span><br />
                                                <span class="header-caption" id="page-top">
                                                    <span class="cd-headline clip is-full-width">
                                                        <span>a&nbsp;</span>
                                                        <span class="cd-words">

                                                        </span>
                                                    </span>
                                                </span>
                                            </h1>

                                            <div>
                                                <p class="description">Hello, my name is Gajendra Mahavar, and I am a passionate
                                                    Web Developer. With a strong background in Computer Science and
                                                    Engineering from Sardar Vallabhbhai National Institute of Technology (NIT
                                                    SURAT), I have developed expertise in a wide range of technologies including
                                                    JavaScript, C, C++, ReactJS, TypeScript, NextJS, NodeJS, MongoDB, SQL, ExpressJS and Appwrite.
                                                    Throughout my career, I have been driven by a desire to tackle challenges
                                                    and apply my knowledge and skills to create impactful projects. I have
                                                    successfully coordinated team projects and developed personal frontend
                                                    projects and full-stack applications, which have allowed me to strengthen my
                                                    abilities in problem-solving, collaboration, and project management.</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                                                <div class="social-share-inner-left">
                                                    <span class="title">find with me</span>
                                                    <ul class="social-share d-flex liststyle">
                                                        <li class="instagram"><a
                                                            href="https://www.instagram.com/gajendra.mahavar"><FeatherIcon icon="instagram" /></a>
                                                        </li>
                                                        <li class="linkedin"><a
                                                            href="https://www.linkedin.com/in/gajendra-mahavar-893010256"><FeatherIcon icon="linkedin" /></a>
                                                        </li>
                                                        <li class="facebook"><a href="https://github.com/Gajendra34"><FeatherIcon icon="github" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                                                <div class="social-share-inner-left">
                                                    <span class="title">Coding Profile</span>
                                                    <ul class="social-share d-flex liststyle">
                                                        <li class="instagram"><a
                                                            href="https://leetcode.com/u/gajendra34/"><img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="leetcode"/></a>
                                                        </li>
                                                        <li class="linkedin"><a
                                                            href="https://www.codechef.com/users/gajendra349"><img width="30" height="30" src="https://img.icons8.com/color/48/codechef.png" alt="codechef"/></a>
                                                        </li>
                                                        <li class="facebook"><a href="https://atcoder.jp/users/gajendra349"><img width="30" height="30" src='https://img.atcoder.jp/assets/logo.png' alt="atcoder"/></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="order-1 order-lg-2 col-lg-5">
                                    <div class="thumbnail">
                                        <div class="inner">
                                            <img src={profile} alt="Personal Portfolio Images" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Slider