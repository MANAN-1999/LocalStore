import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CTextInput = ({titletext,placholder,otherstyle,values}) => {
  return (
    <View style={[styles.continer,otherstyle]}>
      <Text style={{color:'black',fontSize:12,fontWeight:'400',opacity:0.5,marginHorizontal:8,marginBottom:3}}>{titletext}</Text>
      <TextInput placeholder={placholder} value={values} style={{paddingLeft:15,backgroundColor:'snow',borderRadius:14,height:50,elevation:5,shadowColor:'black',fontSize:18,fontWeight:'400',color:'black'}} />     
    </View>
  )
}

export default CTextInput

const styles = StyleSheet.create({
    continer:{
        width:'85%',
      alignSelf:'center'  // alignItems:'center'
    }
})