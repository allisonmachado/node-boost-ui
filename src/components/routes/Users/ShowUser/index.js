import React from "react";
import Title from "../../../util/Title";

import { useParams, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ShowUser({ userService }) {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: ""
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await userService.getUser(id);
        setUser(user);
      } catch (error) {
        setUser(null);
      }
    }
    fetchUser();
  }, [userService, id]);

  return (user ? <>
    <Title>User - {user.id}</Title>
    <p><strong>Name</strong>: {user.name}</p>
    <p><strong>Surname</strong>: {user.surname}</p>
    <p><strong>Email</strong>: {user.email}</p>
  </> : <Redirect to={{ pathname: "/404-not-found" }} />);
}
