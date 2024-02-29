import { launchCameraAsync } from 'expo-image-picker';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const ImagePicker = () => {
  async function takeImage() {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  }
  return (
    <View>
      <View></View>
      <Button title='Take Image' onPress={takeImage} />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
