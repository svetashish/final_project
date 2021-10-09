import {FormControl, InputLabel, MenuItem} from "@mui/material";

const Select = ({value, onChange, className}) => {
    return (
        <div className={className}>

            <FormControl fullWidth>
                {/*//fullWidth и обернуть в див и его класс для всех селекторов,которые  будут регулировать размеры*/}
                <InputLabel>Select number of request</InputLabel>
                <Select
                    value={value}
                    onChange={onChange}
                    label="Select type of request"
                >
                    <MenuItem value={"number"}>Number</MenuItem>
                    <MenuItem value={"char"}>Char</MenuItem>
                    <MenuItem value={"date"}>Date</MenuItem>
                    <MenuItem value={"year"}>Year</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Select;