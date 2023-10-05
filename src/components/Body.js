import Login from "./Login"
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Body = () => {
    
 

    const appRouter = createBrowserRouter([

      {
        path: "/",
        element: <Login />
      },
      {
        path: "/browse",
        element: <Browse />
      },


    ]);




    return (
      <div>
          <ToastContainer />
          <RouterProvider router={appRouter} /> 
      </div>
  )
}

export default Body;