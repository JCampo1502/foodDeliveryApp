import { Stack } from "@mui/material";
import { useRef, useState } from "react";
import IDish from "@/core/interfaces/IDish";
import { searchDishByName } from "@/infrastructure/services/dish/get";
import Search from "../components/search/Search";
import { useSearchHistory } from "../hooks/useSearchHistory";
import SearchHistory from "../components/search/SearchHistory";
import SearchItems from "../components/search/SearchItems";

const userId = "1";

const SearchPage = () => {
    const { history, addToHistory } = useSearchHistory(userId);
    const [show, setShow] = useState(false);
    const [dishes, setDishes] = useState<IDish[] | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    let timeoutIndex: NodeJS.Timeout;
    const handleInput = (): void => {
        const value = inputRef.current?.value;
        clearTimeout(timeoutIndex);
        if (!value) {
            setDishes(null);
            return;
        }
        setShow(value.length === 0);

        timeoutIndex = setTimeout(() => {
            searchDishByName(value).then((dishes) => setDishes(dishes));
            addToHistory(value);
        }, 1200);
    };
    const handleHistoryClick = (value: string) => {
        if (!inputRef.current) return;
        inputRef.current.value = value;
        searchDishByName(value).then((dishes) => setDishes(dishes));
    };

    return (
        <Stack
            sx={{
                maxWidth: 360,
                mx: "auto",
            }}
            spacing={3}
        >
            <Search handleInput={handleInput} show={show} inputRef={inputRef} />
            {!dishes ? (
                <SearchHistory
                    history={history}
                    handleClick={handleHistoryClick}
                />
            ) : (
                <SearchItems dishes={dishes} />
            )}
        </Stack>
    );
};

export default SearchPage;
