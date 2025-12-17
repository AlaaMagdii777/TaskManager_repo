import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {Task} from '../types/Task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({task, onToggle, onDelete}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => onToggle(task.id)}>
        <View style={styles.taskContent}>
          <View
            style={[
              styles.checkbox,
              task.completed && styles.checkboxCompleted,
            ]}
          />
          <Text
            style={[
              styles.taskText,
              task.completed && styles.taskTextCompleted,
            ]}>
            {task.text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginRight: 12,
    backgroundColor: '#fff',
  },
  checkboxCompleted: {
    backgroundColor: '#007AFF',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TaskItem;

