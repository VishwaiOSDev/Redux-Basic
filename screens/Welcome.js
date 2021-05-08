import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';

import {connect} from 'react-redux';

function Welcome(props) {
  const [name, setName] = useState();

  const handlePress = () => {
    props.addUser(name);
    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Hello {props.user.username}</Text>
      <TextInput
        style={styles.input}
        placeholder="What should we call you?"
        onChangeText={text => setName(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={{color: 'white'}}>ENTER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: 'dodgerblue',
    width: '100%',
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    padding: 12,
    backgroundColor: 'lightgrey',
    borderRadius: 26,
    width: '100%',
    marginVertical: 20,
  },
});

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispactToProps = dispatch => ({
  addUser: username =>
    dispatch({
      type: 'ADD_USER',
      payload: {
        username: username,
      },
    }),
});

const connectComponent = connect(mapStateToProps, mapDispactToProps);

export default connectComponent(Welcome);
