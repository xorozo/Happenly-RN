import React from 'react';
import { ImageBackground, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, StyleSheet } from 'react-native';
import appStyles from '../../styles/app-style';
import Spinner from 'react-native-loading-spinner-overlay';
import Geo from '../../apis/Geo';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spinner: false,
      isLoadingComplete: false,
    }
  }

  componentDidMount() {
    this.props.spinner = true;
    this.setState({spinner: true});
    navigator.geolocation.getCurrentPosition(
        (position) => {
            global.my_location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null,
            };
            this.setState({spinner: false});
            // console.log('=====>>>>>', global.my_location);
            this.enterAuth();
        },
        (error) => {
            global.my_location = {
                latitude: null,
                longitude: null,
                error: error.message,
            };
            this.setState({spinner: false});
            // console.log('=====>>>>>', global.my_location);
            this.enterAuth();
        },
        {
            enableHighAccuracy: false,
            timeout: 200000,
            maximumAge: 1000
        }
    );
  }

  enterApp = () => {
    this.props.navigation.navigate('App');
  }

  enterAuth = () => {
    this.props.navigation.navigate('Auth');
  }

  // === === //
    render() {
        return (
          // <ImageBackground source={require('../../../assets/images/splash.png')} style={appStyles.container}>
            <Spinner
              visible={this.state.spinner}
              textContent={'Loading...'}
              textStyle={styles.spinnerTextStyle}
            />
          // </ImageBackground>
        );
    }

    // === === //
}

export default LoadingScreen;

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});