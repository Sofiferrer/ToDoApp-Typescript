
import React, { useState, useEffect, FC } from 'react';
import { Table } from './components/Table';
import { user } from '../../../../utils'

const ListUsers: FC = () => {
    const [list, setList] = useState([]);

    useEffect(async () => {
        setList(await user.get())
    }, [])

    const removeItem = (id) => {
        setList(list.filter(item => id != item.id));
    }

    return (
        <Table rows= { list } onRemoveItem = { removeItem } />
    );
}

export { ListUsers }