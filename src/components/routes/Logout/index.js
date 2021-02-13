import React from "react"

import { Redirect } from "react-router-dom";
import { useAuthState } from "../../../hooks/useAuthState";

export default function LogoutPage(props) {
  const auth = useAuthState()
  props.authService.quitUser();
  auth.signOut();

  return <Redirect to={{ pathname: "/" }} />
}
