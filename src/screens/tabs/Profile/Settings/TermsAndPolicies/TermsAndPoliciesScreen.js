import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../../../../constants/Colors';
import appStyles from '../../../../../styles/app-style';

class TermsAndPoliciesScreen extends React.Component {
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
              <Text style={styles.title}>Comming soon!</Text>
            </View>
          </ScrollView>
        );
    }
}

export default TermsAndPoliciesScreen;

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