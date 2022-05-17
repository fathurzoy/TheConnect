import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Logo from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.pages}>
      <Image
        source={{
          uri: 'https://myinfo.theconnect.id/storage/upload/pictures/c21e2d5013f6420ae3a76f696a7b8773.PNG',
        }}
        style={{width: 300, height: 80, marginBottom: 20}}
      />
      {/* <Text>The Connect</Text> */}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  ilustrasi: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
