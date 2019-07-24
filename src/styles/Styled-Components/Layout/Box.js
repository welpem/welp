
import styled from 'styled-components'
import {device} from '../../Theme/Breakpoints'
import {grey, black} from '../../Theme/Colors'

export const Page = styled.main`
    background-color: ${props => props.backgroundColor};
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    /* height: 100vh; */
    margin: auto;
    font-family: 'Inter';
    text-align: center;

    @media ${device.mobileM} {
        /* max-height: 819px; */
    }
`;
export const LandingPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: ${props => props.width};

    
    @media ${device.mobileM} {
        height: 100%;
    }
`
export const LoginBox = styled.div`
    background-color: ${grey[300]};
    box-shadow: 0 3 31;
    border-radius: 10px;
    height: ${props => props.height};
    width: 306px;
<<<<<<< Updated upstream
    margin-top: ${props => props.marginTop}
    
    
=======
    /* margin-left: 25px; */
>>>>>>> Stashed changes
`    


