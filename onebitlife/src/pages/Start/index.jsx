import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

export default function Start() {
    return (
        <View>
            <ScrollView showVerticalScrollIndicator={false}>
                <View>
                    <Image source={require("../../assets/icons/logo3.png")}/>
                    <Text>Vamos trasnformar sua vida {"/n"} em jogo, buscando sempre {"/n"} o melhor nível.</Text>
                </View>
            </ScrollView>
        </View>
    )
}