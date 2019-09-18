import React from "react";
import { Link } from "react-router-dom"
import { Container, ContainerPass, Input, Pass, Title, CreateAccount, Back } from "./styles";

export default function SignUp() {
    return (
        <Container>
                <Title>Sign Up</Title>
                <Input 
                    type="text" 
                    name="yourname" 
                    placeholder="Your name"
                ></Input>
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                ></Input>
                <Input 
                    type="text" 
                    name="username" 
                    placeholder="Username"
                ></Input>
                <ContainerPass>
                    <Pass 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                    ></Pass>
                    <Pass 
                        type="password" 
                        name="confirmpassword" 
                        placeholder="Confirm password"
                    ></Pass>
                </ContainerPass>
                <CreateAccount 
                    type="submit" 
                    name="submit" 
                    value="Submit"
                >Create Account</CreateAccount>
                <Back 
                    type="submit" 
                    name="submit" 
                    value="Submit"
                ><Link to={'/'}>Back</Link></Back>
        </Container>
    );
}