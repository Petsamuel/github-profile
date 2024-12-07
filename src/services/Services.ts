const BASE_URL = import.meta.env.VITE_GITHUB_BASE_URL;
// const ROAST_URL = import.meta.env.VITE_ROAST_URL;
const BASE_REPO_URL = import.meta.env.VITE_GITHUB_REPOS_URL;

export const getGithubProfile = async (name: string) => {
  const response = await fetch(`${BASE_URL}/${name}`);
  const data = await response.json();
  return data;
};

export const getGithubRepository = async (name: string) => {
  const response = await fetch(`${BASE_URL}/${name}/repos`);
  const data = await response.json();

  return data;
};

export const getCommitMessage = async (name: string, repo: string) => {
  const response = await fetch(`${BASE_REPO_URL}/${name}/${repo}/commits`);
  const data = response.json();
  return data;
};

export const getRoast = async (name: string, commit: []) => {
  const data = [name, commit];

  return data;
};

export const formatTimeAgo = (dateString: string): string => {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
  );

  if (diffInDays < 1) return "Today";
  return rtf.format(-diffInDays, "day");
};
