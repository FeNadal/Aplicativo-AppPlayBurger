import { useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';
import React, {useEffect, useState} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av';


import Produto from './src/telas/Produtos/'
import Sobre from './src/telas/Sobre/';
import Itens from './src/telas/Itens/';

import mockProduto from './src/mocks/produto/';
import mockSobre from './src/mocks/sobre/';
import mockItens from './src/mocks/itens/';


function MenuKit(){
  return <View>
     <Produto {...mockProduto}/>
  </View>
}

function Item() { // Função nomeada como Prod
  return (
    <View>
      <Itens {...mockItens}/>
    </View>
  );
}

function SobreNos(){
  return <View>
     <Sobre {...mockSobre}/>
  </View>
}

function MenuAudio() {
  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/audio.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return (
    <TouchableOpacity onPress={() => { if (!loading) { setAudioStatus(!audioStatus); } }}>
      <Text>🎧 Som Ambiente 🎧</Text>
    </TouchableOpacity>
  );
}

const Tab = createBottomTabNavigator();


function TabsMenu(){
  return <Tab.Navigator
  
      screenOptions={ ({route})=>({
        tabBarIcon: ({focused, color, size}) =>{
          let iconName;

          if(route.name === "Kit"){
            iconName = focused
            ? 'basket'
            :  'basket-outline';
          }else if (route.name === "Sobre nós"){
            iconName = focused
            ? 'apps'
            : 'apps-outline';
          }else if(route.name === "Produtos"){
            iconName = focused
            ? 'list'
            : 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color}/>

        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'pink',
        tabBarHideOnKeyboard: true,

      })}>
        <Tab.Screen name="Sobre nós" component={SobreNos}/>
        <Tab.Screen name="Kit" component={MenuKit}/>
        <Tab.Screen name="Produtos" component={Item}/>
      </Tab.Navigator>
}

export default function App() {

  //Carrega a fonte para o projeto
  const [fonteCarregada] = useFonts({
    "SpaceGRegular": SpaceGrotesk_300Light,
    "SpaceGBold": SpaceGrotesk_700Bold,
  })

  //Checa se as fontes já foram carregadas
  if (!fonteCarregada) {
    return <View />
  }

  return <NavigationContainer>
    <TabsMenu />
    <MenuAudio/>
  </NavigationContainer>
}