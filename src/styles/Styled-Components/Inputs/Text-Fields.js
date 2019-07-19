import styled from 'styled-components'
import {grey, black, white, aqua, purple} from '../../Theme/Colors'

export const Input = styled.input`
    background: none;
    border: none;
    font-size: 15px;
    height: 30px;
    width: 250px;
    color: ${grey[50]};
    margin-top: ${props => props.InputMarginTop};
    letter-spacing: 0.2em;
`