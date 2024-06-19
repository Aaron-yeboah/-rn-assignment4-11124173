import { StatusBar } from 'expo-status-bar';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Apple from '../assets/apple.png'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook.png'
import Home from './Home';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';

export default function App({navigation}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  return (
    <View >
      <SafeAreaView >
        <View>
          <View>
            <Text style={styles.head}>
              Jobizz
            </Text>
          </View>
          <View>
            <Text style={styles.message}>
              Welcome Back 👋 
            </Text>
          </View>
          <View>
            <Text style={styles.letter}>
              Let’s log in. Apply to jobs!
            </Text>
          </View>
          <View style={styles.input}>
            <TextInput placeholder='Name' style={{borderWidth: 1, height:50, borderRadius: 10, paddingHorizontal: 10}} value={name} onChangeText={setName}/>
            <TextInput placeholder='Email' style={{borderWidth: 1, height: 50, borderRadius: 10, paddingHorizontal: 10}} value={email} onChangeText={setEmail}/>
            <TouchableOpacity style={{backgroundColor: '#356899',height: 55}} onPress={() => navigation.navigate("Home", {name, email})}>
                <Text style={{textAlign: 'center', color: 'white', paddingVertical:20}}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 100,}}>
            <Text style={{textAlign: 'center'}}>Or continue with</Text>
          </View>
          <View style={styles.logos}>
            <Image source={Apple} style={{height:30, width:30}}/>
            <Image source={Google} style={{height:30, width:30}}/>
            <Image source={Facebook} style={{height:30, width:30}}/>
          </View>
          <View style={{marginHorizontal: 110, marginVertical: 100,}}> 
            <Text>Haven't an account <Text style={{color: 'blue'}}>Register</Text></Text>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  ); 
}  

const styles = StyleSheet.create({
  head: {
    color: '#356899',
    fontFamily: 'Poppins',
    fontSize: 22,
    marginHorizontal: 20,
    marginVertical: 50,
    
  },
  message: {
    color: ' #0D0D26',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: -40,
  },
  letter: {
    fontFamily: 'Poppins',
    color: '#0D0D26',
    marginHorizontal: 20,
  },
  input: {
    display: 'flex',
    gap: 20,
    flexDirection: 'column',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  logos: {
    display: 'flex',
    gap: 60,
    marginHorizontal: 100,
    alignContent: 'center',
    flexDirection: 'row',
  }
});
