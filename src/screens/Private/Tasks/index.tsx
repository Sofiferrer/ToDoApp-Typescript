import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Add } from './Add';
import { List } from './List';

const Tasks: FC = () => {
    return (
        <Switch>
            <Route path="/tasks/add" component={Add} />
            <Route path="/tasks/list" component={List} />
            <Route path="/tasks/edit/:id" component={Add} />
        </Switch>
    )
}

export { Tasks };