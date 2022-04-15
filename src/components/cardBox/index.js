import React from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from "./styles";

const cardBox = (props) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Image
            style={styles.image}
            source={{
          uri: `https://img.youtube.com/vi/${props.id}/maxresdefault.jpg`,
        }}
      />
        </View>
    );
}



export default cardBox;