import React from 'react'
import styled from 'styled-components'
import background from '../../Display/Images/Untitled_Artwork.png'
import {device} from '../../Theme/Breakpoints'


export const LoginWrapper = styled.section`
    display: flex;
    padding-left: ${props => props.PaddingLeft};
    flex-direction: column;
    align-content: ${props => props.AlignContent};
    justify-content: ${props => props.JustifyContent};
    position: absolute;
    width: 306px;
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: ${props => props.alignItems};
    align-content: ${props => props.alignContent};
    flex-direction: column;
    width: 375px;
    /* height: 100vh; */
    margin-top: ${props => props.marginTop};
    margin-left: ${props => props.marginLeft};
    
`
export const Background = styled.div`
    background: url(${background});
    filter: opacity(25%) blur(8px);
    -webkit-filter: opacity(25%) blur(8px);
    -moz-filter: opacity(25%) blur(8px);
    -o-filter: opacity(25%) blur(8px);
    -ms-filter: opacity(25%) blur(8px);
    position: absolute;
    background-repeat: repeat;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;

    @media ${device.mobileM} {
        background-size: 375px 100vh;
    }
`
export const WOSWrapper = styled.div`
    display: ${props => props.display};
    justify-content: center;
    /* flex-direction: column; */
    align-items: center;
    flex-wrap: wrap;
    margin-top: ${props => props.marginTop};
    position: ${props => props.position};
    z-index: ${props => props.zindex};
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    right: ${props => props.right};
    left: ${props => props.left};
    grid-template-columns: repeat(auto-fit, 250px);
    grid-template-rows: ${props => props.gridRows};
    grid-column-gap: ${props => props.columnGap};
    grid-row-gap: ${props => props.rowGap};
    .preview-card {
        object-fit: cover;
        width: 100%;
    }

    `
export const RWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${props => props.marginTop};
    position: ${props => props.position};
    z-index: ${props => props.zindex};
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    right: ${props => props.right};
    left: ${props => props.left};
`
export const Wrap = styled.div`
    margin-top: ${props => props.marginTop};
    width: 350px; 
    display: flex;
    flex: wrap;
`