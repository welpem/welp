import React from 'react'
import styled from 'styled-components'

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
    flex-direction: column;
    width: 375px;
    height: 100vh;
    margin-top: ${props => props.marginTop};
    
`
export const Background = styled.div`
    
`
export const WOSWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
