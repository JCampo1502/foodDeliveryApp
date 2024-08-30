import type { NavbarTabsType } from "@core/types/index";
import { AppBar, Toolbar, SvgIcon } from "@mui/material";
import NavbarTabs from "./NavbarTabs";

import searchIcon from "../../assets/images/SearchIcon.svg?react";
import profileIcon from "../../assets/images/ProfileIcon.svg?react";
import HistoryIcon from "../../assets/images/HistoricIcon.svg?react";
import homeIcon from "../../assets/images/HomeIcon.svg?react";
const myTabs: NavbarTabsType[] = [
    {
        label: "Home",
        icon: <SvgIcon component={homeIcon} inheritViewBox />,
        address: "/home",
    },
    {
        label: "Search",
        icon: <SvgIcon component={searchIcon} inheritViewBox />,
        address: "/search",
    },
    {
        label: "Historic",
        icon: <SvgIcon component={HistoryIcon} inheritViewBox />,
        address: "/historic",
    },
    {
        label: "Profile",
        icon: <SvgIcon component={profileIcon} inheritViewBox />,
        address: "/profile",
    },
];

const Navbar = () => {
    return (
        <>
            <AppBar
                color="default"
                sx={{
                    position: "fixed",
                    top: "auto",
                    bottom: 0,
                }}
                component="header"
            >
                <Toolbar component="nav">
                    <NavbarTabs tabs={myTabs} />
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
