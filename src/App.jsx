import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Announcement from "./pages/Announcement";
import Developers from "./pages/Developers";
import Project from "./pages/Project";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Announcement />}></Route>
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/about/project" element={<Project />}></Route>
            <Route path="/about/developers" element={<Developers />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
