import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {FoodSpecialities} from "../../services/DataConfig";
import {Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";

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

function EspSelector(props) {
    const { value : model, onChange, max = null, label, enableCustomFields = false} = props;
    const [newField, setNewField] = useState('');
    const [open, setOpen] = useState(false);
    const [customFields, setCustomFields] = useState([]);

    const handleChange = (event) => {
        const {target: { value }} = event;
        const newModel = typeof value === 'string' ? value.split(',') : value;
        if(newModel.indexOf('picky-add-other-unique-key') >= 0) return;
        if(max && newModel.length > max) return;
        // setSelectedFields(
        //     // On autofill we get a the stringified value.
        //     newModel
        // );
        onChange(newModel);
    };

    function handleAddNew(e) {
        e.preventDefault();
        console.log('Add new field');
        setOpen(true);
    }

    function handleClose(success) {
        if(success) {
            setCustomFields(prevState => {return [...prevState, newField]});
        }
        setOpen(false);
        setNewField('');
    }

    return (
        <div>
            <FormControl sx={{ }} fullWidth>
                <InputLabel id="esp-selector-label">{label}</InputLabel>
                <Select
                    labelId="esp-selector-label"
                    id="esp-selector"
                    multiple
                    value={model}
                    onChange={handleChange}
                    input={<OutlinedInput label={label} />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {FoodSpecialities.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={model.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                    {customFields.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={model.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                    {enableCustomFields ?
                        <MenuItem key={'picky-add-other-unique-key'} value={'picky-add-other-unique-key'} onClick={handleAddNew} >
                            <Button style={{margin:"auto"}} onClick={handleAddNew}>- Agregar nueva -</Button>
                        </MenuItem>
                        : null
                    }
                </Select>
            </FormControl>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Agregar nueva</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        value={newField}
                        onChange={e => setNewField(e.target.value)}
                        placeholder="Especialidad"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={e => handleClose(false)}>Cancel</Button>
                    <Button onClick={e => handleClose(true)}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EspSelector;