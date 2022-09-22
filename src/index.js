import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Blog from './components/Blog/Blog';
import Project from './components/Project/Project';
import User from './components/User/User';
import UserDashboard from './components/User/Content/UserDashboard';
import ManageProject from './components/User/Content/ManageProject';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Home/Homepage';
import ManageContract from './components/User/Content/ManageContract';
import ManageBankAccount from './components/User/Content/ManageBankAccount';
import ManageTransactions from './components/User/Content/ManageTransactions';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AuthLayout from './components/Auth/AuthLayout';
import ProjectDetail from './components/Project/ProjectDetail';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route index element={<Homepage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="project" element={<Project />} />
            <Route path="project-detail/:id" element={<ProjectDetail />} />
          </Route>
          <Route path="/user" element={<User />} >
            <Route index element={<UserDashboard />} />
            <Route path="manage-contract" element={<ManageContract />} />
            <Route path="manage-bank-account" element={<ManageBankAccount />} />
            <Route path="manage-project" element={<ManageProject />} />
            <Route path="manage-transaction" element={<ManageTransactions />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />} >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>




        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
