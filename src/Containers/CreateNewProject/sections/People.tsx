import {InputSearch} from "../../../Components/Inputs/InputSearch";
import {Typograhpy2} from "../../../Components/Typography";
import Box from "../../../Components/Box";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import Input from "../../../Components/Inputs/Input";
import {api} from "../../../axios";
import {Button} from "../../../Components/Button";
import {CreateNewProjectPeopleProps} from "./types";

export const CreateNewProjectPeople = ({team, changeFormikValue}: CreateNewProjectPeopleProps) => {
    const [uid, setUid] = useState<string>('');

    console.log(team);
    // useEffect(() => {
    //     if(uid){
    //         const res =
    //     }
    // }, [uid])

    const handleChangeUid = useCallback((event: ChangeEvent<HTMLInputElement>) => setUid(event.target.value), [])

    const handleAddUserToProject = useCallback(async () => {
        const res = await api.get(`/users/${uid}`);
        changeFormikValue('team', team ? [...team, res.data.user] : [res.data.user]);
    }, [changeFormikValue, team, uid])

    return <>
        <Typograhpy2 type="HEADLINE_H6">
            Good and completed team is a half of success, choose your developers, management and testing people.
        </Typograhpy2>
        <Box mt="20">
            <Input
                label="Find user"
                placeholder="Find user by id: #908123 or 908123"
                value={uid}
                onChange={handleChangeUid}
            />
        </Box>
        <Box mt="20">
            <Button onClick={handleAddUserToProject}>Add</Button>
        </Box>
    </>
}

// Example users uid
// 609096
// 180820
// 661604
// 948128
// 751573