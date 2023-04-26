import {
  BrowserRouter,
  Route,
  Routes,
  redirect,
  Navigate,
} from "react-router-dom";
import Product from "./pages/Product";
import Products from "./pages/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
