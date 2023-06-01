import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CHeder from '../../component/CHeder';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {paymentData} from '../../assets/Data/dummydata';

const {width, height} = Dimensions.get('window');

const Checkout = () => {

  const navigation = useNavigation();
  const [showpaymentModel, setShowPaymentModel] = useState(false);
  // const [showOtpModel, setShowOtpModel] = useState(false);
  const [showSussessModel,setShowSussessModel] = useState(false)
  const route = useRoute();
  const {item} = route.params;
  const str = '+Add Payment Method';

  const showtransactionSuccessHandel = () => {
    setShowPaymentModel(false)
    setShowSussessModel(true)
    // navigation.navigate('OrderDetails')

  };
  const showpaymentmodelHandel = () => {
    setShowPaymentModel(true);
  };
  return (
    <>
      <View style={styles.container}>
        <CHeder title={'Checkout'} />
        <Text style={{textAlign: 'center', marginTop: 15, marginBottom: 15}}>
          {item.name}
        </Text>

        <View style={styles.changeaddress}>
          <Text style={{color: 'black', opacity: 0.6}}>Delivered to</Text>
          <TouchableOpacity>
            <Text style={{color: '#FA5754'}}>Change</Text>
          </TouchableOpacity>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 23.02562,
            longitude: 72.47734,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={StyleSheet.absoluteFillObject}
        />
        <View style={styles.changeaddressdetails}>
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
              marginBottom: 15,
            }}>
            <Ionicons name={'md-home-outline'} size={25} color={'gray'} />
            <Text style={{fontSize: 14, fontWeight: '400', marginLeft: 10}}>
              Flat no 201, Marigold Apartment, Road no 11, Vidyanagar, Pune.
              411032
            </Text>
          </View>
          <View style={{borderWidth: 0.2, width: '80%', opacity: 0.4}}></View>
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
              marginBottom: 15,
            }}>
            <AntDesign name={'contacts'} size={25} color={'gray'} />
            <Text style={{fontSize: 14, fontWeight: '400', marginLeft: 10}}>
              Contact me when you reach at the door
            </Text>
            <TouchableOpacity style={{marginLeft: 20}}>
              <Ionicons name={'chevron-forward'} size={25} color={'#FA5754'} />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View
          style={{
            height: 'auto',
            width: 50,
            backgroundColor: 'red',
            borderRadius: 10,
            borderWidth: 1,
            marginLeft: 20
          }}>
            {str.split('').reverse().map(char => {
              return (
                <Text>{char}</Text>
              )
            })}
        </View> */}
        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View
            style={{
              transform: [{rotate: '270deg'}],
              width: 180,
              height: 180,
            }}>
            <Text
              style={{
                textAlign: 'center',
                borderWidth: 1,
                padding: 10,
                color: 'black',
              }}>
              {str}
            </Text>
          </View>

          <View
            style={{
              position: 'absolute',
              left: 60,
              flexDirection: 'row',
              width: width * 0.77,
            }}>
            <View
              style={{
                height: 180,
                width: '100%',
                backgroundColor: '#00b300',
                borderRadius: 14,
              }}>
              <Text
                style={{
                  fontSize: 10,
                  marginLeft: 15,
                  marginTop: 5,
                  color: '#000000',
                  opacity: 0.7,
                }}>
                Bye bye banks,hello world.
              </Text>
              <View
                style={{
                  width: '100%',
                  borderWidth: 1,
                  height: 40,
                  backgroundColor: '#000000',
                  marginTop: 7,
                }}
              />
              <Text
                style={{
                  fontSize: 7,
                  color: '#000000',
                  marginLeft: 30,
                  marginTop: 7,
                }}>
                authorised signature . not valid unless signed
              </Text>
              <View
                style={{
                  width: '70%',
                  backgroundColor: 'gray',
                  height: 30,
                  marginLeft: 30,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View style={{width: '80%'}}>
                  <View style={styles.dotLine} />
                  <View style={styles.dotLine} />
                  <View style={styles.dotLine} />
                  <View style={styles.dotLine} />
                </View>

                <View style={{justifyContent: 'center'}}>
                  <Text>345</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* <View style={{flex: 0.8, alignItems: 'center', flexDirection: 'row'}}>
          <Text
            style={{
              padding: 10,
              borderWidth: 1,
              transform: [{rotate: '270deg'}],
              borderRadius: 14,
            }}>
            + Add Payment Method
          </Text>
          <View
            style={{
              borderWidth: 1,
              height: 161,
              width: 255,
              backgroundColor: 'green',
            }}></View>
        </View> */}
        <View style={[styles.deliverytimecontiner, {marginTop: 20}]}>
          <TouchableOpacity
            style={styles.deliverybtn}
            onPress={showpaymentmodelHandel}>
            <Text style={styles.checkoutxt}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal transparent={true} visible={showpaymentModel}>
        <View
          style={{
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '85%',
              height: '60%',
              padding: 12,
              borderRadius: 20,
            }}>
            <Text>Choose a Payment Method</Text>
            {paymentData.map(item => (
              <View
                style={{
                  height: 55,
                  backgroundColor: 'snow',
                  elevation: 5,
                  marginVertical: 5,
                  borderRadius: 14,
                  justifyContent: 'center',
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
            <View
              style={[
                styles.deliverytimecontiner,
                {marginTop: 20, width: '100%'},
              ]}>
              <TouchableOpacity
                style={styles.deliverybtn}
                onPress={showtransactionSuccessHandel}
                >
                <Text style={styles.checkoutxt}>Add Payment Method</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


      <Modal transparent={true} visible={showSussessModel}>
        <View
          style={{
            height: Dimensions.get('window').height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '85%',
              height: '50%',
              padding: 12,
              borderRadius: 20,
            }}>
            <Text>Transaction Successful</Text>
          <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
            <Image  source={require('../../assets/images/loginlogo.png')}/>
            <View style={{position:'absolute',right:45,bottom:20}}>
            <Ionicons name='md-checkmark-circle-outline' size={85} color={'#5FA55A'}/>
            </View>
          </View>
            <View
              style={[
                styles.deliverytimecontiner,
                {marginTop: 20, width: '100%'},
              ]}>
              <TouchableOpacity
                style={styles.deliverybtn}
                onPress={()=>navigation.navigate('OrderDetails',{item,item})}
                >
                <Text style={styles.checkoutxt}>Check Order Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '30%',
    width: '100%',
    marginTop: 10,
  },
  changeaddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  changeaddressdetails: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'snow',
    elevation: 4,
    height: 124,
  },
  deliverytimecontiner: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  deliverybtn: {
    height: 48,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: '#FA5457',
    justifyContent: 'center',
  },
  checkoutxt: {
    textAlign: 'center',
    color: 'snow',
    fontSize: 16,
    fontWeight: '600',
  },
  dotLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    height: '20%',
    borderStyle: 'dashed',
  },
});
