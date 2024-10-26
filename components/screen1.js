import { View, Text,Image,TextInput, ScrollView } from 'react-native'
import React from 'react'

const category =[
    {name:'Resort',image:'resort.png'},
    {name:'Homestay',image:'homestay.png'},
    {name:'Hotel',image:'hotel.png'},
    {name:'Lodge',image:'lodge.png'},
    {name:'Villa',image:'villa.png'},
    {name:'Apartment',image:'apartment.png'},
    {name:'Hostel',image:'hostel.png'},
    {name:'See all',image:'seeall.png'},
]
const location=[
    {image:'photo1.png'},
    {image:'photo2.png'},
    {image:'photo3.png'},
    {image:'photo4.png'},
    {image:'photo5.png'},
    {image:'photo1.png'},
]
const screen1 = () => {
    return (
        <ScrollView>
            <View>
                <View style={{flexDirection:'row',marginHorizontal:25,marginVertical:20}}>
                    <Image style={{height:30,width:30}} source={require('../assets/data/logoicon.png')}/>
                    <View style={{flexDirection:'row',marginLeft:20,backgroundColor:'white',borderRadius:10}}>
                        <TextInput style={{width:250}} placeholder='Search here..'></TextInput>
                        <Image source={require('../assets/data/findicon.png')}/>
                    </View>
                </View>
            </View>
            <View>
            <View style={{flexDirection:'row',marginHorizontal:25,marginVertical:20}}>
                    <Image style={{height:30,width:30,borderRadius:10}} source={require('../assets/data/personicon.png')}/>
                    <View style={{flexDirection:'column',marginLeft:20}}>
                        <Text style={{fontWeight:'bold'}}>Welcome!</Text>
                        <Text style={{width:250}}>Donna Stroupe</Text>
                    </View>
                    <View>
                    <Image style={{height:30,width:30}} source={require('../assets/data/ringicon.png')}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default screen1