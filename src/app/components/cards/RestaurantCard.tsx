import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    Rating,
} from "@mui/material";
import { clipPath } from "@core/constants";

type RestaurantCardProps = {
    banner: string;
    name: string;
    description?: string;
    stars: number;
    workTime: { open: string; close: string };
};

type RestaurantCardText = {
    name: string;
    infoElement: JSX.Element;
};

type RestaurantCardInfoText = Pick<
    RestaurantCardProps,
    "workTime" | "description" | "stars"
>;

type RestaurantCardContent = Pick<RestaurantCardProps, "banner" | "name"> & {
    restaurantCardText: JSX.Element;
};

const getCardInfo = (details: RestaurantCardInfoText) => {
    return details.description ? (
        <RestaurantCardContentDetailText {...details} />
    ) : (
        <RestaurantCardContentText {...details} />
    );
};

const RestaurantCardContentText = ({
    stars,
    workTime,
}: Pick<RestaurantCardInfoText, "stars" | "workTime">) => (
    <>
        <Rating
            readOnly
            name={`Restaurant rating ${stars} stars`}
            value={stars}
            size="small"
            sx={{
                ml: 1,
            }}
        />
        <Typography
            variant="body1"
            component="em"
            sx={{
                mt: 1,
                fontStyle: "normal",
            }}
        >
            Work time {workTime.open} - {workTime.close}
        </Typography>
        <Typography
            variant="body2"
            sx={{
                fontSize: 12,
                color: "grey.400",
            }}
            component="span"
        >
            Before you 3$
        </Typography>
    </>
);

const RestaurantCardContentDetailText = ({
    stars,
    description,
}: RestaurantCardInfoText) => (
    <>
        <Typography
            variant="body1"
            component="em"
            sx={{
                fontStyle: "normal",
                fontSize: 10,
                maxHeigh: 55,
                overflowY: "auto",
                mb: 0.8,
            }}
        >
            {description}
        </Typography>
        <Rating
            readOnly
            name={`Restaurant rating ${stars} stars`}
            value={stars}
            size="small"
        />
    </>
);

const RestaurantCardText = ({ name, infoElement }: RestaurantCardText) => {
    return (
        <>
            <Typography
                variant="h5"
                color="initial"
                component="strong"
                sx={{
                    fontWeight: "bold",
                    fontSize: 16,
                }}
            >
                {name}
            </Typography>
            {infoElement}
        </>
    );
};

const RestaurantCardContent = ({
    name,
    banner,
    restaurantCardText,
}: RestaurantCardContent) => (
    <>
        <CardMedia
            component="img"
            image={banner}
            sx={clipPath}
            alt={`image alluding to the ${name} restaurant`}
        />
        <CardContent
            sx={{
                display: "flex",
                flexDirection: "column",
                py: 0,
                maxWidth: 205,
                pr: 0,
            }}
        >
            {restaurantCardText}
        </CardContent>
    </>
);

const RestaurantCard = ({
    banner,
    name,
    stars,
    workTime,
    description,
}: RestaurantCardProps) => {
    return (
        <Card
            sx={{
                display: "flex",
                maxWidth: 358,
                height: description ? "auto" : 108,
            }}
            elevation={0}
        >
            <RestaurantCardContent
                banner={banner}
                name={name}
                restaurantCardText={
                    <RestaurantCardText
                        name={name}
                        infoElement={getCardInfo({
                            stars,
                            workTime,
                            description,
                        })}
                    />
                }
            />
        </Card>
    );
};

export default RestaurantCard;
