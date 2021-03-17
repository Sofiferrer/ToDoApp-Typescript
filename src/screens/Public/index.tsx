import React, { FC } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { SignUp } from './SignUp';

const Public: FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signUp" component={SignUp} />
            </Switch>
        </Router>

    )
}

export { Public };