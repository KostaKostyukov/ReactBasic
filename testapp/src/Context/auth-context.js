import React from "react";
const authContext = React.createContext({ autho: false, login: () => {} });
export default authContext;
