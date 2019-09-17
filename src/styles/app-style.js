import Colors from "../constants/Colors";

export default {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    col_container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row_container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    borderTop: {
      borderTopColor: '#fff',
      borderTopWidth: 1,
    },
    borderBottom: {
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
    }, 
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    light_shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
    },
    strong_shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    w_100: {
      width: '100%',
    },
    h_100: {
      height: '100%',
    },
    white: {
      color: '#fff',
    },
    black: {
      color: '#000',
    },
    primary: {
      color: '#6c4ff8',
    }, 
    silver: {
      color: '#dcdcdc',
    }, 
    gray: {
      color: '#808080',
    },
    pink: {
      color: Colors.pinkColor,
    },
    font_xl: {
      fontSize: 22,
    },
    font_lg: {
      fontSize: 18,
    },
    font_md: {
      fontSize: 15,
    },
    font_sm: {
      fontSize: 12,
    },
    font_bold: {
      fontWeight: 'bold',
    },
    hidden: {
      display: 'none',
    },
    test_border: {
      borderColor: '#0f0',
      borderWidth: 1,
    },
  }