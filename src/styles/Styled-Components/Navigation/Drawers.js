import styled from 'styled-components'
import {grey, black, aqua, purple, red, white} from '../../Theme/Colors'
import {textSize, W1, W2, W3, W4, W5, W6} from '../../Theme/Typography' 


export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background: ${grey[200]};
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    a {
        color: ${grey[50]};
        font-size: 12px;
        font-style: normal;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
        :hover {
            background: black;
        }
    }

`
export const Dropdown = styled.li`
    position: relative;
    display: inline-block;
    :hover .dropdown-content {
        display: block;
    }
    
`