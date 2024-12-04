type localStoreProps = {
  name: string;
  obj?: unknown;
};

export const getLocalStoreData = ({ name }: localStoreProps) => {
  const storedData = localStorage.getItem(name);
  return storedData ? JSON.parse(storedData) : [];
};

export const setLocalStoreData = ({ name, obj }: localStoreProps) => {
  localStorage.setItem(name, JSON.stringify([obj]));
};

export const clearLocalStore = () => {
  localStorage.clear();
};
