import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import appStyles from '../styles/app-style';

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    }
  }

  render() {
    let item = this.props.item;
    return (
      <TouchableOpacity
        style={[styles.category_item, this.state.active && styles.category_item_active]} 
        onPress={() => this.toggleCategory(item)}
      >
        <Text style={[styles.category_text, this.state.active && styles.categroy_text_active]}>{item.name}</Text>
      </TouchableOpacity>
    );
  }
  
  toggleCategory(item) {
    let active = this.state.active;
    this.setState({active: !active});
  }
}

const styles = StyleSheet.create({
  category_item: {
    height: 25,
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  category_item_active: {
    backgroundColor: Colors.tintColor,
    fontSize: 15,
  },
  category_text: {
    color: Colors.tintColor,
    fontWeight: 'bold',
    fontSize: 15,
  },
  categroy_text_active: {
    color: Colors.whiteColor,
    fontSize: 15,
  },
})