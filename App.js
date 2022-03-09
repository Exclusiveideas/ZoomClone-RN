import 'react-native-gesture-handler';
import Navigation from './Navigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000',
  },
}

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </NavigationContainer>

  );
}
