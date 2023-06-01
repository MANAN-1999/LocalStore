import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CHeder from '../../component/CHeder';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const LANGUAGES = [
  {id: 1, name: 'English'},
  {id: 2, name: 'Marathi'},
  {id: 3, name: 'Hindi'},
  {id: 4, name: 'Telugu'},
  {id: 5, name: 'Malayalam'},
  {id: 6, name: 'Bengali'},
];


const SelectLanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const navigation = useNavigation();

  const handleLanguagePress = language => {
    setSelectedLanguage(language);
  };


  const buttonpress = () => {
    if (selectedLanguage) {
      console.log(selectedLanguage,"selectedLanguage");
      navigation.navigate('MyDetails', { selectedLanguage:selectedLanguage });
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FA5457'}}>
      <CHeder
        title={'Select Language'}
        showButton={true}
        buttonText={'save'}
        onpress={()=>navigation.navigate('Dashboard')}
        btnstyle={{
          borderBottomWidth: 3,
          borderRightWidth: 2,
          // elevation: 2,
          width: 48,
          height: 24,
          borderColor: '#FA5457',
          borderRadius: 4,
        }}
      />
      <View
        style={{
          flex: 0.80,
          backgroundColor: 'snow',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          alignItems: 'center',
        }}>
        {LANGUAGES.map(language => (
          <TouchableOpacity
            key={language.id}
            onPress={() => handleLanguagePress(language)}
            style={[
              styles.listconayiner,
              selectedLanguage && selectedLanguage.id === language.id && styles.selectedLanguageItem,
            ]}>
            <Text
              style={[
                styles.languageName,
                selectedLanguage && selectedLanguage.id === language.id && styles.selectedLanguageName,
              ]}>
              {language.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ flexDirection:'row-reverse',right:25,top:100}}>
        <TouchableOpacity style={styles.button} onPress={buttonpress }>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name={'chevron-forward'} size={30} color={'#FFFFFF'} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectLanguageScreen;

const styles = StyleSheet.create({
  listconayiner: {
    elevation: 7,
    width: '75%',
    backgroundColor: 'snow',
    borderRadius: 14,
    height: 56,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedLanguageItem: {
    backgroundColor: '#FA5457',
  },
  languageName: {
    color: '#004043',
    fontSize: 24,
    fontWeight: '600',
  },
  selectedLanguageName: {
    color: 'snow',
    fontSize: 24,
    fontWeight: '600',
  },
  button: {
    height: 58,
    width: 58,
    backgroundColor: '#F6D51F',
    borderRadius: 28,
    justifyContent: 'center',
    // left:25,
    alignItems: 'center',
    // top:90
  },
});
