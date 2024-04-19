import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/todoList';

export default function App() {
  return (
    <TodoList/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
