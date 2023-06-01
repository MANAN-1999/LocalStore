import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CHeder from '../../component/CHeder'
import CTextInput from '../../component/CTextInput'
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddpaymetMethod = () => {
  return (
    <View>
      <CHeder title={'Add Payment Method'} showButton={true} buttonText={'Save'}/>


      <View style={{marginTop:10}}>
        <CTextInput placholder={'Card number'} otherstyle={{width:'90%'}}/>

    <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:30}} activeOpacity={0.8}>
<Ionicons name='camera' size={20} color={'#FA5457'}/>
<TouchableOpacity style={{marginLeft:10}}>
    <Text style={{fontSize:12,fontWeight:'400',color:'#FA5457'}}>Scan your card</Text>
</TouchableOpacity>
    </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddpaymetMethod

const styles = StyleSheet.create({})