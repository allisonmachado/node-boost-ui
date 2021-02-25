import { useState } from "react";

export function useUserState(emptyUser) {
  const [user, setUser] = useState(emptyUser);

  return [user, function (event) {
    const value = event.target.value;
    const name = event.target.name;
    setUser({
      ...user, [name]: value
    });
  }]
}
