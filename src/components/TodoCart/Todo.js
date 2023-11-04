import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from './Todo.style';

const Todo = (props) => {
    return (
       <View style={styles.container}>
        <Text style={styles.text}>{props.todo.item}</Text>
       </View>

    );
};
export default Todo;
