import { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Button, View } from "react-native";

export default class Counter extends Component {
  state = {
    count: 0,
  };
    incrimentar() {
        this.setState({ count: this.state.count + 1});
    };
    decrementar() {
        this.setState({ count: this.state.count - 1})
    };
  render() {
    return (
      <View style={styles.contador}>
        <Text> Contador : {this.state.count} </Text>
        <Button onPress={() => this.incrimentar ()} title="+" />
        <Button onPress={() => this.decrementar()} title="-" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contador: {
        flexDirection: 'row'
    }
})
