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
        backgroundColor:colors.backgroundColor
    },
    title:{
        fontFamily:'Poppins-Bold',
        color:'white',
       
    },
    textContent:{
        width: metrics.screenWidth * 0.90,
        paddingVertical:10,
        color:'white',
    },
});

export default styles;