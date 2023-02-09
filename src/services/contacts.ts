import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

interface Contact {
  id?: number;
  name: string;
  number: string;
}

const getAll = (): Promise<Contact[]> =>
  axios.get(baseUrl).then((response) => response.data);

const create = (newObject: Contact): Promise<Contact> =>
  axios.post(baseUrl, newObject).then((response) => response.data);

const update = (id: number, updatedObject: Contact): Promise<Contact> =>
  axios.put(baseUrl, updatedObject).then((response) => response.data);

const deleteContact = (id: number): Promise<Contact> =>
  axios.delete(`${baseUrl}/${id}`).then((response) => response.data);

export default { getAll, create, update, deleteContact };
