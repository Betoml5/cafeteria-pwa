import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./screens/Home";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import Dashboard from "./screens/admin/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/admin"
        element={<ProtectedRoute element={Dashboard} fallbackPath="/" />}
      />
    </Routes>
  );
}

export default App;
