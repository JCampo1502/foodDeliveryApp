import { Container } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const BaseContainer = () => {
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
                <Outlet />
            </Container>
        </>
    );
};

export default BaseContainer;
