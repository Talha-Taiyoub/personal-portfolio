import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/Errorpage";
import Homepage from "./pages/Homepage";



const router=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<ErrorPage/>,
        children:[
            {path:"",element:<Homepage/>}
        ]
    }

])

export default router