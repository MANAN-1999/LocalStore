import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CHeder from '../../component/CHeder';
import CMyaccountButton from '../../component/CMyaccountButton';
import {Ans1, Ans2, Coronavirus, Que1, Que2} from '../../utils/Strings';

const TermsandConditions = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: 'snow', paddingBottom: 100}}>
        <CHeder title={'Terms and Conditions'} />
        <View
          style={{
            height: '48%',
            backgroundColor: '#FA5457',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}>
          <CMyaccountButton
            title={'Coronavirus'}
            newtitle={true}
            image={require('../../assets/images/mydetails.png')}
            otherstyle={{
              width: '90%',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              marginTop: 30,
            }}
          />
          <CMyaccountButton
            title={'About Local-Store'}
            newtitle={true}
            otherstyle={{borderRadius: 0, width: '90%'}}
          />
          <CMyaccountButton
            title={'Using Local-Store'}
            newtitle={true}
            otherstyle={{borderRadius: 0, width: '90%'}}
          />
          <CMyaccountButton
            title={'Questions About My Order'}
            newtitle={true}
            otherstyle={{borderRadius: 0, width: '90%'}}
          />
          <CMyaccountButton
            title={'Fees on Deliveroo'}
            newtitle={true}
            otherstyle={{borderRadius: 0, width: '90%'}}
          />
          <CMyaccountButton
            title={'Inviting Friends'}
            newtitle={true}
            otherstyle={{borderRadius: 0, width: '90%'}}
          />
          <CMyaccountButton
            title={'Anything Else?'}
            newtitle={true}
            otherstyle={{borderRadius: 0, width: '90%'}}
          />
          <CMyaccountButton
            newtitle={true}
            title={'Local-Store Plus'}
            otherstyle={{
              width: '90%',
              borderBottomLeftRadius: 14,
              borderBottomRightRadius: 14,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
          />
        </View>
        <View style={styles.discripctioncointainer}>
          <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
            {Coronavirus}
          </Text>
          <Text style={styles.quetext}>{Que1}</Text>
          <Text style={styles.consepttxt}>{Ans1}</Text>
          <Text style={styles.quetext}>{Que2}</Text>
          <Text style={styles.consepttxt}>{Ans2}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TermsandConditions;

const styles = StyleSheet.create({
  discripctioncointainer: {
    height: 'auto',
    width: '90%',
    backgroundColor: 'snow',
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 8,
    padding: 24,
    marginTop: 30,
    // paddingBottom:200
  },
  consepttxt: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
    marginTop: 12,
  },
  quetext: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginTop: 12,
  },
});
