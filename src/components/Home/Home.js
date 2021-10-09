import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from './Home.module.css';
import TypeSelect from "../TypeSelect/TypeSelect";
import SearchInput from "../SearchInput/SearchInput";
import NumberApi from "../../servises/NumberApi";
import Select from "../NumberSelect/NumberSelect";
import NumberSelect from "../NumberSelect/NumberSelect";

const Home = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [type, setType] = useState('');
    const [number, setNumber] = useState('');
    const [search, setSearch] = useState('')
    const [factResult, setFactResult] = useState('');

    // const loadFact = async () =  {
    //     const api = new NumberApi();
    //     const fact = await api.find(search);
    //
    // }

    const handleOnSubmit = async () => {
        const api = new NumberApi();
        const fact = await api.find(search);
        setFactResult(fact);
        console.log(factResult);
        console.log(fact);
       // history.push(`/fact`)
    }


    return (
        <div className={styles.wrapper}>
            <h2>What tales do your metrics tell?</h2>

            <div className={styles.select_all}>
                <TypeSelect
                    className={styles.input_type}
                    value={type}
                    onChange={event => {
                        setType(event.target.value);
                    }}
                />

                <NumberSelect
                    className={styles.input_type}
                    value={number}
                    onChange={event => setNumber(event.target.value)}
                    />


                <SearchInput
                    className={styles.input_type}
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    onSubmit={handleOnSubmit}
                />
            </div>
        </div>
    );

};

export default Home;

