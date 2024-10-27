import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-web'

const category = [
    { id: 1, name: 'Resort', image: require('../assets/data/resort.png') },
    { id: 2, name: 'Homestay', image: require('../assets/data/homestay.png') },
    { id: 3, name: 'Hotel', image: require('../assets/data/hotel.png') },
    { id: 4, name: 'Lodge', image: require('../assets/data/lodge.png') },
    { id: 5, name: 'Villa', image: require('../assets/data/villa.png') },
    { id: 6, name: 'Apartment', image: require('../assets/data/apartment.png') },
    { id: 7, name: 'Hostel', image: require('../assets/data/hostel.png') },
    { id: 8, name: 'See all', image: require('../assets/data/seeall.png') },
]
const location = [
    { id: 1, image: require('../assets/data/photo1.png') },
    { id: 2, image: require('../assets/data/photo2.png') },
    { id: 3, image: require('../assets/data/photo3.png') },
    { id: 4, image: require('../assets/data/photo4.png') },
    { id: 5, image: require('../assets/data/photo5.png') },
    { id: 6, image: require('../assets/data/photo1.png') },
]

const Screen1 = () => {
    const imageMap = {
        "resort.png": require('../assets/data/resort.png'),
        "homestay.png": require('../assets/data/homestay.png'),
        "hotel.png": require('../assets/data/hotel.png'),
        "lodge.png": require('../assets/data/lodge.png'),
        "villa.png": require('../assets/data/villa.png'),
        "apartment.png": require('../assets/data/apartment.png'),
        "hostel.png": require('../assets/data/hostel.png'),
        "seeall.png": require('../assets/data/seeall.png')
    }
    const [cate, setCate] = useState()
    const [loca, setLoca] = useState()
    useEffect(() => {
        fetchDataCate();
        fetchDataLocation();
    }, [])
    const fetchDataCate = async () => {
        try {
            const respone = await fetch('https://671a7948acf9aa94f6aac459.mockapi.io/api/ThiGK/category')
            const jsonDataCate = await respone.json()
            setCate(jsonDataCate)
        } catch (error) {
            console.error('Lỗi', error)
        }
    }
    const fetchDataLocation = async () => {
        try {
            const respone = await fetch('https://671a7948acf9aa94f6aac459.mockapi.io/api/ThiGK/location')
            const jsonDataLoca = await respone.json()
            setLoca(jsonDataLoca)
        } catch (error) {
            console.error('Lỗi', error)
        }
    }
    const renderCate = ({ item }) => {
        return (
            <View style={{ gap: 10, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity><Image source={imageMap[item.image]} /></TouchableOpacity>
                <Text style={{ alignItems: 'center', justifyContent: 'center' }}>{item.name}</Text>
            </View>
        )
    };
    const renderLoca = ({ item }) => {
        return (
            <View style={{ gap: 10, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity><Image source={imageMap[item.image]} /></TouchableOpacity>
                <Text style={{ alignItems: 'center', justifyContent: 'center' }}>{item.name}</Text>
            </View>
        )
    };
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
            <ScrollView style={{ height: 600 }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 25, marginVertical: 10 }}>
                    <View style={{ width: '50%' }}><Text style={{ fontSize: 20 }}>Category</Text></View>

                    <View style={{ width: '50%', alignItems: 'flex-end' }}><Image style={{ height: 30, width: 30 }} source={require('../assets/data/3gach.png')} /></View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 25, gap: 10 }}>
                    {category.slice(0, 4).map((item) => (
                        <View style={{ gap: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity><Image source={item.image} /></TouchableOpacity>
                            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>{item.name}</Text>
                        </View>
                    ))}

                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 25, gap: 10, marginTop: 10 }}>
                    {category.slice(4, 8).map((item) => (
                        <View style={{ gap: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity><Image source={item.image} /></TouchableOpacity>
                            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>{item.name}</Text>
                        </View>
                    ))}

                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: 25, marginVertical: 10 }}>
                    <View style={{ width: '70%' }}><Text style={{ fontSize: 20 }}>Popular destination</Text></View>

                    <View style={{ width: '30%', alignItems: 'flex-end' }}><Image style={{ height: 30, width: 30 }} source={require('../assets/data/3gach.png')} /></View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 25, gap: 10 }}>
                    {location.slice(0, 3).map((item) => (
                        <View style={{ gap: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity><Image style={{ width: 100, height: 80, borderRadius: 10, marginLeft: 5 }} source={item.image} /></TouchableOpacity>
                            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>{item.name}</Text>
                        </View>
                    ))}

                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 25, marginVertical: 10 }}>
                    <View style={{ width: '70%' }}><Text style={{ fontSize: 20 }}>Recommended</Text></View>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 25, gap: 10 }}>
                    {location.slice(3, 5).map((item) => (
                        <View style={{ gap: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity><Image style={{ width: 160, height: 140, borderRadius: 10, marginLeft: 5 }} source={item.image} /></TouchableOpacity>
                            <Text style={{ alignItems: 'center', justifyContent: 'center' }}>{item.name}</Text>
                        </View>
                    ))}

                </View>






            </ScrollView>
            <View style={{ backgroundColor: '#5e45c4' }}>
                <View style={{ flexDirection: 'row', gap: 40, marginVertical: 30, marginHorizontal: 50 }}>
                    <Image style={{ height: 40, width: 40 }} source={require('../assets/data/homeicon.png')} />
                    <Image style={{ height: 40, width: 40 }} source={require('../assets/data/exploreicon.png')} />
                    <Image style={{ height: 40, width: 40 }} source={require('../assets/data/searchicon.png')} />
                    <Image style={{ height: 40, width: 40 }} source={require('../assets/data/profileicon.png')} />
                </View>
            </View>
            <FlatList data={cate} keyExtractor={(item) => item.id.toString()}
                renderItem={renderCate}
            >

            </FlatList>
        </ScrollView >


    )
}

export default Screen1