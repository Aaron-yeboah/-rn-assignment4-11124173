import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FB from '../assets/fb.png'
import Burger from '../assets/burger.png'
import Bing from '../assets/bing.png'

const data = [
    {name: 'Jr Executive', company: 'Burger King', location: 'Los Angeles, US', image: Burger, salary: '960,00/y'},
    {name: 'Product Manager', company: 'Beats', location: 'Florida, US', image: Bing, salary: '84,000/y'},
    {name: 'Product Manager', company: 'facebook', location: 'Florida,US', image: FB, salary: '86,000/y'},
]

const Popular = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10, marginHorizontal: 20, marginTop: 20}}>
      {
        data.map((item, index) => {
            return(
                <View key={index} style={{backgroundColor: 'white', borderRadius: 10, padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <Image source={item.image} style={{height: 60, width: 60}}/>
                        <View style={{}}>
                            <Text>{item.name}</Text>
                            <Text>{item.company}</Text>

                        </View>
                        
                    </View>
                    <View>
                        <Text>${item.salary}</Text>
                        <Text>{item.location}</Text>
                    </View>
                </View>
            )
        })
      }
    </View>
  )
}

export default Popular

const styles = StyleSheet.create({})