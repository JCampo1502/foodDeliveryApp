import { useState } from "react";

type useCounterProps = {
    initialValue?: number;
    max?: number;
    min?: number;
    stepValue?: number;
};

export const useCounter = ({
    initialValue = 1,
    max,
    min = 0,
    stepValue = 1,
}: useCounterProps) => {
    const [count, setCount] = useState(initialValue);
    const increment = () =>
        setCount(max && count + stepValue >= max ? max : count + stepValue);
    const decrement = () =>
        setCount(count - stepValue <= min ? min : count - stepValue);
    return {
        count,
        setCount,
        increment,
        decrement,
    };
};
