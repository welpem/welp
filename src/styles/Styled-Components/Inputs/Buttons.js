import styled from 'styled-components'
<<<<<<< Updated upstream
import {grey, white, aqua} from '../../Theme/Colors'
import {textSize} from '../../Theme/Typography'
=======
import {grey} from '../../Theme/Colors'

>>>>>>> Stashed changes


export const SubmitButton = styled.button`
    background: none;
    border: none;
<<<<<<< Updated upstream
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

export const IMG = styled.img`
    position: ${props => props.position};
    z-index: ${props => props.zindex};
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    right: ${props => props.right};
    margin-top: ${props => props.marginTop};
    align-self: ${props => props.alignSelf};
    margin-right: ${props => props.marginRight};
`

export const LearnButton = styled.button`
    font-size: ${textSize.h5};
    color: ${aqua[500]};
    border: ${grey[300]} solid 1px;
    background: none;
    filter: opacity(53%);
`
=======
    color: ${grey[50]};
    font-family: 'Inter';
    letter-spacing: .2em;
    margin-left: ${props => props.marginLeft}
`
>>>>>>> Stashed changes
