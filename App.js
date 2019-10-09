import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
        <Text style={Estilos.estiloTexto}>Meu App 2</Text>
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Estilos = {
  estiloTexto : { 
    fontSize: 30,
    backgroundColor: '#08509B', 
    width: 360,
    top: 23
  }
};
