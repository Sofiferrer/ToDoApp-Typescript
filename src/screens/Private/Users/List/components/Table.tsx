import React, { FC } from 'react';
import { Row } from './Row';

interface Props {
    rows: [],
    onRemoveItem: () => void
}

const Table: FC<Props> = ({ rows, onRemoveItem }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map(row => <Row info={row} onRemoveItem={onRemoveItem} />)
                }
            </tbody>
        </table>
    );
}

export { Table };