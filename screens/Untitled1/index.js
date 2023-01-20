import { FlatList } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.MVtvKrnN}></View><View style={styles.oLKTusMh}></View><View style={styles.NYnxqkMD}></View><FlatList style={styles.uDyPNhov} renderItem={() => <View style={styles.pULYrNyf}></View>} ItemSeparatorComponent={() => <View style={styles.nCTgEYsx} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  MVtvKrnN: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  oLKTusMh: {
    width: 80,
    height: 80,
    backgroundColor: "#E4E4E4",
    borderRadius: 40
  },
  NYnxqkMD: {
    width: 80,
    height: 80,
    backgroundColor: "#E4E4E4",
    borderRadius: 40
  },
  uDyPNhov: {
    position: "absolute",
    width: 100,
    height: 150,
    top: 424,
    left: 258
  },
  pULYrNyf: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  nCTgEYsx: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled1;