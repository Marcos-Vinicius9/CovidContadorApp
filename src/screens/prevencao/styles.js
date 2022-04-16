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
        flex:1,
        justifyContent:'center',
        alignItems:"center",
    },
    modalBox:{
        width: metrics.screenWidth,
        height:415,
        elevation:metrics.baseElevation,

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
        height:40,
        padding:10,
        marginVertical:35
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