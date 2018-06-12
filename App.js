
import React, { Component } from 'react';
import {
<<<<<<< HEAD
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    PixelRatio,
    Button,
    CameraRoll,
    Dimensions
=======
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  PixelRatio,
  Button,
  CameraRoll,
  Dimensions
>>>>>>> aa4ad5b6cec68c25c266b3eab068d43d5fedf506
} from 'react-native';
import Card from './src/components/Card'
import Header from './src/components/Header';
import ImagePicker from 'react-native-image-picker'
// import {Constants, takeSnapshotAsync} from 'expo'
import { captureScreen } from 'react-native-view-shot'


<<<<<<< HEAD
var { height, width } = Dimensions.get('window')

var capitureScreen = () => {
    alert('Screenshot Successful!')
    captureScreen({
        format: "png",
        quality: 1,
    }).then(
        uri => CameraRoll.saveToCameraRoll(uri, 'photo'),
        error => console.error("Oops, snapshot failed", error)

    );

=======
var {height , width } = Dimensions.get('window')

var capitureScreen = ()=>{
  alert('Screenshot Successful!')
  captureScreen({
      format: "png",
      quality: 1,
      }).then(
      uri => CameraRoll.saveToCameraRoll(uri, 'photo'),
      error => console.error("Oops, snapshot failed", error)
       
      );
     
>>>>>>> aa4ad5b6cec68c25c266b3eab068d43d5fedf506
}




export default class App extends Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);

        this.state = {
            ImageSource: null,
            ImageSourceTwo: null,
            pikachu: './assets/pikachu.png',
            cameraRollUri: 'null'
        }
=======
  constructor(props) {
    super(props);

    this.state = {
      ImageSource : null,
      ImageSourceTwo : null,
      pikachu : './assets/pikachu.png',
      cameraRollUri : 'null'
>>>>>>> aa4ad5b6cec68c25c266b3eab068d43d5fedf506
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
<<<<<<< HEAD
    }


    render() {
        return (
            <View style={styles.ViewStyle} >
                <Header placeholderText={'Before'} deviceHeight={height} />
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View style={styles.ImageContainer}>

                        {this.state.ImageSource === null ? <Text>Select a Photo</Text> :
                            <Image style={styles.ImageContainer} source={this.state.ImageSource} />
                        }

                    </View>
                </TouchableOpacity>
                <Header placeholderText={'After'} />
                <TouchableOpacity onPress={this.selectPhotoTappedTwo.bind(this)}>
                    <View style={styles.ImageContainer}>

                        {this.state.ImageSourceTwo === null ? <Text>Select a Photo</Text> :
                            <Image style={styles.ImageContainer} source={this.state.ImageSourceTwo} />
                        }

                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={capitureScreen} >
                    <Image source={require('./assets/share.png')} style={{ height: 50, width: 50 }} />
                </TouchableOpacity>
            </View>
        );
    }
=======
      }
    });
  }


  render() {
    return (
      <View style = {styles.ViewStyle} > 
        <Header placeholderText = {'Before'} deviceHeight = {height}/>
        <TouchableOpacity  onPress={this.selectPhotoTapped.bind(this)}>
        <View style = {styles.ImageContainer}>
 
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
     <TouchableOpacity onPress = {capitureScreen} >
      <Image source = {require('./assets/share.png')} style = {{height : 50, width : 50}} />
      </TouchableOpacity>
      </View>
    );
  }
>>>>>>> aa4ad5b6cec68c25c266b3eab068d43d5fedf506
}


const styles = {
<<<<<<< HEAD
    ViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        marginBottom: 60,
        backgroundColor: '#EAEDED'
    },

    ImageContainer: {
        borderRadius: 10,
        width: 250,
        height: 250,
        borderColor: '#9B9B9B',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8F6F3',

    },
=======
  ViewStyle : {
    justifyContent : 'center',
    alignItems : 'center',
    height : height ,
    marginBottom : 60,
    backgroundColor : '#EAEDED'
  },

  ImageContainer: {
    borderRadius: 10,
    width: 250,
    height: 250,
    borderColor: '#9B9B9B',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F6F3',
    
  },
>>>>>>> aa4ad5b6cec68c25c266b3eab068d43d5fedf506

}

