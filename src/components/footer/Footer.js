import logo from './logo1.jpg'

const Footer = () => {
    return (
        <div class="rn-footer-area rn-section-gap section-separator">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer-area text-center">
                            <div class="logo">
                                <img src={logo} alt="logo" style={{ borderRadius: '100%' }} width="60px" />
                            </div>
                            <p class="description mt--30">© coderRv 2024. All rights reserved by Gajendra <a
                                target="_blank"></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer