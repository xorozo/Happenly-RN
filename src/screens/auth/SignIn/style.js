import { Dimensions } from 'react-native';
import Colors from '../../../constants/Colors';

export default {
  container: {
    height: '100%',
    flexDirection: 'column',
  },
  logo_container: {
    height: Dimensions.get('window').height * 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7 * 0.3,
  },
  signup_form: {
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'center',
  },
  form_group: {
    width: '80%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: Colors.whiteColor,
    borderBottomWidth: 1,
    paddingTop: 10,
  },
  input_label: {
    width: '100%',
    fontSize: 12,
    color: Colors.whiteColor,
  },
  text_input: {
    width: '100%',
    fontSize: 15,
    color: Colors.whiteColor,
  },
  signup_button: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: 40,
    backgroundColor: Colors.whiteColor,
    color: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
}