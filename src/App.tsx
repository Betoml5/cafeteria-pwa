import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Dashboard from "./screens/admin/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";
import UpdateDayMenu from "./screens/admin/UpdateDayMenu";
import CategoriasView from "./screens/admin/CategoriasView";
import ProductsByCategory from "./screens/ProductsByCategory";
import Login from "./screens/Login";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import GestionProductos from "./screens/admin/GestionProductos";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="categoria" element={<ProductsByCategory />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route
          path=""
          element={<ProtectedRoute element={Dashboard} fallbackPath="/login" />}
          index
        />
        <Route
          path="categorias"
          element={
            <ProtectedRoute element={CategoriasView} fallbackPath="/login" />
          }
        />
        <Route
          path="gestion-productos"
          element={
            <ProtectedRoute element={GestionProductos} fallbackPath="/login" />
          }
        />

        <Route
          path="/admin/actualizar-menu"
          element={
            <ProtectedRoute element={UpdateDayMenu} fallbackPath="/login" />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
