import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = props => <Text tyle={{...styles.body,...props.style}}>{props.children}</Text>;

const styles = StyleSheet.create({
    body: {
        color:'black',
        fontFamily:'open-sans'
    }
});

export default BodyText;