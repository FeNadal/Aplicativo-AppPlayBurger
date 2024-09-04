import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Image, View, Alert, Button } from 'react-native';
import { Camera } from 'expo-camera';
import Logo from '../../../../assets/splash.png';
import Texto from '../../../componentes/texto';
import Botao from '../../../componentes/botao';

export default function Detalhes({ nome, detalhes, preco, botao }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photoData = await cameraRef.current.takePictureAsync();
      setPhoto(photoData.uri);
    }
  };

  const switchCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} type={type} ref={cameraRef} />
      </View>
      <View style={styles.controls}>
        <Button title="Tirar Foto" onPress={takePicture} />
        <Button title="Alternar Câmera" onPress={switchCamera} />
      </View>
      {photo && (
        <Image source={{ uri: photo }} style={styles.photo} />
      )}
      <View style={styles.produto}>
        <View style={styles.logotipo}>
          <Image source={Logo} style={styles.logo} resizeMode='contain' />
          <Texto style={styles.nome}>{nome}</Texto>
        </View>
        <Texto style={styles.descricao}>{detalhes}</Texto>
        <Texto style={styles.preco}>{preco}</Texto>
        <Botao textoBotao={botao} clickBotao={() => Alert.alert("Promoção dos Primatas", "Compre um lanche e ganhe Banana!")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '80%',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  photo: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  nome: {
    color: "#ae0000",
    fontSize: 26,
    fontWeight: 'bold',
    paddingTop: 25,
    paddingLeft: 10,
  },
  descricao: {
    color: "black",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  preco: {
    color: "red",
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 10,
  },
  logo: {
    width: 80,
    height: 80,
  },
  logotipo: {
    flexDirection: "row",
  },
  produto: {
    backgroundColor: "white",
  },
});
