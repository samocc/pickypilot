import React from "react";
import './RegionSelector.scss'
import {regions} from "../../services/DataConfig";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import FormHelperText from "@mui/material/FormHelperText";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function RegionSelector (props) {
    const {value, onRegionChange, error, required} = props;

    // return (
    //     <Autocomplete
    //         options={regions}
    //         getOptionLabel={(option) => option.name}
    //         disableClearable
    //         onChange={onRegionChange}
    //         renderInput={(params) => (
    //             <TextField
    //                 {...params}
    //                 label="Estado de residencia"
    //                 variant="standard"
    //                 required={required}
    //                 error={error.length > 0}
    //                 helperText={error}
    //             />
    //         )}
    //     />
    // )

    return (
        <FormControl className="picky-region-selector" variant="standard" fullWidth error={error.length > 0} sx={{ }}>
            <InputLabel id="region-select-label">Estado de residencia</InputLabel>
            <Select
                labelId="region-select-label"
                id="region-select"
                value={value}
                label="Estado de residencia"
                onChange={onRegionChange}
                required={required}
                MenuProps={MenuProps}
            >
                {regions.map(({code, name}) => (
                    <MenuItem key={code} value={name}>
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{error}</FormHelperText>
        </FormControl>
    )
}

export default RegionSelector;