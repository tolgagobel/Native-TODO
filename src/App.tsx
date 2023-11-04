import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import Todo from "./components/TodoCart/Todo";

const App = () => {

    const render = ({ item }: { item: any }) => <Todo todo={item} />;

    const [text, setText] = useState<string>("");

    const [list, setList] = useState<string[]>([]);

    function taskAdd() {
        setList([...list, text]);
        setText("");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.head_title}>YAPILACAKLAR</Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={list.map((item, index) => ({ id: index.toString(), item }))}
                    renderItem={render}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.button_container}>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    style={styles.textinput}
                    placeholder="Yapılacak...."
                    placeholderTextColor={'#fff'} />
                <TouchableOpacity style={styles.button} onPress={taskAdd}>
                    <Text style={styles.button_text}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#164863',
    },
    head_title: {
        fontSize: 35,
        margin: 10,
        fontWeight: 'bold',
        color: '#FFA500'
    },
    listContainer: {
        flex: 1,
    },
    button_container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#36474F',
    },
    textinput: {
        padding: 10,
        margin: 10,
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
        color: '#fff',
    },
    button: {
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#9BBEC8'
    },
    button_text: {
        color: '#fff'
    }
});
export default App;
