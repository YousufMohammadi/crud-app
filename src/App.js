
import { BrowserRouter,Route, Routes,useNavigate } from "react-router-dom";
import { Login } from "./component/Login";
import { Home } from './component/Home';
// import { DeletePopup } from './component/DeletePopup';
// import { EditPopup } from './component/EditPopup';

function App() {
  return (
  
    <BrowserRouter>
    <Routes>



      <Route path="Login" element={<Login />}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="Home" element={<Home />}></Route>
      {/* <Route path="DeletePopup" element={<DeletePopup />}></Route> */}
      {/* <Route path="EditPopup" element={<EditPopup />}></Route> */}




    </Routes>
    </BrowserRouter>

  );
}

export default App;
