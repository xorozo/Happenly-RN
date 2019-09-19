import { Dimensions } from 'react-native';
import Colors from '../../../../constants/Colors';

export default {
    profile_container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomColor: Colors.pinkColor,
        borderBottomWidth: 1,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 70,
        borderColor: Colors.pinkColor,
        borderWidth: 1,
    },
    profile_info: {
        paddingLeft: 15,
    },
    profile_text: {
        padding: 2,
    },
    settings_container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    settings_item: {
        width: '100%',
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
        paddingLeft: 5, 
        paddingRight: 5, 
        borderColor: Colors.pinkColor,
        borderBottomWidth: 1,
    },
    item_link: {
        padding: 15,
        width: '100%',
    },
    button_group: {
        width: '100%',
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
        padding: 10,
    },
    signout_button: {
        width: '100%',
        backgroundColor: Colors.pinkColor,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
}