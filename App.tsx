import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
} from 'react-native';
import TaskInput from './src/components/TaskInput';
import TaskItem from './src/components/TaskItem';
import TaskStats from './src/components/TaskStats';
import {Task} from './src/types/Task';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date?.now()?.toString(),
      text,
      completed: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(prevTasks =>
      prevTasks?.map(task =>
        task?.id === id ? {...task, completed: !task?.completed} : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Task Manager</Text>
      </View>
      <TaskInput onAddTask={addTask} />
      <TaskStats totalTasks={tasks.length} completedTasks={completedTasks} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TaskItem
            task={item}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No tasks yet. Add one above!</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default App;

