import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
		setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				keyboardShouldPersistTaps="handled"
			>
				<View style={styles.taskWrapper}>
					<Text style={styles.sectionTitle}>Today's Task</Text>
					<View style={styles.items}>
						{taskItems.map((item, index) => {
							return (
								<TouchableOpacity
									key={index}
									onPress={() => completeTask(index)}
								>
									<Task text={item} />
								</TouchableOpacity>
							);
						})}
					</View>
				</View>
			</ScrollView>
			<KeyboardAvoidingView
				style={styles.writeTaskWrapper}
			>
				<TextInput elevation={5}
					style={styles.textInput}
					placeholder={"Write a task"}
					value={task}
					onChangeText={(text) => setTask(text)}
				/>
				<TouchableOpacity onPress={() => handleAddTask()}>
					<View elevation={10} style={styles.addWrapper}>
						<Text style={styles.addText}>+</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#6bc7fa",
	},
	taskWrapper: {
		paddingTop: 30,
		paddingHorizontal: 20,
		paddingVertical: 80
	},
	sectionTitle: {
		color: "#ffffff",
		fontSize: 30,
		fontWeight: "bold",
	},
	items: {
		marginTop: 20,
	},
	writeTaskWrapper: {
		position: "absolute",
		bottom: 20,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	textInput: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		backgroundColor: "#ffffff",
		borderRadius: 60,
		width: 250,
		shadowColor: "#000000",
	},
	addWrapper: {
		width: 60,
		height: 60,
		backgroundColor: "#ffffff",
		borderRadius: 60,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000000",
	},
	addText: {},
});
