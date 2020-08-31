
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div>
      <Main />
      <AmplifySignOut />
    </div>
  );
}


export default withAuthenticator(App);
