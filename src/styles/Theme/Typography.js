import styled from 'styled-components'
import { white, black, grey, aqua, purple } from './Colors';


export const textSize = {
    h1: '36px',
    h2: '24px',
    h3: '18px',
    h4: '16px',
    h5: '13px',
    h6: '10px'    
}

export const Title = styled.h1`
    font-size: ${props => props.fontSize};
    color: ${props => props.fontColor};
    margin: 0;
    font-weight: bold;
    margin-bottom: ${props => props.marginBottom};
    padding: 20px;
    letter-spacing: ${props => props.LetterSpacing};
`;

