import React from 'react';
import { Private, Public } from './screens';

function App() {
    const isAuthenticated = true;
    return isAuthenticated ? <Private /> : <Public />
}

export default App;