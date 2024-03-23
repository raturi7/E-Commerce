
import React from 'react';
import './SignupPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faKey,faPhone } from '@fortawesome/free-solid-svg-icons';
import LoginPage from '../loginPage/LoginPage';
export default function SignupPage() {
    <link rel="stylesheet" type="text/css" href="styles.css"></link>
    return (
        <div className="container ">
            <div className="d-flex  justify-content-center align-items-center h-100 ">
                <div className="card ">
                    <div className="card-header text-center m-3">
                        <h1>Signup</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group margin-bottom-10">
                                <div className="input-group-prepend ">
                                    <span className="input-group-text "><FontAwesomeIcon className='iconsize' icon={faUser} /></span>
                                </div>
                                <input type="email"  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" className="form-control " placeholder="Username" required='true'/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend ">
                                    <span className="input-group-text  "><FontAwesomeIcon className='iconsize' icon={faKey} /></span>
                                </div>
                                <input type="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className="form-control "  placeholder="Password" required='true'/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend ">
                                    <span className="input-group-text  "><FontAwesomeIcon className='iconsize' icon={faPhone} /></span>
                                </div>
                                <input type="text" pattern= "[0-9].{9}" className="form-control " placeholder="Mobile number" required='true'/>
                            </div>
                            <div className="form-group">
                                <input type="submit" onclick= 'LoginPage()' value="Signup" className="btn float-right signup_btn"/>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Already a member?  <a href="#">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

