import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const TypeSelect = ({value, onChange, className}) => {

    return (
        <div className={className}>

            <FormControl fullWidth>
                {/*//fullWidth и обернуть в див и его класс для всех селекторов,которые  будут регулировать размеры*/}
                <InputLabel>Select type of request</InputLabel>
                <Select
                    value={value}
                    onChange={onChange}
                    label="Select type of request"
                >
                    <MenuItem value={"trivia"}>Trivia</MenuItem>
                    <MenuItem value={"math"}>Math</MenuItem>
                    <MenuItem value={"date"}>Date</MenuItem>
                    <MenuItem value={"year"}>Year</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
};

export default TypeSelect;
