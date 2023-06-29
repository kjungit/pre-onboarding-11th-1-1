interface Response {
  access_token: string;
}

export const getAccessToken = (key: string): string | null => {
  const accessToken = localStorage.getItem(key);
  return accessToken;
};

export const setAccessToken = (response: Response) => {
  const { access_token } = response;
  localStorage.setItem('accessToken', access_token);
};

export const removeAccessToken = (key: string) => {
  localStorage.removeItem(key);
};
