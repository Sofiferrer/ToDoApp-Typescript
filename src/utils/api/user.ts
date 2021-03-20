import { api } from './api';
import { objectToArray } from '../../helpers';

type AddUserPayload = { name: string, lastname: string, email: string, password: string }

const post = async (user: AddUserPayload) => {
    await api({
        method: 'post',
        url: '/users.json',
        data: user
    });

}

const getId = async (id: string) => {
    const data = await api({
        method: 'get',
        url: '/users/' + id + '.json'
    });
    return data.data;
}

const get = async () => {
    const data = await api({
        method: 'get',
        url: '/users.json'
    });
    return objectToArray(data.data);
}

type UpdateUserPayload = AddUserPayload

const patch = async (id: string, user: UpdateUserPayload) => {
    await api({
        method: 'PATCH',
        url: '/users/' + id + '.json',
        data: user
    })
}

const deleteUser = async (id: string) => {
    await api({
        method: 'DELETE',
        url: '/users/' + id + '.json'
    })
}

export const user = { post, get, patch, getId, deleteUser };