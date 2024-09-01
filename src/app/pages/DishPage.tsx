import { useEffect, useMemo } from "react";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Checkbox,
    Chip,
    Fab,
    FormControlLabel,
    FormGroup,
    IconButton,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import IDish from "@core/interfaces/IDish";
import { baseUrl } from "@core/constants";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import HistoryIcon from "@mui/icons-material/History";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useForm } from "../hooks/useForm";
import { useCounter } from "../hooks/useCounter";
import { Grid2 as Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import addToLocalStorage from "../util/addToLocalStorage";
import getFromLocalStorage from "../util/getFromLocalStorage";
import removeFromLocalStorage from "../util/removeFromLocalStorage";

type DishCardActionsProps = {
    additionalIngredients: {
        label: string;
        value: number;
    }[];
    price: number;
    id: string;
};

type DishLocal = {
    count: number;
    ingredients: { [key: string]: boolean };
};

const DishCardActions = ({
    additionalIngredients,
    price,
    id,
}: DishCardActionsProps) => {
    const data = getFromLocalStorage<DishLocal>("user-dishes");
    const { count, increment, decrement } = useCounter({
        initialValue: (data[id] && data[id].count) || 0,
        max: 10,
    });
    const { inputs, updateInput } = useForm({
        initialState:
            (data[id] && data[id].ingredients) ||
            additionalIngredients.reduce(
                (prev: { [key: string]: boolean }, { label }) => ({
                    ...prev,
                    [label]: false,
                }),
                {}
            ),
    });
    useEffect(() => {
        const data = {
            name: "user-dishes",
            value: {
                [id]: {
                    count,
                    ingredients: inputs,
                },
            },
        };
        if (count !== 0) {
            addToLocalStorage<DishLocal>(data);
        } else {
            removeFromLocalStorage({
                name: "user-dishes",
                key: id,
            });
        }
    }, [count, inputs, id]);

    const total = useMemo(() => {
        const totalIngredients = additionalIngredients.reduce(
            (prev, { label, value }) => (inputs[label] ? prev + value : prev),
            0
        );
        return (price * count + totalIngredients).toFixed(2);
    }, [count, inputs, additionalIngredients, price]);
    return (
        <Paper
            component="form"
            elevation={0}
            sx={{
                width: 1,
            }}
        >
            <Typography
                component="h3"
                sx={{
                    fontSize: 16,
                    color: "grey.400",
                }}
            >
                Additional Ingredients
            </Typography>
            <FormGroup>
                {additionalIngredients.map(({ label, value }, i) => (
                    <Stack
                        direction="row"
                        key={label + i}
                        sx={{
                            justifyContent: "space-between",
                        }}
                    >
                        <FormControlLabel
                            label={label}
                            control={
                                <Checkbox
                                    checked={inputs[label]}
                                    onChange={() =>
                                        updateInput(label, !inputs[label])
                                    }
                                />
                            }
                        />
                        <Typography
                            sx={{
                                display: "flex",
                                alignItems: "Center",
                                color: inputs[label] ? "primary.main" : "#000",
                            }}
                        >
                            +{value}
                            <AttachMoneyIcon
                                sx={{
                                    fontSize: 20,
                                }}
                            />
                        </Typography>
                    </Stack>
                ))}
            </FormGroup>
            <Grid
                container
                spacing={3}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 2,
                }}
            >
                <Grid
                    sx={{
                        width: 133,
                        bgcolor: "grey.200",
                        height: 44,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        borderRadius: 2,
                    }}
                >
                    <IconButton aria-label="subtract" onClick={decrement}>
                        <RemoveIcon />
                    </IconButton>
                    <Typography
                        sx={{
                            fontSize: 23,
                        }}
                    >
                        {count}
                    </Typography>
                    <IconButton aria-label="increase" onClick={increment}>
                        <AddIcon />
                    </IconButton>
                </Grid>
                <Grid
                    sx={{
                        width: 249,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        bgcolor: "primary.main",
                        height: 44,
                        px: 3,
                        borderRadius: 2,
                        fontSize: 16,
                    }}
                >
                    <Typography>Add</Typography>
                    <Chip
                        icon={<AttachMoneyIcon />}
                        label={total}
                        sx={{
                            fontSize: 23,
                            fontWeight: "bold",
                            bgcolor: "transparent",
                        }}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

const DishPage = () => {
    const navigate = useNavigate();
    const dish = useLoaderData() as IDish;

    return (
        <Await
            resolve={dish}
            children={({
                id,
                image,
                name,
                timing,
                description,
                additionalIngredients,
                price,
            }) => (
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
                    }}
                    elevation={0}
                >
                    <Box
                        sx={{
                            position: "relative",
                            height: 270,
                            minWidth: {
                                xs: 1,
                                sm: 390,
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            src={`${baseUrl}${image}`}
                            aria-label="plate"
                            sx={{
                                width: 1,
                                height: 1,
                            }}
                        />
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
                    </Box>
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
                        <DishCardActions
                            additionalIngredients={additionalIngredients}
                            price={price}
                            id={id}
                        />
                    </CardActions>
                </Card>
            )}
        />
    );
};

export default DishPage;
