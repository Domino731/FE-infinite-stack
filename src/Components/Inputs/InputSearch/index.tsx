import {InputSearchProps} from "./types";
import Flex from "../../Flex";
import {ErrorMessage, Label} from "../styles";
import {InputComponent} from "../Input/styles";
import {useToggle} from "../../../hooks/useToggle";
import {ChangeEvent, useCallback, useEffect, useRef, useState} from "react";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import Box from "../../Box";
import {OptionButton, SelectButtonIcon, SelectOptionsList} from "../Select/styles";


export const InputSearch = ({
                                label,
                                onChange,
                                value,
                                name,
                                onBlur,
                                isInvalid,
                                error,
                                type,
                                placeholder,
                                options,
                                listHeight,
                                disabled,
                                onInputChange
                            }: InputSearchProps) => {
    const {flag, handleChangeFlag} = useToggle();

    const [inputValue, setInputValue] = useState<string>('');

    const ref = useRef(null);

    useOutsideClick(ref, () => {
        handleChangeFlag(false)
    });

    useEffect(() => {
        const label: string | undefined = options.find((el) => el.value === value)?.label;
        if (label) {
            setInputValue(label)
        }
    }, [options, value])

    const handleChangeInputValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {target: {value}} = e;
        setInputValue(value);
        if (onInputChange) {
            onInputChange(value)
        }
    }, [onInputChange])

    return <Flex bgColor="white" dir="column" mb={20} position="relative" ref={ref}>
        {label && <Label>{label}</Label>}
        <InputComponent
            type={type}
            onBlur={onBlur}
            isInvalid={isInvalid}
            onChange={handleChangeInputValue}
            value={inputValue}
            name={name}
            placeholder={placeholder}
            onFocus={() => handleChangeFlag(true)}
            disabled={disabled}
        />
        {(flag && options.length) &&
            <Box zIndex={100} border="2px solid" borderColor="primary" top="64px" p="8" position="absolute"
                 bgColor="white"
                 w="100%" bR="sm">
                <SelectOptionsList listHeight={listHeight}>
                    {options.map(({value, label}) => <li key={`input-search-options-list-${label}`}>
                        <OptionButton onClick={(e) => {
                            e.preventDefault();
                            handleChangeFlag(false);
                            if (onChange) {
                                onChange(value);
                            }
                        }}>
                            {label}
                        </OptionButton>
                    </li>)}
                </SelectOptionsList>
            </Box>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Flex>
}
