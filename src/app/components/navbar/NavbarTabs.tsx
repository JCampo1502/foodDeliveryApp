import { useState } from "react";
import type { NavbarTabsType } from "@core/types";
import { Tab, tabClasses, Tabs, tabsClasses } from "@mui/material";
import { NavLink } from "react-router-dom";

type NavbarTabsProps = {
    tabs: NavbarTabsType[];
};

const renderTabs = ({ label, icon, address }: NavbarTabsType) => (
    <Tab
        aria-label={label}
        icon={icon}
        color="primary"
        key={label}
        disableRipple
        component={NavLink}
        to={address}
    />
);

const NavbarTabs = ({ tabs }: NavbarTabsProps) => {
    const [value, setValue] = useState(0);
    const handleChange = (_: React.SyntheticEvent, val: number) =>
        setValue(val);

    return (
        <Tabs
            aria-label="web menu"
            value={value}
            onChange={handleChange}
            sx={{
                width: 1,

                [`& .${tabsClasses.indicator}`]: {
                    opacity: "0",
                },
                [`& .${tabClasses.selected}`]: {
                    position: "relative",
                    "&::after": {
                        width: 5,
                        height: 5,
                        bgcolor: "primary.main",
                        position: "absolute",
                        bottom: 0,
                        borderRadius: "50%",
                        content: `''`,
                    },
                },

                [`& .${tabsClasses.flexContainer}`]: {
                    justifyContent: "space-evenly",
                    maxWidth: "md",
                    mx: "auto",
                },
            }}
        >
            {tabs.map(renderTabs)}
        </Tabs>
    );
};

export default NavbarTabs;
