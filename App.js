import 'react-native-gesture-handler';
import { useState } from 'react'
import Navigation from './Navigation';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000',
  },
}

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default function App() {
  const [isReady, setIsReady] = useState(false)

  const loadAssetsAsync = async() => {
    const imageAssets = cacheImages([
      'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528',
      'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXN8ZW58MHx8MHx8&w=1000&q=80',
      'https://image.shutterstock.com/image-photo/smiling-handsome-dude-grey-portrait-260nw-575234701.jpg',
    ]);

    const fontAssets = cacheFonts([FontAwesome.font, Entypo.font, AntDesign.font, Feather.font, ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }


  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    )
  }
  return (
    <NavigationContainer theme={theme}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </NavigationContainer>

  );
}
