import {Dimensions} from 'react-native';
import Colors from "../../../constants/Colors";

export default {
    container: {
      flex: 1,
    },
    search_container: {
      position: 'absolute',
      zIndex: 1,
      width: '100%',
      height: 110,
      top: 0,
      backgroundColor: Colors.whiteColor,
      paddingTop: 24,
      paddingLeft: 20,
      paddingRight: 20,
    },
    search_input_container: {
      width: '100%',
      marginTop: 10,
      backgroundColor: Colors.whiteSmoke,
      borderRadius: 5,
    },
    search_icon: {
      position: 'absolute',
      width: 22,
      height: 22,
      marginTop: 5,
      marginLeft: 7,
      zIndex: 2,
    },
    search_input: {
      width: '100%',
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 35,
      paddingRight: 10,
      fontSize: 16,
      color: Colors.grayColor,
    },
    category_container: {
      paddingTop: 10,
    },
    results_container: {
      position: 'absolute',
      height: Dimensions.get('window').height * 0.35,
      width: '100%',
      zIndex: 1,
      bottom: 0,
    },
    events_list_card: {
      backgroundColor: Colors.whiteColor,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginLeft: 7,
      marginRight: 7,
    },
    events_list: {
      height: Dimensions.get('window').height * 0.35 - 22,
    },
    toggle_hide_button_container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    toggle_hide_button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 22,
      paddingTop: 2,
    },
    down_arrow_icon: {
      width: 30,
      height: 30,
    },
}