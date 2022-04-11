import React from "react";
import {View, Text, Linking, Image} from 'react-native';
import styles from "./styles";

import info from '../../assets/images/info.png';

function ScreenAbout({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>SOBRE</Text>
            <Text style={styles.textContent}>
                O aplicativo CovidContador foi criado com o intuito de informar os usuarios sobre as ocorrencias de covid 19 no Brasil.
            </Text>
            <Image source ={info} style={styles.image} />
            <Text style={styles.textContent}>
                Saiba mais sobre o projeto e seu codigo fonte em: <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/Marcos-Vinicius9/CovidContadorApp')}>Github Do Projeto.</Text>
            </Text>
            <Text style={styles.textContent}>
               Creditos ao criador da api utilizada para obter informações sobre os casos: <Text style={styles.link} onPress={() => Linking.openURL('https://covid19-brazil-api.vercel.app')}>Link da api</Text>.
            </Text>
        </View>
    );
}

export default ScreenAbout;