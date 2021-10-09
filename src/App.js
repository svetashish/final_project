import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Fact from "./components/Fact/Fact";
import styles from "./App.module.css";


function App() {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/fact">
                    <Fact/>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
