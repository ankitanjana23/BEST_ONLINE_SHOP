import { Outlet } from "react-router-dom";
import UserChatComponent from "./UserChatComponent";

const RotesWithUserChatComponent = () => {
  return (
    <>
      <UserChatComponent /> <Outlet />
    </>
  );
};

export default RotesWithUserChatComponent;
