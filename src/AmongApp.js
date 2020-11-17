import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/AuthContext';
// import { authReducer } from './auth/authReducer'

// const init = () => {
//     return JSON.parse(localStorage.getItem('user')) || { logged: false };
// }


export const AmongApp = () => {
    
    // const [ user, dispatch ] = useReducer(authReducer, {}, init);

    // useEffect(() => {
    //     localStorage.setItem( 'user', JSON.stringify(user) );
    // }, [user])

    return (

        <AuthContext.Provider>
            <AppRouter />
        </AuthContext.Provider>

    )
}
