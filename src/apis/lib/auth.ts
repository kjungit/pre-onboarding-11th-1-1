import { axiosClient } from '../apiClient';

interface SignInResponse {
  access_token: string;
}

export class AuthApi {
  static async signUp(email: string, password: string) {
    return await axiosClient.post('/auth/signup', {
      email,
      password,
    });
  }

  static async signIn(
    email: string,
    password: string,
  ): Promise<SignInResponse> {
    return await axiosClient.post('/auth/signin', {
      email,
      password,
    });
  }
}
