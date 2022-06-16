/* eslint-disable */
/*
Implement a function named initializeRooms.
It should return an array of 3 ClassRoom objects
with the sizes 19, 20, and 34 (in this order).
*/

import ClassRoom from "./0-classroom";
const initializeRooms = () => {
  const array = [19, 20, 34];

  return array.map((n) => new ClassRoom(n));
};

export default initializeRooms;