import {
    createBrowserRouter,
    RouterProvider,
    Params,
    redirect,
} from "react-router-dom";
import BaseContainer from "./app/containers/BaseContainer";
import HomePage from "./app/pages/HomePage";
import RestaurantPage from "./app/pages/RestaurantPage";
import { getRestaurantById } from "./infrastructure/services/restaurant/get";
import DishPage from "./app/pages/DishPage";
import { getDishById } from "./infrastructure/services/dish/get";
import SearchPage from "./app/pages/SearchPage";

type LoaderProps = {
    params: Params;
};

const dishLoader = async ({ params }: LoaderProps) => {
    const { id } = params;
    if (typeof id !== "string") {
        return redirect("/home");
    }
    try {
        const dish = await getDishById(id);
        if (!dish) {
            return redirect("/home");
        }
        return dish;
    } catch (error) {
        console.error(error);
        return redirect("/home");
    }
};

const restaurantLoader = async ({ params }: LoaderProps) => {
    const { id } = params;
    if (typeof id !== "string") {
        return redirect("/home");
    }
    try {
        const data = await getRestaurantById(id);
        if (!data) {
            return redirect("/home");
        }
        return data;
    } catch (error) {
        console.error(error);
        return redirect("/home");
    }
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseContainer />,
        children: [
            {
                index: true,
                path: "home",
                element: <HomePage />,
            },
            {
                path: "search",
                element: <SearchPage />,
            },
            {
                path: "historic",
                element: <>Hello historic</>,
            },
            {
                path: "profile",
                element: <>Hello profile</>,
            },
        ],
    },
    {
        path: "/restaurant/:id",
        element: <RestaurantPage />,
        loader: restaurantLoader,
    },
    {
        path: "/dish/:id",
        element: <DishPage />,
        loader: dishLoader,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
