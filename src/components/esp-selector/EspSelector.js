import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {FoodSpecialities, MenuProps} from "../../services/DataConfig";
import {Box, Chip, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useRef, useState} from "react";
import Button from "@mui/material/Button";

function EspSelector(props) {
    const { value : model, onChange, max = null, label, enableCustomFields = false, chip = false, autoscroll = false} = props;
    const [newField, setNewField] = useState('');
    const [open, setOpen] = useState(false);
    const [customFields, setCustomFields] = useState([]);
    const elemRef = useRef(null);

    const handleChange = (event) => {
        const {target: { value }} = event;
        const newModel = typeof value === 'string' ? value.split(',') : value;
        if(newModel.indexOf('picky-add-other-unique-key') >= 0) return;
        if(max && newModel.length > max) return;
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
        onOpen();
    }

    function getRenderer() {
        if(chip) {
            return chipRenderer;
        }
        return comaRenderer
    }

    function comaRenderer(selected) {
        return selected.join(', ');
    }

    function chipRenderer(selected) {
        return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                    <Chip key={value} label={value} />
                ))}
            </Box>
        );
    }

    function onOpen(){
        if(autoscroll) {
            elemRef.current.scrollIntoView(true);
        }
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
                    input={<OutlinedInput label={label}/>}
                    renderValue={getRenderer()}
                    MenuProps={MenuProps}
                    ref={elemRef}
                    onOpen={onOpen}
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
                    <Button onClick={() => handleClose(false)}>Cancel</Button>
                    <Button onClick={() => handleClose(true)}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EspSelector;