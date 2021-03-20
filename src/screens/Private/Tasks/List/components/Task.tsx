import React, { FC, useState } from 'react';
import './index.css';
import { task } from '../../../../../utils/api/task';
import { Link } from 'react-router-dom';
import { CgSandClock, CgCheckO, CgCloseO, CgPen } from "react-icons/cg";

interface Props {
    data: {
        title: string,
        assigned: string,
        date: string,
        info: string,
        id: string,
        status: string
    },
}

const Task: FC<Props> = ({ data: { title, assigned, date, info, id, status } }) => {
    const [state, setState] = useState(status);
    const updateStatus = (status: string) => {
        setState(status);
        task.patch(id, { status })
    }
    return (
        <div className={`card col-3 ms-3 ${state}`} >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{assigned}</p>
                <p className="card-text">{date}</p>
                <p className="card-text">{info}</p>
                <CgSandClock onClick={() => updateStatus("pendiente")} />
                <CgCheckO onClick={() => updateStatus("realizada")} />
                <CgCloseO onClick={() => updateStatus("cancelada")} />
                <span className='ms-5'>
                    {state}
                </span>
                <Link to={`/tasks/edit/${id}`}>
                    <CgPen />
                </Link>
            </div>
        </div>
    )
}

export { Task }