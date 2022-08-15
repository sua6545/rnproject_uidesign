import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet, Button,  View, Text, Image } from 'react-native';
import MyTradeScreen from './MyTradeScreen';
import MyPostScreen from './MyPostScreen';
import PropTypes from 'prop-types';
import girl from "./girl.png";


function Separator(){
    return <View style={styles.separator} />;
}
const MyProfileScreen = ({ navigation, route }) => {
  return (
      <View style={styles.main}>
          <Text style={styles.subHeader}>마이 페이지</Text>
          <Image
            style={{ width: 120, height: 120,}} source={girl} />
            <Separator/>
              <Button
                  title="나의 거래 현황"
                  color="#f8bbd0"
                  marginBottom="20"
                  onPress={() => navigation.navigate('MyTrade')}
              />
              <Separator/>
              <Button
                  title="내가 쓴 게시물"
                  color="#f8bbd0"
                  onPress={() => navigation.navigate('MyPost')}
              />
              <Separator/>
              <Button
                  title="회원 정보 수정"
                  color="#f8bbd0"
                  onPress={() => navigation.navigate('MyPost')}
              />
              <Separator/>
              <Button
                  title="회원 탈퇴하기"
                  color="#f8bbd0"
                  onPress={() => navigation.navigate('MyPost')}
              />
              <Separator/>
      </View>
  );
};

const Stack = createNativeStackNavigator();

function MyProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyProfile" component={MyProfileScreen} />
      <Stack.Screen
        name="MyTrade" component={MyTradeScreen} options={{title: '거래 현황'}}
      />
      <Stack.Screen
        name="MyPost" component={MyPostScreen} options={{title: '내가 쓴 게시물'}}
      />
    </Stack.Navigator>
  );
}

export default MyProfileStack;


const styles = StyleSheet.create({
    main:{
        flex: 1, 
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    subHeader:{
        fontSize: 30,
        paddingBottom: 20,
        
    },
    separator:{
        marginVertical:11,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button1: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
    textButton: {
      flex: 1,
      fontSize: 18,
      textAlign: 'center',
      backgroundColor: 'transparent',
    },
    spinner: {
      alignSelf: 'center',
    },
    opacity: {
      opacity: 0.5,
    },
  });