import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/views/Home';

export default function App() {
  return (
    <SafeAreaView style={[styles.container,{ paddingTop: Platform.OS === "android" && 20}] }>
     <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
});
