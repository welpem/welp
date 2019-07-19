
import styled from 'styled-components'
import {device} from '../../Theme/Breakpoints'
import {grey, black} from '../../Theme/Colors'

export const Page = styled.div`
    background-color: ${black[500]};
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    height: 100vh;
    margin: auto;
    font-family: 'Inter';
    text-align: center;

    @media ${device.mobileM} {
        max-width: 819px;
    }
`;

export const LoginBox = styled.div`
    background-color: ${grey[300]};
    box-shadow: 0 3 31;
    border-radius: 10px;
    height: 420px;
    width: 306px;
    /* margin-left: 25px; */
`    


