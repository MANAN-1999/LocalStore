import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CHeder from '../../component/CHeder';
import CMyaccountButton from '../../component/CMyaccountButton';
import {useNavigation, useRoute} from '@react-navigation/native';

const MyAccountDetails = () => {
  
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#FA5457', flex: 1}}>
      <CHeder title={'My Account'} onpress={navigation.goBack} />
      <View
        style={{
          backgroundColor: 'snow',
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
          paddingBottom: 30,
        }}>
        <View
          style={{
            marginTop: 25,
            borderRadius: 30,
            width: '85%',
            height: 56,
            alignSelf: 'center',
          }}>
          <CMyaccountButton
            title={'My Orders'}
            image={require('../../assets/images/myorder.png')}
            otherstyle={{borderRadius: 14, width: '100%'}}
            imagesource={true}
            icone={true}
            onPress={() => navigation.navigate('MyOrders')}
          />
        </View>

        <View
          style={{
            marginTop: 25,
            height: 'auto',
            width: '85%',
            alignSelf: 'center',
          }}>
          <CMyaccountButton
            title={'My Details'}
            image={require('../../assets/images/mydetails.png')}
            otherstyle={{
              width: '100%',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
            imagesource={true}
            icone={true}
            onPress={() => navigation.navigate('MyDetails',{selectedLanguage})}
          />
          <CMyaccountButton
            title={'Local-Store Plus'}
            image={require('../../assets/images/myorder.png')}
            otherstyle={{borderRadius: 0, width: '100%'}}
            imagesource={true}
            icone={true}
            onPress={() => navigation.navigate('LocalStorePlus')}
          />
          <CMyaccountButton
            title={'Payment Methods'}
            image={require('../../assets/images/myorder.png')}
            otherstyle={{borderRadius: 0, width: '100%'}}
            imagesource={true}
            icone={true}
            onPress={() => navigation.navigate('PaymentMethodsScreen')}
          />
          <CMyaccountButton
            title={'Saved addresses'}
            image={require('../../assets/images/myorder.png')}
            otherstyle={{
              width: '100%',
              borderBottomLeftRadius: 14,
              borderBottomRightRadius: 14,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            imagesource={true}
            icone={true}
            onPress={() => navigation.navigate('SaveAddreses')}
          />
        </View>

        <View
          style={{
            marginTop: 25,
            height: 'auto',
            width: '85%',
            alignSelf: 'center',
          }}>
          <CMyaccountButton
            title={'Account Credit'}
            image={require('../../assets/images/myorder.png')}
            otherstyle={{
              width: '100%',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
            imagesource={true}
            icone={true}
            onPress={() => navigation.navigate('AccountCredit')}
          />
          <CMyaccountButton
            title={'Invite Friends'}
            image={require('../../assets/images/myorder.png')}
            otherstyle={{
              width: '100%',
              borderBottomLeftRadius: 14,
              borderBottomRightRadius: 14,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            imagesource={true}
            icone={true}
            onPress={() => navigation.navigate('InviteFriends')}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 25,
          height: 'auto',
          width: '85%',
          alignSelf: 'center',
        }}>
        <CMyaccountButton
          title={'FAQs'}
          image={require('../../assets/images/myorder.png')}
          otherstyle={{
            width: '100%',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
          newtitle={true}
          icone={true}
          onPress={()=>navigation.navigate('Faqs')}
        />
        <CMyaccountButton
          title={'About'}
          image={require('../../assets/images/myorder.png')}
          otherstyle={{borderRadius: 0, width: '100%'}}
          newtitle={true}
          icone={true}
          onPress={()=>navigation.navigate('About')}
        />
        <CMyaccountButton
          title={'Logout'}
          image={require('../../assets/images/myorder.png')}
          otherstyle={{
            width: '100%',
            borderBottomLeftRadius: 14,
            borderBottomRightRadius: 14,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
          newtitle={true}
        />
      </View>
    </View>
  );
};

export default MyAccountDetails;

const styles = StyleSheet.create({});
