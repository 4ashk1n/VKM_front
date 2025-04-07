import { makeAutoObservable } from "mobx";
import api, { setAuthToken } from "../../axiosConfig";

export type IUser = {
  id: number;
  username: string;
  email: string;
  roots: number;
  first_name: string;
  last_name: string;
  date_joined: string;
  isModerator: boolean;
}

export const ROOTS: { [key: number]: string } = {
    0: 'User',
    1: 'Moderator'
}
class AuthStore {
  accessToken: string | null = null;
  refreshToken: string | null = null;
  isAuthenticated: boolean = false;
  user: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
    /*this.accessToken = localStorage.getItem("accessToken");
    this.refreshToken = localStorage.getItem("refreshToken");

    setAuthToken(this.accessToken);
    this.checkAuthStatus();*/
  }

  async init() {
    const access = localStorage.getItem("accessToken");
    const refresh = localStorage.getItem("refreshToken");
  
    if (access && refresh) {
      this.accessToken = access;
      this.refreshToken = refresh;
      setAuthToken(access);
      await this.checkAuthStatus();
    }
  }

  setTokens(access: string, refresh: string) {
    this.accessToken = access;
    this.refreshToken = refresh;
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);
    setAuthToken(access);
    this.isAuthenticated = true;
  }

  clearTokens() {
    this.accessToken = null;
    this.refreshToken = null;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAuthToken(null);
    this.isAuthenticated = false;
  }

  async login(username: string, password: string): Promise<void> {
    try {
      const res = await api.post("/auth/login/", { username, password });
      const { access, refresh, user } = res.data;

      if (access && refresh && user) {
        this.setTokens(access, refresh);
        this.user = user;
      } else {
        throw new Error("Некорректный ответ от сервера");
      }
    } catch (err: any) {
      const msg = err.response?.data?.error?.ru || "Ошибка авторизации";
      throw new Error(msg);
    }
  }

  async logout(): Promise<void> {
    try {
      await api.post("/auth/logout/");
    } catch (err) {
      console.warn("Ошибка при выходе из системы:", err);
    } finally {
      this.clearTokens();
      this.user = null;
    }
  }

  async checkAuthStatus(): Promise<void> {
    if (!this.accessToken) return;

    try {
      const res = await api.get("/auth/status/");
      this.isAuthenticated = res.data.isAuthenticated;
      this.user = res.data.user;
    } catch (err) {
      this.clearTokens();
      this.user = null;
    }
  }
}

const authStore = new AuthStore();
export default authStore;
