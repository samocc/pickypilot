import React from "react";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

function RegErrors({errors, removeError}) {

    return (
        <div>
            {errors.map(({message}, index) => (
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
            ))}
        </div>
    )
}

export default RegErrors;