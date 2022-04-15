import React, { useState } from "react";
import {View, Text, Modal, TouchableOpacity, Alert, Button, ScrollView, Pressable, Linking} from 'react-native';
import YoutubeIframe from "react-native-youtube-iframe";
import styles from "./styles";
import videos from '../../videos'

import BoxVideo from '../../components/boxVideo';
import CardBox from "../../components/cardBox";



function Prevencao (){
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
                    {videos.map((video,index) => {
                            return <View key={video.id}> 
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
                            id = {videos[index].id}
                            />
                            <Text>Você está assistindo um vídeo de : <Text style={styles.link} onPress={() => Linking.openURL(videos[index].link)}>{videos[index].autor}</Text></Text>
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