import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const PageOne = () => {
    return <Link to="/pagetwo">PageOne</Link>
}

const PageTwo = () => {
    return <Link to="/">PageTwo</Link>
}

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path="/" exact component={PageOne}/>
                <Route path="/pagetwo" component={PageTwo} />
            </BrowserRouter>
        </div>
    );
}

export default App;
