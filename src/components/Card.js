import React from 'react';
import {Text , View, Image } from 'react-native';

const Card = (props) => {
    const {ViewStyle , ImageStyle} = styles;
    
    return(
        <View style = {ViewStyle} > 
            <Image source = {props.imageSource} style = {ImageStyle}/>
         </View>

    );
}

const styles = {
    ViewStyle : {
        justifyContent : 'center',
        alignItems: 'center',
        borderWidth : 2
    },
    ImageStyle : {
        height: 350, 
        width : 350
    }
    


}

export default Card;