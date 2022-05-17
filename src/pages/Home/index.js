import React, {useEffect, useRef, useState} from 'react';
import {BackHandler, Platform, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

const Home = ({navigation}) => {
  const webview = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  const onAndroidBackPress = () => {
    if (canGoBack && webview.current) {
      webview.current.goBack();
      return true;
    }

    return false;
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
    }
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
    };
  }, [canGoBack]);

  return (
    <View style={styles.pages}>
      <WebView
        source={{uri: 'https://myapps.theconnect.net.id/'}}
        style={{}}
        startInLoadingState={true}
        allowUniversalAccessFromFileURLs={true}
        javaScriptEnabled={true}
        mixedContentMode={'always'}
        cacheEnabled={false}
        domStorageEnabled={true}
        originWhitelist={['*']}
        ref={webview}
        onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pages: {
    width: '100%',
    height: '100%',
  },
});
