import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
        <Text style={Estilos.estiloTexto}>Meu App 2 Hoje</Text>
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
    backgroundColor: '#015A91',  
    padding: 10,
    marginTop: 24,
    /// marginHorizontal: 30
    // paddingTop: 10
    // paddingLeft: 10
  }
};
