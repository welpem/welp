import styled from 'styled-components'

export const WCard = styled.div`
    position: relative;
    background-color: transparent;
    color: ${props => props.color};
    font-size: ${props => props.size};
    width: 227px;
    height: 330px;
    margin-top: 20px;
    margin: 0;
    

`
export const WOSImg = styled.img`
width: 196px;
height: 183px;
border: .1em solid grey;


/* height: 183.13px; */
`

export const RCard = styled.div`
    position: relative;
    background: ${props => props.backgroundColor};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    margin-top: 100px;
    width: 331px;
    height: 298px;
    
`
export const ReviewIMG = styled.img`
    position: absolute;

    width: 111px;
    height: 111px;
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    right: ${props => props.right};
    left: ${props => props.left};
    
`