import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";

const styles = StyleSheet.create({
    container:{
        width: metrics.screenWidth * 0.90,
        height: metrics.screenHeight * 0.30,
        backgroundColor:'red',
        marginVertical:10,
        backgroundColor:colors.colorSecondary,
        borderRadius:10,
    },
    image:{
        width:"100%",
        height:"100%",
        paddingVertical:15,
        resizeMode:'contain'
      
    },
    title:{
        fontFamily:'Poppins-Bold',
        padding:10,
    }
})

export default styles;