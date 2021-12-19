import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import useWindowDimensions from "../../services/useWindowDimensions.hook";

const colors = {
    orange: {
        def: '#E84839',
        hover: '#BC1823'
    },
    black: {
        def: '#000000',
        hover: '#222222'
    },
    white: {
        def: '#EFEFEF',
        hover: '#FAFAFA'
    }
}
const baseValues = {
    borderRadius: '18px',
    padding: '6px 18px',
}
const xlValues = {
    borderRadius: '32px',
    padding: '6px 32px',
    letterSpacing: '2px',
    fontSize: '24px'
}
const flexValues = {
    borderRadius: '2.45vw',
    padding: '0.45vw 2.45vw',
    letterSpacing: '0.1vw',
    fontSize: '1.85vw'
}
const flexValuesMobile = {
    borderRadius: '8.8vw',
    padding: '1.6vw 8.8vw',
    letterSpacing: '0.35vw',
    fontSize: '6.6vw'
}

export const PickyButton = styled(Button)(({ theme, pickycolor = 'black' }) => ({
    borderRadius: baseValues.borderRadius,
    padding: baseValues.padding,
    fontWeight: 400,
    color: theme.palette.getContrastText(colors[pickycolor].def),
    backgroundColor: colors[pickycolor].def,
    '&:hover': {
        backgroundColor: colors[pickycolor].hover,
    },
}));
export const PickyButtonFlex = styled(Button)(({theme, pickycolor = 'black'}) => ({
    borderRadius: flexValues.borderRadius,
    padding: flexValues.padding,
    fontWeight: 400,
    letterSpacing: flexValues.letterSpacing,
    fontSize:flexValues.fontSize,
    color: theme.palette.getContrastText(colors[pickycolor].def),
    backgroundColor: colors[pickycolor].def,
    '&:hover': {
        backgroundColor: colors[pickycolor].hover,
    },
}));
export const PickyButtonMobileFlex = styled(Button)(({theme, pickycolor = 'black'}) => ({
    borderRadius: flexValuesMobile.borderRadius,
    padding: flexValuesMobile.padding,
    fontWeight: 400,
    letterSpacing: flexValuesMobile.letterSpacing,
    fontSize:flexValuesMobile.fontSize,
    color: theme.palette.getContrastText(colors[pickycolor].def),
    backgroundColor: colors[pickycolor].def,
    '&:hover': {
        backgroundColor: colors[pickycolor].hover,
    },
}));
export const PickyButtonXL = styled(Button)(({theme, pickycolor = 'black'}) => ({
    borderRadius: xlValues.borderRadius,
    padding: xlValues.padding,
    fontWeight: 400,
    letterSpacing: xlValues.letterSpacing,
    fontSize:xlValues.fontSize,
    color: theme.palette.getContrastText(colors[pickycolor].def),
    backgroundColor: colors[pickycolor].def,
    '&:hover': {
        backgroundColor: colors[pickycolor].hover,
    },
}));
export function PickyButtonScaled (params) {
    const {onClick, pickycolor, text} = params;
    const {scale} = useWindowDimensions();
    return (
        <div>
            {scale < 1
                ? <PickyButtonFlex variant="contained" pickycolor={pickycolor}
                                   onClick={onClick}>{text}</PickyButtonFlex>
                : <PickyButtonXL variant="contained" pickycolor={pickycolor}
                                 onClick={onClick}>{text}</PickyButtonXL>
            }
        </div>
    )
}