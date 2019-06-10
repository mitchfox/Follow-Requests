import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followRequest: ["John", "Jane", "Ram", "Janice"],
      following: ["Mike", "BigBoy", "Delta9999"],
    };
  }

  doFollow = (index) => {
    const { followRequest, following } = this.state;

    const followNew = followRequest.splice(index, 1);
    following.push(followNew);

    this.setState({
      followRequest,
      following
    })

  }


  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Home Screen</Text>
        <Text>You are following {this.state.following.length} Friends!</Text>
        <Button
          title={"Your Profile"}
          onPress={
            () => {
              this.props.navigation.navigate("Profile", {
                followRequest: this.state.followRequest,
                following: this.state.following,
                doFollow: this.doFollow,
              });
            }
          }
        />
        <Button
          title={"Follow Page"}
          onPress={
            () => {
              this.props.navigation.navigate("Follow", {
                followRequest: this.state.followRequest,
                following: this.state.following,
                doFollow: this.doFollow,
              });
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
