import React from 'react';
import { Private, Public } from './screens';

function App() {
    const isAuthenticated = false;
    return isAuthenticated ? <Private /> : <Public />
}

export default App;