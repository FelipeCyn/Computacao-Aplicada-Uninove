import { useState } from "react";
import { createContainer } from "unstated-next";

const useUser = () => {
  const [user, setUser] = useState();

  const [art, setArt] = useState([]);

  return {
    user,
    setUser,
    art,
    setUser,
  };
};

export const UserContainer = createContainer(useUser);
