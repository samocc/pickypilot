import React, {useEffect, useState} from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {PickyCategories} from "../../services/DataConfig";
import Grid from "@mui/material/Grid";

function CategoryPicker(props) {
    const {value, onChange} = props;
    const [model, setModel] = useState(buildModel(value));

    useEffect(() => {
        const newVal = [];
        model.forEach(({name, selected}) => {
            if(selected) {
                newVal.push(name);
            }
        });
        onChange(newVal);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [model] )
    
    function buildModel(val) {
        return PickyCategories.map(({name}) => {
            return {name: name, selected: val.indexOf(name) >= 0 };
        });
    }
    
    async function selectCat(index) {
        setModel(prevState => {
            const newState = [...prevState];
            newState[index].selected = !prevState[index].selected;
            return newState;
        });
    }

    return (
        <div className="category-picker">
            <Grid container rowSpacing={0} columnSpacing={2}>
                {model.map(({name, selected}, index)  => (
                    <Grid item xs={6} sm={6} key={index}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={selected} onChange={() => selectCat(index)} />}
                                label={name}
                            />
                        </FormGroup>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default CategoryPicker