import { axiosClient } from '../network/axiosClient';

const authApi = {
    create: async (data) => {
        return await axiosClient.post('auth/register', data);
    },
    login: async (data) => {
        return await axiosClient.post('auth/login', data);
    },
    getAllUsers: async () => {
        return await axiosClient.get('auth/users');
    },
    updateById: async (id, data) => {
        return await axiosClient.put(`auth/update/${id}`, data);
    },
    deleteById: async (id, data) => {
        return await axiosClient.put(`auth/delete/${id}`, data);
    },
};

export default authApi;
