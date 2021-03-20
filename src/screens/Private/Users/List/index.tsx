
import React, { useState, useEffect, FC } from 'react';
import { Table } from './components/Table';
import { user } from '../../../../utils'

// const ListUsers: FC = () => {
//     const [list, setList] = useState([]);

//     useEffect(() => {
//         setList(user.get())
//     }, [])

//     const removeItem = (id:string) => {
//         setList(list.filter(item => id != item.id));
//     }

//     return (
//         <Table rows= { list } onRemoveItem = { removeItem } />
//     );
// }

// export { ListUsers }