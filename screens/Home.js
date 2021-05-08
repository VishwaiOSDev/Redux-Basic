import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';

function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>This is {props.user.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  user: state.user,
});

const connectComponent = connect(mapStateToProps);

export default connectComponent(Home);
