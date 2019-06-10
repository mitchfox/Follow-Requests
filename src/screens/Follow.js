import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Follow extends React.Component {


  render() {

    const followRequest = this.props.navigation.getParam("followRequest", "0");
    const followerCount = this.props.navigation.getParam("following", "0");
    const doFollow = this.props.navigation.getParam("doFollow", "");

    return (
      <View style={styles.container}>
        <Text>Friend Requests</Text>
        <Text>Follower Count: {followerCount.length}</Text>
        {/* List of Friend Requests */}
        {
          followRequest.map((frn, index) => (
            <Button
              key={frn}
              title={`Follow ${frn}`}
              onPress={() => {
                doFollow(index);
                this.forceUpdate();
              }}
            />
          ))
        }


        <Button
          title={"Return to Home Screen"}
          onPress={
            () => {
              this.props.navigation.navigate("Home");
            }
          }
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  },
});
