import axios from 'axios';
const API = 'http://localhost:5000/api';

export const getObjetivos = () => axios.get(`${API}/objetivos`);
export const getObjetivo = id => axios.get(`${API}/objetivos/${id}`);
export const createObjetivo = data => axios.post(`${API}/objetivos`, data);
export const updateObjetivo = (id, data) => axios.put(`${API}/objetivos/${id}`, data);
export const deleteObjetivo = id => axios.delete(`${API}/objetivos/${id}`);

export const createTarea = data => axios.post(`${API}/tareas`, data);
export const deleteTarea = id => axios.delete(`${API}/tareas/${id}`);
