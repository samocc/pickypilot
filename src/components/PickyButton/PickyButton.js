import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const PickyButtonBlack = styled(Button)(({ theme }) => ({
    borderRadius: '18px',
    padding: '6px 18px',
    color: theme.palette.getContrastText('#000000'),
    backgroundColor: '#000000',
    '&:hover': {
        backgroundColor: '#222222',
    },
}));
export const PickyButtonOrange = styled(Button)(({ theme }) => ({
    borderRadius: '18px',
    padding: '6px 18px',
    color: theme.palette.getContrastText('#E84839'),
    backgroundColor: '#E84839',
    '&:hover': {
        backgroundColor: '#BC1823',
    },
}));
export const PickyButtonBlackXL = styled(Button)(({ theme }) => ({
    borderRadius: '32px',
    padding: '6px 30px',
    fontWeight: 400,
    letterSpacing:'2px',
    fontSize:'24px',
    color: theme.palette.getContrastText('#000000'),
    backgroundColor: '#000000',
    '&:hover': {
        backgroundColor: '#222222',
    },
}));
export const PickyButtonOrangeXL = styled(Button)(({ theme }) => ({
    borderRadius: '32px',
    padding: '6px 30px',
    fontWeight: 400,
    letterSpacing:'2px',
    fontSize:'24px',
    color: theme.palette.getContrastText('#E84839'),
    backgroundColor: '#E84839',
    '&:hover': {
        backgroundColor: '#BC1823',
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