import { View, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { style } from '../style/style';
import PagerView from 'react-native-pager-view';


const images = [
  require('../assets/images/0.jpg'),
  require('../assets/images/1.jpg'),
  require('../assets/images/2.jpg'),
  require('../assets/images/3.jpg'),
  require('../assets/images/4.jpg'),
  require('../assets/images/5.jpg'),
  require('../assets/images/6.jpg'),
  require('../assets/images/7.jpg'),
  require('../assets/images/8.jpg'),
  require('../assets/images/9.jpg'),
  require('../assets/images/10.jpg'),
  require('../assets/images/11.jpg'),
  require('../assets/images/12.jpg'),
  require('../assets/images/13.jpg'),
  require('../assets/images/14.jpg'),
  require('../assets/images/15.jpg'),
  require('../assets/images/16.jpg'),
  require('../assets/images/17.jpg'),
  require('../assets/images/18.jpg'),
  require('../assets/images/19.jpg'),
  require('../assets/images/20.jpg'),
  require('../assets/images/21.jpg'),
  require('../assets/images/22.jpg'),
  require('../assets/images/23.jpg'),
  require('../assets/images/24.jpg'),
  require('../assets/images/25.jpg'),
  require('../assets/images/26.jpg'),
  require('../assets/images/27.jpg'),
  require('../assets/images/28.jpg'),
];

const Home = ({ route }) => {
    const pagerRef = useRef(null);
    const initialPage = route.params?.initialPage || 0;

    useEffect(() => {
        if (pagerRef.current && initialPage) {
            pagerRef.current.setPage(initialPage);
        }
    }, [initialPage]);

    return (
        <View style={{ height: "100%" }}>
            <PagerView 
                ref={pagerRef}
                style={style.pagerView} 
                initialPage={initialPage}
                layoutDirection={"rtl"}
            >
                {images.map((imgSource, index) => (
                    <Image source={imgSource} style={style.image} key={index} />
                ))}
            </PagerView>
        </View>
    );
};
export default Home;