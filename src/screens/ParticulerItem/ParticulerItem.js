import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');
const ParticulerItem = () => {
  const route = useRoute();
  const {item} = route.params;
  const navigation = useNavigation();

  const [isFullSelected, setIsFullSelected] = useState(true);
  const [isHalfSelected, setIsHalfSelected] = useState(true);

  const handleFullCheckboxChange = () => {
    setIsFullSelected(false);
    setIsHalfSelected(true);
  };

  const handleHalfCheckboxChange = () => {
    setIsFullSelected(true);
    setIsHalfSelected(false);
  };

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'snow'}}>
      <StatusBar translucent backgroundColor="transparent" />
      
        <Image
          source={item.image}
          style={{width: width, height: height * 0.35, resizeMode: 'stretch'}}
        />
        <View activeOpacity={0.7} style={styles.hedercontiner}>
          <TouchableOpacity
            style={styles.hederstyle}
            onPress={() => navigation.goBack()}>
            <Ionicons name={'chevron-back-sharp'} size={30} color={'#FA5457'} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                backgroundColor: 'snow',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name={'share-outline'} size={25} color={'#FA5457'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                lheight: 40,
                width: 40,
                backgroundColor: 'snow',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 20,
              }}>
              <Ionicons name={'search-sharp'} size={25} color={'#FA5457'} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: height*1,
            backgroundColor: 'snow',
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            top: -60,
          }}>
          <View style={{width: '90%', marginTop: 30, alignSelf: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontWeight: '400',
                  marginRight: 8,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#FA5457',
                  textAlign: 'center',
                }}>
                * Popular
              </Text>
            </View>
            <Text
              style={{
                fontSize: 11,
                fontWeight: '400',
                width: '65%',
                marginTop: 10,
              }}>
              {item.details}
            </Text>

            <Text
              style={{
                marginTop: 16,
                color: '#01696E',
                fontSize: 14,
                fontWeight: '700',
              }}>
              Choose Size
            </Text>

            <TouchableOpacity
              style={styles.sizetextinput}
              onPress={handleHalfCheckboxChange}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '40%',
                  }}>
                  <Text
                    style={{fontSize: 15, fontWeight: '600', color: '#000000'}}>
                    Full
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '600',
                      color: '#000000',
                      opacity: 0.5,
                    }}>
                    Rs 600
                  </Text>
                </View>
                {isHalfSelected ? (
                  <View />
                ) : (
                  <Image source={require('../../assets/images/check.png')} />
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sizetextinput}
              onPress={handleFullCheckboxChange}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '40%',
                  }}>
                  <Text
                    style={{fontSize: 15, fontWeight: '600', color: '#000000'}}>
                    Half
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '600',
                      color: '#000000',
                      opacity: 0.5,
                    }}>
                    Rs 300
                  </Text>
                </View>
                {isFullSelected ? (
                  <View />
                ) : (
                  <Image source={require('../../assets/images/check.png')} />
                )}
              </View>
            </TouchableOpacity>

            <View
              style={{
                width: '40%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 50,
              }}>
             <TouchableOpacity onPress={handleDecrement}>
                <Image source={require('../../assets/images/btnmines.png')} />
              </TouchableOpacity>
              <Text style={{color:'black'}}>{count}</Text>
              
              <TouchableOpacity onPress={handleIncrement}>
                <Image source={require('../../assets/images/btnpluse.png')} />
              </TouchableOpacity>
            </View>
            </View>

          </View>
            <View style={{position:'absolute',height:50,width:'100%',bottom:40,alignSelf:'center'}}>
            
        <TouchableOpacity
          style={{
            height: 60,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 50,
            backgroundColor: '#FA5457',
            justifyContent: 'center',
          }}
          onPress={() => {}}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            
            <View />
            <Text style={{fontSize: 16, fontWeight: '600', color: 'snow'}}>
              Add to Basket
            </Text>
            <Text style={{fontSize: 16, fontWeight: '700', color: 'snow'}}>
              Rs 600
            </Text>
          </View>
        </TouchableOpacity>
      </View>
     
    </SafeAreaView>
  );
};

export default ParticulerItem;

const styles = StyleSheet.create({
  hederstyle: {
    height: 40,
    width: 40,
    backgroundColor: 'snow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  hedercontiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    alignSelf: 'center',
    width: '90%',
    marginTop: 50,
  },
  sizetextinput: {
    width: '100%',
    height: 40,
    // borderWidth: 1,
    marginTop: 10,
    justifyContent: 'center',
    elevation: 5,
    backgroundColor: 'snow',
    borderRadius: 14,
  },
});
