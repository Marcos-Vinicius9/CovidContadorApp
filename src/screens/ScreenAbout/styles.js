import { StyleSheet } from "react-native";

import metrics from "../../styles/metrics";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: metrics.screenWidth,
        alignItems:'center',
    },
    title:{
        fontFamily:'Poppins-Bold',
        color:'black',
        paddingVertical:10
       
    },
    textContent:{
        color:'black',
        width: metrics.screenWidth * 0.90,
        paddingVertical:10,
        textAlign:'left',
        
    },
    image:{
        resizeMode:'contain',
        width: metrics.screenWidth * 0.90,
        height: metrics.screenHeight * 0.30
    },
    link:{
        fontFamily:'Poppins-Bold'
    },
    info:{
        width: metrics.screenWidth * 0.90,

    },
    textInfo:{
        color:'black'
    },

});

export default styles;