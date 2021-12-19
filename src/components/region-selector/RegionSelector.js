import React from "react";
import {regions} from "../../services/DataConfig";
import {Autocomplete, TextField} from "@mui/material";

function RegionSelector (props) {
    const {onRegionChange, error, required} = props;

    return (
        <Autocomplete
            options={regions}
            getOptionLabel={(option) => option.name}
            disableClearable
            onChange={onRegionChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Estado de residencia"
                    variant="standard"
                    required={required}
                    error={error.length > 0}
                    helperText={error}
                />
            )}
        />
    )
}

export default RegionSelector;