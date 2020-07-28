/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  JobsScreen,
  LoadingScreen,
  MessageScreen,
  MyWorkScreen,
  ProfileScreen,
  SignInScreen,
  SignUpScreen,
} from '@screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();
import {Screen} from '@configs';
const TotalStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const JobsStack = createStackNavigator();
const MyWorkStack = createStackNavigator();
const MessageStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const AuthenStack = createStackNavigator();
const ScreenJob = () => {
  return (
    <JobsStack.Navigator headerMode={'none'}>
      <JobsStack.Screen name={Screen.JobsStack} component={JobsScreen} />
    </JobsStack.Navigator>
  );
};
const ScreenMyWork = () => {
  return (
    <MyWorkStack.Navigator headerMode={'none'}>
      <MyWorkStack.Screen name={Screen.MyWorkStack} component={MyWorkScreen} />
    </MyWorkStack.Navigator>
  );
};
const ScreenMessage = () => {
  return (
    <MessageStack.Navigator headerMode={'none'}>
      <MessageStack.Screen
        name={Screen.MessageStack}
        component={MessageScreen}
      />
    </MessageStack.Navigator>
  );
};
const ScreenProfile = () => {
  return (
    <ProfileStack.Navigator headerMode={'none'}>
      <ProfileStack.Screen
        name={Screen.ProfileStack}
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Jobs') {
            iconName = focused ? 'calendar' : 'calendar';
          } else if (route.name === 'My work') {
            iconName = focused ? 'carryout' : 'carryout';
          } else if (route.name === 'Message') {
            iconName = focused ? 'message1' : 'message1';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name={Screen.Jobs} component={ScreenJob} />
      <Tab.Screen name={Screen.Mywork} component={ScreenMyWork} />
      <Tab.Screen name={Screen.Message} component={ScreenMessage} />
      <Tab.Screen name={Screen.Profile} component={ScreenProfile} />
    </Tab.Navigator>
  );
};
const AuthenStacks = () => {
  return (
    <AuthenStack.Navigator headerMode={'none'} initialRouteName="SignIn">
      <AuthenStack.Screen name={Screen.SignIn} component={SignInScreen} />
      <AuthenStack.Screen name={Screen.SignUp} component={SignUpScreen} />
    </AuthenStack.Navigator>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <TotalStack.Navigator
          headerMode={'none'}
          initialRouteName={Screen.Loading}
          screenOptions={{gestureEnabled: false}}>
          <TotalStack.Screen name={Screen.Authen} component={AuthenStacks} />
          <TotalStack.Screen name={Screen.BottomTab} component={BottomTab} />
          <TotalStack.Screen name={Screen.Loading} component={LoadingScreen} />
        </TotalStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
