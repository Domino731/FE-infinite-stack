import {InputSearch} from "../../../Components/Inputs/InputSearch";
import {Typograhpy2} from "../../../Components/Typography";
import Box from "../../../Components/Box";
import {ChangeEvent, useCallback, useState} from "react";
import Input from "../../../Components/Inputs/Input";

export const CreateNewProjectPeople = () => {
    const [id, setId] = useState<string>('');

    const handleChangeId = useCallback((event: ChangeEvent<HTMLInputElement>) => setId(event.target.value), [])

    return <>
        <Typograhpy2 type="HEADLINE_H6">
            Good and completed team is a half of success, choose your developers, management and testing people.
        </Typograhpy2>
        <Box mt="20">
            <Input
                label="Find user"
                placeholder="Find user by id: #908123 or 908123"
                value={id}
                onChange={handleChangeId}
            />
        </Box>

    </>
}