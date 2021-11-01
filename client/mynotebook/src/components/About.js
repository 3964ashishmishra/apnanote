import React from 'react'
// import NoteContext from '../context/notes/notecontext'



const About = () => (
    <>
        <div className="about-section">
            <h1>About MyNotebook</h1>
            <p>You Can Make Your Note Easily Here | No One Can See Your Notes Other Than You | You Can Easily Manage Yur Notes</p>
            <p></p>
        </div>

        <h2 style={{ textAlign: "center" , color: "gray"}}>Created By</h2>
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="card">
                    <img src="https://scontent.fbom19-1.fna.fbcdn.net/v/t1.6435-9/241044763_2961241704191881_5193406408396774944_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7WdhJFeDw2AAX_vhASC&_nc_ht=scontent.fbom19-1.fna&oh=35717f1899ac700f6d0736fed614081d&oe=61A49659" alt="Jane" style={{ width: "100%" }} />
                    <div class="container">
                        <h2>Ashish Mishra</h2>
                        <p class="title">BE in Computer Engineering</p>
                        <p>Web Developer | Java Developer</p>
                        <p>mynotebook@gmail.com.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                </div>
            </div>
        </div>

    </>

)

export default About
