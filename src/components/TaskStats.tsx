import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TaskStatsProps {
  totalTasks: number;
  completedTasks: number;
}

const TaskStats: React.FC<TaskStatsProps> = ({totalTasks, completedTasks}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.statText}>
        Total Tasks: <Text style={styles.statValue}>{totalTasks}</Text>
      </Text>
      <Text style={styles.statText}>
        Completed: <Text style={styles.statValue}>{completedTasks}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  statText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  statValue: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '700',
  },
});

export default TaskStats;

