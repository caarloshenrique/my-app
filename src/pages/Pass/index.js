import React from "react";
import { Link } from "react-router-dom"
import { Container, Input, Title, SendMsg, Back } from "./styles";

export default function Pass() {
    return (
        <Container>
                <Title>Forgot Password</Title>
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                ></Input>
                <SendMsg 
                    type="submit" 
                    name="submit" 
                    value="Submit"
                >Send Message</SendMsg>
                <Back 
                    type="submit" 
                    name="submit" 
                    value="Submit"
                ><Link to={'/'}>Back</Link></Back>
        </Container>
    );
}