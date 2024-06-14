import logo from "./logo.svg";
import "./App.css";
import CustomButton from "./components/CustomButton/CustomButton";
import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import Register from "./routes/Register/Register";

function App() {
  return (
    <Routes>
      <Route Component={Login} path='/' />
      <Route Component={Home} path='/Home' />
      <Route Component={Register} path='/Register' />
    </Routes>
  );
}

export default App;
