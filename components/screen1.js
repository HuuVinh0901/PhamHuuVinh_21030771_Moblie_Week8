import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'

const category = [
    { name: 'Resort', image: 'resort.png' },
    { name: 'Homestay', image: 'homestay.png' },
    { name: 'Hotel', image: 'hotel.png' },
    { name: 'Lodge', image: 'lodge.png' },
    { name: 'Villa', image: 'villa.png' },
    { name: 'Apartment', image: 'apartment.png' },
    { name: 'Hostel', image: 'hostel.png' },
    { name: 'See all', image: 'seeall.png' },
]
const location = [
    { image: 'photo1.png' },
    { image: 'photo2.png' },
    { image: 'photo3.png' },
    { image: 'photo4.png' },
    { image: 'photo5.png' },
    { image: 'photo1.png' },
]
const screen1 = () => {
    return (
        <ScrollView>

            <View style={{ backgroundColor: '#5e45c4' }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 25, marginVertical: 20 }}>
                    <Image style={{ height: 30, width: 30, borderRadius: 10 }} source={require('../assets/data/logoicon.png')} />
                    <View style={{ flexDirection: 'row', marginLeft: 20, backgroundColor: 'white', borderRadius: 9 }}>
                        <TextInput style={{ width: 245, marginLeft: 10 }} placeholder='Search here..'></TextInput>
                        <Image source={require('../assets/data/findicon.png')} />
                    </View>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 25, marginVertical: 20 }}>
                        <Image style={{ height: 40, width: 40, borderRadius: 10 }} source={require('../assets/data/personicon.png')} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Welcome!</Text>
                            <Text style={{ width: 250, color: 'white' }}>Donna Stroupe</Text>
                        </View>
                        <View>
                            <Image style={{ height: 30, width: 30 }} source={require('../assets/data/ringicon.png')} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ height: 400 }}>
                <View style={{ flexDirection: 'row',marginHorizontal:25,marginVertical:10 }}>
                    <View style={{width:'50%'}}><Text style={{fontSize:20}}>Category</Text></View>

                    <View  style={{width:'50%',alignItems:'flex-end'}}><Image style={{ height: 30, width: 30 }} source={require('../assets/data/3gach.png')} /></View>
                </View>
            </View>
            <View style={{ backgroundColor: '#5e45c4' }}>
                <View style={{ flexDirection: 'row', gap: 40, marginVertical: 30, marginHorizontal: 50 }}>
                    <Image style={{ height: 40, width: 40 }} source={require('../assets/data/homeicon.png')} />
                    <Image style={{ height: 40, width: 40 }} source={require('../assets/data/exploreicon.png')} />
                    <Image style={{ height: 40, width: 40 }} source={require('../assets/data/searchicon.png')} />
                    <Image style={{ height: 40, width: 40 }} source={require('../assets/data/profileicon.png')} />
                </View>
            </View>

        </ScrollView>
    )
}

export default screen1