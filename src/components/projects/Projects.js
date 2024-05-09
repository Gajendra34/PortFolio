import web1 from './web1.png'
import web2 from './web2.png'
import web3 from './web3.png'
import web4 from './web4.png'
import FeatherIcon from 'feather-icons-react';

const Projects = () => {
    return (

        // < !--Start Portfolio Area-- >
        <main class="main-page-wrapper">
            <div class="rn-portfolio-area rn-section-gap section-separator" id="projects">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title text-center">
                                <span class="subtitle">Visit my Projects and keep your feedback</span>
                                <h2 class="title">P R O J E C T S</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row row--25 mt--10 mt_md--10 mt_sm--10">
                        {/* <!-- Start Single Portfolio --> */}
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
                            class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div class="rn-portfolio" data-toggle="modal" data-target="#nav1">
                                <div class="inner" >
                                    <div class="thumbnail" style={{ overflow: 'auto', height: '200px' }}>
                                        <a href="javascript:void(0)">
                                            <img src={web1} style={{ height: '156px' }} alt="Personal Portfolio Images" />
                                        </a>
                                    </div>
                                    <div class="content">
                                        <div class="category-info">
                                            <div class="category-list">
                                                <a href="javascript:void(0)">UI UX Design of Website</a>
                                            </div>
                                            <div class="meta">
                                                <span><a href="javascript:void(0)"><i class="feather-heart"></i></a>
                                                    10</span>
                                            </div>
                                        </div>
                                        <h4 class="title"><a href="javascript:void(0)"> AirRv Travel Website<i
                                            class="feather-arrow-up-right"></i></a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Portfolio -->

                    <!-- Start Single Portfolio --> */}
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
                            class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div class="rn-portfolio" data-toggle="modal" data-target="#nav2">
                                <div class="inner">
                                    <div class="thumbnail" style={{ overflow: 'auto', height: '200px' }}>
                                        <a href="javascript:void(0)">
                                            <img src={web2} style={{ height: '156px' }} alt="Personal Portfolio Images" />
                                        </a>
                                    </div>
                                    <div class="content">
                                        <div class="category-info">
                                            <div class="category-list">
                                                <a href="javascript:void(0)">UI UX Design of Website</a>
                                            </div>
                                            <div class="meta">
                                                <span><a href="javascript:void(0)"><i class="feather-heart"></i></a>
                                                    7</span>
                                            </div>
                                        </div>
                                        <h4 class="title"><a href="javascript:void(0)">rVm E-commerce Website <i
                                            class="feather-arrow-up-right"></i></a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Portfolio -->

                    <!-- Start Single Portfolio --> */}
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
                            class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div class="rn-portfolio" data-toggle="modal" data-target="#nav3">
                                <div class="inner">
                                    <div class="thumbnail" style={{ overflow: 'auto', height: '200px' }}>
                                        <a href="javascript:void(0)">
                                            <img src={web3} style={{ height: '156px' }} alt="Personal Portfolio Images" />
                                        </a>
                                    </div>
                                    <div class="content">
                                        <div class="category-info">
                                            <div class="category-list">
                                                <a href="javascript:void(0)">UI UX Design of Website</a>
                                            </div>
                                            <div class="meta">
                                                <span><a href="javascript:void(0)"><i class="feather-heart"></i></a>
                                                    5</span>
                                            </div>
                                        </div>
                                        <h4 class="title"><a href="javascript:void(0)">Todo-List Website <i
                                            class="feather-arrow-up-right"></i></a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Portfolio -->

                    <!-- Start Single Portfolio --> */}
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
                            class="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
                            <div class="rn-portfolio" data-toggle="modal" data-target="#nav4">
                                <div class="inner">
                                    <div class="thumbnail" style={{ overflow: 'auto', height: '200px' }}>
                                        <a href="javascript:void(0)">
                                            <img src={web4} style={{ height: '156px' }} alt="Personal Portfolio Images" />
                                        </a>
                                    </div>
                                    <div class="content">
                                        <div class="category-info">
                                            <div class="category-list">
                                                <a href="javascript:void(0)">UI UX Design of Website</a>
                                            </div>
                                            <div class="meta">
                                                <span><a href="javascript:void(0)"><i class="feather-heart"></i></a>
                                                    6</span>
                                            </div>
                                        </div>
                                        <h4 class="title"><a href="javascript:void(0)">Blog-App Website <i
                                            class="feather-arrow-up-right"></i></a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}



            {/* <!-- Modal Portfolio Body area Start-- > */}
            <div class="modal fade" id="nav1" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><FeatherIcon icon="x" /></span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">

                                <div class="col-lg-6">
                                    <div class="portfolio-popup-thumbnail">
                                        <div class="image">
                                            <img class="w-100" src={web1} alt="slide" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="text-content">
                                        <h3>
                                            <span>Featured - Design</span> AirRv
                                        </h3>
                                        <p class="mb--30">Designed website portal of AirRv using bootstrap,ReactJS, NodeJS
                                            and MongoDB.</p>
                                        <div class="button-group mt--20">
                                            <a href="#" class="rn-btn thumbs-icon">
                                                <span>LIKE THIS </span>
                                                <FeatherIcon icon="thumbs-up" />
                                            </a>
                                            <a href="https://airrv-travel-3y26.onrender.com/" target='_blank'
                                                class="rn-btn">
                                                <span>VIEW PROJECT</span>
                                                <FeatherIcon icon="chevron-right" />

                                            </a>
                                        </div>

                                    </div>
                                    {/* <!-- End of .text-content --> */}
                                </div>
                            </div>
                            {/* <!-- End of .row Body--> */}
                        </div>
                    </div>
                </div>
            </div >
            {/* < !--End Modal Portfolio area-- > */}

            {/* < !--Modal Portfolio Body area Start-- > */}
            <div class="modal fade" id="nav2" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><FeatherIcon icon="x" /></span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">

                                <div class="col-lg-6">
                                    <div class="portfolio-popup-thumbnail">
                                        <div class="image">
                                            <img class="w-100" src={web2} alt="slide" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="text-content">
                                        <h3>
                                            <span>Featured - Design</span> rVm
                                        </h3>
                                        <p class="mb--30">Designed website portal of rVm using bootstrap,ReactJS, NodeJS
                                            and MySQL.</p>
                                        <div class="button-group mt--20">
                                            <a href="#" class="rn-btn thumbs-icon">
                                                <span>LIKE THIS </span>
                                                <FeatherIcon icon="thumbs-up" />
                                            </a>
                                            <a href="https://rvmecommerce.onrender.com/" target="_blank" class="rn-btn">
                                                <span>VIEW PROJECT</span>
                                                <FeatherIcon icon="chevron-right" />
                                            </a>
                                        </div>

                                    </div>
                                    {/* <!-- End of .text-content --> */}
                                </div>
                            </div>
                            {/* <!-- End of .row Body--> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--End Modal Portfolio area-- > */}

            {/* < !--Modal Portfolio Body area Start-- > */}
            <div class="modal fade" id="nav3" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><FeatherIcon icon="x" /></span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">

                                <div class="col-lg-6">
                                    <div class="portfolio-popup-thumbnail">
                                        <div class="image">
                                            <img class="w-100" src={web3} alt="slide" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="text-content">
                                        <h3>
                                            <span>Featured - Design</span> Todo-List
                                        </h3>
                                        <p class="mb--30">Designed website portal of Todo-List using Tailwind CSS,ContextAPI and ReactJS.</p>
                                        <div class="button-group mt--20">
                                            <a href="#" class="rn-btn thumbs-icon">
                                                <span>LIKE THIS </span>
                                                <FeatherIcon icon="thumbs-up" />
                                            </a>
                                            <a href="https://todo-list-pi-ten-20.vercel.app/" target="_blank" class="rn-btn">
                                                <span>VIEW PROJECT</span>
                                                <FeatherIcon icon="chevron-right" />
                                            </a>
                                        </div>

                                    </div>
                                    {/* <!-- End of .text-content --> */}
                                </div>
                            </div>
                            {/* <!-- End of .row Body--> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--End Modal Portfolio area-- > */}

            {/* < !--Modal Portfolio Body area Start-- > */}
            <div class="modal fade" id="nav4" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><FeatherIcon icon="x" /></span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">

                                <div class="col-lg-6">
                                    <div class="portfolio-popup-thumbnail">
                                        <div class="image">
                                            <img class="w-100" src={web4} alt="slide" />
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="text-content">
                                        <h3>
                                            <span>Featured - Design</span> Blog-App
                                        </h3>
                                        <p class="mb--30">Designed website portal of Blog-App using Tailwind CSS,Redux,AppWrite(BAAS),TinyMCE(RTE), and ReactJS + Vite.</p>
                                        <div class="button-group mt--20">
                                            <a href="#" class="rn-btn thumbs-icon">
                                                <span>LIKE THIS </span>
                                                <FeatherIcon icon="thumbs-up" />
                                            </a>
                                            <a href="https://blog-app-delta-weld.vercel.app/" target="_blank" class="rn-btn">
                                                <span>VIEW PROJECT</span>
                                                <FeatherIcon icon="chevron-right" />
                                            </a>
                                        </div>

                                    </div>
                                    {/* <!-- End of .text-content --> */}
                                </div>
                            </div>
                            {/* <!-- End of .row Body--> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--End Modal Portfolio area-- > */}
        </main>
    )
}

export default Projects