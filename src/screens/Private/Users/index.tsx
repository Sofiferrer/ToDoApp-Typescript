import { Switch, Route } from 'react-router-dom';
import { AddUser } from './Add';
import { ListUsers } from './List';

const Users = () => {
    return (
        <Switch>
            {/* <Route path="/tasks/add" component={Add} />
            <Route path="/tasks/list" component={List} />
            <Route path="/tasks/edit/:id" component={Add} /> */}
            < Route path="/users/add" component={AddUser} />
            <Route path="/users/list" component={ListUsers} />
            <Route path="/users/edit/:id" component={AddUser} />
        </Switch>
    )
}

export { Users };