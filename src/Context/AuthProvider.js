import { createContext } from "react";
import useFirebase from "../hook/useFirebase";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const allContexts = useFirebase();

    return (
        <div>
            <AuthContext.Provider value={allContexts}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;