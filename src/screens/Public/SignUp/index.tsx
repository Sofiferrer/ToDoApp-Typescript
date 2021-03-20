import React, { FC, useState } from 'react';
import './index.css';

const SignUp: FC = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    return (
        <div className="container mt-5">
            <form className='row d-flex justify-content-center'>
                <div className='col-6 formulario py-3'>
                    <div className="row mb-3 d-flex justify-content-center ">
                        <div className="col-10">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" name="name" className="form-control" id="name" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3 d-flex justify-content-center">
                        <div className="col-10">
                            <label htmlFor="exampleFormControlInput1" className="form-label">lastName</label>
                            <input type="text" name="lastname" className="form-control" id="exampleFormControlInput1" value={lastname} onChange={(event) => setLastname(event.target.value)} placeholder="Lastname" />
                        </div>
                    </div>
                    <div className="row mb-3 d-flex justify-content-center">
                        <div className="col-10">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" id="exampleFormControlInput1" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                        </div>
                    </div>
                    <div className="row mb-3 d-flex justify-content-center">
                        <div className="col-10">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                            <input type={showPassword ? "text" : "password"} name="password" className="form-control" id="exampleFormControlInput1" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="btn btn-primary col-2">ver</button>
                        </div>
                    </div>
                    <div className="row mb-3 d-flex justify-content-center">
                        <div className="col-10">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Repeat Password</label>
                            <input type={showPassword ? "text" : "password"} name="password" className="form-control" id="exampleFormControlInput1" value={repeatPassword} onChange={(event) => setRepeatPassword(event.target.value)} placeholder="Repeat Password" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="btn btn-primary col-2">ver</button>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <button type="submit" className="btn btn-primary col-2">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export { SignUp };