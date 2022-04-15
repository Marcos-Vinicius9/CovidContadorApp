import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";

const styles = StyleSheet.create({
    container:{
        width: metrics.screenWidth,
        alignItems:'center',
        backgroundColor: colors.backgroundColor,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontFamily:'Poppins-Bold',
        color:'white',
        paddingVertical:10
       
    },
    modalView:{
        height: metrics.screenHeight,
        width: metrics.screenWidth,
        justifyContent:'center',
        alignItems:'center'
    },
    modalBox:{
        width: metrics.screenWidth,
        height:metrics.screenHeight * 0.50,
    },
    cardView:{
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:colors.backgroundColor,
        width: metrics.screenWidth * 0.90
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: 'black',
        width: 120,
        padding:10,
      },
      text: {
        fontWeight: 'bold',
        color: 'white',
      },
      link:{
          fontFamily: 'Poppins-Bold'
      },
})

export default styles;