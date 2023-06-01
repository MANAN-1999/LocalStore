import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


 const {width, height} = Dimensions.get('window');
const CHeder = ({title, buttonText, showButton, btnstyle, onpress}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        height: 55,
        width: width,
        justifyContent: 'center',
        // borderBottomWidth: 0.2,
        backgroundColor: 'snow',
        elevation: 10,
      }}>
      <View style={styles.container}>
        
        <StatusBar backgroundColor={'snow'} barStyle="dark-content" translucent={false}/>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor:'green'
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Ionicons
              name={'chevron-back-outline'}
              size={28}
              color={'#FA5457'}
            />
          </TouchableOpacity>
          <Image
            source={require('../assets/images/localstorelogo.png')}
            style={{height: 20, width: 20}}
          />
        </View>
        <Text style={{fontSize: 18, fontWeight: '700', color: 'black',textAlign:'center',paddingRight:40}}>
          {title}
        </Text>

        {showButton ? (
          <TouchableOpacity onPress={onpress} style={btnstyle} >
            <Text style={{fontSize: 16, color: '#FA5457', textAlign: 'center'}}>
              {buttonText}
            </Text>
          </TouchableOpacity>
        ) : (
          <View  style={{backgroundColor:'black'}}/>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CHeder;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'snow',
    // elevation: 10,
    // height: 40,
    marginHorizontal: 20,
    // marginLeft:20,
    // marginRight:20,
    // backgroundColor:'red'
  },
});
