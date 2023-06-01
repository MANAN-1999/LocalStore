import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from './Dimanctions'


const CSocialbutton = ({image,title,onPress,otherstyles,othertextstyle,imageSource,withoutimgtxt}) => {
  return (
    <TouchableOpacity style={[styles.container,otherstyles]} onPress={onPress} >
       {imageSource && <Image source={imageSource} />}  
       {withoutimgtxt ? (
        
         <Text style={[styles.onlytxt,othertextstyle]}>{title}</Text>
       ): <Text style={[styles.txtstyle,othertextstyle]}>{title}</Text>}
    </TouchableOpacity>
  )
}

export default CSocialbutton

const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    width:'80%',
    borderRadius:moderateScale(14),
    elevation:moderateScale(10),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    height:moderateScale(50),
    marginHorizontal:moderateScale(20)
    
},
txtstyle:{
    marginLeft:moderateScale(30),
    fontSize:moderateScale(18),
    fontWeight:400,
    color:'black',
    textAlign:'center'
},
onlytxt:{
  fontSize:moderateScale(18),
  fontWeight:400,
  color:'black',
  textAlign:'center'
}
})