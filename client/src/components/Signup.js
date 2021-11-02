import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

const Signup = () => {

    const [credential, setCredential] = useState({name:"",email:"",password:"",cpassword:""})
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("/auth/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({name:credential.name,email:credential.email,password:credential.password,cpassword:credential.cpassword})
        });
        const json = await response.json();
        console.log(json);
        if(json.sucess){
            localStorage.setItem('token',json.authToken)
             history.push("/login")
        }
        else{
            alert("Invalid Credential")
        }
    }

    const onHnadle = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }




    return (
        <>
            <div className=" my-5 mx-5">
            <form>
            <div className="mb-3  ">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" 
                    onChange={onHnadle} id="name"
                    name="name"
                    aria-describedby="emailHelp" />

                </div>
                <div className="mb-3  ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" 
                    onChange={onHnadle} id="email"
                    name="email"
                    aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" 
                    name="password"
                    onChange={onHnadle}
                    id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" 
                    name="cpassword"
                    onChange={onHnadle}
                    id="cpassword" />
                </div>
                <button type="submit" className="btn btn-success"  onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
        </>
    )
}

export default Signup
