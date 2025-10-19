import styled from "styled-components";

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
`;

export const Filed = styled.input`
    width: 100%;
    max-width: 350px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${({theme}) => theme.colors.silver};
    `;

export const Button = styled.button`
    background-color: ${({theme}) => theme.colors.teal};
    color: ${({theme}) => theme.colors.white}; 
    border: none;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    transition: 0,3s;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;
export const Header = styled.h1`
    text-align: center;
    color: ${({theme}) => theme.colors.teal};
`;
export const Info = styled.p`
    font-size: 14px;
    text-align: center;
    color: ${({theme}) => theme.colors.emperor};
`;