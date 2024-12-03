export const UserRequest = () => {
  fetch("https://api.github.com/users/:username")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const RepositoryRequest = () => {
  fetch("https://api.github.com/users/:username")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
