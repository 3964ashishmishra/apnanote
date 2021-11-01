import React from 'react'
import {Link,useHistory,useLocation} from 'react-router-dom'



const Navbar = () => {

    // using uselocation from react-router-dom to use active class on Link
    let location = useLocation();
    

    const history = useHistory();
    const hanleLogout = ()=>{
        localStorage.removeItem('token');
        history.push("/login")
    }


    
    
    return (
        <>
    
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">MyNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link  ${location.pathname==="/"?"active":" "}` } aria-current="page" to="/">Home</Link>
                            </li>
                           
                            <li className="nav-item">
                                {localStorage.getItem('token')?
                                <Link className={`nav-link  ${location.pathname==="/about"?"active":" "}` }  to="/about">About</Link>:
                                <Link className={`nav-link  ${location.pathname==="/about"?"active":" "}` }  to="/login">About</Link>}
                            </li>
                        </ul>         
                    </div>


                     
                    {localStorage.getItem('token')?<button  onClick={hanleLogout} className="btn btn-outline-info btn-sm mx-1" to="/logout" >Logout</button>:
                    <div className="auth " >
                    <Link className="btn btn-outline-info btn-sm mx-1" to="/login">Login</Link>
                    <Link className="btn btn-outline-info btn-sm mx-1" to="/signup">Signup</Link> 
                    </div>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
