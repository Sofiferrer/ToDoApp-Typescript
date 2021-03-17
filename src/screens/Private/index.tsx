import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Main } from '../../components';
import { Tasks } from './Tasks';
import { Users } from './Users';

const Private: FC = () => {
    return (
        <Router>
            <Layout>
                <Main>
                    <Switch>
                        <Route path="/tasks" component={Tasks} />
                        <Route path="/users" component={Users} />
                    </Switch>
                </Main>
            </Layout>
        </Router>
    )
}

export { Private };