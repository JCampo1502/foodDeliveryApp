import { Tab, Tabs, tabsClasses } from "@mui/material";
import { useEffect, useState } from "react";

type Promo = {
    value: string;
    url: string;
};

const promos: Promo[] = [
    {
        value: "specialDay",
        url: "/promo-2.png",
    },

    {
        value: "fast food",
        url: "/promo-3.png",
    },
    {
        value: "chocolate",
        url: "/promo-4.png",
    },
    {
        value: "delivery",
        url: "/promo-1.png",
    },
    {
        value: "Colombina",
        url: "/promo-5.png",
    },
];

const randomPromo = (setSelectedPromo: (newVal: string) => void) => {
    const intervalIndex = setInterval(() => {
        const promoSelected = Math.floor(Math.random() * promos.length);
        setSelectedPromo(promos[promoSelected].value);
    }, 3000);
    return () => clearInterval(intervalIndex);
};

const handlePromo = ({ value, url }: Promo) => (
    <Tab
        key={value}
        aria-label={value}
        value={value}
        disableRipple
        sx={{
            backgroundImage: `url(${url})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            objectFit: "scale-down",
            height: 80,
            width: 259,
            p: 0,
            m: 0,
            borderRadius: 3,
        }}
    />
);

const PromoTabs = () => {
    const [selectedPromo, setSelectedPromo] = useState("specialDay");
    useEffect(() => randomPromo(setSelectedPromo), []);
    const handleChange = (_: React.SyntheticEvent, newVal: string) =>
        setSelectedPromo(newVal);
    return (
        <Tabs
            value={selectedPromo}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            sx={{
                [`& .${tabsClasses.indicator}`]: {
                    display: "none",
                },
                [`& .${tabsClasses.flexContainer}`]: {
                    gap: 3,
                },
            }}
        >
            {promos.map(handlePromo)}
        </Tabs>
    );
};

export default PromoTabs;
