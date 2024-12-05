const BASE_URL = import.meta.env.VITE_GITHUB_BASE_URL;

export const getGithubProfile = async (name: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  console.log(name)
};

export const getGithubRepository = async (name: string) => {
  const response = await fetch(`${BASE_URL}/${name}/repos`);
  const data = await response.json();
  return data;
};
