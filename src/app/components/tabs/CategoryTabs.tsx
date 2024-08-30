import { Category as CategoryEnum } from "@core/enums";
import { Tabs, Tab, tabClasses, tabsClasses, styled } from "@mui/material";
import LunchDiningSharpIcon from "@mui/icons-material/LunchDiningSharp";
import RestaurantMenuSharpIcon from "@mui/icons-material/RestaurantMenuSharp";
import LocalPizzaSharpIcon from "@mui/icons-material/LocalPizzaSharp";

type Category = {
    value: CategoryEnum;
    label: string;
    icon?: JSX.Element;
};

type CategoryTabsProps = {
    setSelectedCategory: (newCategory: CategoryEnum) => void;
    selectedCategory: CategoryEnum;
};

const Categories: Category[] = [
    {
        value: CategoryEnum.All,
        label: "All",
    },
    {
        value: CategoryEnum.FastFood,
        label: "Fast food",
        icon: <LunchDiningSharpIcon />,
    },
    {
        value: CategoryEnum.Salad,
        label: "Salad",
        icon: <RestaurantMenuSharpIcon />,
    },
    {
        value: CategoryEnum.Pizza,
        label: "Pizza",
        icon: <LocalPizzaSharpIcon />,
    },
];

const StyledTab = styled(Tab)(
    ({ theme }) => `
    font-size: 12px;
    text-transform: capitalize;
    background-color: ${theme.palette.grey[200]};
    color: #000;
    height: 32px;
    border-radius: .45rem;
    width: 106px;
    padding: 0;
    & .${tabClasses.icon} {
        height: 16px;
        width: 16px;
        margin: 0;
    }
    &.${tabClasses.labelIcon}, &.${tabClasses.root} {
        min-height: 32px !important;
        width: 106px;
        justify-content: space-evenly;
    }

    &.${tabClasses.selected} {
        background-color: ${theme.palette.primary.main};
        color: #000;
    }
`
);

const handleCategories = ({ value, label, icon }: Category) => (
    <StyledTab
        key={value}
        value={value}
        label={label}
        icon={icon}
        iconPosition="start"
    />
);

const CategoryTabs = ({
    setSelectedCategory,
    selectedCategory,
}: CategoryTabsProps) => {
    const handleChange = (
        _: React.SyntheticEvent,
        newSelectedCategory: CategoryEnum
    ) => setSelectedCategory(newSelectedCategory);
    return (
        <Tabs
            value={selectedCategory}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="categories filter"
            sx={{
                minHeight: 32,
                [`& .${tabsClasses.indicator}`]: {
                    display: "none",
                },
                [`& .${tabsClasses.flexContainer}`]: {
                    gap: "10px",
                },
            }}
        >
            {Categories.map(handleCategories)}
        </Tabs>
    );
};

export default CategoryTabs;
