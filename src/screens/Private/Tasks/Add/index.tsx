
import React, { useState, useEffect, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { task } from "../../../../utils";

const Add: FC = ({ match }) => {
    const [title, setTitle] = useState(' ');
    const [date, setDate] = useState(' ');
    const [assigned, setAssigned] = useState(' ');
    const [info, setInfo] = useState(' ');
    const [textBtn, setTextBtn] = useState('Add');
    const [isLoading, setIsLoading] = useState(false);
    const [msj, setMsj] = useState(null);
    const history = useHistory();


    const id = match.params.id;
    const createTask = async () => {
        await task.post({ title, date, assigned, info, status: "pendiente" });
        exito()
        setTitle('');
        setDate('');
        setAssigned('');
        setInfo('');
    }

    const updateTask = async () => {
        setIsLoading(true);
        await task.patch(id, { title, date, assigned, info })
        setIsLoading(false);
        setMsj("Se Actualizo de forma exitosa");
        history.push('/tasks/list');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (id) {
            await updateTask();
        } else {
            await createTask();
        }
    }
    const exito = () => {
        alert('Tu tarea se cargo exitosamente');
    }


    useEffect(() => {
        if (id) {
            task.getId(id)
                .then(response => {

                    setTitle(response.title);
                    setDate(response.date);
                    setAssigned(response.assigned);
                    setInfo(response.info)
                    setTextBtn('Edit');

                })
        }
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit}>
                {isLoading && "Cargando .........."}
                {msj}
                <div className="mb-3">
                    <label for="title" className="form-label">Title Task</label>
                    <input type="text" name="title" className="form-control" id="title" placeholder="Title Task" value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Date</label>
                    <input type="date" name="date" className="form-control" id="exampleFormControlInput1" value={date} onChange={(event) => setDate(event.target.value)} placeholder="Date Task" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Asignado</label>
                    <input type="text" name="assigned" className="form-control" id="exampleFormControlInput1" value={assigned} onChange={(event) => setAssigned(event.target.value)} placeholder="Asignado" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Info. Task</label>
                    <textarea className="form-control" name="info" id="exampleFormControlTextarea1" value={info} onChange={(event) => setInfo(event.target.value)} placeholder="Description" rows="3"></textarea>
                    <button type="submit" className="btn btn-primary col-2">{textBtn}</button>
                </div>
            </form>
        </>
    );
}

export { Add };