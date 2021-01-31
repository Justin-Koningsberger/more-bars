/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const barColors = ['rgba(32,81,21,.1)', '#73CB12', '#A2FF00', '#237221'];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>More Bars</Text>
        </View>

        <View style={styles.barsContainer}>
          <LinearGradient colors={barColors} style={styles.barOne} />
          <LinearGradient colors={barColors} style={styles.barTwo} />
          <LinearGradient colors={barColors} style={styles.barThree} />
          <LinearGradient colors={barColors} style={styles.barFour} />
          <LinearGradient colors={barColors} style={styles.barFive} />
          <LinearGradient colors={barColors} style={styles.barSix} />
          <LinearGradient colors={barColors} style={styles.barSeven} />
          <LinearGradient colors={barColors} style={styles.barEight} />
          <LinearGradient colors={barColors} style={styles.barNine} />
          <LinearGradient colors={barColors} style={styles.barTen} />
        </View>
      </SafeAreaView>
    </>
  );
};

/*
const barStyle = (n, s = 80, b = 20) => {
  return {
    bottom: 300,
    left: 20,
    position: 'absolute',
    width: s,
    height: s,
    zIndex: -n,
    backgroundColor: '#12e474',
    borderColor: 'rgba(50,32,84,1)',
    borderWidth: b,
    borderRadius: s / 2,
  };
};
*/

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgba(50,32,84,1)',
    flex: 1,
  },
  header: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.2)',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '200',
    letterSpacing: 4,
    paddingVertical: 6,
    paddingHorizontal: 20,
    paddingBottom: 6,
    color: '#ffffff',
  },
  barsContainer: {
    display: 'flex',
    flex: 1,
  },
  barOne: {
    width: 80,
    height: 80,
    position: 'absolute',
    zIndex: -1,
    bottom: 300,
    left: 20,
    borderColor: 'rgba(50,32,84,1)',
    borderWidth: 20,
    borderRadius: 100,
  },
  barTwo: {
    width: 150,
    height: 150,
    position: 'absolute',
    zIndex: -2,
    bottom: 265,
    left: -15,
    borderColor: 'rgba(50,32,84,1)',
    borderWidth: 20,
    borderRadius: 75,
  },
  barThree: {
    width: 220,
    height: 220,
    position: 'absolute',
    zIndex: -3,
    bottom: 230,
    left: -50,
    borderColor: 'rgba(50,32,84,1)',
    borderWidth: 20,
    borderRadius: 110,
  },
  barFour: {
    width: 290,
    height: 290,
    position: 'absolute',
    zIndex: -4,
    bottom: 195,
    left: -85,
    borderColor: 'rgba(50,32,84,1)',
    borderWidth: 20,
    borderRadius: 145,
  },
  barFive: {
    width: 360,
    height: 360,
    position: 'absolute',
    zIndex: -5,
    bottom: 160,
    left: -120,
    borderColor: 'rgba(50,32,84,1)',
    borderWidth: 20,
    borderRadius: 180,
  },
  barSix: {
    width: 430,
    height: 430,
    position: 'absolute',
    zIndex: -6,
    bottom: 125,
    left: -155,
    borderColor: 'rgba(50,32,84,1)',
    borderWidth: 20,
    borderRadius: 215,
  },
  barSeven: {
    width: 500,
    height: 500,
    position: 'absolute',
    zIndex: -7,
    bottom: 90,
    left: -190,
    borderColor: 'rgba(50,32,84,1)',
    borderWidth: 20,
    borderRadius: 250,
  },
  barEight: {
    width: 570,
    height: 570,
    position: 'absolute',
    zIndex: -8,
    bottom: 55,
    left: -225,
    borderColor: 'rgba(50,32,84,1)',
    borderWidth: 20,
    borderRadius: 285,
  },
  barNine: {
    width: 640,
    height: 640,
    position: 'absolute',
    zIndex: -9,
    bottom: 20,
    left: -260,
    borderColor: 'rgba(50,32,84,1)',
    borderWidth: 20,
    borderRadius: 320,
  },
  barTen: {
    width: 710,
    height: 710,
    position: 'absolute',
    zIndex: -10,
    bottom: -15,
    left: -295,
    borderColor: 'rgba(50,32,84,1)',
    borderWidth: 20,
    borderRadius: 355,
    opacity: 0.1,
  },
});

export default App;
