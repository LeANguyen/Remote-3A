import useClient from "./useClient";

const endpoint = "/categories";
const up = "";
const down = "";
const forward = "";
const backward = "";
const left = "";
const right = "";
const stream = "";

export default useRemoteApi = () => {
  const client = useClient();
  const getCategories = () => client.api.get(endpoint);
  const liftUp = () => client.api.get(up);
  const liftDown = () => client.api.get(down);
  const moveForward = () => client.api.get(forward);
  const moveBackward = () => client.api.get(backward);
  const turnLeft = () => client.api.get(left);
  const turnRight = () => client.api.get(right);
  const getStream = () => client.api.get(stream);
  return {
    getCategories,
    liftUp,
    liftDown,
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
