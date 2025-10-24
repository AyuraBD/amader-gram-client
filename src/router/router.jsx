import { createBrowserRouter } from "react-router";
import Layout from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Signin from '../Pages/Signin/Signin';
import Register from '../Pages/Register/Register';
import Members from "../Pages/Members/Members";
import Dashboard from "../Layout/Dashboard";
import Profile from "../Pages/Profile/Profile";
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/signin',
        element: <Signin></Signin>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/members',
        element: <Members></Members>
      },
      {
        path: `/profile`,
        element: <Profile></Profile>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children: [
      {

      }
    ]
  }
])

export default router