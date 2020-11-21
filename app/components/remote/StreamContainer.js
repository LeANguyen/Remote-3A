import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import CustomScreen from "../CustomScreen";

function StreamContainer(props) {
  return (
    <CustomScreen _style={styles.container}>
      <WebView
        source={{ uri: "https://theinpaint.com/images/example-1-2.jpg" }}
      />
      {/* <WebView
        style={styles.backgroundVideo}
        automaticallyAdjustContentInsets={true}
        scalesPageToFit={true}
        startInLoadingState={false}
        contentInset={{ top: 0, right: 0, left: 0, bottom: 0 }}
        scrollEnabled={false}
        source={{ html: this.formatHtml(), baseUrl: "/" }}
      /> */}
    </CustomScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0
  }
});

export default StreamContainer;
