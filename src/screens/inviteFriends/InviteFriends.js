import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CHeder from '../../component/CHeder';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';

const InviteFriends = () => {


    const mycustomeshare = async() => {
        const shareOpction = {
            message:'This is a Demo massage',
        }
        try{
            const shareResponce = await Share.open(shareOpction)
        } catch (errors){

            console.log(errors,'errors');
        }

    }
  return (
    <View style={styles.container}>
      <CHeder title={'Invite Friends'} />
      <View style={styles.mainviewcointainer}>
        <View style={{alignItems: 'center', marginTop: 60}}>
          <Image
            source={require('../../assets/images/invitefriends.png')}
            style={{height: 236, width: 306, alignSelf: 'center'}}
          />
          <Text
            style={styles.textstyle}>
            Grab a discount opportunity by inviting your friends
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonstyle}
        activeOpacity={0.7} onPress={mycustomeshare}>
        <Text
          style={styles.btntxt}>
          Share
        </Text>
        <Ionicons name="share-social-outline" color={'snow'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default InviteFriends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA5457',
  },
  mainviewcointainer: {
    height: '75%',
    backgroundColor: 'snow',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  textstyle:{
    textAlign: 'center',
    width: '60%',
    marginTop: 60,
    color: 'black',
    opacity: 0.5,
    fontSize:18,
    fontWeight:'400'
  },
  buttonstyle:{
    height: 56,
    width: '90%',
    alignSelf: 'center',
    elevation: 6,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FA5457',
    marginTop: 30,
    justifyContent: 'center',
  },
  btntxt:{
    color: 'snow',
    fontSize: 18,
    fontWeight: '400',
    marginRight: 5,
  }
});
