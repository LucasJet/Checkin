import React, {createContext, useCallback, useState, useContext} from 'react';
import api from '../services/api';

interface AuthState{
    token: string;
    user: object;
}

interface SignInCredentials{
    email: string;
    password: string;
}

interface AuthContextData{
    user: object;
    signIn(credentials:SignInCredentials): Promise<void>;
    signOut():void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [data, setData] = useState<AuthState>(()=>{
        const token = localStorage.getItem('@appAMF:token');
        const user = localStorage.getItem('@appAMF:user');

        if (token && user){
            return {token, user: JSON.parse(user)};
        }

        return {} as AuthState;

    });

    const signIn = useCallback(async({email, password}) => {
        const response = await api.post('sessions', {email, password});
        const {token, user} = response.data;

        localStorage.setItem('@appAMF:token', token);
        localStorage.setItem('@appAMF:user', JSON.stringify(user));

        setData({token, user});

    }, []);

    const signOut = useCallback(() =>{

        localStorage.removeItem('@appAMF:token');
        localStorage.removeItem('@appAMF:user');

        setData({} as AuthState);

    },[]);

    return (
        <AuthContext.Provider value={{user:data.user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )

};

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if  (!context){
        throw new Error('UseAuth must be used within a AuthProvider');
    }

    return context;
}

export default AuthContext;