import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CMyaccountButton = ({image, title,otherstyle,otherimagestyle,imagesource,newtitle,icone,onPress,othertxtstyle,iconestyle}) => {
  return (
    <TouchableOpacity style={[styles.cointainer,otherstyle]} activeOpacity={0.7} onPress={onPress}> 
    {imagesource && <View style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{height:25,width:30}}>
        <Image source={image} style={[styles.imgstyle,otherimagestyle]} />
        </View>
        <View style={{marginLeft:20}}>

        <Text style={styles.textstyle}>{title}</Text>
        </View>
      </View>} 

      {newtitle && <Text style={[styles.textstyle,othertxtstyle]}>{title}</Text>}
      <View style={iconestyle}>

      {icone && <Ionicons name="md-chevron-forward-sharp" size={30} color={'black'} />}
      </View>
      
    </TouchableOpacity>
  );
};

export default CMyaccountButton;

const styles = StyleSheet.create({
  cointainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    height: 56,
    backgroundColor: 'snow',
    alignItems: 'center',
    elevation: 8,
    borderRadius:14,
    // borderBottomWidth:0.2,
    // padding:12,
    padding:15
  },
  textstyle:{
    fontSize:18,
    fontWeight:'400',
    textAlign:'center',
    color:'black',
  }, 
  imgstyle:{
    height:24,
    width:24
}
});
