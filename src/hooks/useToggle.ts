import {useCallback, useState} from "react";

export const useToggle = (initial?: boolean) => {
    const [flag, setFlag] = useState<boolean>(initial ?? false);

    const handleToggleFlag = useCallback(() => setFlag(prev => !prev), []);

    const handleChangeFlag = useCallback((value: boolean) => setFlag(value), []);

    return {flag, handleToggleFlag, handleChangeFlag}
}
