import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({onAddTask}) => {
  const [inputText, setInputText] = useState('');

  const handleAdd = () => {
    if (inputText.trim()) {
      onAddTask(inputText.trim());
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new task..."
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={handleAdd}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginRight: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TaskInput;

