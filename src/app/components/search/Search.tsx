import {
    IconButton,
    InputBase,
    InputLabel,
    Paper,
    SvgIcon,
} from "@mui/material";
import SearchIcon from "@app/assets/images/SearchIcon.svg?react";
import TrashIcon from "@app/assets/images/Trash.svg?react";

type SearchProps = {
    handleInput: () => void;
    show: boolean;
    inputRef: React.MutableRefObject<HTMLInputElement | null>;
};

const Search = ({ handleInput, inputRef, show }: SearchProps) => {
    return (
        <Paper
            component="form"
            sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 1.5,
                borderRadius: 5,
                bgcolor: "grey.100",
                gap: 1,
            }}
            elevation={0}
        >
            <InputLabel
                htmlFor="search-input"
                sx={{
                    mr: 1,
                }}
            >
                <SvgIcon
                    component={SearchIcon}
                    sx={{
                        color: "grey.400",
                    }}
                />
            </InputLabel>
            <InputBase
                id="search-input"
                placeholder="Search for a dish"
                inputProps={{
                    "aria-label": "Search for a dish",
                }}
                sx={{
                    flexGrow: 1,
                }}
                inputRef={inputRef}
                onInput={handleInput}
            />
            <IconButton
                sx={{
                    visibility: show ? "visible" : "hidden",
                }}
            >
                <SvgIcon component={TrashIcon} />
            </IconButton>
        </Paper>
    );
};

export default Search;
