import styled from 'styled-components'
import {grey, white} from '../../Theme/Colors'



export const SubmitButton = styled.button`
    background: none;
    border: none;
    color: ${grey[100]};
    font-family: 'Inter';
    letter-spacing: .2em;
    margin-left: ${props => props.marginLeft};
    padding: ${props => props.Padding};
    transition: color 300ms;
    :focus {color: ${white[500]}};
    :active {color: ${grey[50]}};
    outline: none;
`
export const ATag = styled.a`
/* display: flex;
justify-content: ${props => props.A}; */
margin-right: ${props => props.MarginRight};
margin-left: ${props => props.MarginLeft};
margin-top: ${props => props.MarginTop};
width: 100px;

`