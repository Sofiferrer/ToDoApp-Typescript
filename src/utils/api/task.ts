import { api } from './api';
import { objectToArray } from '../../helpers';

type Task = {
    title: string,
    date: string,
    assigned: string,
    info: string,
    status: string
}

type AddTaskPayload = Task

const post = async (task: AddTaskPayload) => {
    await api({
        method: 'post',
        url: '/tasks.json',
        data: task
    });

}


const getId = async (id: string) => {
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

type UpdateTaskPayload = Omit<Task, 'status'> | Pick<Task, 'status'>

const patch = async (id: string, task: UpdateTaskPayload) => {
    await api({
        method: 'PATCH',
        url: '/tasks/' + id + '.json',
        data: task
    })
}


export const task = { post, get, patch, getId };