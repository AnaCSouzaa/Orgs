import React from "react";
import {Text, View, Image, StyleSheet} from "react-native";

export default function Itens({titulo, lista}){
    return <>
    <Text style = {estilos.titulo}> {titulo} </Text> 
    { lista.map(({nome, imagem})=> {
        return <View key = {nome} style = {estilos.item}>
            <Image source={imagem} style = {estilos.imagem}/>
            <Text style ={estilos.nome} > {nome} </Text>
        </View> 
    }
    
    ) }
    
    </>
} 

const estilos = StyleSheet.create ({
    titulo: {
        color:"#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight:32,
    },
    item: { 
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor:"#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
    },
    imagem: {
        width: 46,
        height:46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 10,
        color:"#464646"
    }


})