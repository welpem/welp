
import {black, grey, aqua, purple} from './Colors'


const theme = {
    dark: [black, grey, aqua, purple],
    light: []
}

const invertTheme = ({dark, light}) => ({
    dark: light,
    light: dark
})