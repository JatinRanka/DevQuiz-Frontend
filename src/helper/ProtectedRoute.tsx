import React from "react";
import { Redirect } from "react-router-dom";
import { isUserLoggedIn } from "./common";

export const ProtectedRoute = ({
  component: Component,
  path,
  ...rest
}: {
  component: any;
  path: any;
}) => {
  return (
    <>
      {isUserLoggedIn() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: path } }} />
      )}
    </>
  );
};
