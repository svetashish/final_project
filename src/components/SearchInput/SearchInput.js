import {TextField, InputAdornment, FormControl} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import {InputLabel} from "@mui/material";

const SearchInput = ({value, onChange, onSubmit, className, disabled, label}) => {

    const handleOnKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSubmit();
        }
    }

    return (
            <div className={className}>
                <FormControl fullWidth>
                    {label &&  <InputLabel>{label}</InputLabel>}
                    <TextField
                        value={value}
                        onChange={onChange}
                        onKeyDown={handleOnKeyDown}
                        disabled={disabled}
                        placeholder="Type some value"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search/>
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </FormControl>
            </div>
    );
};

export default SearchInput;
