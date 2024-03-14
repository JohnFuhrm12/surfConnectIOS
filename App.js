import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, RefreshControl } from 'react-native';
import homeIcon from './assets/home.png';

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false); 

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView  style={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <Text>surfConnect</Text>
      </ScrollView>
      <View style={styles.navbar}>
        <View style={styles.navIconTextWrapper}>
          <Image style={styles.navIcon} source={homeIcon}/>
          <Text>Home</Text>
        </View>
        <View style={styles.navIconTextWrapper}>
          <Image style={styles.navIcon} source={homeIcon}/>
          <Text>Explore</Text>
        </View>
        <View style={styles.navIconTextWrapper}>
          <Image style={styles.navIcon} source={homeIcon}/>
          <Text>Notifications</Text>
        </View>
        <View style={styles.navIconTextWrapper}>
          <Image style={styles.navIcon} source={homeIcon}/>
          <Text>Profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 20,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#dbdbdb',
    alignSelf: 'stretch',
    width:'100%',
    paddingTop: 10,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    },
    navIconTextWrapper: {
      alignItems: 'center',
      gap: 5,
    },
    navIcon: {
      width: 30,
    }
});
