import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const PickyButtonBlack = styled(Button)(({ theme }) => ({
    borderRadius: '18px',
    color: theme.palette.getContrastText('#000000'),
    backgroundColor: '#000000',
    '&:hover': {
        backgroundColor: '#222222',
    },
}));
export const PickyButtonOrange = styled(Button)(({ theme }) => ({
    borderRadius: '18px',
    color: theme.palette.getContrastText('#E84839'),
    backgroundColor: '#E84839',
    '&:hover': {
        backgroundColor: '#BC1823',
    },
}));