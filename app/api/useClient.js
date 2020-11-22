import { create } from "apisauce";
import useRemote from "../remote/useRemote";

export default useClient = () => {
  const remote = useRemote();
  const api = create({
    // 192.168.5.102 - Home
    // 10.247.201.219 - School
    //   baseURL: "http://192.168.5.102:9000/api"
    baseURL: "http://" + remote.ip + "/api"
  });
  return { api };
};
