import styled from 'styled-components'
import { white, black, grey, aqua, purple } from './Colors';


const textSize = {
    h1: '36px',
    h2: '24px',
    h3: '18px',
    h4: '16px',
    h5: '13px',
    h6: '10px'     
}

export const Title = styled.h1`
    font-size: ${textSize.h1};
    color: ${props => props.theme};
`;

Title.defaultProps = {
    theme: {
        dark: white[500]
    }
}