import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PlaceItem from './PlaceItem';

const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBack}>
        <Text style={styles.fallBackText}>
          No places added yet - Start adding some
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  fallBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallBackText: {
    fontSize: 16,
  },
});
