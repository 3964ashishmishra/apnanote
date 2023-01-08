import React from 'react'
import noteImg from '../images/Home.jpg'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import "../styles/home.css"
import Notes from './Notes';
import Navbar from "./Navbar";
import Alertss from "./Alertss";

function Home() {
    console.log('hii')

    return (
        <>
            <Navbar />
            <Alertss />
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="display-1 pt-5 ps-5 respo"><span style={{ color: "#ff7900" }}>Apna</span>Note</h1>
                        <p className="ps-5 respo" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Your note will be on cloud - safe and secure</p>
                        <p className="ps-5 mt-3 respo" style={{ fontSize: "1rem" }}>ApnaNote is a online web platform where you can create your pesonal note. Note is secure and safe you can access your from anywhere in the world.</p>
                        <div className="d-flex justify-content-center">
                            <Button className='create-button' component={Link} to="/new" variant="contained"  style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Button>
                        </div>
                    </div>
                    <div className="col-md-7 d-flex flex-column align-items-center">
                        <img className="img-fluid" style={{width: "75%"}} src={noteImg} alt="apnanote" />
                    </div>
                </div>

                <Notes />
            </div>
        </>
    )
}

export default Home
