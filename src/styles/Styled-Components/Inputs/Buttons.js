import styled from 'styled-components'
import {grey} from '../../Theme/Colors'



export const SubmitButton = styled.button`
    background: none;
    border: none;
    color: ${grey[50]};
    font-family: 'Inter';
    letter-spacing: .2em;
    margin-left: ${props => props.marginLeft}
`