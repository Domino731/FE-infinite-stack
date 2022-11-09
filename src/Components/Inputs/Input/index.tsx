import {Label, InputComponent} from "./styles";

interface InputProps {
    label?: string;
}

const Input = ({label}: InputProps) => {
    return <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
        {label && <Label>{label}</Label>}
        <InputComponent/>
    </div>
}

export default Input;