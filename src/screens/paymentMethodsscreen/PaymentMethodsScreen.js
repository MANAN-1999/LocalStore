import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CHeder from '../../component/CHeder'
import { paymentData } from '../../assets/Data/dummydata'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PaymentMethodsScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex:1,backgroundColor:"#FA5457"}}>
    <CHeder title={'Payment Methods'} showButton={true} buttonText={'Edit'}/>
    <View style={{height:'75%',backgroundColor:'#f2f2f2',borderBottomLeftRadius:40,borderBottomRightRadius:40}}>
            <View style={{marginTop:30}}>

           
            {paymentData.map(item => (
              <View
                style={{
                  height: 55,
                  backgroundColor: 'snow',
                  elevation: 5,
                  marginVertical: 5,
                  borderRadius: 14,
                  justifyContent: 'center',
                  width:'90%',
                  alignSelf:'center',
                }}>
                <TouchableOpacity
                  style={{
                    marginHorizontal: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  <View style={{width: '20%'}}>
                    <Image source={item.image} />
                  </View>
                  <Text style={{textAlign: 'left', width: '70%'}}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
             </View>
           
          </View>
          <View
              style={[
                styles.deliverytimecontiner,
                {marginTop: 40, width: '100%'},
              ]}>
              <TouchableOpacity
                style={styles.deliverybtn}
                onPress={()=>navigation.navigate('AddpaymetMethod')}
                >
                    <Image source={require('../../assets/images/addpayment.png')} style={{height:24,width:24}}/>
                <Text style={styles.checkoutxt}>Add Payment Method</Text>
                <View style={{opacity:0.5}}>
                <Ionicons name="md-chevron-forward-sharp" size={30} color={'snow'} />
                </View>
              </TouchableOpacity>
            </View>
     </View>
  )
}

export default PaymentMethodsScreen

const styles = StyleSheet.create({
    deliverybtn: {
        height: 50,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 25,
        backgroundColor: '#FA5457',
        justifyContent: 'space-around',
        elevation:4,
        alignItems:'center',
        flexDirection:'row'
      },
      checkoutxt: {
        textAlign: 'center',
        color: 'snow',
        fontSize: 16,
        fontWeight: '600',
      },
})