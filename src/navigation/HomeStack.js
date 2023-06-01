import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBording from '../screens/OnBording/OnBording';
import SignIn from '../screens/SignIn/SignIn';
import SelectLanguageScreen from '../screens/SelectLanguageScreen/SelectLanguageScreen';
import MyDetails from '../screens/MyDetails/MyDetails';
import Dashboard from '../screens/Dashboard/Dashboard';
import ShopDetails from '../screens/ShopDetails/ShopDetails';
import ParticulerItem from '../screens/ParticulerItem/ParticulerItem';
import BasketScreen from '../screens/BasketScreen/BasketScreen';
import Checkout from '../screens/Checkout/Checkout';
import OrderDetails from '../screens/orderDetails/OrderDetails';
import MyAccountDetails from '../screens/myAccountDetails/MyAccountDetails';
import MyOrders from '../screens/myorders/MyOrders';
import { Screen } from 'react-native-screens';
import PaymentMethodsScreen from '../screens/paymentMethodsscreen/PaymentMethodsScreen';
import AddpaymetMethod from '../screens/addpaymentmethod/AddpaymetMethod';
import InviteFriends from '../screens/inviteFriends/InviteFriends';
import About from '../screens/about/About';
import Faqs from '../screens/faqs/Faqs';
import TermsandConditions from '../screens/tearmsandcondition/TermsandConditions';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBording" component={OnBording} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen
        name="SelectLanguageScreen"
        component={SelectLanguageScreen}
      />
      <Stack.Screen name="MyDetails" component={MyDetails} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name='MyAccountDetails' component={MyAccountDetails} />
      <Stack.Screen name="ShopDetails" component={ShopDetails} />
      <Stack.Screen name="ParticulerItem" component={ParticulerItem} />
      <Stack.Screen name="BasketScreen" component={BasketScreen} />
      <Stack.Screen name='Checkout' component={Checkout}/>
      <Stack.Screen name='OrderDetails' component={OrderDetails} />
      <Stack.Screen name='MyOrders' component={MyOrders} />
      <Stack.Screen name='PaymentMethodsScreen' component={PaymentMethodsScreen} />
      <Stack.Screen name='AddpaymetMethod' component={AddpaymetMethod} />
      <Stack.Screen name='InviteFriends' component={InviteFriends} />
      <Stack.Screen name='About' component={About} />
      <Stack.Screen name='Faqs' component={Faqs}/>
      <Stack.Screen name='TermsandConditions' component={TermsandConditions}/>
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
