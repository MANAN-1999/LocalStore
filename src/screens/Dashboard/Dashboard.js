import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {firebase} from '@react-native-firebase/auth';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Categories,
  featured,
  newlocalstore,
  offer,
  offerData,
  otherdata,
} from '../../assets/Data/dummydata';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {orderagin} from '../../assets/Data/dummydata';

const {width, height} = Dimensions.get('window');

const Dashboard = () => {
  const navigation = useNavigation();
  const route = useRoute();

  //   const {photoURL, displayName} = route?.params;

  const [selectedButton, setSelectedButton] = useState('Pickup');
  const [currentPage, setCurrentPage] = useState(offerData);
  const [currentindex, setCurrentIndex] = useState(0);

  console.log(currentindex, 'currentindex');

  const customUrl =
    'https://blog.logrocket.com/wp-content/uploads/2021/03/use-forwardref-react.png';

  const renderProfileImage = () => {
    if (photoURL) {
      return (
        <Image
          source={{uri: photoURL ? photoURL : customUrl}}
          style={styles.image}
        />
      );
    } else {
      // Extract the first letter of the display name
      const firstLetter = displayName ? displayName.charAt(0) : '';

      return (
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderText}>{firstLetter}</Text>
        </View>
      );
    }
  };

  const handleButtonPress = buttonName => {
    setSelectedButton(buttonName);
  };

  const offerrender = ({item}) => {
    return (
      <TouchableOpacity style={styles.offercontiner}>
        <Image source={item.image} style={styles.cardimg} />
      </TouchableOpacity>
    );
  };

  const catItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.catcontiner}>
        <Image source={item.image} style={styles.cardimg} />
      </TouchableOpacity>
    );
  };

  const OrderAgain = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemcardcontiner}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('ShopDetails', {item: item});
        }}>
        <Image source={item.image} style={styles.cardimgstyle} />
        <View style={styles.mincard}>
          <Text style={styles.mintext}>45-65 min</Text>
        </View>
        <Text style={styles.itemtextstyle}>{item.name}</Text>
        <View style={styles.ratingcontiner}>
          <View style={styles.ratigiconstyle}>
            <Ionicons name={'md-star'} color={'#01B4BC'} size={12} />
          </View>
          <Text style={styles.ratingtextstyle}>
            {item.rating}{' '}
            <Text style={styles.ratingothertext}>
              (50+) * Groceries * Fruits * Stationary * Vegetables{' '}
            </Text>
          </Text>
        </View>
        <Text style={styles.kmtext}>{item.awaykm}</Text>
      </TouchableOpacity>
    );
  };

  const Featured = ({item}) => {
    return (
      <TouchableOpacity style={styles.itemcardcontiner} onPress={() => navigation.navigate('ShopDetails', {item: item})}>
        <Image source={item.image} style={styles.cardimgstyle} />
        <View style={styles.featuredabsolute}>
          <Text style={styles.featuredabsolutetext}>50% off</Text>
        </View>
        <Text style={styles.itemtextstyle}>{item.name}</Text>
        <View style={styles.ratingcontiner}>
          <View style={styles.ratigiconstyle}>
            <Ionicons name={'md-star'} color={'#01B4BC'} size={12} />
          </View>
          <Text style={styles.ratingtextstyle}>
            {item.rating}{' '}
            <Text style={styles.ratingothertext}>
              (50+) * Groceries * Fruits * Stationary * Vegetables{' '}
            </Text>
          </Text>
        </View>
        <Text style={styles.kmtext}>{item.awaykm}</Text>
      </TouchableOpacity>
    );
  };

  const Offers = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ShopDetails', {item: item})}
        style={styles.offercontinerstyle}>
        <Image source={item.image} style={styles.cardimgstyle} />
        <Text style={styles.itemtextstyle}>{item.name}</Text>
        <View style={styles.ratingcontiner}>
          <View style={styles.ratigiconstyle}>
            <Ionicons name={'md-star'} color={'#01B4BC'} size={12} />
          </View>
          <Text style={styles.ratingtextstyle}>
            {item.rating}{' '}
            <Text style={styles.ratingothertext}>
              (50+) * Groceries * Fruits * Stationary * Vegetables{' '}
            </Text>
          </Text>
        </View>
        <Text style={styles.kmtext}>{item.awaykm}</Text>
        <View style={styles.offertextview}>
          <Ionicons name={'pricetag-outline'} color={'#FF7381'} size={15} />
          <Text style={styles.offertextstyle}>Spend Rs 1000, get 40% off</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const NewOn = ({item}) => {
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate('ShopDetails', {item: item})}
        style={{
          height: 300,
          width: width * 0.7,
          marginRight: 10,
          borderRadius: 9,
        }}>
        <Image source={item.image} style={styles.cardimgstyle} />
        <Text style={styles.itemtextstyle}>{item.name}</Text>
        <View style={styles.ratingcontiner}>
          <View style={styles.ratigiconstyle}>
            <Ionicons name={'md-star'} color={'#01B4BC'} size={12} />
          </View>
          <Text style={styles.ratingtextstyle}>
            {item.rating}{' '}
            <Text style={{fontSize: 13, fontWeight: '400', color: 'gray'}}>
              (50+) * Groceries * Fruits * Stationary * Vegetables{' '}
            </Text>
          </Text>
        </View>
        <Text style={styles.kmtext}>{item.awaykm}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 2,
            marginTop: 6,
          }}>
          <Ionicons name={'pricetag-outline'} color={'#FF7381'} size={15} />
          <Text
            style={{
              color: '#FF7381',
              textAlign: 'center',
              marginLeft: 8,
              fontSize: 13,
              fontWeight: '400',
            }}>
            Spend Rs 1000, get 40% off
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const otherProduct = ({item}) => {
    return (
      <TouchableOpacity 
      onPress={() => navigation.navigate('ShopDetails', {item: item})}
      style={[styles.itemcardcontiner, {marginBottom: 20}]} >
        <Image
          source={item.image}
          style={{height: 200, width: width * 0.9, borderRadius: 9}}
        />
        <Text style={styles.itemtextstyle}>{item.name}</Text>
        <View style={styles.ratingcontiner}>
          <View style={styles.ratigiconstyle}>
            <Ionicons name={'md-star'} color={'#01B4BC'} size={12} />
          </View>
          <Text style={styles.ratingtextstyle}>
            {item.rating}{' '}
            <Text style={{fontSize: 13, fontWeight: '400', color: 'gray'}}>
              (50+) * Groceries * Fruits * Stationary * Vegetables{' '}
            </Text>
          </Text>
        </View>
        <Text sstyle={styles.kmtext}>{item.awaykm}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 2,
            marginTop: 6,
          }}>
          <Ionicons name={'pricetag-outline'} color={'#FF7381'} size={15} />
          <Text
            style={{
              color: '#FF7381',
              textAlign: 'center',
              marginLeft: 8,
              fontSize: 13,
              fontWeight: '400',
            }}>
            Spend Rs 1000, get 40% off
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: ' #F6D51F'}}>
      {/* <StatusBar backgroundColor={'#F6D51F'} barStyle="dark-content" /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#F6D51F',
            height: '5%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <View
              style={{
                width: '80%',
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/localstorelogo.png')}
                  style={{height: 16, width: 16}}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: '#ED1E2D',
                    marginLeft: 7,
                  }}>
                  Local-Store
                </Text>
              </View>
              <TouchableOpacity onPress={()=>navigation.navigate('MyAccountDetails')}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '700',
                  color: 'black',
                  marginTop: 4,
                }}>
                201, Marigold Apartment, Vidyanagar
              </Text>
              </TouchableOpacity>
              
            </View>
            {/* {renderProfileImage()} */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 40,
              marginTop: 30,
            }}>
            <TouchableOpacity
              style={[
                styles.btnstyle,
                selectedButton === 'Delivery' && styles.selectedButton,
              ]}
              onPress={() => handleButtonPress('Delivery')}>
              <Text
                style={[
                  styles.txtstyle,
                  selectedButton === 'Delivery' && styles.selectedbtntxt,
                ]}>
                Delivery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnstyle,
                selectedButton === 'Pickup' && styles.selectedButton,
              ]}
              onPress={() => handleButtonPress('Pickup')}>
              <Text
                style={[
                  styles.txtstyle,
                  selectedButton === 'Pickup' && styles.selectedbtntxt,
                ]}>
                Pickup
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: '90%',
            backgroundColor: 'snow',
            borderRadius: 40,
            top: -35,
          }}>
          <View style={{width: '100%', alignSelf: 'center', marginTop: 30}}>
            <FlatList
              data={offerData}
              renderItem={offerrender}
              keyExtractor={item => item.id}
              horizontal
              pagingEnabled
              onScroll={e => {
                const x = e.nativeEvent.contentOffset.x;
                setCurrentIndex((x / width).toFixed(0));
              }}
              showsHorizontalScrollIndicator={false}
            />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {offerData.map((item, index) => {
                return (
                  <View
                    style={{
                      height: 12,
                      width: 12,
                      borderRadius: 6,
                      backgroundColor:
                        currentindex == index ? '#FA5457' : 'gray',
                      marginLeft: 10,
                      marginTop: 18,
                    }}></View>
                );
              })}
            </View>
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <TextInput
              placeholder="Shops, Groceries or Services"
              style={{
                height: 36,
                width: '87%',
                borderRadius: 14,
                padding: 10,
                marginRight: 12,
                backgroundColor: 'snow',
                elevation: 4,
              }}
            />
            <Ionicons name={'md-search'} size={30} color={'#01696E'} />
          </View>
          <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: '#01696E',
                marginBottom: 3,
              }}>
              Categories
            </Text>
            <FlatList
              data={Categories}
              renderItem={catItem}
              keyExtractor={item => item.id}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#01696E',
                  marginBottom: 8,
                }}>
                Order again
              </Text>
              <Ionicons name={'chevron-forward'} size={22} color={'#227D81'} />
            </View>
            <FlatList
              data={orderagin}
              renderItem={OrderAgain}
              horizontal
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              //   pagingEnabled
              contentContainerStyle={{paddingBottom: 4}}
            />
          </View>

          <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#01696E',
                  marginBottom: 8,
                }}>
                Featured
              </Text>
              <Ionicons name={'chevron-forward'} size={22} color={'#227D81'} />
            </View>
            <FlatList
              data={featured}
              renderItem={Featured}
              horizontal
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              //   pagingEnabled
              contentContainerStyle={{paddingBottom: 4}}
            />
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 20,
              height: 'auto',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#01696E',
                  marginBottom: 8,
                }}>
                Upto 40% off
              </Text>
              <Ionicons name={'chevron-forward'} size={22} color={'#227D81'} />
            </View>
            <FlatList
              data={offer}
              renderItem={Offers}
              horizontal
              keyExtractor={item => item.id}
              //   pagingEnabled
              contentContainerStyle={{paddingBottom: 4}}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 20,
              height: 'auto',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#01696E',
                  marginBottom: 8,
                }}>
                New on LocalStore
              </Text>
              <Ionicons name={'chevron-forward'} size={22} color={'#227D81'} />
            </View>
            <FlatList
              data={newlocalstore}
              renderItem={NewOn}
              horizontal
              keyExtractor={item => item.id}
              //   pagingEnabled
              contentContainerStyle={{paddingBottom: 4}}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 20,
              height: 'auto',
            }}>
            <FlatList
              data={otherdata}
              renderItem={otherProduct}
              keyExtractor={item => item.id}
              //   pagingEnabled
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 80}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  placeholderContainer: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 20,
    color: 'black',
  },
  btnstyle: {
    height: 25,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    marginRight: 20,
  },
  selectedButton: {
    backgroundColor: '#FA5457',
  },
  txtstyle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FA5457',
  },
  selectedbtntxt: {
    color: 'snow',
  },
  offercontiner: {
    height: 170,
    width: width * 1,
    overflow: 'hidden',
  },
  cardimg: {
    width: '100%',
    height: '100%',
  },
  catcontiner: {
    height: 90,
    width: 90,
    marginRight: 10,
  },
  itemcardcontiner: {
    height: 'auto',
    width: width * 0.7,
    marginRight: 10,
    borderRadius: 9,
  },
  cardimgstyle: {
    height: 156,
    width: 'auto',
    borderRadius: 14,
  },
  mincard: {
    position: 'absolute',
    backgroundColor: 'snow',
    height: 44,
    width: 96,
    top: 135,
    right: 15,
    borderRadius: 23,
    alignItems: 'center',
    elevation: 6,
  },
  mintext: {
    textAlign: 'center',
    width: '50%',
    alignSelf: 'center',
    padding: 5,
  },
  itemtextstyle: {
    marginTop: 15,
    color: 'black',
    fontSize: 16,
    fontWeight: '800',
  },
  ratingcontiner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  ratigiconstyle: {
    justifyContent: 'flex-start',
    marginTop: 3,
  },
  ratingtextstyle: {
    color: '#01B4BC',
    fontSize: 13,
    fontWeight: '400',
    marginLeft: 8,
  },
  ratingothertext: {
    fontSize: 13,
    fontWeight: '400',
    color: 'gray',
  },
  kmtext: {
    fontSize: 13,
    fontWeight: '400',
    color: '#A3A3A3',
    marginLeft: 5,
    marginTop: 5,
  },
  featuredabsolute: {
    position: 'absolute',
    backgroundColor: '#FA5457',
    height: 20,
    width: 69,
    top: 10,
    left: 15,
    elevation: 6,
  },
  featuredabsolutetext: {
    textAlign: 'right',
    padding: 2,
    fontSize: 12,
    fontWeight: '400',
    marginRight: 5,
    color: 'snow',
  },
  offercontinerstyle: {
    height: 'auto',
    width: width * 0.7,
    marginRight: 10,
    borderRadius: 9,
  },
  offertextview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 2,
    marginTop: 6,
  },
  offertextstyle: {
    color: '#FF7381',
    textAlign: 'center',
    marginLeft: 8,
    fontSize: 13,
    fontWeight: '400',
  },
});
