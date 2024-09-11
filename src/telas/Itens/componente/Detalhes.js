import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Modal, Text, TextInput } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { Camera, CameraType } from 'expo-camera';

export default function Detalhes() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHamburger, setSelectedHamburger] = useState(null);

  const hamburgers = {
    "x-DonkeyBuguer": require('../../../../assets/hamburguer1.jpg'),
    "x-KingFish": require('../../../../assets/hamburguer2.jpg'),
    "x-MacacoPrego": require('../../../../assets/hamburguer3.jpg'),
    "x-Macacodela": require('../../../../assets/hamburguer4.jpg'),
    "x-Greendzilla": require('../../../../assets/hamburguer5.jpg'),
    "x-MorangoTango": require('../../../../assets/hamburguer6.jpg'),
  };

  const handleHamburgerPress = (hamburger) => {
    setSelectedHamburger(hamburger);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Procure seu lanche' 
        placeholderTextColor="#a8a8a8" 
        style={styles.input}
      />

      <View style={styles.row}>
        <View style={styles.column}>
          <Card>
            <TouchableOpacity style={styles.cardContent} onPress={() => handleHamburgerPress("x-DonkeyBuguer")}>
              <Image
                style={styles.image}
                source={require('../../../../assets/hamburguer1.jpg')}
              />
              <Title style={styles.title}>x-DonkeyBuguer</Title>
            </TouchableOpacity>
          </Card>
        </View>
        <View style={styles.column}>
          <Card>
            <TouchableOpacity style={styles.cardContent} onPress={() => handleHamburgerPress("x-KingFish")}>
              <Image
                style={styles.image}
                source={require('../../../../assets/hamburguer2.jpg')}
              />
              <Title style={styles.title}>x-KingFish</Title>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
      <View style={[styles.row, styles.borderTop]}>
        <View style={styles.column}>
          <Card>
            <TouchableOpacity style={styles.cardContent} onPress={() => handleHamburgerPress("x-MacacoPrego")}>
              <Image
                style={styles.image}
                source={require('../../../../assets/hamburguer3.jpg')}
              />
              <Title style={styles.title}>x-MacacoPrego</Title>
            </TouchableOpacity>
          </Card>
        </View>
        <View style={styles.column}>
          <Card>
            <TouchableOpacity style={styles.cardContent} onPress={() => handleHamburgerPress("x-Macacodela")}>
              <Image
                style={styles.image}
                source={require('../../../../assets/hamburguer4.jpg')}
              />
              <Title style={styles.title}>x-Macacodela</Title>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
      <View style={[styles.row, styles.borderTop]}>
        <View style={styles.column}>
          <Card>
            <TouchableOpacity style={styles.cardContent} onPress={() => handleHamburgerPress("x-Greendzilla")}>
              <Image
                style={styles.image}
                source={require('../../../../assets/hamburguer5.jpg')}
              />
              <Title style={styles.title}>x-Greendzilla</Title>
            </TouchableOpacity>
          </Card>
        </View>
        <View style={styles.column}>
          <Card>
            <TouchableOpacity style={styles.cardContent} onPress={() => handleHamburgerPress("x-MorangoTango")}>
              <Image
                style={styles.image}
                source={require('../../../../assets/hamburguer6.jpg')}
              />
              <Title style={styles.title}>x-MorangoTango</Title>
            </TouchableOpacity>
          </Card>
        </View>

        
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Image
              style={styles.modalImage}
              source={hamburgers[selectedHamburger]}
            />
            <Text style={styles.modalText}>{selectedHamburger}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  column: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cardContent: {
    alignItems: 'center',
  },
  image: {
    width: '100%', // Use the full width of the card
    height: 150, // Adjust as needed
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'cover', // Ensure the image covers the entire space
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: "#e4605e",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  modalText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  modalCloseText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  input: {
    height: 50,
    borderColor: '#e4605e',
    borderWidth: 1,
    borderRadius: 25, // Border radius for cylindrical effect
    paddingHorizontal: 15,
    marginVertical: 20,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',
    elevation: 2, // Adds a slight shadow
  },
});
