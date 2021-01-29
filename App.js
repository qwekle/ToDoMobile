// https://www.youtube.com/watch?v=7KwtXNoYQEY&list=WL&index=6&t=2052s&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
// react-native
// mobile ToDo

import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Navbar} from './src/Navbar';
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {
    const [todos, setTodos] = useState([
        // {id: 1, title: 'test'},
        // {id: 2, title: 'test'},
        // {id: 3, title: 'test'},
        // {id: 4, title: 'test'},
        // {id: 5, title: 'test'},
        // {id: 6, title: 'test'},
        // {id: 7, title: 'test'},
        // {id: 8, title: 'test'},
        // {id: 9, title: 'test'},
        // {id: 10, title: 'test'},
        // {id: 11, title: 'test'},
        // {id: 12, title: 'test'},
        // {id: 13, title: 'test'},
        // {id: 14, title: 'test'},
        // {id: 15, title: 'test'},
        // {id: 16, title: 'test'},
        // {id: 17, title: 'test'},
        // {id: 18, title: 'test'},
        // {id: 19, title: 'test'},
        // {id: 20, title: 'test'},
        // {id: 21, title: 'test'},
        // {id: 22, title: 'test'},
        // {id: 23, title: 'test'},
    ])
    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }
    const addTodo = (title) => {
        const newTodo = {
            id: Date.now().toString(),
            title: title
        }

        //setTodos(todos.concat([ newTodo ]))
        // setTodos((prevTodos) => {
        //     return [
        //         ...prevTodos,
        //         newTodo
        //     ]
        // })
        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title
            }
        ])
    }
    return (
        <View>
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>
                <FlatList
                    keyExtractor={item => (item.id)}
                    data={todos}
                    renderItem={({item}) => (<Todo todo={item} onRemove={removeTodo}/>)}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

});
