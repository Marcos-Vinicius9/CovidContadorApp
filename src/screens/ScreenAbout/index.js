import React from "react";
import {View, Text, Linking, Image, ScrollView, StatusBar} from 'react-native';
import styles from "./styles";
import info from '../../assets/images/info.png';
import infoApp from '../../assets/images/infoApp.png';

let versionApp = "1.1.7";

function ScreenAbout({navigation}){
    return(
       <ScrollView>
           <StatusBar barStyle="dark-content" backgroundColor={"#FFFFFF"} />
            <View style={styles.container}>
            <Text style={styles.title}>SOBRE</Text>
            <Text style={styles.textContent}>
                O aplicativo Covid Contador foi criado com o intuito de informar os usuários sobre as ocorrências de covid 19 no Brasil, além de trazer dicas sobre prevenção e cuidados com o vírus.
            </Text>
            <Image source ={info} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.textInfo}>Informações técnicas</Text>
                <Text style={styles.textInfo}>Versão: <Text style={{fontFamily:'Poppins-Bold'}}>{versionApp}</Text></Text>
                <Text style={styles.textInfo} onPress={() => {Linking.openURL('https://projetocovidcontador.marcos-vinicius9.repl.co')}}>Versão Web</Text>
                <Text style={styles.textInfo} onPress={() => Linking.openURL('https://github.com/devarthurribeiro/covid19-brazil-api')}>Software de terceiros</Text>
                <Text style={styles.textInfo} onPress={() => Linking.openURL('https://br.freepik.com')}>Credito das imagens (freepik)</Text>
                <Text style={styles.textInfo}>Todos os videos indexados na página prevenção fazem referência aos seus devidos autores ao serem reproduzidos.</Text>
            </View>
            <Image source ={infoApp} style={styles.image} />
            <Text style={styles.textContent}>
                Saiba mais sobre o projeto e seu código fonte em: <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/Marcos-Vinicius9/CovidContadorApp')}>Github Do Projeto.</Text>
            </Text>
            
        </View>
       </ScrollView>
    );
}

export default ScreenAbout;