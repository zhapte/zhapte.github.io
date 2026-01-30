import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router"
import NavBar from './component/NavBar';

function App() {

  return (
    <>
      <NavBar />  
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
