import {Grow, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Alert from "@mui/material/Alert";
import {useEffect} from "react";
import {deleteNotification} from "./GlobalNotifications.service";

function NotificationItem (props) {
    const {message = '', severity = 'info', timeout, id} = props;

    useEffect(() => {
        const timer = setTimeout(() => deleteNotification(id), timeout);
        return () => {
            clearTimeout(timer);
        };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , []);

    function handleDeleteClick() {
        deleteNotification(id);
    }

    return (
        <Grow in={true}>
            <Alert
                severity={severity}
                variant="filled"
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                onClick={handleDeleteClick}
            >
                {message}
            </Alert>
        </Grow>
    )
}

export default NotificationItem;