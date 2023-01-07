import {AuthContainerComponent} from "./styles";
import {Introduction} from "./Introduction";

export const AuthContainer = ({children}: any) => {
    return <AuthContainerComponent>
        {children}
        <Introduction>
            <h1>YOUR NEW<br/>
                ULTIMATE AGILE APP
            </h1>
        </Introduction>
    </AuthContainerComponent>
}
