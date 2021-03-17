import { api } from './api';
import { objectToArray } from '../../helpers';

const post = async (task) => {
    await api({
        method: 'post',
        url: '/tasks.json',
        data: task
    });

}


const getId = async (id) => {
    const data = await api({
        method: 'get',
        url: '/tasks/' + id + '.json'
    });
    return data.data;
}

const get = async () => {
    const data = await api({
        method: 'get',
        url: '/tasks.json'
    });
    return objectToArray(data.data);
}

const patch = async (id, task) => {
    await api({
        method: 'PATCH',
        url: '/tasks/' + id + '.json',
        data: task
    })
}


export const task = { post, get, patch, getId };