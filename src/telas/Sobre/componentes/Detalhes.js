import React, { useRef, useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import MacacoVideo from '../../../../assets/macaco.mp4';

import Texto from '../../../componentes/texto';

export default function Detalhes({ texto, lanche, comentario }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.sobre}>
      <Texto style={styles.texto}>{texto}</Texto>
      <Image source={lanche} style={styles.lanche} resizeMode='contain' />
      <Texto style={styles.comentario}>{comentario}</Texto>

      <Video
        ref={video}
        style={styles.video}
        source={MacacoVideo}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sobre: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  texto: {
    color: "black",
    lineHeight: 24.5,
    fontSize: 18,
    textAlign: 'justify',
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  lanche: {
    marginTop: 20,
    width: '90%', // Diminui a largura para 90% do contêiner
    height: 200, // Diminui a altura para 200 pixels (ou o valor desejado)
    marginLeft: 'auto', // Centraliza a imagem horizontalmente
    marginRight: 'auto', // Centraliza a imagem horizontalmente
    borderRadius: 20, // Ou qualquer outro valor que desejar
  },
  comentario: {
    color: "black",
    lineHeight: 24.5,
    fontSize: 18,
    textAlign: 'justify',
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  video: {
    width: '100%', // ou ajuste conforme necessário
    height: 200,
    alignSelf: 'center', // Centraliza horizontalmente
  }
});
