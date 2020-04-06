import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../../../../constants/Colors';
import appStyles from '../../../../../styles/app-style';

class AboutUsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
    render() {
        return (
          <ScrollView style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Welcome to the world's greatest ticket marketplace.</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.description}>
                At Happenly, our mission is simple: to provide fans a safe, 
                convenient place to get tickets to the games, 
                concerts, and shows they want to see.
                We've been doing it since 2019, and with this app you can 
                buy tickets or manage your listings anytime, anywhere.
              </Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.version}>Version: 1.0.0</Text>
            </View>
          </ScrollView>
        );
    }
}

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  header: {
    padding: 5,
  },
  title: {
    fontSize: 18,
  },
  body: {
    padding: 5,
  },
  description: {
    fontSize: 15,
  },
  footer: {
    padding: 5,
  },
  version: {
    fontSize: 15,
  },
})