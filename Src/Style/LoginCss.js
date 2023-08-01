
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewContainer:{
        backgroundColor:"#fff"
    },
    textStyle: {
        fontSize: "3px",
    },
    topMonkeyImage: {
        width: 200,
        height: 180
    },
    logoImage: {
        marginTop: 70,
        width: 170,
        height: 110,

    },
    ImageView: {
        alignItems: "center",
    },
    RegisterButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 180,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F69131',

    },
    loginButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 20,
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
        paddingBottom:200,
    },
    container: {
        flex: 1,
    },
})