import React from "react";

import { StyleSheet, Dimensions} from "react-native";

//Captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 1634 / 2451 * width,
        alignSelf: 'center',
        backgroundColor: 'white',
      }
})

export default styles;