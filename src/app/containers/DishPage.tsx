import {
    Card,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography,
} from "@mui/material";
import IDish from "../../core/interfaces/IDish";
import { baseUrl } from "../../core/constants";

type DishPageProps = {
    dish: IDish;
};
const DishPage = ({
    dish: { image, name, timing, description },
}: DishPageProps) => {
    return (
        <Card>
            <CardMedia
                component="img"
                src={`${baseUrl}/${image}`}
                aria-label="plate"
            />
            <CardContent>
                <Stack>
                    <Typography>{name}</Typography>
                    <Chip label={timing} />
                </Stack>
                <Typography>{description}</Typography>
            </CardContent>
        </Card>
    );
};

export default DishPage;
