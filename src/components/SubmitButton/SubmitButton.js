import {Button} from "@mui/material";

const SubmitButton = ({text, onClick}) => {
    return (
        <div>
            <Button
                variant="contained"
                onClick={onClick}
            >
                {text}
            </Button>
        </div>
    );
};

export default SubmitButton;
