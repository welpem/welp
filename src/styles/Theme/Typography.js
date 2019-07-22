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

export const W1 = styled.h1`
    font-size: ${textSize.h1};
    color: ${props => props.fontColor};
    margin: 0;
    font-weight: bold;
    margin-bottom: ${props => props.marginBottom};
    margin-top: ${props => props.marginTop};
    padding: ${props => props.Padding};
    letter-spacing: ${props => props.LetterSpacing};
`;
export const W2 = styled.h2`
    font-size: ${textSize.h2};
    color: ${props => props.fontColor};
    margin: 0;
    font-weight: ${props => props.fontWeight};
    font-style: ${props => props.fontStyle};
    margin-bottom: ${props => props.marginBottom};
    margin-top: ${props => props.marginTop};
    letter-spacing: ${props => props.LetterSpacing};
`;
export const W3 = styled.h3`
    font-size: ${textSize.h3};
    color: ${props => props.fontColor};
    margin: 0;
    font-weight: normal;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    letter-spacing: ${props => props.LetterSpacing};
`;

export const W4 = styled.h4`
    font-size: ${textSize.h4};
    color: ${props => props.fontColor};
    font-style: ${props => props.fontStyle};
    font-weight:normal;
    margin: 0;
    letter-spacing: ${props => props.LetterSpacing};
`
export const W5 = styled.h5`
    font-size: ${textSize.h5};
    color: ${props => props.fontColor};
    margin: 0;
    width: ${props => props.width};
    margin-bottom: ${props => props.marginBottom};
    font-weight: normal;
    letter-spacing: ${props => props.LetterSpacing};
    text-decoration: ${props => props.textDecor};

`;
