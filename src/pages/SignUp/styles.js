import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    padding: 0 30%;

    @media only screen and (max-width: 600px) {
        padding: 0 5%;
    }

    @media only screen and (max-width: 900px) {
        padding: 0 8%;
    }

    @media only screen and (max-width: 1000px) {
        padding: 0 10%;
    }
`;

export const ContainerPass = styled.div`
    @media only screen and (min-width: 900px) {
      display: flex;
      justify-content: space-between;
    }
`;


export const Title = styled.h5`
    color: #445FE8;
    font-size: 35px;
    margin-bottom: 60px;
`;

export const Input = styled.input`
    padding: 14px;
    border: 1px solid #ccc;
    border-radius: 9px;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    color: #C8C9CF;
    font-size: 20px;
`;

export const Pass = styled(Input)`
    width: 49%;

    @media only screen and (max-width: 900px) {
      width: 100%;
    }
`;

export const Button = styled.button`
    width: 50%;
	border: 0 none;
	border-radius: 9px;
	cursor: pointer;
	padding: 15px;
    margin: 12px 0;
    font-size: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    @media only screen and (max-width: 900px) {
      width: 70%;
    }
`;

export const CreateAccount = styled(Button)`
	background: #445FE8;
	color: white;
`;

export const Back = styled(Button)`
	background: white;
	color: #445FE8;

    a {
        color: #445FE8;
    }
`;