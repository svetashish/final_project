import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const TypeSelect = ({value, onChange, className}) => {
    const TYPE_SELECT = ["trivia", "math", "date", "year" ]

    return (
        <div className={className}>
            <FormControl fullWidth>
                <InputLabel>Select type of request</InputLabel>
                <Select
                    value={value}
                    onChange={onChange}
                    label="Select type of request"
                >
                    {TYPE_SELECT.map((item) =>
                        <MenuItem value={item}>{item[0].toUpperCase() + item.slice(1)}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </div>
    )
};

export default TypeSelect;
