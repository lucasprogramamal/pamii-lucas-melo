import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native";

const inputbox = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <TextInput
                style={style.input}
                onChangeText={onChangeText}
                value={text}
                />
                <TextInput
                style={style.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
                />
            </SafeAreaView>
        </SafeAreaProvider>
    ); 
};

const style = StyleSheet.create({
    input:{
        height: 30,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default inputbox;