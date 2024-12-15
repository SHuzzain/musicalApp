import { axiosClient } from '../network/axiosClient';

const eventApi = {
    create: async (data) => {
        return await axiosClient.post('events/create', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    update: async (id, data) => {
        return await axiosClient.put(`events/update/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    },
    delete: async (id) => {
        return await axiosClient.delete(`events/delete/${id}`);
    },
    get: async (params) => {
        return await axiosClient.get('events/all', { params });
    },
};

export default eventApi;
