import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

export const MemorizationToolsScreen = () => {
  const [completedNames, setCompletedNames] = useState(0);
  const [currentDay, setCurrentDay] = useState(1);
  const [dailyGoal, setDailyGoal] = useState(4);
  const [memorizedNames, setMemorizedNames] = useState([]);
  const [isReminderOn, setIsReminderOn] = useState(false);
  
  const handleDailyGoalCompletion = () => {
    const newNames = Array.from({ length: dailyGoal }, () => 'New Name');
    setMemorizedNames([...memorizedNames, ...newNames]);
    setCompletedNames(completedNames + dailyGoal);
    setCurrentDay(currentDay + 1);
  };


  const handleDailyGoalChange = (value) => {
    setDailyGoal(value);
  };

  const handleReminderChange = () => {
    setIsReminderOn(!isReminderOn);
  };

  const handleAddName = () => {
    setMemorizedNames([...memorizedNames, 'New Name']);
  };

  return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Daily Goal:</Text>
        <View style={styles.row}>
          <Text style={styles.label}>4 Names per day (recommended)</Text>
          <Switch value={dailyGoal === 4} onValueChange={() => handleDailyGoalChange(4)}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>6 Names per day</Text>
          <Switch value={dailyGoal === 6} onValueChange={() => handleDailyGoalChange(6)}/>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Custom:</Text>
          <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={dailyGoal.toString()}
              onChangeText={handleDailyGoalChange}
          />
        </View>
        <Text style={styles.sectionTitle}>Reminder:</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Turn on daily reminder</Text>
          <Switch value={isReminderOn} onValueChange={handleReminderChange}/>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.progressLabel}>Progress:</Text>
          <ProgressBar
              progress={completedNames / 99}
              width={200}
              height={10}
              color="#1e90ff"
          />
          <Text style={styles.progressText}>{completedNames}/99 Names</Text>
        </View>
        <TouchableOpacity
            style={styles.button}
            onPress={handleDailyGoalCompletion}
        >
          <Text style={styles.buttonText}>Complete Daily Goal</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Today's Names:</Text>
        <View style={styles.namesContainer}>
          {memorizedNames.map((name) => (
              <Text key={name.id} style={styles.name}>
                {name.name}
              </Text>
          ))}
        </View>
      </View>
  );

}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 8,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    label: {
      fontSize: 16,
      marginRight: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 8,
      width: 50,
      textAlign: 'center',
    },
    addButton: {
      backgroundColor: '#2c3e50',
      borderRadius: 4,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginTop: 16,
      marginBottom: 8,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    memorizedName: {
      fontSize: 16,
      marginBottom: 8,
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    progressLabel: {
      fontSize: 16,
      marginRight: 8,
    },
    progressText: {
      fontSize: 16,
      marginLeft: 8,
    },
    namesContainer: {
      marginTop: 16,
      marginBottom: 8,
    },
    name: {
      fontSize: 18,
      marginBottom: 8,
    },
  });



