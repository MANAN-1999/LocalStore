import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CHeder from '../../component/CHeder';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { basketdata } from '../../assets/Data/dummydata';

const OrderDetails = () => {



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
  return (
        <ScrollView>
    <View style={styles.maincontainer}>

       
      <CHeder
        title={'Order Details'}
        showButton={true}
        buttonText={'help'}
        onpress={() => navigation.navigate('')}
      />
      {/* <ScrollView> */}
        <View style={styles.continer}>
      <View style={[styles.ordernumbercontainer, {marginTop: 10}]}>
        <View style={{width: '24%'}} />
        <View style={{width: '45%'}}>
          <Text style={styles.ordertxt}>Order Number</Text>
          <Text style={styles.itemdetailtxt}>123</Text>
        </View>
        <TouchableOpacity style={styles.infobutton}>
          <View
            style={[
              styles.ordernumbercontainer,
              {justifyContent: 'space-evenly'},
            ]}>
            <Text style={{fontSize: 11, fontWeight: '400', color: 'snow'}}>
              Info
            </Text>
            <Ionicons name={'call-outline'} size={10} color={'snow'} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text >Delivered To</Text>
        <Text  style={[styles.itemdetailtxt,{width:'70%'}]}>
          Sr. no 34/1, Vidyanagar, Maharashtra, Pune, 411032
        </Text>
        <Text style={styles.ordertxt}>
        Delivered From
        </Text>
        <Text  style={styles.itemdetailtxt}>Laxmi Enterprises</Text>
        <Text style={styles.ordertxt}>
        Status
        </Text>
        <Text  style={styles.itemdetailtxt}>
        Delivered 18 June 2020
        </Text>
      <Text style={{textAlign:'center',fontSize:14,fontWeight:'700',color:'black',marginTop:15}}>Items</Text>
      <View style={{height: '65%'}}>
            <FlatList
              data={basketdata}
              renderItem={basketitem}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}
            />
            </View>
      </View>
    </View>
    {/* </ScrollView> */}
   <View style={{height:200,width:200,backgroundColor:'blue'}}>

    <Text>payment</Text>
   </View>
    </View>
    </ScrollView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({

    maincontainer:{
        flex: 1,
        backgroundColor: '#FA5457',
        // paddingBottom:200
    },
  ordernumbercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ordertxt: {
    textAlign: 'center',
    marginTop: 8,
    fontSize:12,
    fontWeight:'400',
    color:'black',
    opacity:0.5
  },
  itemdetailtxt:{
textAlign:'center',
fontSize:18,
fontWeight:'600',
color:'black',
opacity:0.7

  },
  infobutton: {
    height: 25,
    width: 85,
    backgroundColor: '#01B4BC',
    borderRadius: 23,
    justifyContent: 'center',
    marginRight: 20,
  },
  continer: {
    height: '70%',
    backgroundColor: 'snow',
    borderBottomRightRadius: 48,
    borderBottomLeftRadius: 48,
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
});
