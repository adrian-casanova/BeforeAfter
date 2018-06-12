import React from 'react';
import { Text, View, TextInput } from 'react-native';


const Header = (props) => {
<<<<<<< HEAD
    const { ViewStyle, TextStyle } = styles;
    const height = props.deviceHeight
    return (

        <View style={ViewStyle}>
            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={TextStyle} placeholder={props.placeholderText} />
=======
    const {ViewStyle, TextStyle} = styles;
    const height = props.deviceHeight
    return(

        <View style = {ViewStyle}> 
            <TextInput  underlineColorAndroid='rgba(0,0,0,0)' style = {TextStyle} placeholder = {props.placeholderText}/>
>>>>>>> aa4ad5b6cec68c25c266b3eab068d43d5fedf506
        </View>



    );
}

const styles = {
<<<<<<< HEAD
    ViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: this.height,
        borderWidth: 2,


    },

    TextStyle: {
        fontSize: 24,
        height: 45,
        width: 300,

        textAlign: 'center',
        backgroundColor: '#D6EAF8'
=======
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
>>>>>>> aa4ad5b6cec68c25c266b3eab068d43d5fedf506
    }

}

export default Header