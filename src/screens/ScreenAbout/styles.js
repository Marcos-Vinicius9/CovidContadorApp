import { StyleSheet } from "react-native";

import metrics from "../../styles/metrics";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        width: metrics.screenWidth,
        height: metrics.screenHeight,
        alignItems:'center',
        backgroundColor: 'white'
    },
    title:{
        fontFamily:'Poppins-Bold',
       
    },
    textContent:{
        width: metrics.screenWidth * 0.90,
        paddingVertical:15
        
    },
    image:{
        resizeMode:'contain',
        width: metrics.screenWidth * 0.90,
        height: metrics.screenHeight * 0.30
    },
    link:{
        fontFamily:'Poppins-Bold'
    },

});

export default styles;