import React from 'react'
import {  Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Style/LoginCss';
import MonkeyImage from '../../assets/MonkeyImage.png'
import logo from '../../assets/Logo3.png'

const Login = ({navigation}) => {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.ImageView}>
                <Image style={styles.topMonkeyImage} source={MonkeyImage} />
            </View>
            <View style={styles.ImageView}>
                <Image style={styles.logoImage} source={logo} />
            </View>
            <View>
                <TouchableOpacity style={styles.RegisterButton}  >
                    <Text style={styles.loginText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton}  onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.bottomDesign}>
                    <View style={styles.middleView}>

                    </View>
                </View>
            </View>
        </View>
    )
}



export default Login