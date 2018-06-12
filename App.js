
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  PixelRatio,
  Button,
  CameraRoll
} from 'react-native';
import Card from './src/components/Card'
import Header from './src/components/Header';
import ImagePicker from 'react-native-image-picker'
// import {Constants, takeSnapshotAsync} from 'expo'
import {captureScreen} from 'react-native-view-shot'




var capitureScreen = ()=>{
    
  captureScreen({
      format: "png",
      quality: 1,
      }).then(
      uri => CameraRoll.saveToCameraRoll(uri, 'photo'),
      error => console.error("Oops, snapshot failed", error)
       
      );
     
}
   



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ImageSource : 'null',
      ImageSourceTwo : 'null',
      pikachu : './assets/pikachu.png',
      cameraRollUri : 'null'
    }
  }


//Function for opening up Camera Roll and Selecting Image
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

      

        this.setState({

          ImageSource: source

        });
      }
    });
  }

  selectPhotoTappedTwo() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        

        this.setState({

          ImageSourceTwo: source

        });
      }
    });
  }


  render() {
    return (
      <View style = {styles.ViewStyle} > 
        <Header placeholderText = {'Before'}/>
        <TouchableOpacity  onPress={this.selectPhotoTapped.bind(this)}>
        <View style={styles.ImageContainer}>
 
         { this.state.ImageSource === null ? <Text>Select a Photo</Text> :
        <Image style={styles.ImageContainer} source={this.state.ImageSource} />
          }

        </View>
        </TouchableOpacity>
        <Header placeholderText = {'After'}/>
      <TouchableOpacity onPress={this.selectPhotoTappedTwo.bind(this)}>
      <View style={styles.ImageContainer}>
 
 { this.state.ImageSourceTwo === null ? <Text>Select a Photo</Text> :
<Image style={styles.ImageContainer} source={this.state.ImageSourceTwo} />
  }

</View>
      </TouchableOpacity>
      <Button title = 'Save' onPress = {capitureScreen}/>
      </View>
    );
  }
}


const styles = {
  ViewStyle : {
    justifyContent : 'center',
    alignItems : 'center',
    marginBottom : 60
  },

  ImageContainer: {
    borderRadius: 10,
    width: 250,
    height: 250,
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B3B3B3',
    
  },

}

