import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { styles } from '../Style/LoginMainCss'
import logo from '../../assets/Logo3.png'
import { Image } from 'react-native'


const LoginMain = () => {
    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    return (
        <View style={styles.viewContainer}>
            <View style={styles.ImageView}>
                <Image style={styles.logoImage} source={logo} />
            </View>
            <View style={styles.topTextPrivacy}>
                <Text style={styles.privacyText}>By Signing in you are agreeing our {"\n"}
                    <Text style={styles.TermsTextColor}> Term and privacy policy</Text>
                </Text>
            </View>
            <View style={styles.row}>
                <View style={styles.column1}>
                    <Text style={styles.text1}>Login</Text>
                </View>
                <View style={styles.column2}>
                    <Text style={styles.text2}>Register</Text>
                </View>
            </View>
            <View>
                <View style={styles.inputMail}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
                <View style={styles.inputPassword}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
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

export default LoginMain