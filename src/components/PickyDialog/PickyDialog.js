import { styled } from '@mui/material/styles';
import Dialog from "@mui/material/Dialog";

export const PickyDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        maxWidth: '98%;',
        maxHeight: '98%'
    }
}));