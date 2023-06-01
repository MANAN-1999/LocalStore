import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import CHeder from '../../component/CHeder';
import CTextInput from '../../component/CTextInput';
import SelectLanguageScreen from '../SelectLanguageScreen/SelectLanguageScreen';
import {useNavigation, useRoute} from '@react-navigation/native';

const MyDetails = () => {
  const route = useRoute();
  const {width, height} = Dimensions.get('window');
  const {selectedLanguage} = route.params;
  const navigation = useNavigation();
  

  return (
    <SafeAreaView style={{backgroundColor: '#FA5457', height: height}}>
      <View
        style={{
          height: '62%',
          backgroundColor: '#FFFFFF',
          width,
          borderBottomLeftRadius: 48,
          borderBottomRightRadius: 48,
        }}>
        <CHeder
          title={'Select Language'}
          showButton={true}
          buttonText={'save'}
          onpress={()=> navigation.navigate('Dashboard')
            // photoURL: null,     
        }
          btnstyle={{
            borderBottomWidth: 3,
            borderRightWidth: 2,
            width: 48,
            height: 24,
            borderColor: '#FA5457',
            borderRadius: 4,
          }}
        />

        <CTextInput
          titletext={'First Name'}
          placholder={'First Name'}
          otherstyle={{marginTop: 35}}
        />
        <CTextInput
          titletext={'Last Name'}
          placholder={'Last Name'}
          otherstyle={{marginTop: 20}}
        />
        <CTextInput
          titletext={'Phone Number'}
          placholder={'Phone Number'}
          otherstyle={{marginTop: 20}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '85%',
            alignSelf: 'center',
          }}>
          <CTextInput
            titletext={'Language'}
            placholder={'Language'}
            otherstyle={{marginTop: 20, width: '55%'}}
            values={selectedLanguage ? selectedLanguage.name : ''}
          />
          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: '#FA5457',
              width: '40%',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: -20,
              borderRadius: 14,
            }}
            onPress={() => navigation.navigate('SelectLanguageScreen')}>
            <Text
              style={{
                textAlign: 'center',
                color: 'snow',
                fontSize: 18,
                fontWeight: '400',
              }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{marginTop:20,marginHorizontal:40,fontSize:18,fontWeight:'600',color:'snow',opacity:0.8}}>Social Accounts</Text>
      <View style={{alignItems: 'center',marginTop:10}}>
        <TouchableOpacity
          style={{
            height: 56,
            width: '85%',
            backgroundColor: '#FFFFFF',
            borderRadius: 14,
            elevation: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal:25
          }}>
          <Image source={require('../../assets/images/FacebookIcon.png')} />
          <Text>Facebook</Text>
          <TouchableOpacity>
            <Text style={{color: '#FA5457'}}>Not Connnected</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 56,
            width: '85%',
            backgroundColor: '#FFFFFF',
            borderRadius: 14,
            elevation: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 12,
            paddingHorizontal:25
          }}>
          <Image source={require('../../assets/images/GoogleIcon.png')} />
          <Text>Google</Text>
          <TouchableOpacity>
            <Text style={{color: '#01B4BC'}}>Disconnect</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <Text style={{textAlign:'center',width:'65%',alignSelf:'center',color:'snow',opacity:0.8,fontSize:12,fontWeight:'400',marginTop:20}}>
      We will never post to Facebook or Google without your permission
      </Text>
    </SafeAreaView>
  );
};

export default MyDetails;

const styles = StyleSheet.create({
  selectedLanguageText: {},
});
