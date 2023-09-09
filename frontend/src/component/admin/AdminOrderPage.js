import OrderPageComponent from "./components/OrderPageComponent";
import axios from "axios";

const getOrders = async () => {
  const { data } = await axios.get("/api/orders/admin");
  return data;
};

const AdminOrderPage = () => {
  return <OrderPageComponent getOrders={getOrders} />;
};

export default AdminOrderPage;
