import styles from './Button.module.css'
import Spinner from "../Spinner/Spinner";

const Button = ({text, loading, className, onClick}) => {
    return (
        <div className={className}>
            <Button
                onClick={onClick}
                variant="contained"
                className={styles.submitButton}
                disabled={loading}
            >
                {!loading && text}
                {/*{loading && <Spinner size="small" />}*/}
            </Button>
        </div>
    )
};

export default Button;