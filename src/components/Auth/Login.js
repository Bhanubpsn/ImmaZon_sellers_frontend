import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'

const Login = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const [rememberMe, setRememberMe] = useState(true); // Initial state is set to `true`

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe); // Toggle the state when the checkbox changes
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let message = document.getElementById('message');
        props.setprogress(30);
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        props.setprogress(50);
        const json = await response.json();
        props.setprogress(70);
        console.log(json);
        props.setprogress(100);
        if (json.success) {
            message.setAttribute("hidden", "true");
            if (rememberMe) {
                // If the "Remember me" checkbox is checked, store the token in local storage
                localStorage.setItem('token', json.authtoken);
                localStorage.setItem('id', json.sellerid);
            }
            else{
                sessionStorage.setItem('token', json.authtoken);
                sessionStorage.setItem('id', json.sellerid);
            }
            navigate("/");
            window.location.reload()
            console.log("Logged In");
            // props.showAlert("Logged In","success");
        }
        else {
            // props.showAlert("Invalid details","danger");
            message.removeAttribute("hidden");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <section className="">

                <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ "backgroundColor": "hsl(0, 0%, 96%)" }}>
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="bi">
                                <img src='https://firebasestorage.googleapis.com/v0/b/immazon-83e9e.appspot.com/o/login-removebg-preview.png?alt=media&token=c124c472-351b-44e2-b236-44c7954c6c95' width="150" height="80" alt='poor connection'/>
                            </div>
                            
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    The best offer <br />
                                    <span className="text-primary">for your business</span>
                                </h1>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <div className="card-body py-5 px-md-5">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-outline mb-4">
                                                <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                            </div>


                                            <div className="form-outline mb-4">
                                                <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name="password" />
                                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                            </div>


                                            <div className="form-check d-flex justify-content-center mb-4">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked={rememberMe} onChange={handleCheckboxChange} />
                                                <label className="form-check-label" htmlFor="form2Example33">
                                                    Remember me
                                                </label>
                                            </div>

                                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                                Log In
                                            </button>
                                            <div className="container d-flex justify-content-center">
                                                <p id="message" style={{'color' : 'red'}} hidden>Wrong Credentials</p>
                                            </div>
                                        </form>
                                        <div >
                                                Don't Have an Account? 
                                                <a href='/signup'>Sign Up</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



        </>

    )
}

export default Login