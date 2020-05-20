import React, { useState } from 'react';
// If the component that needs to acces router props is not direct child
// of the Route component, then you need to import and define useHistory.
// After that you can access history so you can programatically go to the
// desired route.
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { loginUser } from "../../../api/login";

import {
    Form,
    FormAdditionalLink,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormGeneralError,
    FormButton,
} from '../FormStyles';

const LoginForm = (props) => {
    const history = useHistory();
    const {register, handleSubmit, errors} = useForm();
    const [error, setError] = useState("");

    const onSubmit = data => {
        loginUser({
            "username": data.username,
            "password": data.password
        }).then(res => {
            if (res.token){
                localStorage.setItem('token', `Bearer ${res.token}`);
                history.push("/");
            }
            else{
                setError(res.message);
            }
        })
    }

    const loginForm =
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <FormAdditionalLink to="/register">You don't have an account? Click here to register!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    type="text"
                    id="username"
                    name="username"
                    ref={register({required: true})}    
                    />
                    {errors.username && errors.username.type === "required" && (<FormInputValidation>Username is required</FormInputValidation>)}
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    ref={register({required: true})}
                    />
                    {errors.password && errors.password.type === "required" && (<FormInputValidation>Password is required</FormInputValidation>)}
            </FormRow>
            <FormButtonRow>
                <FormButton>Login</FormButton>
            </FormButtonRow>
            <FormGeneralError>
                {error ? "Username or password are incorrect!" : null}
            </FormGeneralError>
        </Form>;

    return (
        <>
            {loginForm}
        </>
    );
}

export default LoginForm;