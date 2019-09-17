import React from 'react';
import { SafeAreaView, ScrollView, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ImageSlider from 'react-native-image-slider';
import Colors from '../constants/Colors';
import appStyles from '../styles/app-style';

export default function HeroImageCarousel(props) {
  const images = [
    {
      id: 1,
      url: 'https://placeimg.com/640/640/nature',
      title: 'Events this Weekend',
      caption: 'Trending in San Francisco'
    },
    {
      id: 2,
      url: 'https://placeimg.com/640/640/people',
      title: 'Events this Weekend',
      caption: 'Silent in Fragment'
    },
    {
      id: 3,
      url: 'https://placeimg.com/640/640/animals',
      title: 'Events this Weekend',
      caption: 'Falling in Los Angelos'
    },
    {
      id: 4,
      url: 'https://placeimg.com/640/640/beer',
      title: 'Events this Weekend',
      caption: 'Beer Camp in Taxes'
    },
    {
      id: 5,
      url: 'https://placeimg.com/640/640/car',
      title: 'Events this Weekend',
      caption: 'Beer Camp in Taxes'
    },
    {
      id: 6,
      url: 'https://placeimg.com/640/640/pool',
      title: 'Events this Weekend',
      caption: 'Beer Camp in Taxes'
    }
  ];
  
  return (
    <View style={styles.container}>
      <ImageSlider
        loopBothSides
        autoPlayWithInterval={3000}
        style={{height: Dimensions.get('window').width * 0.55}} 
        images={images}
        customSlide={({ index, item, style, width }) => (
        // It's important to put style here because it's got offset inside
        <View key={index} style={[style, styles.customSlide, appStyles.light_shadow]}>
          <Image source={{ uri: item.url }} style={styles.customImage} />
          <View style={[styles.captionContainer, {justifyContent: 'flex-end'}]}>
            <Text style={[appStyles.white, appStyles.font_bold, appStyles.font_xl]}>{item.title}</Text>
            <Text style={[appStyles.white, appStyles.font_lg]}>{item.caption}</Text>
          </View>
        </View>
        )}
        customButtons={(position, move) => (
          <View style={styles.buttons}>
            {images.map((image, index) => {
              return (
                <TouchableHighlight
                key={index}
                underlayColor="#ccc"
                onPress={() => move(index)}
                style={styles.button}
                >
                  {/* <Text style={position === index && styles.buttonSelected}>
                    {index + 1}
                  </Text> */}
                  <View style={position === index && styles.buttonSelected}></View>
                </TouchableHighlight>
              );
            })}
          </View>
        )} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  captionContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
  },
  locationButton: {
    position: 'absolute',
    top: 40,
    right: 10,
  },
  locationIcon: {
    width: 25,
    height: 25,
  },
  whiteLogo: {
    width: 45,
    height: 45,
  },
  buttons: {
    zIndex: 1,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.whiteColor,
  },
  button: {
    backgroundColor: Colors.lightGrayColor,
    margin: 3,
    width: 8,
    height: 8,
    borderRadius: 5,
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    opacity: 1,
    backgroundColor: Colors.tintColor,
  },
  customSlide: {
    backgroundColor: Colors.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingBottom: 0,
  },
  customImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});