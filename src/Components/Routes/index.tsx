import React from "react";
import {useSelector} from "react-redux";
import {authIsUserLoggedSelector} from "../../Redux/auth/selectors";
import {Navigate} from 'react-router-dom';
import {APP_ROUTES} from "../../Routes/const";

export const ProtectedRoute = ({element}: { element: JSX.Element }) => {
    const isUserLogged: boolean = useSelector(authIsUserLoggedSelector);

    if (isUserLogged) {
        return element;
    }
    return <Navigate to={APP_ROUTES.LOGIN}/>
}
