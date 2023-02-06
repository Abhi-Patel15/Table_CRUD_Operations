import "../node_modules/bootstrap/dist/css/bootstrap.css";
import  Home  from "./Home";
import Navbar from "./Navbar";
import PageNoteFound from "./PageNoteFound";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Adduser from "./Adduser";
import EditUser from "./EditUser";
import User from "./User";

// as mens alysies


function App() {
  return (
    <>
    <Router>
    <div className="App">
   <Navbar />
  <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/add" element={<Adduser/>}></Route>
    <Route exact path="/edit/:id" element={<EditUser/>}></Route>
    <Route exact path="/user/:id" element={<User/>}></Route>
    <Route exact path="*" element={<PageNoteFound/>}></Route>
  </Routes>
   </div>
  </Router>
  </>
  );
}

export default App;
