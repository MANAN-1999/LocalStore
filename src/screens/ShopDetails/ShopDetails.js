import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  MostPopulerItems,
  VagetableItem,
  populerCategoryes,
  yourRecentOrder,
} from '../../assets/Data/dummydata';

const {width, height} = Dimensions.get('window');
const ShopDetails = () => {
  const route = useRoute();
  const {item} = route.params;
  const navigation = useNavigation();

  const RecentOrder = ({item}) => {
    return (
      <View
        style={{
          height: 80,
          width: 157,
          borderRadius: 14,
          elevation: 10,
          backgroundColor: 'snow',
          marginHorizontal: 10,
          padding: 10,
        }}>
        <View
          style={{
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <View>
            <Text style={{fontSize: 12, fontWeight: '400', color: 'black'}}>
              {item.productname}
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: 'black'}}>
              {item.productitem}
            </Text>
          </View>
          <Text style={{fontSize: 12, fontWeight: '400', color: 'black'}}>
            {item.price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '95%',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 9, fontWeight: '400'}}>{item.date}</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={item.reorderimg}
              style={{height: 12, width: 12, marginRight: 4}}
            />
            <Text style={{fontSize: 9, fontWeight: '400', color: '#01B4BC'}}>
              {item.reorder}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // Categorires

  const categoiresitem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          height: 24,
          width: 98,
          backgroundColor: 'snow',
          borderRadius: 5,
          elevation: 3,
          alignItems: 'center',
          alignSelf: 'center',
          borderBottomWidth: 3,
          borderRightWidth: 3,
          borderBottomColor: '#FA5457',
          borderRightColor: '#FA5457',
          marginLeft: 20,
          shadowRadius: 9,
        }}>
        <Text style={{textAlign: 'center', color: '#FA5457'}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  // MostPopuler

  const Mostpopulerlist = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          height: 108,
          flexDirection: 'row',
          marginVertical: 12,
          backgroundColor: 'snow',
          elevation: 4,
          borderRadius: 14,
          justifyContent: 'center',
          alignItems: 'center',
          width: '98%',
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('ParticulerItem', {item: item})}>
        <View style={{width: '70%', marginLeft: 12}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            {item.title}
          </Text>
          <Text>{item.details}</Text>
          <Text>₹ {item.price}</Text>
        </View>
        <Image
          source={item.image}
          style={{height: 80, width: 80, borderRadius: 10}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'snow'}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
        <Image
          source={item.image}
          style={{width: '100%', height: height * 0.35, resizeMode: 'stretch'}}
        />
        <View activeOpacity={0.7} style={styles.hedercontiner}>
          <TouchableOpacity
            style={styles.hederstyle}
            onPress={() => navigation.goBack()}>
            <Ionicons name={'chevron-back-sharp'} size={30} color={'#FA5457'} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                height: 40,
                width: 40,
                backgroundColor: 'snow',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name={'share-outline'} size={25} color={'#FA5457'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                lheight: 40,
                width: 40,
                backgroundColor: 'snow',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 20,
              }}>
              <Ionicons name={'search-sharp'} size={25} color={'#FA5457'} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main View */}

        <View
          style={{
            height: 'auto',
            backgroundColor: 'snow',
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            top: -60,
          }}>
          <View style={{width: '90%', marginTop: 20, alignSelf: 'center'}}>
            <Text style={{color: 'black', fontSize: 24, fontWeight: '500'}}>
              {item.name}
            </Text>
            <View style={styles.ratingcontiner}>
              <View style={styles.ratigiconstyle}>
                <Ionicons name={'md-star'} color={'#01B4BC'} size={12} />
              </View>
              <Text style={styles.ratingtextstyle}>
                {item.rating}{' '}
                <Text style={styles.shopdetalstext}>
                  (50+) {''} * Groceries * Fruits
                </Text>
              </Text>
            </View>

            {/* Km Section */}

            <View style={styles.shopdetailcotiner}>
              <View style={{flexDirection: 'row', marginLeft: 18}}>
                <Text style={styles.shopdetalstext}>{item.awaykm}</Text>
                <Text style={[styles.shopdetalstext, {marginLeft: 10}]}>
                  Laxmi Road Kothrud
                </Text>
              </View>
              <Text style={[styles.shopdetalstext, {color: '#FA5457'}]}>
                View on Map
              </Text>
            </View>

            {/* Descripction */}
            <Text style={[styles.shopdetalstext, {marginTop: 12}]}>
              {item.shopdetail}
            </Text>

            {/* Restarunt info Button */}
            <View style={styles.rasturnetviewcontiner}>
              <TouchableOpacity style={styles.rasturentinfobtn}>
                <View style={styles.rasturentextview}>
                  <Text style={styles.rasturantext}>Delivery</Text>
                  <Text style={styles.rasturantext}>45 - 65 min</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.rasturentinfobtn, {backgroundColor: '#01B4BC'}]}>
                <View style={styles.rasturentextview}>
                  <Text style={styles.rasturantext}>Delivery</Text>
                  <Text style={styles.rasturantext}>45 - 65 min</Text>
                </View>
              </TouchableOpacity>
            </View>
            {/* Recent Container  */}
            <View style={styles.recentordercontiner}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#01696E',
                  marginBottom: 8,
                }}>
                Your recent Orders
              </Text>
              <Ionicons name={'chevron-forward'} size={25} color={'#227D81'} />
            </View>

            <View style={{height: 100, marginTop: 10}}>
              <FlatList
                data={yourRecentOrder}
                renderItem={RecentOrder}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={{backgroundColor: '#ffcccc', height: 45}}>
            <FlatList
              data={populerCategoryes}
              renderItem={categoiresitem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <View style={styles.recentordercontiner}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#01696E',
                  marginBottom: 8,
                }}>
                Most Popular
              </Text>
              <Ionicons name={'chevron-forward'} size={25} color={'#227D81'} />
            </View>
            <FlatList data={MostPopulerItems} renderItem={Mostpopulerlist} />
          </View>

          <View style={{width: '90%', alignSelf: 'center'}}>
            <View style={styles.recentordercontiner}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#01696E',
                  marginBottom: 8,
                }}>
                Vegetables
              </Text>
              <Ionicons name={'chevron-forward'} size={25} color={'#227D81'} />
            </View>
            <Text style={{fontSize: 11, fontWeight: '400', width: '95%'}}>
              Vegetables are parts of plants that are consumed by humans or
              other animals as food.
            </Text>
            <FlatList data={VagetableItem} renderItem={Mostpopulerlist} />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          height: 50,
          width: '100%',
          bottom: 30,
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={{
            height: 60,
            width: '95%',
            alignSelf: 'center',
            borderRadius: 50,
            backgroundColor: '#FA5457',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('BasketScreen',{item: item})}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 38,
                width: 38,
                borderRadius: 19,
                backgroundColor: '#C4C4C4',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 18, fontWeight: '600', color: 'snow'}}>
                10
              </Text>
            </View>
            <Text style={{fontSize: 16, fontWeight: '600', color: 'snow'}}>
              View Basket
            </Text>
            <Text style={{fontSize: 16, fontWeight: '700', color: 'snow'}}>
              {item.price}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    
    </SafeAreaView>
  );
};

export default ShopDetails;

const styles = StyleSheet.create({
  hederstyle: {
    height: 40,
    width: 40,
    backgroundColor: 'snow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  hedercontiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    alignSelf: 'center',
    width: '90%',
    marginTop: 50,
  },
  ratingcontiner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    width: '80%',
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
  shopdetalstext: {
    fontSize: 13,
    fontWeight: '400',
    color: '#A3A3A3',
  },
  shopdetailcotiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    alignItems: 'center',
  },
  rasturentinfobtn: {
    height: 48,
    width: 160,
    borderRadius: 23,
    elevation: 6,
    backgroundColor: '#FA5457',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rasturantext: {
    fontSize: 11,
    fontWeight: '400',
    color: 'snow',
  },
  rasturentextview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'space-between',
  },
  rasturnetviewcontiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  recentordercontiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
