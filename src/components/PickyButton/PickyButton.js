import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const colors = {
    orange: {
        def: '#E84839',
        hover: '#BC1823'
    },
    black: {
        def: '#000000',
        hover: '#222222'
    }
}
const baseValues = {
    borderRadius: 32,
    padding1: 6,
    padding2: 32,
    letterSpacing: 2,
    fontSize: 24
}

export const PickyButtonBlack = styled(Button)(({ theme }) => ({
    borderRadius: '18px',
    padding: '6px 18px',
    fontWeight: 400,
    color: theme.palette.getContrastText(colors.black.def),
    backgroundColor: colors.black.def,
    '&:hover': {
        backgroundColor: colors.black.hover,
    },
}));
export const PickyButtonOrange = styled(Button)(({ theme }) => ({
    borderRadius: '18px',
    padding: '6px 18px',
    fontWeight: 400,
    color: theme.palette.getContrastText(colors.orange.def),
    backgroundColor: colors.orange.def,
    '&:hover': {
        backgroundColor: colors.orange.hover,
    },
}));
export const PickyButtonBlackXL = styled(Button)(({ theme }) => ({
    borderRadius: '32px',
    padding: '6px 32px',
    fontWeight: 400,
    letterSpacing:'2px',
    fontSize:'24px',
    color: theme.palette.getContrastText(colors.black.def),
    backgroundColor: colors.black.def,
    '&:hover': {
        backgroundColor: colors.black.hover,
    },
}));
export const PickyButtonOrangeXL = styled(Button)((props) => ({
    borderRadius: '32px',
    padding: '6px 32px',
    fontWeight: 400,
    letterSpacing:'2px',
    fontSize:'24px',
    color: props.theme.palette.getContrastText(colors.orange.def),
    backgroundColor: colors.orange.def,
    '&:hover': {
        backgroundColor: colors.orange.hover,
    },
}));
export const PickyButtonFlex = styled(Button)(({theme, pickycolor = 'black', scale = 1}) => ({
    borderRadius: baseValues.borderRadius*scale,
    padding: `${baseValues.padding1*scale}px ${baseValues.padding2*scale}px`,
    fontWeight: 400,
    letterSpacing: baseValues.letterSpacing*scale,
    fontSize:baseValues.fontSize*scale,
    color: theme.palette.getContrastText(colors[pickycolor].def),
    backgroundColor: colors[pickycolor].def,
    '&:hover': {
        backgroundColor: colors[pickycolor].hover,
    },
}));

export const PickyButtonWhiteXL = styled(Button)(({ theme }) => ({
    borderRadius: '32px',
    padding: '6px 32px',
    fontWeight: 400,
    letterSpacing:'2px',
    fontSize:'24px',
    color: theme.palette.getContrastText('#EFEFEF'),
    backgroundColor: '#EFEFEF',
    '&:hover': {
        backgroundColor: '#FAFAFA',
    },
}));
export const PickyButtonTrans = styled(Button)(({ theme }) => ({
    borderRadius: '32px',
    padding: '6px 30px',
    fontWeight: 400,
    fontSize:'24px',
    color: theme.palette.getContrastText('#000000'),
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: '#222222',
    },
}));