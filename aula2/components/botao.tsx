import React from 'react';
import { TouchableOpacity, Text, StyleSheet  } from 'react-native';

const botao = ({label, corFundo, onPress}) =>{
    
    const botaoStyle = {
        backgroundColor: corFundo,
        padding: 10,
        borderRadius: 5,
    };

    return (
        <TouchableOpacity onPress={onPress} style={botaoStyle}>
            <text>{label}</text>
        </TouchableOpacity>
    );
}

export default botao;