export default <T>(name: string): { [key: string]: T } => {
    const json = localStorage.getItem(name);
    return (json && JSON.parse(json)) || {};
};
