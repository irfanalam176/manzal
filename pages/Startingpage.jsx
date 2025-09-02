import { View, Text, TouchableOpacity, Modal, TextInput, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { style } from '../style/style'
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const Startingpage = ({navigation}) => {
    const [searchType, setSearchType] = useState(null); // 'page' or 'surah'
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);

    // Sample surah data - you'll need to expand this with all surahs and their page numbers
    const surahs = [
        { name: 'Al-Fatiha', page: 1 },
        { name: 'Al-Baqarah', page: 2 },
        { name: 'As-Saffaat', page: 13 },
        { name: 'Al-Jinn', page: 18 },
        { name: 'Al-Kafirun', page: 19 },
        { name: 'Al-Ikhlas', page: 20 },
        { name: 'Al-Falaq', page: 20 },
        { name: 'An-Nas', page: 21 },
        { name: 'Ayat-e-Shifa', page: 22 },
        { name: 'Ayat-e-Munjyat', page: 24 },
        // Add all 114 surahs with their starting page numbers
    ];

    const navigateToPage = (pageNumber) => {
        navigation.navigate("home", { initialPage: pageNumber });
        setShowModal(false);
    };

    const filteredSurahs = surahs.filter(surah =>
        surah.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredPages = Array.from({ length: 29 }, (_, i) => i) // Creates array [0,1,2,...,28]
    .filter(page => 
        page.toString().includes(searchQuery)
    );

    return (
        <View style={style.wrapper}>
              <View style={style.bannerAdd}>
                <BannerAd unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
            </View>
            <Text style={style.mainHeading}>منزل اور دعایں</Text>
            
            <View style={style.cards}>


                <TouchableOpacity style={style.card} onPress={()=>navigation.navigate("duas")}>
                    <Text style={style.cardText}>دُعا</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.card} onPress={() => navigation.navigate("home")}>
                    <Text style={style.cardText}>منزِل</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.card} onPress={() => {
                    setSearchType('page');
                    setShowModal(true);
                }}>
                    <Text style={style.cardText}>سرچ</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.card} onPress={() => {
                    setSearchType('surah');
                    setShowModal(true);
                }}>
                    <Text style={style.cardText}>سورہ سرچ</Text>
                </TouchableOpacity>
            </View>

            {/* Search Modal */}
            <Modal
                visible={showModal}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowModal(false)}
            >
                <View style={{ 
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: 'rgba(0,0,0,0.5)' 
                }}>
                    <View style={{ 
                        backgroundColor: 'white', 
                        padding: 20, 
                        borderRadius: 10,
                        width: '80%' ,
                        height:500
                    }}>
                        <TextInput
                            style={{ 
                                borderWidth: 1, 
                                borderColor: '#ccc', 
                                padding: 10, 
                                marginBottom: 10 
                            }}
                            placeholder={`Search by ${searchType}`}
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                        
                        <FlatList
                        scrollEnabled
                            data={searchType === 'page' ? filteredPages : filteredSurahs}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <Pressable
                                    style={{ padding: 10 }}
                                    onPress={() => {
                                        if (searchType === 'page') {
                                            navigateToPage(item);
                                        } else {
                                            navigateToPage(item.page);
                                        }
                                    }}
                                >
                                    <Text>
                                        {searchType === 'page' ? `Page ${item}` : item.name}
                                    </Text>
                                </Pressable>
                            )}
                        />
                        
                        <TouchableOpacity
                            style={{ marginTop: 10 }}
                            onPress={() => setShowModal(false)}
                        >
                            <Text style={style.mainBtn}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
          
        </View>
    )
}

export default Startingpage