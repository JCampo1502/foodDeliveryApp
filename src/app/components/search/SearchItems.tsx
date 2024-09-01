import IDish from "@/core/interfaces/IDish";
import { Box, Paper, Stack, Typography } from "@mui/material";
import SearchCard from "../cards/SearchCard";
import { useNavigate } from "react-router-dom";
import img from "/public/SearchNotFount.png";
type SearchItemsProps = {
    dishes: IDish[];
};

const EmptySearch = () => (
    <Paper elevation={0}>
        <Box
            sx={{
                backgroundImage: `url(${img})`,
                height: 177,
                width: 245,
                mb: 5,
                mt: 2,
            }}
        />
        <Typography variant="body2" textAlign="center">
            Nothing Found
        </Typography>
    </Paper>
);

const SearchItems = ({ dishes }: SearchItemsProps) => {
    const navigate = useNavigate();
    return (
        <Stack spacing={1}>
            {dishes.length == 0 ? (
                <EmptySearch />
            ) : (
                dishes.map(({ image, id, name, price }) => (
                    <Box
                        onClick={() => navigate(`/dish/${id}`)}
                        key={id}
                        sx={{
                            cursor: "pointer",
                        }}
                    >
                        <SearchCard image={image} name={name} price={price} />
                    </Box>
                ))
            )}
        </Stack>
    );
};

export default SearchItems;
