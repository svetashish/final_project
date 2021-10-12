import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const NumberSelect = ({value, onChange, className, disabled}) => {
    return (
        <div className={className}>
            <FormControl fullWidth>
                <InputLabel>Select number of request</InputLabel>
                <Select
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    label="Select type of request"
                >
                    <MenuItem value={"integer"}>Integer</MenuItem>
                    <MenuItem value={"random"}>Random</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default NumberSelect;