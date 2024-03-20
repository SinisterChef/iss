import React from 'react';
import './Footer.css';
import logo from './k_bw_logo.png';

const Footer = () => {
    return (
<div>
    <div className="bg-dark text-light px-4 py-5">
        <div id="contact" className="py-5">
            <h1 className="display-5 fw-bold text-white text-center">Get in Touch <i className="fa-solid fa-paper-plane" aria-hidden="true"></i></h1>
            <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">Want to start a project? Need consulting? Want to talk about dough fermentation? Let me know!</p>
                <form className="form-inline" id="fs-frm" name="contact-form" acceptCharset="utf-8" action="https://formspree.io/f/xeqvpywj" method="post">
                <fieldset id="fs-frm-inputs">
                    <div className="form-group m-3">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" name="name" id="name" required=""></input>
                    </div>
                    <div className="form-group m-3">
                    <label htmlFor="email">Email Address</label>
                    <input className="form-control" type="email" name="_replyto" id="email" required=""></input>
                    </div>
                    <div className="form-group m-3">
                    <label htmlFor="telephone">Phone Number (Optional)</label>
                    <input className="form-control" type="telephone" name="telephone" id="telephone"></input>
                    </div>
                    <div className="form-group m-3">
                    <label htmlFor="message">How can I help?</label>
                    <textarea className="form-control" rows="6" name="message" id="message" required=""></textarea>
                    </div>
                    <input type="hidden" name="_subject" id="email-subject" value="Portfolio Contact Submission"></input>
                </fieldset>
                <button className="btn btn-outline-light" type="submit" value="Get in Touch!">
                    <i className="fa-solid fa-paper-plane"></i>
                    Get in Touch!
                </button>
            </form>
            {/*<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

                <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
            </div>*/}
            </div>
        </div>
        </div>
    <footer className="main-footer mosaic px-5">
    <nav className="navbar">
        <ul className="navbar-nav main-navigation-list">
        <li className="nav-item">
            <a className="nav-link" href="/#work" title="Work">Work</a>
        </li>
            <li className="nav-item">
            <a className="nav-link" href="/vitae.html" title="Work">Vitae</a>
            </li>
        <li className="nav-item">
            <a className="nav-link" href="#contact" title="Contact">Contact</a>
        </li>
        </ul>
        <a className="navbar-brand" href="/" title="Home">
        <img className="brand-icon" alt="Kyle O'Brien logo" src={logo} height="30px" width="30px"></img>
        </a>
    </nav>
    </footer>
</div>
    )
}

export default Footer;