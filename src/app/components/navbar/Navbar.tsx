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
    },
    {
        label: "Search",
        icon: <SvgIcon component={searchIcon} inheritViewBox />,
    },
    {
        label: "Historic",
        icon: <SvgIcon component={HistoryIcon} inheritViewBox />,
    },
    {
        label: "Profile",
        icon: <SvgIcon component={profileIcon} inheritViewBox />,
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
