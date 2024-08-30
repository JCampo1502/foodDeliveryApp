import { Fade, Grid, Skeleton } from "@mui/material";
import { clipPath } from "@core/constants";
import { useEffect, useState } from "react";

const CardContentTextSkeleton = () => (
    <>
        <Skeleton variant="text" height={"1.5rem"} />
        <Skeleton
            variant="text"
            sx={{
                height: 18,
                ml: 1,
                width: 90,
            }}
        />
        <Skeleton
            variant="rounded"
            sx={{
                width: 174,
                height: 49,
            }}
        />
    </>
);

const CardContentSkeleton = () => (
    <>
        <Grid item>
            <Skeleton
                variant="rectangular"
                sx={{
                    ...clipPath,
                }}
                animation="wave"
            />
        </Grid>
        <Grid item>
            <CardContentTextSkeleton />
        </Grid>
    </>
);

const CardSkeleton = () => {
    const [open, setOpen] = useState(true);
    setTimeout(() => setOpen(false), 6000);
    return (
        <Fade in={open} timeout={1000}>
            <Grid
                container
                sx={{
                    display: "flex",
                    maxWidth: 358,
                    height: 108,
                    my: 2,
                }}
                columnSpacing={2}
            >
                <CardContentSkeleton />
            </Grid>
        </Fade>
    );
};

export default CardSkeleton;
