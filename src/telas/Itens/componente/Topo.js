import react from 'react';
import { Dimensions, StatusBar, Image } from 'react-native';

import Header from '../../../../assets/topo.jpg'
import styles from '../componente/estilos/'

export default function Topo() {
  return <>
    <StatusBar />
    <Image source={Header} style={styles.header} resizeMode='contain' />
  </>
}