import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";

const appRouter = createBrowserRouter([{
  path:'/',
  element : <Body />, 
  children :[
    { path : '/',element:<MainContainer />},
    { path : '/watch',element:<WatchVideo />}
  ]
}])
function App() {
  return (
  <div className="w-screen"><Provider store={appStore}>
  <Header />
  <RouterProvider router={appRouter} />
    {/* <Body />
  </RouterProvider> */}
</Provider></div>
    
    
  );
}

export default App;
