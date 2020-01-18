import HomePage from "../pages/Home/Home";
import ProductsPage from "../pages/Products/";
import ProductDetailPage from "../pages/ProductDetail/ProductDetail";
import CartPage from "../pages/Cart/Cart";
import LoginPage from "../pages/Login/Login";
import AboutPage from "../pages/About/about";
// Admin Pages
import AdminHomePage from "../pages/AdminHome/Home";

export const Routes = [
  {
    component: HomePage,
    exact: true,
    path: "/"
  },
  {
    component: ProductsPage,
    path: "/products"
  },
  {
    component: ProductDetailPage,
    path: "/product-detail"
  },
  {
    component: LoginPage,
    path: "/login"
  },
  {
    component: CartPage,
    path: "/cart"
  },
  {
    component: AboutPage,
    path: "/about"
  }
];

export const PrivateRoutes = [
  {
    component: AdminHomePage,
    exact: true,
    path: "/admin"
  }
];
