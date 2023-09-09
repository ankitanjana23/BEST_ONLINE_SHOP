import UsersPageComponent from "./components/UsersPageComponent";
import axios from "axios";

const fatchUsers = async (abctrl) => {
  const { data } = await axios.get("/api/users", {
    signal: abctrl.signal,
  });
  return data;
};

const deleteUser = async (userId) => {
  const { data } = await axios.delete(`/api/users/${userId}`);
  return data;
};

const AdminUserPage = () => {
  return <UsersPageComponent fatchUsers={fatchUsers} deleteUser={deleteUser} />;
};

export default AdminUserPage;
