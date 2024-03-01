import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
  const region = {
    latitude: 37.78,
    latitudeDelta: 0.0922,
    longitude: -122.43,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} initialRegion={region}></MapView>;
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
