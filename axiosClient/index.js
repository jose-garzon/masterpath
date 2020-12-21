import Axios from 'axios';

const BASE_URL = 'https://apifellas.azurewebsites.net/api/';

const request = async (path, method, body) => {
	try {
		const { data, status } = await Axios({
			url: `${BASE_URL}${path}`,
			method,
			data: body,
			// withCredentials: true,
		});
		return { data, status };
	} catch (error) {
		const data = error.response?.data || {};
		const status = error.response?.status || 500;
		return { data, status };
	}
};

export const axiosClient = {
	get: async (path) => request(path, 'GET'),
	post: async (path, data) => request(path, 'POST', data),
	put: async (path, data) => request(path, 'PUT', data),
	patch: async (path, data) => request(path, 'PATCH', data),
};
