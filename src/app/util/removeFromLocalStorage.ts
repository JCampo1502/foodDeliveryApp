type RemoveFromLocalStorage = {
    name: string;
    key: string;
};
export default ({ name, key }: RemoveFromLocalStorage) => {
    const json = localStorage.getItem(name);
    const localData = (json && JSON.parse(json)) || {};
    delete localData[key];
    localStorage.setItem(name, JSON.stringify(localData));
    return localData;
};
