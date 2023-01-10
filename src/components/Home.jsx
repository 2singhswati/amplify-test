
import React from "react";
import logo from "./logo.svg";
import office from './office.jpg';
import welcome from './welcome.jpg';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App( {signOut}) {
  return (
    <View className="App">
    <Card variation = "elevated">
    <Image src={welcome} className="App-logo" alt="logo" width = "16rem"/>
      <Heading level={1}>NavEZ - Indoor Navigation made easy!</Heading>
    </Card>
    <br></br>
    <Button onClick = {signOut}>Sign out</Button>
  </View>
  );
}

export default withAuthenticator(App);