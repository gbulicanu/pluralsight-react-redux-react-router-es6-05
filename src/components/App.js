import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import SiteHeader from './common/SiteHeader';

function App(){
    return (
        <div className="container-fluid">
            <SiteHeader />
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
        </div>
    );
}

export default App;