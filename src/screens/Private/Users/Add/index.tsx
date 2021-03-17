import React, { useState, useEffect, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { user } from '../../../../utils';

const AddUser: FC = ({ match }) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [textBtn, setTextBtn] = useState('Add');
    const [isLoading, setIsLoading] = useState(false);
    const [msj, setMsj] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();
    const id = match.params.id;

    const createUser = async () => {
        await user.post({ name, lastname, email, password });
        setName('');
        setLastname('');
        setEmail('');
        setPassword('');
    }

    const updateUser = async () => {
        setIsLoading(true);
        await user.patch(id, { name, lastname, email, password })
        setIsLoading(false);
        setMsj("Se Actualizo de forma exitosa");
        history.push('/users/list');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (id) {
            await updateUser();
        } else {
            await createUser();
        }
    }

    useEffect(() => {
        if (id) {
            user.getId(id)
                .then(response => {

                    setName(response.name);
                    setLastname(response.lastname);
                    setEmail(response.email);
                    setPassword(response.password)
                    setTextBtn('Edit');
                })
        }
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">lastName</label>
                <input type="text" name="lastname" className="form-control" id="exampleFormControlInput1" value={lastname} onChange={(event) => setLastname(event.target.value)} placeholder="Lastname" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Password</label>
                <input type={showPassword ? "text" : "password"} name="password" className="form-control" id="exampleFormControlInput1" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="btn btn-primary col-2">ver</button>
            </div>
            <button type="submit" className="btn btn-primary col-2">{textBtn}</button>
        </form>
    );
}

export { AddUser };