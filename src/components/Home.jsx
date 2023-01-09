import React from "react";
import logo from "./logo.svg";
//import office from './office.jpg';
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
    <Card>
    <Image src={logo} className="App-logo" alt="logo" />
      <Heading level={1}>We now have Auth!</Heading>
    </Card>
    <Button onClick = {signOut}>Sign out</Button>
  </View>
  );
}

export default withAuthenticator(App);