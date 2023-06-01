import {Image, StyleSheet, Text, TouchableOpacity, View,Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from '../../component/Dimanctions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('window')
const OnBording = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const screens = [
    {
      id: 1,
      image: require('../../assets/images/onbording1.png'),
      title: 'Order Food or Groceries',
      text: 'Eiusmod nulla dolor laboris ipsum dolore et id ad duis esse dolore consectetur aliquip quis.',
    },
    {
      id: 2,
      image: require('../../assets/images/onbording2.png'),
      title: 'Book Services',
      text: 'Eiusmod nulla dolor laboris ipsum dolore et id ad duis esse dolore consectetur aliquip quis.',
    },
    {
      id: 3,
      image: require('../../assets/images/onbording3.png'),
      title: 'Easy Payment',
      text: 'Eiusmod nulla dolor laboris ipsum dolore et id ad duis esse dolore consectetur aliquip quis.',
    },
  ];

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('onboardingStatus');
      if (value !== null) {
        // Onboarding already completed, navigate to SignIn or any other screen
        navigation.navigate('SignIn');
      }
    } catch (error) {
      console.log('Error retrieving onboarding status:', error);
    }
  };

  const setOnboardingStatus = async () => {
    try {
      await AsyncStorage.setItem('onboardingStatus', 'completed');
    } catch (error) {
      console.log('Error setting onboarding status:', error);
    }
  };

  const handelNext = () => {
    if (currentIndex === screens.length - 1) {
      // Last screen, set onboarding status and navigate to SignIn
      setOnboardingStatus();
      navigation.navigate('SignIn');
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderPaginationDot = () => {
    return screens.map((screen, index) => (
      <TouchableOpacity
        key={screen.id}
        style={[
          styles.paginationDot,
          index === currentIndex ? styles.activeDot : null,
        ]}
        onPress={() => setCurrentIndex(index)}
      />
    ));
  };



  const renderScreen = () => {
    const currentScreen = screens[currentIndex];
    return (
      <View style={styles.screenContaier}>
        <View
          style={styles.cardContainer}>
          <Image style={styles.images} source={currentScreen.image} />
        </View>

        <Text style={styles.title}>{currentScreen.title}</Text>

        <View style={{width: '65%'}}>
          <Text style={styles.text}>{currentScreen.text}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderScreen()}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          marginBottom: 40,
        }}>
        <View style={styles.paginationContainer}>{renderPaginationDot()}</View>
        <TouchableOpacity style={styles.button} onPress={handelNext}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name={'chevron-forward'} size={30} color={'#FFFFFF'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBording;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#FA5457',
  },
  screenContaier: {
    flex: 1,
    alignItems: 'center',
    // justifyContent:'center',
    // paddingHorizontal:40
  },
  cardContainer:{
    flex:1,
    width,
    backgroundColor: 'snow',
    alignItems: 'center',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: 'center',
  },
  images: {
    alignSelf: 'center',
    resizeMode: 'contain',
    backgroundColor: 'snow',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: 'snow',
    marginTop: 31,
  },
  text: {
    fontSize: moderateScale(15),
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: moderateScale(30),
    // marginHorizontal:80,
    color: 'snow',
    marginTop: (23),
  },
  paginationContainer: {
    flexDirection: 'row',
    // alignItems:'center',
    // justifyContent:'center',
    // marginVertical:40
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    opacity: 1,
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: '#F6D51F',
    // paddingHorizontal:30,
    // paddingVertical:10,
    borderRadius: 25,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
