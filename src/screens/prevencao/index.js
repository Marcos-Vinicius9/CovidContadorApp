import React, { useState, useEffect } from "react";
import {View, Text, Modal, TouchableOpacity, Alert, Button, ScrollView, Pressable, Linking} from 'react-native';
import YoutubeIframe from "react-native-youtube-iframe";
import styles from "./styles";

import api from '../../apiVideos'

import BoxVideo from '../../components/boxVideo';
import CardBox from "../../components/cardBox";



function Prevencao (){

    const[videosApi,setVideosApi] = useState(['carregando dados']);

    useEffect(() => {
        api
          .get('dados')
          .then((response) =>setVideosApi(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

    const [index,setIndex] = useState(0);

    const [modalVisible, setModalVisible] = useState(false);

    function setIndexAndVisible(index){
        setModalVisible(!modalVisible)
        setIndex(index);
    }
    return(
        <ScrollView>
            <View style={styles.container}> 
                <Text style={styles.title}>PREVENÇÃO</Text>
                <View style={styles.cardView}>
                    {videosApi.map((video,index) => {
                            return <View key={index + 1}> 
                                <CardBox title ={video.title} autor={video.autor} id={video.id}/>
                                <Pressable style={styles.button} onPress={() => setIndexAndVisible(index)}>
                                    <Text style={styles.text}>Assistir</Text>
                                </Pressable>
                            </View>

                        
                        })}
                </View>

                <Modal
                visible={modalVisible}
                animationType='slide'
                onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.modalView}>
                        <View style={styles.modalBox}>
                            <BoxVideo 
                            id = {videosApi[index].id}
                            />
                            <Text>Você está assistindo um vídeo de : <Text style={styles.link} onPress={() => Linking.openURL(videosApi[index].link)}>{videosApi[index].autor}</Text></Text>
                           <Pressable style={styles.button} onPress={() => setModalVisible(!modalVisible)} >
                               <Text style={styles.text}>Já assisti</Text>
                           </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
}

export default Prevencao;