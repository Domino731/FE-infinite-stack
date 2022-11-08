import {Label, InputComponent} from "./styles";

const Input = () => {
    return <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'column'}}>
       <Label>Label</Label>
        <InputComponent/>
    </div>
}

export default Input;