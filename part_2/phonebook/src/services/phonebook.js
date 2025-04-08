import axios from "axios";

const url = "http://localhost:3001/persons";

const getAll = () => {
    const promise = axios.get(url);
    return promise.then((response) => response.data);
};

const create = (newEntry) => {
    const promise = axios.post(url, newEntry);
    return promise.then((response) => response.data);
};

const deleteEntity = (id) => {
    const promise = axios.delete(`${url}/${id}`);
    return promise.then((response) => response.data);
};

const update = (id, newEntity) => {
    const promise = axios.put(`${url}/${id}`, newEntity);
    return promise.then((response) => response.data);
};

export default {
    getAll,
    create,
    deleteEntity,
    update,
};
