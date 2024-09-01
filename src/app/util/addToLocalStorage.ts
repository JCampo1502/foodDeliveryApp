type AddToLocalStorageProps<T> = {
    name: string;
    value: { [key: string]: T };
};

export default <T>({ name, value }: AddToLocalStorageProps<T>) => {
    const json = localStorage.getItem(name);
    const localData = (json && JSON.parse(json)) || {};
    const newData = { ...localData, ...value };
    localStorage.setItem(name, JSON.stringify(newData));
    return newData;
};
