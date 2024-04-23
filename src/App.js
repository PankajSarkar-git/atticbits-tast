import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body/Body";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DummyList from "./Components/DummyList/DummyList";
import AddPost from "./Components/AddPost/AddPost";
import LogIn from "./Components/LogIn/LogIn";
import "./App.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dummy-list",
        element: <DummyList />,
      },
      {
        path: "/addpost",
        element: <AddPost />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
