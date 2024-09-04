import react from 'react';
import { Dimensions, StatusBar, Image } from 'react-native';

import Header from '../../../../assets/splash.png'
import styles from '../estilos/'

export default function Topo() {
  return <>
    <StatusBar />
    <Image source={Header} style={styles.header} resizeMode='contain' />
  </>
}
