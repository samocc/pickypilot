import './RegisterModal.scss'
import PickyRegister from "./PickyRegister";
import {PickyDialog} from "../components/PickyDialog/PickyDialog";
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from "@mui/material";

function RegisterModal(props) {
    const { open, onClose } = props;

    async function handleClose(){
        onClose();
    }

    return (
        <PickyDialog onClose={handleClose} open={open}>
            <div className="picky-modal-close">
                <IconButton aria-label="close" size="large" onClick={handleClose}>
                    <CloseIcon fontSize="large"/>
                </IconButton>
            </div>
            <PickyRegister/>
        </PickyDialog>
    )
}

export default RegisterModal;