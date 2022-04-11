import {StyleSheet} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.backgroundColor,
        width: metrics.screenWidth,
        justifyContent:'space-between',
        alignItems:'center',
    },
    title:{
        fontFamily:'Poppins-Bold',
        color:'#FFF',
        paddingVertical:10
    },
    titleBox:{
        fontWeight:'bold',
        color:'white',
        fontSize:fonts.input
    },
    boxContainer:{
        width:"90%",
        flexWrap:"wrap",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    box:{
        width: "48%",
        height:200,
        margin:2,
        padding:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
        
    },
    image:{
        resizeMode:'contain',
        width:metrics.screenWidth * 0.90,
        height: metrics.screenHeight * 0.40
    },
    info:{
        color:'white',
    },
    dead:{
        backgroundColor:'#FF0000'
    },
    recovery:{
        backgroundColor:'#005C1F'
    },
    active:{
        backgroundColor:'#FFD700'
    },
    confirmed:{
        backgroundColor:'#55AFD2'
    },
})

export default styles;