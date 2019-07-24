import styled from 'styled-components'
import {aqua, purple, grey, red} from '../../Theme/Colors'
import {W2, W5} from '../../Theme/Typography'


export const A = styled.a`
    text-decoration: none;
    color: ${aqua[500]};
    transition: 0.3s ease;
    :hover {color: ${red[500]}};

`
export const MenuToggle = styled.div`
    display: block;
    position: relative;
    top: 50px;
    left: 50px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;
        opacity: 0;
        z-index: 2;
        -webkit-touch-callout: none;
            
            :checked ~ span {
                opacity: 1;
                transform: rotate(45deg) translate(-2px, -1px);
                background: ${grey[500]};
            }
            :checked ~ span:nth-last-child(3)
            {
                opacity: 0;
                transform: rotate(0deg) scale(0.2, 0.2);
            };
            :checked ~ ul {
                transform: none;
            }
            :checked ~ span:nth-last-child(2) {
                transform: rotate(-45deg) translate(0, -1px);
                                        }
    }
    span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        background: ${purple[500]};
        border-radius: 3px;
        z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), 
                opacity 0.55s ease;
        :first-child {
            transform-origin: 0% 0%;
        }
        :nth-last-child(2) {
            transform-origin: 0% 100%;
        }
    }
    ul {
        
        position: absolute;
        text-align: left;
        width: 300px;
        margin: -100px 0 0 -50px;
        padding: 50px;
        padding-top: 125px;
        background: ${grey[300]};
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
        
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        li {
            padding: 10px 0;
            font-size: 24px;
            font-style: bold;
            font-weight: 700;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    
    }
`  



