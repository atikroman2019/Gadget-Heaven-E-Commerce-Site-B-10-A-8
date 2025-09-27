import React from 'react';

const Footer = () => {
    return (

        <div className='max-w-5xl mx-auto mt-10 '>
            <div className='text-center'>
                <h2 className='text-3xl font-bold mb-5'>Gadget Heaven</h2>
                <p className='mb-5'>Leading the way in cutting-edge technology and innovation.</p>
                <hr />

            </div>
            <footer className="footer sm:footer-horizontal  p-10">



                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;