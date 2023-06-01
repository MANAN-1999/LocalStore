import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CHeder from '../../component/CHeder';
import CMyaccountButton from '../../component/CMyaccountButton';
import { useNavigation } from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#FA5457'}}>
      <CHeder title={'About'} />
      <View
        style={{
          height: '60%',
          backgroundColor: 'snow',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <Image
          source={require('../../assets/images/logo2.png')}
          style={{height: 100, width: 100, alignSelf: 'center', marginTop: 60}}
        />
        <Text
          style={{
            marginTop: 30,
            textAlign: 'center',
            fontSize: 12,
            fontWeight: '600',
            opacity: 0.5,
          }}>
          Version 3.47.0
        </Text>
        <View
          style={{
            marginTop: 25,
            height: 'auto',
            width: '85%',
            alignSelf: 'center',
          }}>
          <CMyaccountButton
            title={'Contact us about your order'}
            image={require('../../assets/images/myorder.png')}
            otherstyle={{
              width: '100%',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
            newtitle={true}
            icone={true}
            othertxtstyle={{opacity: 0.5}}
            iconestyle={{opacity: 0.5}}
          />
          <CMyaccountButton
            title={'Send us some app feedback'}
            image={require('../../assets/images/myorder.png')}
            otherstyle={{borderRadius: 0, width: '100%'}}
            newtitle={true}
            icone={true}
            //   onPress={()=>navigation.navigate('About')}
            othertxtstyle={{opacity: 0.5}}
            iconestyle={{opacity: 0.5}}
          />
          <CMyaccountButton
            title={'Rate us on App Store'}
            image={require('../../assets/images/myorder.png')}
            otherstyle={{
              width: '100%',
              borderBottomLeftRadius: 14,
              borderBottomRightRadius: 14,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
            newtitle={true}
            icone={true}
            othertxtstyle={{opacity: 0.5}}
            iconestyle={{opacity: 0.5}}
          />
        </View>
      </View>
      <View style={{marginTop:40}}>
        <Text style={styles.textstyle}>© 2020 Local-Store.</Text>
        <Text style={styles.textstyle}>Made in India</Text>
        <View style={{flexDirection:'row',alignSelf:'center',marginTop:25}}>
            <TouchableOpacity onPress={()=>navigation.navigate('TermsandConditions')}>
                <Text style={[styles.textstyle,{opacity:1,fontSize:14}]}>Terms and Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[styles.textstyle,{opacity:1,fontSize:14}]}>・Privacy Policy</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  textstyle: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    alignSelf: 'center',
    color: 'snow',
    opacity: 0.6,
  },
});
