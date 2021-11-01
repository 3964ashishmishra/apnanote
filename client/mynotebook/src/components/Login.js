import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

const Login = () => {

    const [credential, setCredential] = useState({email:"",password:""})
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:8000/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({email:credential.email,password:credential.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.sucess){
            localStorage.setItem('token',json.authToken);
             history.push("/")

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
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" 
                    onChange={onHnadle} id="exampleInputEmail1"
                    name="email"
                    aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" 
                    name="password"
                    onChange={onHnadle}
                    id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-success"  onClick={handleSubmit}>Login</button>
            </form>
        </div>
    </>
)
}

export default Login
