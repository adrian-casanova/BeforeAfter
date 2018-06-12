import React from 'react';
import {Text, View, TextInput } from 'react-native';


const Header = (props) => {
    const {ViewStyle, TextStyle} = styles;
    const height = props.deviceHeight
    return(

        <View style = {ViewStyle}> 
            <TextInput  underlineColorAndroid='rgba(0,0,0,0)' style = {TextStyle} placeholder = {props.placeholderText}/>
        </View>



    );
}

const styles = {
    ViewStyle : {
        justifyContent : 'center',
        alignItems : 'center',
       marginBottom : this.height ,
        borderWidth: 2,
        
        
    },

    TextStyle : {
        fontSize : 24,
        height : 45,
       width : 300,
       
       textAlign : 'center',
       backgroundColor : '#D6EAF8'
    }

}

export default Header