import logo from './logo.svg';
import './App.css';
import LoginContext from './components/LoginContext';
import Signup from './components/SignUp';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  
  const [signUpView, setSignUpView] = useState(false);
  const [loginMember, setLoginMember] = useState(null);

  return (
    <LoginContext.Provider value={{loginMember, setLoginMember}} >
      <button onClick={()=> {setSignUpView(!signUpView)}}>
        {signUpView ? ("회원 가입 닫기") : ("회원 가입 열기")}
      </button>

      <div className='signup-wrapper'>
        {signUpView === true && (<Signup />)}
      </div>
      <h1>TodoList</h1>
      <Login />
      <hr />
      {loginMember && (<TodoList />)}
    </LoginContext.Provider>
    
  );
}

export default App;
