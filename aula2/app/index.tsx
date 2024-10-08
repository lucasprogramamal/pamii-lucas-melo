import React from 'react';
import { Text, View } from "react-native";
import botao from '..components/botao';

export default function Index() {
  const hadlePress = () => {
    console.log('Botão pressionado!');
  };

  const teste = () => {
    console.log('Segundo Teste');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      AlignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <botao label="clique aqui" corFundo="blue" onPress={handlePress} />
      <botao label="NÃO clique aqui" corFundo="red" onPress={teste} />
      <botao label="clique aqui AGORA!" corFundo="gray" onPress={handlePress} />
    </View>
  );
}
