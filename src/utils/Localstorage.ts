export const getAccessToken = (): string | null => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken;
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const removeAccessToken = () => {
  localStorage.removeItem('accessToken');
};
