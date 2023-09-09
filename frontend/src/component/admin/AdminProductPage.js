import ProductPageComponent from "./components/ProductPageComponent";
import axios from "axios";

const fatchProducts = async (abctrl) => {
  const { data } = await axios.get("/api/products/admin", {
    signal: abctrl.signal,
  });
  return data;
};

const deleteProduct = async (productId) => {
  const { data } = await axios.delete(`/api/products/admin/${productId}`);
  return data;
};

const AdminProductPage = () => {
  return <ProductPageComponent fatchProducts={fatchProducts} deleteProduct={deleteProduct} />;
};
export default AdminProductPage;
