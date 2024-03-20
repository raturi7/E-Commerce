
import React from 'react';
import './LoginPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faKey } from '@fortawesome/free-solid-svg-icons';

export default function LoginPage() {
    <link rel="stylesheet" type="text/css" href="styles.css"></link>
    return (
        <div className="container ">
            <div className="d-flex  justify-content-center align-items-center h-100 ">
                <div className="card ">
                    <div className="card-header text-center m-3">
                        <h1>Login</h1>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group margin-bottom-10">
                                <div className="input-group-prepend ">
                                    <span className="input-group-text "><FontAwesomeIcon className='iconsize' icon={faUser} /></span>
                                </div>
                                <input type="text" className="form-control " placeholder="Username"/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend ">
                                    <span className="input-group-text  "><FontAwesomeIcon className='iconsize' icon={faKey} /></span>
                                </div>
                                <input type="password" className="form-control " placeholder="Password"/>
                            </div>
                            <div className="flex-flow-row m-1 ">
                                <input className ='rememberMeCheckbox' type="checkbox" />
                                <label className ='rememberMe' >Remember Me</label>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Login" className="btn float-right login_btn"/>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account?  <a href="#">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

