import contact from './contact1.png'
import FeatherIcon from 'feather-icons-react';
// import Swal from 'sweetalert2';
import { useState, useEffect } from 'react'
import './Contact.css'



const Contact = () => {

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    })

    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!data.name || !data.phone || !data.email || !data.subject || !data.message) {
            setError('All fields are required...!')
            return;
        }

        const emailContent = `Hi,my name is ${data.name},
Phone: ${data.phone},
${data.message}`;

        const mailToLink = `mailto:gajendra34940@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(emailContent)}`;

        window.location.href = mailToLink;
    }





    return (
        <main class="main-page-wrapper">
            <div class="rn-contact-area rn-section-gap section-separator" id="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title text-center">
                                <span class="subtitle">Contact</span>
                                <h2 class="title">C O N T A C T &nbsp; M E</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
                        <div class="col-lg-5">
                            <div class="contact-about-area">
                                <div class="thumbnail">
                                    <img src={contact} alt="contact-img" />
                                </div>
                                <div class="title-area">
                                    <h4 class="title">Gajendra Mahavar</h4>
                                    <span>Full Stack Developer
                                        {/* <LovesToCodeMore /> */}
                                    </span>
                                </div>
                                <div class="description">
                                    <p>Connect with me via and call in to my account.</p>
                                    <span class="phone">Phone: <a>+91 9664119195</a></span>
                                    <span class="mail">Email: <a>gajendra34940@gmail.com</a></span>
                                </div>
                                <div class="social-area">
                                    <div class="name">FIND WITH ME</div>
                                    <div class="social-icone">
                                        <a href="https://www.instagram.com/gajendra.mahavar"><FeatherIcon icon="instagram" /></a>
                                        <a href="https://www.linkedin.com/in/gajendra-mahavar-893010256"><FeatherIcon icon="linkedin" /></a>
                                        <a href="https://github.com/Gajendra34"><FeatherIcon icon="github" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos-delay="600" class="col-lg-7 contact-input">
                            <div class="contact-form-wrapper">
                                {/* <div className='text-warning'>
                                    {error && error}
                                </div> */}
                                <div class="introduce">
                                    <form onSubmit={handleSubmit} class="rnt-contact-form rwt-dynamic-form row" id="contact-form">

                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label for="contact-name">Your Name</label>
                                                <input onChange={e => setData({ ...data, name: e.target.value })} class="form-control form-control-lg" name="contact-name"
                                                    id="contact-name" type="text" />
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label for="contact-phone">Phone Number</label>
                                                <input onChange={e => setData({ ...data, phone: e.target.value })} class="form-control" name="contact-phone" id="contact-phone"
                                                    type="text" />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label for="contact-email">Email</label>
                                                <input onChange={e => setData({ ...data, email: e.target.value })} class="form-control form-control-sm" id="contact-email"
                                                    name="contact-email" type="email" />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label for="subject">subject</label>
                                                <input onChange={e => setData({ ...data, subject: e.target.value })} class="form-control form-control-sm" id="subject" name="subject"
                                                    type="text" />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label for="contact-message">Your Message</label>
                                                <textarea onChange={e => setData({ ...data, message: e.target.value })} name="contact-message" id="contact-message" cols="30"
                                                    rows="10"></textarea>
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div className='text-danger'>
                                                {error && error}
                                            </div>
                                            <button name="submit" type="submit" id="submit" class="rn-btn">
                                                <span>SEND MESSAGE</span>
                                                <FeatherIcon icon="arrow-right" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>


    )
}


export default Contact