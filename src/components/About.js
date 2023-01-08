import React from 'react'
import Navbar from "./Navbar";
import '../styles/about.css';
import about from '../images/about.jpg'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import Alertss from "./Alertss";

function About() {
    return (
        <div>
            <Navbar />
            <Alertss />
        
            <div className="container mt-5 ">
                
                <div className="row login mt-5 mb-5 p-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src={about} alt="about-awesome" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Welcome to <span style={{ color: "#ff7900" }}>ApnaNote</span> </h2>
                        <p>
                             ApnaNote is a web based application. Which is available on cloud. You can operate your notes from anywhere in th world. You can perform operations like create, delete, edit, and read on your personal note. Your all notes are saved in cloud.
                        </p>
                        <div className="d-flex justify-content-center">
                            <Button className='create-button' component={Link} to="/new" variant="contained"  style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Button>
                        </div>
                    </div>
                </div>

            </div>

            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name"><span style={{ color: "#9C27B0" }}>Apna</span>Note</span>
                        </div>
                        <div className="media-icons">
                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fab fa-twitter"></i></Link>
                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                            <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="/"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2021 <Link to="/">ApnaNote</Link>All rights reserved @created by Ashish Mishra</span>
                        <span className="policy_terms">
                            <Link to="/">Privacy policy</Link>
                            <Link to="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default About
