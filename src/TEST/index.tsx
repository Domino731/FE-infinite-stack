import {api} from "../axios";

export const TEST = () => {
    const handleSubmit = () => {
        api.post('project/create');
    }

    return <div>TEST ROUTE
        <button onClick={handleSubmit}>SEND REQUEST</button>
    </div>
}