import React, { Component } from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field id required
            </div>
        );
    }
};

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        }
    }
    render() {
        return (
            <div>Login</div>
        )
    }
}
export default Login;
