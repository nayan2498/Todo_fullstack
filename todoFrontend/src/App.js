import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Layout/NavBar";
import Home from "./Pages/Home";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  Navigate
} from "react-router-dom";
import AddUser from "./Users/AddUser";
import EditUser from "./Users/EditUser";
import ViewUser from "./Users/ViewUser";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function AppContent() {
  const location = useLocation();
  const hideNavbar = ["/register", "/login"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <NavBar />}

      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
        <Route path="/viewuser/:id" element={<ViewUser />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
