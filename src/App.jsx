import React, { useState } from 'react';
import Header from './components/Header';
import './App.css'
import Sidebar from './components/Sidebar';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Hero from "./components/Hero";


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isValidate, setIsValidate] = useState(false);

  function renderLoginForm () {
   setIsLogin(prev => prev === false ? true : false);
   setIsSignup(false);
  }

  function renderSignupForm () {
    setIsSignup(prev => prev === false ? true : false);
    setIsLogin(false);
  }

  function renderSidebar () {
    setIsValidate(true);
    setIsLogin(false);
  }

  return (

    <div className= 'bg-body-tertiary text-success-emphasis'>
    <Header onLogin={renderLoginForm} onSignup={renderSignupForm}/>

    {isLogin ? (
  <LoginForm handleLogin={renderSidebar}/>
    ) : isSignup ? (
  <SignupForm />
    ) : isValidate ? (
  <Sidebar />      
    ) : (
  <Hero />
  )}

    </div>
  );
}

export default App;
