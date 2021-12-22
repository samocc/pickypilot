import React, {useRef} from "react";
import './RegionSelector.scss'
import {MenuProps, regions} from "../../services/DataConfig";
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import {TextField} from "@mui/material";

function RegionSelector (props) {
    const {value, onRegionChange, error, required, autoscroll = false, label = "Selecciona región", variant = 'standard'} = props;
    const elemRef = useRef(null);

    function onOpen(){
        if(autoscroll) {
            elemRef.current.scrollIntoView(true);
        }
    }

    return (
        <TextField
            className="picky-region-selector"
            fullWidth
            select
            variant={variant}
            onChange={onRegionChange}
            label={label}
            value={value}
            error={error.length > 0}
            helperText={error}
            required={required}
            SelectProps={{MenuProps: MenuProps, onOpen: onOpen}}
        >
            {regions.map(({code, name}) => (
                <MenuItem key={code} value={name}>
                    <ListItemText primary={name} />
                </MenuItem>
            ))}
        </TextField>
    )
}

export default RegionSelector;