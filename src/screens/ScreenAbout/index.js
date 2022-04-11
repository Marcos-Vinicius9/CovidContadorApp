import React from "react";
import {View, Text, Linking} from 'react-native';
import styles from "./styles";

function ScreenAbout({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>SOBRE</Text>
            <Text style={styles.textContent}>
                O aplicativo CovidContador foi criado com o intuito de informar os usuarios sobre as ocorrencias de covid 19 no Brasil.
            </Text>
            <Text style={styles.textContent}>
                Saiba mais sobre o projeto e seu codigo fonte em: Github Do Projeto.
            </Text>
            <Text style={styles.textContent}>
               Creditos ao criador da api utilizada para obter informações sobre os casos: <Text onPress={() => Linking.openURL('https://google.com')}>Link da api</Text>.
            </Text>
        </View>
    );
}

export default ScreenAbout;