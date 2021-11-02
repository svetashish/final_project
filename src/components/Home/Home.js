import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from './Home.module.css';
import TypeSelect from "../TypeSelect/TypeSelect";
import SearchInput from "../SearchInput/SearchInput";
import NumberApi from "../../servises/NumberApi";
import NumberSelect from "../NumberSelect/NumberSelect";
import NoData from "../NoData/NoData";
import RandomApi from "../../servises/RandomApi";
import SubmitButton from "../SubmitButton/SubmitButton";

const Home = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [type, setType] = useState('');
    const [number, setNumber] = useState('');
    const [search, setSearch] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [factResult, setFactResult] = useState('');

    const handleOnSubmit = async () => {
        const api = new NumberApi();
        const fact = await api.find(search,type);
        setFactResult(fact);
        // history.push(`/fact`)
    }

    const handleOnRandomSubmit = async () => {
        const api = new RandomApi();
        const fact = await api.find(type);
        setFactResult(fact.text);
        // history.push(`/fact`)
    }

    useEffect(() => {
        setFactResult('')
    }, [type, number, day, month, search])

    return (
        <div className={styles.wrapper}>
            <h2>What tales do your metrics tell?</h2>
            <div className={styles.select_all}>
                <TypeSelect
                    className={styles.select_type}
                    value={type}
                    onChange={event => {
                        setType(event.target.value);
                    }}
                />

                {type === 'date' ?
                    <>
                        <SearchInput
                            className={styles.input_type}
                            value={month}
                            onChange={event => setMonth(event.target.value)}
                            label={'Month'}
                        />
                        <SearchInput
                            className={styles.input_type}
                            disabled={!month}
                            value={day}
                            onChange={event => setDay(event.target.value)}
                            label={'Day'}
                        />
                    </>
                    :
                    <>
                        <NumberSelect
                            className={styles.select_type}
                            value={number}
                            disabled={!type}
                            onChange={event => setNumber(event.target.value)}
                        />
                        {number === 'random'
                            ? <>
                                <SubmitButton
                                    text='Get random fact'
                                    onClick={handleOnRandomSubmit}
                                />
                            </>
                            : <SearchInput
                                className={styles.input_type}
                                value={search}
                                disabled={!number}
                                onChange={event => setSearch(event.target.value)}
                                onSubmit={handleOnSubmit}
                            />}
                    </>
                }
            </div>
            {factResult && <div className={styles.fact_type}>{factResult}</div>}
            {factResult === null && <NoData className={styles.oops}/>}
        </div>
    );

};

export default Home;

