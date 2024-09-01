import { useState } from "react";

type UseFormProps<T> = {
    initialState?: { [key: string]: T };
    actions?: (newState: { [key: string]: T }) => void;
};

export const useForm = <T>({ initialState, actions }: UseFormProps<T>) => {
    const [inputs, setInputs] = useState(initialState || {});
    const updateInputValue = (key: string, value: T) => {
        if (inputs[key] === value) return;
        setInputs({ ...inputs, [key]: value });
        if (actions) {
            actions(inputs);
        }
    };
    return {
        inputs,
        setInputs,
        updateInput: updateInputValue,
    };
};
