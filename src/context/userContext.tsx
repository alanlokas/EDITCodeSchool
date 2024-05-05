// import { createContext } from "react";

// const UserContext = createContext(null);

// export default UserContext;

import { createContext } from "react";

type UserContextValue = [
  string | null,
  React.Dispatch<React.SetStateAction<string | null>>
];

const UserContext = createContext<UserContextValue>([null, () => null]);

export default UserContext;
