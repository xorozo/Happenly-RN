import React from 'react';
import { SafeAreaView, ScrollView, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ImageSlider from 'react-native-image-slider';
import Colors from '../constants/Colors';
import appStyles from '../styles/app-style';

export default function HeroImageSlider(props) {
  const images = [
    {
      id: 1,
      url: 'https://placeimg.com/640/640/nature',
      caption: 'Trending in San Francisco'
    },
    {
      id: 2,
      url: 'https://placeimg.com/640/640/people',
      caption: 'Silent in Fragment'
    },
    {
      id: 3,
      url: 'https://placeimg.com/640/640/animals',
      caption: 'Falling in Los Angelos'
    },
    {
      id: 4,
      url: 'https://placeimg.com/640/640/beer',
      caption: 'Beer Camp in Taxes'
    }
  ];
  
  return (
    <View style={styles.container}>
      <ImageSlider
        loopBothSides
        autoPlayWithInterval={3000}
        style={{height: 270}} 
        images={images}
        customSlide={({ index, item, style, width }) => (
        // It's important to put style here because it's got offset inside
        <View key={index} style={[style, styles.customSlide]}>
          <Image source={{ uri: item.url }} style={styles.customImage} />
          <View style={[styles.captionContainer, {justifyContent: 'flex-end'}]}>
            <Image 
              source={require('../../assets/images/icons/logo-white.png')} 
              style={styles.whiteLogo}
            />
            <Text style={[appStyles.white, appStyles.font_bold, appStyles.font_xl]}>{item.caption}</Text>
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
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 70,
  },
  whiteLogo: {
    width: 45,
    height: 45,
  },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -70,
    marginBottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: Colors.whiteColor,
    margin: 3,
    width: 6,
    height: 6,
    borderRadius: 5,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    opacity: 1,
    backgroundColor: Colors.pinkColor,
  },
  customSlide: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: '100%',
    height: '100%',
  },
});