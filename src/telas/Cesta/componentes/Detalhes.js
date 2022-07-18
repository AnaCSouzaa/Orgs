import React from "react";
import{View, Image, StyleSheet, Text} from "react-native";
import Botao from '../../../componentes/Botao';



export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    return <>
    <Text style={estilos.nome}> {nome} </Text>
<View style={estilos.fazenda}>
    <Image source={logoFazenda} style={estilos.imagemFazenda}/> 
    <Text style={estilos.nomeFazenda}> {nomeFazenda} </Text>
</View>
    <Text style={estilos.descricao}> {descricao} </Text>
    <Text style={estilos.preco}> {preco} </Text>    
    <Botao texto={botao} style={estilos.botao} onPress={() => {}} /> 
    </>
} 

const estilos = StyleSheet.create ({
    nome: {
        color:"#464646",
        fontSize:26,
        lineHeight:42,

    },
    nomeFazenda: {
        fontSize:16,
        lineHeight:26,
        marginLeft: 12,
    },
    fazenda: {
        flexDirection:"row",
        paddingVertical:12,
    },
    imagemFazenda:{
        width:32,
        height:32,
    },
    descricao: {
        color:"#A3A3A3",
        fontSize:16,
        lineHeight:26
    },
    preco: {
        color:"#2A9F85",
        fontWeight: "bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8,
    },
    botao: {
        marginTop: 16,
    },

})