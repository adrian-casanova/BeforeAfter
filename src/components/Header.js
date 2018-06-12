import React from 'react';
import {Text, View, TextInput } from 'react-native';


const Header = (props) => {
    const {ViewStyle, TextStyle} = styles;
    return(

        <View style = {ViewStyle}> 
            <TextInput style = {TextStyle} placeholder = {props.placeholderText}/>
        </View>



    );
}

const styles = {
    ViewStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 20,
        borderWidth: 2,
        
    },

    TextStyle : {
        fontSize : 24,
       width : 300,
       textAlign : 'center'
    }

}

export default Header