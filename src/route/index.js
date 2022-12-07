import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import ChatScreen from '../screens/chatScreen';
import AuthScreen from '../screens/authScreen';

const Stack = createNativeStackNavigator();

function App() {
  const userStatus = useSelector(state => state.user.login);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={!userStatus ? 'Login' : 'ChatScreen'}>
        <Stack.Screen name="Login" component={AuthScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
