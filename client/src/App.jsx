import logo from "./logo.svg";
import React from "react";
import { Outlet } from 'react-router-dom'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Teacher from "./pages/Teacher";
import Quiz from "./pages/Quiz";
import Student from "./pages/Student";
import QuizDashboard from "./pages/QuizDashboard";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Admin from "./pages/Admin";
import CreateQuiz from "./pages/CreateQuiz";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./pages/ForgotPassword";
function App() {
  return (
    <div className="app">
        
    
    <div className='min-h-screen'>
    <Outlet/>
    </div>
    </div>
  );
}

export default App;
