import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Dashboard from "./screens/admin/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import UpdateDayMenu from "./screens/admin/UpdateDayMenu";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<Dashboard />} index />
        {/* <Route path="/admin/categorias/agregar" element={<ProtectedRoute />} /> */}

        <Route path="/admin/actualizar-menu" element={<UpdateDayMenu />} />
      </Route>
    </Routes>
  );
}

export default App;
