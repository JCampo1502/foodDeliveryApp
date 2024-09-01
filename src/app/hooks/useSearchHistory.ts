import { useState } from "react";

type UserHistory = {
    [key: string]: {
        history: string[];
    };
};
const storageKey = "user:search-history";

const getUserHistory = (id: string): string[] | null => {
    const json = localStorage.getItem(storageKey);
    const data: UserHistory | null = json && JSON.parse(json);
    return data && data[id].history;
};

const addUserHistory = (
    id: string,
    history: string[],
    newItem: string
): string[] => {
    const newHistory = [newItem, ...history].slice(0, 4);
    console.log(newHistory);
    const json = localStorage.getItem(storageKey);
    const data = (json && JSON.parse(json)) || {};
    localStorage.setItem(
        storageKey,
        JSON.stringify({
            ...data,
            [id]: {
                history: newHistory,
            },
        })
    );
    return newHistory;
};

export const useSearchHistory = (userId: string) => {
    const [history, setHistory] = useState(getUserHistory(userId));
    const addToHistory = (newItem: string): void => {
        const newHistory = addUserHistory(userId, history ?? [], newItem);
        setHistory(newHistory);
    };

    return {
        history,
        addToHistory,
    };
};
