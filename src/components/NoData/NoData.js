import OppsError from './OppsError.png';

const NoData = ({className}) => {
    return (
        <div className={className}>

            <h5>Interesting fact not found :(</h5>
            <img src={OppsError}/>
        </div>
    );
};

export default NoData;
