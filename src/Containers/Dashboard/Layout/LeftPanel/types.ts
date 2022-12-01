import {ReactNode} from "react";

// components
export interface ListItemProps {
    title: string;
    icon: ReactNode;
    route: string;
}

// styled components
export interface LeftPanelListItemProps {
    isActive: boolean;
}