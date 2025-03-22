import React, {useContext} from 'react'
import { AuthContext } from './LoginForm'
import DisplayStatus from './DisplayStatus'

function AuthMessage() {
    const authMessage = useContext(AuthContext);

    return authMessage.message ? (
        <DisplayStatus type={authMessage.type} message={authMessage.message} />
    ) : null;
}

export default AuthMessage