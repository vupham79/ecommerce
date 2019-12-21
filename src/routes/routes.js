import HomePage from "../page/Home/Home";
import ProductsPage from "../page/Products/Products";
import ProductDetailPage from "../page/ProductDetail/ProductDetail";

export const Routes = [
  {
    component: HomePage,
    exact: true,
    path: "/"
  },
  {
    component: ProductsPage,
    exact: false,
    path: "/products"
  },
  {
    component: ProductDetailPage,
    exact: false,
    path: "/product-detail"
  }
];
