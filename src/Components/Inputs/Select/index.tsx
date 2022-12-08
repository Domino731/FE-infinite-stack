import {SelectContainerProps, SelectProps} from "./types";
import Input from "../Input";
import Box from "../../Box";
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import {
    OptionButton,
    SelectButtonIcon,
    SelectContainer,
    SelectIconWrapper,
    SelectInputArea, SelectOptionInputIcon,
    SelectOptionsList
} from "./styles";
import {useMemo, useRef} from "react";
import {useToggle} from "../../../hooks/useToggle";
import {useOutsideClick} from "../../../hooks/useOutsideClick";

export const Select = ({value, options, label, onChange, placeholder, isInvalid, error}: SelectProps) => {
    const {flag, handleToggleFlag, handleChangeFlag} = useToggle();
    const ref = useRef(null);

    useOutsideClick(ref, () => handleChangeFlag(false));

    const selectedOption = useMemo(() => options.find((el) => el.value === value), [options, value])


    return <>
        <SelectContainer inputLeftPadding={Boolean(selectedOption?.iconUrl)}>
            <Input label={label} value={selectedOption?.label} placeholder={placeholder} isInvalid={isInvalid}
                   error={error}/>
            <SelectInputArea ref={ref} onClick={handleToggleFlag}>
                <SelectOptionInputIcon src={selectedOption?.iconUrl}/>
                <SelectIconWrapper isActive={flag}>
                    <BsFillArrowDownCircleFill/>
                </SelectIconWrapper>
            </SelectInputArea>
            {flag && <Box zIndex={100} border="2px solid" borderColor="primary" top="64px" p="8" position="absolute"
                          bgColor="white"
                          w="100%" bR="sm">
                <SelectOptionsList>
                    {options.map(({value, label, iconUrl}) => <li>
                        <OptionButton onClick={(e) => {
                            e.preventDefault();
                            handleChangeFlag(false);
                            onChange(value);
                        }}>
                            {iconUrl && <SelectButtonIcon src={iconUrl}/>}
                            {label}
                        </OptionButton>
                    </li>)}
                </SelectOptionsList>
            </Box>}
        </SelectContainer>
    </>
}