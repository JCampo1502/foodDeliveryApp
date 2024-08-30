import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Fab,
    Stack,
    Typography,
} from "@mui/material";
import IDish from "@core/interfaces/IDish";
import { baseUrl } from "@core/constants";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import HistoryIcon from "@mui/icons-material/History";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const DishPage = () => {
    const navigate = useNavigate();
    const dish = useLoaderData() as IDish;
    return (
        <Await
            resolve={dish}
            children={({ image, name, timing, description }) => (
                <Card
                    sx={{
                        mx: "auto",
                        p: 2,
                        mt: 2,

                        maxWidth: "md",
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        position: "relative",
                    }}
                    elevation={0}
                >
                    <CardMedia
                        component="img"
                        src={`${baseUrl}${image}`}
                        aria-label="plate"
                        sx={{
                            height: 270,
                            minWidth: {
                                xs: 1,
                                sm: 390,
                            },
                        }}
                    />
                    <CardContent>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            mb={2}
                        >
                            <Typography
                                component="h2"
                                sx={{
                                    fontSize: 23,
                                }}
                            >
                                {name}
                            </Typography>
                            <Chip
                                label={timing}
                                icon={<HistoryIcon />}
                                sx={{
                                    bgcolor: "#fff",
                                }}
                            />
                        </Stack>
                        <Typography>{description}</Typography>
                    </CardContent>
                    <CardActions>
                        <Fab
                            sx={{
                                position: "absolute",
                                top: 24,
                                left: 22,
                                bgcolor: "#fff",
                                boxShadow: "none",
                            }}
                            onClick={() => navigate(-1)}
                        >
                            <ArrowBackIosNewIcon />
                        </Fab>
                    </CardActions>
                </Card>
            )}
        />
    );
};

export default DishPage;
