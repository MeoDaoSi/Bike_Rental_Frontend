import { instance as axiosClient } from './index';

export const clientApi = {
    get: async (url: string) => {
        try {
            const response = await axiosClient.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    post: async (url: string, data: object) => {
        try {
            const response = await axiosClient.post(url, data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    put: async (url: string, data: object) => {
        try {
            const response = await axiosClient.put(url, data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    delete: async (url: string) => {
        try {
            const response = await axiosClient.delete(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

// const axiosService = {
//   getAll(params: object | string, url: string): Promise<object> {
//     return axiosClient.get(url, { params })
//   },

//   getById(id: string, url: string): Promise<object> {
//     const base_url = `${url}${id}`
//     return axiosClient.get(base_url)
//   },

//   post(data: object, url: string): Promise<object> {
//     const base_url = `${url}`
//     return axiosClient.post(base_url, data)
//   },

//   update(data: Partial<any>, url: string): Promise<object> {
//     const base_url = `${url}${data.userId}`
//     return axiosClient.patch(base_url, data.bodyReq)
//   },

//   delete(id: string, url: string): Promise<object> {
//     const base_url = `${url}${id}`
//     return axiosClient.delete(base_url)
//   },
// }