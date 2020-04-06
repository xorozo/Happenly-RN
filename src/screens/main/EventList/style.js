import Colors from "../../../constants/Colors";

export default {
    back_button: {
        position: 'absolute', 
        top: 40, 
        left: 15,
    },
    arrow_left_icon: {
        width: 22,
        height: 22,
    },
    info_button: {
        position: 'absolute', 
        top: 40, 
        right: 15,
    },
    info_icon: {
        width: 25,
        height: 25,
    },
    venue_image: {
        width: 70,
        height: 55,
        borderRadius: 5,
        borderColor: Colors.blackColor,
        borderWidth: 1,
    },
    footer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: Colors.lightGrayColor,
        paddingTop: 10,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
}