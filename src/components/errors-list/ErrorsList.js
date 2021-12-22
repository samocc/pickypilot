import {IconButton, Zoom} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

function ErrorsList({errors, removeError}) {

    return (
        <div className="picky-errors-list">
            {errors.map(({message}, index) => (
                <Zoom in={true}>
                    <Alert
                        key={'error-display-' + index}
                        severity="error"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => removeError(index)}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                    <span className="alert-content">
                        {message}
                    </span>
                    </Alert>
                </Zoom>
            ))}
        </div>
    )
}

export default ErrorsList;