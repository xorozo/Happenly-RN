import React from 'react';
import { ImageBackground, ScrollView, Image, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import appStyles from '../../../styles/app-style';
import styles from './style';

class SiginInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
  render() {
      return (
        <ImageBackground 
          source={require('../../../../assets/images/backgrounds/bg-auth.png')} 
          style={styles.container}
        >
          <KeyboardAvoidingView 
            behavior="height" 
            enabled
          >
            <ScrollView>
              <View style={styles.logo_container}>
                <Image 
                  source={require('../../../../assets/images/logo-white.png')} 
                  style={styles.logo}>
                </Image>
              </View>
              <View style={styles.signup_form}>
                <View style={styles.form_group}>
                  <Text style={styles.input_label}>Email</Text>
                  <TextInput style={styles.text_input} 
                    maxLength={40} 
                    // placeholder='Email'
                  ></TextInput>
                </View>
                <View style={styles.form_group}>
                  <Text style={styles.input_label}>Password</Text>
                  <TextInput style={styles.text_input} 
                    maxLength={40} 
                    // placeholder='Password'
                    autoCompleteType='password' 
                    secureTextEntry={true} 
                  ></TextInput>
                </View>
                <View style={styles.form_group}>
                  <TouchableOpacity 
                    onPress={() => this.signUp()} 
                    style={styles.signup_button}
                  >
                    <Text style={[appStyles.primary, appStyles.font_md]}>Sign In</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={[appStyles.silver, appStyles.font_sm, {paddingTop: 2}]}>Not a member? </Text>
                  <TouchableOpacity 
                    onPress={() => this.goSignInScreen()}
                  >
                    <Text style={appStyles.white}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>
      );
  }

  // === === //
  signUp = () => {
    this.props.navigation.navigate('App');
  }

  goSignInScreen = () => {
    this.props.navigation.navigate('SignUp');
  }
}

export default SiginInScreen;