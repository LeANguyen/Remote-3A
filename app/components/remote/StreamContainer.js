import React from "react";
import { View, StyleSheet } from "react-native";

// expo install react-native-webview
import { WebView } from "react-native-webview";

function StreamContainer({ _uri }) {
  return (
    <View style={styles.container}>
      <WebView
        // source={{ uri: "https://www.youtube.com/watch?v=zBtKsrn_tr0" }}
        source={{ uri: _uri }}
        // source={{ uri: "http://" + remote.ip + "/api/listings" }}
        // source={{ uri: _uri }}
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
