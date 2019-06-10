import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Profile extends React.Component {


  render() {
      
    const followerCount = this.props.navigation.getParam("following", "0");
    const friendRequests = this.props.navigation.getParam("followRequest", "0")

    return (
      <View style={styles.container}>
        <View>
            <Text>Your Profile</Text>
            <Text>Following: {followerCount.length}</Text>
            <Text>Friend Requests: {friendRequests.length}</Text>
            <Button 
            title={"Accept Requests"}
            onPress={
                () => {
                  this.props.navigation.navigate("Follow");
                }
              }
            
            
            />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
