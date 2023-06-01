import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {moderateScale} from '../../component/Dimanctions';
import CSocialbutton from '../../component/CSocialbutton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {setUserDetail, signIn} from '../../Redux/authSlice';

GoogleSignin.configure();

const {width} = Dimensions.get('window');

const SignIn = () => {
  const [isboxselected, setIsBoxSelected] = useState(false);
  const [showMobileNumberModel, setShowMobileNumberModel] = useState(false);
  const [showOtpModel, setShowOtpModel] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const [code, setCode] = useState('');

  const isUserLogin = useSelector(state => state.reducer.auth.user);

  useEffect(() => {
    isUserLogin !== null ? navigation.navigate('Dashboard') : null;
  }, []);

  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const forthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();

  // const customUrl =
  //   'https://blog.logrocket.com/wp-content/uploads/2021/03/use-forwardref-react.png';

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const showMobileNumberModelHandler = () => {
    setShowMobileNumberModel(true), {phoneNumber};
  };

  const showOtpModelHandler = () => {
    setShowOtpModel(true);
    setShowMobileNumberModel(false);
  };
  const HandalOnPressOnOtp = () => {
    // showOtpModel(false)
    navigation.navigate('SelectLanguageScreen');
    setShowOtpModel(false);
  };

  const buttonOnPress = () => {
    setIsBoxSelected(!isboxselected);
  };

  const googlesignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      // const userPhotoURL = userInfo?.user?.photo;
      // const userdisplayName = userInfo?.user?.name;
      const userPhotoURL = userInfo.user.photo;
      const userdisplayName = userInfo.user.name;
      // navigation.navigate('SelectLanguageScreen');
      navigation.navigate('Dashboard', {
        // photoURL: userPhotoURL ? userPhotoURL : customUrl,
        photoURL: userPhotoURL,
        displayName: userdisplayName,
      });
      console.log(userInfo);
      dispatch(setUserDetail(userInfo));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error, 'SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error, 'IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error, 'PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        // some other error happened
        console.log(error, 'Somthing out of the function');
      }
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.cardcontainer}>
          <View style={styles.hederviewstyle}>
            <Image
              source={require('../../assets/images/localstorelogo.png')}
              style={styles.hederimagestyle}
            />
            <Text style={styles.hedertext}>Local-Store</Text>
          </View>
          <Text style={styles.sometxtstyle}>Local ke liye vocal bano</Text>
          <Image
            source={require('../../assets/images/loginlogo.png')}
            style={styles.imgstyle}
          />
          <CSocialbutton
            imageSource={require('../../assets/images/GoogleIcon.png')}
            title={'Sign in with Google'}
            otherstyles={{marginTop: moderateScale(40)}}
            onPress={googlesignIn}
          />
          <CSocialbutton
            imageSource={require('../../assets/images/FacebookIcon.png')}
            title={'Sign in with Facebook'}
            otherstyles={{marginTop: moderateScale(24)}}
          />
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
            <View style={styles.ohertextLine}></View>
            <Text style={styles.ortxt}>or</Text>
            <View style={styles.ohertextLine}></View>
          </View>
          <CSocialbutton
            title={'Sign up using Mobile Number'}
            otherstyles={{marginTop: 20}}
            withoutimgtxt
            onPress={showMobileNumberModelHandler}
          />

          <View style={styles.turmsconditionstyle}>
            <TouchableOpacity
              style={[styles.roundbtn, isboxselected && styles.seletedroundbtn]}
              onPress={buttonOnPress}>
              {isboxselected && <View style={styles.seletedDot} />}
            </TouchableOpacity>
            <Text style={styles.turmtxt}>
              Creating an account means you agree to our Term & Conditions of
              our Privacy Policy.
            </Text>
          </View>
        </View>
      </View>
      <Modal visible={showMobileNumberModel} transparent={true}>
        <KeyboardAvoidingView>
          <View style={styles.modelcontiner}>
            <View style={styles.modalcardstyle}>
              <Text style={styles.modelhedertxt}>Your Phone !</Text>
              <Text style={styles.phonetxt}>Phone Number</Text>
              <View style={styles.phoneinputviewstyle}>
                <View style={styles.phonetextinpustyle}>
                  <TouchableOpacity style={styles.fullphonebuttone}>
                    <Image
                      source={require('../../assets/images/Contryimg.png')}
                      style={styles.flageimgstyle}
                    />
                    <View style={styles.iconestyle}>
                      <Ionicons name={'chevron-down-sharp'} color={'black'} />
                    </View>
                  </TouchableOpacity>
                  <TextInput
                    placeholder="Enter Mobile Number"
                    style={{marginHorizontal: 14}}
                    keyboardType="number-pad"
                    maxLength={10}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholderTextColor={'black'}
                  />
                </View>
              </View>
              <Text style={styles.verifynumbertxt}>
                A 6 digit OTP will be sent via SMS to verify your mobile number.
              </Text>
            </View>

            <TouchableOpacity
              style={styles.buttonview}
              onPress={showOtpModelHandler}>
              <Text style={styles.continetxt}>Continue</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <Modal visible={showOtpModel} transparent={true}>
        <KeyboardAvoidingView behavior="position">
          <ScrollView>
            <View style={styles.modelcontiner}>
              <View style={styles.modalcardstyle}>
                <Text style={styles.modelhedertxt}>OTP Varification</Text>
                <Text style={styles.enterotptxt}>
                  Enter the OTP you received on +91 {''}
                  {phoneNumber.substring(0, 5)} *****
                </Text>
                <View style={styles.otpviewstyle}>
                  <View style={styles.otpstyle}>
                    <TextInput
                      style={styles.otptxt}
                      keyboardType="number-pad"
                      maxLength={1}
                      ref={firstInput}
                      onChangeText={text => {
                        if (text.length > 0) {
                          secondInput.current.focus();
                        }
                        setCode(code + text);
                      }}
                    />
                  </View>
                  <View style={styles.otpstyle}>
                    <TextInput
                      style={styles.otptxt}
                      keyboardType="number-pad"
                      maxLength={1}
                      ref={secondInput}
                      onChangeText={txt => {
                        txt
                          ? thirdInput.current.focus()
                          : firstInput.current.focus();
                      }}
                    />
                  </View>
                  <View style={styles.otpstyle}>
                    <TextInput
                      style={styles.otptxt}
                      keyboardType="number-pad"
                      maxLength={1}
                      ref={thirdInput}
                      onChangeText={text => {
                        if (text.length > 0) {
                          forthInput.current.focus();
                        }
                        setCode(code + text);
                      }}
                    />
                  </View>
                  <View style={styles.otpstyle}>
                    <TextInput
                      style={styles.otptxt}
                      keyboardType="number-pad"
                      maxLength={1}
                      ref={forthInput}
                      onChangeText={text => {
                        if (text.length > 0) {
                          fifthInput.current.focus();
                        }
                        setCode(code + text);
                      }}
                    />
                  </View>
                  <View style={styles.otpstyle}>
                    <TextInput
                      style={styles.otptxt}
                      keyboardType="number-pad"
                      maxLength={1}
                      ref={fifthInput}
                      onChangeText={text => {
                        if (text.length > 0) {
                          sixthInput.current.focus();
                        }
                        setCode(code + text);
                      }}
                    />
                  </View>
                  <View style={styles.otpstyle}>
                    <TextInput
                      style={styles.otptxt}
                      keyboardType="number-pad"
                      maxLength={1}
                      ref={sixthInput}
                      onChangeText={txt => {
                        !txt && fifthInput.current.focus();
                      }}
                    />
                  </View>
                </View>
                <TouchableOpacity>
                  <Text style={styles.resentotpstyle}>Resend OTP</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.buttonview}
                onPress={HandalOnPressOnOtp}>
                <Text style={styles.continetxt}>Continue</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FA5457',
    flex: 1,
    alignItems: 'center',
  },
  cardcontainer: {
    backgroundColor: '#FFFFFF',
    // height:'92%',
    // width:moderateScale(380),
    width,
    borderBottomRightRadius: moderateScale(40),
    borderBottomLeftRadius: moderateScale(40),
    alignItems: 'center',
    flex: 0.93,
    // justifyContent:'center'
  },
  ohertextLine: {
    borderBottomWidth: 1,
    width: '31%',
    color: '#000000',
    opacity: 0.5,
  },
  roundbtn: {
    height: 18,
    width: 18,
    borderWidth: 0.1,
    // opacity:0.5,
    borderRadius: 9,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'snow',
    marginRight: 20,
  },
  seletedroundbtn: {
    backgroundColor: 'snow',
    borderColor: 'black',
  },
  seletedDot: {
    height: 11,
    width: 11,
    borderRadius: 5.5,
    backgroundColor: 'black',
    // color:'black'
    elevation: 4,
  },
  hederviewstyle: {
    marginTop: moderateScale(35),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hederimagestyle: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
  hedertext: {
    color: 'red',
    marginLeft: moderateScale(16),
    fontSize: moderateScale(30),
    fontWeight: 'bold',
  },
  sometxtstyle: {
    marginTop: moderateScale(29),
    textAlign: 'center',
    fontWeight: '400',
    fontSize: moderateScale(15),
    color: 'black',
  },
  imgstyle: {
    marginTop: moderateScale(28),
    width: moderateScale(232),
    height: moderateScale(194),
  },
  ortxt: {
    marginHorizontal: 20,
    color: 'black',
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center',
  },
  turmsconditionstyle: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    width: '70%',
    justifyContent: 'center',
  },
  turmtxt: {
    fontSize: 12,
    fontWeight: 400,
    color: 'black',
  },
  otpstyle: {
    height: 48,
    width: 35,
    borderWidth: 1,
    borderRadius: 14,
    marginHorizontal: 4,
    // justifyContent:'space-evenly',
    // alignItems:'center'
  },
  otptxt: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: 'black',
  },
  modelcontiner: {
    // flex: 1,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalcardstyle: {
    backgroundColor: '#fff',
    width: '80%',
    height: '38%',
    padding: 22,
    borderRadius: 20,
  },
  modelhedertxt: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  resentotpstyle: {
    color: '#FA5457',
    textAlign: 'center',
    marginTop: 40,
  },
  enterotptxt: {
    marginTop: 27,
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    opacity: 0.5,
    width: '80%',
    marginHorizontal: 12,
  },
  continetxt: {
    fontSize: 24,
    fontWeight: '600',
    color: 'snow',
  },
  buttonview: {
    width: '80%',
    backgroundColor: '#FA5457',
    borderRadius: 14,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  otpviewstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  verifynumbertxt: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 400,
    marginTop: 35,
    color: 'black',
  },
  phonetxt: {
    marginTop: 27,
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    opacity: 0.5,
  },
  phoneinputviewstyle: {
    flexDirection: 'row',
    height: 48,
    borderRadius: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 16,
  },
  phonetextinpustyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullphonebuttone: {
    height: 48,
    width: 50,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'snow',
    elevation: 7,
  },
  flageimgstyle: {
    marginLeft: 7,
    height: 30,
    width: 28,
  },
  iconestyle: {
    marginLeft: 3,
    marginRight: 5,
  },
});
