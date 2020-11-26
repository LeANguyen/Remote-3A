import useClient from "./useClient";

const endpoint = "/categories";
// lift api
const up = "";
const down = "";

// navigating api
const forward = "";
const backward = "";
const left = "";
const right = "";
const stop = "";
const topLeft = "";
const topRight = "";
const bottomLeft = "";
const bottomRight = "";

// stream api
const stream = "";

export default useRemoteApi = () => {
  const client = useClient();
  const getCategories = () => client.api.get(endpoint);
  const liftUp = () => client.api.get(up);
  const liftDown = () => client.api.get(down);
  const moveForward = () => client.api.get(forward);
  const moveBackward = () => client.api.get(backward);
  const moveLeft = () => client.api.get(left);
  const moveRight = () => client.api.get(right);
  const moveTopLeft = () => client.api.get(topLeft);
  const moveTopRight = () => client.api.get(topRight);
  const moveBottomLeft = () => client.api.get(bottomLeft);
  const moveBottomRight = () => client.api.get(bottomRight);
  const stopMoving = () => client.api.get(stop);
  const getStream = () => client.api.get(stream);

  return {
    getCategories,
    liftUp,
    liftDown,
    moveForward,
    moveBackward,
    moveLeft,
    moveRight,
    moveTopLeft,
    moveTopRight,
    moveBottomLeft,
    moveBottomRight,
    stopMoving,
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
