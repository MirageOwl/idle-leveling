import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

class Hero extends Component {
  render() {

    return (
      <View style={{alignItems: 'center'}}>
        <Image source={this.props.image} style={{width: 140, height: 140}}/>
        <Text>Hero: {this.props.name}</Text>
        <Text>Rank: {this.props.rank}</Text>
      </View>
    );
  }
}

export default class HelloApp extends Component {
  render() {
    let img_rexxar = {
      uri: 'https://res.cloudinary.com/heroespatches/image/upload/v1483417096/hero/rexxar.jpg'
    };
    let img_jaina = {
      uri: 'https://res.cloudinary.com/heroespatches/image/upload/v1483416716/hero/jaina.jpg'
    };
    let img_valeera = {
      uri: 'https://media.licdn.com/dms/image/C4E03AQHzpNFp0SepJQ/profile-displayphoto-shrink_200_200/0?e=1564617600&v=beta&t=RvX4Zfnge2VU7T_3WuBZe-gLiwPap5J4bDRNiAXbTR8'
    };
    return (

      <View style={{alignItems: 'center', top: 50}}>
        <Hero name='Rexxar' rank='C' image={img_rexxar}/>
        <Hero name='Jaina' rank='A' image={img_jaina}/>
        <Hero name='Valeera' rank='B' image={img_valeera}/>
      </View>
    );
  }
}
AppRegistry.registerComponent('react-demo', () => HelloApp);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
