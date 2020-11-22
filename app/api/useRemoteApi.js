import useClient from "./useClient";

const endpoint = "/categories";
const forward = "";
const backward = "";
const left = "";
const right = "";
const stream = "";

export default useRemoteApi = () => {
  const client = useClient();
  const getCategories = () => client.api.get(endpoint);
  const moveForward = () => client.api.get(forward);
  const moveBackward = () => client.api.get(backward);
  const turnLeft = () => client.api.get(left);
  const turnRight = () => client.api.get(right);
  const getStream = () => client.api.get(stream);
  return {
    getCategories,
    moveForward,
    moveBackward,
    turnLeft,
    turnRight,
    turnLeft,
    getStream
  };
};

// export default {
//   getCategories,
//   moveForward,
//   moveBackward,
//   turnLeft,
//   turnRight,
//   turnLeft,
//   getStream
// };
