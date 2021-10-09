import {TextField, InputAdornment} from '@material-ui/core';
import {Search} from '@material-ui/icons';

const SearchInput = ({value, onChange, onSubmit, className}) => {

    const handleOnKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSubmit();
        }
    }

    return (
        <div className={className}>
            <TextField
                value={value}
                onChange={onChange}
                onKeyDown={handleOnKeyDown}
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
        </div>
    );
};

export default SearchInput;
