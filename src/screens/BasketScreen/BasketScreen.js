import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CHeder from '../../component/CHeder';
import {useNavigation, useRoute} from '@react-navigation/native';
import {basketdata, recommendation} from '../../assets/Data/dummydata';



const BasketScreen = () => {
  const route = useRoute();
  const {item} = route.params;

  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');
  
  const [count, setCount] = useState(0);
  const [totalcount, setTotalCount] = useState(item.price);
  const [countgst, setCountGst] = useState(item.price);
  const [totalamount, setTotalAmount] = useState(item.price);

  useEffect(() => {
    setCountGst((item.price * 18) / 100);
  }, [countgst]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setTotalAmount(countgst + count + item.price);
  }, [totalamount]);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    setTotalCount(Number(item?.price) + count);
  }, [count]);

  useEffect;
  const basketitem = ({item}) => {
    return (
      <View style={styles.ordersmmarycantinoermain}>
        <Text>{item.quantityno}</Text>
        <View>
          <Text>{item.productname}</Text>
          <Text>{item.waight}</Text>
        </View>
        <Text>Rs {item.price}</Text>
      </View>
    );
  };

  const recommendationitemlist = ({item}) => {
    return (
      <View style={styles.recommendateContiner}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: '400', fontSize: 12, color: 'black'}}>
            {item.productname}
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
            Rs {item.price}
          </Text>
        </View>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 10,
            color: 'black',
            opacity: 0.5,
          }}>
          {' '}
          *{item.productype}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: '#01B4BC',
              fontSize: 12,
              fontWeight: '400',
              marginTop: 10,
            }}>
            + Add now
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
   
    <SafeAreaView style={styles.maincantionr}>
      <CHeder title={'Basket'} showButton={false} />
      <ScrollView>
        <View style={styles.continer}>
          <Text style={styles.shopname}>{item.name}</Text>

          <View style={styles.deliverytimecontiner}>
            <TouchableOpacity
              style={styles.deliverybtn}
              onPress={() => navigation.navigate('', {item: item})}>
              <View style={styles.deleveryminstyle}>
                <TouchableOpacity>
                  <Text style={styles.ordermintext}>Delivery</Text>
                </TouchableOpacity>
                <Text style={styles.ordermintext}>45 - 60 min</Text>
                <TouchableOpacity>
                  <Text style={styles.ordermintext}>Change</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.ordersmmarycantinoer}>
            <Text style={styles.ordernotestxt}>Order Notes</Text>
          </View>
          <Text style={styles.ordersummarytxt}>Order Summary</Text>
          <View style={{height: '30%'}}>
            <FlatList
              data={basketdata}
              renderItem={basketitem}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={styles.ridertipcantinor}>
            <Text style={styles.ridertiptxt}>Rider Tip</Text>
            <View style={styles.counting}>
              <TouchableOpacity
                onPress={handleDecrement}
                style={{marginRight: 10}}>
                <Image source={require('../../assets/images/btnmines.png')} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleIncrement}
                style={{marginRight: 10}}>
                <Image source={require('../../assets/images/btnpluse.png')} />
              </TouchableOpacity>
              <Text style={styles.countertext}>Rs {count.toFixed(2)}</Text>
            </View>
          </View>
          <View style={[styles.totalcontiner, {marginTop: 8}]}>
            <Text style={[styles.countertext, {fontWeight: '800'}]}>Total</Text>
            <Text style={[styles.countertext, {fontWeight: '800'}]}>
              Rs {totalcount.toFixed(2)}
            </Text>
          </View>
          <View style={[styles.deliverytimecontiner, {marginTop: 20}]}>
            <TouchableOpacity
              style={styles.deliverybtn}
              onPress={() => navigation.navigate('Checkout', {item: item})}>
              <Text style={styles.checkoutxt}>Go to Checkout</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 120}}>
            <FlatList
              data={recommendation}
              renderItem={recommendationitemlist}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <TouchableOpacity style={styles.addvoucher}>
            <Text style={{color: '#FA5457', fontSize: 15, fontWeight: '600'}}>
              Add Voucher Code
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={{textAlign: 'center', color: 'snow', marginTop: 20}}>
          Payment
        </Text>
        <View style={styles.paymentcard}>
          <View style={styles.paymentviewstyle}>
            <Text style={styles.paymenttext}>Delivery Fee</Text>
            <Text style={styles.paymenttext}>Free</Text>
          </View>
          <View style={styles.paymentviewstyle}>
            <Text style={styles.paymenttext}>Total</Text>
            <Text style={styles.paymenttext}> Rs {item.price.toFixed(2)}</Text>
          </View>

          <View style={styles.paymentviewstyle}>
            <Text style={styles.paymenttext}>GST</Text>
            <Text style={styles.paymenttext}> Rs {countgst.toFixed(2)}</Text>
          </View>
          <View style={styles.paymentviewstyle}>
            <Text style={styles.paymenttext}>Rider Tip</Text>
            <Text style={styles.paymenttext}> Rs {count.toFixed(2)}</Text>
          </View>
          <View
            style={[
              styles.paymentviewstyle,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderTopWidth: 0.5,
              },
            ]}>
            <Text style={[styles.paymenttext, {opacity: 1}]}>Total Amount</Text>
            <Text style={[styles.paymenttext, {opacity: 1}]}>
              Rs {totalamount.toFixed(2)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
   
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  ordermintext: {
    fontSize: 11,
    fontWeight: '400',
    color: 'snow',
  },
  ordersmmarycantinoermain: {
    height: 60,
    backgroundColor: 'snow',
    elevation: 6,
    width: '85%',
    alignSelf: 'center',
    padding: 10,
    // justifyContent: 'center',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommendateContiner: {
    height: 70,
    width: 157,
    padding: 10,
    marginLeft: 20,
    marginTop: 40,
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: 'snow',
    alignSelf: 'center',
    elevation: 6,
  },
  maincantionr: {
    flex: 1,
    backgroundColor: '#FA5457',
  },
  continer: {
    height: 'auto',
    backgroundColor: 'snow',
    borderBottomRightRadius: 48,
    borderBottomLeftRadius: 48,
  },
  shopname: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 12,
    fontWeight: 400,
    opacity: 0.6,
  },
  deliverytimecontiner: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  paymenttext: {
    fontSize: 18,
    fontWeight: 400,
    color: 'black',
    opacity: 0.5,
  },
  paymentviewstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    alignItems: 'center',
  },
  deliverybtn: {
    height: 48,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: '#FA5457',
    justifyContent: 'center',
  },
  deleveryminstyle: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addvoucher: {
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'snow',
    elevation: 5,
    height: 40,
    justifyContent: 'center',
    borderRadius: 14,
    padding: 10,
  },
  ordersmmarycantinoer: {
    width: '90%',
    height: 40,
    alignSelf: 'center',
    borderRadius: 14,
    backgroundColor: 'snow',
    elevation: 5,
    justifyContent: 'center',
    marginTop: 15,
  },
  ordernotestxt: {
    marginLeft: 30,
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  ordersummarytxt: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20,
    marginHorizontal: 40,
    marginBottom: 10,
  },
  ridertipcantinor: {
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  ridertiptxt: {
    width: '60%',
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  totalcontiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    alignSelf: 'center',
  },
  counting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countertext: {color: 'black', fontSize: 18, fontWeight: 400},
  checkoutxt: {
    textAlign: 'center',
    color: 'snow',
    fontSize: 16,
    fontWeight: '600',
  },
  paymentcard: {
    height: 'auto',
    width: 320,
    alignSelf: 'center',
    backgroundColor: 'snow',
    borderRadius: 14,
    elevation: 5,
    marginTop: 10,
    padding: 10,
  },
});
