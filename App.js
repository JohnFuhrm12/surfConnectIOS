import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>surfConnect</Text>
      <View style={styles.navbar}>
        <Text>Home</Text>
        <Text>Explorer</Text>
        <Text>Notifications</Text>
        <Text>Profile</Text>
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
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: 'blue',
    alignSelf: 'stretch',
    width:'100%',
    paddingTop: 30,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
    },
});
