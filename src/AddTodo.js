import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';

export const AddTodo = props => {
    const [value, setValue] = useState('');
    const pressHandler = () => {
        if (value.trim()) {
            props.onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Поле не может быть пустым')
        }

    }
    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                       onChangeText={setValue}
                       value={value}
                       placeholder='Введите название дела'
                       //autoCorrect={false}
                       //autoCapitalize={false}
                       //keyBoardType='number-pad'

            />
            <Button style={styles.button} title='Добавить' onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    },
    button: {}
});