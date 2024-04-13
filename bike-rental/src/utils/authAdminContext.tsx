import React, { createContext } from "react";

type AuthAdminContextProviderProps = {
    children: React.ReactNode;
}

export const AuthAdminContext = createContext<any>({});

export const AuthAdminProvider = ({ children }: AuthAdminContextProviderProps) => {

    const contextValue = {
        admin: {}
    };

    return (
        <AuthAdminContext.Provider value={contextValue}>
            {children}
        </AuthAdminContext.Provider>
    )
}
