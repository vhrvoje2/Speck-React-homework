import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { registerUser } from "../../../api/register";

import {
    Form,
    FormAdditionalLink,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormButton,
} from '../FormStyles';

const RegisterForm = (props) => {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const [message, setMessage] = useState("");

    const onSubmit = data => {
            registerUser({
                "username": data.username,
                "password": data.password,
            }).then(res => {
                    if (res.message){
                        setMessage(res.message);
                    }
                    else{
                        history.push("/login");
                    }
                }
            );
        }

    const registerForm =
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <FormAdditionalLink to="/login">Already registered? Click here to login!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    type="text"
                    id="username"
                    name="username"
                    ref={register({minLength: 5, required: true})} 
                    />
                    {errors.username && errors.username.type === "required" && (<FormInputValidation>Username is required</FormInputValidation>)}
                    {errors.username && errors.username.type === "minLength" && (<FormInputValidation>Username should be at least 5 characters long</FormInputValidation>)}
                    {message && <FormInputValidation>Username already exists</FormInputValidation>}
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    ref={register({minLength: 8, required: true})}
                    />
                    {errors.password && errors.password.type === "required" && (<FormInputValidation>Password is required</FormInputValidation>)}
                    {errors.password && errors.password.type === "minLength" && (<FormInputValidation>Password should be at least 8 characters long</FormInputValidation>)}
            </FormRow>
            <FormButtonRow>
                <FormButton>Register</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {registerForm}
        </>
    );
}

export default RegisterForm;