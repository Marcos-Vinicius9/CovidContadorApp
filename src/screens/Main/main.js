import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, Linking} from "react-native";


import mask from "../../assets/images/mask.jpg";
import styles from "./styles";

import api from "../../api";


function Main({navigation}){

    const [casos, setCasos] = useState();

  useEffect(() => {
    api
      .get("brazil")
      .then((response) => setCasos(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

    return(
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
            <Text style={styles.title}>COVID 19</Text>
            <View style={styles.boxContainer}>
                <View style={[styles.dead, styles.box]}>
                    <Text style={styles.titleBox}>MORTOS</Text>
                    <Text style={styles.info}>{casos?.data.deaths}</Text>
                </View>

                <View style={[styles.recovery, styles.box]}>
                    <Text style={styles.titleBox}>RECUPERADOS</Text>
                    <Text style={styles.info}>Não divulgado</Text>
                </View>

                <View style={[styles.active, styles.box]}>
                    <Text style={styles.titleBox}>ATIVOS</Text>
                    <Text style={styles.info}>Não divulgado</Text>
                </View>

                <View style={[styles.confirmed, styles.box]}>
                    <Text style={styles.titleBox}>CONFIRMADOS</Text>
                    <Text style={styles.info}>{casos?.data.confirmed}</Text>
                </View>
            </View>
            <Text> Atualizado em: <Text>{casos?.data.updated_at}</Text></Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://br.freepik.com/fotos-vetores-gratis/familia')} >
                <Image style={styles.image} source={mask} />
            </TouchableOpacity>

            <View><Text>Desenvolvido por Marcos Vinicius</Text></View>
        </View>
        
        </ScrollView>
        </SafeAreaView>
    );
}

export default Main;