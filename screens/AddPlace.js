import React from 'react';
import { StyleSheet } from 'react-native';
import PlaceForm from '../components/Places/PlaceForm';
import { insertPlace } from '../util/database';

const AddPlace = ({ navigation }) => {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate('AllPlace', { place });
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;

const styles = StyleSheet.create({});
