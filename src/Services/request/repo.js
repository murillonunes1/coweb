import {apiUrl} from '../api'

export const getGithubRepository = async () => {
  const response = await apiUrl.get(`/users/murillonunes1/repos`, {
    params: {
      per_page: 12,
      page: 2
    }
  });
  return response;
}