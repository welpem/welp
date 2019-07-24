import styled from 'styled-components'
import {device} from '../../Theme/Breakpoints'

export const Grid = styled.section`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    width: 80vw;
    
    @media ${device.mobileM} {
        width: 375;
    }

`