import React from "react";
import { View, StyleSheet } from "react-native";

// expo install react-native-webview
import { WebView } from "react-native-webview";
import useRemote from "../../remote/useRemote";

function StreamContainer(props) {
  const remote = useRemote();
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://www.youtube.com/watch?v=zBtKsrn_tr0" }}
        // source={{ uri: "https://theinpaint.com/images/example-1-2.jpg" }}
        // source={{ uri: "http://" + remote.ip + "/api/listings" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0
  }
});

export default StreamContainer;
