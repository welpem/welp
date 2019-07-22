import styled from 'styled-components'

export const Card = styled.div`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    font-size: ${props => props.size};
`