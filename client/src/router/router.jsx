import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from '../App';
import Landing from '../pages/Landing';
import Signup from '../pages/Signup';
import ForgotPassword from '../pages/ForgotPassword';
import CreateQuiz from '../pages/CreateQuiz';
import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Teacher from '../pages/Teacher';
import Student from '../pages/Student';
import QuizDashboard from '../pages/QuizDashboard';
import Quiz from '../pages/Quiz';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
    },
    {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword/>,
      },
      {
        path: "/createQuiz/:teacherId",
        element: <CreateQuiz/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/admin/:adminId",
        element: <Admin/>,
      },
      {
        path: "/teacher/:id",
        element: <Teacher/>,
      },
      {
        path: "/student/:studentId",
        element: <Student/>,
      },
      {
        path: "/quiz/:quizId",
        element: <QuizDashboard/>,
      },
      {
        path: "/edit-quiz/:teacherId/:quizId",
        element: <Quiz/>,
      },
    
  ]);

export default router;
