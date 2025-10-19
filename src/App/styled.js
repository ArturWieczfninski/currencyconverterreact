import styled from 'styled-components';

export const Wrapper = styled.div`
    flex-basis: 700px;
    margin: 20px;
    padding: 40px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 10px;
    box-shadow: 0 0 30px ${({theme}) => theme.colors.black};
`;