import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Head from '../assets/avatar.png'
import Search from '../assets/search.png'
import Filter from '../assets/filter.png'
import Fb from '../assets/fb.png'
import Popular from './Popular'
import Google from '../assets/google.png'

const FeaturedData = [
  {id: 1, title: 'Software Developer', company: 'Facebook', salary: '180,00', backgroundColor: '#5386e4', image: Fb, location: 'Accra, Ghana'},
  {id: 2, title: 'Google', company: 'Google', salary: '160,00', backgroundColor: '#04284a', image: Google, location: 'Accra, Ghana'},
  {id: 3, title: 'Software Developer', company: 'Facebook', salary: '20,00', backgroundColor: 'gray', image: Fb, location: 'Accra, Ghana'},
]

const renderData = () => {
  return(
    <View style={{display: 'flex',flexDirection: 'row', gap: 10, marginHorizontal: 20}}>
      {
        FeaturedData.map(item => {
          return(
            <View key={item.id} style={{display: 'flex', flexDirection: 'column', padding: 20, backgroundColor: item.backgroundColor, borderRadius: 20, width: 340, height: 200, }}>
              <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, height: 80}}>
                <Image source={item.image} style={{height: 50, width: 50}}  />
                <View>
                  <Text style={{color: 'white', fontWeight:'bold'}}>{item.title}</Text>
                  <Text style={{color: 'white'}}>{item.company}</Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', paddingTop: 50}}>
                <Text style={{color: 'white'}}>{item.location}</Text>
                <Text style={{color: 'white'}}>${item.salary}</Text>
              </View>
            </View>
          )
        })
      }
    </View>
  )
}

const Home = ({route}) => {

  const  {name, email} = route.params
  return (
    <View>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.head}>
              <View style={{marginVertical: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>{name}</Text>
                <Text style={{fontSize: 20}}>{email}</Text>
              </View>
              <Image source={Head} style={{height: 50, width: 50}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 30}}>
              <View style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', borderWidth: 1, borderRadius: 15, padding: 10, borderColor: 'gray', height:50}}>
                <Image source={Search} style={{width: 35, height: 35}}/> 
                <TextInput placeholder='Search a job or position' style={{fontSize: 20, width: 250}} />
              </View>
              
              <Image source={Filter} style={{width: 50, height: 50}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 20}}>
              <Text style={{fontWeight: 'bold'}}>Featured Jobs</Text>
              <Text style={{color: 'gray',}}>See all</Text>
            </View>
            <FlatList
              data={FeaturedData.slice(0,1)}
              renderItem={renderData}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 60}}>
              <Text style={{fontWeight: 'bold'}}>Popular Jobs</Text>
              <Text style={{color: 'gray',}}>See all</Text>
            </View>
            <View>
              <Popular/>
            </View>
          </ScrollView>
        </SafeAreaView>
      
    </View>
  )
}
  

export default Home

const styles = StyleSheet.create({
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },

})