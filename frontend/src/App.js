import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage";
import ProductDetailsPage from "./component/ProductDetailsPage";
import ProductListPage from "./component/ProductListPage";
import CartPage from "./component/CartPage";
import LoginPage from "./component/LoginPage";
import RegisterPage from "./component/RegisterPage";
import UserProfilePage from "./component/user/UserProfilePage";
import UserCartDetailsPage from "./component/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./component/user/UserOrderDetailsPage";
import UserOrderPage from "./component/user/UserOrderPage";
import ProtectedRoutesComponent from "./component2/ProtectedRoutesComponent";
import AdminEditProductPage from "./component/admin/AdminEditProductPage";

//Protcted admin page component
import AdminUserPage from "./component/admin/AdminUserPage";
import AdminAnalyticsPage from "./component/admin/AdminAnalyticsPage";
import AdminChatsPage from "./component/admin/AdminChatsPage";
import AdminCreateProductPage from "./component/admin/AdminCreateProductPage";
import AdminProductPage from "./component/admin/AdminProductPage";
import AdminEditUserPage from "./component/admin/AdminEditUserPage";
import HeaderComponent from "./component2/HeaderComponent";
import FooterComponent from "./component2/FooterComponent";

//user components
import RotesWithUserChatComponent from "./component2/user/RotesWithUserChatComponent";
import AdminOrderPage from "./component/admin/AdminOrderPage";
import AdminOrdersDetails from "./component/admin/AdminOrdersDetails";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <HeaderComponent />
        <Routes>
          <Route element={<RotesWithUserChatComponent />}>
            {/* publicaly available routes */}
            <Route path="/" element={<HomePage />} />
            <Route
              path="/product-details/:id"
              element={<ProductDetailsPage />}
            />
            <Route path="/product-list" element={<ProductListPage />} />
            <Route
              path="/product-list/:pageNumParam"
              element={<ProductListPage />}
            />
            <Route
              path="/product-list/category/:categoryName"
              element={<ProductListPage />}
            />
            <Route
              path="/product-list/category/:categoryName/:searchQuery"
              element={<ProductListPage />}
            />
            <Route
              path="/product-list/category/:categoryName/:searchQuery/:pageNumParam"
              element={<ProductListPage />}
            />
            <Route
              path="/product-list/category/:categoryName/search/:searchQuery"
              element={<ProductListPage />}
            />
            <Route
              path="/product-list/category/:categoryName/search/:searchQuery/:pageNumParam"
              element={<ProductListPage />}
            />
            <Route
              path="/product-list/search/:categoryName"
              element={<ProductListPage />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element="Page not exists 404" />
          </Route>
          {/* user protected routes */}
          <Route element={<ProtectedRoutesComponent admin={false} />}>
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/my-orders" element={<UserOrderPage />} />
            <Route
              path="/user/cart-details"
              element={<UserCartDetailsPage />}
            />
            <Route
              path="/user/order-details/:id"
              element={<UserOrderDetailsPage />}
            />
          </Route>
          {/* </Route> */}

          {/*Admin Protectd routes  */}
          <Route element={<ProtectedRoutesComponent admin={true} />}>
            <Route path="/admin/users" element={<AdminUserPage />} />
            <Route
              path="/admin/edit-product/:id"
              element={<AdminEditProductPage />}
            />
            {/* <Route
              path="/admin/edit-product"
              element={<AdminEditProductPage />}
            /> */}
            <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
            <Route path="/admin/chats" element={<AdminChatsPage />} />
            <Route path="/admin/products" element={<AdminProductPage />} />
            <Route
              path="/admin/edit-user/:id"
              element={<AdminEditUserPage />}
            />
            <Route
              path="/admin/create-product"
              element={<AdminCreateProductPage />}
            />
            <Route path="/admin/orders" element={<AdminOrderPage />} />
            <Route
              path="/admin/order-details/:id"
              element={<AdminOrdersDetails />}
            />
          </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
