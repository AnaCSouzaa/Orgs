import React from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';


export default function Botao({ texto, onPress, style }) {
  return <TouchableOpacity style={[estilos.botao, style]} onPress={onPress}>
  <Text style={estilos.textoBotao}>{ texto }</Text>
</TouchableOpacity>
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});