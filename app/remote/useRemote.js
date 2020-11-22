import { useContext } from "react";
import RemoteContext from "./RemoteContext";

export default useRemote = () => {
  const { ip, setIp } = useContext(RemoteContext);

  const connect = ip => {
    setIp(ip);
  };

  const disconnect = () => {
    setIp(null);
  };

  return { ip, connect, disconnect };
};
