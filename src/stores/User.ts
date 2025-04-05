import { makeAutoObservable } from "mobx";

// Интерфейс для данных пользователя (адаптируйте поля в соответствии с моделью из VKMauth)
export type IUser = {
  id: number;
  username: string;
  password: string;
  email: string;
  roots: number;
  // Можно добавить другие поля, если они есть
}

export const ROOTS: { [key: number]: string } = {
    0: 'User',
    1: 'Moderator'
}

class AuthStore {
  token: string | null = null;
  isAuthenticated: boolean = false;
  user: IUser | null = null;
  
  // URL для запроса логина. Обновите согласно настройкам вашего бэкенда.
  authUrl: string = "http://localhost:8000/vkmauth/login/";

  constructor() {
    makeAutoObservable(this);
    // Восстанавливаем токен из localStorage, если он есть
    this.token = localStorage.getItem("token");
    this.isAuthenticated = !!this.token;
  }

  // Метод установки токена
  setToken(token: string) {
    this.token = token;
    localStorage.setItem("token", token);
    this.isAuthenticated = true;
  }

  // Выход: сбрасываем данные
  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.user = null;
    localStorage.removeItem("token");
  }

  // Вход в систему: отправка запроса к бэкенду
  async login(username: string, password: string): Promise<void> {
    try {
      const response = await fetch(this.authUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Ошибка авторизации");
      }

      const data = await response.json();

      // Предполагается, что бэкенд возвращает JWT токен и данные пользователя
      if (data.token) {
        this.setToken(data.token);
        if (data.user) {
          this.user = data.user;
        }
      } else {
        throw new Error("JWT токен не получен");
      }
    } catch (error) {
      console.error("Ошибка при авторизации:", error);
      throw error;
    }
  }
}

const authStore = new AuthStore();
export default authStore;
