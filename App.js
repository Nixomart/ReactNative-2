import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <SafeAreaView style={[styles.container,{ paddingTop: Platform.OS === "android" && 20}] }>
     <Routes />
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
