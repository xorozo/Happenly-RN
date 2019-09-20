import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const FavoriteIcon = require('../../assets/images/icons/heart-white-o-pink.png');
const UnFavoriteIcon = require('../../assets/images/icons/heart-white-o.png');

export default class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      icon: UnFavoriteIcon,
    }
  }

  render() {
    let item = this.props.item;
    return (
      <TouchableOpacity
        style={this.props.style} 
        onPress={() => this.toggleFavorite(item)}
      >
        <Image 
            source={this.state.icon} 
            style={styles.heart_icon} 
        />
      </TouchableOpacity>
    );
  }
  
  toggleFavorite(item) {
    let active = this.state.active;
    let icon = active ? UnFavoriteIcon : FavoriteIcon;
    this.setState({active: !active, icon: icon});
  }
}

const styles = StyleSheet.create({
  heart_icon: {
    width: '100%',
    height: '100%',
  },
})