import { Dimensions } from 'react-native';
import Colors from '../../../../constants/Colors';

export default {
    header: {
        height: Dimensions.get('window').height * 0.4 - 20,
    },
    upload_avatar: {
        marginTop: '15%',
        borderRadius: 100,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 100,
    },
    back_button: {
        position: 'absolute', 
        top: 40, 
        left: 15,
    },
    arrow_left_icon: {
        width: 25,
        height: 25,
    },
    profile_form: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input_group: {
        width: '80%',
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
        marginTop: 5,
        paddingLeft: 5, 
        paddingRight: 5, 
        borderColor: Colors.pinkColor,
        borderBottomWidth: 1,
    },
    label: {
        width: '100%',
        fontSize: 12,
        color: Colors.pinkColor,
    },
    input: {
        width: '100%',
        fontSize: 15,
    },
    button_group: {
        width: '80%',
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
        marginTop: 10,
        marginBottom: 10,
    },
    save_button: {
        width: '100%',
        backgroundColor: Colors.pinkColor,
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
    },
    right_arrow: {
        width: 15,
        height: 15,
        marginLeft: 'auto',
        marginRight: 5,
    },
}