import React from 'react';
import Navbar from './Header/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default App;
