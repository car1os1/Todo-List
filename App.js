import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Keyboard } from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([]);



  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)

  }


  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy);
  }




  return (
    <View style={styles.container}>




      {/*today's task*/}
      <View style={styles.tasksWrapper}>

        <Text style={styles.secctionTitle}>Today's Tasks</Text>


        <View style={styles.items}>
          {/*this is where the tasks will go*/}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  < Task text={item} />
                </TouchableOpacity>
              )

            })
          }
          {/*<Task text={'tarea 1'} />
          <Task text={'tarea 2'} >*/}
        </View>
      </View>



      {/* write a task */}
      <KeyboardAvoidingView behaivor={Platform.OS === 'android' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'write the task'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText} >+</Text>

          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  secctionTitle: {
    fontSize: 24,
    fontWeight: '700'
  },
  items: {
    marginTop: 30
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'


  },
  input: {

    paddingHorizontal: 20,
    backgroundColor: '#F1C40F',
    borderRadius: 60,
    borderColor: '#B3B6B7',
    borderWidth: 1,
    width: 270
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#B3B6B7',
    borderWidth: 1

  },
  addText: {
    fontWeight: 'bold',

  }




});
