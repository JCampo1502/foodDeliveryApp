import Navbar from "@app/components/navbar/Navbar";
/* import HomePage from "@app/containers/HomePage";
import RestaurantPage from "@app/containers/RestaurantPage"; */
import { Container } from "@mui/material";
import DishPage from "./app/containers/DishPage";

const restaurant = {
    banner: "/images/restaurants/restaurant-img-1.png",
    id: "b1e5d6f9-96b6-4c7c-a59a-5d017b3a6478",
    logo: "/images/logos/Logo-1.png",
    name: "Pardes Restaurant",
    description:
        "Pardes Restaurant ofrece una experiencia culinaria moderna, destacándose por sus frescas y deliciosas ensaladas y opciones rápidas de comida como pizzas. Ven y disfruta de una combinación perfecta de sabor y tradición.",
    stars: 4,
    workTime: {
        open: "08:00 AM",
        close: "10:00 PM",
    },
    dishes: [
        {
            image: "/images/dishes/salad-1.png",
            timing: "15:20min",
            deliveryMinCost: 5,
            deliveryMaxCost: 20,
            name: "Bolognese salad",
            description:
                "Una ensalada Bolognese llena de sabor con tomates frescos, grano y hojas de lechuga, perfecta para una comida ligera y saludable.",
            price: 14.45,
            additionalIngredients: {
                Tomatoes: 2,
                Grain: 1,
                "Lettuce leaf": 1,
            },
            categories: ["Salad"],
        },
        {
            image: "/images/dishes/pizza-1.png",
            timing: "45:00min",
            deliveryMinCost: 7,
            deliveryMaxCost: 20,
            name: "Meat pizza",
            description:
                "Una pizza cargada de carne y queso, perfecta para aquellos que buscan una comida rápida y deliciosa.",
            price: 29,
            additionalIngredients: {
                Tomatoes: 4,
                Pepperoni: 5,
                Cheese: 5,
            },
            categories: ["FastFood"],
        },
    ],
};

const dish = {
    image: "/images/dishes/pizza-1.png",
    timing: "45:00min",
    name: "Meat pizza",
    description:
        "Una pizza cargada de carne y queso, perfecta para aquellos que buscan una comida rápida y deliciosa.",
    price: 29,
    additionalIngredients: {
        Tomatoes: 4,
        Pepperoni: 5,
        Cheese: 5,
    },
};

function App() {
    return (
        <>
            <Navbar />
            <Container
                maxWidth="md"
                component="main"
                sx={{
                    mb: 10,
                }}
            >
                <DishPage dish={dish} />
                {/* <HomePage /> */}
                {/* <RestaurantPage restaurant={restaurant} /> */}
            </Container>
        </>
    );
}

export default App;
