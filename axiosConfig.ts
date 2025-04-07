import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/",
});

export function setAuthToken(token: string | null) {
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common["Authorization"];
    }
}


const refreshAccessToken = async () => {
    try {
        const refreshToken = localStorage.getItem("refresh_token");
        if (!refreshToken) return null;

        const response = await api.post("auth/token/refresh/", { refresh: refreshToken });

        const newAccessToken = response.data.access;
        localStorage.setItem("access_token", newAccessToken);
        return newAccessToken;
    } catch (error) {
        console.error("Ошибка обновления токена", error);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        return null;
    }
};

api.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const newAccessToken = await refreshAccessToken();

            if (newAccessToken) {
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return api(originalRequest);
            }
        }

        return Promise.reject(error);
    }
);

export { api, refreshAccessToken };
export default api;
