import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, Button } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';


const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <TitleText style={{fontFamily:'open-sans-bold'}}>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                source={require('../assets/images/success.png')} 
                style={styles.image}
                resizeMode="cover"/>
            </View>
            <View style={styles.resultText}>
            <BodyText style={styles.bodyText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            </View>
            <MainButton onPress={props.onRestart}>New Game</MainButton>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    imageContainer:{
        width:'80%',
        marginVertical:30,
        height:300,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    resultText:{
        textAlign:'center',
        marginVertical:20,
        marginHorizontal:20,
    },
    highlight:{
        color:'red',
    },
    bodyText:{
        fontSize:30
    }
});

export default GameOverScreen;