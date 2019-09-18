import React from "react";
import { Link } from "react-router-dom"
import { Container, Input, Title, SignIn, SignUp, ForgotPass } from "./styles";

export default function Login() {
    return (
        <Container>
                <Title>Login</Title>
                <Input 
                    type="text" 
                    name="username" 
                    placeholder="Username"
                ></Input>
                <Input 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                ></Input>
                <SignIn 
                    type="submit" 
                    name="submit" 
                    value="Submit" 
                    to={`/sign-up`}
                >Sign In</SignIn>
                
                    <SignUp 
                        type="submit" 
                        name="submit" 
                        value="Submit"
                    ><Link to={'/sign-up'}>Sign Up </Link>
                    </SignUp>
              
                <ForgotPass 
                    type="submit" 
                    name="submit" 
                    value="Submit"
                ><Link to={'/forgot-password'}>Forgot Password</Link></ForgotPass>
        </Container>
    );
}