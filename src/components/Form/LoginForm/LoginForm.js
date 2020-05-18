import React, { useState } from 'react';
// If the component that needs to acces router props is not direct child
// of the Route component, then you need to import and define useHistory.
// After that you can access history so you can programatically go to the
// desired route.
import { useHistory } from 'react-router-dom';

import { loginUser } from "../../../api/login";

import {
    Form,
    FormAdditionalLink,
    FormGeneralError,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormSubmitSuccess,
    FormButton,
} from '../FormStyles';

const LoginForm = (props) => {
    const history = useHistory();
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const [response, setResponse] = useState({
        message: "",
        token: "",
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await loginUser(data);

            if (result.token){
                localStorage.setItem("token", `Bearer ${result.token}`);
                
                setTimeout(() => {
                    history.push("/");
                }, 1500);
            }
            else{
                console.log(result);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const loginForm =
        <Form onSubmit={handleSubmit}>
            <FormRow>
                <FormAdditionalLink to="/register">You don't have an account? Click here to register!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    type="text"
                    id="username"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    required />
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required />
            </FormRow>
            <FormButtonRow>
                <FormButton>Login</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {loginForm}
        </>
    );
}

export default LoginForm;