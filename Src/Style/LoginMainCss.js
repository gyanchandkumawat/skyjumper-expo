
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: "#fff"
    },
    logoImage: {
        marginTop: 70,
        width: 170,
        height: 110,

    },
    ImageView: {
        alignItems: "center",
    },
    loginButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 100,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#F69131',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F69131',

    },
    loginText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    middleView: {
        backgroundColor: '#fff',
        height: 150,
        borderTopEndRadius: 0,
        borderBottomEndRadius: 50,
        borderTopStartRadius: 0,
        borderBottomStartRadius: 50,
    },
    bottomDesign: {
        backgroundColor: '#F69131',
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 200,
    },
    container: {
        flex: 1,
    },
    topTextPrivacy: {
        alignItems: "center",
        marginTop: 20
    },
    privacyText: {
        textAlign: "center"
    },
    TermsTextColor: {
        color: "#0386D0"
    },
    inputMail: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 50,
        paddingTop: 10,
        paddingBottom: 3,
        borderRadius: 0,
        borderTopColor: 0,
        borderLeftColor: 0,
        borderRightColor: 0,
        borderWidth: 2,
        borderColor: '#F69131',
    },
    inputPassword: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 3,
        borderRadius: 0,
        borderTopColor: 0,
        borderLeftColor: 0,
        borderRightColor: 0,
        borderWidth: 2,
        borderColor: '#F69131',
    },
    row: {
        flexDirection: 'row',
        marginTop:30,
      },
      column1: {
        flex: 1,
        paddingLeft: 10,
        borderColor: 'black',
        marginLeft: 70,
      },
      column2: {
        flex: 1,
        paddingRight: 10,
        borderColor: 'black',
        marginRight: 70,
      },
      text1: {
        fontSize: 17,
        fontWeight:500,
        textAlign: 'center',
        color:"#009DDB",
      },
      text2: {
        fontSize: 17,
        fontWeight:500,
        textAlign: 'center',
      },
})