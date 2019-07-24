import styled from 'styled-components'
import {grey, black, white, aqua, purple} from '../../Theme/Colors'

export const Input = styled.input`
    background: none;
    border: none;
    font-size: 15px;
    height: 30px;
    width: 250px;
    color: ${grey[50]};
<<<<<<< Updated upstream
    margin-top: 5px;
    margin-bottom:10px;
    letter-spacing: 0.05em;
    outline: none;
`

export const Label = styled.label`
    display: flex;
    justify-content: flex-start;
    font-size: 15px;
    color: ${grey[50]};
    letter-spacing: 0.1em;
    margin-top: ${props=> props.marginTop};
    `

export const Select = styled.select`
    background: none;
    border: none;
    height: 30px;
    width: 250px;
    font-size: 15px;
    color: ${grey[50]};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginTop};
    letter-spacing: 0.05em;
=======
    margin-top: ${props => props.InputMarginTop};
    letter-spacing: 0.2em;
>>>>>>> Stashed changes
`