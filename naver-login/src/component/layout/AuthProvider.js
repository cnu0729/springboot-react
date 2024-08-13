import React, {useState} from "react";
import AuthContext from "./AuthContext";
//AuthContext에 저장된 값을 Provider가 감싸고 있는 모든 js에 저장된 값이 적용될 수 있도록
//감싸는 js

const AuthProvider = () => {

    return (
        <>
        </>
    )

}

//다른 js에서 사용할 수 있게 내보내기
//export default를 해주지 않으면 다른 js에서 사용할 수 없음
//export default AuthProvider;


/*
-- 고전방식
const AuthProvider = ({children}) => {

    return(
        <AuthContext.Provider value={{loginMember, setLoginMember}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
*/