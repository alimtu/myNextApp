import React from "react";
import { Route, Navigate } from "react-router-dom";
// import auth from "../../services/auth-service";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  // const currentUser = auth.getCurrentUser();
  const currentUser = 1;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!currentUser)
          return (
            <Navigate
              exact
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );

        // const { admin } = { ...rest };
        // if (!currentUser.IsAdmin && admin)
        //   return (
        //     <Redirect
        //       exact
        //       to={{
        //         pathname: "/not-found",
        //         state: { from: props.location },
        //       }}
        //     />
        //   );

        const { lecturer } = { ...rest };
        if (currentUser.MemberTypeID !== 2 && lecturer)
          return (
            <Navigate
              exact
              to={{
                pathname: "/not-found",
                state: { from: props.location },
              }}
            />
          );

        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
