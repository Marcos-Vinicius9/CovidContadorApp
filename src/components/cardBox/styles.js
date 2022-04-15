import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";

const styles = StyleSheet.create({
    container:{
        width: metrics.screenWidth * 0.90,
        height: 230,
        backgroundColor:'red',
        marginVertical:10,
        backgroundColor:colors.colorSecondary,
        borderRadius:10
    },
    image:{
        width: "100%",
        height:"80%",
        resizeMode:'contain',
        borderRadius:10,
        paddingVertical:15,
    },
    title:{
        fontFamily:'Poppins-Bold',
        padding:5
    }
})

export default styles;