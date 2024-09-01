import { Box, Button, Stack, Typography } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

type SearchHistoryProps = {
    history: string[] | null;
    handleClick: (value: string) => void;
};

const SearchHistory = ({ history, handleClick }: SearchHistoryProps) => {
    return (
        <Box>
            <Typography
                variant="h3"
                sx={{
                    fontSize: 16,
                }}
            >
                Recent Searches
            </Typography>
            <Stack
                sx={{
                    alignItems: "flex-start",
                }}
                spacing={0.5}
            >
                {history &&
                    history.map((value, i) => (
                        <Button
                            onClick={() => handleClick(value)}
                            key={i + value}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                                color: "grey.300",
                            }}
                            disableRipple
                        >
                            <ReplayIcon />
                            <Typography
                                variant="body2"
                                sx={{ textTransform: "capitalize" }}
                            >
                                {value}
                            </Typography>
                        </Button>
                    ))}
            </Stack>
        </Box>
    );
};

export default SearchHistory;
